import requests
from bs4 import BeautifulSoup
import urllib.parse
import re

# 提取有效链接
def extract_valid_link(raw_link):
    match = re.search(r'/url\?q=(.+?)(&|$)', raw_link)
    if match:
        return match.group(1)
    return None

# 处理Google搜索
def search_google(query):
    encoded_query = urllib.parse.quote(query)
    url = f'https://www.google.com/search?q={encoded_query}'
    response = requests.get(url)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        results = soup.find_all('h3')
        
        if not results:
            print("没有找到搜索结果。")
            return

        links = []
        for index, result in enumerate(results):
            link_tag = result.find_parent('a')
            raw_link = link_tag['href'] if link_tag else ""
            valid_link = extract_valid_link(raw_link)
            if valid_link:
                links.append(valid_link)
                title = result.get_text()
                print(f"{index + 1}: {title}\n链接: {valid_link}\n")

        choice = input("请输入您想访问的链接编号（或输入q退出）: ")
        if choice.lower() == 'q':
            return
        if choice.isdigit() and 1 <= int(choice) <= len(links):
            chosen_link = links[int(choice) - 1]
            print(f"您选择的链接是: {chosen_link}")
            fetch_web_content(chosen_link)
        else:
            print("无效的选择。")
    else:
        print("请求失败:", response.status_code)

# 获取网页内容并处理百度百科
def fetch_web_content(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # 针对百度百科的内容提取
        if 'baike.baidu.com' in url:
            # 百度百科的主体内容位于 class='lemma-summary' 或 'para'
            summary = soup.find('div', class_='lemma-summary')
            paragraphs = soup.find_all('div', class_='para')
            
            # 输出百度百科的简介部分
            if summary:
                print("\n百度百科简介:\n")
                print(summary.get_text(separator="\n", strip=True))
            
            # 输出百度百科的详细段落
            if paragraphs:
                print("\n详细内容:\n")
                for para in paragraphs:
                    print(para.get_text(separator="\n", strip=True))

        else:
            # 其他网页通用内容获取
            article_content = soup.find('div', class_='blog-content-box')
            if article_content:
                content_text = article_content.get_text(separator="\n", strip=True)
                print(content_text)
            else:
                print("无法找到文章内容，请检查页面结构。")
    else:
        print("请求失败，状态码:", response.status_code)

# 循环输入搜索内容
while True:
    search_query = input("请输入您想要搜索的内容（或输入q退出）: ")
    if search_query.lower() == 'q':
        break
    search_google(search_query)