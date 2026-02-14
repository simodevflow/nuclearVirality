@echo off
echo ☢️ NUCLEARVIRALITY - MASTER LAUNCH SCRIPT
echo ==========================================
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

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Frontend installation failed
    pause
    exit /b 1
)

REM Install backend dependencies
echo.
echo 📦 Installing backend dependencies...
cd server
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Backend installation failed
    pause
    exit /b 1
)

REM Check for .env file
if not exist ".env" (
    echo.
    echo ⚠️ WARNING: No .env file found in server/
    echo Creating .env from example...
    copy .env.example .env
    echo.
    echo 🔧 IMPORTANT: Edit server\.env with your email credentials!
    echo    EMAIL_USER=your-email@gmail.com
    echo    EMAIL_PASS=your-app-password
    echo.
    pause
)

cd ..

echo.
echo ✅ Installation complete!
echo.
echo 🚀 Starting services...
echo.
echo 📌 Frontend will open at: http://localhost:3000
echo 📌 Backend API will run at: http://localhost:5000
echo.
echo ⚠️ You'll need to open a second terminal for the backend
echo.
pause

REM Start backend in new window
echo Starting backend server...
start cmd /k "cd server && npm start"

REM Wait a bit for backend to start
timeout /t 3

REM Start frontend
echo Starting frontend...
call npm run dev
