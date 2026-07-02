import { useState, useEffect } from 'react'
import { Calendar, Download, BarChart3 } from 'lucide-react'

export default function Reports() {
  const [stats, setStats] = useState({
    totalCobrado: 0,
    promedioPorAlumna: 0,
    pagosEsteMes: 0,
    pendientesVencidos: 0,
    metodosDistribucion: {
      EFECTIVO: 0,
      TRANSFERENCIA: 0,
      OTRO: 0,
    },
    estadosAlumnas: {
      AL_DIA: 0,
      VENCIDA: 0,
      PENDIENTE: 0,
    },
    ingresosPorMes: [],
  })
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReportData()
  }, [])

  const fetchReportData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/payments/reports')
      if (!response.ok) throw new Error('Error fetching report data')
      const data = await response.json()
      setStats(data)
    } catch (err) {
      console.error('Error fetching report data:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(value || 0)
  }

  const handleExportCSV = () => {
    const csv = [
      ['Reporte Financiero'],
      ['Generado:', new Date().toLocaleDateString('es-ES')],
      [],
      ['Total Cobrado', formatCurrency(stats.totalCobrado)],
      ['Promedio por Alumna', formatCurrency(stats.promedioPorAlumna)],
      ['Pagos Este Mes', stats.pagosEsteMes],
      ['Pendientes/Vencidos', formatCurrency(stats.pendientesVencidos)],
      [],
      ['Distribución por Método'],
      ['EFECTIVO', stats.metodosDistribucion.EFECTIVO],
      ['TRANSFERENCIA', stats.metodosDistribucion.TRANSFERENCIA],
      ['OTRO', stats.metodosDistribucion.OTRO],
      [],
      ['Estado de Alumnas'],
      ['Al Día', stats.estadosAlumnas.AL_DIA],
      ['Vencida', stats.estadosAlumnas.VENCIDA],
      ['Pendiente', stats.estadosAlumnas.PENDIENTE],
    ]
      .map((row) => row.join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `reporte-financiero-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleExportPDF = () => {
    alert('Exportar a PDF requiere configuración adicional. Por ahora use CSV.')
  }

  const getPaymentMethodColor = (method) => {
    const colors = {
      EFECTIVO: '#10b981',
      TRANSFERENCIA: '#3b82f6',
      OTRO: '#8b5cf6',
    }
    return colors[method] || '#6b7280'
  }

  const getStatusColor = (status) => {
    const colors = {
      AL_DIA: '#10b981',
      VENCIDA: '#ef4444',
      PENDIENTE: '#f59e0b',
    }
    return colors[status] || '#6b7280'
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  const totalMethods =
    stats.metodosDistribucion.EFECTIVO +
    stats.metodosDistribucion.TRANSFERENCIA +
    stats.metodosDistribucion.OTRO || 1

  const totalStatuses =
    stats.estadosAlumnas.AL_DIA +
    stats.estadosAlumnas.VENCIDA +
    stats.estadosAlumnas.PENDIENTE || 1

  return (
    <div className="space-y-6">
      {/* Header with Export Options */}
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reportes Financieros</h2>
          <p className="text-gray-600 text-sm mt-1">
            Análisis completo de ingresos y estado de pagos
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Exportar CSV
          </button>
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Rango de Análisis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Inicio
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Fin
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
          <p className="text-gray-600 text-sm">Total Cobrado</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {formatCurrency(stats.totalCobrado)}
          </p>
          <p className="text-xs text-gray-500 mt-2">Desde el inicio</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-600 text-sm">Promedio por Alumna</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {formatCurrency(stats.promedioPorAlumna)}
          </p>
          <p className="text-xs text-gray-500 mt-2">Ingresos medios</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
          <p className="text-gray-600 text-sm">Pagos Este Mes</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {stats.pagosEsteMes}
          </p>
          <p className="text-xs text-gray-500 mt-2">Transacciones</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
          <p className="text-gray-600 text-sm">Pendientes/Vencidos</p>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {formatCurrency(stats.pendientesVencidos)}
          </p>
          <p className="text-xs text-gray-500 mt-2">Por cobrar</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Methods Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Distribución por Método de Pago
          </h3>
          <div className="space-y-4">
            {['EFECTIVO', 'TRANSFERENCIA', 'OTRO'].map((method) => {
              const count = stats.metodosDistribucion[method] || 0
              const percentage = ((count / totalMethods) * 100).toFixed(1)
              return (
                <div key={method}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {method}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {count} ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: getPaymentMethodColor(method),
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Student Status Donut Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Estado de Alumnas
          </h3>
          <div className="space-y-4">
            {['AL_DIA', 'VENCIDA', 'PENDIENTE'].map((status) => {
              const count = stats.estadosAlumnas[status] || 0
              const percentage = ((count / totalStatuses) * 100).toFixed(1)
              const labelMap = {
                AL_DIA: 'Al Día',
                VENCIDA: 'Vencida',
                PENDIENTE: 'Pendiente',
              }
              return (
                <div key={status}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {labelMap[status]}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {count} ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: getStatusColor(status),
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Monthly Income Table */}
      {stats.ingresosPorMes && stats.ingresosPorMes.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Ingresos por Mes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                    Mes
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">
                    Ingresos
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">
                    Cambio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stats.ingresosPorMes.map((item, idx) => {
                  const previous =
                    idx > 0 ? stats.ingresosPorMes[idx - 1].monto : item.monto
                  const change =
                    ((item.monto - previous) / previous) * 100
                  return (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {item.mes}
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-right text-gray-900">
                        {formatCurrency(item.monto)}
                      </td>
                      <td
                        className={`px-4 py-3 text-sm font-medium text-right ${
                          change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
