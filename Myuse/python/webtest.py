import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    response = requests.get(url)
    
    # 设置编码为 UTF-8 或者你希望使用的编码
    response.encoding = response.apparent_encoding  # 自动检测编码
    # 或者你可以手动设置编码
    # response.encoding = 'utf-8'

    soup = BeautifulSoup(response.text, 'html.parser')
    titles = soup.find_all('h2')
    contents = soup.contents

    for content in contents:
        # 确保内容是标签，避免直接调用get_text()可能导致错误
        if hasattr(content, 'get_text'):
            print(content.get_text())

    for title in titles:
        print(title.get_text())

# 使用示例
url = 'https://www.baidu.com/'
scrape_website(url)