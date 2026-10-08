'use client'

import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { canPrefillWhatsApp, whatsappUrl } from '@/lib/site'

const SUBJECTS: Record<string, string> = {
  pedido: 'Hacer un pedido',
  mayorista: 'Consulta mayorista',
  personalizado: 'Producto personalizado',
  general: 'Consulta general',
}

const field =
  'w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors'

/**
 * El sitio no tiene servidor de correo: el formulario arma el mensaje y lo abre en WhatsApp,
 * que es por donde el negocio responde los pedidos.
 */
export default function ContactForm() {
  const [copied, setCopied] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const subject = SUBJECTS[String(fd.get('subject'))] ?? 'Consulta'
    const message = String(fd.get('message') ?? '').trim()
    const text = `¡Hola Abuela Coca! Soy ${name}.\n*${subject}*\n${message}`

    // Sin número cargado, el link corto no permite texto: copiamos el mensaje para que lo peguen.
    if (!canPrefillWhatsApp) {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
      } catch {
        /* sin permiso de portapapeles: igual abrimos WhatsApp */
      }
    }
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary-700">
          Tu nombre
        </label>
        <input type="text" id="name" name="name" required maxLength={60} autoComplete="name" className={field} placeholder="Nombre y apellido" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-primary-700">
          ¿Qué necesitás?
        </label>
        <select id="subject" name="subject" required defaultValue="" className={field}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {Object.entries(SUBJECTS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary-700">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={800}
          className={`${field} resize-none`}
          placeholder="Contanos qué productos querés, cantidades y para cuándo..."
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg"
      >
        <MessageCircle className="h-5 w-5" /> Enviar por WhatsApp
      </button>

      {copied && (
        <p role="status" className="flex items-center justify-center gap-1.5 text-sm text-green-700">
          <Check className="h-4 w-4" /> Copiamos tu mensaje: pegalo en el chat de WhatsApp.
        </p>
      )}
    </form>
  )
}
