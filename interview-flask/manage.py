# __author__: Mai feng
# __file_name__: manage.py
# __time__: 2021:08:15:23:09

from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

from interview import get_app, db

app=get_app('develop')

#让迁移时，app和数据库建立关联
Migrate(app,db)

#创建脚本管理器
manager=Manager(app)
#增加db脚本命令
manager.add_command('db',MigrateCommand)

# db init
# python manage.py db init

# db migrate
# python manage.py db migrate

# db upgrade

# python manage.py db upgrade

if __name__ == '__main__':
    manager.run()
    # db = pymysql.connect(host="dreamcat.ink", port=3306, user="root", passwd="123456", db="interview")
    # cursor = db.cursor()
    # sql = "select * from user where id = 1"
    # cursor.execute(sql)
    # results = cursor.fetchall()
    # print(results)