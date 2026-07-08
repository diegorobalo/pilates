import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Edit2, Clock, Users } from 'lucide-react'

const toISO = (d) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export default function AttendanceManagement() {
  const navigate = useNavigate()
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterDate, setFilterDate] = useState(toISO(new Date()))

  const fetchSchedules = useCallback(async () => {
    try {
      setLoading(true)
      // Schedules endpoint filters by a date range; use the same day for both.
      const res = await fetch(`/api/schedules?fechaInicio=${filterDate}&fechaFin=${filterDate}`)
      if (!res.ok) throw new Error('Error al cargar las clases')
      const data = await res.json()
      const list = Array.isArray(data) ? data : data.schedules || []
      list.sort((a, b) => (a.hora || '').localeCompare(b.hora || ''))
      setSchedules(list)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [filterDate])

  useEffect(() => {
    fetchSchedules()
  }, [fetchSchedules])

  const isToday = filterDate === toISO(new Date())

  // The "current" class: the one whose start time is the most recent that has
  // already begun today; if none started yet, the next upcoming one.
  const currentSchedule = (() => {
    if (!isToday || schedules.length === 0) return null
    const now = new Date()
    const nowStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    const started = schedules.filter((s) => (s.hora || '') <= nowStr)
    if (started.length > 0) return started[started.length - 1]
    return schedules[0] // none started yet -> next upcoming
  })()

  const goToClass = (id) => navigate(`/class-attendance/${id}`, { state: { scheduleId: id } })

  const formatDay = (dateStr) => {
    const d = new Date(`${dateStr}T12:00:00`)
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
      )}

      {/* Current class highlight */}
      {currentSchedule && (
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center gap-2 text-sm font-medium opacity-90 mb-1">
            <Clock className="w-4 h-4" /> Clase de ahora
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-3xl font-bold">{currentSchedule.hora}</p>
              <p className="text-sm opacity-90 flex items-center gap-1 mt-1">
                <Users className="w-4 h-4" />
                {currentSchedule.reservas_count || 0} reservada(s)
              </p>
            </div>
            <button
              onClick={() => goToClass(currentSchedule.id)}
              className="flex items-center gap-2 px-5 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Edit2 className="w-5 h-5" /> Marcar Asistencia
            </button>
          </div>
        </div>
      )}

      {/* Date filter */}
      <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
        <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Ver día:</label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* All classes for the day */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 capitalize">
          Clases del {formatDay(filterDate)}
        </h3>

        {loading ? (
          <div className="text-center py-8 text-gray-500">Cargando...</div>
        ) : schedules.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            No hay clases este día.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xl font-bold text-gray-900">{schedule.hora}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <Users className="w-4 h-4" />
                      {schedule.reservas_count || 0} reservada(s)
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      schedule.estado === 'ABIERTA'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {schedule.estado}
                  </span>
                </div>
                <button
                  onClick={() => goToClass(schedule.id)}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" /> Marcar Asistencia
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
