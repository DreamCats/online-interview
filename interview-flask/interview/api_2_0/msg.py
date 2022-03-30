from interview.api_2_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required, save_data
from interview.model import Msg

@api.route('/msg', methods=['GET'])
def get_msg():
    '''获取消息
    :param status: 0,off,1on
    '''
    save_data('wx_pv')
    save_data('get_msg')
    status = request.args.get('status', '0')

    # 查找
    try:
        db.session.commit()
        msg = Msg.query.filter(Msg.status == status).order_by(Msg.create_time.desc()).first()
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if not msg:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    print('msg:', msg.to_dict())
    return jsonify(re_code=RET.OK, msg='请求成功', data=msg.to_dict())