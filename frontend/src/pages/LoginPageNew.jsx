import { useState } from 'react'
import { Dumbbell, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../components/Base/Button'
import Input from '../components/Base/Input'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Base/Card'
import { Badge } from '../components/Base/Badge'

export default function LoginPageNew() {
  const [phone, setPhone] = useState('')
  const [step, setStep] = useState('phone') // phone, code, success
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [code, setCode] = useState('')

  const handlePhoneSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simular request
    setTimeout(() => {
      if (phone.length >= 10) {
        setStep('code')
      } else {
        setError('Ingresa un teléfono válido (10+ dígitos)')
      }
      setLoading(false)
    }, 800)
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault()
    if (code.length === 6) {
      setStep('success')
    } else {
      setError('Ingresa un código válido de 6 dígitos')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-3">
              <Dumbbell className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-white">PILATES</h1>
          </div>
        </div>

        {/* Card Principal */}
        <Card className="shadow-2xl animate-in fade-in zoom-in duration-500">
          {step === 'phone' && (
            <>
              <CardHeader>
                <CardTitle className="text-center">Bienvenida</CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  Ingresa tu número de teléfono para continuar
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handlePhoneSubmit} className="space-y-4">
                  <Input
                    label="Número de Teléfono"
                    placeholder="+54 9 11 2345 6789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={error ? error : undefined}
                    type="tel"
                  />

                  {error && (
                    <div className="flex gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full"
                  >
                    Continuar
                  </Button>

                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    ¿Primera vez? Ingresá tu número y la profe va a habilitar tu acceso.
                  </p>
                </form>
              </CardContent>
            </>
          )}

          {step === 'code' && (
            <>
              <CardHeader>
                <CardTitle className="text-center">Verificar Código</CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  Ingresa el código que recibiste por WhatsApp
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <Input
                    label="Código de 6 dígitos"
                    placeholder="000000"
                    value={code}
                    onChange={(e) => setCode(e.target.value.slice(0, 6))}
                    maxLength="6"
                    type="text"
                  />

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Verificar
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="w-full text-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
                  >
                    ← Volver atrás
                  </button>
                </form>
              </CardContent>
            </>
          )}

          {step === 'success' && (
            <>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <CardTitle className="text-center">¡Acceso Permitido!</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  Tu cuenta ha sido verificada correctamente. Redireccionando...
                </p>
                <div className="flex justify-center">
                  <Badge variant="success">Autenticado</Badge>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-white/80">
            🔒 Tu información está segura y encriptada
          </p>
        </div>
      </div>
    </div>
  )
}
