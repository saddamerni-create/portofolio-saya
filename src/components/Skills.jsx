import { skills, tools } from '../data/profile'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="keahlian" overline="Keahlian" title="Yang Saya Kuasai">
      <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-baseline gap-4 bg-paper px-9 py-6 text-[15px] leading-[1.7] text-ink transition-colors hover:bg-surface"
          >
            <span aria-hidden="true" className="h-2 w-2 shrink-0 translate-y-[-1px] rounded-full bg-sage" />
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <p className="mr-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
          Tools &amp; Teknologi
        </p>
        {tools.map((tool) => (
          <span
            key={tool}
            className="border border-stone bg-stone px-[14px] py-[6px] text-[13px] font-medium text-paper"
          >
            {tool}
          </span>
        ))}
      </div>
    </Section>
  )
}
