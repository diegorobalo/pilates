import { useState } from 'react'
import Button from '../components/Base/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Base/Card'
import { Badge } from '../components/Base/Badge'
import Input from '../components/Base/Input'
import { CheckCircle, AlertCircle, Info, Zap } from 'lucide-react'

export default function DesignSystem() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  🎨 PILATES Design System
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Componentes reutilizables, colores, tipografía y estilos
                </p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Botones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardTitle className="text-lg mb-4">Variantes</CardTitle>
                <div className="space-y-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Tamaños</CardTitle>
                <div className="space-y-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Con iconos</CardTitle>
                <div className="space-y-3">
                  <Button variant="primary">
                    <CheckCircle className="w-5 h-5" />
                    Confirmar
                  </Button>
                  <Button variant="danger">
                    <AlertCircle className="w-5 h-5" />
                    Cancelar
                  </Button>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Estados</CardTitle>
                <div className="space-y-3">
                  <Button loading>Cargando...</Button>
                  <Button disabled>Deshabilitado</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tarjeta Simple</CardTitle>
                  <CardDescription>Con header y contenido</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Este es un ejemplo de tarjeta con estructura limpia y profesional.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tarjeta con Footer</CardTitle>
                  <CardDescription>Con acciones al pie</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Perfecto para formularios o confirmaciones.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="secondary">Cancelar</Button>
                  <Button size="sm">Guardar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Badges</h2>
            <Card>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primario</Badge>
                <Badge variant="success">Éxito</Badge>
                <Badge variant="danger">Peligro</Badge>
                <Badge variant="warning">Advertencia</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
            </Card>
          </div>

          {/* Inputs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Inputs</h2>
            <Card>
              <CardContent className="space-y-6">
                <Input label="Email" placeholder="tu@email.com" type="email" />
                <Input label="Teléfono" placeholder="+54 9 11 2345 6789" />
                <Input
                  label="Con error"
                  error="Este campo es requerido"
                  placeholder="Completa este campo"
                />
                <Input
                  label="Con ayuda"
                  helperText="Mínimo 8 caracteres"
                  placeholder="Contraseña"
                  type="password"
                />
              </CardContent>
            </Card>
          </div>

          {/* Colores */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Paleta de Colores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardTitle className="text-lg mb-4">Primario (Azul)</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    #5a7cff
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Principal, botones, acentos
                  </p>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Secundario (Púrpura)</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    #a855f7
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Highlights, gradientes
                  </p>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Éxito (Verde)</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                    #22c55e
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Estados positivos
                  </p>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Peligro (Rojo)</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                    #ef4444
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Errores, advertencias
                  </p>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Advertencia (Amarillo)</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
                    #f59e0b
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Atención requerida
                  </p>
                </div>
              </Card>

              <Card>
                <CardTitle className="text-lg mb-4">Gradiente</CardTitle>
                <div className="space-y-2">
                  <div className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    Premium
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Elemento destacado
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Info */}
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Design System Activo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Este design system está listo para ser usado en toda la app.
                  Usa los componentes Base/ y la paleta de colores definida en theme.js para mantener consistencia visual.
                  Dark mode está totalmente implementado con Tailwind dark:.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
