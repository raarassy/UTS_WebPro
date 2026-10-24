"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getBerita, getBeritaById } from "@/utils/storage";
import BeritaCard from "@/components/BeritaCard";

export default function DetailBeritaPage() {
  const params = useParams();
  const [berita, setBerita] = useState(null);
  const [beritaLainnya, setBeritaLainnya] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetailAndOthers = async () => {
      setLoading(true);
      if (params?.id) {
        // 1. Ambil berita yang sedang dibuka
        const currentBerita = await getBeritaById(params.id);
        setBerita(currentBerita);

        // 2. Ambil semua berita untuk bagian "Berita Lainnya"
        const allBerita = await getBerita();
        // Filter agar berita yang sedang dibaca tidak muncul di rekomendasi
        const filtered = (Array.isArray(allBerita) ? allBerita : []).filter(
          (item) => String(item.id) !== String(params.id)
        );
        // Ambil maksimal 3 berita lainnya
        setBeritaLainnya(filtered.slice(0, 3));
      }
      setLoading(false);
    };

    loadDetailAndOthers();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-bold text-slate-500">Memuat berita...</p>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-black text-[#0D1A63]">404</h1>
        <h2 className="text-xl font-bold text-slate-800">Berita Tidak Ditemukan</h2>
        <p className="text-xs text-slate-500">
          Maaf, berita yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Link
          href="/berita"
          className="rounded-xl bg-[#0D1A63] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1A2CA3]"
        >
          Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header Berita */}
        <div className="mb-6 space-y-3 text-center sm:text-left">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1A2CA3]">
            {berita.kategori || "Kegiatan"}
          </span>
          <h1 className="text-2xl font-black text-[#0D1A63] sm:text-3xl lg:text-4xl">
            {berita.judul}
          </h1>
          <p className="text-xs text-slate-400">{berita.tanggal}</p>
        </div>

        {/* Gambar Utama */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 shadow-sm max-h-[420px]">
          <img
            src={berita.gambar || "/sekolah.png"}
            alt={berita.judul}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Ringkasan Kutipan (Optional Card / Highlight) */}
        {berita.ringkasan && (
          <div className="mb-6 rounded-xl border-l-4 border-[#F68048] bg-orange-50/50 p-4 text-xs italic text-slate-700 leading-relaxed">
            "{berita.ringkasan}"
          </div>
        )}

        {/* Isi Berita Lengkap */}
        <div className="prose max-w-none text-sm leading-relaxed text-slate-700 whitespace-pre-line mb-12">
          {berita.isi || berita.ringkasan}
        </div>

        {/* Tombol CTA Dual (Kembali ke Berita & Kembali ke Home) */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-b border-slate-200 py-6 mb-16">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
          >
            ← Kembali ke Berita
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0D1A63] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#1A2CA3]"
          >
            Kembali ke Beranda →
          </Link>
        </div>

        {/* Section Berita Lainnya */}
        {beritaLainnya.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#0D1A63]">
              Berita Lainnya
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {beritaLainnya.map((item) => (
                <BeritaCard key={item.id} berita={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}