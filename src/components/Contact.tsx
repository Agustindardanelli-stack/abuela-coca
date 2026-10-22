import { Clock, Instagram, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react'
import ContactForm from './ContactForm'
import { ADDRESS, EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, MAPS_EMBED_URL, MAPS_URL, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contacto" className="section border-t border-ink/10 bg-white">
      <div className="container-site">
        <p className="eyebrow">Contacto</p>
        <h2 className="section-title">Escribinos</h2>
        <p className="lead">¿Tenés una consulta o querés hacer un pedido? Te respondemos por WhatsApp.</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              <li className="flex gap-4 py-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <div>
                  <p className="font-medium">{ADDRESS.street}</p>
                  <p className="text-sm text-ink-500">
                    {ADDRESS.city}, {ADDRESS.region} ({ADDRESS.postalCode})
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <div className="text-sm">
                  <p><span className="font-medium">Lunes a viernes</span> · 9:00 a 18:00</p>
                  <p className="mt-1"><span className="font-medium">Sábados</span> · 9:00 a 13:00</p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-sm text-ink-500">Pedidos por WhatsApp</p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <a href={`mailto:${EMAIL}`} className="break-all font-medium underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-4 py-5">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
                  @{INSTAGRAM_USER}
                </a>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                src={MAPS_EMBED_URL}
                className="h-64 w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de Abuela Coca: ${ADDRESS.street}, ${ADDRESS.city}`}
              />
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              <Navigation className="h-4 w-4" /> Cómo llegar
            </a>
          </div>

          <div className="rounded-3xl bg-cream p-7 sm:p-10">
            <h3 className="text-2xl font-medium">Envianos tu consulta</h3>
            <p className="mt-2 text-sm text-ink-500">Completá los datos y se abre WhatsApp con el mensaje listo para enviar.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
