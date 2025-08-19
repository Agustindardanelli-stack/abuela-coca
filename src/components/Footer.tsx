'use client'

import { Instagram, MapPin, MessageCircle, Heart, Clock, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-300 rounded-full flex items-center justify-center">
                <span className="text-primary-800 font-bold text-xl">AC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Abuela Coca</h3>
                <p className="text-primary-200">Sin Gluten • Sin Lactosa</p>
              </div>
            </div>
            
            <p className="text-primary-200 leading-relaxed mb-6 max-w-md">
              Elaboramos productos artesanales con el amor y la tradición de la abuela, 
              adaptados para personas celíacas e intolerantes a la lactosa. 
              Cada producto está hecho con ingredientes de primera calidad.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('productos')}
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200">Luis Reinaudi 1874</p>
                  <p className="text-primary-200">Río Cuarto, Córdoba 5800</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-primary-200">Lun - Vie: 9:00 - 18:00</p>
                  <p className="text-primary-200">Sáb: 9:00 - 13:00</p>
                </div>
              </div>
              
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">✓</span>
              </div>
              <p className="text-primary-200 text-sm">100% Sin Gluten</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">🥛</span>
              </div>
              <p className="text-primary-200 text-sm">Sin Lactosa</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">🏠</span>
              </div>
              <p className="text-primary-200 text-sm">Artesanal</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">🚚</span>
              </div>
              <p className="text-primary-200 text-sm">Entrega Rápida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700 bg-primary-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-primary-300 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Abuela Coca </span>     
              <span className="mx-1">•</span> 
              <span>Río Cuarto, Córdoba</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-300">Síguenos:</span>
              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors flex items-center"
              >
                <Instagram className="w-4 h-4 mr-1" />
                Instagram
              </a>
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.link/zoxx5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </footer>
  )
}