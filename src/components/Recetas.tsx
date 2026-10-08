'use client'

import { ChefHat, Pizza, Cake, Cookie, Sandwich, LucideIcon } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

interface Receta {
  icon: LucideIcon
  premezcla: string
  descripcion: string
  ideas: string[]
  color: string
}

export default function Recetas() {
  const recetas: Receta[] = [
    {
      icon: ChefHat,
      premezcla: 'Premezcla Universal',
      descripcion: 'Nuestra premezcla multiuso: con ella podés preparar pan de molde y muchas otras recetas caseras.',
      ideas: ['Pan de Molde', 'Tartas', 'Facturas', 'Muffins', 'Tortas Simples'],
      color: 'from-primary-600 to-primary-400'
    },
    {
      icon: Pizza,
      premezcla: 'Premezcla para Pizza',
      descripcion: 'Masa liviana y crocante, ideal para reencontrarte con tu pizza favorita sin gluten.',
      ideas: ['Pizza Casera', 'Fugazza', 'Pan Pizza'],
      color: 'from-secondary-600 to-secondary-400'
    },
    {
      icon: Cake,
      premezcla: 'Premezcla para Bizcochuelo',
      descripcion: 'Esponjoso y tierno, perfecto como base para tus tortas de cumpleaños.',
      ideas: ['Torta de Cumpleaños', 'Bizcochuelo Relleno', 'Cupcakes'],
      color: 'from-primary-500 to-secondary-400'
    },
    {
      icon: Cookie,
      premezcla: 'Premezcla Bizcochuelo Chocolate',
      descripcion: 'El clásico sabor a chocolate, húmedo y con mucho sabor, sin gluten ni lactosa.',
      ideas: ['Torta de Chocolate', 'Brownies', 'Torta Selva Negra'],
      color: 'from-primary-700 to-primary-500'
    },
    {
      icon: Sandwich,
      premezcla: 'Pan Rallado',
      descripcion: 'El toque crocante que le faltaba a tus rebozados de siempre.',
      ideas: ['Milanesas', 'Empanadas', 'Suprema de Pollo', 'Bastones de Muzzarella'],
      color: 'from-secondary-500 to-primary-500'
    }
  ]

  return (
    <section id="recetas" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            Ideas y
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 font-extrabold">
              Recetas para Inspirarte
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium">
            Cada premezcla es la base para un montón de preparaciones distintas.
            Descubrí todo lo que podés cocinar en casa, sin gluten y sin lactosa.
          </p>
        </div>

        {/* Recetas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recetas.map((receta, index) => {
            const Icon = receta.icon
            return (
              <div
                key={receta.premezcla}
                className="group card hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${receta.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {receta.premezcla}
                </h3>
                <p className="text-primary-600 leading-relaxed mb-5">
                  {receta.descripcion}
                </p>

                {/* Ideas de recetas */}
                <div className="flex flex-wrap gap-2">
                  {receta.ideas.map((idea) => (
                    <span
                      key={idea}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {idea}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Querés más ideas para cocinar?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Escribinos por WhatsApp y te contamos cómo sacarle el máximo provecho a cada premezcla
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-800 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors inline-flex items-center justify-center text-lg"
            >
              <span className="mr-2">💬</span>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
