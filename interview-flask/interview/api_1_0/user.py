# __author__: Mai feng
# __file_name__: user.py
# __time__: 2021:08:15:23:34


from typing import cast
from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import User, Mj
from interview.utils import send_wx
import uuid

@api.route('/user/add', methods=['POST'])
def add_user():
    '''
    '''
    # 获取参数
    data = request.json
    userInfo = data.get('userInfo')
    code = data.get('code')
    print(code, userInfo)
    openId = send_wx.get_code2Session(code)
    print(openId)
    
    if openId is None:
        return jsonify(re_code=RET.USERERR, msg='openid')    

    # 添加：

    user = User()
    user.url = userInfo['avatarUrl']
    user.user_name = userInfo['nickName']
    user.wx_id = openId
    user.uuid = uuid.uuid1

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        # 说明存在了，那么我就更新把
        rows_changed = User.query.filter_by(wx_id=openId).update(dict(url=user.url,
                                                                        user_name=user.user_name))
        db.session.commit()
        return jsonify(re_code=RET.DBERR, msg='添加用户失败')

    return jsonify(re_code=RET.OK, msg='添加成功')