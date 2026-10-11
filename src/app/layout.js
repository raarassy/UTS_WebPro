import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SMK Negeri 26 Jakarta — STM Pembangunan Jakarta",
    template: "%s | SMKN 26 Jakarta",
  },
  description:
    "Website profil resmi SMK Negeri 26 Jakarta (STM Pembangunan Jakarta). Informasi sekolah, jurusan, berita, dan kegiatan terkini.",
  keywords: [
    "SMKN 26 Jakarta",
    "STM Pembangunan Jakarta",
    "SMK Negeri 26",
    "sekolah kejuruan Jakarta Timur",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
