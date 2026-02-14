#!/bin/bash

echo "☢️ NUCLEARVIRALITY - MASTER LAUNCH SCRIPT"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed."
    echo "📥 Download it from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the nuclearvirality-app directory"
    exit 1
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed"
    exit 1
fi

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd server
npm install

if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed"
    exit 1
fi

# Check for .env file
if [ ! -f ".env" ]; then
    echo ""
    echo "⚠️  WARNING: No .env file found in server/"
    echo "Creating .env from example..."
    cp .env.example .env
    echo ""
    echo "🔧 IMPORTANT: Edit server/.env with your email credentials!"
    echo "   EMAIL_USER=your-email@gmail.com"
    echo "   EMAIL_PASS=your-app-password"
    echo ""
    read -p "Press Enter after editing .env file..."
fi

cd ..

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 Starting services..."
echo ""
echo "📌 Frontend will open at: http://localhost:3000"
echo "📌 Backend API will run at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""
sleep 2

# Start backend in background
echo "Starting backend server..."
cd server
npm start &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start frontend
echo "Starting frontend..."
npm run dev

# When frontend stops (Ctrl+C), kill backend too
kill $BACKEND_PID 2>/dev/null
