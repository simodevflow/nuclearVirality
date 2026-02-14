import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Path to store emails
const EMAIL_DB_PATH = path.join(__dirname, 'emails.json');

// Initialize email database if doesn't exist
if (!fs.existsSync(EMAIL_DB_PATH)) {
  fs.writeFileSync(EMAIL_DB_PATH, JSON.stringify({ leads: [] }, null, 2));
  console.log('✅ Created emails.json database');
}

// Email transporter configuration
// For cPanel hosting, use cPanel mail server
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'localhost',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // For cPanel self-signed certs
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Endpoint: Save email and send PDF
app.post('/api/capture-lead', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log(`📧 Processing lead: ${email}`);

    // Read existing emails
    let data;
    try {
      data = JSON.parse(fs.readFileSync(EMAIL_DB_PATH, 'utf8'));
    } catch (err) {
      console.error('Error reading database:', err);
      data = { leads: [] };
    }

    // Check if email already exists
    const existingLead = data.leads.find(lead => lead.email === email);
    
    if (!existingLead) {
      // Add new lead
      const newLead = {
        email,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
        status: 'new',
        pdfSent: false
      };

      data.leads.push(newLead);
      
      try {
        fs.writeFileSync(EMAIL_DB_PATH, JSON.stringify(data, null, 2));
        console.log(`✅ Saved lead: ${email}`);
      } catch (err) {
        console.error('Error writing to database:', err);
      }
    } else {
      console.log(`ℹ️  Lead already exists: ${email}`);
    }

    // Send email with PDF attachment
    const pdfPath = path.join(__dirname, 'assets', 'NuclearVirality_Meta_Ads_Masterclass.pdf');
    
    // Check if PDF exists
    if (!fs.existsSync(pdfPath)) {
      console.error('❌ PDF file not found:', pdfPath);
      return res.status(500).json({ error: 'PDF file not found on server' });
    }

    const domain = process.env.DOMAIN || 'yourdomain.com';
    const calendlyLink = process.env.CALENDLY_LINK || 'https://calendly.com/your-link';
    
    const mailOptions = {
      from: `NuclearVirality <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '☢️ Your Meta Ads Masterclass is Ready',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #2d1b4e 100%); border-radius: 10px; padding: 30px; }
            .logo { text-align: center; margin-bottom: 30px; }
            .logo h1 { color: #a855f7; font-size: 32px; margin: 0; }
            .content { line-height: 1.6; }
            .button { display: inline-block; background: linear-gradient(to right, #9333ea, #ec4899); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; font-weight: bold; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #444; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <h1>☢️ NuclearVirality</h1>
              <p style="color: #888;">EliteMasterViralEngineer</p>
            </div>
            
            <div class="content">
              <h2 style="color: #22d3ee;">Your Meta Ads Masterclass Has Arrived</h2>
              
              <p>Welcome to the elite circle of business leaders who scale profitably on Meta.</p>
              
              <p><strong>What's inside your Masterclass:</strong></p>
              <ul>
                <li>The complete Meta advertising ecosystem decoded</li>
                <li>Campaign architecture that drives 10X ROAS</li>
                <li>AI optimization secrets the top 1% use</li>
                <li>The exact 5-step system we use to scale brands</li>
                <li>2026 strategies that maximize your ad spend</li>
              </ul>
              
              <p>Your PDF is attached to this email. Download it now and discover why "boosting posts" is killing your budget.</p>
              
              <h3 style="color: #a855f7;">Ready to Scale?</h3>
              <p>Book your free 30-minute strategy session. We'll audit your current setup and show you exactly where you're leaving money on the table.</p>
              
              <a href="${calendlyLink}" class="button">BOOK YOUR FREE STRATEGY CALL</a>
              
              <p><strong>What happens on the call:</strong></p>
              <ul>
                <li>15-minute audit of your current Meta Ads setup</li>
                <li>Identify your biggest leakage points</li>
                <li>Custom roadmap to 10X your ROAS</li>
                <li>Zero pressure. Just pure strategy.</li>
              </ul>
              
              <p>See you inside,<br>
              <strong>The NuclearVirality Team</strong></p>
            </div>
            
            <div class="footer">
              <p>NuclearVirality | EliteMasterViralEngineer</p>
              <p>We install tracking → define your goal → provide creative → Meta's AI finds buyers → we analyze & improve weekly</p>
              <p style="margin-top: 15px;">You received this email because you requested the Meta Ads Masterclass from ${domain}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: 'NuclearVirality_Meta_Ads_Masterclass.pdf',
          path: pdfPath
        }
      ]
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent to: ${email}`);
      
      // Update lead status
      const updatedData = JSON.parse(fs.readFileSync(EMAIL_DB_PATH, 'utf8'));
      const leadToUpdate = updatedData.leads.find(lead => lead.email === email);
      if (leadToUpdate) {
        leadToUpdate.pdfSent = true;
        leadToUpdate.lastEmailSent = new Date().toISOString();
        fs.writeFileSync(EMAIL_DB_PATH, JSON.stringify(updatedData, null, 2));
      }

      res.json({ 
        success: true, 
        message: 'Email captured and PDF sent successfully' 
      });
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      res.status(500).json({ 
        error: 'Failed to send email',
        details: emailError.message 
      });
    }

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// Endpoint: Get all leads (admin only - should be secured in production!)
app.get('/api/leads', (req, res) => {
  try {
    // TODO: Add authentication here for production!
    const data = JSON.parse(fs.readFileSync(EMAIL_DB_PATH, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leads' });
  }
});

// Endpoint: Get lead count
app.get('/api/stats', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(EMAIL_DB_PATH, 'utf8'));
    res.json({
      totalLeads: data.leads.length,
      newLeads: data.leads.filter(l => l.status === 'new').length,
      pdfsSent: data.leads.filter(l => l.pdfSent).length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve stats' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log('☢️ ====================================');
  console.log('   NUCLEARVIRALITY BACKEND STARTED');
  console.log('☢️ ====================================');
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`📧 Email capture: http://localhost:${PORT}/api/capture-lead`);
  console.log(`📊 Stats: http://localhost:${PORT}/api/stats`);
  console.log(`🏥 Health: http://localhost:${PORT}/api/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('☢️ ====================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});
