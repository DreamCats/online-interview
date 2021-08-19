from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required
from interview.model import Company
from sqlalchemy import select


@api.route('/company/add', methods=['POST'])
def add_company():
    '''添加公司
    :param c_name: 公司名称
            c_id: 序号
            type: 类型 0，前，1，后
    '''
    data = request.json
    current_app.logger.debug(data)
    c_name = data.get('c_name')
    c_id = data.get('c_id')
    type = data.get('type')
    # 判断是否缺少
    if not all([c_name, c_id, type]):
        current_app.logger.debug('缺少参数...')
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断类型参数传递是否正确
    if type != '0' and type != '1' :
        return jsonify(re_code=RET.PARAMERR, msg='types参数不正确')

    # 创建实体
    c = Company()
    c.c_name = c_name
    c.type = int(type)
    c.c_id = int(c_id)

    try:
        db.session.add(c)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加公司失败')

    return jsonify(re_code=RET.OK, msg='添加成功')

@api.route('/company/list', methods=['GET'])
def get_company_list():
    '''查找公司
    :param type: 0， 前，1，后
    '''
    type = request.args.get('type', '0')
    
    # 参数判断省略

    # 查找
    # sql = select(Company).where(Company.type == type).order_by(Company.c_id)
    # order_by 还可以使用 User.id.desc() 表示逆序排列
    # result = db.session.execute(sql)
    # for c in result.scalars():
    #     print(c.to_dict())
    try:
        cs = Company.query.filter(Company.type == type).order_by(Company.c_id)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if cs is None:
        return jsonify(re_code=RET.NODATA, msg='没有数据')
    datas = []
    for c in cs:
        datas.append(c.to_dict())
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)