import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

function Dashboard({ onLogout }) {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalPartners: 0,
    pendingOrders: 0,
    totalSales: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }

      // Fetch products
      const productsRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products?limit=1`,
        config
      )

      // Fetch orders summary
      const ordersRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/summary/metrics`,
        config
      )

      // Fetch partners
      const partnersRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/partners?limit=1`,
        config
      )

      setStats({
        totalProducts: productsRes.data.count || 0,
        totalPartners: partnersRes.data.count || 0,
        pendingOrders: ordersRes.data.pending_sales || 0,
        totalSales: ordersRes.data.total_sales_amount || 0,
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout onLogout={onLogout}>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

        {loading ? (
          <p className="text-center text-gray-600">Cargando datos...</p>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="stat-card">
                <h3>Total de Productos</h3>
                <div className="value">{stats.totalProducts}</div>
              </div>
              <div className="stat-card">
                <h3>Transportistas</h3>
                <div className="value">{stats.totalPartners}</div>
              </div>
              <div className="stat-card">
                <h3>Pedidos Pendientes</h3>
                <div className="value">{stats.pendingOrders}</div>
              </div>
              <div className="stat-card">
                <h3>Ventas Totales</h3>
                <div className="value">${stats.totalSales.toFixed(0)}</div>
              </div>
            </div>

            {/* Welcome Section */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Bienvenido al Dashboard
              </h2>
              <p className="text-gray-600 mb-4">
                Este dashboard te permite monitorear en tiempo real:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Información de productos y niveles de stock</li>
                <li>Gestión de transportistas y proveedores</li>
                <li>Seguimiento de pedidos de venta y compra</li>
                <li>Análisis inteligente con nuestro agente de IA</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="card mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Acciones Rápidas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button
                  onClick={fetchDashboardData}
                  className="btn btn-primary"
                >
                  🔄 Actualizar Datos
                </button>
                <a href="/products" className="btn btn-primary" style={{textDecoration: 'none'}}>
                  📦 Ver Productos
                </a>
                <a href="/orders" className="btn btn-primary" style={{textDecoration: 'none'}}>
                  📋 Ver Pedidos
                </a>
                <a href="/ai-agent" className="btn btn-primary" style={{textDecoration: 'none'}}>
                  🤖 Ir al Agente IA
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Dashboard
