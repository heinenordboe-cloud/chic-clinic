@echo off
setlocal
cd /d "%~dp0"

echo.
echo === Chic Clinic deploy ===
echo Mappe: %CD%
echo.

echo Bygger og deployer...
call npm run build
if errorlevel 1 (
    echo.
    echo BUILD FEILET - fiks feilene over
    pause
    exit /b 1
)

echo.
npx vercel --prod
echo.
echo Ferdig! Kopier URL-en over.
pause
endlocal
