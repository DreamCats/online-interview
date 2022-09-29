import json
import os, time
from random import randint

m = {
    'java':{'tag_id': 1, 'tag_type': 1},
    'mysql':{'tag_id': 2, 'tag_type': 1},
    'redis':{'tag_id': 3, 'tag_type': 1},
    'net':{'tag_id': 4, 'tag_type': 3},
    'system':{'tag_id': 5, 'tag_type': 1},
    'dis':{'tag_id': 6, 'tag_type': 1},
    'javascript':{'tag_id': 7, 'tag_type': 2},
    'css':{'tag_id': 8, 'tag_type': 2},
    'html':{'tag_id': 9, 'tag_type': 2},
    'vue':{'tag_id': 10, 'tag_type': 2},
    'net2':{'tag_id': 11, 'tag_type': 2},
}

def getTime():
    return time.strftime("%Y-%m-%d %H:%M", time.localtime())

def load_files():
    files_list = []
    for (root, dirs, files) in os.walk('./'):
        for f in files:
            if f.endswith('.md'):
                files_list.append(root + '/' + f)
    return files_list

def get_text(filename):
    with open(filename, 'r') as f:
        return f.read()

def transferContent(content):
    if content is None:
        return None
    else:
        stri = ""
        for c in content:
            if c == '"':
                stri += c.replace('"', '\\\"')
            elif c == "'":
                stri += c.replace("'", "\\\'")
            elif c == "\\":
                stri += "\\\\"
            else:
                stri += str(c)
    return stri

def filter_list(files_list):
    f_list = []
    keys = m.keys()

    for f in files_list:
        tag = f.split('/')[1]
        if tag not in keys: continue
        f_list.append(f)

    return f_list

def write_files(url, content):
    with open(url, 'w') as f:
        f.write('module.exports = {\n    datas: ' + content + '\n}')
        # f.write(content)

files_list = load_files()
f_list = filter_list(files_list)
id = 1
items = []
for f in f_list:
    print(f)
    item = {
        'id': id,
        'tag_id': m[f.split('/')[1]]['tag_id'],
        'tag_type': m[f.split('/')[1]]['tag_type'],
        'title': f.split('/')[-1].split('.md')[0],
        'content': transferContent(get_text(f)),
        'publish_time': getTime(),
        'view_count': randint(0, 500),
        'like_count': randint(0, 100)
    }
    items.append(item)
    id += 1
# items = sorted(items, key=lambda x: int(x.title.split('/')[2]))
items.sort(key=lambda x: int(x['title'].split('.')[0]))

# datas = json.dumps({'datas': items}, indent=4, ensure_ascii=False)
datas = json.dumps(items, indent=4, ensure_ascii=False)
write_files('./items.js', datas)




