# __author__: Mai feng
# __file_name__: passport.py
# __time__: 2019:04:28:16:20


from medicine.api_1_0 import api
from flask import request, jsonify, current_app, session
from medicine.utils.response_code import RET
import re
from medicine import redis_conn, db
from medicine.models import User, Expert
from medicine.utils.common import login_required

@api.route('/register', methods=['POST'])
def register():
    '''用户注册接口
    :param json格式
        1. phone
        2. phone_code
        3. password
        4. password2
        5. types
    :return: json
    '''
    # 获取参数
    data = request.json
    phone = data.get('phone')
    phone_code = data.get('phone_code')
    password = data.get('password')
    password2 = data.get('password2')
    types = data.get('types')

    #  检查是否缺少参数
    if not all([phone, phone_code, password, password2, types]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 验证手机号码是否正确
    if not re.match('0?(13|14|15|17|18|19)[0-9]{9}', phone):
        return jsonify(re_code=RET.PARAMERR, msg='手机号码格式不正确')

    # 判断两次密码是否一致
    if password != password2:
        return jsonify(re_code=RET.DATAERR, msg='用户两次密码不一致')

    # 从redis中获取短信验证码
    try:
        phone_code_server = redis_conn.get('PhoneCode' + phone)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='短信验证码查询错误')
    
    # 判断是否有效
    if not phone_code_server:
        return jsonify(re_code=RET.NODATA, msg='短信验证码不存在，或者达到有效期')
    
    # 判断短信验证码是否正确
    if phone_code != phone_code_server:
        return jsonify(re_code=RET.DATAERR, msg='短信验证码错误')
    
    # 新增对象
    if types == 'patient':
        user = User()
    elif types == 'expert':
        user = Expert()
    else:
        return jsonify(re_code=RET.PARAMERR, msg='对象类型错误')
    user.name = phone
    user.phone = phone
    user.password_hash = password

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback() # 事务回滚
        return jsonify(re_code=RET.DBERR, msg='注册失败，用户已经存在')

     # 8. 保持登录状态
    session['user_id'] = user.id
    session['name'] = phone
    session['phone_num'] = phone

    return jsonify(re_code=RET.OK, msg='注册成功')


@api.route('sessions', methods=['POST'])
def login():
    '''用户登陆接口
    :param json
        1. phone: 手机号码
        2. password: 用户密码
    :return: json
    '''
    # 获取参数
    data = request.json
    phone = data.get('phone')
    password = data.get('password')

    # 判断是否缺少参数
    if not all([phone, password]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断手机号码是否正确
    if not re.match('0?(13|14|15|17|18|19)[0-9]{9}', phone):
        return jsonify(re_code=RET.PARAMERR, msg='手机号码格式不正确')

    # 判断用户是否存在

    try:
        user = User.query.filter(User.phone == phone).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
        
    if not user:
        try:
            user = Expert.query.filter(Expert.phone == phone).first()
        except Exception as e:
            current_app.logger.debug(e)
            return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
        if not user:
            return jsonify(re_code=RET.NODATA, msg='用户不存在')
    
    if not user.check_password(password):
        return jsonify(re_code=RET.PARAMERR, msg='密码错误')

    # 存session

    session['user_id'] = user.id
    session['name'] = user.name
    session['phone'] = user.phone

    return jsonify(re_code=RET.OK, msg='登陆成功')
    
@api.route('/sessions',methods=['DELETE'])
@login_required     #登录校验
def logout():
    """退出登录功能：
    删除session
    :return: 返回响应，跳转首页
    """
    session.pop('user_id')
    session.pop('name')
    session.pop('phone')
    return jsonify(re_code=RET.OK,msg='退出成功')