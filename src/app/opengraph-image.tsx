import { ImageResponse } from 'next/og'

// Imagen que aparece al compartir el link en WhatsApp, Instagram o Facebook.
export const alt = 'Abuela Coca - Dulces sin gluten y sin lactosa en Río Cuarto'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 88px',
          background: 'linear-gradient(135deg, #fef7f0 0%, #fbe6d1 55%, #f4c291 100%)',
          color: '#4a2308',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(210, 105, 30, 0.18)',
            display: 'flex',
          }}
        />
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#d2691e', letterSpacing: 2 }}>
          RÍO CUARTO · CÓRDOBA
        </div>
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 800, marginTop: 12, lineHeight: 1 }}>Abuela Coca</div>
        <div style={{ display: 'flex', fontSize: 46, fontWeight: 600, marginTop: 28, color: '#6b3410' }}>
          Dulces y premezclas sin gluten y sin lactosa
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          {['Sin TACC', 'Sin lactosa', 'Artesanal'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                padding: '12px 28px',
                borderRadius: 9999,
                background: '#8b4513',
                color: '#fef7f0',
                fontSize: 32,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
