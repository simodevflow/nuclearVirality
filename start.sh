#!/bin/bash

echo "☢️ NUCLEARVIRALITY - QUICK START SCRIPT"
echo "======================================="
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

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 Starting development server..."
    echo ""
    npm run dev
else
    echo ""
    echo "❌ Installation failed. Please run 'npm install' manually."
    exit 1
fi
