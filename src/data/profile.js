// All content on this site comes from Saddam's CV
// (CV_Saddamabdurrasyid.pdf, kept in /public). Edit this file to update the site.

export const profile = {
  name: 'Saddam Abdurrasyid Al-Subadi',
  shortName: 'Saddam Abdurrasyid',
  initials: 'SA',
  role: 'IT & Data Management',
  location: 'Pekanbaru, Riau',
  phone: '0823-8332-0066',
  phoneInternational: '+6282383320066',
  email: 'saddamsupriyanto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saddamabdurrasyid',
  linkedinLabel: 'linkedin.com/in/saddamabdurrasyid',
  cvFile: 'CV_Saddamabdurrasyid.pdf',
  gpa: '3,41',
  degree: 'S1 Teknik Informatika',
  university: 'UIN Sultan Syarif Kasim Riau',
  summary:
    'Lulusan S1 Teknik Informatika UIN Sultan Syarif Kasim Riau dengan IPK 3,41, ' +
    'memiliki pengalaman dalam pengembangan aplikasi web, pengelolaan basis data, ' +
    'dan sistem informasi. Menguasai SQL, Microsoft Excel, serta pemrograman dasar. ' +
    'Memiliki kemampuan analitis, pemecahan masalah, dan kolaborasi tim yang baik.',
  highlights: ['IPK 3,41', 'S1 Teknik Informatika', 'Web Developer Intern — Disdukcapil Pekanbaru'],
}

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Dinas Kependudukan dan Pencatatan Sipil Kota Pekanbaru',
    period: 'Februari — Maret 2025',
    description:
      'Mengembangkan dan menguji modul autentikasi beserta hak akses pada sistem ' +
      'manajemen aset berbasis web menggunakan PHP, CodeIgniter 4, Myth/Auth, dan ' +
      'MySQL guna memastikan keamanan, keandalan, serta pengelolaan data yang terstruktur.',
    tags: ['PHP', 'CodeIgniter 4', 'Myth/Auth', 'MySQL'],
  },
  {
    role: 'Brand Promoter',
    company: 'PT Gudang Garam Tbk',
    period: '6 bulan',
    description:
      'Melaksanakan kegiatan promosi operasional dan pelaporan aktivitas dengan ' +
      'memberikan edukasi produk serta membangun interaksi profesional bersama ' +
      'pelanggan untuk mendukung pencapaian target penjualan perusahaan.',
    tags: ['Promosi Operasional', 'Pelaporan', 'Relasi Pelanggan'],
  },
  {
    role: 'Barista',
    company: 'Cafe Pak Itam Reborn',
    period: '12 bulan',
    description:
      'Berkolaborasi dengan tim untuk memberikan pelayanan pelanggan yang prima ' +
      'melalui efisiensi proses pemesanan, ketelitian transaksi, dan penyajian ' +
      'produk yang sesuai dengan prosedur operasional standar.',
    tags: ['Kerja Tim', 'Pelayanan Pelanggan', 'Ketelitian Transaksi'],
  },
]

export const skills = [
  'Database Management & SQL',
  'Backend Application Development (PHP, CodeIgniter 4)',
  'Relational Database Management (MySQL)',
  'Web Application Development',
  'System Analysis & Requirements',
  'Software Testing & Debugging',
  'Data Preprocessing & Model Evaluation',
  'Microsoft Excel & Data Processing',
]

export const tools = ['PHP', 'CodeIgniter 4', 'Myth/Auth', 'MySQL', 'SQL', 'Microsoft Excel']

export const education = {
  university: 'UIN Sultan Syarif Kasim Riau',
  period: '2022 — 2026',
  degree: 'Sarjana Teknik Informatika',
  gpa: '3,41',
  focus:
    'Pengembangan Perangkat Lunak, Basis Data, Analisis Sistem, dan Kecerdasan Buatan.',
}

export const projects = [
  {
    title: 'Analisis Karier Pemain Sepak Bola Indonesia di Luar Negeri (2018–2026)',
    category: 'Data Analysis',
    period: 'Oktober 2026',
    description:
      'Mengumpulkan, memverifikasi, dan menganalisis perjalanan karier 38 pemain Indonesia ' +
      'yang bermain di luar negeri — membandingkan pemain yang berangkat dari liga domestik ' +
      '(Lokal) dengan pemain yang tumbuh di luar negeri (Diaspora) untuk menjawab satu ' +
      'pertanyaan: kenapa banyak pemain Indonesia yang abroad akhirnya pulang kampung?',
    stats: [
      { value: '38', label: 'Pemain dianalisis' },
      { value: '91', label: 'Masa bermain (spell) tercatat' },
      { value: '54,5%', label: 'Spell lokal berakhir pulang ke Indonesia' },
      { value: '12,3 vs 38,3', label: 'Rata-rata penampilan liga per spell: Lokal vs Diaspora' },
    ],
    findings: [
      'Pemain lokal rata-rata hanya tampil 12,3 kali per spell di liga luar negeri (median 7,5), berbanding 38,3 kali untuk pemain diaspora — dan 9 spell berakhir dengan 0 penampilan.',
      'Belanda adalah negara tujuan utama (24 dari 91 spell), sedangkan jalur abroad pemain lokal yang paling berhasil justru Asia: Asnawi Mangkualam membangun kariernya di Korea Selatan dan Thailand.',
      'Penyerang adalah posisi yang paling sulit menembus abroad (rata-rata 9,8 penampilan per spell); kiper dan bek adalah yang paling bertahan lama.',
    ],
    process: [
      'Pengumpulan data dari sumber publik (Wikipedia, Transfermarkt, FotMob)',
      'Verifikasi silang setiap baris data — 25+ koreksi ditemukan dan didokumentasikan',
      'Pembersihan & standarisasi data (satu baris = satu masa bermain di satu klub)',
      'Analisis dengan SQL & Python (Pandas), visualisasi dengan Matplotlib',
    ],
    tags: ['SQL', 'Python', 'Pandas', 'Matplotlib', 'Microsoft Excel', 'Data Cleaning', 'Data Visualization'],
    charts: [
      {
        src: 'grafik/grafik2_lokal_vs_diaspora.png',
        alt: 'Grafik perbandingan rata-rata penampilan liga per spell dan persentase spell yang berakhir pulang antara pemain lokal dan diaspora',
        caption: 'Perbandingan inti: pemain lokal vs diaspora',
      },
      {
        src: 'grafik/grafik1_negara_tujuan.png',
        alt: 'Grafik batang negara tujuan pemain Indonesia di luar negeri, Belanda terbanyak dengan 24 spell',
        caption: 'Negara tujuan terbanyak: Belanda (24 spell)',
      },
      {
        src: 'grafik/grafik3_timeline.png',
        alt: 'Grafik garis jumlah pemain abroad yang aktif per tahun 2018 sampai 2026 untuk pemain lokal dan diaspora',
        caption: 'Dua gelombang berlawanan arah: lokal mereda setelah 2022, diaspora memuncak 2023–2025',
      },
      {
        src: 'grafik/grafik4_distribusi_penampilan.png',
        alt: 'Grafik distribusi jumlah penampilan liga per spell untuk pemain lokal dan diaspora',
        caption: 'Distribusi penampilan: mayoritas spell lokal berakhir di bawah 10 penampilan',
      },
    ],
  },
  {
    title: 'Analisis Sentimen Komentar Threads: 2 Tahun Prabowo-Gibran & Demo',
    category: 'Data Analysis — Social Media',
    period: 'Oktober 2026',
    description:
      'Mengumpulkan 569 komentar publik dari thread-thread Threads bertema dua tahun pemerintahan ' +
      'Prabowo-Gibran dan aksi demo, lalu mengukur nada sentimennya (positif, negatif, netral) untuk ' +
      'melihat bagaimana warganet sebenarnya berbicara di balik postingan yang viral.',
    stats: [
      { value: '569', label: 'Komentar publik dianalisis (dari 1.703 yang tersedia)' },
      { value: '7', label: 'Thread induk bertema 2 tahun Prabowo-Gibran & demo' },
      { value: '69,8%', label: 'Komentar bernada netral — mayoritas ternyata tidak emosional' },
      { value: '2,4 : 1', label: 'Negatif vs positif di antara komentar yang bernada jelas' },
    ],
    findings: [
      'Mayoritas komentar (69,8%) bernada netral — percakapan di thread viral ternyata tidak seemosional kesan yang ditimbulkan postingan induknya; komentar negatif 21,3% dan positif 9,0%.',
      'Nada thread induk menular: thread dengan postingan paling keras menghasilkan proporsi komentar negatif tertinggi (±29%), sedangkan satu-satunya thread bernada pro-pemerintah hanya menarik 5 komentar.',
      'Nada positif tidak sama dengan dukungan ke pemerintah — komentar positif dengan like terbanyak justru berisi semangat mendukung aksi demo. Analisis ini mengukur nada bahasa, bukan keberpihakan politik.',
    ],
    process: [
      'Pengumpulan data langsung dari Threads memakai akun sendiri (@portofoliosaddam) — data mentah JSON disimpan & didokumentasikan asal-usulnya (data provenance + checksum SHA-256)',
      'Pembersihan & deduplikasi 569 komentar berdasarkan ID komentar',
      'Pelabelan sentimen dengan leksikon Bahasa Indonesia: normalisasi bahasa gaul (udh, jgn, gua) + penanganan negasi, terdokumentasi sebagai skrip Python yang bisa dijalankan ulang',
      'Visualisasi dengan Matplotlib + penulisan insight beserta keterbatasan analisisnya (bias sampel & sarkasme)',
    ],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Analisis Sentimen', 'Leksikon Bahasa Indonesia', 'Threads', 'Data Provenance'],
    charts: [
      {
        src: 'grafik-sentimen/grafik1_distribusi_sentimen.png',
        alt: 'Grafik batang distribusi sentimen 569 komentar Threads: netral 397, negatif 121, positif 51',
        caption: 'Distribusi sentimen: mayoritas komentar bernada netral',
      },
      {
        src: 'grafik-sentimen/grafik2_sentimen_per_thread.png',
        alt: 'Grafik batang bertumpuk sentimen komentar pada tiga thread induk terbesar',
        caption: 'Sentimen per thread induk: nada postingan menular ke komentarnya',
      },
      {
        src: 'grafik-sentimen/grafik3_kata_khas.png',
        alt: 'Grafik kata yang paling sering muncul di komentar negatif dan positif',
        caption: 'Kata khas tiap kubu nada — nama Anies menonjol di komentar positif, MBG di komentar negatif',
      },
    ],
  },
]
