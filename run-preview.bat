@echo off
setlocal
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" "%~dp0node_modules\vite\bin\vite.js" preview --host 0.0.0.0 --port 4173 --base ./ > "%~dp0preview.log" 2> "%~dp0preview.err.log"
