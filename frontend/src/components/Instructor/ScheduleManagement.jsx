import { useState, useEffect } from 'react'
import { Trash2, Edit, Plus, Search } from 'lucide-react'
import ScheduleModal from './ScheduleModal'
import ConfirmDialog from './ConfirmDialog'

const STATUS_COLORS = {
  ABIERTA: 'bg-green-100 text-green-800',
  CERRADA: 'bg-yellow-100 text-yellow-800',
  CANCELADA: 'bg-red-100 text-red-800',
}

export default function ScheduleManagement() {
  const [schedules, setSchedules] = useState([])
  const [instructors, setInstructors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [scheduleToDelete, setScheduleToDelete] = useState(null)

  useEffect(() => {
    fetchSchedules()
    fetchInstructors()
  }, [])

  const fetchInstructors = async () => {
    try {
      const res = await fetch('/api/users?includeInactive=false')
      const data = await res.json()
      const list = (data.users || data || []).filter(
        (u) => u.tipo === 'PROFESORA' || u.tipo === 'DUEÑA'
      )
      setInstructors(list)
    } catch (err) {
      console.error('Error fetching instructors:', err)
    }
  }

  // Assign (or clear) the instructor for a class — saves immediately
  const assignInstructor = async (scheduleId, profesoraId) => {
    try {
      const res = await fetch(`/api/schedules/${scheduleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profesora_asignada: profesoraId || null }),
      })
      if (!res.ok) throw new Error('No se pudo asignar el instructor')
      // Optimistic local update + refresh
      setSchedules((prev) =>
        prev.map((s) => (s.id === scheduleId ? { ...s, profesora_asignada: profesoraId || null } : s))
      )
      fetchSchedules()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const fetchSchedules = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/schedules')
      if (!response.ok) throw new Error('Error fetching schedules')
      const data = await response.json()
      const list = Array.isArray(data) ? data : data.schedules || []
      // Sort by date and time
      const sorted = list.sort((a, b) => {
        const dateA = new Date(`${a.fecha}T${a.hora}`)
        const dateB = new Date(`${b.fecha}T${b.hora}`)
        return dateA - dateB
      })
      setSchedules(sorted)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = (schedule = null) => {
    setSelectedSchedule(schedule)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedSchedule(null)
  }

  const handleSaveSchedule = async (scheduleData) => {
    try {
      // Batch create: scheduleData is an array of schedules (varios días)
      if (Array.isArray(scheduleData)) {
        const results = await Promise.allSettled(
          scheduleData.map((s) =>
            fetch('/api/schedules', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(s),
            }).then(async (r) => {
              if (!r.ok) {
                let detail = `HTTP ${r.status}`
                try {
                  const d = await r.json()
                  detail = d.error || d.message || detail
                } catch {
                  // non-JSON error page
                }
                throw new Error(`${s.fecha}: ${detail}`)
              }
            })
          )
        )
        const ok = results.filter((r) => r.status === 'fulfilled').length
        const failures = results.filter((r) => r.status === 'rejected').map((r) => r.reason.message)
        handleCloseModal()
        fetchSchedules()
        if (failures.length > 0) {
          const sample = failures.slice(0, 3).join('\n')
          alert(`${ok} clase(s) creada(s). ${failures.length} fallaron:\n${sample}`)
        }
        return
      }

      // Single create or update
      const url = selectedSchedule
        ? `/api/schedules/${selectedSchedule.id}`
        : '/api/schedules'
      const method = selectedSchedule ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleData),
      })

      if (!response.ok) throw new Error('Error saving schedule')

      handleCloseModal()
      fetchSchedules()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleDeleteClick = (schedule) => {
    setScheduleToDelete(schedule)
    setShowConfirmDelete(true)
  }

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/schedules/${scheduleToDelete.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Error deleting schedule')

      setShowConfirmDelete(false)
      setScheduleToDelete(null)
      fetchSchedules()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Header with create button */}
      <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Horarios de Clases
        </h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="w-5 h-5" />
          Nuevo Horario
        </button>
      </div>

      {/* Mobile: card list */}
      <div className="md:hidden space-y-3">
        {schedules.length === 0 ? (
          <div className="bg-white rounded-lg shadow px-4 py-8 text-center text-gray-500">
            No hay horarios para mostrar
          </div>
        ) : (
          schedules.map((schedule) => (
            <div key={schedule.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 capitalize">
                    {formatDate(schedule.fecha)}
                  </p>
                  <p className="text-sm text-gray-500">{schedule.hora} hs</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    STATUS_COLORS[schedule.estado] || 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {schedule.estado}
                </span>
              </div>

              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Reservas</span>
                  <span className="text-gray-700">
                    <span className="font-medium">{schedule.reservas_count || 0}</span>
                    <span className="text-gray-400"> / {schedule.capacidad}</span>
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${((schedule.reservas_count || 0) / schedule.capacidad) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-xs text-gray-500 mb-1">Instructor a cargo</label>
                <select
                  value={schedule.profesora_asignada || ''}
                  onChange={(e) => assignInstructor(schedule.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sin asignar</option>
                  {instructors.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.nombre} {i.apellido || ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3 flex gap-2 border-t border-gray-100 pt-3">
                <button
                  onClick={() => handleOpenModal(schedule)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium"
                >
                  <Edit className="w-4 h-4" /> Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(schedule)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4" /> Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Capacidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Reservas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {schedules.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay horarios para mostrar
                </td>
              </tr>
            ) : (
              schedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {formatDate(schedule.fecha)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {schedule.hora}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {schedule.capacidad}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="font-medium">
                      {schedule.reservas_count || 0}
                    </span>
                    <span className="text-gray-400">
                      {' / '}
                      {schedule.capacidad}
                    </span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${((schedule.reservas_count || 0) / schedule.capacidad) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        STATUS_COLORS[schedule.estado] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {schedule.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <select
                      value={schedule.profesora_asignada || ''}
                      onChange={(e) => assignInstructor(schedule.id, e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sin asignar</option>
                      {instructors.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.nombre} {i.apellido || ''}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2 flex">
                    <button
                      onClick={() => handleOpenModal(schedule)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(schedule)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showModal && (
        <ScheduleModal
          schedule={selectedSchedule}
          onSave={handleSaveSchedule}
          onClose={handleCloseModal}
        />
      )}

      {showConfirmDelete && (
        <ConfirmDialog
          title="Eliminar Horario"
          message={`¿Estás seguro que deseas eliminar el horario del ${formatDate(scheduleToDelete?.fecha)} a las ${scheduleToDelete?.hora}? Esta acción no se puede deshacer.`}
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setShowConfirmDelete(false)
            setScheduleToDelete(null)
          }}
          isDanger={true}
        />
      )}
    </div>
  )
}
