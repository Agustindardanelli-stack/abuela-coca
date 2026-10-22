const RECETAS = [
  { premezcla: 'Premezcla Universal', ideas: ['Pan de molde', 'Tartas', 'Facturas', 'Muffins', 'Tortas simples'] },
  { premezcla: 'Premezcla Torta Matera', ideas: ['Torta matera', 'Budín', 'Muffins'] },
  { premezcla: 'Premezcla Bizcochuelo Base', ideas: ['Torta de cumpleaños', 'Bizcochuelo relleno', 'Cupcakes'] },
  { premezcla: 'Premezcla Bizcochuelo de Chocolate', ideas: ['Torta de chocolate', 'Selva negra', 'Cupcakes'] },
  { premezcla: 'Premezcla Brownie', ideas: ['Brownies', 'Alfajores de brownie', 'Base para tortas'] },
]

export default function Recetas() {
  return (
    <section id="recetas" className="section">
      <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Recetas</p>
          <h2 className="section-title">Una premezcla, muchas recetas</h2>
          <p className="lead">
            Cada premezcla es la base para un montón de preparaciones. Estas son algunas ideas para cocinar en casa, sin gluten y
            sin lactosa.
          </p>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {RECETAS.map((r) => (
            <li key={r.premezcla} className="grid gap-3 py-7 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
              <h3 className="text-xl font-medium sm:text-2xl">{r.premezcla}</h3>
              <ul className="flex flex-wrap content-start gap-2">
                {r.ideas.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
