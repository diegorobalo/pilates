import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedAccessToken = localStorage.getItem('accessToken')
        const storedRefreshToken = localStorage.getItem('refreshToken')
        const storedUser = localStorage.getItem('user')

        if (storedAccessToken && storedRefreshToken) {
          setAccessToken(storedAccessToken)
          setRefreshToken(storedRefreshToken)
          if (storedUser) {
            setUser(JSON.parse(storedUser))
          }
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        // Clear invalid data
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const login = useCallback(
    (token, refresh, userData) => {
      return new Promise((resolve, reject) => {
        try {
          setAccessToken(token)
          setRefreshToken(refresh)
          setUser(userData || null)
          setIsAuthenticated(true)

          // Store in localStorage
          localStorage.setItem('accessToken', token)
          localStorage.setItem('refreshToken', refresh)
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData))
          }

          resolve()
        } catch (error) {
          reject(error)
        }
      })
    },
    [],
  )

  const logout = useCallback(() => {
    return new Promise((resolve) => {
      try {
        setUser(null)
        setAccessToken(null)
        setRefreshToken(null)
        setIsAuthenticated(false)

        // Clear localStorage
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')

        resolve()
      } catch (error) {
        console.error('Error during logout:', error)
        resolve()
      }
    })
  }, [])

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      await logout()
      return false
    }

    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      })

      if (!response.ok) {
        await logout()
        return false
      }

      const data = await response.json()
      const newAccessToken = data.accessToken

      setAccessToken(newAccessToken)
      localStorage.setItem('accessToken', newAccessToken)

      return true
    } catch (error) {
      console.error('Error refreshing token:', error)
      await logout()
      return false
    }
  }, [refreshToken, logout])

  const value = {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    loading,
    login,
    logout,
    refreshAccessToken,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
