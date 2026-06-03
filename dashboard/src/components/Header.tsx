import React from 'react'
import { Menu, Moon, Sun, Upload } from 'lucide-react'

interface HeaderProps {
  onThemeToggle: () => void
  isDark: boolean
}

export default function Header({ onThemeToggle, isDark }: HeaderProps) {
  const [showUpload, setShowUpload] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-40 shadow-sm">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AS</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white font-display">
              ArgeSun
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Reclamos</p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar tickets..."
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Upload Button */}
          <div className="relative">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const event = new CustomEvent('fileSelected', { detail: file })
                  window.dispatchEvent(event)
                  // Reset input so se puede cargar el mismo archivo otra vez
                  e.target.value = ''
                }
              }}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-primary-700"
              title="Importar CSV"
            >
              <Upload className="w-5 h-5" />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-primary-700"
            title="Cambiar tema"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* User Menu */}
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-800">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              D
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
              Diego R.
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
