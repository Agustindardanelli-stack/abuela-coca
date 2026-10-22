/** Logotipo tipográfico de Abuela Coca. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display text-[1.6rem] font-semibold italic tracking-tight ${light ? 'text-cream' : 'text-ink'}`}>
        Abuela Coca
      </span>
      <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? 'text-cream/60' : 'text-ink-500'}`}>
        Sin gluten · Sin lactosa
      </span>
    </span>
  )
}
