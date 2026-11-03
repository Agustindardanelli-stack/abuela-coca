'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonios } from '@/content/testimonios'
import { INSTAGRAM_URL, whatsappUrl } from '@/lib/site'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonios.length

  useEffect(() => {
    if (total < 2) return
    const timer = setInterval(() => setCurrent((i) => (i + 1) % total), 8000)
    return () => clearInterval(timer)
  }, [total])

  // Sin testimonios reales cargados: invitación a dejar una opinión (nunca testimonios inventados).
  if (total === 0) {
    return (
      <section id="testimonios" className="pb-16 sm:pb-24">
        <div className="container-site flex justify-center">
          <div className="sheet scallop-top w-full max-w-xl px-8 pb-12 pt-8 text-center sm:px-14" data-reveal>
            <h2 className="mx-auto max-w-md font-display text-3xl italic leading-tight sm:text-4xl">
              ¿Ya probaste nuestros productos?
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[0.95rem] text-wine-soft">
              Contanos qué te parecieron. Ayuda a que más familias celíacas o intolerantes a la lactosa nos
              encuentren.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl('¡Hola Abuela Coca! Les quería contar qué me parecieron sus productos: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink"
              >
                Dejar mi opinión
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn border border-wine/20 text-wine hover:bg-wine/5">
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
    <section id="testimonios" className="pb-16 sm:pb-24">
      <div className="container-site flex justify-center">
        <figure className="sheet scallop-top w-full max-w-2xl px-8 pb-10 pt-10 sm:px-16" data-reveal>
          <blockquote className="mx-auto max-w-2xl text-center font-display text-2xl italic leading-snug sm:text-3xl">
            {t.text}
          </blockquote>
          <figcaption className="mt-7 text-center text-[0.95rem] text-wine-soft">
            <span className="font-medium text-wine">{t.name}</span>
            {[t.location, t.product, t.source && `vía ${t.source}`].filter(Boolean).map((x) => ` · ${x}`)}
          </figcaption>
          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button onClick={() => setCurrent((current - 1 + total) % total)} className="rounded-full p-2 text-wine-soft hover:bg-wine/5 hover:text-wine" aria-label="Anterior">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-[0.8125rem] text-wine-soft">
                {current + 1} / {total}
              </span>
              <button onClick={() => setCurrent((current + 1) % total)} className="rounded-full p-2 text-wine-soft hover:bg-wine/5 hover:text-wine" aria-label="Siguiente">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </figure>
      </div>
    </section>
  )
}
