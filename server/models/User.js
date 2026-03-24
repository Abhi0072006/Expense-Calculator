import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    default: () => `user_${Date.now()}`
  },
  monthlySalary: {
    type: Number,
    default: 0
  },
  weeklySpending: {
    type: Number,
    default: 0
  },
  monthlySpending: {
    type: Number,
    default: 0
  },
  savingsPercent: {
    type: Number,
    default: 0
  },
  goal: {
    itemName: {
      type: String,
      default: ''
    },
    itemPrice: {
      type: Number,
      default: 0
    },
    goalPercent: {
      type: Number,
      default: 0
    }
  },
  expenses: [{
    date: { type: Date, default: Date.now },
    amount: Number,
    category: String,
    description: String
  }]
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User

