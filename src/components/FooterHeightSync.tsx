'use client'

import { useEffect } from 'react'

/**
 * La cortina final (ver .curtain-body / .curtain-footer en globals.css) necesita
 * conocer el alto real del footer para que el contenido lo revele sin tapar texto
 * ni dejar un hueco. Lo mide y lo escribe en --footer-h.
 */
export default function FooterHeightSync() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('.curtain-footer')
    if (!footer) return

    const sync = () => document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`)
    sync()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', sync)
      return () => window.removeEventListener('resize', sync)
    }
    const ro = new ResizeObserver(sync)
    ro.observe(footer)
    return () => ro.disconnect()
  }, [])

  return null
}
