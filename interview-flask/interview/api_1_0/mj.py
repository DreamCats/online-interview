from interview.api_1_0 import api
from flask import json, request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required
from interview.model import Mj


@api.route('/mj/list', methods=['GET'])
def get_mj_list():
    '''查找公司
    :param  page: 页码
            count: 数量
            c_id: 哪个公司
    '''
    c_id = request.args.get('type', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 参数判断省略

    # 查找
    try:
        mj_pages = Mj.query.filter(Mj.c_id == int(c_id)).order_by(Mj.publish_time.desc()).paginate(int(page), 
                                                int(count), error_out=False)
        mjs = mj_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(mjs) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    mjs_list = []
    for mj in mjs:
        info = mj.to_dict()
        # info['content'] = json.load(mj.content)
        mjs_list.append(mj.to_dict())
    
    mjs_info = {
        'data': mjs_list,
        'current_items': len(mjs_list),
        'current_page': mj_pages.page,
        'total': mj_pages.total,
        'pages': mj_pages.pages,
        'has_next': mj_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=mjs_info)