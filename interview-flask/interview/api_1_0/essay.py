# __author__: Mai feng
# __file_name__: essay.py
# __time__: 2019:05:10:20:14

from medicine.api_1_0 import api
from flask import request, jsonify, current_app, session
from medicine.utils.response_code import RET
from medicine import redis_conn, db
from medicine.utils.common import login_required
from medicine.models import Essay


@api.route('/addEssay', methods=['POST'])
def add_essay():
    '''添加软文
    :param title: 文章标题
            abstract: 文章摘要
            # cover_img_url: 文章封面
            content: 内容
            types: 类型 （普通 or 商家优惠活动）
    '''
    data = request.json
    title = data.get('title')
    abstract = data.get('abstract')
    # cover_img_url = data.get('cover_img_url')
    content = data.get('content')
    types = data.get('types')
    # 判断是否缺少
    if not all([title, abstract, content, types]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断类型参数传递是否正确
    if types != 'common' and types != 'shop':
        return jsonify(re_code=RET.PARAMERR, msg='types参数不正确')

    # 创建实体
    essay = Essay()
    essay.title = title
    essay.abstract = abstract
    # essay.cover_img_url = cover_img_url
    essay.content = content
    essay.types = types

    try:
        db.session.add(essay)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加软文失败')

    return jsonify(re_code=RET.OK, msg='添加成功')
    
@api.route('/essays')
def get_essays():
    '''分页获取相关软文
    :param page: 页码
            count: 数量
            types: 类型
    :return: json
    '''
    page = request.args.get('page', '1')
    count = request.args.get('count', '5')
    types = request.args.get('types', 'common')

    # 判断是否缺少参数
    if not all([page, count, types]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断types参数是否符合
    if types != 'common' and types != 'shop':
        return jsonify(re_code=RET.PARAMERR, msg='types不符合要求')

    try:
        essay_pages = Essay.query.filter(Essay.types == types).order_by(Essay.create_time.desc()).paginate(int(page), 
                                                int(count), error_out=False)
        essays = essay_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(essays) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    essays_list = []
    for essay in essays:
        essays_list.append(essay.to_dict_section())
    
    essays_info = {
        'data': essays_list,
        'current_items': len(essays_list),
        'current_page': essay_pages.page,
        'total': essay_pages.total,
        'pages': essay_pages.pages,
        'has_next': essay_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=essays_info)

@api.route('/byIdEssay')
def get_id_essay():
    '''通过id获取文章   请求方式：get
    :param essay_id: 软文id
    :return: json
    '''
    essay_id = request.args.get('essay_id')

    if not essay_id:
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')
    
    try:
        essay = Essay.query.filter(Essay.id == essay_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询错误')
    
    if not essay:
        return jsonify(re_code=RET.NODATA, msg='软文不存在')
    
    essay_info = essay.to_dict_content()
    return jsonify(re_code=RET.OK, msg='请求成功', data=essay_info)

@api.route('/delEssay')
def del_id_essay():
    '''通过id删除软文 post
    :param essay_id: id
    :return: json
    '''
    data = request.json
    essay_id = data.get('essay_id')
    
    if not essay_id:
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    try:
        essay = Essay.query.filter(Essay.id == essay_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询错误')
    
    if not essay:
        return jsonify(re_code=RET.NODATA, msg='软文不存在')

    try:
        db.session.delete(essay)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='删除错误')

    
    return jsonify(re_code=RET.OK, msg='删除成功')