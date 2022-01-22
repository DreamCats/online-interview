from crypt import methods
from interview.api_1_0 import api, user
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import Items, UserLikeItem
from interview.utils.common import getUUID

@api.route('/items/list', methods=['GET'])
def get_items_list():
    '''查找
    :param  page: 页码
            count: 数量
            tc_uuid: tc_uuid
    '''
    tc_uuid = request.args.get('tc_uuid', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 参数判断省略
    # 查找
    try:
        items_pages = Items.query.filter(Items.tc_uuid == tc_uuid).order_by(Items.s_id).paginate(int(page), 
                                                int(count), error_out=False)
        ars = items_pages.items
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(ars) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    ars_list = []
    for ar in ars:
        ars_list.append(ar.to_dict())
    
    items_info = {
        'data': ars_list,
        'current_items': len(ars_list),
        'current_page': items_pages.page,
        'total': items_pages.total,
        'pages': items_pages.pages,
        'has_next': items_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=items_info)

@api.route('/items/count', methods=['GET'])
def add_item_count():
    uuid = request.args.get('uuid', '0')
    try:
        a = Items.query.filter(Items.uuid == uuid).first()
        rows_changed = Items.query.filter_by(uuid=uuid).update(dict(view_count=a.view_count+1))
        db.session.commit()
    except Exception as e:
        current_app.logger.debug('get_article_info', e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if a is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=a.to_dict())

@api.route('/items/likecount/add', methods=['GET'])
def add_item_like_count():
    item_uuid = request.args.get('item_uuid', '0')
    user_uuid = request.args.get('user_uuid', '0')
    try:
        # item like + 1
        a = Items.query.filter(Items.uuid == item_uuid).first()
        rows_changed = Items.query.filter_by(uuid=item_uuid).update(dict(like_count=a.like_count+1))
        # like_user 
        likeItem = UserLikeItem()
        likeItem.item_id = item_uuid
        likeItem.user_id = user_uuid
        likeItem.uuid = str(getUUID(item_uuid + user_uuid))
        db.session.add(likeItem)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug('get_items_info', e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if a is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=a.to_dict())

@api.route('/items/likecount/remove', methods=['GET'])
def remove_item_like_count():
    item_uuid = request.args.get('item_uuid', '0')
    user_uuid = request.args.get('user_uuid', '0')
    try:
        # item like + 1
        a = Items.query.filter(Items.uuid == item_uuid).first()
        rows_changed = Items.query.filter_by(uuid=item_uuid).update(dict(like_count=a.like_count-1))
        # like_user 
        b = UserLikeItem.query.filter_by(item_id=item_uuid, user_id=user_uuid).first()
        db.session.delete(b)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug('get_items_info', e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if a is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=a.to_dict())


@api.route('/items/like', methods=['GET'])
def get_items_like_list():
    '''查找
    :param  page: 页码
            count: 数量
            user_uuid: user_uuid
    '''
    user_uuid = request.args.get('user_uuid', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 参数判断省略
    # 查找
    try:
        likes_pages = UserLikeItem.query.filter(UserLikeItem.user_id == user_uuid).order_by(UserLikeItem.id).paginate(int(page), 
                                                int(count), error_out=False) 
        likes = likes_pages.items
        if len(likes) == 0:
            return jsonify(re_code=RET.NODATA, msg='没有数据')

        items = []
        for l in likes:
            item = Items.query.filter(Items.uuid == l.item_id).first()
            if item:
                items.append(item.to_dict())
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    
    items_info = {
        'data': items,
        'current_items': len(likes),
        'current_page': likes_pages.page,
        'total': likes_pages.total,
        'pages': likes_pages.pages,
        'has_next': likes_pages.has_next
    }
    print(items_info)
    return jsonify(re_code=RET.OK, msg='请求成功', data=items_info)

# @api.route('/items/info', methods=['GET'])
# def get_kw_info():
#     '''获取面经详细信息
#     :param id
#     '''
#     a_id = request.args.get('id', '0')

#     # 暂时不校验参数了

#     try:
#         a = Article.query.filter(Article.id == int(a_id)).first()
#         rows_changed = Article.query.filter_by(id=a.id).update(dict(count=a.count+1))
#         db.session.commit()
#     except Exception as e:
#         current_app.logger.debug('get_article_info', e)
#         db.session.rollback()
#         return jsonify(re_code=RET.DBERR, msg='数据库查询错误')


#     if a is None:
#         return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
#     return jsonify(re_code=RET.OK, msg='请求成功', data=a.to_dict())