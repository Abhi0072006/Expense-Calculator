import { motion } from 'framer-motion'
import { PiggyBank, TrendingUp, Target, Calendar } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Savings({ data, calculatedData, updateData }) {
  const savingsPercentage = data.monthlySalary > 0 
    ? (calculatedData.savingsAmount / data.monthlySalary) * 100 
    : 0

  const remainingAfterSavings = data.monthlySalary - data.monthlySpending - calculatedData.savingsAmount

  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Savings Planner</h1>
        <p className="text-gray-600">Plan and track your savings goals</p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        {...fadeInUp}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Set Your Savings Goal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Savings Percentage (%)
            </label>
            <input
              type="number"
              value={data.savingsPercent || ''}
              onChange={(e) => updateData('savingsPercent', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter percentage"
              max="100"
            />
            <p className="text-xs text-gray-500 mt-1">Enter 0-100</p>
          </div>
        </div>
      </motion.div>

      {/* Savings Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          {...fadeInUp}
          className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Monthly Savings</h3>
            <div className="p-3 bg-white/20 rounded-lg">
              <PiggyBank size={24} />
            </div>
          </div>
          <p className="text-5xl font-bold mb-2">
            ₹<AnimatedNumber value={calculatedData.savingsAmount} />
          </p>
          <p className="text-green-100">
            {savingsPercentage.toFixed(1)}% of your salary
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Yearly Savings</h3>
            <div className="p-3 bg-white/20 rounded-lg">
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="text-5xl font-bold mb-2">
            ₹<AnimatedNumber value={calculatedData.yearlyGain} />
          </p>
          <p className="text-blue-100">
            Projected annual savings
          </p>
        </motion.div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBox
          title="Yearly Spending"
          value={calculatedData.yearlySpend}
          icon={<Target />}
          color="red"
        />
        <StatBox
          title="Remaining After Savings"
          value={remainingAfterSavings}
          icon={<Calendar />}
          color="purple"
        />
        <StatBox
          title="Savings Rate"
          value={savingsPercentage}
          icon={<TrendingUp />}
          color="green"
          suffix="%"
        />
      </div>

      {/* Savings vs Spending Visualization */}
      <motion.div
        {...fadeInUp}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Savings Breakdown</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Savings</span>
              <span className="text-sm font-bold text-green-600">
                ₹{calculatedData.savingsAmount.toLocaleString()} ({savingsPercentage.toFixed(1)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${savingsPercentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-green-600 h-3 rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Spending</span>
              <span className="text-sm font-bold text-red-600">
                ₹{data.monthlySpending.toLocaleString()} ({(data.monthlySpending / data.monthlySalary * 100).toFixed(1)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(data.monthlySpending / data.monthlySalary * 100)}%` }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-red-600 h-3 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function StatBox({ title, value, icon, color, suffix = '' }) {
  const colors = {
    red: 'bg-red-50 text-red-600 border-red-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200',
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
        {suffix ? (
          <>
            <AnimatedNumber value={value} />{suffix}
          </>
        ) : (
          <>₹<AnimatedNumber value={value} /></>
        )}
      </p>
    </motion.div>
  )
}

