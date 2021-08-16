# __author__: Mai feng
# __file_name__: verify.py
# __time__: 2019:04:28:21:12
import random
from medicine.api_1_0 import api
from flask import request, abort, current_app, jsonify, make_response
from medicine.utils.response_code import RET, error_map
from medicine import redis_conn
from medicine import constants
from medicine.models import User
import re
from medicine.utils.captcha.captcha import captcha
from medicine.utils.send_sms import CCP

@api.route('/imageCode')
def get_image_code():
    '''获取图片验证码
    :param json method->get
        1. uuid
        2. last_uuid
        eg:http://127.0.0.1"5000/imageCode?uuid=xxxx&last_uuid=xxxx
    :return: image
    '''
    uuid = request.args.get('uuid')
    last_uuid = request.args.get('last_uuid')
    # 判断是否存在uuid
    if not uuid:
        return jsonify(re_code=RET.PARAMERR, msg='缺少uuid参数')
    
    # 生成验证码图片及信息 名字，文字信息，图片信息
    name, text, image = captcha.generate_captcha()
    current_app.logger.debug('图片验证码信息:' + text)

    # 删除上次生成的验证码
    try:
        if last_uuid:
            redis_conn.delete('ImageCode' + last_uuid)
        
        # 保存UUID对应的验证码文字信息，设置时长
        redis_conn.setex('ImageCode' + uuid, constants.IMAGE_CODE_REDIS_EXPIRES, text)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='保存图片验证码失败')

    response = make_response(image)
    response.headers['Content-Type'] = 'image/jpg'
    return response


@api.route('/smsCode', methods=['POST'])
def send_sms_code():
    '''发送手机验证码
    :param json
        1. phone_num
        2. img_code_client
        3. uuid
    :return: json
    '''

    # 接收参数
    data = request.json
    phone = data.get('phone')
    img_code_client = data.get('img_code_client')
    uuid = data.get('uuid')

    # 检测是否缺少参数
    if not all([phone, img_code_client, uuid]):
        return jsonify(re_code=RET.PARAMERR, msg='参数缺少')

    # 检查手机号格式是否正确
    if not re.match('0?(13|14|15|17|18|19)[0-9]{9}', phone):
        return jsonify(re_code=RET.PARAMERR, msg='手机号码格式不正确')

     # 取出验证码，判断验证码是否正确
    try:
        # from redis
        img_code_server = redis_conn.get('ImageCode' + uuid)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='获取图片验证码失败')
    
     # 判断验证码是否已经过期
    if not img_code_server:
        return jsonify(re_code=RET.NODATA, msg='验证码已经过期')

    # 取完就删除嘛
    try:
        # 从redis中删除验证码
        redis_conn.delete('ImageCode' + uuid)
    except Exception as e:
        current_app.logger.debug(e)

    # 判断用户输入的验证码是否正确
    if img_code_client.lower() != img_code_server.lower():
        return jsonify(re_code=RET.DATAERR, msg='验证码输入有误')

     # 判断用户是否60秒重复发送短信验证码
    # try:
    #     send_flag = redis_conn.get('SendPhoneCode' + phone_num)
    # except Exception as e:
    #     current_app.logger.debug(e)
    # if send_flag is not None:
    #     return jsonify(re_code=RET.REQERR, msg='请求过于频繁，请60秒后重试')
    
    # 判断用户是否注册
    try:
        user = User.query.filter(User.phone == phone).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='查询数据库错误')
    # 用户存在，提示用户已经被注册
    if user:
        return jsonify(re_code=RET.DATAEXIST, msg='该用户已经存在')

     # 生成短信验证码
    sms_code = '%06d' % random.randint(0, 99999)
    current_app.logger.debug('短信验证码为：' + sms_code)

    # 5.发送短信验证码            验证码         过期时间：容联的时间单位为:分   短信模板1
    # result = CCP().send_sms(phone, [sms_code, constants.SMS_CODE_REDIS_EXPIRES/60], '1')
    # if result != 1:
    #     # 短信发送失败
    #     return jsonify(re_code=RET.THIRDERR,msg='发送短信验证码失败')

    # 将短信验证码存储redis中
    try:
        redis_conn.set('PhoneCode' + phone, sms_code, constants.SMS_CODE_REDIS_EXPIRES)
        redis_conn.set('SendPhoneCode'+ phone, 1, constants.SEND_SMS_REDIS_EXPIRES) # 验证60秒的标志

    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='存储短信验证码失败')

    return jsonify(re_code=RET.OK, msg='验证码发送成功')