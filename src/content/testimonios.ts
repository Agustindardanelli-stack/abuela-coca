/**
 * Testimonios REALES de clientes.
 *
 * Cargá acá solo opiniones que existan de verdad (comentarios de Instagram, mensajes de WhatsApp
 * o reseñas de Google) y pedile permiso a la persona para publicar su nombre.
 * Si la lista está vacía, la web muestra una invitación a dejar una opinión en lugar del carrusel.
 *
 * Ejemplo:
 * {
 *   name: 'Nombre Apellido',
 *   location: 'Río Cuarto',
 *   text: 'Lo que escribió la persona, tal cual.',
 *   product: 'Torta de chocolate',
 *   source: 'Instagram',
 * },
 */
export type Testimonio = {
  name: string
  location?: string
  text: string
  product?: string
  source?: 'Instagram' | 'WhatsApp' | 'Google'
}

export const testimonios: Testimonio[] = []
