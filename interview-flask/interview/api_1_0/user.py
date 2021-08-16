# __author__: Mai feng
# __file_name__: user.py
# __time__: 2021:08:15:23:34


from typing import cast
from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import db
from interview.model import User, Mj
from sqlalchemy import text

@api.route('/user')
def get_shops():
    try:
        user = User.query.filter(User.id == 1).first()
        mj = Mj.query.filter_by(id=1).first()
        # sql = text('select * from user where id = 1')
        # user = db.engine.execute(sql)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
    if not user:
        return jsonify(re_code=RET.NODATA, msg='用户不存在')
    
    return jsonify(re_code=RET.OK, msg='查询成功', user="nicai")