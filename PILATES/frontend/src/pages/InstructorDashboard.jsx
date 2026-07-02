import { useState, useEffect } from 'react'
import {
  Users,
  Calendar,
  Bell,
  LogOut,
  Clock,
  DollarSign,
  UserCheck,
} from 'lucide-react'
import StudentManagement from '../components/Instructor/StudentManagement'
import ScheduleManagement from '../components/Instructor/ScheduleManagement'
import PendingReservations from '../components/Instructor/PendingReservations'
import AttendanceManagement from '../components/Instructor/AttendanceManagement'
import FinancesManagement from '../components/Instructor/FinancesManagement'

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState('alumnas')
  const [pendingCount, setPendingCount] = useState(0)
  const [instructorName, setInstructorName] = useState('Instructor')

  useEffect(() => {
    // Get instructor name from session/localStorage
    const name = localStorage.getItem('instructorName') || 'Instructor'
    setInstructorName(name)

    // Fetch pending reservations count
    fetchPendingCount()
  }, [])

  const fetchPendingCount = async () => {
    try {
      const response = await fetch('/api/reservations/pending')
      const data = await response.json()
      setPendingCount(data.length || 0)
    } catch (error) {
      console.error('Error fetching pending count:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('instructorName')
    localStorage.removeItem('instructorId')
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const tabs = [
    { id: 'alumnas', label: 'Alumnas', icon: Users },
    { id: 'horarios', label: 'Horarios', icon: Calendar },
    {
      id: 'reservas',
      label: 'Reservas Pendientes',
      icon: Bell,
      badge: pendingCount,
    },
    { id: 'asistencia', label: 'Asistencia', icon: UserCheck },
    { id: 'finanzas', label: 'Finanzas', icon: DollarSign },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard de Instructora
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">{instructorName}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  {tab.badge && tab.badge > 0 && (
                    <span className="ml-2 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold leading-none bg-danger text-white">
                      {tab.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'alumnas' && <StudentManagement />}
        {activeTab === 'horarios' && <ScheduleManagement />}
        {activeTab === 'reservas' && (
          <PendingReservations onCountChange={setPendingCount} />
        )}
        {activeTab === 'asistencia' && <AttendanceManagement />}
        {activeTab === 'finanzas' && <FinancesManagement />}
      </main>
    </div>
  )
}
