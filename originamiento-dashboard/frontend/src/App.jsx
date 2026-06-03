import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Partners from './pages/Partners'
import Orders from './pages/Orders'
import AIAgent from './pages/AIAgent'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true)
    }
  }, [token])

  const handleLogin = (accessToken) => {
    localStorage.setItem('token', accessToken)
    setToken(accessToken)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
        />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/products" element={<Products onLogout={handleLogout} />} />
            <Route path="/partners" element={<Partners onLogout={handleLogout} />} />
            <Route path="/orders" element={<Orders onLogout={handleLogout} />} />
            <Route path="/ai-agent" element={<AIAgent onLogout={handleLogout} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  )
}

export default App
