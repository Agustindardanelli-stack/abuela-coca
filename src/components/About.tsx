import { Factory, Leaf, MilkOff, WheatOff } from 'lucide-react'

const PILARES = [
  { icon: WheatOff, title: 'Sin TACC', text: 'Productos libres de gluten, pensados para personas celíacas.' },
  { icon: MilkOff, title: 'Sin lactosa · Apto APLV', text: 'Aptos para intolerantes a la lactosa y alérgicos a la proteína de la leche.' },
  { icon: Leaf, title: 'Ingredientes simples', text: 'Nuestros salados no llevan colorantes, conservantes ni aditivos.' },
  { icon: Factory, title: 'Fábrica propia', text: 'Elaboramos todo en Río Cuarto. Venta minorista y mayorista.' },
]

export default function About() {
  return (
    <section id="nosotros" className="border-y border-ink/10 bg-white">
      <div className="container-site section grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Nosotros</p>
          <h2 className="section-title">Las recetas de la abuela, para que nadie se quede afuera de la mesa.</h2>
          <p className="lead">
            Somos Abuela Coca, una fábrica de premezclas y alimentos libres de gluten y sin lactosa de Río Cuarto.
            Hacemos productos caseros y ricos, para que celíacos, intolerantes y toda la familia disfruten lo mismo.
          </p>
        </div>

        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {PILARES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="border-t border-ink/15 pt-6">
              <Icon className="h-6 w-6 text-brand" strokeWidth={1.6} />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
