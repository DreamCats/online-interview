from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import Lc


@api.route('/alg/list', methods=['GET'])
def get_lc_list():
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
        lc_pages = Lc.query.filter(Lc.tag_id == int(tag)).order_by(Lc.lc_id).paginate(int(page), 
                                                int(count), error_out=False)
        lcs = lc_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(lcs) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    lcs_list = []
    for lc in lcs:
        lcs_list.append(lc.to_dict())
    
    lcs_info = {
        'data': lcs_list,
        'current_items': len(lcs_list),
        'current_page': lc_pages.page,
        'total': lc_pages.total,
        'pages': lc_pages.pages,
        'has_next': lc_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=lcs_info)

@api.route('/alg/info', methods=['GET'])
def get_lc_info():
    '''获取面经详细信息
    :param id
    '''
    lc_id = request.args.get('id', '1')

    # 暂时不校验参数了

    try:
        lc = Lc.query.filter(Lc.id == int(lc_id)).first()
        
    except Exception as e:
        current_app.logger.debug('get_lc_info', e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')


    if lc is None:
        return jsonify(re_code=RET.DBERR, msg='数据不存在')
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=lc.to_dict())