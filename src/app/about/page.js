import Link from "next/link";

export const metadata = {
  title: "Tentang Kami — SMKN 26 Jakarta",
  description:
    "Profil lengkap SMK Negeri 26 Jakarta (STM Pembangunan Jakarta) — sejarah, visi misi, jurusan, fasilitas, ekstrakurikuler, dan lokasi sekolah.",
};

export default function AboutPage() {
  return (
    <>
      {/* ========== HEADER SECTION WITH MODERN GRID TEXTURE ========== */}
      <section className="relative overflow-hidden bg-[#0D1A63] py-16 sm:py-24">
        {/* Modern Grid Texture */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#2845D6]/30 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-[#F68048]/40 bg-[#F68048]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FFA175] backdrop-blur-md">
            Profil Sekolah
          </span>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Tentang SMKN 26 Jakarta
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Mengenal lebih dekat sejarah, visi misi, program keahlian, dan
            fasilitas SMK Negeri 26 Jakarta. Sekolah kejuruan unggulan di
            Jakarta Timur.
          </p>
        </div>
      </section>

      {/* ========== SEJARAH SINGKAT ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Ilustrasi Timeline */}
            <div className="relative rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-lg sm:p-10">
              <h3 className="mb-6 text-lg font-bold text-[#0D1A63]">
                Jejak Sejarah
              </h3>
              <div className="space-y-6">
                {[
                  {
                    tahun: "1970",
                    badge: "70",
                    judul: "Berdirinya STM Pembangunan Jakarta",
                    desk: "Didirikan sebagai salah satu dari delapan STM Pembangunan di Indonesia dengan program pendidikan 4 tahun, bertujuan mencetak tenaga teknik menengah yang siap kerja.",
                  },
                  {
                    tahun: "1997",
                    badge: "97",
                    judul: "Perubahan Nama Menjadi SMKN 26 Jakarta",
                    desk: "Seiring kebijakan nasional, STM Pembangunan Jakarta berubah nama menjadi SMK Negeri 26 Jakarta dengan kurikulum vokasi kejuruan yang terus diselaraskan.",
                  },
                  {
                    tahun: "2010-an",
                    badge: "10",
                    judul: "Modernisasi Fasilitas & Kurikulum",
                    desk: "Pembaharuan bengkel, laboratorium, dan penerapan kurikulum berbasis kompetensi industri serta program link and match dengan perusahaan.",
                  },
                  {
                    tahun: "Sekarang",
                    badge: "•",
                    judul: "SMK Unggulan Jakarta Timur",
                    desk: "Menyelenggarakan 6 konsentrasi keahlian dengan lulusan yang terserap di berbagai perusahaan nasional dan multinasional.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A2CA3] text-xs font-bold text-white shadow-md">
                        {item.badge}
                      </div>
                      {idx < 3 && (
                        <div className="mt-1 h-full w-0.5 bg-gradient-to-b from-[#1A2CA3]/40 to-transparent" />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-bold text-[#F68048]">
                        {item.tahun}
                      </p>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.judul}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.desk}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teks Profil */}
            <div>
              <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                Sejarah Sekolah
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl">
                Dari STM Pembangunan ke{" "}
                <span className="text-[#F68048]">SMKN 26 Jakarta</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  SMK Negeri 26 Jakarta memiliki akar sejarah yang kuat sebagai
                  salah satu STM Pembangunan yang didirikan oleh pemerintah
                  Indonesia pada tahun 1970. STM Pembangunan Jakarta merupakan
                  bagian dari program nasional untuk mencetak tenaga teknik
                  menengah berkualitas guna mendukung pembangunan industri
                  nasional.
                </p>
                <p>
                  Berbeda dengan STM biasa yang menerapkan masa studi 3 tahun,
                  STM Pembangunan menyelenggarakan pendidikan selama 4 tahun
                  dengan kurikulum yang lebih padat dan berorientasi pada praktik
                  industri. Para lulusannya dikenal memiliki kompetensi teknis
                  yang sangat baik dan banyak terserap di perusahaan-perusahaan
                  besar nasional maupun multinasional.
                </p>
                <p>
                  Pada tahun 1997, seiring dengan kebijakan nasional untuk
                  menyeragamkan nomenklatur sekolah menengah kejuruan, STM
                  Pembangunan Jakarta resmi berubah nama menjadi SMK Negeri 26
                  Jakarta. Meskipun nama berubah, semangat dan tradisi
                  keunggulan pendidikan teknik tetap dijaga hingga saat ini.
                </p>
                <p>
                  Saat ini SMKN 26 Jakarta berlokasi di Jl. Balai Pustaka Baru I
                  No.2, Rawamangun, Jakarta Timur, dengan luas lahan yang cukup
                  untuk menampung berbagai bengkel, laboratorium, dan fasilitas
                  pendukung kegiatan belajar mengajar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VISI & MISI ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-[#F68048]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D85F27]">
              Arah & Tujuan
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
              Visi dan Misi
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Visi */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md sm:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D1A63] text-[#F68048] shadow-md">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-black text-[#0D1A63]">
                Visi
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Menjadi SMK teknologi unggul yang menghasilkan lulusan berkarakter, kompeten, inovatif, dan berdaya saing global.
              </p>
            </div>

            {/* Misi */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md sm:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F68048] text-[#0D1A63] shadow-md">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-black text-[#0D1A63]">
                Misi
              </h3>
              <ol className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {[
                  "Menanamkan nilai-nilai keimanan dan ketakwaan terhadap Tuhan Yang Maha Esa, kewargaan, penalaran kritis, kreativitas, kemandirian, kolaborasi, kesehatan, serta komunikasi.",
                  "Mengembangkan kompetensi keahlian sesuai kebutuhan dunia usaha/dunia industri (DUDI) melalui teaching factory, magang, guru tamu, dan sertifikasi.",
                  "Menyelenggarakan pembelajaran mendalam yang berpusat pada murid untuk mengembangkan kemampuan berpikir kritis, kreatif, inovatif, kolaboratif, dan komunikatif.",
                  "Mengintegrasikan teknologi digital dan proyek nyata dalam proses pembelajaran.",
                  "Meningkatkan profesionalisme pendidik dan tenaga kependidikan melalui pendidikan/pelatihan, inovasi pembelajaran dan penguasaan teknologi terkini.",
                  "Membangun kemitraan strategis dengan dunia usaha/dunia industri (DUDI), perguruan tinggi, dan masyarakat untuk mendukung pembelajaran kontekstual dan berkelanjutan.",
                  "Meningkatkan kemampuan berbahasa asing murid guna mendukung lulusan yang berdaya saing global.",
                  "Menyediakan sarana dan prasarana pembelajaran yang sesuai standar pendidikan.",
                ].map((misi, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F68048]/15 text-xs font-bold text-[#D85F27]">
                      {idx + 1}
                    </span>
                    <span>{misi}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KONSENTRASI KEAHLIAN (ABOUT PAGE) ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
              Program Keahlian
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
              Konsentrasi Keahlian
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              6 program keahlian yang dirancang untuk memenuhi kebutuhan
              tenaga terampil di era industri 4.0.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                gambar: "/kgs.jpg",
                nama: "Konstruksi Gedung dan Sanitasi",
                desk: "Mempelajari perencanaan, pelaksanaan, dan pengawasan konstruksi bangunan gedung serta sistem instalasi sanitasi modern.",
                prospek: "Drafter bangunan, Pengawas Proyek, Estimator Konstruksi",
              },
              {
                gambar: "/tek.jpg",
                nama: "Teknik Elektronika dan Komunikasi",
                desk: "Mendalami sistem elektronika industri, sistem instrumentasi, telekomunikasi, dan perangkat kendali berbasis komputer.",
                prospek: "Teknisi Elektronika, QC Engineer, Automation Technician",
              },
              {
                gambar: "/titl.jpg",
                nama: "Teknik Instalasi Tenaga Listrik",
                desk: "Menguasai perancangan, pemasangan, dan pemeliharaan instalasi penerangan, tenaga listrik, serta otomasi industri.",
                prospek: "Teknisi Listrik Industri, Electrical Engineer, PJK Listrik",
              },
              {
                gambar: "/tflm.jpg",
                nama: "Teknik Fabrikasi Logam dan Manufaktur",
                desk: "Mempelajari teknik pemesinan, pengelasan industri, pembentukan logam, dan proses manufaktur berbasis presisi.",
                prospek: "Operator CNC, Welder Bersertifikat, Drafter Mesin",
              },
              {
                gambar: "/sija.jpg",
                nama: "Sistem Informasi, Jaringan, dan Aplikasi",
                desk: "Membangun kompetensi di bidang jaringan komputer, cloud computing, keamanan siber, dan pengembangan perangkat lunak.",
                prospek: "Network Administrator, Web Developer, IT Support",
              },
              {
                gambar: "/tkr.jpg",
                nama: "Teknik Kendaraan Ringan",
                desk: "Memahami perbaikan, perawatan, dan sistem kelistrikan serta mesin pada kendaraan bermotor berbasis teknologi terkini.",
                prospek: "Mekanik Otomotif, Service Advisor, Inspector Kendaraan",
              },
            ].map((j) => (
              <div
                key={j.nama}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1A2CA3] hover:shadow-md"
              >
                {/* Thumbnail Gambar Kecil */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={j.gambar}
                    alt={j.nama}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0D1A63]">
                  {j.nama}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {j.desk}
                </p>
                <div className="rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                  <p className="text-xs font-bold text-slate-500">
                    Prospek Karier:
                  </p>
                  <p className="text-xs font-bold text-[#1A2CA3]">{j.prospek}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FASILITAS ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-[#F68048]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D85F27]">
              Sarana & Prasarana
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
              Fasilitas Sekolah
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                nama: "Bengkel Praktik",
                desk: "Bengkel lengkap untuk setiap jurusan dengan peralatan standar industri."
              },
              {
                iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                nama: "Laboratorium",
                desk: "Lab komputer, lab elektronika, dan lab fisika dengan fasilitas modern."
              },
              {
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                nama: "Perpustakaan",
                desk: "Koleksi buku teknik dan referensi lengkap dengan area baca yang nyaman."
              },
              {
                iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
                nama: "Masjid",
                desk: "Tempat ibadah yang luas dan representatif untuk seluruh warga sekolah."
              },
              {
                iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
                nama: "Lapangan Olahraga",
                desk: "Lapangan basket, futsal, dan area olahraga outdoor yang memadai."
              },
              {
                iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                nama: "UKS",
                desk: "Unit Kesehatan Sekolah dengan petugas kesehatan dan peralatan P3K lengkap."
              },
              {
                iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
                nama: "Kantin Sehat",
                desk: "Area kantin bersih dengan menu makanan bergizi dan terjangkau."
              },
              {
                iconPath: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                nama: "Area Parkir",
                desk: "Parkir luas dan tertata untuk kendaraan siswa, guru, dan tamu sekolah."
              },
            ].map((f) => (
              <div
                key={f.nama}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#1A2CA3] hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3] transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.iconPath} />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-bold text-[#0D1A63]">
                  {f.nama}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {f.desk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EKSTRAKURIKULER ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
              Pengembangan Diri
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
              Ekstrakurikuler
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Berbagai kegiatan ekstrakurikuler untuk mengembangkan minat, bakat,
              dan karakter siswa di luar jam pelajaran.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                nama: "Robotika",
                desk: "Klub perancangan dan pemrograman robot untuk kompetisi nasional dan internasional."
              },
              {
                iconPath: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                nama: "Badminton",
                desk: "Pembinaan atlet badminton yang rutin berlatih dan mengikuti turnamen antar-sekolah."
              },
              {
                iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7a2 2 0 00-2-2h-2c-.6 0-1.1-.3-1.4-.8l-.8-1.2A2 2 0 0010.5 2H9a2 2 0 00-2 2v.1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                nama: "Futsal",
                desk: "Tim futsal sekolah yang aktif di berbagai liga dan kompetisi pelajar se-DKI Jakarta."
              },
              {
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                nama: "Pencak Silat",
                desk: "Pelatihan seni bela diri pencak silat sebagai warisan budaya dan sarana prestasi."
              },
              {
                iconPath: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
                nama: "Marching Band",
                desk: "Unit marching band yang tampil memukau di berbagai acara sekolah dan daerah."
              },
              {
                iconPath: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z",
                nama: "Jurnalistik & Fotografi",
                desk: "Wadah kreativitas siswa di bidang jurnalisme, fotografi, dan produksi konten digital."
              },
              {
                iconPath: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
                nama: "Paskibra",
                desk: "Pasukan pengibar bendera yang membangun kedisiplinan, kepemimpinan, dan patriotisme."
              },
              {
                iconPath: "M12 4v16m8-8H4",
                nama: "Palang Merah Remaja",
                desk: "PMR aktif dalam pelatihan pertolongan pertama, donor darah, dan bakti sosial."
              },
              {
                iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                nama: "Kerohanian",
                desk: "Kegiatan kerohanian Islam (Rohis) dan pembinaan karakter spiritual siswa."
              },
            ].map((e) => (
              <div
                key={e.nama}
                className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#1A2CA3] hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3] transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={e.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1A63]">
                    {e.nama}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {e.desk}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ALAMAT & KONTAK ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info Alamat */}
            <div>
              <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                Lokasi Sekolah
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl">
                Alamat & Kontak
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D1A63]">Alamat</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Jl. Balai Pustaka Baru I No.2, RT.2/RW.7, Rawamangun,
                      Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus
                      Ibukota Jakarta 13220
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D1A63]">Email</h4>
                    <a
                      href="mailto:smkn26jkt@gmail.com"
                      className="mt-1 block text-sm text-[#1A2CA3] underline decoration-[#1A2CA3]/30 underline-offset-2 transition-colors duration-200 hover:text-[#F68048]"
                    >
                      smkn26jkt@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D1A63]">Telepon</h4>
                    <a
                      href="tel:+62214720310"
                      className="mt-1 block text-sm text-[#1A2CA3] underline decoration-[#1A2CA3]/30 underline-offset-2 transition-colors duration-200 hover:text-[#F68048]"
                    >
                      (021) 4720310
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A2CA3]/10 text-[#1A2CA3]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D1A63]">Website Resmi</h4>
                    <a
                      href="https://smkn26jkt.sch.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-[#1A2CA3] underline decoration-[#1A2CA3]/30 underline-offset-2 transition-colors duration-200 hover:text-[#F68048]"
                    >
                      smkn26jkt.sch.id
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embed Google Maps */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <iframe
                title="Lokasi SMKN 26 Jakarta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5512129826387!2d106.87824867593094!3d-6.194023060748028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4fb48c889d3%3A0x15c5e09be81cb811!2sSMKN%2026%20Jakarta!5e0!3m2!1sid!2sid!4v1696760000000!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative overflow-hidden bg-[#0D1A63] py-16 sm:py-20">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#F68048]/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#2845D6]/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
            Bergabung Bersama SMKN 26 Jakarta
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Jelajahi berbagai program keahlian, fasilitas,
            serta kegiatan sekolah untuk mengenal SMKN 26 Jakarta lebih dekat.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-xl bg-[#F68048] px-8 py-3.5 text-sm font-bold text-[#0D1A63] shadow-lg shadow-[#F68048]/25 transition-all duration-200 hover:bg-[#D85F27] hover:text-[#0D1A63] hover:shadow-xl sm:text-base"
            >
              Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}