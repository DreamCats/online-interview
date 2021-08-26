# __author__: Mai feng
# __file_name__: user.py
# __time__: 2021:08:15:23:34



from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import User
from interview.utils import send_wx
import uuid, requests

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
    user.uuid = openId

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
        user = User.query.filter_by(wx_id=openId).first()
        return jsonify(re_code=RET.OK, msg='更新成功', data=user.to_dict())
    
    return jsonify(re_code=RET.OK, msg='添加成功', data=user.to_dict())

@api.route('/user/push_token', methods=['POST'])
def add_user_push_token():
    data = request.json
    token = data.get('push_token')
    wx_id = data.get('wx_id')

    # 不判断了

    try:
        rows_changed = User.query.filter_by(wx_id=wx_id).update(dict(push_token=token))
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        # 说明存在了，那么我就更新把
        return jsonify(re_code=RET.DBERR, msg='用户不存在')

    return jsonify(re_code=RET.OK, msg='添加成功', push_token=token)

@api.route('/user/test_token', methods=['GET'])
def test_user_push_token():
    
    token = request.args.get('push_token', '')
    if token == '':
        return jsonify(re_code=RET.DBERR, msg='测试失败，token不对')

    send_wx.send_test_msg(token)
    
    # 发送

    return jsonify(re_code=RET.OK, msg='发送成功')

@api.route('/user/qrcode', methods=['GET'])
def get_wx_qrcode():
    '''貌似不需要参数
    '''
    url = 'https://www.pushplus.plus/api/common/wechat/getQrcode'
    ss = requests.session()
    resp = ss.get(url)
    datas = resp.json()['data']
    print(datas)
    return jsonify(re_code=RET.OK, msg='发送成功', data=datas)

 
@api.route('/user/detectcode', methods=['GET'])
def add_wx_push_token():
    '''
    :params : wx_id
            : qrcode
    '''
    wx_id = request.args.get('wx_id')
    qrcode = request.args.get('qrcode')
    url = f"https://www.pushplus.plus/api/common/wechat/confirmLogin?key={qrcode}&code=1001"
    get_token_url = 'https://www.pushplus.plus/api/customer/user/token'
    ss = requests.session()
    resp = ss.get(url)
    if resp.json()['code'] == 200:
        resp = ss.get(get_token_url)
        if resp.json()['code'] == 200:
            print(resp.json())
            token = resp.json()['data']
            # luoku
            try:
                rows_changed = User.query.filter_by(wx_id=wx_id).update(dict(push_token=token))
                db.session.commit()
            except Exception as e:
                current_app.logger.debug(e)
                db.session.rollback()
                return jsonify(re_code=RET.DBERR, msg='用户不存在')
            return jsonify(re_code=RET.OK, msg='发送成功', data=token)

    return jsonify(re_code=RET.DATAERR, msg='用户并没有扫码')