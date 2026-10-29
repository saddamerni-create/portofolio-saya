# Web Portofolio — Saddam Abdurrasyid Al-Subadi

Situs portofolio pribadi Saddam Abdurrasyid Al-Subadi (IT & Data Management),
dibangun dengan React + Vite + Tailwind CSS v4. Seluruh konten berasal dari
`CV_Saddamabdurrasyid.pdf` dan desain mengikuti sistem desain **ThoughtStream**
(warm stone, Libre Baskerville + Inter, tepi tajam, flat tanpa bayangan).

## Menjalankan

Prasyarat: Node.js LTS (https://nodejs.org) — cek dengan `node --version`.

```bash
npm install     # install dependensi (sekali saja)
npm run dev     # server pengembangan di http://localhost:5173
npm run build   # build produksi ke folder dist/
npm run preview # pratinjau hasil build
```

## Struktur

```
public/
  CV_Saddamabdurrasyid.pdf   CV asli, dipakai tombol "Unduh CV"
src/
  data/profile.js            Semua data CV (nama, pengalaman, keahlian, pendidikan)
  components/
    Navbar.jsx               Navigasi atas
    Hero.jsx                 Pembuka + sorotan
    About.jsx                Profil + kartu kontak
    Experience.jsx           Pengalaman kerja
    Skills.jsx               Keahlian + tools
    Education.jsx            Riwayat pendidikan
    Contact.jsx              Kontak + footer
    Section.jsx              Kerangka section bersama
  App.jsx                    Komposisi halaman
  index.css                  Token desain ThoughtStream (Tailwind @theme)
```

Untuk mengubah isi situs, cukup edit `src/data/profile.js`.
