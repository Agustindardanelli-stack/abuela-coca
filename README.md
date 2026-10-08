# 🧁 Abuela Coca · Landing page

Sitio web de **Abuela Coca**, emprendimiento de repostería y premezclas **sin gluten y sin lactosa** de Río Cuarto, Córdoba.

🔗 https://abuela-coca.vercel.app · Instagram [@abuelacocasinglutenlactosa](https://www.instagram.com/abuelacocasinglutenlactosa/)

## Qué resuelve

Los clientes del emprendimiento llegaban solo por Instagram. La landing les da un lugar para ver productos y recetas y **hacer el pedido por WhatsApp en un clic**. Además está optimizada para aparecer en Google en búsquedas como *"sin gluten Río Cuarto"*.

## Funcionalidades

- Catálogo de productos y premezclas, más una sección de recetas
- **Botón flotante de WhatsApp** siempre visible
- **Formulario que arma el pedido** (nombre, tipo de consulta y mensaje) y lo abre en WhatsApp listo para enviar, sin necesidad de servidor de correo
- **SEO local:** metadatos, datos estructurados `Bakery` (schema.org) con dirección y horarios, `sitemap.xml`, `robots.txt` y URL canónica
- **Imagen para compartir generada con código** (`opengraph-image.tsx`): el link se ve con vista previa en WhatsApp e Instagram
- Mapa de Google con la ubicación y link "Cómo llegar"
- Sección de opiniones alimentada con **testimonios reales** (`src/content/testimonios.ts`); si no hay cargados, muestra una invitación a dejar una opinión
- Vercel Analytics y Speed Insights
- Encabezados de seguridad (`X-Frame-Options`, `Referrer-Policy`, etc.)

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide icons · Vercel

## Correr en local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Configuración

Copiá `.env.example` a `.env.local` (o cargá las variables en Vercel → Settings → Environment Variables):

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública. Por defecto `https://abuela-coca.vercel.app`; cambiarla si se conecta un dominio propio. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp del negocio con código de país (ej. `5493584123456`). Con el número, los botones abren el chat con el mensaje ya escrito. |

Los datos del negocio (dirección, Instagram, WhatsApp) están centralizados en `src/lib/site.ts`.

## Estructura

```
src/
├── app/
│   ├── layout.tsx            metadatos, schema.org y botón de WhatsApp
│   ├── page.tsx
│   ├── opengraph-image.tsx   imagen para compartir
│   ├── sitemap.ts · robots.ts
├── components/               Header, Hero, Features, Products, Recetas,
│                             Testimonials, Contact, ContactForm, Footer, WhatsAppButton
├── content/testimonios.ts    opiniones reales de clientes
└── lib/site.ts               datos del negocio
```

---

Desarrollado por [Agustín Dardanelli](https://github.com/Agustindardanelli-stack) · Dardanelli Software
