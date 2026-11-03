import { MapPin, Navigation } from 'lucide-react'
import ContactForm from './ContactForm'
import { ADDRESS, EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, MAPS_EMBED_URL, MAPS_URL, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contacto" className="section bg-wine">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 className="section-title text-paper">Escribinos</h2>
          <p className="lead mx-auto">¿Tenés una consulta o querés hacer un pedido? Te respondemos por WhatsApp.</p>
        </div>

        <div className="relative mt-12" data-reveal>
          <div className="sheet grid overflow-hidden rounded-[1.75rem] lg:grid-cols-[1fr_1.2fr]">
            {/* Mitad izquierda: información */}
            <div className="px-7 py-9 sm:px-10 sm:py-10">
              <p className="flex items-center gap-2 font-medium">
                <MapPin className="h-5 w-5 shrink-0 text-pink" strokeWidth={1.7} /> {ADDRESS.street}
              </p>
              <p className="mt-0.5 pl-7 text-[0.95rem] text-wine-soft">
                {ADDRESS.city}, {ADDRESS.region} ({ADDRESS.postalCode})
              </p>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-wine-soft">
                Atendemos <span className="font-medium text-wine">lunes a viernes de 9:00 a 18:00</span> y{' '}
                <span className="font-medium text-wine">sábados de 9:00 a 13:00</span>. Para pedidos, consultas
                mayoristas o lo que necesites, el canal más rápido es{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-wine underline-offset-4 hover:underline">
                  WhatsApp ({PHONE_DISPLAY})
                </a>
                .
              </p>

              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.95rem]">
                <a href={`mailto:${EMAIL}`} className="font-medium underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
                <span className="text-wine-soft/50" aria-hidden="true">·</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
                  @{INSTAGRAM_USER}
                </a>
              </p>

              <div className="mt-7 overflow-hidden rounded-xl">
                <iframe
                  src={MAPS_EMBED_URL}
                  className="h-48 w-full grayscale"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de Abuela Coca: ${ADDRESS.street}, ${ADDRESS.city}`}
                />
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[0.95rem] font-medium text-wine hover:underline">
                <Navigation className="h-4 w-4" /> Cómo llegar
              </a>
            </div>

            {/* Perforación del cupón: solo en pantallas grandes */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="absolute inset-y-6 left-0 dots-col" />
              <span className="absolute -top-3.5 -left-3.5 h-7 w-7 rounded-full bg-wine" />
              <span className="absolute -bottom-3.5 -left-3.5 h-7 w-7 rounded-full bg-wine" />
            </div>
            <div className="dots-row lg:hidden" aria-hidden="true" />

            {/* Mitad derecha: formulario */}
            <div className="bg-paper-dim px-7 py-9 sm:px-10 sm:py-10">
              <h3 className="text-2xl font-medium">Envianos tu consulta</h3>
              <p className="mt-1.5 text-[0.95rem] text-wine-soft">Completá los datos y se abre WhatsApp con el mensaje listo para enviar.</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
