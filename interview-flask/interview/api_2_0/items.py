from crypt import methods
from operator import truth
from interview.api_2_0 import api, user
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import Items, UserLikeItem, Tag, Cp, PublishItem, User
from interview.utils.common import getUUID, save_data
from sqlalchemy import func
import time

@api.route('/items/list', methods=['GET'])
def get_items_list():
    save_data('wx_pv')
    save_data('items_list')

    tc_uuid = request.args.get('tc_uuid', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 查找
    try:
        items_pages = Items.query.filter(Items.tc_uuid == tc_uuid)\
        .filter(Items.blog_status == 0)\
        .order_by(Items.s_id)\
        .order_by(Items.publish_time.desc()).paginate(int(page), 
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

    save_data('wx_pv')
    save_data('items_detail')

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

    save_data('wx_pv')
    save_data('add_like_count')

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

    save_data('wx_pv')
    save_data('remove_like_count')

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

    save_data('wx_pv')
    save_data('get_like_count')

    user_uuid = request.args.get('user_uuid', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 查找
    try:
        # 分页查找likes
        likes_pages = UserLikeItem.query.filter(UserLikeItem.user_id == user_uuid).order_by(UserLikeItem.id).paginate(int(page), 
                                                int(count), error_out=False) 
        likes = likes_pages.items
        if len(likes) == 0:
            return jsonify(re_code=RET.NODATA, msg='没有数据')

        items = []
        for l in likes:
            # 找对应的item详细信息
            item = Items.query.filter(Items.uuid == l.item_id).first()

            if item:
                # 找对应item的tag详细信息
                tag = Tag.query.filter(Tag.uuid == item.tc_uuid).first()
                url = ''
                t = ''

                if tag:
                    url = tag.url
                    t = tag.tag_name
                else:
                    # 找对应mj
                    cp = Cp.query.filter(Cp.uuid == item.tc_uuid).first()
                    if cp:
                        url = cp.url
                        t = cp.cp_name
                items.append(
                    {
                        'img_url':url,
                        'tag':t,
                        'item':item.to_dict()
                    }
                )

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

    return jsonify(re_code=RET.OK, msg='请求成功', data=items_info)

@api.route('/items/rand', methods=['GET'])
def get_items_rand():

    save_data('wx_pv')
    save_data('items_rand')
    # 随机生成
    count = request.args.get('count', '10')
    tag_type = request.args.get('tag_type', '0')

    items = ''

    if tag_type == '0':
        items = Items.query.filter(Items.tag_type != int(tag_type), Items.blog_status == 0).order_by(func.rand()).limit(int(count))
    elif tag_type == '1' or tag_type == '2':
        # tag_type 3 是公共基础题
        items = Items.query.filter(((Items.tag_type == tag_type) | (Items.tag_type == 3)) * (Items.blog_status == 0) ).order_by(func.rand()).limit(int(count))
    else:
        items = Items.query.filter(Items.tag_type == int(tag_type) & (Items.blog_status == 0)).order_by(func.rand()).limit(int(count))

    datas = []

    for item in items:
        # 找对应item的tag详细信息
        tag = Tag.query.filter(Tag.uuid == item.tc_uuid).first()
        url = ''
        t = ''

        if tag:
            url = tag.url
            t = tag.tag_name
        else:
            # 找对应mj
            cp = Cp.query.filter(Cp.uuid == item.tc_uuid).first()
            if cp:
                url = cp.url
                t = cp.cp_name
        datas.append(
            {
                'img_url':url,
                'tag':t,
                'item':item.to_dict()
            }
        )
        
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)

@api.route('/item/update', methods=['POST'])
def update_item():
    '''
    '''
    data = request.get_json()
    item_uuid = data.get('uuid')
    item_title = data.get('title')
    item_content = data.get('content')
    item_abstract = data.get('abstract')
    item_tag_type = data.get('tag_type')

    item = Items.query.filter(Items.uuid == item_uuid).first()
    db.session.commit()

    if not item:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    item.title = item_title
    item.content = item_content
    item.abstract = item_abstract
    item.tag_type = item_tag_type
    db.session.commit()

    return jsonify(re_code=RET.OK, msg='请求成功')

@api.route('/item/add', methods=['POST'])
def add_item():
    '''
    '''
    data = request.get_json()
    item_title = data.get('title')
    item_content = data.get('content')
    item_abstract = data.get('abstract')
    item_tag_type = data.get('tag_type')
    item_tc_uuid = data.get('tc_uuid')

    item = Items()

    item.uuid = getUUID(item_title + str(item_tag_type))
    item.abstract = item_abstract
    item.title = item_title
    item.content = item_content
    item.tag_type = item_tag_type
    item.tc_uuid = item_tc_uuid
    item.publish_time = time.strftime("%Y-%m-%d %H:%M", time.localtime())
    item.url = ' '
    item.like_count = 0
    item.view_count = 0
    item.blog_status = 0
    
    try:
        item.s_id = item_title.split('.')[0]
    except Exception as e:
        item.s_id = 0

    try:
        db.session.add(item)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库插入错误')
    
    return jsonify(re_code=RET.OK, msg='请求成功')

@api.route('/item/delete', methods=['GET'])    
def delete_item():
    '''
    '''
    item_uuid = request.args.get('uuid')

    item = Items.query.filter(Items.uuid == item_uuid).first()
    db.session.commit()

    if not item:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')

    db.session.delete(item)
    db.session.commit()

    return jsonify(re_code=RET.OK, msg='请求成功')


@api.route('/item/blog/add', methods=['POST'])
def add_item_blog():
    '''
    '''
    data = request.get_json()
    item_title = data.get('title')
    item_content = data.get('content')
    item_abstract = data.get('abstract')
    item_tag_type = data.get('tag_type')
    item_tc_uuid = data.get('tc_uuid')
    item_user_uuid = data.get('user_uuid')

    item = Items()

    item.uuid = getUUID(item_title + str(item_tag_type))
    item.abstract = item_abstract
    item.title = item_title
    item.content = item_content
    item.tag_type = item_tag_type
    item.tc_uuid = item_tc_uuid
    item.publish_time = time.strftime("%Y-%m-%d %H:%M", time.localtime())
    item.url = ' '
    item.like_count = 0
    item.view_count = 0
    item.s_id = 0
    item.blog_status = 1
    
    publish_item = PublishItem()
    publish_item.uuid = getUUID(item_title + str(item_tag_type) + item_user_uuid)
    publish_item.item_uuid = item.uuid
    publish_item.user_uuid = item_user_uuid

    try:
        db.session.add(item)
        db.session.add(publish_item)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库插入错误')
    
    return jsonify(re_code=RET.OK, msg='请求成功')


@api.route('/items/blog/list', methods=['GET'])
def get_items_blog_list():
    save_data('wx_pv')
    save_data('items_blog_list')

    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 查找
    try:
        items_pages = Items.query.filter(Items.blog_status == 1)\
        .order_by(Items.publish_time.desc()).paginate(int(page), 
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
        item = ar.to_dict()
        tag = Tag.query.filter(Tag.uuid == ar.tc_uuid).first()
        publish_item = PublishItem.query.filter(PublishItem.item_uuid == ar.uuid).first()
        user = User.query.filter(User.uuid == publish_item.user_uuid).first()
        item['tag_name'] = tag.tag_name
        item['user_name'] = user.user_name
        item['user_avatar'] = user.url
        item['publish_uuid'] = publish_item.uuid
        ars_list.append(item)
    
    items_info = {
        'data': ars_list,
        'current_items': len(ars_list),
        'current_page': items_pages.page,
        'total': items_pages.total,
        'pages': items_pages.pages,
        'has_next': items_pages.has_next
    }

    return jsonify(re_code=RET.OK, msg='请求成功', data=items_info)


@api.route('/item/blog/update', methods=['POST'])
def update_item_blog():
    '''
    '''
    data = request.get_json()
    item_uuid = data.get('uuid')
    item_title = data.get('title')
    item_content = data.get('content')
    item_abstract = data.get('abstract')
    item_tag_type = data.get('tag_type')
    item_tc_uuid = data.get('tc_uuid')
    item_user_uuid = data.get('user_uuid')
    item_publish_uuid = data.get('publish_uuid')

    item = Items.query.filter(Items.uuid == item_uuid).first()

    item.abstract = item_abstract
    item.title = item_title
    item.content = item_content
    item.tag_type = item_tag_type
    item.tc_uuid = item_tc_uuid
    item.publish_time = time.strftime("%Y-%m-%d %H:%M", time.localtime())
    
    publish_item = PublishItem.query.filter(PublishItem.uuid == item_publish_uuid).first()
    publish_item.item_uuid = item_uuid
    publish_item.user_uuid = item_user_uuid

    try:
        db.session.add(item)
        db.session.add(publish_item)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库插入错误')
    
    return jsonify(re_code=RET.OK, msg='请求成功')

@api.route('/item/blog/delete', methods=['GET'])    
def delete_blog_item():
    '''
    '''
    item_uuid = request.args.get('uuid')

    item = Items.query.filter(Items.uuid == item_uuid).first()
    db.session.commit()

    if not item:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')

    publish_item = PublishItem.query.filter(PublishItem.item_uuid == item_uuid).first()

    try:
        db.session.delete(item)
        db.session.delete(publish_item)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库删除错误')

    return jsonify(re_code=RET.OK, msg='请求成功')