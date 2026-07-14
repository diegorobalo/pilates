import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ExpenseBreakdown({ mes }) {
  const [expenseData, setExpenseData] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [categoryDetails, setCategoryDetails] = useState({})
  const [loading, setLoading] = useState(true)

  // Color array for progress bars (cycling through 6 colors)
  const barColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-red-500',
  ]

  useEffect(() => {
    fetchExpenseData()
  }, [mes])

  const fetchExpenseData = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/finances/gastos-por-categoria?mes_referencia=${mes}`
      )
      if (!response.ok) throw new Error('Error fetching expense data')
      const data = await response.json()
      setExpenseData(data)
      setCategoryDetails({}) // Reset details when month changes
    } catch (err) {
      console.error('Error fetching expense data:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategoryDetails = async (categoria) => {
    // Return cached data if already fetched
    if (categoryDetails[categoria]) {
      return categoryDetails[categoria]
    }

    try {
      const response = await fetch(
        `/api/finances/transacciones?mes_referencia=${mes}&categoria=${categoria}&tipo=GASTO`
      )
      if (!response.ok) throw new Error('Error fetching category details')
      const data = await response.json()
      setCategoryDetails((prev) => ({
        ...prev,
        [categoria]: data,
      }))
      return data
    } catch (err) {
      console.error(`Error fetching details for ${categoria}:`, err)
      return null
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS',
    }).format(value || 0)
  }

  const handleRowClick = async (categoria) => {
    if (expandedCategory === categoria) {
      setExpandedCategory(null)
    } else {
      await fetchCategoryDetails(categoria)
      setExpandedCategory(categoria)
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  if (!expenseData || !expenseData.categorias || expenseData.categorias.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Desglose de Gastos por Categoría
        </h2>
        <p className="text-gray-500">No hay datos disponibles para este mes.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Desglose de Gastos por Categoría
      </h2>

      {/* Visual Bar Chart */}
      <div className="space-y-4">
        {expenseData.categorias.map((cat, idx) => (
          <div key={cat.categoria}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {cat.categoria}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {formatCurrency(cat.monto)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-4 rounded-full transition-all ${
                  barColors[idx % barColors.length]
                }`}
                style={{ width: `${cat.porcentaje}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{cat.porcentaje}%</p>
          </div>
        ))}
      </div>

      {/* Table with Expandable Details */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                %
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {expenseData.categorias.map((cat) => {
              const isExpanded = expandedCategory === cat.categoria
              const details = categoryDetails[cat.categoria]
              return (
                <tbody key={cat.categoria}>
                  <tr
                    onClick={() => handleRowClick(cat.categoria)}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center gap-2">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                        {cat.categoria}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-right text-gray-900">
                      {formatCurrency(cat.monto)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right text-gray-700">
                      {cat.porcentaje}%
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {cat.cantidad || 0}
                    </td>
                  </tr>
                  {isExpanded && details && (
                    <tr className="bg-gray-50 hover:bg-gray-50">
                      <td colSpan="4" className="px-6 py-4">
                        <div className="text-sm space-y-3">
                          <p className="font-medium text-gray-700 mb-3">
                            Transacciones de {cat.categoria}
                          </p>
                          {details && details.length > 0 ? (
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                              {details.map((transaccion, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between items-center py-2 px-3 bg-white rounded border border-gray-200"
                                >
                                  <div className="flex-1">
                                    <p className="text-gray-700">
                                      {transaccion.descripcion || 'Sin descripción'}
                                    </p>
                                    {transaccion.fecha && (
                                      <p className="text-xs text-gray-500">
                                        {new Date(
                                          `${transaccion.fecha}T12:00:00`
                                        ).toLocaleDateString('es-AR')}
                                      </p>
                                    )}
                                  </div>
                                  <span className="font-medium text-gray-900 ml-4">
                                    {formatCurrency(transaccion.monto)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-500">
                              No hay transacciones para esta categoría.
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Total Row */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold text-lg">Total Gastos</span>
          <span className="text-gray-900 font-bold text-lg">
            {formatCurrency(expenseData.total)}
          </span>
        </div>
      </div>
    </div>
  )
}
