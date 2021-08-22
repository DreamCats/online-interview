from typing import cast
from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import Kw


@api.route('/kw/list', methods=['GET'])
def get_kw_list():
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
        kw_pages = Kw.query.filter(Kw.tag_id == int(tag)).order_by(Kw.k_id).paginate(int(page), 
                                                int(count), error_out=False)
        kws = kw_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(kws) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    kws_list = []
    for kw in kws:
        kws_list.append(kw.to_dict())
    
    kws_info = {
        'data': kws_list,
        'current_items': len(kws_list),
        'current_page': kw_pages.page,
        'total': kw_pages.total,
        'pages': kw_pages.pages,
        'has_next': kw_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=kws_info)


@api.route('/kw/info', methods=['GET'])
def get_kw_info():
    '''获取面经详细信息
    :param id
    '''
    kw_id = request.args.get('id', '0')

    # 暂时不校验参数了

    try:
        mj = Kw.query.filter(Kw.id == int(kw_id)).first()
        
    except Exception as e:
        current_app.logger.debug('get_kw_info', e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')


    if mj is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=mj.to_dict())