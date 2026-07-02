import { useState, useEffect } from 'react'
import { Trash2, Edit, UserPlus, Search } from 'lucide-react'
import StudentModal from './StudentModal'
import PlanModal from './PlanModal'
import ConfirmDialog from './ConfirmDialog'

export default function StudentManagement() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredStudents, setFilteredStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showPlanModal, setShowPlanModal] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [studentToDelete, setStudentToDelete] = useState(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  useEffect(() => {
    // Filter students by name or phone
    const filtered = students.filter(
      (student) =>
        student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.telefono.includes(searchTerm)
    )
    setFilteredStudents(filtered)
  }, [searchTerm, students])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users?tipo=ALUMNA')
      if (!response.ok) throw new Error('Error fetching students')
      const data = await response.json()
      setStudents(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = (student = null) => {
    setSelectedStudent(student)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedStudent(null)
  }

  const handleSaveStudent = async (studentData) => {
    try {
      const url = selectedStudent
        ? `/api/users/${selectedStudent.id}`
        : '/api/users'
      const method = selectedStudent ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      })

      if (!response.ok) throw new Error('Error saving student')

      handleCloseModal()
      fetchStudents()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleOpenPlanModal = (student) => {
    setSelectedStudent(student)
    setShowPlanModal(true)
  }

  const handleClosePlanModal = () => {
    setShowPlanModal(false)
    setSelectedStudent(null)
  }

  const handleSavePlan = async (planData) => {
    try {
      const response = await fetch(`/api/users/${selectedStudent.id}/plans`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(planData),
      })

      if (!response.ok) throw new Error('Error saving plan')

      handleClosePlanModal()
      fetchStudents()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleDeleteClick = (student) => {
    setStudentToDelete(student)
    setShowConfirmDelete(true)
  }

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/users/${studentToDelete.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Error deleting student')

      setShowConfirmDelete(false)
      setStudentToDelete(null)
      fetchStudents()
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
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

      {/* Header with search and create button */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o teléfono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          Nueva Alumna
        </button>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                DNI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Plan Semanal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay alumnas para mostrar
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{student.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {student.nombre}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.telefono}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.dni || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.plan_semanal || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.estado === 'ACTIVA'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {student.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2 flex">
                    <button
                      onClick={() => handleOpenModal(student)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenPlanModal(student)}
                      className="px-3 py-1 text-primary hover:bg-blue-50 rounded transition-colors text-xs font-medium"
                    >
                      Plan
                    </button>
                    <button
                      onClick={() => handleDeleteClick(student)}
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
        <StudentModal
          student={selectedStudent}
          onSave={handleSaveStudent}
          onClose={handleCloseModal}
        />
      )}

      {showPlanModal && (
        <PlanModal
          student={selectedStudent}
          onSave={handleSavePlan}
          onClose={handleClosePlanModal}
        />
      )}

      {showConfirmDelete && (
        <ConfirmDialog
          title="Eliminar Alumna"
          message={`¿Estás seguro que deseas eliminar a ${studentToDelete?.nombre}? Esta acción no se puede deshacer.`}
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setShowConfirmDelete(false)
            setStudentToDelete(null)
          }}
          isDanger={true}
        />
      )}
    </div>
  )
}
