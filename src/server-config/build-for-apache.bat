@echo off
echo Building Jekyll site for Apache...

REM Build the Jekyll site with Apache-specific configuration
call bundle exec jekyll build --config _config.yml,_config.apache.yml

echo Jekyll build completed.
echo Static files are in the _site directory.
echo.
echo To view your site with Apache:
echo 1. Make sure Apache is running in XAMPP
echo 2. Access your site at http://localhost/minimal-mistakes
echo.
echo Press any key to exit...
pause > nul
