'use client'

import { Shield, Heart, Users, Award, Clock, Truck, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "100% Sin Gluten",
      description: "Todos nuestros productos están certificados como libres de gluten, seguros para personas celíacas.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Sin Lactosa",
      description: "Elaborados especialmente para personas con intolerancia a la lactosa, sin comprometer el sabor.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Recetas de la Abuela",
      description: "Mantenemos las recetas tradicionales familiares, adaptadas para ser inclusivas y saludables.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Calidad Artesanal",
      description: "Cada producto es elaborado a mano con ingredientes de primera calidad y mucho amor.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Siempre Frescos",
      description: "Preparamos nuestros productos diariamente para garantizar la máxima frescura.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Truck,
      title: "Ventas Mayoristas",
      description: "Ofrecemos precios especiales para comercios y pedidos en gran cantidad.",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            ¿Por qué elegir 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Abuela Coca?
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Más de <strong>1676 familias</strong> confían en nosotros para disfrutar de dulces caseros 
            sin restricciones alimentarias. Descubre qué nos hace especiales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group card hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-800 mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1676</div>
              <div className="text-primary-100">Seguidores felices</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">86</div>
              <div className="text-primary-100">Productos únicos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Sin gluten</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5+</div>
              <div className="text-primary-100">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}