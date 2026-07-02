import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './components/Auth/LoginPage'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import AlumnaPortal from './pages/AlumnaPortal'
import InstructorDashboard from './pages/InstructorDashboard'
import ClassAttendance from './pages/ClassAttendance'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/alumna"
            element={
              <ProtectedRoute>
                <AlumnaPortal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute>
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/class-attendance/:scheduleId"
            element={
              <ProtectedRoute>
                <ClassAttendance />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/alumna" replace />} />
          <Route path="*" element={<Navigate to="/alumna" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
