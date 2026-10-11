import Link from "next/link";

export default function BeritaCard({ berita }) {
  // Warna badge berdasarkan kategori
  const kategoriWarna = {
    "Prestasi & Akademik": "bg-emerald-100 text-emerald-700",
    "Kegiatan Sekolah": "bg-blue-100 text-blue-700",
    "Literasi & Edukasi": "bg-purple-100 text-purple-700",
    "Kesehatan & Kedisiplinan": "bg-amber-100 text-amber-700",
    "Lingkungan & Fasilitas": "bg-teal-100 text-teal-700",
    "Inovasi & Teknologi": "bg-indigo-100 text-indigo-700",
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      {/* Gambar Berita */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge kategori */}
        {berita.kategori && (
          <span
            className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${kategoriWarna[berita.kategori] || "bg-neutral-100 text-neutral-700"
              }`}
          >
            {berita.kategori}
          </span>
        )}

        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Konten Berita */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tanggal */}
        <time className="mb-2 flex items-center gap-1.5 text-xs font-medium text-neutral-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
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

        {/* Judul */}
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-neutral-800 transition-colors duration-200 group-hover:text-primary">
          {berita.judul}
        </h3>

        {/* Ringkasan */}
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {berita.ringkasan}
        </p>

        {/* Tombol Baca Selengkapnya */}
        <Link
          href={`/berita/${berita.id}`}
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-all duration-200 hover:gap-2.5 hover:text-primary-light"
        >
          Baca Selengkapnya
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}