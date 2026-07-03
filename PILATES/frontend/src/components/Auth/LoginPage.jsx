import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dumbbell, AlertCircle, Loader, ShieldCheck, KeyRound, ArrowLeft } from 'lucide-react'
import PhoneInput from './PhoneInput'
import CodeInput from './CodeInput'
import { useAuth } from '../../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading: authLoading } = useAuth()

  const [step, setStep] = useState('phone') // 'phone' or 'code'
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeId, setCodeId] = useState('')
  const [devCode, setDevCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [requestResendCountdown, setRequestResendCountdown] = useState(0)

  // Admin (master access)
  const [adminUsername, setAdminUsername] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [resetToken, setResetToken] = useState('')
  const [resetPassword, setResetPassword] = useState('')
  const [info, setInfo] = useState('')
  const secretTaps = useRef(0)
  const secretTimer = useRef(null)

  // Handle resend code countdown
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo procesar la solicitud')
      }

      if (data.status === 'active') {
        // Approved user: ask for the code the studio sent by WhatsApp
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code, codeId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al verificar código')
      }

      // Login with the auth context
      await login(data.accessToken, data.refreshToken, data.user)

      // Route by role: alumnas -> portal; profesora/dueña/admin -> dashboard
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

  const handleResendCode = async () => {
    if (requestResendCountdown > 0) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/request-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

  // Secret gesture: tap the dumbbell 5 times (within 2s) to reveal admin login
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
      const res = await fetch('/api/admin/login', {
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
    <div className="min-h-screen bg-gradient-to-br from-primary via-purple-600 to-primary-dark flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              onClick={handleSecretTap}
              aria-hidden="true"
              className="cursor-default select-none"
            >
              <Dumbbell className="w-10 h-10 text-white cursor-default select-none" />
            </span>
            <h1 className="text-4xl font-bold text-white">PILATES</h1>
          </div>
          <p className="text-purple-100 text-lg font-medium">
            Sistema de Reserva
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {step === 'phone' ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Bienvenido
              </h2>
              <p className="text-gray-600 mb-6">
                Ingresa tu número de teléfono para continuar
              </p>

              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <PhoneInput
                  onPhoneChange={setPhone}
                  disabled={loading || authLoading}
                  error={error && step === 'phone' ? error : null}
                />

                <button
                  type="submit"
                  disabled={loading || authLoading || phone.replace(/\D/g, '').length < 10}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading || authLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    'Continuar'
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  ¿Primera vez? Ingresá tu número y la profe va a habilitar tu acceso.
                </p>
              </div>
            </>
          ) : step === 'code' ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Verifica tu Código
              </h2>
              <p className="text-gray-600 mb-2">
                Ingresá el código que te enviaron por WhatsApp al número:
              </p>
              <p className="text-primary font-bold text-lg mb-6">{phone}</p>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <CodeInput
                  onCodeChange={setCode}
                  disabled={loading || authLoading}
                  error={error && step === 'code' ? error : null}
                />

                <button
                  type="submit"
                  disabled={loading || authLoading || code.length !== 6}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading || authLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Verificando...
                    </>
                  ) : (
                    'Verificar Código'
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <p className="text-center text-sm text-gray-500">
                  ¿No te llegó? Pedile a la profe que te reenvíe el código por WhatsApp.
                </p>
                <button
                  onClick={handleBackToPhone}
                  disabled={loading || authLoading}
                  className="w-full text-gray-600 font-semibold hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed py-2"
                >
                  Cambiar Número
                </button>
              </div>
            </>
          ) : (
            <>
              {step === 'admin' && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">Acceso Administrador</h2>
                  </div>
                  <p className="text-gray-600 mb-6">Ingresá con usuario y contraseña</p>

                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <input
                      type="text"
                      value={adminUsername}
                      onChange={(e) => setAdminUsername(e.target.value)}
                      placeholder="Usuario"
                      autoComplete="username"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Contraseña"
                      autoComplete="current-password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                    <button
                      type="submit"
                      disabled={loading || !adminUsername || !adminPassword}
                      className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Ingresando...
                        </>
                      ) : (
                        'Ingresar'
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                    <button
                      onClick={() => { setStep('admin-forgot'); setError(''); setInfo('') }}
                      className="w-full text-primary font-semibold hover:text-primary-dark py-2 flex items-center justify-center gap-2"
                    >
                      <KeyRound className="w-4 h-4" />
                      ¿Olvidaste tu contraseña?
                    </button>
                    <button
                      onClick={() => { setStep('phone'); setError(''); setInfo('') }}
                      className="w-full text-gray-600 font-semibold hover:text-gray-900 py-2 flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Volver
                    </button>
                  </div>
                </>
              )}

              {step === 'admin-forgot' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Recuperar contraseña</h2>
                  <p className="text-gray-600 mb-6">
                    Ingresá el email de recuperación y te enviaremos un código.
                  </p>
                  <form onSubmit={handleAdminForgot} className="space-y-4">
                    <input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="Email de recuperación"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                    <button
                      type="submit"
                      disabled={loading || !adminEmail}
                      className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3"
                    >
                      {loading ? 'Enviando...' : 'Enviar código'}
                    </button>
                  </form>
                  <button
                    onClick={() => { setStep('admin'); setError(''); setInfo('') }}
                    className="w-full mt-4 text-gray-600 font-semibold hover:text-gray-900 py-2"
                  >
                    Volver
                  </button>
                </>
              )}

              {step === 'admin-reset' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Nueva contraseña</h2>
                  <p className="text-gray-600 mb-6">
                    Pegá el código que te llegó por email y elegí una contraseña nueva.
                  </p>
                  <form onSubmit={handleAdminReset} className="space-y-4">
                    <input
                      type="text"
                      value={resetToken}
                      onChange={(e) => setResetToken(e.target.value)}
                      placeholder="Código de recuperación"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                    <input
                      type="password"
                      value={resetPassword}
                      onChange={(e) => setResetPassword(e.target.value)}
                      placeholder="Nueva contraseña"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                    <button
                      type="submit"
                      disabled={loading || !resetToken || !resetPassword}
                      className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3"
                    >
                      {loading ? 'Guardando...' : 'Cambiar contraseña'}
                    </button>
                  </form>
                  <button
                    onClick={() => { setStep('admin'); setError(''); setInfo('') }}
                    className="w-full mt-4 text-gray-600 font-semibold hover:text-gray-900 py-2"
                  >
                    Volver
                  </button>
                </>
              )}

              {step === 'pending-info' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitud enviada</h2>
                  <p className="text-gray-600 mb-6">
                    Tu número quedó registrado. La profe va a revisar tu solicitud y te va a
                    enviar un <span className="font-semibold">código por WhatsApp</span> para que
                    puedas ingresar.
                  </p>
                  <button
                    onClick={() => { setStep('phone'); setError(''); setInfo('') }}
                    className="w-full btn btn-primary font-bold py-3"
                  >
                    Entendido
                  </button>
                </>
              )}
            </>
          )}

          {/* Info / success message */}
          {info && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-medium">{info}</p>
            </div>
          )}

          {/* General error (API/network) */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
              <p className="text-sm text-danger font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Tu información está segura y encriptada
        </p>
      </div>
    </div>
  )
}
