@echo off
pushd "%~dp0"
echo Starting DSPAUT Portal Development Server...
echo.
echo [INFO] This window must remain open while viewing the website.
echo [INFO] Press Ctrl+C to stop the server when you are finished.
echo.
cmd /c npm run dev
popd
pause
