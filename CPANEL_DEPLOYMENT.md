# ☢️ NUCLEARVIRALITY - CPANEL DEPLOYMENT GUIDE

## 🎯 COMPLETE STEP-BY-STEP DEPLOYMENT

Deploy your NuclearVirality lead generation system on cPanel hosting.

---

## 📋 PREREQUISITES

**What You Need:**

✅ cPanel hosting account with:
- Node.js support (v16+ required)
- File Manager access
- Domain or subdomain configured
- Email account for SMTP

✅ Your files:
- `nuclearvirality-app.zip` (downloaded from this project)

---

## 🏗️ DEPLOYMENT ARCHITECTURE

```
yourdomain.com                    → Frontend (React static files)
yourdomain.com/api                → Backend API (Node.js app)
OR
api.yourdomain.com                → Backend API (subdomain)
```

We'll use **Option 1** (same domain) for simplicity.

---

## 📦 STEP 1: BUILD FRONTEND LOCALLY

**On your computer:**

```bash
# Navigate to project
cd nuclearvirality-app

# Install dependencies
npm install

# Build production files
npm run build
```

This creates a `dist/` folder with optimized files.

---

## 🌐 STEP 2: UPLOAD FRONTEND TO CPANEL

### **2.1: Access cPanel File Manager**

1. Login to cPanel
2. Click **File Manager**
3. Navigate to `public_html` (or your domain's root folder)

### **2.2: Upload Built Files**

1. Click **Upload**
2. Upload the entire `dist/` folder contents (NOT the dist folder itself)
3. You should see files like:
   - `index.html`
   - `assets/` folder
   - Other build files

### **2.3: Create .htaccess for React Router**

In `public_html/`, create a new file named `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle React Router - send all requests to index.html
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
```

**Frontend is now live at:** `https://yourdomain.com` ✅

---

## ⚙️ STEP 3: SETUP BACKEND (NODE.JS API)

### **3.1: Create Application Folder**

In cPanel File Manager:

1. Navigate to home directory (not public_html)
2. Create new folder: `nuclearvirality-api`
3. This keeps API code separate from web root

### **3.2: Upload Backend Files**

Upload these files to `nuclearvirality-api/`:

```
nuclearvirality-api/
├── server.js
├── package.json
├── .env
├── emails.json (will be created automatically)
└── assets/
    └── NuclearVirality_Meta_Ads_Masterclass.pdf
```

**How to upload:**
1. Compress server folder on your computer: `server.zip`
2. Upload `server.zip` to `nuclearvirality-api/`
3. Right-click → Extract
4. Delete the zip file

### **3.3: Configure Environment Variables**

Create `.env` file in `nuclearvirality-api/`:

```env
# Email Configuration (USE CPANEL EMAIL)
EMAIL_USER=contact@yourdomain.com
EMAIL_PASS=your-cpanel-email-password

# Server Configuration
PORT=3000
NODE_ENV=production

# Optional
CALENDLY_LINK=https://calendly.com/your-link
```

**⚠️ IMPORTANT:** Use your cPanel email account credentials, not Gmail!

---

## 🚀 STEP 4: SETUP NODE.JS APPLICATION IN CPANEL

### **4.1: Access Node.js Selector**

1. In cPanel, search for **"Setup Node.js App"**
2. Click on it

### **4.2: Create New Application**

Click **"Create Application"** and configure:

**Application Settings:**
- **Node.js version:** 16.x or higher
- **Application mode:** Production
- **Application root:** `nuclearvirality-api`
- **Application URL:** `/api` (or subdomain like `api.yourdomain.com`)
- **Application startup file:** `server.js`
- **Environment variables:** Click "Add Variable"
  - Add each variable from your `.env` file

**Click "Create"**

### **4.3: Install Dependencies**

After creating the app, you'll see a terminal command. Run it:

1. Click **"Run NPM Install"** button
2. OR use cPanel Terminal:

```bash
cd ~/nuclearvirality-api
npm install --production
```

### **4.4: Start the Application**

1. Click **"Start App"** button in Node.js App Manager
2. Status should show: **"Running"**

**Backend is now live at:** `https://yourdomain.com/api` ✅

---

## 🔗 STEP 5: CONNECT FRONTEND TO BACKEND

### **5.1: Update API URL in Frontend**

Before building, edit `src/pages/LandingPage.jsx`:

**Change this:**
```javascript
const response = await fetch('http://localhost:5000/api/capture-lead', {
```

**To this:**
```javascript
const response = await fetch('/api/capture-lead', {
```

OR if using subdomain:
```javascript
const response = await fetch('https://api.yourdomain.com/api/capture-lead', {
```

### **5.2: Update CORS in Backend**

Edit `server.js`, update CORS configuration:

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
```

### **5.3: Rebuild and Reupload Frontend**

```bash
npm run build
# Upload new dist/ contents to public_html
```

---

## 📧 STEP 6: CONFIGURE CPANEL EMAIL (ALTERNATIVE TO GMAIL)

### **6.1: Use cPanel SMTP (Recommended for cPanel hosting)**

Update `server.js` SMTP configuration:

```javascript
const transporter = nodemailer.createTransport({
  host: 'mail.yourdomain.com', // Your cPanel mail server
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### **6.2: Create Email Account in cPanel**

1. Go to cPanel → **Email Accounts**
2. Create: `contact@yourdomain.com`
3. Set a strong password
4. Use these credentials in `.env`

---

## 🧪 STEP 7: TEST THE DEPLOYMENT

### **7.1: Test Frontend**

Visit: `https://yourdomain.com`

- Should load landing page
- Navigation should work
- All pages should load
- No console errors

### **7.2: Test API**

```bash
curl -X POST https://yourdomain.com/api/capture-lead \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Should return: `{"success":true,...}`

### **7.3: Test Email Capture**

1. Go to your live site
2. Enter your email
3. Click "GET INSTANT ACCESS"
4. Check your inbox for PDF

---

## 🔒 STEP 8: SECURITY & PERMISSIONS

### **8.1: Set File Permissions**

In File Manager, set permissions:

```
nuclearvirality-api/
├── server.js           → 644
├── package.json        → 644
├── .env                → 600 (important!)
├── emails.json         → 644
└── assets/             → 755
```

### **8.2: Protect Sensitive Files**

Create `.htaccess` in `nuclearvirality-api/`:

```apache
# Deny access to all files
<FilesMatch ".*">
  Order allow,deny
  Deny from all
</FilesMatch>

# Allow only specific file types
<FilesMatch "\.(jpg|jpeg|png|gif|pdf)$">
  Order allow,deny
  Allow from all
</FilesMatch>
```

### **8.3: Enable HTTPS**

1. In cPanel → **SSL/TLS Status**
2. Enable SSL for your domain
3. Update frontend URLs to use `https://`

---

## 📊 STEP 9: MONITORING & MAINTENANCE

### **9.1: View Application Logs**

In cPanel Node.js App Manager:
- Click on your app
- View **"Log"** section for errors

### **9.2: View Captured Leads**

Access via SSH or File Manager:
```bash
cat ~/nuclearvirality-api/emails.json
```

OR create admin endpoint (secure it!):
```
https://yourdomain.com/api/leads
```

### **9.3: Restart Application**

If you make changes:
1. Go to Node.js App Manager
2. Click **"Restart"** button

---

## 🚨 TROUBLESHOOTING

### **Frontend Issues**

**"Page not found" on refresh:**
- Check `.htaccess` is in `public_html/`
- Verify RewriteEngine is On

**"Mixed content" errors:**
- Ensure all URLs use `https://`
- Update API endpoints in code

**CSS not loading:**
- Check file permissions (644)
- Clear browser cache
- Verify `assets/` folder uploaded correctly

---

### **Backend Issues**

**"Application not running":**
```bash
# Check Node.js App Manager status
# View logs for errors
# Verify package.json exists
# Run npm install again
```

**"Cannot send email":**
- Verify email credentials in `.env`
- Check cPanel email account exists
- Test SMTP settings
- Check firewall isn't blocking port 465/587

**"Cannot write to emails.json":**
```bash
# Fix permissions
chmod 644 ~/nuclearvirality-api/emails.json
```

**"Module not found":**
```bash
cd ~/nuclearvirality-api
npm install --production
# Restart app in cPanel
```

---

### **API Connection Issues**

**CORS errors in browser:**
- Update CORS settings in `server.js`
- Add your domain to allowed origins
- Restart Node.js app

**404 on API endpoints:**
- Verify Application URL in Node.js setup
- Check `.htaccess` isn't blocking requests
- Confirm app is running (Status: Running)

---

## 🎯 ALTERNATIVE: SUBDOMAIN DEPLOYMENT

If you want: `api.yourdomain.com`

### **Create Subdomain:**

1. cPanel → **Subdomains**
2. Create: `api`
3. Document root: `nuclearvirality-api/public` (create this folder)

### **Update Node.js App:**

- Application URL: `api.yourdomain.com`
- Adjust paths accordingly

### **Update Frontend:**

Change API calls to:
```javascript
fetch('https://api.yourdomain.com/api/capture-lead', ...)
```

---

## 📋 DEPLOYMENT CHECKLIST

**Pre-Deployment:**
- [ ] Build frontend locally (`npm run build`)
- [ ] Test locally first
- [ ] Prepare email credentials
- [ ] Backup any existing site files

**Frontend Deployment:**
- [ ] Upload `dist/` contents to `public_html/`
- [ ] Create `.htaccess` for React Router
- [ ] Test all pages load correctly
- [ ] Verify HTTPS is working

**Backend Deployment:**
- [ ] Upload server files to `nuclearvirality-api/`
- [ ] Create `.env` with production values
- [ ] Setup Node.js app in cPanel
- [ ] Install dependencies
- [ ] Start application
- [ ] Verify "Running" status

**Integration:**
- [ ] Update API URL in frontend
- [ ] Configure CORS in backend
- [ ] Test email capture flow
- [ ] Check PDF delivery works

**Security:**
- [ ] Set proper file permissions
- [ ] Enable HTTPS/SSL
- [ ] Protect `.env` file
- [ ] Test from different devices

**Post-Deployment:**
- [ ] Monitor error logs
- [ ] Test all user flows
- [ ] Check mobile responsiveness
- [ ] Set up regular backups

---

## 💡 OPTIMIZATION TIPS

### **Performance:**

1. **Enable Gzip compression** (add to .htaccess)
2. **Enable browser caching** (already in .htaccess above)
3. **Use CDN for static assets** (Cloudflare)
4. **Optimize images** before uploading

### **Reliability:**

1. **Set up cron job** to restart app if it crashes
2. **Monitor disk space** (emails.json will grow)
3. **Regular backups** of emails.json
4. **Log rotation** to prevent log files from filling disk

### **Scaling:**

When you outgrow cPanel:
- Migrate to VPS (DigitalOcean, Linode)
- Use managed Node.js hosting (Heroku, Railway)
- Implement Redis caching
- Upgrade to PostgreSQL database

---

## 🆘 COMMON CPANEL LIMITATIONS

**Shared Hosting Limits:**

⚠️ **Memory:** Node apps may have 512MB-1GB limit  
⚠️ **CPU:** Shared resources, may throttle  
⚠️ **Processes:** Limited concurrent connections  
⚠️ **Disk Space:** Watch emails.json file size  

**Solutions:**

- Upgrade to VPS if traffic grows
- Implement rate limiting
- Archive old leads regularly
- Use external email service (SendGrid) for high volume

---

## 📞 NEED MORE HELP?

**cPanel Documentation:**
- https://docs.cpanel.net/

**Node.js on cPanel:**
- https://docs.cpanel.net/cpanel/software/setup-nodejs-app/

**Contact Your Host:**
- Many hosts offer free migration assistance
- Ask about Node.js support specifics

---

## ✅ SUCCESS INDICATORS

Your deployment is successful when:

✅ Frontend loads at `https://yourdomain.com`  
✅ All navigation links work  
✅ Node.js app shows "Running" in cPanel  
✅ Email form captures and shows success message  
✅ PDF arrives in inbox within 30 seconds  
✅ emails.json file populates with leads  
✅ No errors in browser console  
✅ No errors in Node.js app logs  

---

## ☢️ DEPLOYMENT STATUS: READY FOR CPANEL

This guide covers **100% of the deployment process** for cPanel hosting.

Follow step-by-step. Test each stage. Deploy with confidence.

**Your lead generation machine is ready to go live.**

---

**NuclearVirality**  
🧬 EliteMasterNuclearEngineer  
*Deploy. Capture. Convert.*
