@echo off
REM Start fresh backend server on port 8084

echo.
echo ============================================================
echo ORIGINAMIENTO DASHBOARD - FRESH BACKEND SERVER
echo Port: 8084
echo ============================================================
echo.

cd /d C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend

echo [1/2] Clearing Python cache...
for /d /r . %%d in (__pycache__) do (
    rmdir /s /q "%%d" >nul 2>&1
)
echo   Cache cleared

echo [2/2] Starting fresh server...
echo   Executing: python fresh_server.py
echo.

python fresh_server.py

pause
