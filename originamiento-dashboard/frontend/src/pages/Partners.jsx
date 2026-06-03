import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

function Partners({ onLogout }) {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPartners()
  }, [])

  const fetchPartners = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/partners`,
        config
      )

      setPartners(response.data.data || [])
    } catch (error) {
      console.error('Error fetching partners:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Layout onLogout={onLogout}><div className="p-8">Cargando...</div></Layout>

  return (
    <Layout onLogout={onLogout}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Transportistas</h1>
          <button
            onClick={fetchPartners}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Actualizar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              No hay transportistas disponibles
            </div>
          ) : (
            partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{partner.type}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Ciudad:</span>
                    <span className="ml-2 font-medium">{partner.city}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Teléfono:</span>
                    <span className="ml-2 font-medium">{partner.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2 font-medium">{partner.email}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-500">Calificación:</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-bold">{partner.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Partners
