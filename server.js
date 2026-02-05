const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Email configuration
// Note: You need to set up environment variables for email credentials
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password'
    }
});

// API endpoint to send budget report
app.post('/api/send-report', async (req, res) => {
    try {
        const { name, email, phone, totalIncome, totalExpenses, netIncome, report } = req.body;
        
        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required contact information' 
            });
        }
        
        // Create email HTML content
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 20px; text-align: center; }
                    .section { margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 5px; }
                    .summary { background: #e3f2fd; padding: 15px; border-left: 4px solid #2196F3; }
                    .positive { color: #28a745; font-weight: bold; }
                    .negative { color: #dc3545; font-weight: bold; }
                    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background-color: #f0f0f0; }
                    .report-text { white-space: pre-wrap; font-family: 'Courier New', monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Home Budget Calculator Report</h1>
                        <h3>William Ippolito, Financial Advisor</h3>
                    </div>
                    
                    <div class="section">
                        <h2>Client Information</h2>
                        <table>
                            <tr><th>Name:</th><td>${name}</td></tr>
                            <tr><th>Email:</th><td>${email}</td></tr>
                            <tr><th>Phone:</th><td>${phone}</td></tr>
                            <tr><th>Report Date:</th><td>${new Date().toLocaleDateString()}</td></tr>
                        </table>
                    </div>
                    
                    <div class="section summary">
                        <h2>Budget Summary</h2>
                        <table>
                            <tr>
                                <th>Total Monthly Income:</th>
                                <td class="positive">${totalIncome}</td>
                            </tr>
                            <tr>
                                <th>Total Monthly Expenses:</th>
                                <td>${totalExpenses}</td>
                            </tr>
                            <tr>
                                <th>Net Income:</th>
                                <td class="${parseFloat(netIncome.replace(/[^0-9.-]+/g, '')) >= 0 ? 'positive' : 'negative'}">${netIncome}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="section">
                        <h2>Detailed Report</h2>
                        <div class="report-text">${report}</div>
                    </div>
                    
                    <div class="section">
                        <p><strong>For personalized financial advice, please contact:</strong></p>
                        <p>William Ippolito, Financial Advisor<br>
                        Email: wippolito@gmail.com</p>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@budgetcalculator.com',
            to: 'wippolito@gmail.com',
            subject: `Budget Report - ${name}`,
            html: htmlContent,
            text: report
        };
        
        // Send email
        await transporter.sendMail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Report sent successfully to wippolito@gmail.com' 
        });
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send report. Please try again later.',
            error: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Home Budget Calculator server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to use the calculator`);
});
