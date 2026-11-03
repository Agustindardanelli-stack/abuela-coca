'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Minus, Plus, ShoppingBag } from 'lucide-react'
import { categorias, formatPrecio, productos, type Categoria, type Producto } from '@/content/productos'
import { whatsappUrl } from '@/lib/site'

const IDEAS: { premezcla: string; usos: string }[] = [
  { premezcla: 'Premezcla Universal', usos: 'pan de molde, tartas, facturas, muffins' },
  { premezcla: 'Premezcla Torta Matera', usos: 'torta matera, budín' },
  { premezcla: 'Premezcla Bizcochuelo Base', usos: 'torta de cumpleaños, bizcochuelo relleno, cupcakes' },
  { premezcla: 'Premezcla Bizcochuelo de Chocolate', usos: 'torta de chocolate, selva negra' },
  { premezcla: 'Premezcla Brownie', usos: 'brownies, alfajores de brownie, base para tortas' },
]

export default function Products() {
  const [selected, setSelected] = useState<'todos' | Categoria>('todos')
  const [cart, setCart] = useState<Record<string, number>>({})

  const visibles = selected === 'todos' ? productos : productos.filter((p) => p.categoria === selected)
  const grouped = useMemo(() => {
    if (selected !== 'todos') return [{ categoria: selected, items: visibles }]
    const order: Categoria[] = ['premezclas', 'pasteleria', 'salados']
    return order.map((categoria) => ({ categoria, items: productos.filter((p) => p.categoria === categoria) }))
  }, [selected, visibles])

  const lines = productos
    .map((p) => ({ p, qty: cart[p.id] ?? 0 }))
    .filter((l) => l.qty > 0)
  const subtotal = lines.reduce((sum, l) => sum + (l.p.precio > 0 ? l.p.precio * l.qty : 0), 0)
  const hayConsultar = lines.some((l) => l.p.precio === 0)

  function setQty(id: string, qty: number) {
    setCart((c) => {
      const next = { ...c }
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })
  }

  const pedidoUrl = useMemo(() => {
    if (lines.length === 0) return whatsappUrl()
    const detalle = lines.map((l) => `• ${l.qty} x ${l.p.nombre}${l.p.precio > 0 ? ` — ${formatPrecio(l.p.precio * l.qty)}` : ''}`).join('\n')
    const total = subtotal > 0 ? `\n\nTotal: ${formatPrecio(subtotal)}${hayConsultar ? ' + productos a consultar' : ''}` : ''
    return whatsappUrl(`¡Hola Abuela Coca! Quiero hacer este pedido:\n${detalle}${total}`)
  }, [lines, subtotal, hayConsultar])

  return (
    <section id="productos" className="section bg-wine">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <h2 className="section-title text-paper">La carta</h2>
            <p className="lead">Elegí lo que necesitás, anotá la cantidad y lo enviamos armado por WhatsApp.</p>
          </div>

          <div className="-mx-5 flex gap-6 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist" aria-label="Categorías">
            {categorias.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={selected === c.id}
                onClick={() => setSelected(c.id)}
                className={`shrink-0 pb-1 text-[1.05rem] transition-colors ${
                  selected === c.id ? 'border-b-2 border-pink text-paper' : 'text-paper/45 hover:text-paper/70'
                }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Tres caras reales de la fábrica, antes de entrar a la carta */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4" data-reveal>
          {[
            ['/productos/premezcla-brownie.jpg', 'Premezcla Brownie Abuela Coca'],
            ['/productos/tarta-coco.jpg', 'Tarta de coco con dulce de leche'],
            ['/productos/noquis-arroz.jpg', 'Ñoquis de arroz sin gluten'],
          ].map(([src, alt]) => (
            <div key={src} className="photo-zoom aspect-[4/3] overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="sheet mt-6 px-6 py-8 sm:px-12 sm:py-12" data-reveal>
          {grouped.map(({ categoria, items }, gi) => {
            if (items.length === 0) return null
            const nombreCat = categorias.find((c) => c.id === categoria)?.nombre ?? categoria
            return (
              <div key={categoria} className={gi > 0 ? 'mt-10' : ''}>
                {selected === 'todos' && <h3 className="font-display text-xl italic text-wine-soft">{nombreCat}</h3>}
                <ul className={selected === 'todos' ? 'mt-4 space-y-4' : 'space-y-4'}>
                  {items.map((p) => (
                    <MenuRow key={p.id} producto={p} qty={cart[p.id] ?? 0} onQty={(q) => setQty(p.id, q)} />
                  ))}
                </ul>
              </div>
            )
          })}

          {/* Sugerencias de la casa: con qué se hace cada premezcla */}
          <div className="mt-12 bg-paper-dim -mx-6 px-6 py-8 sm:-mx-12 sm:px-12">
            <p className="font-display text-lg italic text-wine-soft">Sugerencias de la casa</p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-wine-soft">
              {IDEAS.map((i) => (
                <li key={i.premezcla}>
                  <span className="font-medium text-wine">{i.premezcla}</span> — {i.usos}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* El pedido en vivo: se arma a medida que elegís cantidades arriba */}
        <div
          className={`sticky bottom-4 z-20 mt-6 flex flex-col items-center gap-3 rounded-2xl bg-pink px-6 py-4 text-wine shadow-xl shadow-black/30 transition-all duration-300 sm:flex-row sm:justify-between ${
            lines.length > 0 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
          }`}
          aria-hidden={lines.length === 0}
        >
          <p className="flex items-center gap-2 text-[0.95rem] font-medium">
            <ShoppingBag className="h-5 w-5 shrink-0" />
            {lines.length === 1 ? '1 producto elegido' : `${lines.length} productos elegidos`}
            {subtotal > 0 && <span className="font-display italic">· {formatPrecio(subtotal)}</span>}
          </p>
          <a href={pedidoUrl} target="_blank" rel="noopener noreferrer" className="btn-paper w-full !py-2.5 sm:w-auto">
            Enviar pedido por WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-10 text-[0.8125rem] text-paper/40">Precios sujetos a cambios. Los confirmamos al tomar tu pedido.</p>
      </div>
    </section>
  )
}

function MenuRow({ producto: p, qty, onQty }: { producto: Producto; qty: number; onQty: (q: number) => void }) {
  return (
    <li className="flex items-center gap-4 sm:gap-5">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-wine/5 sm:h-20 sm:w-20">
        {p.foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.foto} alt="" loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl" aria-hidden="true">
            {p.icono}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h4 className="truncate font-display text-[1.05rem] italic sm:text-[1.05rem]">{p.nombre}</h4>
          <span className="menu-leader hidden sm:block" aria-hidden="true" />
          <span className="shrink-0 font-display text-[1.05rem] tabular-nums sm:text-[1.05rem]">{formatPrecio(p.precio)}</span>
        </div>
        <p className="mt-0.5 hidden text-[0.8125rem] leading-snug text-wine-soft sm:block">{p.descripcion}</p>
        <p className="mt-0.5 text-[0.8125rem] text-wine-soft/80">{p.etiquetas.join(' · ')}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2.5 rounded-full bg-wine/[0.06] p-1">
        <button
          type="button"
          onClick={() => onQty(Math.max(0, qty - 1))}
          disabled={qty === 0}
          aria-label={`Quitar una unidad de ${p.nombre}`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-wine transition-colors hover:bg-wine/10 disabled:opacity-30"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-4 text-center text-[0.95rem] tabular-nums" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => onQty(qty + 1)}
          aria-label={`Agregar una unidad de ${p.nombre}`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-wine text-paper transition-colors hover:bg-wine-700"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </li>
  )
}
