@echo off
setlocal
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" "%~dp0node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 5173 --base ./ > "%~dp0vite.log" 2> "%~dp0vite.err.log"
