import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="kontak" overline="Kontak" title="Mari Bekerja Sama">
      <div className="max-w-[680px]">
        <p className="text-[20px] leading-[1.75] text-body">
          Saya terbuka untuk peluang di bidang IT, pengelolaan data, dan
          pengembangan aplikasi web. Silakan hubungi saya melalui email atau
          LinkedIn — atau unduh CV saya untuk detail lengkapnya.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="border border-stone bg-stone px-6 py-3 text-[15px] font-semibold leading-none text-paper transition-colors hover:bg-stone-dark"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line-medium bg-transparent px-6 py-3 text-[15px] font-semibold leading-none text-stone transition-colors hover:bg-surface hover:text-stone-dark"
          >
            LinkedIn
          </a>
          <a
            href={profile.cvFile}
            download
            className="border border-line-medium bg-transparent px-6 py-3 text-[15px] font-semibold leading-none text-stone transition-colors hover:bg-surface hover:text-stone-dark"
          >
            Unduh CV (PDF)
          </a>
        </div>

        <p className="mt-8 text-[15px] leading-[1.7] text-body">
          Telepon / WhatsApp:{' '}
          <a
            href={`tel:${profile.phoneInternational}`}
            className="text-stone underline decoration-line-medium underline-offset-4 transition-colors hover:text-stone-dark"
          >
            {profile.phone}
          </a>{' '}
          — {profile.location}
        </p>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-9 text-[13px] leading-[1.5] text-faint md:flex-row md:items-center md:justify-between md:px-12">
        <p>
          © 2026 {profile.name} — {profile.role}
        </p>
        <p>{profile.location}, Indonesia</p>
      </div>
    </footer>
  )
}
