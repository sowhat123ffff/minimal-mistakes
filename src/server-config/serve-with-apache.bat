@echo off
echo Starting Apache in XAMPP...

REM Start Apache in XAMPP
start "" "C:\xampp3\xampp-control.exe"

echo.
echo Apache should be starting in the XAMPP Control Panel.
echo.
echo Please:
echo 1. Click the "Start" button next to Apache in the XAMPP Control Panel
echo 2. Wait for Apache to start (the module name will turn green)
echo.
echo Once Apache is running, your site will be available at:
echo http://localhost/minimal-mistakes
echo.
echo Press any key to open your site in the default browser...
pause > nul

REM Open the site in the default browser
start http://localhost/minimal-mistakes
