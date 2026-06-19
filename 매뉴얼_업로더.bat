@echo off
pushd "%~dp0"
echo Starting Manual Manager...
powershell -ExecutionPolicy Bypass -File "ManualManager.ps1"
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Something went wrong while running the PowerShell script.
    echo Please take a screenshot of this window and let me know.
    pause
)
popd
