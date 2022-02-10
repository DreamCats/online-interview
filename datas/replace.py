import os

def load_files():
    files_list = []
    for (root, dirs, files) in os.walk('./'):
        for f in files:
            if f.endswith('.md'):
                files_list.append(root + '/' + f)
    return files_list

def open_file(file_name):
    with open(file_name, 'r') as file:
        return file.read()

def replace_file(file_name, new_content):
    with open(file_name, 'w') as file:
        file.write(new_content)

def find_and_replace(file_name, old_string, new_string):
    content = open_file(file_name)
    new_content = content.replace(old_string, new_string)
    # print(new_content)
    replace_file(file_name, new_content)

def main():
    files_list = load_files()
    for file_name in files_list:
        find_and_replace(file_name, 'imgs.dreamcat.ink', 'imgs.heiye.site')

main()

# print(find_and_replace('./5/24.消息队列的两种模式.md', 'imgs.dreamcat.ink', 'imgs.heiye.site'))
