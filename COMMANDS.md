# 🎮 Quick Commands Reference

## 🚀 Getting Started

```bash
# Install all dependencies
npm install

# Start frontend (Terminal 1)
npm run dev

# Start backend (Terminal 2)
npm run server:dev
```

---

## 🔧 Development Commands

### Frontend
```bash
npm run dev          # Start Vite dev server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend
```bash
npm run server       # Start Express server (http://localhost:5000)
npm run server:dev   # Start with auto-reload (nodemon)
```

---

## 🗄️ Database Commands

### Local MongoDB
```bash
# Start MongoDB service (macOS)
brew services start mongodb-community

# Stop MongoDB service
brew services stop mongodb-community

# MongoDB shell access
mongosh

# MongoDB Compass (GUI)
# Download from: https://www.mongodb.com/try/download/compass
```

---

## 🔍 Useful Commands

### Check Ports
```bash
# Check if port 3000 is in use
lsof -i :3000

# Check if port 5000 is in use
lsof -i :5000

# Kill process on port
kill -9 $(lsof -t -i:3000)
```

### Clean Install
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Clear npm cache
npm cache clean --force
```

### Environment Setup
```bash
# Create .env file
cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017/expense-calculator
PORT=5000
EOF

# Verify .env exists
cat .env
```

---

## 🌐 Access Points

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | React App |
| Backend API | http://localhost:5000 | Express API |
| Health Check | http://localhost:5000/api/health | API Status |
| MongoDB | mongodb://localhost:27017 | Database |

---

## 📦 Package Management

```bash
# Add a package
npm install <package-name>

# Add dev dependency
npm install --save-dev <package-name>

# Remove package
npm uninstall <package-name>

# Update packages
npm update

# Check outdated packages
npm outdated
```

---

## 🔥 Troubleshooting

### Restart Everything
```bash
# Stop all processes (Ctrl+C in each terminal)
# Then restart
npm run dev        # Terminal 1
npm run server:dev # Terminal 2
```

### Check Logs
```bash
# Frontend errors
# Check terminal 1 output

# Backend errors
# Check terminal 2 output

# MongoDB logs
tail -f /usr/local/var/log/mongodb/mongo.log
```

### Reset Database
```bash
# Connect to MongoDB
mongosh

# Use database
use expense-calculator

# Delete all users
db.users.deleteMany({})

# Show all users
db.users.find().pretty()

# Exit
exit
```

---

## 📊 Testing API Endpoints

### Using curl
```bash
# Health check
curl http://localhost:5000/api/health

# Get user
curl http://localhost:5000/api/users/user_12345

# Update user
curl -X PUT http://localhost:5000/api/users/user_12345 \
  -H "Content-Type: application/json" \
  -d '{"monthlySalary":50000}'
```

### Using Browser
- Open: http://localhost:5000/api/health
- Open DevTools (F12) → Network tab

---

## 🎯 Quick Test

1. **Start servers** (Terminal 1 & 2)
2. **Open browser**: http://localhost:3000
3. **Enter data**:
   - Monthly Salary: 50000
   - Monthly Spending: 30000
   - Savings %: 20
4. **See results** in real-time!

---

## 💡 Pro Tips

- Use `npm run server:dev` for auto-restart on backend changes
- Keep MongoDB running in background
- Use MongoDB Compass for visual database exploration
- Check console for helpful error messages
- Use browser DevTools for debugging

---

## ⚡ Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Port in use | Change port in vite.config.js or .env |
| MongoDB not found | Install MongoDB or use Atlas |
| Module not found | Run `npm install` again |
| Connection refused | Check if servers are running |
| CORS error | Verify server is running on port 5000 |

---

## 📝 Notes

- Frontend runs on **port 3000**
- Backend runs on **port 5000**
- MongoDB runs on **port 27017**
- All data persists in MongoDB
- Hot reload enabled for development

---

**Save this reference for quick access! 🎯**

