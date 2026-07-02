import { Dumbbell } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Dumbbell className="w-12 h-12 text-white" />
          <h1 className="text-6xl font-bold text-white">PILATES</h1>
        </div>
        <p className="text-2xl text-gray-100">Sistema de Reserva de Camas</p>
      </div>
    </div>
  )
}
