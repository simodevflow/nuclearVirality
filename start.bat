@echo off
echo ☢️ NUCLEARVIRALITY - QUICK START SCRIPT
echo =======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed.
    echo 📥 Download it from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Installation complete!
    echo.
    echo 🚀 Starting development server...
    echo.
    call npm run dev
) else (
    echo.
    echo ❌ Installation failed. Please run 'npm install' manually.
    pause
    exit /b 1
)
