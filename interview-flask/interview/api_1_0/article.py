from typing import cast
from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import Article

@api.route('/article/list', methods=['GET'])
def get_article_list():
    '''查找公司
    :param  page: 页码
            count: 数量
            tag: tag
    '''
    tag = request.args.get('tag', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 参数判断省略

    # 查找
    try:
        article_pages = Article.query.filter(Article.tag_id == int(tag)).order_by(Article.n_id).paginate(int(page), 
                                                int(count), error_out=False)
        ars = article_pages.items
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
    
    kws_info = {
        'data': ars_list,
        'current_items': len(ars_list),
        'current_page': article_pages.page,
        'total': article_pages.total,
        'pages': article_pages.pages,
        'has_next': article_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=kws_info)


@api.route('/article/info', methods=['GET'])
def get_kw_info():
    '''获取面经详细信息
    :param id
    '''
    a_id = request.args.get('id', '0')

    # 暂时不校验参数了

    try:
        a = Article.query.filter(Article.id == int(a_id)).first()
        rows_changed = Article.query.filter_by(id=a.id).update(dict(count=a.count+1))
        db.session.commit()
    except Exception as e:
        current_app.logger.debug('get_article_info', e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')


    if a is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=a.to_dict())