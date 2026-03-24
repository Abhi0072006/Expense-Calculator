import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import expenseRoutes from './routes/expenses.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/expenses', expenseRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Expense Calculator API is running' })
})

// Connect to MongoDB and start server
// Behavior:
// - If MONGODB_URI is set, use it.
// - Else if USE_IN_MEMORY_DB=true, start an in-memory MongoDB (mongodb-memory-server) for dev/CI.
// - Otherwise fall back to local MongoDB at mongodb://localhost:27017/expense-calculator
const start = async () => {
  let mongoUri = process.env.MONGODB_URI

  try {
    if (!mongoUri && process.env.USE_IN_MEMORY_DB === 'true') {
      // Dynamically import to avoid breaking when the package isn't installed
      const { MongoMemoryServer } = await import('mongodb-memory-server')
      console.log('ℹ️ Starting in-memory MongoDB for dev (mongodb-memory-server)')
      const mongod = await MongoMemoryServer.create()
      mongoUri = mongod.getUri()
    }

    mongoUri = mongoUri || 'mongodb://localhost:27017/expense-calculator'

    await mongoose.connect(mongoUri)
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    // Continue — some flows may tolerate missing DB for quick UI work (read-only stubs),
    // but most routes will fail if DB is not available.
  }

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
  })
}

start()

export default app

