import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ExpenseTracker from './components/ExpenseTracker'
import Savings from './components/Savings'
import Goals from './components/Goals'
import { fetchUserData, updateUserData } from './services/api'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [data, setData] = useState({
    monthlySalary: 0,
    weeklySpending: 0,
    monthlySpending: 0,
    savingsPercent: 0,
    goal: {
      itemName: '',
      itemPrice: 0,
      goalPercent: 0
    }
  })

  const [calculatedData, setCalculatedData] = useState({
    dailyLimit: 0,
    weeklyLimit: 0,
    remainingBalance: 0,
    savingsAmount: 0,
    yearlyGain: 0,
    yearlySpend: 0,
    monthlyGoalSaving: 0,
    monthsNeeded: 0
  })

  const [loading, setLoading] = useState(true)

  // Load user data on mount
  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      const userData = await fetchUserData()
      if (userData) {
        setData({
          monthlySalary: userData.monthlySalary || 0,
          weeklySpending: userData.weeklySpending || 0,
          monthlySpending: userData.monthlySpending || 0,
          savingsPercent: userData.savingsPercent || 0,
          goal: userData.goal || {
            itemName: '',
            itemPrice: 0,
            goalPercent: 0
          }
        })
      }
    } catch (error) {
      console.error('Failed to load user data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    calculateMetrics()
  }, [data])

  const calculateMetrics = () => {
    const dailyLimit = data.monthlySpending / 30
    const weeklyLimit = data.monthlySpending / 4
    const remainingBalance = data.monthlySalary - data.monthlySpending
    const savingsAmount = (data.monthlySalary * data.savingsPercent) / 100
    const yearlyGain = savingsAmount * 12
    const yearlySpend = data.monthlySpending * 12
    const monthlyGoalSaving = (data.monthlySalary * data.goal.goalPercent) / 100
    const monthsNeeded = data.goal.itemPrice > 0 && monthlyGoalSaving > 0 
      ? data.goal.itemPrice / monthlyGoalSaving 
      : 0

    setCalculatedData({
      dailyLimit,
      weeklyLimit,
      remainingBalance,
      savingsAmount,
      yearlyGain,
      yearlySpend,
      monthlyGoalSaving,
      monthsNeeded
    })
  }

  const updateData = useCallback((key, value) => {
    let updatedData
    if (key.includes('.')) {
      const [parent, child] = key.split('.')
      updatedData = {
        ...data,
        [parent]: {
          ...data[parent],
          [child]: value
        }
      }
    } else {
      updatedData = {
        ...data,
        [key]: value
      }
    }
    
    setData(updatedData)
    
    // Save to backend
    updateUserData(updatedData).catch(error => {
      console.error('Failed to save data:', error)
    })
  }, [data])

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your financial data...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'dashboard' && (
            <Dashboard data={data} calculatedData={calculatedData} updateData={updateData} />
          )}
          {activeTab === 'expenses' && (
            <ExpenseTracker data={data} calculatedData={calculatedData} updateData={updateData} />
          )}
          {activeTab === 'savings' && (
            <Savings data={data} calculatedData={calculatedData} updateData={updateData} />
          )}
          {activeTab === 'goals' && (
            <Goals data={data} calculatedData={calculatedData} updateData={updateData} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App

