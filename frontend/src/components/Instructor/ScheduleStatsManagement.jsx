import { useState, useEffect, useCallback } from 'react'
import { Calendar, Loader, AlertTriangle, CheckCircle, User } from 'lucide-react'

export default function ScheduleStatsManagement() {
  const [stats, setStats] = useState([])
  const [profesoras, setProfesoras] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const [showAssignForm, setShowAssignForm] = useState(false)

  const [filterMonth, setFilterMonth] = useState(new Date().toISOString().slice(0, 7))
  const [assignData, setAssignData] = useState({
    profesora_asignada: '',
    titulo: ''
  })

  const loadStats = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const year = filterMonth.split('-')[0]
      const month = filterMonth.split('-')[1]
      const firstDay = `${year}-${month}-01`
      const lastDay = new Date(year, month, 0).toISOString().split('T')[0]

      const [statsRes, profsRes] = await Promise.all([
        fetch(`/api/schedule-stats?fecha_desde=${firstDay}&fecha_hasta=${lastDay}`),
        fetch('/api/schedule-stats/profesoras')
      ])

      const statsData = await statsRes.json()
      const profsData = await profsRes.json()

      if (statsRes.ok) setStats(Array.isArray(statsData.stats) ? statsData.stats : [])
      if (profsRes.ok) setProfesoras(Array.isArray(profsData.profesoras) ? profsData.profesoras : [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [filterMonth])

  useEffect(() => {
    loadStats()
  }, [loadStats])

  const assignProfesora = async (schedule) => {
    if (!assignData.profesora_asignada) {
      setError('Selecciona una profesora')
      return
    }

    try {
      const res = await fetch(`/api/schedule-stats/${schedule.id}/assign`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assignData)
      })
      const data = await res.json()
      if (res.ok) {
        setShowAssignForm(false)
        setSelectedSchedule(null)
        setAssignData({ profesora_asignada: '', titulo: '' })
        await loadStats()
      } else {
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center py-12"><Loader className="w-6 h-6 animate-spin mr-2" /> Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Estadísticas de Horarios</h2>
        </div>
        <input
          type="month"
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />
      </div>

      {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Fecha</th>
              <th className="px-4 py-3 text-left font-semibold">Hora</th>
              <th className="px-4 py-3 text-left font-semibold">Profesora</th>
              <th className="px-4 py-3 text-center font-semibold">Suscriptas</th>
              <th className="px-4 py-3 text-center font-semibold">Reservadas</th>
              <th className="px-4 py-3 text-center font-semibold">Disponibles</th>
              <th className="px-4 py-3 text-center font-semibold">%</th>
              <th className="px-4 py-3 text-center font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody>
            {stats.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-4 py-3 text-center text-gray-500">
                  No hay horarios para este mes
                </td>
              </tr>
            ) : (
              stats.map(s => (
                <tr key={s.id} className={`border-b ${s.is_overbooking ? 'bg-red-50' : 'hover:bg-gray-50'}`}>
                  <td className="px-4 py-3 font-semibold">{new Date(s.fecha).toLocaleDateString('es-AR')}</td>
                  <td className="px-4 py-3">{s.hora}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => {
                        setSelectedSchedule(s)
                        setAssignData({ profesora_asignada: s.profesora_asignada || '', titulo: s.titulo || '' })
                        setShowAssignForm(true)
                      }}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    >
                      <User className="w-4 h-4" />
                      {s.profesora_name || 'Sin asignar'}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">{s.subscribed_alumnos}</td>
                  <td className="px-4 py-3 text-center font-semibold">{s.reserved_spots}</td>
                  <td className="px-4 py-3 text-center">{s.available_spots}</td>
                  <td className="px-4 py-3 text-center">
                    {s.is_overbooking ? (
                      <div className="flex items-center justify-center gap-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="font-bold text-red-600">{s.capacity_percentage}%</span>
                      </div>
                    ) : (
                      <span className={s.capacity_percentage >= 80 ? 'text-orange-600 font-semibold' : 'text-green-600'}>
                        {s.capacity_percentage}%
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.is_overbooking && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                        SOBREBOOKING
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Assign Form Modal */}
      {showAssignForm && selectedSchedule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">
              Asignar Profesora - {new Date(selectedSchedule.fecha).toLocaleDateString('es-AR')} {selectedSchedule.hora}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profesora</label>
                <select
                  value={assignData.profesora_asignada}
                  onChange={(e) => setAssignData({ ...assignData, profesora_asignada: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                >
                  <option value="">Sin asignar</option>
                  {profesoras.map(p => (
                    <option key={p.id} value={p.id}>{p.nombre} {p.apellido}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título de la Clase</label>
                <input
                  type="text"
                  value={assignData.titulo}
                  onChange={(e) => setAssignData({ ...assignData, titulo: e.target.value })}
                  placeholder="ej: Full Body, Core, etc"
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => assignProfesora(selectedSchedule)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium"
                >
                  Guardar
                </button>
                <button
                  onClick={() => {
                    setShowAssignForm(false)
                    setSelectedSchedule(null)
                  }}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
