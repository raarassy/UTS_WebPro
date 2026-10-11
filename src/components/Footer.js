import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#081A36] text-[#FDFBF7]">
      {/* Garis aksen oranye hangat di atas footer */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF8C32] via-[#FFA45B] to-[#FF8C32]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kolom 1: Identitas Sekolah */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Logo SMKN 26 Jakarta"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">SMKN 26 Jakarta</h3>
                <p className="text-xs text-[#FF8C32]">STM Pembangunan Jakarta</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#FDFBF7]/80">
              Mencetak lulusan SMK yang kompeten, berkarakter, dan siap bersaing di era industri global.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF8C32]">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Tentang Kami" },
                { href: "/berita", label: "Berita" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FDFBF7]/80 transition-colors duration-200 hover:text-[#FF8C32]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FF8C32]">
              Kontak & Alamat
            </h4>
            <address className="space-y-3 text-sm not-italic leading-relaxed text-[#FDFBF7]/80">
              <p>
                Jl. Balai Pustaka Baru I No.2, RT.2/RW.7, Rawamangun, Kec. Pulo
                Gadung, Kota Jakarta Timur, DKI Jakarta 13220
              </p>
              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#FF8C32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:smkn26jkt@gmail.com"
                  className="underline decoration-[#FF8C32]/40 underline-offset-2 transition-colors duration-200 hover:text-[#FF8C32]"
                >
                  smkn26jkt@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#FF8C32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+62214720310"
                  className="underline decoration-[#FF8C32]/40 underline-offset-2 transition-colors duration-200 hover:text-[#FF8C32]"
                >
                  (021) 4720310
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Garis pemisah & copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-[#FDFBF7]/60">
            &copy; 2026 SMK Negeri 26 Jakarta. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}