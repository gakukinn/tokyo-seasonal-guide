@echo off
echo 正在清理环境...

REM 杀死所有node进程
taskkill /f /im node.exe 2>nul

REM 等待1秒
timeout /t 1 /nobreak >nul

REM 删除.next构建缓存
if exist .next (
    echo 清理构建缓存...
    rmdir /s /q .next
)

REM 清理npm缓存
echo 清理npm缓存...
npm cache clean --force 2>nul

echo 启动开发服务器...
npm run dev

pause 