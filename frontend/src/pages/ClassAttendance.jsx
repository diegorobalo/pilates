import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Check, X, Loader } from 'lucide-react'

const CAPACITY = 6

export default function ClassAttendance() {
  const navigate = useNavigate()
  const location = useLocation()
  const scheduleId = location.state?.scheduleId || location.pathname.split('/').pop()

  const [classInfo, setClassInfo] = useState({})
  const [students, setStudents] = useState([]) // reservations with nombre_alumna, numero_cama, presente
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [savingId, setSavingId] = useState(null)

  useEffect(() => {
    fetchClassData()
  }, [scheduleId])

  const fetchClassData = async () => {
    try {
      setLoading(true)
      setError(null)

      const scheduleRes = await fetch(`/api/schedules/${scheduleId}`)
      if (!scheduleRes.ok) throw new Error('Error al cargar la clase')
      const scheduleData = await scheduleRes.json()
      setClassInfo(scheduleData.schedule || scheduleData)

      const res = await fetch(`/api/reservations?horario_id=${scheduleId}`)
      if (!res.ok) throw new Error('Error al cargar las reservas')
      const data = await res.json()
      const list = Array.isArray(data) ? data : data.reservations || []
      setStudents(list)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // present: true -> mark present, false -> mark absent
  const mark = async (reservation, present) => {
    setSavingId(reservation.id)
    try {
      const endpoint = present ? 'present' : 'absent'
      const res = await fetch(`/api/attendance/${reservation.id}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.message || d.error || 'No se pudo guardar')
      }
      // Persisted — update local state (presente stored as 1/0)
      setStudents((prev) =>
        prev.map((s) => (s.id === reservation.id ? { ...s, presente: present ? 1 : 0 } : s))
      )
    } catch (err) {
      alert(`Error: ${err.message}`)
    } finally {
      setSavingId(null)
    }
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const d = new Date(`${dateStr}T12:00:00`)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  const presentCount = students.filter((s) => s.presente === 1).length
  const byBed = {}
  students.forEach((s) => { byBed[s.numero_cama] = s })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Cargando clase...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => navigate('/instructor')}
              className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Volver</span>
            </button>
            <div className="text-center min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-gray-900 capitalize truncate">
                {formatDate(classInfo.fecha)} · {classInfo.hora}
              </h1>
            </div>
            <span className="text-sm font-bold text-primary whitespace-nowrap">
              {presentCount}/{students.length}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 mb-4">{error}</div>
        )}

        {students.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
            No hay alumnas reservadas para esta clase.
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-3">
              Marcá quién asistió. Se guarda automáticamente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: CAPACITY }, (_, i) => i + 1).map((bed) => {
                const s = byBed[bed]
                if (!s) {
                  return (
                    <div key={bed} className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-center text-gray-400">
                      <span className="text-xs uppercase tracking-wide">Equipo {bed}</span>
                      <p className="text-sm mt-1">Libre</p>
                    </div>
                  )
                }
                const isPresent = s.presente === 1
                const isAbsent = s.presente === 0
                return (
                  <div key={bed} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="min-w-0">
                        <span className="text-xs uppercase tracking-wide text-gray-400">Equipo {bed}</span>
                        <p className="font-semibold text-gray-900 truncate">
                          {s.nombre_alumna || s.telefono_alumna || 'Alumn@'}
                        </p>
                      </div>
                      {savingId === s.id && <Loader className="w-4 h-4 animate-spin text-gray-400" />}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => mark(s, true)}
                        disabled={savingId === s.id}
                        className={`flex items-center justify-center gap-1 py-2 rounded-lg text-sm font-medium transition-colors select-none touch-manipulation disabled:opacity-50 ${
                          isPresent
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                        }`}
                      >
                        <Check className="w-4 h-4" /> Presente
                      </button>
                      <button
                        type="button"
                        onClick={() => mark(s, false)}
                        disabled={savingId === s.id}
                        className={`flex items-center justify-center gap-1 py-2 rounded-lg text-sm font-medium transition-colors select-none touch-manipulation disabled:opacity-50 ${
                          isAbsent
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'
                        }`}
                      >
                        <X className="w-4 h-4" /> Ausente
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
