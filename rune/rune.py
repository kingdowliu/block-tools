from curl_cffi import requests
from loguru import logger

rune_name_list = [
    'UNCOMMON•GOODS'
]

def is_exist_rune(rune_name):
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://luminex.io',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://luminex.io/',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    }

    params = {
        'rune_text': rune_name,
    }

    response = requests.get('https://brc20-api.luminex.io/runes/rune', params=params, headers=headers).json()

    return len(response) != 0


def run():
    for name in set(rune_name_list):
        is_exist = is_exist_rune(name)
        if not is_exist:
            print(name)

if __name__ == "__main__":
    run()