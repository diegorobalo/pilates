import { useState, useEffect } from 'react'
import { Check, X, Users, CheckSquare, XSquare } from 'lucide-react'

export default function AttendanceForm({
  reservations = [],
  onStatusChange = () => {},
  onBulkMarkPresent = () => {},
  onBulkMarkAbsent = () => {},
}) {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredStudents, setFilteredStudents] = useState([])

  useEffect(() => {
    // Initialize students from reservations
    const studentList = reservations.map((res) => ({
      id: res.id,
      name: res.nombre_alumna || res.student_name,
      status: res.asistio ? 'present' : 'absent',
      bedNumber: res.numero_cama,
    }))
    setStudents(studentList)
    setFilteredStudents(studentList)
  }, [reservations])

  useEffect(() => {
    // Filter students by search term
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredStudents(filtered)
  }, [searchTerm, students])

  const handleStatusChange = (studentId, newStatus) => {
    const updatedStudents = students.map((s) =>
      s.id === studentId ? { ...s, status: newStatus } : s
    )
    setStudents(updatedStudents)

    // Update filtered students for display
    const updatedFiltered = updatedStudents.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredStudents(updatedFiltered)

    // Notify parent component
    onStatusChange(studentId, newStatus === 'present')
  }

  const handleBulkPresent = () => {
    const updatedStudents = students.map((s) => ({ ...s, status: 'present' }))
    setStudents(updatedStudents)
    onBulkMarkPresent()
  }

  const handleBulkAbsent = () => {
    const updatedStudents = students.map((s) => ({ ...s, status: 'absent' }))
    setStudents(updatedStudents)
    onBulkMarkAbsent()
  }

  const presentCount = students.filter((s) => s.status === 'present').length
  const absentCount = students.filter((s) => s.status === 'absent').length
  const totalCount = students.length

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4">
          <Users className="w-8 h-8 text-primary" />
          Lista de Asistencia
        </h2>
        <p className="text-gray-600">Alterna el estado de cada alumna con un clic</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalCount}</div>
          <p className="text-gray-700 text-sm mt-1">Total Confirmadas</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{presentCount}</div>
          <p className="text-gray-700 text-sm mt-1">Presentes</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{absentCount}</div>
          <p className="text-gray-700 text-sm mt-1">Ausentes</p>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={handleBulkPresent}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          <CheckSquare className="w-5 h-5" />
          Marcar Todos Como Presentes
        </button>
        <button
          onClick={handleBulkAbsent}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          <XSquare className="w-5 h-5" />
          Marcar Todos Como Ausentes
        </button>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar alumna por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none transition-all"
        />
      </div>

      {/* Student List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredStudents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {students.length === 0
              ? 'No hay alumnas para esta clase'
              : 'No se encontraron resultados'}
          </div>
        ) : (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors duration-150"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-900">{student.name}</p>
                {student.bedNumber && (
                  <p className="text-xs text-gray-500 mt-1">Equipo {student.bedNumber}</p>
                )}
              </div>

              {/* Toggle Buttons */}
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleStatusChange(student.id, 'present')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-150 ${
                    student.status === 'present'
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Presente</span>
                </button>
                <button
                  onClick={() => handleStatusChange(student.id, 'absent')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-150 ${
                    student.status === 'absent'
                      ? 'bg-red-500 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-red-100'
                  }`}
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Ausente</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
