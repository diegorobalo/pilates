import { useState } from 'react'
import { Dumbbell, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function BedGrid({ reservations = [], onStatusChange = () => {} }) {
  const [beds, setBeds] = useState(initializeBeds(reservations))
  const [hoveredBed, setHoveredBed] = useState(null)

  function initializeBeds(reservations) {
    const bedMap = {}

    // Initialize all 6 beds
    for (let i = 1; i <= 6; i++) {
      bedMap[i] = {
        number: i,
        student: null,
        status: 'empty', // 'present', 'absent', 'empty'
        reservation: null,
        plan: null,
      }
    }

    // Fill beds with reservations
    reservations.forEach((res) => {
      if (res.numero_cama && res.numero_cama >= 1 && res.numero_cama <= 6) {
        const bedNum = res.numero_cama
        bedMap[bedNum] = {
          number: bedNum,
          student: res.nombre_alumna || res.student_name,
          status: res.asistio ? 'present' : 'absent',
          reservation: res.id,
          plan: res.tiene_plan || false,
        }
      }
    })

    return bedMap
  }

  const handleBedClick = (bedNumber) => {
    const bed = beds[bedNumber]

    // No action for empty beds
    if (bed.status === 'empty') return

    const newStatus = bed.status === 'present' ? 'absent' : 'present'

    const updatedBeds = {
      ...beds,
      [bedNumber]: {
        ...bed,
        status: newStatus,
      },
    }

    setBeds(updatedBeds)

    // Notify parent component
    onStatusChange(bed.reservation, newStatus === 'present')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'from-green-400 to-green-600'
      case 'absent':
        return 'from-red-400 to-red-600'
      case 'empty':
        return 'from-gray-300 to-gray-400'
      default:
        return 'from-gray-300 to-gray-400'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-6 h-6 text-white" />
      case 'absent':
        return <XCircle className="w-6 h-6 text-white" />
      case 'empty':
        return <AlertCircle className="w-6 h-6 text-gray-500 opacity-40" />
      default:
        return null
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'present':
        return 'Presente'
      case 'absent':
        return 'Ausente'
      case 'empty':
        return 'Vacío'
      default:
        return ''
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Dumbbell className="w-8 h-8 text-primary" />
          Equipos Pilates - Asistencia
        </h2>
        <p className="text-gray-600 mt-2">Selecciona un equipo para cambiar el estado de asistencia</p>
      </div>

      {/* Grid of 6 beds (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((bedNum) => {
          const bed = beds[bedNum]
          const isHovered = hoveredBed === bedNum
          const isClickable = bed.status !== 'empty'

          return (
            <div
              key={bedNum}
              onMouseEnter={() => isClickable && setHoveredBed(bedNum)}
              onMouseLeave={() => setHoveredBed(null)}
              onClick={() => handleBedClick(bedNum)}
              className={`
                relative overflow-hidden rounded-2xl transition-all duration-300 ease-out
                ${isClickable ? 'cursor-pointer' : 'cursor-default'}
                ${
                  isHovered && isClickable
                    ? 'transform scale-105 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }
              `}
            >
              {/* Gradient background */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${getStatusColor(bed.status)}
                  transition-all duration-300
                `}
              />

              {/* Content */}
              <div className="relative p-8 h-64 flex flex-col justify-between">
                {/* Top section: Bed number and status badge */}
                <div className="flex items-start justify-between">
                  <div className="bg-white bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">Equipo {bed.number}</span>
                  </div>

                  {bed.status !== 'empty' && (
                    <div className="bg-white bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span
                        className={`
                          text-xs font-bold uppercase tracking-wide
                          ${
                            bed.status === 'present'
                              ? 'text-white'
                              : bed.status === 'absent'
                              ? 'text-white'
                              : 'text-gray-600'
                          }
                        `}
                      >
                        {getStatusText(bed.status)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Middle section: Icon and student name */}
                <div className="flex flex-col items-center gap-4">
                  <div className="transform transition-transform duration-300 hover:scale-110">
                    {getStatusIcon(bed.status)}
                  </div>

                  {bed.status !== 'empty' && (
                    <div className="text-center">
                      <p className="text-white font-bold text-xl break-words max-w-xs">
                        {bed.student}
                      </p>
                      {bed.plan && (
                        <p className="text-white text-xs mt-2 bg-white bg-opacity-20 px-2 py-1 rounded-full inline-block">
                          Plan Semanal
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom section: Action hint */}
                {isClickable && (
                  <div className="text-center text-white text-xs opacity-80 transition-opacity duration-300">
                    {isHovered ? (
                      <span className="font-semibold">
                        {bed.status === 'present' ? 'Marcar Ausente' : 'Marcar Presente'}
                      </span>
                    ) : (
                      <span>Haz clic para cambiar</span>
                    )}
                  </div>
                )}
              </div>

              {/* Animated border effect on hover */}
              {isHovered && isClickable && (
                <div className="absolute inset-0 rounded-2xl border-2 border-white opacity-50 animate-pulse" />
              )}
            </div>
          )
        })}
      </div>

      {/* Summary statistics */}
      <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600">
            {Object.values(beds).filter((b) => b.status === 'present').length}
          </div>
          <p className="text-gray-700 font-medium mt-2">Presentes</p>
        </div>

        <div className="bg-red-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-red-600">
            {Object.values(beds).filter((b) => b.status === 'absent').length}
          </div>
          <p className="text-gray-700 font-medium mt-2">Ausentes</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-gray-600">
            {Object.values(beds).filter((b) => b.status === 'empty').length}
          </div>
          <p className="text-gray-700 font-medium mt-2">Vacíos</p>
        </div>
      </div>
    </div>
  )
}
