import { EMAIL } from '@/lib/site'

export default function About() {
  return (
    <section id="nosotros" className="section bg-wine">
      <div className="container-site flex justify-center">
        <div className="sheet scallop-bottom w-full max-w-[640px] px-7 pb-2 pt-12 sm:px-14 sm:pt-16" data-reveal>
          <div className="mx-auto h-11 w-11 overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/productos/bizcochuelo-base.jpg"
              alt="El personaje de Abuela Coca, tal como aparece en nuestros paquetes"
              className="h-full w-full scale-[2.7] object-cover object-[46%_18%]"
            />
          </div>

          <div className="mx-auto mt-8 max-w-[46ch] space-y-5 text-[1.05rem] leading-[1.6] sm:text-[1.05rem]">
            <p>
              Somos Abuela Coca: una fábrica chica de Río Cuarto que hace premezclas, pastelería y salados sin gluten
              y sin lactosa, con las recetas que se cocinaban en casa de toda la vida.
            </p>
            <p>
              Todo lo que sale de acá es apto para celíacos —sin TACC, certificado— y apto para intolerantes a la
              lactosa y alérgicos a la proteína de la leche —sin lactosa, apto A.P.L.V.
            </p>
            <p>
              A nuestros salados no les ponemos colorantes, conservantes ni aditivos. Son pocos ingredientes, bien
              elegidos, para que el sabor sea el de siempre.
            </p>
            <p>
              Elaboramos todo en nuestra fábrica propia de Río Cuarto, con venta minorista para la familia y
              mayorista para dietéticas, almacenes y restaurantes.
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-[46ch] text-right font-display text-xl italic">— La familia de Abuela Coca</p>
          <p className="mx-auto max-w-[46ch] text-right text-[0.8125rem] text-wine-soft">Río Cuarto, Córdoba</p>

          <div className="mt-10 dots-row" aria-hidden="true" />
          <a
            href={`mailto:${EMAIL}`}
            className="-mx-7 flex h-[4.5rem] items-center justify-center text-[0.95rem] font-medium text-wine-soft underline-offset-4 hover:text-wine hover:underline sm:-mx-14"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
