import requests
from bs4 import BeautifulSoup

def search_tonkiang(query):
    url = 'http://tonkiang.us/'
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

    data = {
        'seerch': query,
        'Submit': '+',
        'city': 'NjA2NTM0MzcyMzc4a2tr'
    }

    cookies = {
        'REFERER': 'Gameover',
        # ... (省略其他 cookie)
    }

    response = requests.post(url, headers=headers, data=data, cookies=cookies)

    if response.status_code == 200:
        print("请求成功，正在解析页面内容...")
        soup = BeautifulSoup(response.text, 'html.parser')

        channels = soup.find_all('div', class_='channel')
        return channels  # 返回频道信息
    else:
        print(f"请求失败，状态码: {response.status_code}")
        return []

def extract_channel_info(channels):
    result = []
    for channel in channels:
        channel_name_div = channel.find('div', class_='tip')
        channel_name = channel_name_div.get_text(strip=True) if channel_name_div else "未知频道"

        link = channel.find('a')['href'] if channel.find('a') else "无链接"

        # 去掉不需要的字样
        unwanted_keywords = ["电视剧", "高清", "国防军事", "记录", "科教"]
        for keyword in unwanted_keywords:
            channel_name = channel_name.replace(keyword, "")  # 替换为空字符串

        # 去掉多余空格
        channel_name = channel_name.strip()

        # 添加到结果中，只保留频道名称和链接
        result.append((channel_name, link))
    return result

def format_output(results):
    output = ["💘中央,#genre#"]
    channel_dict = {}

    # 将结果分组
    for channel_name, link in results:
        if channel_name not in channel_dict:
            channel_dict[channel_name] = []
        channel_dict[channel_name].append(link)

    # 生成最终输出格式
    for channel_name, links in channel_dict.items():
        for link in links[:5]:  # 只取前5条链接
            output.append(f"{channel_name},{link}")

    return output

def main():
    print("请选择搜索选项:")
    print("1. 默认搜索 CCTV-1 到 CCTV-10")
    print("2. 自定义搜索内容")

    choice = input("请输入选项 (1 或 2): ")
    results = []

    if choice == '1':
        for i in range(1, 11):
            query = f"CCTV-{i}"
            print(f"搜索: {query}")
            channels = search_tonkiang(query)
            results.extend(extract_channel_info(channels))
    elif choice == '2':
        query = input("请输入搜索关键词：")
        channels = search_tonkiang(query)
        results.extend(extract_channel_info(channels))
    else:
        print("无效的选项，请输入 1 或 2。")

    # 格式化输出
    formatted_output = format_output(results)
    for line in formatted_output:
        print(line)

if __name__ == "__main__":
    main()