#!/bin/bash

# 要检测的关键词
KEY_WORDS="keyword"

# 启动进程的命令
COMMAND_TO_START="command"

# 无限循环检查进程
while true; do
    # 使用ps和grep命令计算进程数量
    COUNT=$(ps -ef | grep -v grep | grep "$KEY_WORDS" | wc -l)
    if [ $COUNT -eq 0 ]; then
        echo "$(date): $KEY_WORDS is not running. Restarting..."
        $COMMAND_TO_START
    else
        echo "$(date): $PROCESS_NAME is running."
    fi
    sleep 1  # 每5秒检查一次
done