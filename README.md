# 💰 Expense Calculator

A beautiful, interactive web application for tracking expenses, planning savings, and achieving financial goals.

## ✨ Features

### 📊 Dashboard
- Real-time financial overview
- Monthly salary and spending tracking
- Animated number counters
- Interactive charts and visualizations

### 💸 Expense Tracker
- Daily, weekly, and monthly expense limits
- Automatic calculations
- Spending alerts
- Remaining balance display

### 🐷 Savings Planner
- Set savings percentage goals
- Monthly and yearly savings projections
- Visual breakdown of savings vs spending
- Progress tracking

### 🎯 Goal Planner
- Plan dream purchases
- Calculate time to achieve goals
- Monthly contribution tracking
- Progress visualization

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization

### Backend
- **Express.js** - API server
- **MongoDB** - Database
- **Mongoose** - ODM

## 🚀 Getting Started

> **Quick Setup**: See [QUICK_START.md](QUICK_START.md) for the fastest way to get running!  
> **Detailed Instructions**: See [INSTALLATION.md](INSTALLATION.md) for step-by-step setup.

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- MongoDB (local or Atlas) - [Download here](https://www.mongodb.com/try/download/community) or use [Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/expense-calculator
   PORT=5000
   ```

3. **Start the development servers:**
   ```bash
   # Terminal 1: Start frontend
   npm run dev
   
   # Terminal 2: Start backend
   npm run server:dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## 📁 Project Structure

```
├── src/                       # Frontend React Application
│   ├── components/            # React Components
│   │   ├── AnimatedNumber.jsx # Number animation utility
│   │   ├── Dashboard.jsx      # Main dashboard with charts
│   │   ├── ExpenseTracker.jsx # Expense tracking page
│   │   ├── Goals.jsx          # Goal planning page
│   │   ├── Icons.jsx          # SVG icon components
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── Savings.jsx        # Savings planner page
│   │   └── Sidebar.jsx        # Left sidebar navigation
│   ├── services/              # API Service Layer
│   │   └── api.js             # API calls to backend
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles with Tailwind
├── server/                    # Backend Express API
│   ├── models/                # MongoDB Models
│   │   └── User.js            # User schema
│   ├── routes/                # API Routes
│   │   ├── expenses.js        # Expense endpoints
│   │   └── users.js           # User endpoints
│   └── index.js               # Express server
├── public/                    # Static Assets
│   └── vite.svg               # Vite logo
├── package.json               # Dependencies & Scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Project documentation
├── INSTALLATION.md            # Detailed installation guide
├── QUICK_START.md             # Quick start guide
└── .gitignore                 # Git ignore rules
```

## 🎨 Design Features

- **Light theme** - Clean background with dark text for readability
- **Responsive design** - Works on desktop and mobile
- **Smooth animations** - Framer Motion powered transitions
- **Interactive charts** - Recharts for data visualization
- **Modern UI** - Clean cards, shadows, and gradients

## 🔧 API Endpoints

### Users
- `GET /api/users/:userId` - Get or create user
- `PUT /api/users/:userId` - Update user data
- `PATCH /api/users/:userId/financial` - Update financial data
- `PATCH /api/users/:userId/goal` - Update goal

### Expenses
- `GET /api/expenses/:userId` - Get all expenses
- `POST /api/expenses/:userId` - Add expense
- `DELETE /api/expenses/:userId/:expenseId` - Delete expense

## 📈 Calculations

### Expense Limits
- Daily Limit = Monthly Spending ÷ 30
- Weekly Limit = Monthly Spending ÷ 4

### Savings
- Savings Amount = (Monthly Salary × Savings %) ÷ 100
- Yearly Gain = Savings Amount × 12

### Goals
- Monthly Goal Saving = (Monthly Salary × Goal %) ÷ 100
- Months Needed = Item Price ÷ Monthly Goal Saving

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests.

## 📝 License

MIT License

## 👨‍💻 Author

Created with ❤️ for managing personal finances

