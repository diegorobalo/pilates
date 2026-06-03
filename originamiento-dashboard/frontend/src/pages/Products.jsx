import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

function Products({ onLogout }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
        config
      )

      setProducts(response.data.data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Filter products locally based on search
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
    setProducts(filtered)
  }

  if (loading) return <Layout onLogout={onLogout}><div className="p-8">Cargando...</div></Layout>

  return (
    <Layout onLogout={onLogout}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Productos</h1>
          
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Buscar
            </button>
            <button
              type="button"
              onClick={fetchProducts}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Actualizar
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Descripción</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Precio</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No hay productos disponibles
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">{product.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.description}</td>
                    <td className="px-6 py-4 text-sm font-semibold">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{product.category}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Products
