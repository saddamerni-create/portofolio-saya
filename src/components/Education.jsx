import { education } from '../data/profile'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="pendidikan" overline="Riwayat Pendidikan" title="Pendidikan">
      <div className="border border-line-medium bg-surface px-9 py-9 md:px-12 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[680px]">
            <h3 className="font-display text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-ink">
              {education.degree}
            </h3>
            <p className="mt-1 text-[15px] font-semibold text-stone">
              {education.university}
            </p>
            <p className="mt-4 text-[17px] leading-[1.8] text-body">
              Fokus pembelajaran: {education.focus}
            </p>
          </div>

          <div className="shrink-0 md:text-right">
            <p className="text-[13px] font-medium text-faint">{education.period}</p>
            <p className="mt-2 font-display text-[30px] font-bold leading-[1.3] text-ink">
              {education.gpa}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
              Indeks Prestasi Kumulatif
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
