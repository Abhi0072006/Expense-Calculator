# 📦 Installation Guide

## Step-by-Step Setup Instructions

### 1. Install Node.js
Make sure you have Node.js v16 or higher installed on your system.
- Download from: https://nodejs.org/
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. Install MongoDB
Choose one of the following options:

#### Option A: MongoDB Community Edition (Local)
- Download from: https://www.mongodb.com/try/download/community
- Follow installation instructions for your OS
- Start MongoDB service:
  ```bash
  # macOS
  brew services start mongodb-community
  
  # Linux
  sudo systemctl start mongod
  ```

#### Option B: MongoDB Atlas (Cloud - Recommended)
- Sign up at: https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- Update `.env` file with your connection string

### 3. Install Project Dependencies
Navigate to the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- React and React DOM
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Express.js
- Mongoose
- CORS

### 4. Configure Environment
Create a `.env` file in the root directory:

```bash
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/expense-calculator

# For MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/expense-calculator?retryWrites=true&w=majority

PORT=5000
```

### 5. Start the Application

You need to run two servers simultaneously:

#### Terminal 1 - Frontend (React + Vite)
```bash
npm run dev
```
This starts the frontend on: http://localhost:3000

#### Terminal 2 - Backend (Express + MongoDB)
```bash
# For development with auto-restart
npm run server:dev

# OR for production
npm run server
```
This starts the backend API on: http://localhost:5000

### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

## 🎉 You're All Set!

The application should now be running with:
- ✅ Beautiful, responsive UI
- ✅ Real-time calculations
- ✅ Data persistence in MongoDB
- ✅ Interactive charts and animations

## Troubleshooting

### Port Already in Use
If ports 3000 or 5000 are already in use:

**For Frontend:**
```bash
# Update vite.config.js
port: 3001  // Change to any available port
```

**For Backend:**
```bash
# Update .env file
PORT=5001  // Change to any available port
```

### MongoDB Connection Error
1. Check if MongoDB is running
2. Verify connection string in `.env`
3. Check firewall settings for MongoDB Atlas

### Module Not Found Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

## Development Tips

1. **Hot Reload**: Frontend changes reflect immediately thanks to Vite
2. **Auto-restart**: Use `npm run server:dev` for backend auto-restart
3. **Database Viewer**: Use MongoDB Compass to view your data
4. **API Testing**: Use Postman or Thunder Client to test API endpoints

## Production Build

To create a production build:

```bash
# Build frontend
npm run build

# Serve production build
npm run preview
```

The built files will be in the `dist` folder.

