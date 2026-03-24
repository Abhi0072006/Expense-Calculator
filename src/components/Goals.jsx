import { motion } from 'framer-motion'
import { Target, Calendar, TrendingUp, Clock } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Goals({ data, calculatedData, updateData }) {
  const formatTime = (months) => {
    if (months === 0 || !months) return 'Not set'
    
    const years = Math.floor(months / 12)
    const remainingMonths = Math.floor(months % 12)
    const days = Math.floor((months % 1) * 30)
    
    let result = ''
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `
    if (remainingMonths > 0) result += `${remainingMonths} month${remainingMonths > 1 ? 's' : ''} `
    if (days > 0 && years === 0) result += `${days} day${days > 1 ? 's' : ''}`
    
    return result.trim()
  }

  const progressPercentage = data.goal.itemPrice > 0 && calculatedData.monthsNeeded > 0
    ? Math.min((calculatedData.monthsNeeded / 120) * 100, 100) // Assuming max 10 years
    : 0

  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Goal Planner</h1>
        <p className="text-gray-600">Plan and track your dream purchases</p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        {...fadeInUp}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Set Your Dream Purchase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Name
            </label>
            <input
              type="text"
              value={data.goal.itemName}
              onChange={(e) => updateData('goal.itemName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., iPhone 15 Pro, Vacation Trip"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Price (₹)
            </label>
            <input
              type="number"
              value={data.goal.itemPrice || ''}
              onChange={(e) => updateData('goal.itemPrice', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Salary (₹)
            </label>
            <input
              type="number"
              value={data.monthlySalary || ''}
              onChange={(e) => updateData('monthlySalary', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter salary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goal Savings Percentage (%)
            </label>
            <input
              type="number"
              value={data.goal.goalPercent || ''}
              onChange={(e) => updateData('goal.goalPercent', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter percentage"
              max="100"
            />
            <p className="text-xs text-gray-500 mt-1">What % of salary to save for this goal?</p>
          </div>
        </div>
      </motion.div>

      {/* Goal Display */}
      {data.goal.itemName && data.goal.itemPrice > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">🎯 {data.goal.itemName}</h3>
              <p className="text-purple-100 text-lg">
                Target Price: ₹{data.goal.itemPrice.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white/20 rounded-lg">
              <Target size={32} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} />
                <span className="text-sm font-medium">Monthly Saving</span>
              </div>
              <p className="text-3xl font-bold">
                ₹<AnimatedNumber value={calculatedData.monthlyGoalSaving} />
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} />
                <span className="text-sm font-medium">Time Needed</span>
              </div>
              <p className="text-xl font-bold">
                {formatTime(calculatedData.monthsNeeded)}
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} />
                <span className="text-sm font-medium">Months</span>
              </div>
              <p className="text-3xl font-bold">
                <AnimatedNumber value={calculatedData.monthsNeeded} />
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Progress Visualization */}
      {data.goal.itemName && calculatedData.monthsNeeded > 0 && (
        <motion.div
          {...fadeInUp}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Progress Tracker</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Goal Progress</span>
                <span className="text-sm font-bold text-purple-600">
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 h-4 rounded-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Monthly Contribution</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹<AnimatedNumber value={calculatedData.monthlyGoalSaving} />
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Goal</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{data.goal.itemPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Current Savings %"
          value={data.goal.goalPercent}
          icon={<TrendingUp />}
          color="blue"
          suffix="%"
        />
        <StatCard
          title="Monthly Amount"
          value={calculatedData.monthlyGoalSaving}
          icon={<Calendar />}
          color="green"
        />
        <StatCard
          title="Achievable In"
          value={calculatedData.monthsNeeded}
          icon={<Clock />}
          color="purple"
          suffix={calculatedData.monthsNeeded > 0 ? ' months' : ''}
        />
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, color, suffix = '' }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  }

  return (
    <motion.div
      {...fadeInUp}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${colors[color]}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className={`p-2 rounded-lg ${colors[color]}`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-800">
        {suffix && !suffix.startsWith('₹') ? (
          <>
            {suffix.startsWith('%') ? <AnimatedNumber value={value} /> : value.toFixed(2)}
            {suffix}
          </>
        ) : (
          <>₹<AnimatedNumber value={value} />{suffix}</>
        )}
      </p>
    </motion.div>
  )
}

