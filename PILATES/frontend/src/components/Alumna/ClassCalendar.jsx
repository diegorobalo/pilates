import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReservationModal from './ReservationModal'

export default function ClassCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Fetch schedules for the next 30 days
  useEffect(() => {
    fetchSchedules()
  }, [currentDate])

  const fetchSchedules = async () => {
    setLoading(true)
    try {
      const fechaInicio = new Date(currentDate)
      fechaInicio.setDate(1)
      const fechaFin = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

      const startStr = fechaInicio.toISOString().split('T')[0]
      const endStr = fechaFin.toISOString().split('T')[0]

      const response = await fetch(
        `/api/schedules?fechaInicio=${startStr}&fechaFin=${endStr}`
      )
      if (response.ok) {
        const data = await response.json()
        setSchedules(data)
      }
    } catch (error) {
      console.error('Error fetching schedules:', error)
    } finally {
      setLoading(false)
    }
  }

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getSchedulesForDay = (day) => {
    const dateStr = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    )
      .toISOString()
      .split('T')[0]

    return schedules.filter((schedule) => schedule.fecha === dateStr)
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleClassClick = (classSchedule) => {
    setSelectedClass(classSchedule)
    setShowModal(true)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const monthName = currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 capitalize">{monthName}</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="bg-gray-50 rounded-lg p-2 min-h-24" />
          }

          const daySchedules = getSchedulesForDay(day)
          const today = new Date()
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()

          return (
            <div
              key={day}
              className={`border rounded-lg p-2 min-h-24 overflow-y-auto transition-colors ${
                isToday ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-sm font-semibold text-gray-900 mb-2">{day}</div>
              <div className="space-y-1">
                {daySchedules.length > 0 ? (
                  daySchedules.map((schedule) => (
                    <button
                      key={schedule.id}
                      onClick={() => handleClassClick(schedule)}
                      className="w-full text-left text-xs bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded transition-colors"
                    >
                      <div className="font-medium">{schedule.hora}</div>
                      <div className="text-xs opacity-70">{schedule.instructor}</div>
                      <div className="mt-1 flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(
                            schedule.reservationStatus
                          )}`}
                        />
                        <span className="text-xs">{getStatusLabel(schedule.reservationStatus)}</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-xs text-gray-400 italic">Sin clases</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {showModal && selectedClass && (
        <ReservationModal
          schedule={selectedClass}
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setShowModal(false)
            fetchSchedules()
          }}
        />
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </div>
      )}
    </div>
  )
}

function getStatusColor(status) {
  switch (status) {
    case 'Confirmada':
      return 'bg-green-500'
    case 'Pendiente':
      return 'bg-yellow-500'
    case 'Rechazada':
      return 'bg-red-500'
    case 'Auto (plan)':
      return 'bg-blue-500'
    default:
      return 'bg-gray-300'
  }
}

function getStatusLabel(status) {
  return status || 'Disponible'
}
