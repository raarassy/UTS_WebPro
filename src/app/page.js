"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { getBerita } from "@/utils/storage";

export default function Home() {
  const [beritaTerbaru, setBeritaTerbaru] = useState([]);

  useEffect(() => {
    const allBerita = getBerita();
    setBeritaTerbaru(allBerita.slice(0, 3));
  }, []);

  return (
    <>
      {/* ========== HERO SECTION WITH MORE BALANCED BLUE OVERLAY ========== */}
      <section className="relative overflow-hidden bg-[#0D1A63] py-20 sm:py-28 lg:py-32">
        {/* Background Foto Gedung Sekolah */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url('/kegiatan.jpg')" }}
        />

        {/* Gradient Overlay Gelap Lebih Biru */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1A63]/65 via-[#0D1A63]/55 to-[#0D1A63]/90" />

        {/* Ambient Glow Soft Background */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#2845D6]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2845D6]/15 blur-[120px]" />

        {/* Pattern Texture Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">

          {/* Badge Welcome */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#F68048]/40 bg-[#F68048]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#F68048] animate-ping" />
            <span className="text-xs font-semibold tracking-wide text-[#FFA175] uppercase sm:text-sm">
              WELCOME
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className="animate-fade-in-up mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-md">
            SMK Negeri 26{" "}
            <span className="block text-gradient">Jakarta</span>
          </h1>

          {/* Deskripsi Singkat */}
          <p className="animate-fade-in-up mx-auto mb-10 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg drop-shadow">
            SMK Negeri 26 Jakarta (STM Pembangunan Jakarta) merupakan sekolah kejuruan kelompok teknologi terkemuka di Jakarta Timur.
            Berdiri sejak tahun 1970, sekolah ini berkomitmen tinggi dalam mencetak tenaga kerja teknik profesional yang berkarakter kuat, berdisiplin tinggi, serta siap bersaing di dunia industri nasional maupun internasional.
          </p>


          {/* Kartu Statistik Interaktif */}
          <div className="animate-fade-in-up mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { angka: "50+", label: "Tahun Berdiri" },
              { angka: "6", label: "Jurusan Teknik" },
              { angka: "A", label: "Akreditasi" },
              { angka: "78%", label: "Lulusan Terserap" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[#0D1A63]/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F68048]/50 hover:bg-[#1A2CA3]/80 hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#F68048]/20 blur-lg transition-transform duration-300 group-hover:scale-150" />
                <p className="text-3xl font-black text-[#F68048] transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                  {stat.angka}
                </p>
                <p className="mt-1 text-xs font-medium text-blue-100 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== GAMBARAN & FOTO SEKOLAH ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Foto Gedung Sekolah */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl group">
              <img
                src="/sekolah.png"
                alt="Gedung SMKN 26 Jakarta"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A63]/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-base font-bold">Kawasan Kampus SMKN 26 Jakarta</p>
                <p className="text-xs text-blue-100">Jl. Balai Pustaka Baru I No.2, Rawamangun</p>
              </div>
            </div>

            {/* Informasi Detail Sekolah */}
            <div>
              <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                Tentang Kami
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0D1A63] sm:text-3xl lg:text-4xl">
                Lingkungan Belajar Vokasi Berstandar Industri
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                SMK Negeri 26 Jakarta dilengkapi dengan fasilitas bengkel praktik modern, laboratorium komputer & teknik, serta sarana penunjang pembelajaran yang memadai. Kami menerapkan pembelajaran berbasis proyek (Project-Based Learning) dan Teaching Factory untuk memastikan kompetensi lulusan sesuai dengan standar kebutuhan industri masa kini.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-bold text-[#1A2CA3] hover:text-[#F68048] transition-colors"
                >
                  Pelajari Selengkapnya Tentang Fasilitas & Sejarah →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== SAMBUTAN KEPALA SEKOLAH ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="grid items-center gap-8 p-8 md:grid-cols-3 md:p-12">

              {/* Foto Kepsek */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-4 border-[#1A2CA3]/10 shadow-md">
                  <img
                    src="/kepsek.jpg"
                    alt="Foto Kepala Sekolah"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0D1A63]">
                  Kepala Sekolah
                </h3>
                <p className="text-xs font-semibold text-[#F68048]">
                  SMK Negeri 26 Jakarta
                </p>
              </div>

              {/* Teks Sambutan Singkat */}
              <div className="md:col-span-2 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                <span className="inline-block rounded-full bg-[#F68048]/10 px-3.5 py-1 text-xs font-bold text-[#D85F27]">
                  Sambutan Singkat
                </span>
                <h2 className="text-2xl font-black text-[#0D1A63] sm:text-3xl">
                  Selamat Datang di Website Profil SMKN 26 Jakarta
                </h2>
                <p className="italic text-slate-600">
                  "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal informasi resmi SMK Negeri 26 Jakarta. Kami berkomitmen untuk menyajikan informasi yang transparan dan akurat mengenai perkembangan, prestasi, serta program keahlian kejuruan yang kami selenggarakan."
                </p>
                <p>
                  Melalui pendidikan berbasis karakter dan keterampilan teknis yang teruji, kami terus mencetak lulusan terampil yang siap kerja, berintegritas, dan siap menjadi pionir teknologi di masa depan.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========== MOTTO, SEMBOYAN & MARS SECTION ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#F68048]">
                Motto Sekolah
              </span>
              <h3 className="text-xl font-bold italic text-[#0D1A63]">
                "Belajar Bekerja Membangun"
              </h3>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#F68048]">
                Semboyan Sekolah
              </span>
              <h3 className="text-xl font-bold italic text-[#0D1A63]">
                "Bersih, Jujur, Disiplin dan Terbuka"
              </h3>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
            <div className="mb-8 text-center md:text-left">
              <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                Identitas Sekolah
              </span>
              <h2 className="text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
                Mars SMKN 26 Jakarta
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="text-left space-y-3 italic leading-relaxed text-slate-700 text-sm sm:text-base">
                <p>Derap Langkah Cita Bersama</p>
                <p>Belajar bekerja membangun bangsa</p>
                <p>Sebagai pusaka panji-panji suci</p>
                <p>SMK 26 kepada ibu pertiwi</p>

                <p className="pt-2">Paku jiwa sungguh terpatri</p>
                <p>Tingkatkan kompetensi anak negeri</p>
                <p>Sebagai patriot pejuang sejati</p>
                <p>Hadapi tantangan teknologi mendatang</p>

                <p className="pt-2">Kami ada di depan persada</p>
                <p>Bina cipta hadirkan karya</p>
                <p>Janji kami di gerbang hati</p>
                <p>Demi sekolah yang kucintai</p>

                <div className="pt-4 font-semibold not-italic text-[#0D1A63]">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#F68048]">
                    Reff :
                  </p>
                  <p>Ayo ayo giat belajar</p>
                  <p>Ayo ayo semangat bekerja</p>
                  <p>Ayo ayo prestasi membangun</p>
                  <p>Semoga SMK Negeri 26 jaya</p>
                  <p>Pasti SMK Negeri 26 jayalah terus</p>
                </div>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-300 bg-black shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/Ox5y2cs38cU?autoplay=1&mute=1"
                  title="Mars SMKN 26 Jakarta"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== KONSENTRASI KEAHLIAN HIGHLIGHT ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-[#F68048]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D85F27]">
              Program Unggulan
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
              Program Keahlian
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              SMKN 26 Jakarta menyelenggarakan 6 Jurusan Teknik
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                gambar: "/kgs.jpg",
                nama: "Konstruksi Gedung dan Sanitasi",
                desk: "Mempelajari perencanaan, pelaksanaan, dan pengawasan konstruksi bangunan gedung serta sistem instalasi sanitasi modern.",
              },
              {
                gambar: "/tek.jpg",
                nama: "Teknik Elektronika dan Komunikasi",
                desk: "Mendalami sistem elektronika industri, sistem instrumentasi, telekomunikasi, dan perangkat kendali berbasis komputer.",
              },
              {
                gambar: "/titl.jpg",
                nama: "Teknik Instalasi Tenaga Listrik",
                desk: "Menguasai perancangan, pemasangan, dan pemeliharaan instalasi penerangan, tenaga listrik, serta otomasi industri.",
              },
              {
                gambar: "/tflm.jpg",
                nama: "Teknik Fabrikasi Logam dan Manufaktur",
                desk: "Mempelajari teknik pemesinan, pengelasan industri, pembentukan logam, dan proses manufaktur berbasis presisi.",
              },
              {
                gambar: "/sija.jpg",
                nama: "Sistem Informasi, Jaringan, dan Aplikasi",
                desk: "Membangun kompetensi di bidang jaringan komputer, cloud computing, keamanan siber, dan pengembangan perangkat lunak.",
              },
              {
                gambar: "/tkr.jpg",
                nama: "Teknik Kendaraan Ringan",
                desk: "Memahami perbaikan, perawatan, dan sistem kelistrikan serta mesin pada kendaraan bermotor berbasis teknologi terkini.",
              },
            ].map((jurusan) => (
              <div
                key={jurusan.nama}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#1A2CA3] hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={jurusan.gambar}
                    alt={jurusan.nama}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0D1A63]">
                  {jurusan.nama}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {jurusan.desk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BERITA TERBARU ========== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 inline-block rounded-full bg-[#1A2CA3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                Informasi Terkini
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
                Berita Terbaru
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-[#0D1A63] shadow-sm transition-all duration-200 hover:border-[#1A2CA3] hover:bg-[#1A2CA3] hover:text-white"
            >
              Lihat Semua Berita
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative overflow-hidden bg-[#0D1A63] py-16 sm:py-20">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#2845D6]/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#2845D6]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
            Bergabunglah Bersama Kami
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Wujudkan masa depan cerah bersama SMKN 26 Jakarta. Dapatkan
            pendidikan kejuruan berkualitas yang mempersiapkan Anda untuk dunia
            kerja dan industri global.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-xl bg-[#F68048] px-8 py-3.5 text-sm font-bold text-[#0D1A63] shadow-lg shadow-[#F68048]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D85F27] hover:text-[#0D1A63] hover:shadow-xl sm:text-base"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}