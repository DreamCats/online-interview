# __author__: Mai feng
# __file_name__: demo.py
# __time__: 2019:04:23:19:53

from . import api
from ..utils.common import save_data
from flask import request

@api.route('/demo')

def demo():
    '''
    测试
    :return:  'Hello World'
    '''
    ip = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
    save_data('demo')
    return 'Hello World 1.0 ' + ip