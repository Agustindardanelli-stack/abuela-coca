/**
 * Datos del negocio en un solo lugar.
 * Para cambiar el dominio o el WhatsApp, editá este archivo (o las variables de entorno en Vercel).
 */

/** URL pública del sitio. Si conectan un dominio propio, cargarlo en NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://abuela-coca.vercel.app').replace(/\/$/, '')

export const INSTAGRAM_USER = 'abuelacocasinglutenlactosa'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`

/**
 * Número de WhatsApp con código de país, solo dígitos (ej: 5493584123456).
 * Con el número cargado, los botones abren WhatsApp con el mensaje ya escrito.
 * Sin número, se usa el link corto actual.
 */
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const WHATSAPP_SHORT_LINK = 'https://wa.link/zoxx5'

export const DEFAULT_ORDER_TEXT = '¡Hola Abuela Coca! Quiero hacer un pedido 😊'

export function whatsappUrl(text: string = DEFAULT_ORDER_TEXT): string {
  if (!WHATSAPP_NUMBER) return WHATSAPP_SHORT_LINK
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_URL = whatsappUrl()
export const canPrefillWhatsApp = Boolean(WHATSAPP_NUMBER)

export const ADDRESS = {
  street: 'Luis Reinaudi 1874',
  city: 'Río Cuarto',
  region: 'Córdoba',
  postalCode: '5800',
}

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region}, Argentina`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region}`,
)}`
