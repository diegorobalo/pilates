import { useState, useRef, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { Send, RefreshCw } from 'lucide-react'

function AIAgent({ onLogout }) {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '¡Hola! Soy tu asistente de IA para Originamiento. Puedo ayudarte a analizar productos, pedidos y transportistas. ¿Qué quieres saber?',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { type: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/ask`,
        { question: input },
        config
      )

      const botMessage = {
        type: 'bot',
        content: response.data.answer,
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        type: 'bot',
        content: 'Disculpa, hubo un error al procesar tu pregunta. Intenta de nuevo.',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const resetConversation = () => {
    setMessages([
      {
        type: 'bot',
        content: '¡Hola! Soy tu asistente de IA para Originamiento. Puedo ayudarte a analizar productos, pedidos y transportistas. ¿Qué quieres saber?',
      },
    ])
  }

  return (
    <Layout onLogout={onLogout}>
      <div className="flex flex-col h-[calc(100vh-150px)] max-w-2xl mx-auto p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Agente de IA</h1>
          <button
            onClick={resetConversation}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <RefreshCw size={18} />
            Nueva Conversación
          </button>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 overflow-y-auto mb-4 border border-gray-200">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                <p className="text-sm">Pensando...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
          >
            <Send size={18} />
            Enviar
          </button>
        </form>

        {/* Ejemplos de preguntas */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
          <p className="font-semibold mb-2">Ejemplos de preguntas que puedo responder:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>¿Cuántos productos tengo?</li>
            <li>¿Cuántos transportistas hay?</li>
            <li>¿Cuántas órdenes tengo?</li>
            <li>¿Cuántos pedidos están pendientes?</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AIAgent
