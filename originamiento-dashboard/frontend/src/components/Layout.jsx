import { Link, useLocation } from 'react-router-dom'
import { LogOut, Menu } from 'lucide-react'
import { useState } from 'react'

function Layout({ children, onLogout }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const isActive = (path) => location.pathname === path

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${!sidebarOpen ? 'hidden' : ''} md:block`}>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Originamiento</h2>
          <p className="text-sm text-gray-400">Dashboard</p>
        </div>

        <nav>
          <ul className="nav-menu">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`nav-link ${isActive('/products') ? 'active' : ''}`}
              >
                📦 Productos
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className={`nav-link ${isActive('/partners') ? 'active' : ''}`}
              >
                👥 Transportistas
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={`nav-link ${isActive('/orders') ? 'active' : ''}`}
              >
                📋 Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="/ai-agent"
                className={`nav-link ${isActive('/ai-agent') ? 'active' : ''}`}
              >
                🤖 Agente IA
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Argensun Foods</h1>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('es-AR')}
          </div>
        </div>

        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
