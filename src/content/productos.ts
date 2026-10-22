/**
 * Catálogo de productos (fuente: catálogo de WhatsApp Business de Abuela Coca).
 * Editá acá nombres, descripciones, precios y fotos.
 *
 * - precio: en pesos, sin puntos (ej. 3751). Poné 0 para mostrar "Consultar precio".
 * - foto: imagen en public/productos/ (ej. '/productos/brownie.jpg'). Sin foto se muestra el ícono.
 * - destacado: true muestra la etiqueta "Más pedido" (usarla solo con los que realmente más se venden).
 */
export type Categoria = 'premezclas' | 'pasteleria' | 'salados'
export type Etiqueta = 'Sin TACC' | 'Sin lactosa' | 'Apto APLV' | 'Sin huevo'

export type Producto = {
  id: string
  nombre: string
  categoria: Categoria
  descripcion: string
  precio: number
  foto?: string
  icono: string
  etiquetas: Etiqueta[]
  destacado?: boolean
}

export const categorias: { id: 'todos' | Categoria; nombre: string; icono: string }[] = [
  { id: 'todos', nombre: 'Todos', icono: '🌾' },
  { id: 'premezclas', nombre: 'Premezclas', icono: '🥄' },
  { id: 'pasteleria', nombre: 'Pastelería', icono: '🧁' },
  { id: 'salados', nombre: 'Salados', icono: '🍕' },
]

const BASE: Etiqueta[] = ['Sin TACC', 'Sin lactosa', 'Apto APLV']

export const productos: Producto[] = [
  // Premezclas
  {
    id: 'premezcla-brownie',
    nombre: 'Premezcla Brownie x 500 g',
    categoria: 'premezclas',
    descripcion: 'Premezcla instantánea para preparar brownie.',
    precio: 3751,
    foto: '/productos/premezcla-brownie.jpg',
    icono: '🍫',
    etiquetas: BASE,
  },
  {
    id: 'torta-matera',
    nombre: 'Premezcla Torta Matera x 500 g',
    categoria: 'premezclas',
    descripcion: 'Premezcla instantánea para preparar torta matera.',
    precio: 2932,
    foto: '/productos/torta-matera.jpg',
    icono: '🧉',
    etiquetas: BASE,
  },
  {
    id: 'universal-integral',
    nombre: 'Premezcla Universal Integral x 500 g',
    categoria: 'premezclas',
    descripcion: 'Premezcla universal integral, base para panes, tortas y masas.',
    precio: 2802,
    foto: '/productos/universal-integral.jpg',
    icono: '🌾',
    etiquetas: BASE,
  },
  {
    id: 'bizcochuelo-base',
    nombre: 'Premezcla Bizcochuelo Base x 350 g',
    categoria: 'premezclas',
    descripcion: 'Premezcla de bizcochuelo base para saborizar a gusto.',
    precio: 1971,
    foto: '/productos/bizcochuelo-base.jpg',
    icono: '🎂',
    etiquetas: BASE,
  },
  {
    id: 'bizcochuelo-chocolate',
    nombre: 'Premezcla Bizcochuelo de Chocolate x 350 g',
    categoria: 'premezclas',
    descripcion: 'Premezcla instantánea para preparar bizcochuelo de chocolate.',
    precio: 2274,
    foto: '/productos/bizcochuelo-chocolate.jpg',
    icono: '🍰',
    etiquetas: BASE,
  },
  {
    id: 'universal-5kg',
    nombre: 'Premezcla Universal x 5 kg',
    categoria: 'premezclas',
    descripcion: 'Premezcla universal base en presentación de 5 kg.',
    precio: 19365,
    foto: '/productos/universal-5kg.jpg',
    icono: '📦',
    etiquetas: BASE,
  },
  // Pastelería
  {
    id: 'brownie',
    nombre: 'Brownie',
    categoria: 'pasteleria',
    descripcion: 'Porción cuadrada de brownie a base de cacao puro natural.',
    precio: 1855,
    foto: '/productos/brownie.jpg',
    icono: '🍫',
    etiquetas: BASE,
  },
  {
    id: 'tarta-coco',
    nombre: 'Tarta de coco con dulce de leche',
    categoria: 'pasteleria',
    descripcion: 'Porción redonda de tarta de coco con dulce de leche.',
    precio: 1790,
    foto: '/productos/tarta-coco.jpg',
    icono: '🥥',
    etiquetas: ['Sin TACC'],
  },
  {
    id: 'alfajor-brownie',
    nombre: 'Alfajor Brownie',
    categoria: 'pasteleria',
    descripcion: 'Alfajor de brownie relleno con dulce de leche.',
    precio: 3396,
    foto: '/productos/alfajor-brownie.jpg',
    icono: '🍪',
    etiquetas: ['Sin TACC'],
  },
  {
    id: 'tarta-cabsha',
    nombre: 'Tarta Cabsha',
    categoria: 'pasteleria',
    descripcion: 'Tarta cabsha rellena con dulce de leche.',
    precio: 2728,
    foto: '/productos/tarta-cabsha.jpg',
    icono: '🥧',
    etiquetas: ['Sin TACC'],
  },
  // Salados
  {
    id: 'prepizza',
    nombre: 'Prepizza 4 porciones',
    categoria: 'salados',
    descripcion: 'Prepizza de 4 porciones con trigo sarraceno.',
    precio: 2855,
    foto: '/productos/prepizza.jpg',
    icono: '🍕',
    etiquetas: ['Sin TACC', 'Sin lactosa', 'Sin huevo', 'Apto APLV'],
  },
  {
    id: 'noquis-arroz',
    nombre: 'Ñoquis de arroz x 250 g',
    categoria: 'salados',
    descripcion: 'Ñoquis a base de sémola de arroz con trigo sarraceno integral.',
    precio: 3098,
    foto: '/productos/noquis-arroz.jpg',
    icono: '🍝',
    etiquetas: BASE,
  },
  {
    id: 'hamburguesa-arroz',
    nombre: 'Hamburguesa de Arroz x 2 unidades',
    categoria: 'salados',
    descripcion: 'Hamburguesa a base de sémola de arroz.',
    precio: 2537,
    foto: '/productos/hamburguesa-arroz.jpg',
    icono: '🍔',
    etiquetas: BASE,
  },
  {
    id: 'bizcochito-salado',
    nombre: 'Bizcochito salado x 150 g',
    categoria: 'salados',
    descripcion: 'Bizcochitos salados en paquete de 150 g.',
    precio: 2132,
    foto: '/productos/bizcochito-salado.jpg',
    icono: '🥨',
    etiquetas: BASE,
  },
]

const ars = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })
export const formatPrecio = (n: number) => (n > 0 ? ars.format(n) : 'Consultar precio')
