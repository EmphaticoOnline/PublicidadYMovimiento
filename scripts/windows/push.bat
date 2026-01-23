@echo off
git status
echo.
set /p msg=Mensaje del commit: 
git add .
git commit -m "%msg%"
git push origin main
pause
