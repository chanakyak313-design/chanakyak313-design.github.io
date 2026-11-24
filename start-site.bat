@echo off
title Karra Chanakya - Portfolio
echo ========================================================
echo  Starting Karra Chanakya's Portfolio...
echo  Your default browser will open automatically.
echo  Press Ctrl+C in this terminal when you want to stop.
echo ========================================================
cd /d "%~dp0"

where python >nul 2>&1
if %errorlevel% equ 0 (
    python "%~dp0start_site.py"
    goto :done
)

where py >nul 2>&1
if %errorlevel% equ 0 (
    py "%~dp0start_site.py"
    goto :done
)

if exist "%~dp0..\backend\.venv\Scripts\python.exe" (
    "%~dp0..\backend\.venv\Scripts\python.exe" "%~dp0start_site.py"
    goto :done
)

echo Python was not found in PATH. Opening index.html directly in your default browser...
start "" "%~dp0index.html"

:done
pause
