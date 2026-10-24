"use client";

import { useState, useEffect } from "react";
import BeritaCard from "@/components/BeritaCard";
import { getBerita } from "@/utils/storage";

export default function BeritaPage() {
  const [daftarBerita, setDaftarBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBerita = async () => {
      setLoading(true);
      const data = await getBerita();
      // Pastikan data selalu dalam bentuk Array
      setDaftarBerita(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    loadBerita();
  }, []);

  return (
    <>
      {/* ========== HEADER WITH MODERN GRID TEXTURE ========== */}
      <section className="relative overflow-hidden bg-[#0D1A63] py-16 sm:py-24">
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

        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#2845D6]/30 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-[#F68048]/40 bg-[#F68048]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FFA175] backdrop-blur-md">
            Informasi Terkini
          </span>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Berita & Kegiatan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Ikuti perkembangan terbaru seputar prestasi, kegiatan, dan
            informasi penting dari SMK Negeri 26 Jakarta.
          </p>
        </div>
      </section>

      {/* ========== DAFTAR BERITA ========== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Menampilkan{" "}
              <span className="font-bold text-[#0D1A63]">
                {loading ? "..." : (daftarBerita || []).length}
              </span>{" "}
              berita
            </p>
          </div>

          {loading ? (
            <div className="py-12 text-center">
              <p className="text-sm font-bold text-slate-400">
                Memuat berita dari Supabase...
              </p>
            </div>
          ) : (!daftarBerita || daftarBerita.length === 0) ? (
            <div className="py-12 text-center">
              <p className="text-sm font-bold text-slate-400">
                Belum ada berita yang diterbitkan.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(daftarBerita || []).map((berita) => (
                <BeritaCard key={berita.id} berita={berita} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}