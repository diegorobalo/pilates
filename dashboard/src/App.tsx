import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import TicketsTable from './pages/TicketsTable'
import Analytics from './pages/Analytics'
import { useTicketData } from './hooks/useTicketData'

type Page = 'dashboard' | 'tickets' | 'analytics'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  const [isDark, setIsDark] = useState(false)
  const { tickets, isLoading, handleFileUpload } = useTicketData()

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  // Listen for file upload events from Header
  useEffect(() => {
    const handleFileSelected = (event: any) => {
      const file = event.detail
      if (file) {
        handleFileUpload(file)
      }
    }

    window.addEventListener('fileSelected', handleFileSelected)
    return () => window.removeEventListener('fileSelected', handleFileSelected)
  }, [handleFileUpload])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <Header onThemeToggle={() => setIsDark(!isDark)} isDark={isDark} />

        <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
          <Sidebar
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            ticketCount={tickets.length}
          />

          <main className="flex-1 overflow-auto ml-64">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {currentPage === 'dashboard' && (
                <Dashboard tickets={tickets} isLoading={isLoading} />
              )}
              {currentPage === 'tickets' && (
                <TicketsTable
                  tickets={tickets}
                  isLoading={isLoading}
                  onFileUpload={handleFileUpload}
                />
              )}
              {currentPage === 'analytics' && (
                <Analytics tickets={tickets} isLoading={isLoading} />
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  )
}
