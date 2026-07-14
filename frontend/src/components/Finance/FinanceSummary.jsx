import { useState, useEffect } from 'react'
import { Calendar, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'

export default function FinanceSummary() {
  const [stats, setStats] = useState({
    totalCobrado: 0,
    ingresosPendientes: 0,
    ingresosVencidos: 0,
    alumnasAlDia: 0,
    alumnasEnMora: 0,
  })
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7)
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [selectedMonth])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/payments/stats?month=${selectedMonth}`
      )
      if (!response.ok) throw new Error('Error fetching stats')
      const data = await response.json()
      setStats(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching stats:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS',
    }).format(value || 0)
  }

  const kpiCards = [
    {
      id: 'cobrado',
      title: 'Total Cobrado',
      value: stats.totalCobrado,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      isCurrency: true,
    },
    {
      id: 'pendientes',
      title: 'Ingresos Pendientes',
      value: stats.ingresosPendientes,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      isCurrency: true,
    },
    {
      id: 'vencidos',
      title: 'Ingresos Vencidos',
      value: stats.ingresosVencidos,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      isCurrency: true,
    },
    {
      id: 'alDia',
      title: 'Alumnas Al Día',
      value: stats.alumnasAlDia,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      isCurrency: false,
    },
    {
      id: 'mora',
      title: 'Alumnas en Mora',
      value: stats.alumnasEnMora,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      isCurrency: false,
    },
  ]

  if (loading && error === null) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Month Selector */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-600" />
          <label className="block text-sm font-medium text-gray-700">
            Seleccionar Mes:
          </label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.id}
              className={`${card.bgColor} border-2 ${card.borderColor} rounded-lg p-6 transition-transform hover:scale-105`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    {card.title}
                  </p>
                  <p className={`text-2xl font-bold ${card.color}`}>
                    {card.isCurrency
                      ? formatCurrency(card.value)
                      : card.value}
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${card.color} opacity-30`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Summary Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Resumen del Período
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Cobrado este mes</p>
            <p className="text-3xl font-bold text-green-600">
              {formatCurrency(stats.totalCobrado)}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              De {stats.alumnasAlDia + stats.alumnasEnMora} alumnas
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Pendiente de cobro</p>
            <p className="text-3xl font-bold text-yellow-600">
              {formatCurrency(stats.ingresosPendientes)}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.alumnasEnMora} alumnas esperando
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Vencido por cobrar</p>
            <p className="text-3xl font-bold text-red-600">
              {formatCurrency(stats.ingresosVencidos)}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Requiere seguimiento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
