# __author__: Mai feng
# __file_name__: demo.py
# __time__: 2019:04:23:19:53

from . import api

@api.route('/demo')

def demo():
    '''
    测试
    :return:  'Hello World'
    '''

    return 'Hello World 1.0'