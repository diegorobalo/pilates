import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Calendar, BookMarked, History, Repeat, BarChart3 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import ClassCalendar from '../components/Alumna/ClassCalendar'
import MyReservations from '../components/Alumna/MyReservations'
import AttendanceHistory from '../components/Alumna/AttendanceHistory'
import MySubscriptions from '../components/Alumna/MySubscriptions'
import AlumnaStats from '../components/Alumna/AlumnaStats'

export default function AlumnaPortal() {
  const [activeTab, setActiveTab] = useState('calendar')
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // Default alumna data if user info not available
  const alumnaInfo = {
    name: user?.name || 'Alumna',
    plan: user?.plan || 'Plan Semanal',
    status: user?.status || 'Activo'
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{alumnaInfo.name}</h1>
              <p className="text-sm text-gray-500">{alumnaInfo.plan} - {alumnaInfo.status}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'calendar'}
              onClick={() => setActiveTab('calendar')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'calendar'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Calendario
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'reservations'}
              onClick={() => setActiveTab('reservations')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'reservations'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookMarked className="w-5 h-5" />
              Mis Reservas
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <History className="w-5 h-5" />
              Historial
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'subscriptions'}
              onClick={() => setActiveTab('subscriptions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'subscriptions'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Repeat className="w-5 h-5" />
              Mis Suscripciones
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'stats'}
              onClick={() => setActiveTab('stats')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === 'stats'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Estadísticas
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'calendar' && <ClassCalendar />}
        {activeTab === 'reservations' && <MyReservations />}
        {activeTab === 'history' && <AttendanceHistory />}
        {activeTab === 'subscriptions' && <MySubscriptions />}
        {activeTab === 'stats' && <AlumnaStats />}
      </main>
    </div>
  )
}
