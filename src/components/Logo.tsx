/** Logotipo tipográfico de Abuela Coca. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display text-[1.6rem] italic tracking-tight ${light ? 'text-paper' : 'text-wine'}`}>
        Abuela Coca
      </span>
      <span className={`mt-1 text-[0.8125rem] ${light ? 'text-paper/55' : 'text-wine-soft'}`}>Sin gluten · Sin lactosa</span>
    </span>
  )
}
