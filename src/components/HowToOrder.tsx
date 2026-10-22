import { Store } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

const PASOS = [
  { n: '01', title: 'Elegí tus productos', text: 'Mirá el catálogo y anotá qué querés y en qué cantidad.' },
  { n: '02', title: 'Escribinos por WhatsApp', text: 'Tocá “Pedir” en cada producto o mandanos tu lista completa.' },
  { n: '03', title: 'Confirmamos y coordinamos', text: 'Te confirmamos disponibilidad, el total y cómo recibir tu pedido.' },
]

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="section bg-ink text-cream">
      <div className="container-site">
        <p className="eyebrow !text-blush">Cómo pedir</p>
        <h2 className="section-title !text-cream">Hacer tu pedido es simple</h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {PASOS.map((p) => (
            <li key={p.n} className="border-t border-cream/20 pt-6">
              <span className="font-display text-5xl font-light italic text-blush">{p.n}</span>
              <h3 className="mt-4 text-2xl font-medium !text-cream">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{p.text}</p>
            </li>
          ))}
        </ol>

        {/* Mayoristas */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-cream/[0.06] p-8 ring-1 ring-cream/10 sm:p-10 md:flex-row md:items-center">
          <div className="flex gap-5">
            <Store className="mt-1 h-7 w-7 shrink-0 text-blush" strokeWidth={1.6} />
            <div>
              <h3 className="text-2xl font-medium !text-cream">¿Tenés una dietética, almacén o restaurante?</h3>
              <p className="mt-2 max-w-xl text-cream/70">
                Hacemos ventas mayoristas, con presentaciones como la Premezcla Universal de 5 kg. Consultanos por precios para
                comercios.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl('¡Hola Abuela Coca! Tengo un comercio y quiero consultar precios mayoristas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0 bg-cream text-ink hover:bg-white"
          >
            Consultar precios mayoristas
          </a>
        </div>
      </div>
    </section>
  )
}
