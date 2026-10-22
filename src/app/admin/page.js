"use client";

import { useState, useEffect } from "react";
import { getBerita, addBerita, updateBerita, deleteBerita } from "@/utils/storage";

export default function AdminPage() {
    // State Login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // State Data Berita & Form
    const [beritaList, setBeritaList] = useState([]);
    const [activeTab, setActiveTab] = useState("berita"); // 'berita' atau 'dashboard'
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Form Fields
    const [formJudul, setFormJudul] = useState("");
    const [formKategori, setFormKategori] = useState("Kegiatan");
    const [formRingkasan, setFormRingkasan] = useState("");
    const [formIsi, setFormIsi] = useState("");
    const [formGambar, setFormGambar] = useState("/sekolah.png");

    // Cek sesi login & muat data saat komponen dimuat
    useEffect(() => {
        const session = sessionStorage.getItem("admin_logged_in");
        if (session === "true") {
            setIsLoggedIn(true);
            setBeritaList(getBerita());
        }
    }, []);

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault();
        // Default Login Sederhana (Username: admin, Password: admin123)
        if (username === "rasyi" && password === "rasyi2772") {
            setIsLoggedIn(true);
            sessionStorage.setItem("admin_logged_in", "true");
            setBeritaList(getBerita());
            setLoginError("");
        } else {
            setLoginError("Username atau password salah!");
        }
    };

    // Handle Logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("admin_logged_in");
    };

    // Reset Form
    const resetForm = () => {
        setFormJudul("");
        setFormKategori("Kegiatan");
        setFormRingkasan("");
        setFormIsi("");
        setFormGambar("/sekolah.png");
        setIsEditing(false);
        setEditId(null);
    };

    // Handle Submit Form (Tambah / Edit)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formJudul || !formRingkasan) {
            alert("Judul dan Ringkasan wajib diisi!");
            return;
        }

        if (isEditing) {
            const updated = updateBerita(editId, {
                judul: formJudul,
                kategori: formKategori,
                ringkasan: formRingkasan,
                isi: formIsi,
                gambar: formGambar,
            });
            setBeritaList(updated);
            alert("Berita berhasil diperbarui!");
        } else {
            const updated = addBerita({
                judul: formJudul,
                kategori: formKategori,
                ringkasan: formRingkasan,
                isi: formIsi,
                gambar: formGambar,
            });
            setBeritaList(updated);
            alert("Berita baru berhasil ditambahkan!");
        }
        resetForm();
    };

    // Handle Prepare Edit
    const handleEdit = (item) => {
        setIsEditing(true);
        setEditId(item.id);
        setFormJudul(item.judul);
        setFormKategori(item.kategori || "Kegiatan");
        setFormRingkasan(item.ringkasan || "");
        setFormIsi(item.isi || "");
        setFormGambar(item.gambar || "/sekolah.png");
    };

    // Handle Delete
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
            const updated = deleteBerita(id);
            setBeritaList(updated);
        }
    };

    // ================= TAMPILAN 1: FORM LOGIN =================
    if (!isLoggedIn) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
                <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
                    <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D1A63] text-white font-bold text-xl shadow-md mb-3">
                            26
                        </div>
                        <h2 className="text-2xl font-black text-[#0D1A63]">Login Admin</h2>
                        <p className="mt-1 text-xs text-slate-500">
                            Masuk untuk mengelola data website SMKN 26 Jakarta
                        </p>
                    </div>

                    {loginError && (
                        <div className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-200">
                            {loginError}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan username"
                                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#1A2CA3] focus:ring-1 focus:ring-[#1A2CA3]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan password"
                                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#1A2CA3] focus:ring-1 focus:ring-[#1A2CA3]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#F68048] py-3 text-sm font-bold text-[#0D1A63] shadow-md transition-all hover:bg-[#D85F27]"
                        >
                            Masuk Ke Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ================= TAMPILAN 2: DASHBOARD ADMIN DENGAN SIDEBAR =================
    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#0D1A63] text-white flex flex-col justify-between p-6 shrink-0">
                <div>
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1">
                            <img src="/logo.png" alt="Logo" className="h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-sm font-black text-white">Panel Admin</h2>
                            <p className="text-[10px] text-blue-200">SMKN 26 Jakarta</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <button
                            onClick={() => setActiveTab("berita")}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "berita"
                                ? "bg-[#F68048] text-[#0D1A63] shadow-md"
                                : "text-blue-100 hover:bg-white/10"
                                }`}
                        >
                            📰 Kelola Berita (CRUD)
                        </button>
                    </nav>
                </div>

                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="block text-center w-full mb-3 rounded-xl border border-white/20 bg-white/5 py-2 text-xs font-bold text-white hover:bg-white/10"
                    >
                        ↗ Lihat Web Utama
                    </a>
                    <button
                        onClick={handleLogout}
                        className="w-full rounded-xl bg-red-600/80 py-2.5 text-xs font-bold text-white hover:bg-red-600"
                    >
                        Keluar (Logout)
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8 flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                        <h1 className="text-2xl font-black text-[#0D1A63]">Manajemen Berita</h1>
                        <p className="text-xs text-slate-500">
                            Tambah, edit, dan hapus berita sekolah yang tersimpan di localStorage.
                        </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        ● Status: Storage Active
                    </span>
                </header>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* FORM INPUT / EDIT */}
                    <div className="lg:col-span-1 rounded-2xl bg-white p-6 shadow-sm border border-slate-200 h-fit">
                        <h2 className="text-base font-bold text-[#0D1A63] mb-4 pb-2 border-b border-slate-100">
                            {isEditing ? "✏️ Edit Berita" : "➕ Tambah Berita Baru"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Judul Berita
                                </label>
                                <input
                                    type="text"
                                    value={formJudul}
                                    onChange={(e) => setFormJudul(e.target.value)}
                                    placeholder="Masukkan judul berita"
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs outline-none focus:border-[#1A2CA3]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Kategori
                                </label>
                                <select
                                    value={formKategori}
                                    onChange={(e) => setFormKategori(e.target.value)}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs outline-none focus:border-[#1A2CA3]"
                                >
                                    <option value="Kegiatan">Kegiatan</option>
                                    <option value="Prestasi">Prestasi</option>
                                    <option value="Pengumuman">Pengumuman</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Ringkasan Singkat
                                </label>
                                <textarea
                                    value={formRingkasan}
                                    onChange={(e) => setFormRingkasan(e.target.value)}
                                    rows="3"
                                    placeholder="Ringkasan berita untuk halaman depan"
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs outline-none focus:border-[#1A2CA3]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    URL Gambar (Path)
                                </label>
                                <input
                                    type="text"
                                    value={formGambar}
                                    onChange={(e) => setFormGambar(e.target.value)}
                                    placeholder="/sekolah.png atau URL gambar"
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs outline-none focus:border-[#1A2CA3]"
                                />
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="submit"
                                    className="flex-1 rounded-xl bg-[#0D1A63] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#1A2CA3]"
                                >
                                    {isEditing ? "Simpan Perubahan" : "Tambah Berita"}
                                </button>
                                {isEditing && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="rounded-xl bg-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-300"
                                    >
                                        Batal
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* TABEL DAFTAR BERITA */}
                    <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                        <h2 className="text-base font-bold text-[#0D1A63] mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                            <span>Daftar Berita ({beritaList.length})</span>
                        </h2>

                        {beritaList.length === 0 ? (
                            <p className="py-8 text-center text-xs text-slate-400">
                                Belum ada berita yang tersimpan di localStorage.
                            </p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold">
                                            <th className="py-3 px-3">Judul</th>
                                            <th className="py-3 px-3">Kategori</th>
                                            <th className="py-3 px-3">Tanggal</th>
                                            <th className="py-3 px-3 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {beritaList.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-50/80">
                                                <td className="py-3 px-3 font-semibold text-slate-800 max-w-[200px] truncate">
                                                    {item.judul}
                                                </td>
                                                <td className="py-3 px-3">
                                                    <span className="rounded-full bg-blue-50 px-2 py-0.5 font-bold text-[#1A2CA3]">
                                                        {item.kategori || "Umum"}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-3 text-slate-500">{item.tanggal}</td>
                                                <td className="py-3 px-3 text-right space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(item)}
                                                        className="rounded-lg bg-amber-100 px-2.5 py-1 font-bold text-amber-700 hover:bg-amber-200"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="rounded-lg bg-red-100 px-2.5 py-1 font-bold text-red-700 hover:bg-red-200"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}