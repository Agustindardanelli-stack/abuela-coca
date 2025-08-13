'use client'

import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            ¡Conectemos!
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Estamos aquí para ti
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido? Contáctanos por cualquiera 
            de nuestros canales. ¡Nos encanta ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Dirección</h4>
                    <p className="text-primary-600">Luis Reinaudi 1874</p>
                    <p className="text-primary-600">Río Cuarto, Córdoba 5800</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.link/zoxx5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Hacer pedido por WhatsApp
                    </a>
                    <p className="text-primary-600 text-sm">Respuesta inmediata</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      @abuelacocasinglutenlactosa
                    </a>
                    <p className="text-primary-600 text-sm">Síguenos para novedades</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Horarios de Atención</h4>
                    <p className="text-primary-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-primary-600">Sábados: 9:00 - 13:00</p>
                    <p className="text-primary-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Pedido Rápido</h4>
                <p className="text-green-100 text-sm">Haz tu pedido por WhatsApp</p>
              </a>

              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Instagram className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Síguenos</h4>
                <p className="text-pink-100 text-sm">Ve nuestros productos diarios</p>
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div>
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Envíanos un Mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="pedido">Hacer un pedido</option>
                    <option value="mayorista">Consulta mayorista</option>
                    <option value="personalizado">Producto personalizado</option>
                    <option value="general">Consulta general</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-primary-200">
                <p className="text-sm text-primary-600 text-center">
                  <strong>¿Preferís WhatsApp?</strong> Es más rápido y directo para pedidos
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">¿Dónde Estamos?</h3>
              
              {/* Placeholder for map */}
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <p className="text-primary-700 font-medium">Luis Reinaudi 1874</p>
                  <p className="text-primary-600">Río Cuarto, Córdoba</p>
                </div>
              </div>
              
              <p className="text-sm text-primary-600">
                📍 Ubicados en el corazón de Río Cuarto, fácil acceso y estacionamiento disponible
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para disfrutar de nuestros dulces?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Hacé tu pedido ahora y recibí productos frescos y deliciosos sin gluten y sin lactosa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-colors inline-flex items-center justify-center text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Pedido por WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold transition-colors border border-white/30 inline-flex items-center justify-center text-lg"
              >
                <Instagram className="w-6 h-6 mr-2" />
                Ver en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}