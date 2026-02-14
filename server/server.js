import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store emails
const EMAIL_DB_PATH = path.join(__dirname, 'emails.json');

// Initialize email database if doesn't exist
if (!fs.existsSync(EMAIL_DB_PATH)) {
  fs.writeFileSync(EMAIL_DB_PATH, JSON.stringify({ leads: [] }, null, 2));
}

// Email transporter configuration (using Gmail as example)
// IMPORTANT: Replace with your actual email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Endpoint: Save email and send PDF
app.post('/api/capture-lead', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Read existing emails
    const data = JSON.parse(fs.readFileSync(EMAIL_DB_PATH, 'utf8'));

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
      fs.writeFileSync(EMAIL_DB_PATH, JSON.stringify(data, null, 2));
    }

    // Send email with PDF attachment
    const pdfPath = path.join(__dirname, 'assets', 'NuclearVirality_Meta_Ads_Masterclass.pdf');
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
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
              
              <a href="https://calendly.com/your-link" class="button">BOOK YOUR FREE STRATEGY CALL</a>
              
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
              <p style="margin-top: 15px;">You received this email because you requested the Meta Ads Masterclass from nuclearvirality.com</p>
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
    await transporter.sendMail(mailOptions);

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

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// Endpoint: Get all leads (for admin)
app.get('/api/leads', (req, res) => {
  try {
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

app.listen(PORT, () => {
  console.log(`☢️ NuclearVirality Backend running on http://localhost:${PORT}`);
  console.log(`📧 Email capture API: http://localhost:${PORT}/api/capture-lead`);
  console.log(`📊 Admin stats: http://localhost:${PORT}/api/stats`);
});
