'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { categorias, formatPrecio, productos, type Categoria } from '@/content/productos'
import { whatsappUrl } from '@/lib/site'

export default function Products() {
  const [selected, setSelected] = useState<'todos' | Categoria>('todos')
  const visibles = selected === 'todos' ? productos : productos.filter((p) => p.categoria === selected)

  return (
    <section id="productos" className="section">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Catálogo</p>
            <h2 className="section-title">Nuestros productos</h2>
            <p className="lead">Elegí lo que necesitás y pedilo por WhatsApp. Te confirmamos disponibilidad y cómo recibirlo.</p>
          </div>

          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0" role="tablist" aria-label="Categorías">
            {categorias.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={selected === c.id}
                onClick={() => setSelected(c.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  selected === c.id ? 'border-ink bg-ink text-cream' : 'border-ink/15 bg-white text-ink-700 hover:border-ink/40'
                }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {visibles.map((p) => (
            <article key={p.id} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream-100">
                {p.destacado && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm">
                    Más pedido
                  </span>
                )}
                {p.foto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.foto}
                    alt={p.nombre}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-6xl" aria-hidden="true">
                    {p.icono}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col pt-4">
                <h3 className="font-display text-[1.05rem] font-medium leading-snug sm:text-xl">{p.nombre}</h3>
                <p className="mt-1.5 hidden text-sm leading-relaxed text-ink-500 sm:block">{p.descripcion}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-ink-500">{p.etiquetas.join(' · ')}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <span className="text-base font-semibold text-ink sm:text-lg">{formatPrecio(p.precio)}</span>
                  <a
                    href={whatsappUrl(`¡Hola Abuela Coca! Quiero pedir: ${p.nombre}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${p.nombre} por WhatsApp`}
                    className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream sm:text-sm"
                  >
                    Pedir <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {productos.some((p) => p.precio > 0) && (
          <p className="mt-12 text-sm text-ink-500">Precios sujetos a cambios. Los confirmamos al tomar tu pedido.</p>
        )}
      </div>
    </section>
  )
}
