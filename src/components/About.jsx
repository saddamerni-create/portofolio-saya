import { profile } from '../data/profile'
import { Section } from './Section'

const facts = [
  { label: 'Nama', value: profile.name },
  { label: 'Bidang', value: profile.role },
  { label: 'Lokasi', value: profile.location },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Telepon', value: profile.phone, href: `tel:${profile.phoneInternational}` },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
]

export function About() {
  return (
    <Section id="profil" overline="Profil" title="Tentang Saya">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,680px)_1fr] lg:gap-[60px]">
        <p className="text-[17px] leading-[1.8] text-body">
          {profile.summary} Fokus saya ada pada bagaimana data dikelola dengan rapi
          dan bagaimana sistem informasi membuat pekerjaan menjadi lebih aman,
          terstruktur, dan mudah diandalkan — dari perancangan basis data,
          pengembangan backend, sampai pengujian aplikasi web.
        </p>

        <div className="border border-line bg-paper px-9 py-9">
          <dl>
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={
                  'flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between ' +
                  (index === 0 ? 'pt-0 ' : '') +
                  (index === facts.length - 1 ? 'pb-0' : 'border-b border-line')
                }
              >
                <dt className="text-[13px] font-semibold text-body">{fact.label}</dt>
                <dd className="text-[15px] text-ink">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target={fact.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-stone underline decoration-line-medium underline-offset-4 transition-colors hover:text-stone-dark"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
