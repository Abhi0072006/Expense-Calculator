import express from 'express'
import User from '../models/User.js'

const router = express.Router()

// Get or create user data
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    let user = await User.findOne({ userId })
    
    if (!user) {
      user = await User.create({ userId })
    }
    
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update user data
router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const updateData = req.body
    
    const user = await User.findOneAndUpdate(
      { userId },
      updateData,
      { new: true, upsert: true }
    )
    
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update financial data
router.patch('/:userId/financial', async (req, res) => {
  try {
    const { userId } = req.params
    const { monthlySalary, weeklySpending, monthlySpending, savingsPercent } = req.body
    
    const user = await User.findOneAndUpdate(
      { userId },
      { monthlySalary, weeklySpending, monthlySpending, savingsPercent },
      { new: true }
    )
    
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update goal
router.patch('/:userId/goal', async (req, res) => {
  try {
    const { userId } = req.params
    const goal = req.body
    
    const user = await User.findOneAndUpdate(
      { userId },
      { goal },
      { new: true }
    )
    
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router

