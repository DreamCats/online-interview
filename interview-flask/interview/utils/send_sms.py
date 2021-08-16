#-*- coding: UTF-8 -*-  
from medicine.libs.yuntongxun.CCPRestSDK import REST


accountSid= '8a216da8697b80290169901119120877'


accountToken= '545e28bea6ff414f9bceabde4acfce65'


appId='8a216da8697b8029016990111970087e'


serverIP='app.cloopen.com'


serverPort='8883'


softVersion='2013-12-26'



class CCP(object):
    __instance=None
    def __new__(cls, *args, **kwargs):
        if cls.__instance is None:
            cls.__instance=super(CCP, cls).__new__(cls,*args, **kwargs)
            cls.__instance.rest = REST(serverIP, serverPort, softVersion)
            cls.__instance.rest.setAccount(accountSid, accountToken)
            cls.__instance.rest.setAppId(appId)
        return cls.__instance

    def send_sms(self, to, datas, tempId):
        result = self.rest.sendTemplateSMS(to, datas, tempId)
        if result.get('statusCode') == '000000':   
            return 1
        else:
            return 0




if __name__ == '__main__':
    ccp = CCP()
    res = ccp.send_sms('17608037124', ['123', '4'], 1)
    print(res)