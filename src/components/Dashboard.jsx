import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Wallet, Target, PieChart as PieIcon, BarChart3 } from './Icons'
import AnimatedNumber from './AnimatedNumber'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Dashboard({ data, calculatedData, updateData }) {
  const salaryPercentage = data.monthlySalary > 0 
    ? (calculatedData.savingsAmount / data.monthlySalary) * 100 
    : 0
  const expensePercentage = data.monthlySalary > 0 
    ? (data.monthlySpending / data.monthlySalary) * 100 
    : 0

  const pieData = [
    { name: 'Savings', value: calculatedData.savingsAmount, color: '#10b981' },
    { name: 'Expenses', value: calculatedData.remainingBalance - calculatedData.savingsAmount, color: '#ef4444' }
  ]

  const chartData = [
    { name: 'Monthly Gain', value: calculatedData.savingsAmount },
    { name: 'Monthly Spend', value: data.monthlySpending },
    { name: 'Yearly Gain', value: calculatedData.yearlyGain / 12 },
    { name: 'Yearly Spend', value: calculatedData.yearlySpend / 12 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div {...fadeInUp}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor your financial health at a glance</p>
      </motion.div>

      {/* Input Section */}
      <motion.div {...fadeInUp} className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Your Details</h2>
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
              Monthly Spending (₹)
            </label>
            <input
              type="number"
              value={data.monthlySpending || ''}
              onChange={(e) => updateData('monthlySpending', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter spending"
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Monthly Salary"
          value={data.monthlySalary}
          icon={<Wallet />}
          color="blue"
        />
        <StatCard
          title="Monthly Savings"
          value={calculatedData.savingsAmount}
          icon={<TrendingUp />}
          color="green"
        />
        <StatCard
          title="Monthly Spending"
          value={data.monthlySpending}
          icon={<TrendingDown />}
          color="red"
        />
        <StatCard
          title="Remaining Balance"
          value={calculatedData.remainingBalance}
          icon={<Target />}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Savings vs Spending">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ₹${value.toFixed(0)}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Yearly Projection">
          <div className="space-y-4 pt-8">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Monthly Savings</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹<AnimatedNumber value={calculatedData.savingsAmount} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Monthly Spending</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹<AnimatedNumber value={data.monthlySpending} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Yearly Gain (Projected)</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹<AnimatedNumber value={calculatedData.yearlyGain} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Yearly Spend (Projected)</p>
                <p className="text-2xl font-bold text-orange-600">
                  ₹<AnimatedNumber value={calculatedData.yearlySpend} />
                </p>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    red: 'bg-red-50 text-red-600 border-red-200',
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
        ₹<AnimatedNumber value={value} />
      </p>
    </motion.div>
  )
}

function ChartCard({ title, children }) {
  return (
    <motion.div
      {...fadeInUp}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <BarChart3 className="text-blue-600" />
        {title}
      </h3>
      {children}
    </motion.div>
  )
}

