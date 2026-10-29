import { projects } from '../data/profile'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="proyek" overline="Proyek Data" title="Proyek Analisis Data">
      <div>
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={index === 0 ? '' : 'mt-24 border-t border-line pt-20'}
          >
            <p className="text-[13px] font-medium leading-[1.5] text-faint">
              {project.category} — {project.period}
            </p>
            <h3 className="mt-2 max-w-[760px] font-display text-[24px] font-normal leading-[1.4] tracking-[-0.01em] text-ink">
              {project.title}
            </h3>
            <p className="mt-4 max-w-[680px] text-[17px] leading-[1.8] text-body">
              {project.description}
            </p>

            <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-paper px-7 py-6">
                  <dt className="order-2 mt-2 block text-[13px] leading-[1.6] text-faint">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-[28px] font-bold leading-[1.2] text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <h4 className="mt-12 text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
              Temuan Utama
            </h4>
            <ul className="mt-5 max-w-[760px]">
              {project.findings.map((finding) => (
                <li
                  key={finding}
                  className="flex items-baseline gap-4 border-b border-line py-4 text-[15px] leading-[1.7] text-ink last:border-b-0"
                >
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 translate-y-[-1px] rounded-full bg-sage" />
                  {finding}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              {project.charts.map((chart) => (
                <figure key={chart.src}>
                  <img
                    src={chart.src}
                    alt={chart.alt}
                    className="w-full border border-line"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-[13px] leading-[1.6] text-faint">
                    {chart.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <h4 className="mt-12 text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
              Proses Pengerjaan
            </h4>
            <ol className="mt-5 max-w-[760px] list-decimal pl-5">
              {project.process.map((step) => (
                <li key={step} className="py-1 text-[15px] leading-[1.7] text-body">
                  {step}
                </li>
              ))}
            </ol>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tools dan teknologi proyek">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line-medium px-[14px] py-[6px] text-[13px] font-medium text-body"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
