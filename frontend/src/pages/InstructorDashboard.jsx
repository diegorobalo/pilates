import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  Calendar,
  Bell,
  LogOut,
  Clock,
  DollarSign,
  UserCheck,
  Settings,
  UserPlus,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import UserManagement from '../components/Instructor/UserManagement'
import StudentManagement from '../components/Instructor/StudentManagement'
import ScheduleManagement from '../components/Instructor/ScheduleManagement'
import PendingReservations from '../components/Instructor/PendingReservations'
import AttendanceManagement from '../components/Instructor/AttendanceManagement'
import FinancesManagement from '../components/Instructor/FinancesManagement'
import AdminSettings from '../components/Instructor/AdminSettings'
import CalendarManagement from '../components/Instructor/CalendarManagement'
import ScheduleStatsManagement from '../components/Instructor/ScheduleStatsManagement'

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState('usuarios')
  const [pendingCount, setPendingCount] = useState(0)
  const [pendingUsersCount, setPendingUsersCount] = useState(0)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const isAdmin = user?.tipo === 'ADMIN'
  const instructorName = user?.nombre || user?.name || (isAdmin ? 'Administrador' : 'Instructor')

  useEffect(() => {
    // Fetch pending reservations count
    fetchPendingCount()
    fetchPendingUsersCount()
  }, [])

  const fetchPendingCount = async () => {
    try {
      const response = await fetch('/api/reservations/pending')
      const data = await response.json()
      setPendingCount(data.total ?? (Array.isArray(data) ? data.length : 0))
    } catch (error) {
      console.error('Error fetching pending count:', error)
    }
  }

  const fetchPendingUsersCount = async () => {
    try {
      const response = await fetch('/api/users/pending')
      const data = await response.json()
      setPendingUsersCount(data.total || 0)
    } catch (error) {
      console.error('Error fetching pending users count:', error)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  const handleFinancesClick = () => {
    navigate('/finance')
  }

  const tabs = [
    { id: 'usuarios', label: 'Usuari@s', icon: UserPlus, badge: pendingUsersCount },
    { id: 'alumnas', label: 'Alumn@s', icon: Users },
    { id: 'horarios', label: 'Horarios', icon: Calendar },
    { id: 'stats', label: 'Estadísticas', icon: Clock },
    {
      id: 'reservas',
      label: 'Reservas Pendientes',
      icon: Bell,
      badge: pendingCount,
    },
    { id: 'asistencia', label: 'Asistencia', icon: UserCheck },
    ...(isAdmin ? [{ id: 'finanzas', label: 'Finanzas', icon: DollarSign }] : []),
    { id: 'calendario', label: 'Calendario', icon: Calendar },
    // Admin-only tab
    ...(isAdmin ? [{ id: 'config', label: 'Configuración', icon: Settings }] : []),
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
        {activeTab === 'usuarios' && <UserManagement />}
        {activeTab === 'alumnas' && <StudentManagement />}
        {activeTab === 'horarios' && <ScheduleManagement />}
        {activeTab === 'stats' && <ScheduleStatsManagement />}
        {activeTab === 'reservas' && (
          <PendingReservations onCountChange={setPendingCount} />
        )}
        {activeTab === 'asistencia' && <AttendanceManagement />}
        {activeTab === 'finanzas' && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Dashboard Financiero Mejorado
              </h3>
              <p className="text-blue-800 mb-4">
                Accede a un dashboard financiero completo con reportes avanzados,
                seguimiento de pagos por alumna, y análisis detallados.
              </p>
              <button
                onClick={handleFinancesClick}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Ir al Dashboard Financiero
              </button>
            </div>
            <FinancesManagement />
          </div>
        )}
        {activeTab === 'calendario' && <CalendarManagement />}
        {activeTab === 'config' && isAdmin && <AdminSettings />}
      </main>
    </div>
  )
}
