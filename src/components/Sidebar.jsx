import { motion } from 'framer-motion'
import { LayoutDashboard, DollarSign, PiggyBank, Target } from './Icons'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'expenses', label: 'Expenses', icon: DollarSign },
  { id: 'savings', label: 'Savings', icon: PiggyBank },
  { id: 'goals', label: 'Goals', icon: Target },
]

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-white shadow-lg p-6 flex flex-col"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">💰 Expense Calculator</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your finances</p>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          © 2025 Expense Calculator
        </p>
      </div>
    </motion.aside>
  )
}

