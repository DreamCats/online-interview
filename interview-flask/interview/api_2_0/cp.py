from interview.api_2_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required, save_data
from interview.model import Cp

@api.route('/cp/list/all', methods=['GET'])
def get_cp_list_all():
    '''
    '''
    save_data('wx_pv')
    save_data('cp_list_all')
    
    cps = Cp.query.filter()
    db.session.commit()
    datas = []

    for cp in cps:
        datas.append(cp.to_dict())

    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)