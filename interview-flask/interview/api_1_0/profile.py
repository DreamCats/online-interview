# __author__: Mai feng
# __file_name__: profile.py
# __time__: 2019:05:01:20:57

from medicine.api_1_0 import api
from flask import jsonify, session, current_app, request, g
from medicine.utils.response_code import RET
from medicine.utils.common import login_required
from medicine.models import User, Expert
from medicine import db, constants

@api.route('users')
@login_required
def get_user_info():
    '''获取用户信息
        前提是已经登陆
    :return: json
    '''
    user_id = g.user_id
    try:
        user = User.query.filter(User.id == user_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if not user:
        return jsonify(re_code=RET.NODATA, msg='用户不存在')

    # 查询用户信息
    user_info = user.to_dict()
    return jsonify(re_code=RET.OK, msg='查询成功', user=user_info)

@api.route('experts')
@login_required
def get_expert_info():
    '''获取专家信息
    :return: json
    '''
    user_id = g.user_id
    try:
        user = Expert.query.filter(Expert.id == user_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
    
    if not user:
        return jsonify(re_code=RET.NODATA, msg='用户不存在')

    # 查询用户信息
    user_info = user.to_dict()
    return jsonify(re_code=RET.OK, msg='查询成功', expert=user_info)