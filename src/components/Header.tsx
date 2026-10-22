'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { WHATSAPP_URL } from '@/lib/site'

const NAV = [
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#como-pedir', label: 'Cómo pedir' },
  { href: '#recetas', label: 'Recetas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-ink/10 bg-cream/95 backdrop-blur' : 'bg-cream'
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" aria-label="Abuela Coca, inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink-700 transition-colors hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-dark hidden !px-5 !py-2.5 sm:inline-flex">
            Hacer un pedido
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" className="border-t border-ink/10 md:hidden" aria-label="Menú">
          <ul className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-xl text-ink">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-dark w-full">
                Hacer un pedido
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
