import { ArrowRight, MapPin } from 'lucide-react'
import { ADDRESS, WHATSAPP_URL } from '@/lib/site'
import { productos } from '@/content/productos'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-site grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <p className="eyebrow">Fábrica de alimentos · Río Cuarto</p>
          <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
            Sin gluten, sin lactosa,
            <span className="block italic text-brand">con sabor de casa.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            Premezclas, pastelería y salados aptos para celíacos e intolerantes a la lactosa. Recetas de la abuela, hechas
            para que toda la familia coma lo mismo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#productos" className="btn-dark !px-7 !py-3.5">
              Ver productos <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline !px-7 !py-3.5">
              Pedir por WhatsApp
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-5 text-center">
            {[
              ['Sin TACC', 'Apto celíacos'],
              ['Sin lactosa', 'Apto APLV'],
              [String(productos.length), 'Productos'],
            ].map(([t, d]) => (
              <div key={t} className="px-2">
                <dt className="whitespace-nowrap font-display text-base font-medium text-ink sm:text-xl">{t}</dt>
                <dd className="mt-1 text-[11px] text-ink-500 sm:text-xs">{d}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 flex items-center gap-2 text-sm text-ink-500">
            <MapPin className="h-4 w-4 text-brand" /> {ADDRESS.street}, {ADDRESS.city}
          </p>
        </div>

        {/* Collage de productos reales */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-blush/50 blur-3xl" aria-hidden="true" />
          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4" style={{ aspectRatio: '1 / 1.02' }}>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="/productos/prepizza.jpg"
              alt="Prepizza sin gluten Abuela Coca"
              className="col-span-3 row-span-4 h-full w-full rounded-[1.75rem] object-cover shadow-xl shadow-ink/10"
            />
            <img
              src="/productos/brownie.jpg"
              alt="Brownie sin gluten y sin lactosa"
              className="col-span-2 row-span-3 h-full w-full rounded-[1.75rem] object-cover shadow-xl shadow-ink/10"
            />
            <img
              src="/productos/bizcochuelo-base.jpg"
              alt="Premezcla para bizcochuelo Abuela Coca"
              className="col-span-2 row-span-3 h-full w-full rounded-[1.75rem] object-cover shadow-xl shadow-ink/10"
            />
            <img
              src="/productos/noquis-arroz.jpg"
              alt="Ñoquis de arroz sin gluten"
              className="col-span-3 row-span-2 h-full w-full rounded-[1.75rem] object-cover shadow-xl shadow-ink/10"
            />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-3 shadow-lg shadow-ink/10 sm:left-8">
            <p className="font-display text-lg italic text-ink">Hecho en Río Cuarto</p>
            <p className="text-xs text-ink-500">Fábrica de alimentos sin TACC</p>
          </div>
        </div>
      </div>
    </section>
  )
}
