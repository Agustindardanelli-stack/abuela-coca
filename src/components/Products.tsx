'use client'

import { useState } from 'react'
import { Star, Heart, ShoppingCart } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: string
}

interface Product {
  id: number
  name: string
  category: string
  description: string
  price: string
  image: string
  rating: number
  popular: boolean
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')

  const categories: Category[] = [
    { id: 'todos', name: 'Todos los productos', icon: '🌾' },
    { id: 'premezclas', name: 'Premezclas', icon: '🥄' },
    { id: 'universal', name: 'Universal', icon: '⭐' },
    { id: 'premium', name: 'Premium', icon: '👑' },
    { id: 'especiales', name: 'Especiales', icon: '✨' }
  ]

  const products: Product[] = [
    {
      id: 1,
      name: 'Premezcla Universal Sin Gluten',
      category: 'premezclas',
      description: 'Mezcla perfecta de harinas sin gluten para todo tipo de preparaciones. Ideal para tortas, panes y galletas.',
      price: '$2.500',
      image: '/api/placeholder/300/300',
      rating: 5,
      popular: true
    },
    {
      id: 2,
      name: 'Premezcla Universal Premium',
      category: 'premezclas',
      description: 'Versión premium de nuestra premezcla, con ingredientes de primera calidad para resultados excepcionales.',
      price: '$3.200',
      image: '/api/placeholder/300/300',
      rating: 5,
      popular: true
    },
    {
      id: 3,
      name: 'Premezcla para Repostería',
      category: 'premezclas',
      description: 'Especialmente formulada para repostería fina. Textura suave y sabor neutro.',
      price: '$2.800',
      image: '/api/placeholder/300/300',
      rating: 5,
      popular: false
    },
    {
      id: 4,
      name: 'Premezcla para Panes',
      category: 'premezclas',
      description: 'Mezcla específica para panes caseros sin gluten. Resultado esponjoso y sabroso.',
      price: '$2.600',
      image: '/api/placeholder/300/300',
      rating: 4,
      popular: false
    },
    {
      id: 5,
      name: 'Premezcla Integral',
      category: 'premezclas',
      description: 'Con fibras y cereales integrales. Ideal para quienes buscan opciones más nutritivas.',
      price: '$3.000',
      image: '/api/placeholder/300/300',
      rating: 5,
      popular: true
    },
    {
      id: 6,
      name: 'Premezcla Dulce',
      category: 'premezclas',
      description: 'Perfecta para postres y preparaciones dulces. Con un toque especial de vainilla.',
      price: '$2.900',
      image: '/api/placeholder/300/300',
      rating: 4,
      popular: false
    }
  ]

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section id="productos" className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            Nuestras
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 font-extrabold">
              Premezclas Sin Gluten
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8 font-medium">
            Premezclas universales de alta calidad, perfectas para todas tus preparaciones. 
            100% libres de gluten y sin lactosa, con el sabor tradicional que buscas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-primary-700 hover:bg-primary-100 shadow-sm hover:shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-200 to-primary-300 overflow-hidden">
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    ⭐ Popular
                  </div>
                )}
                
                {/* Placeholder para imagen */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-100">
                  {/* <div className="text-6xl opacity-50">🌾</div> */}
                </div>
                
                {/* Overlay con botón */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="https://wa.link/zoxx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-800 px-6 py-3 rounded-full font-semibold hover:bg-primary-100 transition-colors inline-flex items-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Pedir Ahora
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <button className="text-primary-400 hover:text-secondary-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-primary-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < product.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-primary-500 ml-2">
                    ({product.rating}.0)
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-800">
                    {product.price}
                  </span>
                  <a 
                    href="https://wa.link/zoxx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                  >
                    <span className="mr-1">💬</span>
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Quieres saber más sobre nuestros productos?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Contáctanos para conocer toda nuestra línea de premezclas y encontrar la perfecta para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-800 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors inline-flex items-center justify-center text-lg"
              >
                <span className="mr-2">💬</span>
                Consultar por WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold transition-colors border border-white/30 inline-flex items-center justify-center text-lg"
              >
                <span className="mr-2">📷</span>
                Ver en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}