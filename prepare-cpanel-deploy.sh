#!/bin/bash

echo "☢️ NUCLEARVIRALITY - CPANEL DEPLOYMENT PACKAGE BUILDER"
echo "======================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the nuclearvirality-app directory"
    exit 1
fi

# Create deployment directory
DEPLOY_DIR="deploy-cpanel"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

echo "📦 Step 1: Building frontend for production..."
npm install
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

echo "✅ Frontend built successfully"
echo ""

echo "📦 Step 2: Packaging frontend files..."
mkdir -p $DEPLOY_DIR/frontend
cp -r dist/* $DEPLOY_DIR/frontend/

# Create .htaccess
cat > $DEPLOY_DIR/frontend/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle React Router
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
EOF

echo "✅ Frontend packaged with .htaccess"
echo ""

echo "📦 Step 3: Packaging backend files..."
mkdir -p $DEPLOY_DIR/backend

# Copy backend files
cp server/server.js $DEPLOY_DIR/backend/
cp server/package.json $DEPLOY_DIR/backend/
cp server/.env.production.example $DEPLOY_DIR/backend/.env.example

# Copy assets
mkdir -p $DEPLOY_DIR/backend/assets
cp server/assets/*.pdf $DEPLOY_DIR/backend/assets/ 2>/dev/null || echo "⚠️  Warning: No PDF files found in server/assets/"

echo "✅ Backend files packaged"
echo ""

echo "📦 Step 4: Creating deployment instructions..."
cat > $DEPLOY_DIR/DEPLOY_NOW.txt << 'EOF'
☢️ NUCLEARVIRALITY - CPANEL DEPLOYMENT INSTRUCTIONS

QUICK DEPLOYMENT (5 MINUTES):

1. FRONTEND DEPLOYMENT:
   - Upload all files from 'frontend/' folder to your public_html/
   - Ensure .htaccess is uploaded (might be hidden)
   - Test: Visit https://yourdomain.com

2. BACKEND DEPLOYMENT:
   - Upload all files from 'backend/' folder to ~/nuclearvirality-api/
   - Rename .env.example to .env
   - Edit .env with your cPanel email credentials
   - In cPanel → Setup Node.js App:
     * Create application
     * Application root: nuclearvirality-api
     * Startup file: server.js
     * Click "Run NPM Install"
     * Click "Start App"
   - Test: Visit https://yourdomain.com/api/health

3. CONNECT FRONTEND TO BACKEND:
   - Already configured if using /api path
   - If using subdomain, update API URL in frontend

4. TEST EMAIL CAPTURE:
   - Go to https://yourdomain.com
   - Enter your email
   - Click "GET INSTANT ACCESS"
   - Check inbox for PDF

NEED DETAILED HELP?
See CPANEL_DEPLOYMENT.md for complete step-by-step guide.

TROUBLESHOOTING:
- Frontend not loading → Check .htaccess uploaded
- Backend errors → Check Node.js App logs in cPanel
- Email not sending → Verify .env credentials
- CORS errors → Update ALLOWED_ORIGINS in .env

☢️ READY TO LAUNCH!
EOF

echo "✅ Instructions created"
echo ""

echo "📦 Step 5: Creating compressed archives..."
cd $DEPLOY_DIR

# Compress frontend
zip -r frontend-cpanel.zip frontend/ > /dev/null 2>&1
echo "✅ frontend-cpanel.zip created"

# Compress backend
zip -r backend-cpanel.zip backend/ > /dev/null 2>&1
echo "✅ backend-cpanel.zip created"

cd ..

echo ""
echo "☢️ ======================================"
echo "   DEPLOYMENT PACKAGE READY!"
echo "☢️ ======================================"
echo ""
echo "📁 Location: $DEPLOY_DIR/"
echo ""
echo "📦 Files created:"
echo "   ✅ frontend-cpanel.zip    (Upload to public_html)"
echo "   ✅ backend-cpanel.zip     (Upload to ~/nuclearvirality-api)"
echo "   ✅ DEPLOY_NOW.txt         (Quick deployment guide)"
echo ""
echo "📖 Next steps:"
echo "   1. Read: $DEPLOY_DIR/DEPLOY_NOW.txt"
echo "   2. Upload frontend-cpanel.zip to cPanel"
echo "   3. Upload backend-cpanel.zip to cPanel"
echo "   4. Follow CPANEL_DEPLOYMENT.md for detailed guide"
echo ""
echo "🚀 Ready to deploy!"
echo ""
