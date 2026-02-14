# ☢️ NuclearVirality - Complete Lead Generation System

Full-stack React + Node.js application with email capture, PDF delivery, and trust-building pages.

---

## 🎯 WHAT'S INCLUDED

### **Frontend (React + Vite)**
- Landing Page with nuclear theme
- About Us page
- Case Studies page
- Testimonials page
- FAQ page
- Multi-page navigation
- Mobile-responsive design

### **Backend (Node.js + Express)**
- Email capture API
- Automatic PDF delivery via email
- Local JSON database for leads
- Admin endpoints for stats

---

## 🚀 QUICK START (2 Terminals Required)

### **Terminal 1: Frontend**

```bash
cd nuclearvirality-app
npm install
npm run dev
```
✅ Opens at `http://localhost:3000`

### **Terminal 2: Backend**

```bash
cd nuclearvirality-app/server
npm install
cp .env.example .env
# Edit .env with your email credentials
npm start
```
✅ API runs at `http://localhost:5000`

---

## 📧 EMAIL CONFIGURATION (REQUIRED)

The backend sends PDFs via email. You need to configure email settings:

### **Using Gmail (Recommended)**

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
3. **Update server/.env file:**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx
```

### **Using Other Email Services**

Update `server/server.js` with your SMTP settings:

```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

---

## 📁 PROJECT STRUCTURE

```
nuclearvirality-app/
├── src/                          # Frontend React code
│   ├── App.jsx                   # Main app with routing
│   ├── components/
│   │   └── Navigation.jsx        # Navigation bar
│   ├── pages/
│   │   ├── LandingPage.jsx       # Home page
│   │   ├── AboutPage.jsx         # About us
│   │   ├── CaseStudiesPage.jsx   # Case studies
│   │   ├── TestimonialsPage.jsx  # Client reviews
│   │   └── FAQPage.jsx           # Frequently asked questions
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── server/                       # Backend Node.js code
│   ├── server.js                 # Express API server
│   ├── emails.json               # Local lead database
│   ├── assets/
│   │   └── NuclearVirality_Meta_Ads_Masterclass.pdf
│   ├── .env.example              # Environment variables template
│   └── package.json              # Backend dependencies
├── package.json                  # Frontend dependencies
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS config
└── README.md                     # This file
```

---

## 🔧 DETAILED SETUP STEPS

### **STEP 1: Install Frontend Dependencies**

```bash
cd nuclearvirality-app
npm install
```

**Installs:**
- React + React DOM
- React Router DOM (routing)
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)

**Time:** ~1-2 minutes

---

### **STEP 2: Install Backend Dependencies**

```bash
cd server
npm install
```

**Installs:**
- Express (web server)
- Nodemailer (email delivery)
- CORS (cross-origin requests)

**Time:** ~30 seconds

---

### **STEP 3: Configure Email Settings**

```bash
cd server
cp .env.example .env
```

Edit `.env` file with your credentials (see Email Configuration section above)

---

### **STEP 4: Start Backend Server**

```bash
cd server
npm start
```

**Expected output:**
```
☢️ NuclearVirality Backend running on http://localhost:5000
📧 Email capture API: http://localhost:5000/api/capture-lead
📊 Admin stats: http://localhost:5000/api/stats
```

**Keep this terminal running!**

---

### **STEP 5: Start Frontend (New Terminal)**

```bash
cd nuclearvirality-app
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 543 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

**Browser opens automatically!**

---

### **STEP 6: Test Email Capture**

1. Navigate to `http://localhost:3000`
2. Enter your email in the form
3. Click "GET INSTANT ACCESS"
4. Check your email for the PDF!

---

## 📊 BACKEND API ENDPOINTS

### **POST /api/capture-lead**
Save email and send PDF

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email captured and PDF sent successfully"
}
```

### **GET /api/leads**
Get all captured leads (admin only)

**Response:**
```json
{
  "leads": [
    {
      "email": "user@example.com",
      "timestamp": "2026-02-14T10:30:00.000Z",
      "source": "landing_page",
      "status": "new",
      "pdfSent": true
    }
  ]
}
```

### **GET /api/stats**
Get lead statistics

**Response:**
```json
{
  "totalLeads": 42,
  "newLeads": 12,
  "pdfsSent": 40
}
```

---

## 🎨 AVAILABLE PAGES

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Email capture + Masterclass info |
| About | `/about` | Company story + team |
| Case Studies | `/case-studies` | Real client results |
| Testimonials | `/testimonials` | Client reviews |
| FAQ | `/faq` | Common questions |

---

## 🛠️ DEVELOPMENT COMMANDS

### **Frontend**

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### **Backend**

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm start` | Start server (http://localhost:5000) |
| `npm run dev` | Start with auto-reload (requires nodemon) |



---

## 🎨 CUSTOMIZATION

### **Change Page Content**

All pages are in `src/pages/`:
- `LandingPage.jsx` - Home page
- `AboutPage.jsx` - About us
- `CaseStudiesPage.jsx` - Case studies
- `TestimonialsPage.jsx` - Client reviews
- `FAQPage.jsx` - FAQ

### **Change Colors**

Modify Tailwind classes:
- `bg-purple-600` → `bg-blue-600`
- `from-purple-400 to-cyan-400` → Change gradients

### **Update Email Template**

Edit `server/server.js` → Find `mailOptions.html` section

### **Change Booking Calendar Link**

Update `.env` file:
```env
CALENDLY_LINK=https://calendly.com/your-link
```

---

## ⚡ TROUBLESHOOTING

### **Backend Errors**

**"Cannot find module 'express'"**
```bash
cd server
npm install
```

**"Email sending failed"**
- Check `.env` file has correct credentials
- For Gmail: Ensure App Password is generated
- Check console for specific error message

**"Port 5000 already in use"**
```bash
# Change port in server/.env
PORT=5001
```

### **Frontend Errors**

**"Cannot find module 'react-router-dom'"**
```bash
npm install
```

**"Port 3000 already in use"**
Edit `vite.config.js`:
```js
server: { port: 3001 }
```

**"Blank page after starting"**
- Check browser console for errors
- Ensure backend is running
- Hard refresh: `Ctrl + Shift + R`

### **Email Not Sending**

1. Check server console for errors
2. Verify `.env` credentials
3. Test with: `curl -X POST http://localhost:5000/api/capture-lead -H "Content-Type: application/json" -d '{"email":"test@example.com"}'`

---

## 📊 HOW IT WORKS

### **Email Capture Flow:**

1. User enters email on landing page
2. Frontend sends email to `POST /api/capture-lead`
3. Backend:
   - Saves email to `emails.json`
   - Sends PDF attachment via Nodemailer
   - Returns success response
4. Frontend shows success message
5. User receives email with PDF + booking link

### **Lead Storage:**

All emails stored in `server/emails.json`:
```json
{
  "leads": [
    {
      "email": "user@example.com",
      "timestamp": "2026-02-14T10:30:00.000Z",
      "source": "landing_page",
      "status": "new",
      "pdfSent": true,
      "lastEmailSent": "2026-02-14T10:30:05.000Z"
    }
  ]
}
```

---

## 🚀 DEPLOYMENT

### **Frontend Deployment (Vercel)**

```bash
npm install -g vercel
cd nuclearvirality-app
vercel
```

### **Backend Deployment (Heroku)**

```bash
cd server
heroku create nuclearvirality-api
git init
git add .
git commit -m "Initial commit"
git push heroku master
```

**Set environment variables:**
```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
```

### **Update Frontend to Use Production Backend**

Edit `src/pages/LandingPage.jsx`:
```javascript
const response = await fetch('https://your-backend-url.herokuapp.com/api/capture-lead', {
  // ...
});
```

---

## ✅ PRE-LAUNCH CHECKLIST

Before deploying to production:

- [ ] Test email capture on localhost
- [ ] Verify PDF is being delivered
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Update Calendly link in `.env`
- [ ] Configure Meta Pixel (optional)
- [ ] Set up Google Analytics (optional)
- [ ] Test on multiple browsers
- [ ] Update email copy if needed
- [ ] Set up proper domain name

---

## 📈 MONITORING & ANALYTICS

### **View Captured Leads**

```bash
# View leads file
cat server/emails.json

# Or use API
curl http://localhost:5000/api/leads
```

### **Get Statistics**

```bash
curl http://localhost:5000/api/stats
```

**Response:**
```json
{
  "totalLeads": 42,
  "newLeads": 12,
  "pdfsSent": 40
}
```

---

## 🆘 NEED HELP?

### **Common Issues**

**Node.js not installed?**
Download: https://nodejs.org/

**npm command not found?**
Reinstall Node.js

**Email not working?**
Use Gmail with App Password (easiest setup)

---

## 🎯 FEATURES SUMMARY

✅ **Multi-Page Trust System**
- Landing page with email capture
- About page with company story
- Case studies with real results
- Testimonials from actual clients
- FAQ page answering common questions

✅ **Automated Email Delivery**
- PDF sent automatically on form submission
- Professional branded email template
- Booking calendar link included

✅ **Lead Management**
- Local JSON database
- Admin API endpoints
- Lead statistics tracking

✅ **Production-Ready Design**
- Nuclear energy theme
- Mobile-responsive
- Animated elements
- Professional UI/UX

---

## ☢️ NUCLEAR POWER STATUS: FULLY ARMED

This is a complete, production-ready lead generation system.

**Frontend:** React + Vite + Tailwind + React Router
**Backend:** Node.js + Express + Nodemailer
**Database:** Local JSON (upgradeable to MongoDB/PostgreSQL)

No placeholders. No "TODO" comments. Just working code.

**Deploy. Capture. Convert.**

---

**NuclearVirality**  
EliteMasterViralEngineer  
*Your key to scaling efficiently in 2026*
