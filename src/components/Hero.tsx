import { ArrowRight, MapPin } from 'lucide-react'
import { ADDRESS, WHATSAPP_URL } from '@/lib/site'
import { productos } from '@/content/productos'

const STATS: [string, string][] = [
  ['Sin TACC', 'Apto celíacos'],
  ['Sin lactosa', 'Apto APLV'],
  [String(productos.length), 'Productos'],
]

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-wine pb-24 pt-6 sm:pb-32 sm:pt-8">
      <div className="container-site">
        <div className="sheet scallop-bottom mx-auto max-w-3xl px-7 pt-14 sm:px-14 sm:pt-16" data-reveal>
          <h1
            className="text-center font-medium leading-[0.96]"
            style={{ fontSize: 'clamp(2.75rem, 2.1rem + 3vw, 4.5rem)' }}
          >
            Sin gluten,
            <span className="block italic text-wine-soft">sin lactosa.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-[1.05rem] leading-relaxed text-wine sm:text-[1.2rem]">
            Premezclas, pastelería y salados con sabor de casa: las recetas de la abuela, hechas para que coma toda
            la familia.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
            <a href="#productos" className="btn-pink !px-7 !py-3.5">
              Ver la carta <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !px-7 !py-3.5 text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <dl
            className="mx-auto mt-10 flex max-w-lg items-start justify-center gap-8 text-center sm:gap-14"
            data-reveal
            style={{ ['--reveal-delay' as string]: '200ms' }}
          >
            {STATS.map(([t, d]) => (
              <div key={t}>
                <dt className="whitespace-nowrap font-display text-xl italic sm:text-2xl">{t}</dt>
                <dd className="mt-1 text-[0.8125rem] text-wine-soft">{d}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-7 flex items-center justify-center gap-2 text-[0.95rem] text-wine-soft">
            <MapPin className="h-4 w-4 text-pink" /> {ADDRESS.street}, {ADDRESS.city}
          </p>

          {/* La tira de productos reales, cortada por el borde festoneado de la etiqueta */}
          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3" data-reveal style={{ ['--reveal-delay' as string]: '280ms' }}>
            {[
              ['/productos/universal-5kg.jpg', 'Premezcla Universal Abuela Coca'],
              ['/productos/bizcochuelo-chocolate.jpg', 'Premezcla Bizcochuelo de Chocolate'],
              ['/productos/prepizza.jpg', 'Prepizza sin gluten'],
            ].map(([src, alt]) => (
              <div key={src} className="photo-zoom aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
