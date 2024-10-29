import requests
from bs4 import BeautifulSoup

def search_tonkiang(query, results):
    # 定义目标 URL
    url = 'http://tonkiang.us/'

    # 定义请求头，模拟浏览器
    headers = {
        'Host': 'tonkiang.us',
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Origin': 'http://tonkiang.us',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Referer': 'http://tonkiang.us/?',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    # 定义表单数据 (POST 数据)
    data = {
        'seerch': query,  # 用户输入的搜索内容
        'Submit': '+',
        'city': 'NjA2NTM0MzcyMzc4a2tr'
    }

    # 定义 cookie 数据
    cookies = {
        'REFERER': 'Gameover',
        # (省略其他 cookie)
    }

    # 发送 POST 请求
    response = requests.post(url, headers=headers, data=data, cookies=cookies)

    # 检查响应状态
    if response.status_code == 200:
        print(f"请求成功，正在解析页面内容: {query}...")
        
        # 解析返回的 HTML 内容
        soup = BeautifulSoup(response.text, 'html.parser')

        # 查找频道信息
        channels = soup.find_all('div', class_='channel')
        if channels:
            for channel in channels:
                # 提取频道名称
                channel_name_div = channel.find('div', class_='tip')
                channel_name = channel_name_div.get_text(strip=True) if channel_name_div else "未知频道"

                # 提取链接
                link = channel.find('a')['href'] if channel.find('a') else "无链接"

                # 添加结果
                if channel_name not in results:
                    results[channel_name] = []
                if len(results[channel_name]) < 5:  # 每个频道只取前 5 条
                    results[channel_name].append(link)

    else:
        print(f"请求失败，状态码: {response.status_code}")

def main():
    print("请选择搜索选项:")
    print("1. 默认搜索 CCTV-1 到 CCTV-10")
    print("2. 自定义搜索内容")

    choice = input("请输入选项 (1 或 2): ")

    results = {}

    if choice == '1':
        # 默认搜索 CCTV-1 到 CCTV-10
        for i in range(1, 11):
            query = f"CCTV-{i}"
            search_tonkiang(query, results)
    elif choice == '2':
        # 用户输入自定义搜索内容
        query = input("请输入搜索关键词：")
        search_tonkiang(query, results)
    else:
        print("无效的选项，请输入 1 或 2。")

    # 统一输出结果
    print("\n💘中央,#genre#")
    for channel_name, links in results.items():
        for link in links:
            print(f"{channel_name},{link}")
        print("")  # 每个频道后换行

if __name__ == "__main__":
    main()