import { motion } from 'framer-motion'
import { User, Bell } from './Icons'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Financial Dashboard</h2>
        <p className="text-sm text-gray-600">Track and manage your expenses</p>
      </div>
      
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Bell className="text-gray-600" size={20} />
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="text-white" size={18} />
          </div>
          <span className="text-sm font-medium text-gray-700">User</span>
        </motion.div>
      </div>
    </motion.header>
  )
}

