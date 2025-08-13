'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, MapPin, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-800">Abuela Coca</h1>
              <p className="text-xs text-primary-600">Sin Gluten • Sin Lactosa</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Social Links & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/abuelacocasinglutenlactosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-secondary-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="wa.link/zoxxs5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Pedidos WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-primary-200 py-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-primary-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-left text-primary-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-primary-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-left text-primary-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-primary-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                Contacto
              </button>
              <div className="pt-4 border-t border-primary-200">
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.instagram.com/abuelacocasinglutenlactosa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-secondary-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.link/zoxx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Pedidos WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}