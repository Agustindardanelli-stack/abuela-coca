import { Instagram, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/site'

const LINKS = [
  { href: '#productos', label: 'La carta' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#como-pedir', label: 'Cómo pedir' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="curtain-footer bg-wine-700 text-paper">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-paper/55">
            Premezclas, pastelería y salados sin gluten y sin lactosa, hechos como en casa, en Río Cuarto, Córdoba.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-paper/10 p-2.5 transition-colors hover:bg-pink hover:text-wine">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-paper/10 p-2.5 transition-colors hover:bg-pink hover:text-wine">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <p className="font-display italic text-paper/55">Secciones</p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-paper/80 transition-colors hover:text-pink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display italic text-paper/55">Visitanos</p>
          <address className="mt-4 space-y-1 text-[0.95rem] not-italic text-paper/80">
            <p>{ADDRESS.street}</p>
            <p>
              {ADDRESS.city}, {ADDRESS.region}
            </p>
            <p className="pt-3 text-paper/55">Lun a vie · 9:00 a 18:00</p>
            <p className="text-paper/55">Sáb · 9:00 a 13:00</p>
          </address>
        </div>
      </div>
      <div className="bg-wine">
        <div className="container-site py-5 text-[0.8125rem] text-paper/40">
          <p>© {new Date().getFullYear()} Abuela Coca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
