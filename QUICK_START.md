# ⚡ Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies (One Time Setup)
```bash
npm install
```

### 2. Start MongoDB (Required)
**Option A - Local MongoDB:**
```bash
# macOS with Homebrew
brew services start mongodb-community

# Or start manually
mongod --config /usr/local/etc/mongod.conf
```

**Option B - MongoDB Atlas (No Installation Needed):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Update `.env` file

### 3. Run Both Servers

**Terminal 1 (Frontend):**
```bash
npm run dev
```
→ Opens at http://localhost:3000

**Terminal 2 (Backend):**
```bash
npm run server:dev
```
→ Runs at http://localhost:5000

### 4. Open Your Browser
Navigate to: **http://localhost:3000**

---

## 🎯 Quick Test

1. Enter monthly salary (e.g., ₹50,000)
2. Enter monthly spending (e.g., ₹30,000)
3. Set savings percentage (e.g., 20%)
4. Watch the dashboard update in real-time!

---

## 📋 What You Get

✅ **Dashboard**: Overview with charts and metrics  
✅ **Expense Tracker**: Daily/weekly/monthly limits  
✅ **Savings Planner**: Goal tracking and projections  
✅ **Goal Planner**: Dream purchase timeline calculator  
✅ **Data Persistence**: All data saved in MongoDB  
✅ **Beautiful UI**: Modern design with animations  

---

## 🛠️ Common Commands

```bash
# Install dependencies
npm install

# Frontend only
npm run dev

# Backend only
npm run server
npm run server:dev  # with auto-reload

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Project Structure

```
expense-calculator/
├── src/                    # Frontend React app
│   ├── components/         # UI components
│   ├── services/           # API integration
│   └── App.jsx            # Main app
├── server/                 # Backend Express API
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── index.js           # Server entry
├── package.json           # Dependencies
└── .env                   # Configuration
```

---

## 🔧 Need Help?

- **Installation Issues**: See `INSTALLATION.md`
- **Full Documentation**: See `README.md`
- **API Endpoints**: See backend routes in `server/routes/`

---

## 💡 Next Steps

1. Customize your financial goals
2. Track real expenses
3. Set up goal reminders
4. Export financial reports

**Happy budgeting! 💰**

