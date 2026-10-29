import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="beranda">
      <div className="mx-auto max-w-6xl px-6 py-[60px] md:px-12 md:py-[84px] lg:py-[120px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-stone">
          Portofolio — {profile.location}
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
          {profile.name}
        </h1>

        <p className="mt-4 font-display text-[22px] italic leading-[1.4] text-stone-dark">
          {profile.role}
        </p>

        <p className="mt-8 max-w-[680px] text-[20px] leading-[1.75] text-body">
          {profile.summary}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#pengalaman"
            className="border border-stone bg-stone px-6 py-3 text-[15px] font-semibold leading-none text-paper transition-colors hover:bg-stone-dark"
          >
            Lihat Pengalaman
          </a>
          <a
            href={profile.cvFile}
            download
            className="border border-line-medium bg-transparent px-6 py-3 text-[15px] font-semibold leading-none text-stone transition-colors hover:bg-surface hover:text-stone-dark"
          >
            Unduh CV (PDF)
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3" aria-label="Sorotan">
          {profile.highlights.map((item) => (
            <li
              key={item}
              className="border border-line-medium px-[14px] py-[6px] text-[13px] font-medium text-body"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
