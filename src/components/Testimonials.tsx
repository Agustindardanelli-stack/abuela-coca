'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, Quote } from 'lucide-react'
import { testimonios } from '@/content/testimonios'
import { INSTAGRAM_URL, whatsappUrl } from '@/lib/site'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonios.length

  useEffect(() => {
    if (total < 2) return
    const timer = setInterval(() => setCurrent((i) => (i + 1) % total), 6000)
    return () => clearInterval(timer)
  }, [total])

  // Sin testimonios reales cargados: invitación a dejar una opinión (nunca testimonios inventados).
  if (total === 0) {
    return (
      <section id="testimonios" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary-600 to-primary-400 p-8 text-center text-white lg:p-12">
            <Quote className="mx-auto mb-4 h-10 w-10 text-white/60" />
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">¿Ya probaste nuestros productos?</h2>
            <p className="mb-8 text-lg text-primary-100">
              Contanos qué te parecieron. Tu opinión nos ayuda a mejorar y a que más personas con celiaquía
              o intolerancia a la lactosa nos conozcan.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl('¡Hola Abuela Coca! Les quería contar qué me parecieron sus productos: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Dejar mi opinión
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/25"
              >
                <Instagram className="mr-2 h-5 w-5" /> Ver opiniones en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const t = testimonios[current]
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary-800 lg:text-5xl">
            Lo que dicen
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text font-extrabold text-transparent">
              nuestros clientes
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-medium text-primary-600">
            Opiniones de quienes ya disfrutan de nuestros productos sin gluten y sin lactosa.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-400 p-8 text-white lg:p-12">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-white/10" />
            <Quote className="mb-6 h-12 w-12 text-white/50" />
            <blockquote className="relative z-10 mb-8 text-xl font-medium leading-relaxed lg:text-2xl">“{t.text}”</blockquote>
            <figcaption className="relative z-10 flex items-center">
              <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-xl font-bold">{t.name}</p>
                <p className="text-primary-100">
                  {[t.location, t.source && `vía ${t.source}`].filter(Boolean).join(' · ')}
                </p>
                {t.product && <p className="text-sm text-primary-200">Compró: {t.product}</p>}
              </div>
            </figcaption>
          </figure>

          {total > 1 && (
            <>
              <button
                onClick={() => setCurrent((current - 1 + total) % total)}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-primary-50"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6 text-primary-600" />
              </button>
              <button
                onClick={() => setCurrent((current + 1) % total)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-primary-50"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6 text-primary-600" />
              </button>
              <div className="mt-8 flex justify-center space-x-2">
                {testimonios.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-3 w-3 rounded-full transition-colors ${i === current ? 'bg-primary-600' : 'bg-primary-200 hover:bg-primary-300'}`}
                    aria-label={`Ir al testimonio ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
