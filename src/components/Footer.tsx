import { Instagram, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/site'

const LINKS = [
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#como-pedir', label: 'Cómo pedir' },
  { href: '#recetas', label: 'Recetas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            Fábrica de premezclas y alimentos libres de gluten y sin lactosa en Río Cuarto, Córdoba.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-cream/20 p-2.5 transition-colors hover:bg-cream hover:text-ink">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full border border-cream/20 p-2.5 transition-colors hover:bg-cream hover:text-ink">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">Secciones</p>
          <ul className="mt-5 space-y-3 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/80 transition-colors hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">Visitanos</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-cream/80">
            <p>{ADDRESS.street}</p>
            <p>
              {ADDRESS.city}, {ADDRESS.region}
            </p>
            <p className="pt-3">Lun a vie · 9:00 a 18:00</p>
            <p>Sáb · 9:00 a 13:00</p>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-site py-6 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Abuela Coca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
