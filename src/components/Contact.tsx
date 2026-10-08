'use client'

import { MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'
import { INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL, WHATSAPP_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-800 mb-6">
            ¡Conectemos!
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 font-extrabold">
              Estamos para ayudarte
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium">
            ¿Tenés alguna pregunta o querés hacer un pedido? Escribinos por cualquiera 
            de nuestros canales.
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
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Hacer pedido por WhatsApp
                    </a>
                    <p className="text-primary-600 text-sm">Te respondemos a la brevedad</p>
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
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      @abuelacocasinglutenlactosa
                    </a>
                    <p className="text-primary-600 text-sm">Seguinos para ver novedades</p>
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Pedido Rápido</h4>
                <p className="text-green-100 text-sm">Hacé tu pedido por WhatsApp</p>
              </a>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Instagram className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Seguinos</h4>
                <p className="text-pink-100 text-sm">Ve nuestros productos diarios</p>
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div>
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Envianos un mensaje</h3>
              
              <ContactForm />

              <p className="mt-4 text-center text-sm text-primary-600">
                Se abre WhatsApp con tu mensaje listo para enviar.
              </p>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">¿Dónde Estamos?</h3>
              
                            <div className="w-full h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Abuela Coca - Luis Reinaudi 1874, Río Cuarto"
                ></iframe>
            </div>
              
              <p className="text-sm text-primary-600">
                📍 Luis Reinaudi 1874, Río Cuarto.{' '}
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-primary-800">
                  Cómo llegar
                </a>
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-colors inline-flex items-center justify-center text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Pedido por WhatsApp
              </a>
              <a 
                href={INSTAGRAM_URL}
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