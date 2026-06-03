import React from 'react'
import { LayoutDashboard, ListChecks, BarChart3, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface SidebarProps {
  currentPage: 'dashboard' | 'tickets' | 'analytics'
  onPageChange: (page: 'dashboard' | 'tickets' | 'analytics') => void
  ticketCount: number
}

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    description: 'Vista general'
  },
  {
    id: 'tickets',
    label: 'Reclamos',
    icon: ListChecks,
    description: 'Lista completa'
  },
  {
    id: 'analytics',
    label: 'Análisis',
    icon: BarChart3,
    description: 'Reportes'
  }
]

export default function Sidebar({ currentPage, onPageChange, ticketCount }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
      <nav className="p-4 space-y-2">
        <div className="mb-6 px-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Menú Principal
          </p>
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id

          return (
            <motion.button
              key={item.id}
              onClick={() => onPageChange(item.id as any)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative group ${
                isActive
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 text-left">
                <div className="font-semibold text-sm">{item.label}</div>
                <div className={`text-xs ${isActive ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {item.description}
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              )}

              {item.id === 'tickets' && ticketCount > 0 && !isActive && (
                <span className="px-2 py-1 bg-danger rounded-full text-xs font-bold text-white">
                  {Math.min(ticketCount, 99)}
                </span>
              )}
            </motion.button>
          )
        })}
      </nav>

      {/* Stats Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-t from-gray-50 dark:from-gray-900">
        <div className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-3">
            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Total Reclamos</p>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100 mt-1">
              {ticketCount}
            </p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Última actualización: Hoy
          </p>
        </div>
      </div>
    </aside>
  )
}
