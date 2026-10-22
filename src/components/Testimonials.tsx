'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonios } from '@/content/testimonios'
import { INSTAGRAM_URL, whatsappUrl } from '@/lib/site'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonios.length

  useEffect(() => {
    if (total < 2) return
    const timer = setInterval(() => setCurrent((i) => (i + 1) % total), 7000)
    return () => clearInterval(timer)
  }, [total])

  // Sin testimonios reales cargados: invitación a dejar una opinión (nunca testimonios inventados).
  if (total === 0) {
    return (
      <section id="testimonios" className="pb-20 sm:pb-28">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[2rem] bg-blush/40 px-8 py-14 text-center sm:px-16">
            <Quote className="mx-auto h-8 w-8 text-brand" strokeWidth={1.5} />
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">¿Ya probaste nuestros productos?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-700">
              Contanos qué te parecieron. Tu opinión nos ayuda a mejorar y a que más personas con celiaquía o intolerancia a la
              lactosa nos encuentren.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl('¡Hola Abuela Coca! Les quería contar qué me parecieron sus productos: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Dejar mi opinión
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Ver opiniones en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const t = testimonios[current]
  return (
    <section id="testimonios" className="pb-20 sm:pb-28">
      <div className="container-site">
        <figure className="relative rounded-[2rem] bg-blush/40 px-8 py-14 text-center sm:px-16">
          <Quote className="mx-auto h-8 w-8 text-brand" strokeWidth={1.5} />
          <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl font-normal leading-snug text-ink sm:text-3xl">
            “{t.text}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-ink-700">
            <span className="font-semibold">{t.name}</span>
            {[t.location, t.product, t.source && `vía ${t.source}`].filter(Boolean).map((x) => ` · ${x}`)}
          </figcaption>
          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button onClick={() => setCurrent((current - 1 + total) % total)} className="rounded-full border border-ink/20 p-2 hover:bg-white" aria-label="Anterior">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-ink-500">
                {current + 1} / {total}
              </span>
              <button onClick={() => setCurrent((current + 1) % total)} className="rounded-full border border-ink/20 p-2 hover:bg-white" aria-label="Siguiente">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </figure>
      </div>
    </section>
  )
}
