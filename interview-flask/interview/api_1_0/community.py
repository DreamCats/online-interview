# __author__: Mai feng
# __file_name__: community.py
# __time__: 2019:05:14:19:51


from medicine.api_1_0 import api
from flask import request, jsonify, current_app, session
from medicine.utils.response_code import RET
from medicine import redis_conn, db
from medicine.utils.common import login_required
from medicine.models import Question, Answer

@api.route('/questions')
def get_questions():
    '''分页获取社区内容
    '''
    page = request.args.get('page', '1')
    count = request.args.get('count', '3')

    if not all([page, count]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    try:
        question_pages = Question.query.order_by(Question.create_time.desc()).paginate(int(page), 
                                                int(count), error_out=False)
        questions = question_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(questions) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    questions_list = []
    for question in questions:
        answers_list = []
        answers = question.get_answers()
        for answer in answers:
            answers_list.append(answer.to_dict())
        question_dict = question.to_dict()
        question_dict['answers'] = answers_list
        questions_list.append(question_dict)

    questions_info = {
        'data': questions_list,
        'current_items': len(questions_list),
        'current_page': question_pages.page,
        'total': question_pages.total,
        'pages': question_pages.pages,
        'has_next': question_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=questions_info)


@api.route('/addQuestion', methods=['POST'])
def add_question():
    '''添加问题 请求方式 post
    :param 1. user_id 病人id
            2. content
    '''
    data = request.json
    user_id = data.get('user_id')
    content = data.get('content')
    if not all([user_id, content]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    question = Question()
    question.user_id = user_id
    question.content = content

    try:
        db.session.add(question)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加错误')

    return jsonify(re_code=RET.OK, msg='添加成功')

@api.route('/delQuestion', methods=['POST'])
def del_question():
    '''通过id删除question
    :param question_id: 问题id
    '''
    data = request.json
    question_id = data.get('question_id')

    if not question_id:
        return jsonify(re_code=RET.PARAMERR, msg='参数为空')

    try:
        question = Question.query.filter(Question.id == question_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询错误')

    if not question:
        return jsonify(re_code=RET.NODATA, msg='问题不存在')

    try:
        db.session.delete(question)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='删除错误')

    return jsonify(re_code=RET.OK, msg='删除成功')

@api.route('/addAnswer', methods=['POST'])
def add_answer():
    '''对相应的问题进行回答
    :param question_id: 问题id
            user_id:
            expert_id:
            content:
    '''

    data = request.json
    question_id = data.get('question_id')
    user_id = data.get('user_id')
    expert_id = data.get('expert_id')
    content = data.get('content')

    if not all([question_id, content]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    try:
        question = Question.query.filter(Question.id == question_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询错误')

    if not question:
        return jsonify(re_code=RET.NODATA, msg='问题不存在')

    answer = Answer()
    if user_id and expert_id:
        return jsonify(re_code=RET.PARAMERR, msg='user_id,expert_id 不同时')

    if user_id:
        answer.user_id = user_id
    if expert_id:
        answer.expert_id = expert_id

    answer.question_id = question_id
    answer.content = content

    try:
        db.session.add(answer)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加错误')

    return jsonify(re_code=RET.OK, msg='添加成功')



@api.route('/delAnswer', methods=['POST'])
def del_answer():
    '''通过id删除answer
    :param answer_id: 解答id
    '''
    data = request.json
    answer_id = data.get('answer_id')

    if not answer_id:
        return jsonify(re_code=RET.PARAMERR, msg='参数为空')

    try:
        answer = Answer.query.filter(Answer.id == answer_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询错误')

    if not answer:
        return jsonify(re_code=RET.NODATA, msg='问题不存在')

    try:
        db.session.delete(answer)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='删除错误')

    return jsonify(re_code=RET.OK, msg='删除成功')