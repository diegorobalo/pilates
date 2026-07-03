import { useState, useEffect } from 'react'
import { Trash2, Edit, UserPlus, Search, FileText, CheckCircle, XCircle } from 'lucide-react'
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
  const [showLegajo, setShowLegajo] = useState(false)
  const [legajoData, setLegajoData] = useState(null)
  const [legajoLoading, setLegajoLoading] = useState(false)

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
      setStudents(Array.isArray(data) ? data : data.users || [])
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

  const handleOpenLegajo = async (student) => {
    setLegajoLoading(true)
    try {
      const response = await fetch(`/api/legajo/${student.id}`)
      if (!response.ok) throw new Error('Error loading legajo')
      const data = await response.json()
      setLegajoData(data.legajo)
      setShowLegajo(true)
    } catch (err) {
      alert(`Error: ${err.message}`)
    } finally {
      setLegajoLoading(false)
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
                      onClick={() => handleOpenLegajo(student)}
                      className="px-3 py-1 text-green-600 hover:bg-green-50 rounded transition-colors text-xs font-medium flex items-center gap-1"
                      title="Ver legajo"
                    >
                      <FileText className="w-4 h-4" />
                      Legajo
                    </button>
                    <button
                      onClick={() => handleOpenModal(student)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Edit className="w-4 h-4" />
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

      {/* Legajo Modal */}
      {showLegajo && legajoData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Legajo de Estudiante</h2>
              <button
                onClick={() => setShowLegajo(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Header with payment status */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {legajoData.nombre} {legajoData.apellido}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">ID: {legajoData.id}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {/* Payment status badge */}
                    <div className="flex items-center gap-2">
                      {legajoData.pagado_este_mes ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">
                            PAGÓ ESTE MES
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-semibold text-red-600">
                            NO PAGÓ ESTE MES
                          </span>
                        </>
                      )}
                    </div>
                    {/* Classes per week badge */}
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {legajoData.clases_semanales} clases/semana
                    </span>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Información Personal</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Teléfono</p>
                    <p className="text-sm font-medium text-gray-900">{legajoData.telefono}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">DNI</p>
                    <p className="text-sm font-medium text-gray-900">{legajoData.dni || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Fecha Nacimiento</p>
                    <p className="text-sm font-medium text-gray-900">
                      {legajoData.fecha_nacimiento
                        ? new Date(legajoData.fecha_nacimiento).toLocaleDateString('es-AR')
                        : '-'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Ciudad</p>
                    <p className="text-sm font-medium text-gray-900">{legajoData.ciudad || '-'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-600 uppercase">Dirección</p>
                    <p className="text-sm font-medium text-gray-900">{legajoData.direccion || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Información de Pago</h4>
                {legajoData.pago_este_mes ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      <strong>Monto:</strong> ${legajoData.pago_este_mes.monto}
                    </p>
                    <p className="text-sm text-green-800">
                      <strong>Método:</strong> {legajoData.pago_este_mes.metodo}
                    </p>
                    <p className="text-sm text-green-800">
                      <strong>Fecha:</strong>{' '}
                      {new Date(legajoData.pago_este_mes.fecha_pago).toLocaleDateString('es-AR')}
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">
                      No hay pago registrado para {legajoData.mes_referencia}
                    </p>
                    {legajoData.ultimo_pago && (
                      <p className="text-xs text-red-700 mt-2">
                        Último pago:{' '}
                        {new Date(legajoData.ultimo_pago.fecha_pago).toLocaleDateString('es-AR')}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Medical Information */}
              {(legajoData.alergias || legajoData.restricciones_medicas) && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Información Médica</h4>
                  <div className="space-y-2">
                    {legajoData.alergias && (
                      <div>
                        <p className="text-xs text-gray-600 uppercase">Alergias</p>
                        <p className="text-sm font-medium text-gray-900">{legajoData.alergias}</p>
                      </div>
                    )}
                    {legajoData.restricciones_medicas && (
                      <div>
                        <p className="text-xs text-gray-600 uppercase">Restricciones Médicas</p>
                        <p className="text-sm font-medium text-gray-900">
                          {legajoData.restricciones_medicas}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Emergency Contact */}
              {legajoData.datos_emergencia_nombre && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Contacto de Emergencia</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Nombre</p>
                      <p className="text-sm font-medium text-gray-900">
                        {legajoData.datos_emergencia_nombre}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Teléfono</p>
                      <p className="text-sm font-medium text-gray-900">
                        {legajoData.datos_emergencia_telefono}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Relación</p>
                      <p className="text-sm font-medium text-gray-900">
                        {legajoData.datos_emergencia_relacion}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Close button */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setShowLegajo(false)}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
