import { useState, useEffect } from 'react'
import { Check, X, Calendar, Search } from 'lucide-react'

export default function AttendanceManagement() {
  const [attendances, setAttendances] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredAttendances, setFilteredAttendances] = useState([])

  useEffect(() => {
    fetchAttendances()
  }, [filterDate])

  useEffect(() => {
    const filtered = attendances.filter((att) =>
      att.nombre_alumna.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredAttendances(filtered)
  }, [searchTerm, attendances])

  const fetchAttendances = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/attendances?fecha=${filterDate}`)
      if (!response.ok) throw new Error('Error fetching attendances')
      const data = await response.json()
      setAttendances(data || [])
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleMarkAttendance = async (attendanceId, present) => {
    try {
      const response = await fetch(`/api/attendances/${attendanceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ asistio: present }),
      })

      if (!response.ok) throw new Error('Error updating attendance')

      setAttendances((prev) =>
        prev.map((att) =>
          att.id === attendanceId ? { ...att, asistio: present } : att
        )
      )
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

  const presentCount = attendances.filter((a) => a.asistio).length
  const totalCount = attendances.length

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

      {/* Header with filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Filtrar por Fecha
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Search className="w-4 h-4 inline mr-1" />
              Buscar Alumna
            </label>
            <input
              type="text"
              placeholder="Nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="bg-gray-50 p-3 rounded text-center">
            <p className="text-sm text-gray-600">Presentes</p>
            <p className="text-2xl font-bold text-primary">
              {presentCount} / {totalCount}
            </p>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Alumna
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Cama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Asistencia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAttendances.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay registros de asistencia para esta fecha
                </td>
              </tr>
            ) : (
              filteredAttendances.map((attendance) => (
                <tr key={attendance.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {attendance.nombre_alumna}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {attendance.hora}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Cama {attendance.numero_cama}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        attendance.asistio
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {attendance.asistio ? 'Presente' : 'Ausente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2 flex">
                    <button
                      onClick={() => handleMarkAttendance(attendance.id, true)}
                      className={`px-3 py-1 flex items-center gap-1 rounded transition-colors ${
                        attendance.asistio
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      Presente
                    </button>
                    <button
                      onClick={() => handleMarkAttendance(attendance.id, false)}
                      className={`px-3 py-1 flex items-center gap-1 rounded transition-colors ${
                        !attendance.asistio
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'
                      }`}
                    >
                      <X className="w-4 h-4" />
                      Ausente
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
