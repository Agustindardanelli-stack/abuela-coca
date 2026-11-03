import { Store } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

const PASOS: { que: string; cuando: string }[] = [
  { que: 'Elegís tus productos en la carta', cuando: 'un minuto' },
  { que: 'Nos escribís por WhatsApp con tu pedido', cuando: 'al toque' },
  { que: 'Te confirmamos el total y cómo lo recibís', cuando: 'el mismo día' },
]

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="section bg-wine">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5" data-reveal>
          <h2 className="section-title text-paper">Hacer tu pedido es simple</h2>
          <p className="lead">Sin pasarela de pagos ni formularios largos: todo se resuelve en un chat de WhatsApp.</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="sheet zigzag-bottom px-7 pb-10 pt-8 sm:px-10 sm:pt-10">
            <ul className="space-y-5">
              {PASOS.map((s) => (
                <li key={s.que} className="flex items-baseline gap-3">
                  <span className="flex-1 text-[1.05rem]">{s.que}</span>
                  <span className="menu-leader" aria-hidden="true" />
                  <span className="shrink-0 text-[0.8125rem] italic text-wine-soft">{s.cuando}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-1 bg-wine-700 px-7 py-4 text-center text-[0.95rem] font-medium text-paper sm:px-10">
            Tu pedido, confirmado y listo para retirar o coordinar el envío.
          </div>
        </div>

        <div className="sheet mt-2 flex flex-col items-start gap-6 px-7 py-8 sm:px-10 sm:py-9 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between" data-reveal>
          <div className="flex gap-5">
            <div className="photo-zoom hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/productos/universal-5kg.jpg" alt="Premezcla Universal Abuela Coca, presentación de 5 kg" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xl font-medium">
                <Store className="h-5 w-5 shrink-0 text-wine-soft sm:hidden" strokeWidth={1.6} />
                ¿Tenés una dietética, almacén o restaurante?
              </h3>
              <p className="mt-1.5 max-w-xl text-[0.95rem] text-wine-soft">
                Hacemos ventas mayoristas, con presentaciones como la Premezcla Universal de 5 kg. Consultanos por
                precios para comercios.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl('¡Hola Abuela Coca! Tengo un comercio y quiero consultar precios mayoristas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink w-full shrink-0 lg:w-auto"
          >
            Consultar precios mayoristas
          </a>
        </div>
      </div>
    </section>
  )
}
