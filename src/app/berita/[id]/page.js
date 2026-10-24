"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getBeritaById } from "@/utils/storage";

export default function DetailBeritaPage() {
  const params = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetail = async () => {
      if (params?.id) {
        const data = await getBeritaById(params.id);
        setBerita(data);
      }
      setLoading(false);
    };
    loadDetail();
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
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Tombol Back / CTA */}
      <div className="mb-6">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-[#0D1A63] transition-all hover:bg-slate-200"
        >
          ← Kembali ke Berita
        </Link>
      </div>

      <div className="mb-6 space-y-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1A2CA3]">
          {berita.kategori || "Kegiatan"}
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-[#0D1A63]">
          {berita.judul}
        </h1>
        <p className="text-xs text-slate-400">{berita.tanggal}</p>
      </div>

      <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 max-h-[400px]">
        <img
          src={berita.gambar || "/sekolah.png"}
          alt={berita.judul}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="prose max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line">
        {berita.isi || berita.ringkasan}
      </div>
    </div>
  );
}
