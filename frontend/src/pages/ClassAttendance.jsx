import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Save, TabletSmartphone, Grid3x3 } from 'lucide-react'
import BedGrid from '../components/Instructor/BedGrid'
import ClassSummary from '../components/Instructor/ClassSummary'
import AttendanceForm from '../components/Instructor/AttendanceForm'
import SaveAttendanceModal from '../components/Instructor/SaveAttendanceModal'

export default function ClassAttendance() {
  const navigate = useNavigate()
  const location = useLocation()

  // Get schedule ID from route params or location state
  const scheduleId = location.state?.scheduleId || location.pathname.split('/').pop()

  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [reservations, setReservations] = useState([])
  const [classInfo, setClassInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [changes, setChanges] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchClassData()
  }, [scheduleId])

  const fetchClassData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch schedule info
      const scheduleResponse = await fetch(`/api/schedules/${scheduleId}`)
      if (!scheduleResponse.ok) throw new Error('Error fetching schedule')
      const schedule = await scheduleResponse.json()

      // Fetch reservations for this schedule
      const reservationsResponse = await fetch(
        `/api/reservations?scheduleId=${scheduleId}`
      )
      if (!reservationsResponse.ok)
        throw new Error('Error fetching reservations')
      const reservationsData = await reservationsResponse.json()

      setClassInfo(schedule)
      setReservations(reservationsData || [])
      setChanges([]) // Reset changes on fresh load
    } catch (err) {
      setError(err.message)
      console.error('Error fetching class data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = (reservationId, present) => {
    // Check if this change already exists
    const existingChangeIndex = changes.findIndex(
      (c) => c.reservationId === reservationId
    )

    if (existingChangeIndex >= 0) {
      // Update existing change
      const updatedChanges = [...changes]
      updatedChanges[existingChangeIndex] = { reservationId, present }
      setChanges(updatedChanges)
    } else {
      // Add new change
      setChanges([...changes, { reservationId, present }])
    }
  }

  const handleBulkMarkPresent = () => {
    const newChanges = reservations.map((res) => ({
      reservationId: res.id,
      present: true,
    }))
    setChanges(newChanges)
  }

  const handleBulkMarkAbsent = () => {
    const newChanges = reservations.map((res) => ({
      reservationId: res.id,
      present: false,
    }))
    setChanges(newChanges)
  }

  const handleSaveAttendance = async () => {
    setShowModal(true)
  }

  const handleConfirmSave = () => {
    setShowModal(false)
    // Navigate back to dashboard
    navigate('/instructor', { state: { activeTab: 'asistencia' } })
  }

  // Calculate statistics
  const presentCount = reservations.filter((r) => r.asistio).length
  const absentCount = reservations.filter((r) => !r.asistio).length
  const emptyCount = 6 - reservations.length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Cargando clase...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/instructor')}
            className="flex items-center gap-2 text-primary hover:text-primary-dark mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Dashboard
          </button>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-800">
            <p className="font-semibold mb-2">Error cargando la clase</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/instructor')}
              className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Dashboard
            </button>

            {/* Save Button */}
            <button
              onClick={handleSaveAttendance}
              disabled={changes.length === 0}
              className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              Guardar ({changes.length} cambios)
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">Marcado de Asistencia</h1>
          <p className="text-gray-600 mt-2">
            {classInfo.fecha && `${classInfo.fecha}`}
            {classInfo.hora && ` - ${classInfo.hora}`}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Class Summary */}
        <ClassSummary
          classInfo={classInfo}
          presentCount={presentCount}
          absentCount={absentCount}
          emptyCount={emptyCount}
        />

        {/* View Mode Toggle */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Grid3x3 className="w-5 h-5" />
            Vista de Equipos
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              viewMode === 'list'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <TabletSmartphone className="w-5 h-5" />
            Vista de Lista
          </button>
        </div>

        {/* Content based on view mode */}
        {reservations.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">
              No hay alumnas reservadas para esta clase
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <BedGrid reservations={reservations} onStatusChange={handleStatusChange} />
        ) : (
          <AttendanceForm
            reservations={reservations}
            onStatusChange={handleStatusChange}
            onBulkMarkPresent={handleBulkMarkPresent}
            onBulkMarkAbsent={handleBulkMarkAbsent}
          />
        )}
      </main>

      {/* Save Modal */}
      <SaveAttendanceModal
        isOpen={showModal}
        changes={changes}
        onConfirm={handleConfirmSave}
        onCancel={() => setShowModal(false)}
        classInfo={classInfo}
      />
    </div>
  )
}
