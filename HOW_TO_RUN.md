# 🚀 How to Run the Expense Calculator

## ⚠️ Important: You Need Node.js First!

Your system currently **doesn't have Node.js installed**. Follow these steps:

---

## 📥 Step 1: Install Node.js

### Option A: Download from Website (Recommended)
1. Go to: https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Install the downloaded file
4. Restart your terminal

### Option B: Using Homebrew (macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

### Verify Installation
After installing, open a new terminal and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v20.0.0, 10.0.0)

---

## 🗄️ Step 2: Install MongoDB

### Option A: MongoDB Atlas (Cloud - Easiest) ⭐
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up for free
3. Create a free cluster
4. Get your connection string
5. Update `.env` file with the connection string

### Option B: MongoDB Community (Local)
1. Download: https://www.mongodb.com/try/download/community
2. Install MongoDB
3. Start MongoDB service:
   ```bash
   # macOS
   brew services start mongodb-community
   ```

---

## ⚙️ Step 3: Setup the Project

### Open Terminal
1. Navigate to project folder:
   ```bash
   cd "/Users/ayushrudra/abhirudh app"
   ```

### Install Dependencies
```bash
npm install
```
This will take a few minutes the first time.

### Create Environment File
Create a file named `.env` in the project folder:
```bash
cat > .env << 'EOF'
MONGODB_URI=mongodb://localhost:27017/expense-calculator
PORT=5000
EOF
```

Or manually create `.env` and add:
```
MONGODB_URI=mongodb://localhost:27017/expense-calculator
PORT=5000
```

---

## 🚀 Step 4: Run the Application

You need **2 terminal windows** open:

### Terminal 1 - Frontend
```bash
cd "/Users/ayushrudra/abhirudh app"
npm run dev
```
You'll see: `VITE ready in XXX ms` and `➜  Local:   http://localhost:3000/`

### Terminal 2 - Backend
```bash
cd "/Users/ayushrudra/abhirudh app"
npm run server
```
You'll see: `✅ Connected to MongoDB` and `🚀 Server is running on http://localhost:5000`

---

## 🌐 Step 5: Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

You should see the beautiful Expense Calculator dashboard! 🎉

---

## 📱 Quick Access URLs

| What | URL |
|------|-----|
| **Main App** | http://localhost:3000 |
| **Backend API** | http://localhost:5000 |
| **Health Check** | http://localhost:5000/api/health |

---

## ✅ Test It Works

1. Enter Monthly Salary: `50000`
2. Enter Monthly Spending: `30000`
3. Set Savings %: `20`
4. Watch the dashboard update instantly!

---

## 🛑 To Stop

Press `Ctrl + C` in both terminal windows

---

## ⚠️ Common Issues

### "command not found: npm"
- Node.js is not installed
- Follow Step 1 above
- Restart terminal after installing

### "Port already in use"
- Something else is using port 3000 or 5000
- Kill the process: `kill -9 $(lsof -t -i:3000)`
- Or change ports in configuration files

### "Cannot connect to MongoDB"
- Make sure MongoDB is running
- Check `.env` file has correct connection string
- For Atlas: Make sure IP is whitelisted

### "Module not found"
- Run `npm install` again
- Delete `node_modules` and reinstall

---

## 📚 Need More Help?

- **Detailed Installation**: See `INSTALLATION.md`
- **Quick Start**: See `QUICK_START.md`
- **Commands Reference**: See `COMMANDS.md`
- **Full Documentation**: See `README.md`

---

## 🎯 Summary Checklist

- [ ] Install Node.js from nodejs.org
- [ ] Verify with `node --version` and `npm --version`
- [ ] Install MongoDB (local or Atlas)
- [ ] Navigate to project folder
- [ ] Run `npm install`
- [ ] Create `.env` file
- [ ] Start frontend in Terminal 1: `npm run dev`
- [ ] Start backend in Terminal 2: `npm run server`
- [ ] Open browser: http://localhost:3000
- [ ] Enjoy your Expense Calculator! 🎉

---

**First time setup takes about 10-15 minutes. After that, just 2 commands to start! ⚡**



