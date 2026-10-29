import { experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="pengalaman" overline="Pengalaman Kerja" title="Perjalanan Karier">
      <div>
        {experience.map((job, index) => (
          <article
            key={job.role}
            className={
              'grid gap-4 py-9 md:grid-cols-[240px_1fr] md:gap-12 ' +
              (index === 0 ? 'pt-0 ' : '') +
              (index === experience.length - 1 ? 'pb-0' : 'border-b border-line')
            }
          >
            <p className="text-[13px] font-medium leading-[1.5] text-faint">
              {job.period}
            </p>

            <div className="max-w-[680px]">
              <h3 className="font-display text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-stone">{job.company}</p>
              <p className="mt-4 text-[17px] leading-[1.8] text-body">{job.description}</p>

              <ul className="mt-5 flex flex-wrap gap-3" aria-label="Teknologi dan fokus">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-line-medium px-[14px] py-[6px] text-[13px] font-medium text-body"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
