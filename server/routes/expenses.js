import express from 'express'
import User from '../models/User.js'

const router = express.Router()

// Add expense
router.post('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const expense = req.body
    
    const user = await User.findOneAndUpdate(
      { userId },
      { $push: { expenses: expense } },
      { new: true }
    )
    
    res.json(user.expenses[user.expenses.length - 1])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all expenses
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findOne({ userId })
    
    if (!user) {
      return res.json([])
    }
    
    res.json(user.expenses || [])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete expense
router.delete('/:userId/:expenseId', async (req, res) => {
  try {
    const { userId, expenseId } = req.params
    
    const user = await User.findOneAndUpdate(
      { userId },
      { $pull: { expenses: { _id: expenseId } } },
      { new: true }
    )
    
    res.json({ message: 'Expense deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router

