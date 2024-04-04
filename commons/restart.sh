#!/bin/bash

# 要检测的关键词
KEY_WORDS="echo"

# 启动进程的命令
COMMAND_TO_START="echo 1"

# 重启数量
PROCESS_COUNT=1

# 无限循环检查进程
while true; do
    # 使用ps和grep命令计算进程数量
    COUNT=$(ps -ef | grep -v grep | grep "$KEY_WORDS" | wc -l)
    if [ $COUNT -eq 0 ]; then
        echo "[$(date)][$KEY_WORDS]进程数量不足，正在尝试启动至少 $PROCESS_COUNT 个实例..."
        # 这里是启动进程的循环，确保至少启动PROCESS_COUNT个进程
        for ((i=0; i<$PROCESS_COUNT; i++)); do
          $COMMAND_TO_START
        done
    else
        echo "[$(date)][$KEY_WORDS]进程的数量满足要求，当前数量: $COUNT"
    fi
    sleep 1  # 每1秒检查一次
done