# __author__: Mai feng
# __file_name__: user.py
# __time__: 2021:08:15:23:34

from interview.api_2_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import User
from interview.utils import send_wx
from interview.utils.common import save_data
import uuid, requests

@api.route('/user/add', methods=['POST'])
def add_user():
    '''
    '''
    save_data('wx_pv')
    save_data('add_user')
    # 获取参数
    data = request.json
    userInfo = data.get('userInfo')
    code = data.get('code')
    openId = send_wx.get_code2Session(code)
    
    if openId is None:
        return jsonify(re_code=RET.USERERR, msg='openid')    

    try:
        user = User.query.filter_by(uuid=openId).first()    

        if not user:
            # 添加：
            user = User()
            user.url = userInfo['avatarUrl']
            user.user_name = userInfo['nickName']
            user.uuid = openId
            user.active = 0
            db.session.add(user)
            db.session.commit()
        else:
            user.url = userInfo['avatarUrl']
            user.user_name = userInfo['nickName'] 
            rows_changed = User.query.filter_by(uuid=openId).update(dict(url=user.url, user_name=user.user_name))
            db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
    
    return jsonify(re_code=RET.OK, msg='添加成功', data=user.to_dict())

@api.route('/user/active', methods=['GET'])
def update_user_active():
    save_data('wx_pv')
    save_data('user_active')
    uuid = request.args.get('uuid', '0')
    code = request.args.get('code', '0')
    print(code)
    if code != 'dreamcat':
        return jsonify(re_code=RET.DBERR, msg='数据库更新错误') 
    try:
        rows_changed = User.query.filter_by(uuid=uuid).update(dict(active=1))
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库更新错误')
    return jsonify(re_code=RET.OK, msg='更新成功')

@api.route('/user/info', methods=['GET'])
def get_user_info_code():
    save_data('wx_pv')
    save_data('wx_uv')
    code = request.args.get('code', '0')

    openId = send_wx.get_code2Session(code)
    
    if openId is None:
        return jsonify(re_code=RET.USERERR, msg='openid') 

    try:
        user = User.query.filter_by(uuid=openId).first()
        if not user:
            return jsonify(re_code=RET.USERERR, msg='user not found')
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
    
    return jsonify(re_code=RET.OK, msg='查询成功', data=user.to_dict())