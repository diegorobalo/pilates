import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

function Orders({ onLogout }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        config
      )

      setOrders(response.data.data || [])
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-100 text-green-800'
      case 'En tránsito':
        return 'bg-blue-100 text-blue-800'
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(o => o.status === filterStatus)

  if (loading) return <Layout onLogout={onLogout}><div className="p-8">Cargando...</div></Layout>

  return (
    <Layout onLogout={onLogout}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Pedidos</h1>
          
          <div className="flex gap-4 mb-6">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">Todos los pedidos</option>
              <option value="Completado">Completados</option>
              <option value="En tránsito">En tránsito</option>
              <option value="Pendiente">Pendientes</option>
            </select>
            
            <button
              onClick={fetchOrders}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Actualizar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Número</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cliente</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Transportista</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Fecha</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Artículos</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                    No hay pedidos disponibles
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{order.number}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm font-semibold">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.carrier}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                    <td className="px-6 py-4 text-sm text-center">{order.items}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Orders
