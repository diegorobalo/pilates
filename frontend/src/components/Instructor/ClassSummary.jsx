import { Calendar, Clock, User, TrendingUp } from 'lucide-react'

export default function ClassSummary({
  classInfo = {},
  presentCount = 0,
  absentCount = 0,
  emptyCount = 0,
}) {
  const totalConfirmed = presentCount + absentCount
  const percentPresent =
    totalConfirmed > 0 ? Math.round((presentCount / totalConfirmed) * 100) : 0

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-gradient-to-r from-primary-light to-primary-dark rounded-xl shadow-lg p-8 text-white mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Class Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Resumen de Clase</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Fecha</p>
                <p className="text-lg font-semibold">{formatDate(classInfo.fecha)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Hora</p>
                <p className="text-lg font-semibold">{classInfo.hora || 'No especificada'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Instructora</p>
                <p className="text-lg font-semibold">
                  {classInfo.instructor_name || 'Sin asignar'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Statistics */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Total confirmadas */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm opacity-90 mb-2">Total Confirmadas</p>
              <p className="text-3xl font-bold">{totalConfirmed}</p>
            </div>

            {/* Presentes */}
            <div className="bg-green-400 bg-opacity-30 rounded-lg p-4">
              <p className="text-sm opacity-90 mb-2">Presentes</p>
              <p className="text-3xl font-bold">{presentCount}</p>
            </div>

            {/* Ausentes */}
            <div className="bg-red-400 bg-opacity-30 rounded-lg p-4">
              <p className="text-sm opacity-90 mb-2">Ausentes</p>
              <p className="text-3xl font-bold">{absentCount}</p>
            </div>

            {/* Vacíos */}
            <div className="bg-gray-300 bg-opacity-30 rounded-lg p-4">
              <p className="text-sm opacity-90 mb-2">Equipos Vacíos</p>
              <p className="text-3xl font-bold">{emptyCount}</p>
            </div>
          </div>

          {/* Percentage bar */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold">Asistencia</span>
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-3 overflow-hidden">
              <div
                className="bg-green-300 h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${percentPresent}%` }}
              />
            </div>
            <p className="text-sm mt-2 text-center font-semibold">{percentPresent}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
