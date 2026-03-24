import { motion } from 'framer-motion'
import { Calendar, Clock, TrendingUp, AlertCircle } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ExpenseTracker({ data, calculatedData, updateData }) {
  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Expense Tracker</h1>
        <p className="text-gray-600">Monitor your daily, weekly, and monthly spending</p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        {...fadeInUp}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Your Expenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weekly Spending (₹)
            </label>
            <input
              type="number"
              value={data.weeklySpending || ''}
              onChange={(e) => updateData('weeklySpending', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter weekly spending"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Spending (₹)
            </label>
            <input
              type="number"
              value={data.monthlySpending || ''}
              onChange={(e) => updateData('monthlySpending', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter monthly spending"
            />
          </div>
        </div>
      </motion.div>

      {/* Expense Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpenseCard
          title="Daily Limit"
          value={calculatedData.dailyLimit}
          icon={<Clock />}
          description="Calculated from monthly spending"
          color="blue"
        />
        <ExpenseCard
          title="Weekly Limit"
          value={calculatedData.weeklyLimit}
          icon={<Calendar />}
          description="Calculated from monthly spending"
          color="green"
        />
        <ExpenseCard
          title="Monthly Total"
          value={data.monthlySpending}
          icon={<TrendingUp />}
          description="Your total monthly expenses"
          color="purple"
        />
      </div>

      {/* Warning Section */}
      {data.monthlySalary > 0 && data.monthlySpending > data.monthlySalary && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4"
        >
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-1">Spending Alert</h3>
            <p className="text-red-700">
              Your monthly spending (₹{data.monthlySpending.toLocaleString()}) exceeds your monthly salary (₹{data.monthlySalary.toLocaleString()}).
              Please review your expenses to maintain financial stability.
            </p>
          </div>
        </motion.div>
      )}

      {/* Remaining Balance */}
      <motion.div
        {...fadeInUp}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-2">Remaining Balance</h3>
        <p className="text-blue-100 mb-4">After monthly expenses</p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold">
            ₹<AnimatedNumber value={calculatedData.remainingBalance} />
          </span>
        </div>
      </motion.div>
    </div>
  )
}

function ExpenseCard({ title, value, icon, description, color }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  }

  return (
    <motion.div
      {...fadeInUp}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${colors[color]}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-800 mb-2">
        ₹<AnimatedNumber value={value} />
      </p>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}

