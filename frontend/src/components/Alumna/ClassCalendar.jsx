import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReservationModal from './ReservationModal'

const WEEKDAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

// Timezone-safe YYYY-MM-DD (avoids the UTC off-by-one from toISOString)
const toISO = (d) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const addDays = (date, n) => {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

// Visible date range for the current view mode
function getRange(mode, date) {
  if (mode === 'mes') {
    return {
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    }
  }
  // Week-aligned start (Sunday), 7 or 14 days
  const start = addDays(date, -date.getDay())
  const count = mode === 'quincena' ? 14 : 7
  return { start, end: addDays(start, count - 1) }
}

export default function ClassCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('semana') // 'semana' | 'quincena' | 'mes'
  const [schedules, setSchedules] = useState([])
  const [birthdays, setBirthdays] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchSchedules()
    fetchBirthdays()
  }, [currentDate, viewMode])

  const fetchSchedules = async () => {
    setLoading(true)
    try {
      const { start, end } = getRange(viewMode, currentDate)
      const response = await fetch(
        `/api/schedules?fechaInicio=${toISO(start)}&fechaFin=${toISO(end)}`
      )
      if (response.ok) {
        const data = await response.json()
        setSchedules(Array.isArray(data) ? data : data.schedules || [])
      }
    } catch (error) {
      console.error('Error fetching schedules:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchBirthdays = async () => {
    try {
      const { start, end } = getRange(viewMode, currentDate)
      // Collect the unique months the range spans (usually 1, sometimes 2)
      const months = new Map()
      let cursor = new Date(start)
      while (cursor <= end) {
        months.set(`${cursor.getFullYear()}-${cursor.getMonth() + 1}`, {
          month: cursor.getMonth() + 1,
          year: cursor.getFullYear(),
        })
        cursor = addDays(cursor, 1)
      }
      const all = []
      for (const { month, year } of months.values()) {
        const res = await fetch(`/api/birthdays?month=${month}&year=${year}`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data.birthdays)) all.push(...data.birthdays)
        }
      }
      setBirthdays(all)
    } catch (error) {
      console.error('Error fetching birthdays:', error)
    }
  }

  const getSchedulesForDate = (dateObj) => {
    const dateStr = toISO(dateObj)
    return schedules.filter((s) => s.fecha === dateStr)
  }

  const getBirthdaysForDate = (dateObj) => {
    return birthdays.filter(
      (b) => b.dia === dateObj.getDate() && b.mes === dateObj.getMonth() + 1
    )
  }

  const handlePrev = () => {
    if (viewMode === 'mes') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    } else {
      setCurrentDate(addDays(currentDate, viewMode === 'quincena' ? -14 : -7))
    }
  }

  const handleNext = () => {
    if (viewMode === 'mes') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    } else {
      setCurrentDate(addDays(currentDate, viewMode === 'quincena' ? 14 : 7))
    }
  }

  const handleClassClick = (classSchedule) => {
    setSelectedClass(classSchedule)
    setShowModal(true)
  }

  const rangeLabel = () => {
    if (viewMode === 'mes') {
      return currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    }
    const { start, end } = getRange(viewMode, currentDate)
    const fmt = (d) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
    return `${fmt(start)} – ${fmt(end)}`
  }

  const today = new Date()
  const isSameDay = (a, b) =>
    a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()

  const renderClassButton = (schedule) => (
    <button
      key={schedule.id}
      onClick={() => handleClassClick(schedule)}
      className="w-full text-left text-xs bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors"
    >
      <div className="font-semibold">{schedule.hora}</div>
      <div className="text-xs opacity-70">
        {schedule.profesora_nombre && schedule.profesora_apellido
          ? `${schedule.profesora_nombre} ${schedule.profesora_apellido}`
          : 'Sin asignar'}
      </div>
      {schedule.titulo && (
        <div className="text-xs text-primary font-medium mt-0.5">{schedule.titulo}</div>
      )}
      <div className="mt-1 flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(schedule.reservationStatus)}`} />
        <span className="text-xs">{getStatusLabel(schedule.reservationStatus)}</span>
      </div>
    </button>
  )

  // --- List view (semana / quincena) ---
  const renderListView = () => {
    const { start } = getRange(viewMode, currentDate)
    const count = viewMode === 'quincena' ? 14 : 7
    const days = Array.from({ length: count }, (_, i) => addDays(start, i))

    return (
      <div className="space-y-2">
        {days.map((d) => {
          const daySchedules = getSchedulesForDate(d)
          const dayBirthdays = getBirthdaysForDate(d)
          const isToday = isSameDay(d, today)
          return (
            <div
              key={toISO(d)}
              className={`flex gap-3 p-3 rounded-lg border ${
                isToday ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="w-12 flex-shrink-0 text-center">
                <div className="text-xs uppercase text-gray-500">{WEEKDAYS_SHORT[d.getDay()]}</div>
                <div className={`text-xl font-bold ${isToday ? 'text-primary' : 'text-gray-900'}`}>
                  {d.getDate()}
                </div>
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                {daySchedules.length > 0 ? (
                  daySchedules.map(renderClassButton)
                ) : (
                  <div className="text-sm text-gray-400 italic py-2">Sin clases</div>
                )}
                {dayBirthdays.map((b) => (
                  <div
                    key={b.id}
                    className="text-xs bg-pink-50 text-pink-700 p-1.5 rounded italic border border-pink-200"
                  >
                    🎂 {b.nombre}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // --- Month grid view ---
  const renderMonthView = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    const cells = []
    for (let i = 0; i < firstDay; i++) cells.push(null)
    for (let day = 1; day <= daysInMonth; day++) cells.push(day)

    return (
      <>
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
          {WEEKDAYS_SHORT.map((day) => (
            <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 py-1">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="bg-gray-50 rounded-lg min-h-16 sm:min-h-24" />
            }
            const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            const daySchedules = getSchedulesForDate(dateObj)
            const dayBirthdays = getBirthdaysForDate(dateObj)
            const isToday = isSameDay(dateObj, today)
            return (
              <div
                key={day}
                className={`border rounded-lg p-1 sm:p-2 min-h-16 sm:min-h-24 overflow-y-auto ${
                  isToday ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{day}</div>
                <div className="space-y-1">
                  {daySchedules.map((schedule) => (
                    <button
                      key={schedule.id}
                      onClick={() => handleClassClick(schedule)}
                      className="w-full text-left text-[10px] sm:text-xs bg-primary/10 hover:bg-primary/20 text-primary px-1 py-0.5 rounded transition-colors"
                    >
                      <div className="font-medium">{schedule.hora}</div>
                    </button>
                  ))}
                  {dayBirthdays.map((b) => (
                    <div key={b.id} className="text-[10px] bg-pink-50 text-pink-700 px-1 rounded" title={b.nombre}>
                      🎂
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      {/* View switcher */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100 rounded-lg mb-4">
        {[
          { id: 'semana', label: 'Semana' },
          { id: 'quincena', label: 'Quincena' },
          { id: 'mes', label: 'Mes' },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setViewMode(v.id)}
            className={`py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === v.id ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 capitalize truncate">
          {rangeLabel()}
        </h2>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {viewMode === 'mes' ? renderMonthView() : renderListView()}

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
