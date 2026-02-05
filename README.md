# Home-Budget-Calculator

Home Budget Calculator - A comprehensive financial planning tool by William Ippolito, Financial Advisor.

Managing your monthly budget can be difficult and frustrating. One of the most important aspects of controlling your budget is to determine where your money is going. This calculator helps you do just that. By entering your income and monthly expenditures, you can see how much you have left to save.

## Features

- **Comprehensive Budget Tracking**: Track all income sources and expense categories
- **Real-time Calculations**: Automatically calculates totals as you type
- **Contact Information**: Mandatory fields for Name, Email, and Phone Number
- **Detailed Reporting**: Generate comprehensive budget reports
- **Email Integration**: Automatically emails reports to wippolito@gmail.com
- **Professional Design**: Clean, responsive interface with gradient styling
- **Budget Analysis**: Provides insights on your financial situation

## Quick Start

### Option 1: Static HTML (No Email Functionality)

Simply open `index.html` in your web browser. The calculator will work fully, but reports will be downloaded as text files instead of being emailed.

### Option 2: Full Server Setup (With Email Functionality)

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Email Settings**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your email credentials:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   PORT=3000
   ```

   **For Gmail Users:**
   - Enable 2-Factor Authentication on your Google account
   - Go to Google Account → Security → App Passwords
   - Generate a new app password for "Mail"
   - Use that 16-character password in the `.env` file

4. **Start the Server**
   ```bash
   npm start
   ```

5. **Access the Calculator**
   - Open your browser and go to: http://localhost:3000

## Usage

1. **Enter Contact Information** (Required)
   - Name
   - Email Address
   - Phone Number

2. **Enter Monthly Income**
   - Salary/Wages
   - Bonuses
   - Commissions
   - Self-Employment Income
   - Investment Income
   - Other Income

3. **Enter Monthly Expenses**
   Organized by categories:
   - Housing (Mortgage/Rent, Insurance, Taxes, Maintenance)
   - Utilities (Electricity, Gas, Water, Phone, Internet)
   - Transportation (Car Payment, Insurance, Gas, Maintenance)
   - Food (Groceries, Dining Out)
   - Healthcare (Insurance, Medications, Medical Expenses)
   - Personal (Clothing, Personal Care, Entertainment)
   - Debt Payments (Credit Cards, Student Loans, Personal Loans)
   - Savings & Investments (Retirement, Emergency Fund, Investments)
   - Other (Childcare, Pet Care, Donations, etc.)

4. **Calculate**
   - Click "Calculate" to update totals
   - View real-time budget summary

5. **Generate Report**
   - Click "View Report" to generate and email the detailed report
   - Report includes all income, expenses, and financial analysis
   - Automatically sent to wippolito@gmail.com

## File Structure

```
Home-Budget-Calculator/
├── index.html          # Main HTML file
├── styles.css          # Styling and design
├── script.js           # JavaScript functionality
├── server.js           # Node.js email server
├── package.json        # Node.js dependencies
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Styling**: Custom CSS with gradients and responsive design

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Contact

**William Ippolito, Financial Advisor**
- Email: wippolito@gmail.com

For personalized financial advice and consultation, please reach out via email.

## License

MIT License - Feel free to use and modify for your needs.

