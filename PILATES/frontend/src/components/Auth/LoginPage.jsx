import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dumbbell, AlertCircle, Loader } from 'lucide-react'
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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [requestResendCountdown, setRequestResendCountdown] = useState(0)

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
      const response = await fetch('/api/auth/request-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al solicitar código')
      }

      setCodeId(data.codeId)
      setStep('code')
      setRequestResendCountdown(60) // 60 second cooldown for resend
    } catch (err) {
      setError(err.message || 'Error al solicitar el código. Intenta de nuevo.')
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

      // Redirect to dashboard
      navigate('/dashboard', { replace: true })
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
      setCode('')
      setRequestResendCountdown(60)
    } catch (err) {
      setError(err.message || 'Error al resolicitar el código.')
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
            <Dumbbell className="w-10 h-10 text-white" />
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
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Código'
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  ¿Primera vez aquí?{' '}
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Crear cuenta
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Verifica tu Código
              </h2>
              <p className="text-gray-600 mb-2">
                Te enviamos un código a:
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
                <button
                  onClick={handleResendCode}
                  disabled={requestResendCountdown > 0 || loading || authLoading}
                  className="w-full text-primary font-semibold hover:text-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed py-2"
                >
                  {requestResendCountdown > 0
                    ? `Reenviar en ${requestResendCountdown}s`
                    : 'Reenviar Código'}
                </button>

                <button
                  onClick={handleBackToPhone}
                  disabled={loading || authLoading}
                  className="w-full text-gray-600 font-semibold hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed py-2"
                >
                  Cambiar Número
                </button>
              </div>
            </>
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
