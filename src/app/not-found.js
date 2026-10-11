import Link from "next/link";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Angka 404 besar */}
        <div className="relative mb-6 inline-block">
          <span className="text-8xl font-extrabold tracking-tight text-primary/10 sm:text-9xl">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">🔍</span>
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-extrabold text-neutral-800 sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah
          dipindahkan. Silakan kembali ke halaman utama SMK Negeri 26 Jakarta.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110"
          >
            Kembali ke Home
          </Link>
          <Link
            href="/berita"
            className="rounded-xl border border-primary/20 bg-white px-8 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-white"
          >
            Lihat Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
