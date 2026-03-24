// Use Vite env variable when available, otherwise fall back to localhost:5001 (dev with in-memory DB)
const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL)
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:5001/api'
const DEFAULT_USER_ID = 'user_12345'

// Fetch user data
export const fetchUserData = async (userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch user data')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}

// Update user data
export const updateUserData = async (data, userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Failed to update user data')
    return await response.json()
  } catch (error) {
    console.error('Error updating user data:', error)
    return null
  }
}

// Update financial data
export const updateFinancialData = async (financialData, userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/financial`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(financialData),
    })
    if (!response.ok) throw new Error('Failed to update financial data')
    return await response.json()
  } catch (error) {
    console.error('Error updating financial data:', error)
    return null
  }
}

// Update goal
export const updateGoal = async (goal, userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/goal`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goal),
    })
    if (!response.ok) throw new Error('Failed to update goal')
    return await response.json()
  } catch (error) {
    console.error('Error updating goal:', error)
    return null
  }
}

// Add expense
export const addExpense = async (expense, userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/expenses/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    })
    if (!response.ok) throw new Error('Failed to add expense')
    return await response.json()
  } catch (error) {
    console.error('Error adding expense:', error)
    return null
  }
}

// Get all expenses
export const fetchExpenses = async (userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/expenses/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch expenses')
    return await response.json()
  } catch (error) {
    console.error('Error fetching expenses:', error)
    return []
  }
}

// Delete expense
export const deleteExpense = async (expenseId, userId = DEFAULT_USER_ID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/expenses/${userId}/${expenseId}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Failed to delete expense')
    return true
  } catch (error) {
    console.error('Error deleting expense:', error)
    return false
  }
}

