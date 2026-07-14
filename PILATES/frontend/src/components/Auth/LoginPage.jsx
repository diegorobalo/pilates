import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dumbbell, AlertCircle, Loader, ShieldCheck, KeyRound, ArrowLeft, CheckCircle } from 'lucide-react'
import PhoneInput from './PhoneInput'
import CodeInput from './CodeInput'
import AlumnaOnboarding from '../Onboarding/AlumnaOnboarding'
import Button from '../Base/Button'
import Input from '../Base/Input'
import { Card, CardHeader, CardTitle, CardContent } from '../Base/Card'
import { Badge } from '../Base/Badge'
import { useAuth } from '../../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading: authLoading } = useAuth()

  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeId, setCodeId] = useState('')
  const [devCode, setDevCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [requestResendCountdown, setRequestResendCountdown] = useState(0)
  const [onboardingUserId, setOnboardingUserId] = useState(null)

  const [adminUsername, setAdminUsername] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [resetToken, setResetToken] = useState('')
  const [resetPassword, setResetPassword] = useState('')
  const [info, setInfo] = useState('')
  const [greetName, setGreetName] = useState('')
  const [adminTab, setAdminTab] = useState('admin')
  const secretTaps = useRef(0)
  const secretTimer = useRef(null)

  useEffect(() => {
    if (requestResendCountdown <= 0) return
    const timer = setInterval(() => {
      setRequestResendCountdown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [requestResendCountdown])

  const handlePhoneSubmit = async (e) => {
    e.preventDefault()
    if (!phone) {
      setError('Por favor ingresa un número de teléfono válido')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo procesar la solicitud')
      }

      if (data.status === 'active') {
        setGreetName(data.nombre || '')
        setStep('code')
      } else if (data.status === 'pending' || data.status === 'pending_created') {
        setStep('pending-info')
      } else if (data.status === 'inactive') {
        setError('Tu acceso está desactivado. Contactá a la profe.')
      }
    } catch (err) {
      setError(err.message || 'Error al procesar la solicitud. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleCodeSubmit = async (e) => {
    e.preventDefault()
    if (!code || code.length !== 6) {
      setError('Por favor ingresa un código válido de 6 dígitos')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code, codeId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al verificar código')
      }

      if (data.user?.tipo === 'ALUMNA' && !data.user?.datos_completados) {
        setOnboardingUserId(data.user.id)
        setStep('onboarding')
        localStorage.setItem('tempAccessToken', data.accessToken)
        localStorage.setItem('tempRefreshToken', data.refreshToken)
        return
      }

      await login(data.accessToken, data.refreshToken, data.user)
      const tipo = data.user?.tipo
      navigate(tipo === 'ALUMNA' ? '/alumna' : '/instructor', { replace: true })
    } catch (err) {
      setError(err.message || 'Código incorrecto. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleBackToPhone = () => {
    setStep('phone')
    setCode('')
    setCodeId('')
    setError('')
  }

  const handleOnboardingComplete = async (updatedUser) => {
    try {
      const tempToken = localStorage.getItem('tempAccessToken')
      const tempRefresh = localStorage.getItem('tempRefreshToken')

      localStorage.removeItem('tempAccessToken')
      localStorage.removeItem('tempRefreshToken')

      await login(tempToken, tempRefresh, updatedUser)
      navigate('/alumna', { replace: true })
    } catch (err) {
      setError('Error completando el perfil. Intenta de nuevo.')
    }
  }

  const handleResendCode = async () => {
    if (requestResendCountdown > 0) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/request-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al resolicitar código')
      }

      setCodeId(data.codeId)
      setDevCode(data.code || '')
      setCode('')
      setRequestResendCountdown(60)
    } catch (err) {
      setError(err.message || 'Error al resolicitar el código.')
    } finally {
      setLoading(false)
    }
  }

  const handleSecretTap = () => {
    secretTaps.current += 1
    if (secretTimer.current) clearTimeout(secretTimer.current)
    secretTimer.current = setTimeout(() => {
      secretTaps.current = 0
    }, 2000)
    if (secretTaps.current >= 5) {
      secretTaps.current = 0
      setError('')
      setInfo('')
      setStep('admin')
    }
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setInfo('')
    try {
      const endpoint = adminTab === 'dueña' ? '/api/auth/login-owner' : '/api/admin/login'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: adminUsername, password: adminPassword }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Credenciales inválidas')
      await login(data.accessToken, data.refreshToken, data.user)
      navigate('/instructor')
    } catch (err) {
      setError(err.message || 'No se pudo iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  const handleAdminForgot = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setInfo('')
    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminEmail }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Error')
      setInfo(data.message)
      setStep('admin-reset')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdminReset = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setInfo('')
    try {
      const res = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: resetToken, newPassword: resetPassword }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Error')
      setInfo('Contraseña actualizada. Ingresá con tu nueva contraseña.')
      setResetToken('')
      setResetPassword('')
      setStep('admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 animate-slide-in-down">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-3 hover:scale-110 transition-transform duration-300">
              <Dumbbell
                className="w-8 h-8 text-blue-600 cursor-pointer"
                onClick={handleSecretTap}
              />
            </div>
            <h1 className="text-3xl font-bold text-white">PILATES</h1>
          </div>
        </div>

        {/* Card */}
        <Card className="shadow-2xl animate-in fade-in zoom-in duration-500">
          {step === 'phone' && (
            <div className="animate-fade-in">
              <CardHeader>
                <CardTitle>Bienvenida</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Ingresa tu número de teléfono para continuar
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handlePhoneSubmit} className="space-y-4">
                  <PhoneInput
                    onPhoneChange={setPhone}
                    disabled={loading || authLoading}
                    error={error && step === 'phone' ? error : null}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading || authLoading}
                    disabled={loading || authLoading || phone.replace(/\D/g, '').length < 10}
                    className="w-full"
                  >
                    Continuar
                  </Button>
                </form>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                  ¿Primera vez? Ingresá tu número y la profe va a habilitar tu acceso.
                </p>
              </CardContent>
            </div>
          )}

          {step === 'code' && (
            <div className="animate-fade-in">
              <CardHeader>
                <CardTitle>
                  {greetName ? `¡Hola, ${greetName}!` : 'Verificar Código'}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Ingresá el código que te enviaron por WhatsApp
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <CodeInput
                    onCodeChange={setCode}
                    disabled={loading || authLoading}
                    error={error && step === 'code' ? error : null}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading || authLoading}
                    disabled={loading || authLoading || code.length !== 6}
                    className="w-full"
                  >
                    Verificar
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToPhone}
                    disabled={loading || authLoading}
                    className="w-full"
                  >
                    ← Cambiar Número
                  </Button>
                </div>
              </CardContent>
            </div>
          )}

          {step === 'admin' && (
            <div className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <CardTitle>Acceso Privado</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex gap-2 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setAdminTab('admin')}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-all duration-300 ${
                      adminTab === 'admin'
                        ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab('dueña')}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-all duration-300 ${
                      adminTab === 'dueña'
                        ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    Propietaria
                  </button>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <Input
                    label="Usuario"
                    type="text"
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="tu_usuario"
                    autoComplete="username"
                  />
                  <Input
                    label="Contraseña"
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    disabled={loading || !adminUsername || !adminPassword}
                    className="w-full"
                  >
                    Ingresar
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setStep('admin-forgot'); setError(''); setInfo('') }}
                    className="w-full"
                  >
                    <KeyRound className="w-4 h-4" />
                    ¿Olvidaste tu contraseña?
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setStep('phone'); setError(''); setInfo('') }}
                    className="w-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                  </Button>
                </div>
              </CardContent>
            </div>
          )}

          {step === 'admin-forgot' && (
            <div className="animate-fade-in">
              <CardHeader>
                <CardTitle>Recuperar Contraseña</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Ingresá tu email y te enviaremos un código
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleAdminForgot} className="space-y-4">
                  <Input
                    label="Email de Recuperación"
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="tu@email.com"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    disabled={loading || !adminEmail}
                    className="w-full"
                  >
                    Enviar Código
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setStep('admin'); setError(''); setInfo('') }}
                  className="w-full mt-4"
                >
                  Volver
                </Button>
              </CardContent>
            </div>
          )}

          {step === 'admin-reset' && (
            <div className="animate-fade-in">
              <CardHeader>
                <CardTitle>Nueva Contraseña</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Ingresá el código y tu nueva contraseña
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleAdminReset} className="space-y-4">
                  <Input
                    label="Código de Recuperación"
                    type="text"
                    value={resetToken}
                    onChange={(e) => setResetToken(e.target.value)}
                    placeholder="Código..."
                  />
                  <Input
                    label="Nueva Contraseña"
                    type="password"
                    value={resetPassword}
                    onChange={(e) => setResetPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    disabled={loading || !resetToken || !resetPassword}
                    className="w-full"
                  >
                    Cambiar Contraseña
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setStep('admin'); setError(''); setInfo('') }}
                  className="w-full mt-4"
                >
                  Volver
                </Button>
              </CardContent>
            </div>
          )}

          {step === 'pending-info' && (
            <div className="animate-fade-in text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4">
                    <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Solicitud Enviada
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Tu número quedó registrado. La profe va a revisar tu solicitud y te va a enviar un código por WhatsApp.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => { setStep('phone'); setError(''); setInfo('') }}
                  className="w-full"
                >
                  Entendido
                </Button>
              </CardContent>
            </div>
          )}

          {/* Info message */}
          {info && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">{info}</p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
            </div>
          )}
        </Card>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-6">
          🔒 Tu información está segura y encriptada
        </p>
      </div>

      {/* Onboarding Modal */}
      {step === 'onboarding' && onboardingUserId && (
        <AlumnaOnboarding userId={onboardingUserId} onComplete={handleOnboardingComplete} />
      )}
    </div>
  )
}
