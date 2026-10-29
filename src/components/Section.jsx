export function Section({ id, overline, title, children }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-[60px] md:px-12 md:py-[84px] lg:py-[120px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
          {overline}
        </p>
        <h2 className="mt-3 font-display text-[30px] font-bold leading-[1.3] tracking-[-0.015em] text-ink">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
