#!/bin/bash

# 定义容器名称和镜像名称
IMAGE_NAME="io-worker-monitor"
DIRECTORY=""  # 填写你下载launch_binary_mac官方文件的位置

# 无限循环来检查并重启容器
while true; do
    # 检查容器是否正在运行
    if ! docker container ps | grep io-worker-monitor; then
        cd "$DIRECTORY"
        # 下面这一行替换成自己的启动命令，可去ionet官网查
        ./launch_binary_mac --device_id=ee2362ed-287c-4467-b6b7-e594bac18dbf --user_id=aaed3cb5-3c83-49d2-a27b-7d4d8b575be1 --operating_system="macOS" --usegpus=false --device_name=tico
        echo "容器已启动。"
    else
        echo "容器正在运行，无需操作。"
    fi

    # 等待一段时间再次检查，避免过于频繁的轮询
    sleep 5
done