import Link from "next/link";
import { notFound } from "next/navigation";
import dataBerita from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

// Generate metadata dinamis berdasarkan ID berita
export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = dataBerita.find((b) => b.id === id);

  if (!berita) {
    return { title: "Berita Tidak Ditemukan" };
  }

  return {
    title: `${berita.judul} — SMKN 26 Jakarta`,
    description: berita.ringkasan,
  };
}

// Generate static params untuk semua berita
export async function generateStaticParams() {
  return dataBerita.map((berita) => ({
    id: berita.id,
  }));
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = dataBerita.find((b) => b.id === id);

  // Jika berita tidak ditemukan, tampilkan 404
  if (!berita) {
    notFound();
  }

  // Warna badge berdasarkan kategori
  const kategoriWarna = {
    "Prestasi & Akademik": "bg-emerald-100 text-emerald-700",
    "Kegiatan Sekolah": "bg-blue-100 text-blue-700",
    "Literasi & Edukasi": "bg-purple-100 text-purple-700",
    "Kesehatan & Kedisiplinan": "bg-amber-100 text-amber-700",
    "Lingkungan & Fasilitas": "bg-teal-100 text-teal-700",
    "Inovasi & Teknologi": "bg-indigo-100 text-indigo-700",
  };

  // Berita terkait (3 berita lainnya)
  const beritaLainnya = dataBerita
    .filter((b) => b.id !== berita.id)
    .slice(0, 3);

  return (
    <>
      {/* ========== HEADER ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-12 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-white"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/berita"
              className="transition-colors duration-200 hover:text-white"
            >
              Berita
            </Link>
            <span>/</span>
            <span className="line-clamp-1 text-white/90">
              {berita.judul}
            </span>
          </nav>

          {/* Badge & Tanggal */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {berita.kategori && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${kategoriWarna[berita.kategori] ||
                  "bg-neutral-100 text-neutral-700"
                  }`}
              >
                {berita.kategori}
              </span>
            )}
            <time className="flex items-center gap-1.5 text-sm text-white/70">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {berita.tanggal}
            </time>
          </div>

          {/* Judul */}
          <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {berita.judul}
          </h1>
        </div>
      </section>

      {/* ========== KONTEN BERITA ========== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Gambar Utama Berita */}
          <div className="mb-10 overflow-hidden rounded-2xl bg-neutral-100 shadow-lg border border-neutral-200">
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={berita.gambar}
                alt={berita.judul}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Ringkasan */}
          <div className="mb-8 rounded-xl border-l-4 border-accent bg-accent/5 p-5">
            <p className="text-sm font-medium leading-relaxed text-neutral-700 italic sm:text-base">
              {berita.ringkasan}
            </p>
          </div>

          {/* Isi Berita */}
          <article className="prose prose-slate max-w-none">
            {berita.isi.split("\n\n").map((paragraf, idx) => (
              <p
                key={idx}
                className="mb-5 text-sm leading-relaxed text-neutral-700 sm:text-base"
              >
                {paragraf}
              </p>
            ))}
          </article>

          {/* Garis pemisah */}
          <hr className="my-10 border-neutral-200" />

          {/* Tombol kembali */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Kembali ke Berita
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-primary"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
                />
              </svg>
              Kembali ke Home
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BERITA LAINNYA ========== */}
      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-extrabold text-neutral-800 sm:text-2xl">
            Berita Lainnya
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beritaLainnya.map((b) => (
              <BeritaCard key={b.id} berita={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
