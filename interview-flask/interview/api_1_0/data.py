from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview.utils.common import getUUID
from interview import db
from interview.model import Data
import uuid, requests



@api.route('/data/list/all', methods=['GET'])
def get_data_list_all():
    '''
    '''
    items = Data.query.filter().order_by(Data.update_time.desc())
    db.session.commit()
    datas = []
    for item in items:
        datas.append(item.to_dict())
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)