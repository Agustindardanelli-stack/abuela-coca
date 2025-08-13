'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  product: string
  avatar: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      location: "Río Cuarto",
      rating: 5,
      text: "Soy celíaca desde hace 10 años y nunca había probado productos tan deliciosos. Las tortas de Abuela Coca son increíbles, mi familia no nota la diferencia. ¡Gracias por devolverme el placer de comer dulces!",
      product: "Torta de Chocolate",
      avatar: "👩‍🦰"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "Villa María",
      rating: 5,
      text: "Tengo intolerancia a la lactosa y los productos de Abuela Coca me han cambiado la vida. El sabor es exactamente como lo hacía mi abuela. Recomiendo especialmente las galletas de avena.",
      product: "Galletas de Avena",
      avatar: "👨‍🦲"
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Córdoba Capital",
      rating: 5,
      text: "Compro para mi negocio y mis clientes están encantados. La calidad es excelente y el precio muy justo. Abuela Coca se ha vuelto mi proveedor de confianza para productos sin TACC.",
      product: "Venta Mayorista",
      avatar: "👩‍💼"
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "San Francisco",
      rating: 5,
      text: "Mi hija es celíaca y desde que descubrimos Abuela Coca, las fiestas de cumpleaños son especiales otra vez. Las tortas son hermosas y deliciosas. ¡Muchas gracias!",
      product: "Tortas Personalizadas",
      avatar: "👨‍👧"
    },
    {
      id: 5,
      name: "Laura Fernández",
      location: "Río Cuarto",
      rating: 5,
      text: "Los brownies son mi debilidad y los de Abuela Coca son perfectos. Húmedos, con el punto exacto de chocolate. Además, el trato siempre es muy amable y profesional.",
      product: "Brownie de Almendras",
      avatar: "👩‍🎓"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            Lo que dicen
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Nuestros Clientes
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Más de 1676 familias confían en nosotros. Lee las experiencias reales 
            de quienes ya disfrutan de nuestros productos sin gluten y sin lactosa.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-primary-600 to-primary-400 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-white/50 mb-6" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <p className="text-xl lg:text-2xl leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary-100">{testimonials[currentIndex].location}</p>
                    <p className="text-primary-200 text-sm">Compró: {testimonials[currentIndex].product}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors"
            aria-label="Siguiente testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary-600' 
                    : 'bg-primary-200 hover:bg-primary-300'
                }`}
                aria-label={`Ir al testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center text-xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary-800">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-primary-700 text-sm leading-relaxed">
                "{testimonial.text.length > 120 
                  ? testimonial.text.substring(0, 120) + '...' 
                  : testimonial.text}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-primary-100">
                <span className="text-xs text-primary-500 font-medium">
                  Producto: {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">1676</div>
              <div className="text-primary-600">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">5.0</div>
              <div className="text-primary-600">Calificación promedio</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">100%</div>
              <div className="text-primary-600">Productos seguros</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">225</div>
              <div className="text-primary-600">Recomendaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}