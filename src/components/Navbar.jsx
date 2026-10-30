import { profile } from '../data/profile'

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#pendidikan', label: 'Pendidikan' },
  { href: '#kontak', label: 'Kontak' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-12">
        <a href="#beranda" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone font-display text-[13px] font-bold text-paper">
            {profile.initials}
          </span>
          <span className="font-display text-[17px] font-bold text-ink">
            {profile.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-body transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="border border-stone bg-stone px-6 py-3 text-[15px] font-semibold leading-none text-paper transition-colors hover:bg-stone-dark"
        >
          Hubungi Saya
        </a>
      </div>
    </header>
  )
}
