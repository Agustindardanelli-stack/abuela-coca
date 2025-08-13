'use client'

import { Instagram, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-16 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-white/15 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fadeInUp">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">1676 seguidores nos eligen</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Dulces con el
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Amor de la Abuela
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Elaboración artesanal de alimentos <strong>sin gluten y sin lactosa</strong> 
              en Río Cuarto, Córdoba
            </p>

            {/* Features List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">✨ Sin Gluten</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">🥛 Sin Lactosa</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">🏠 Caseros</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://wa.link/zoxx5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                <span className="mr-2">📱</span>
                Hacer Pedido por WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Síguenos en Instagram
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 text-sm animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Luis Reinaudi 1874, Río Cuarto</span>
              </div>
            </div>
          </div>

          {/* Image/Logo Side */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">AC</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary-800 mb-2">Abuela Coca</h2>
                    <p className="text-primary-600 font-medium">Productos artesanales</p>
                    <p className="text-primary-500 text-sm">Sin gluten • Sin lactosa</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              {/* <div className="absolute -top-4 -right-4 bg-secondary-500 text-white rounded-full w-16 h-16 flex items-center justify-center animate-bounce-slow">
                {/* <div className="text-center">
                  <div className="text-lg font-bold">86</div>
                  <div className="text-xs">Posts</div>
                </div> */}
              {/* </div> */} 
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-lg font-bold">1676</div>
                  <div className="text-xs">Seguidores</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}