import dataBeritaAwal from "@/data/berita";

const BERITA_KEY = "smkn26_berita";

// Fungsi untuk menginisialisasi data awal ke localStorage jika masih kosong
export const initStorage = () => {
    if (typeof window !== "undefined") {
        const existingData = localStorage.getItem(BERITA_KEY);
        if (!existingData) {
            localStorage.setItem(BERITA_KEY, JSON.stringify(dataBeritaAwal));
        }
    }
};

// Ambil semua berita dari localStorage
export const getBerita = () => {
    if (typeof window !== "undefined") {
        initStorage();
        const data = localStorage.getItem(BERITA_KEY);
        return data ? JSON.parse(data) : [];
    }
    return [];
};

// Simpan/Update seluruh daftar berita ke localStorage
export const saveBerita = (beritaList) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(BERITA_KEY, JSON.stringify(beritaList));
    }
};

// Tambah berita baru
export const addBerita = (beritaBaru) => {
    const currentList = getBerita();
    const newItem = {
        ...beritaBaru,
        id: Date.now().toString(), // ID unik menggunakan timestamp
        tanggal: new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
    };
    const updatedList = [newItem, ...currentList];
    saveBerita(updatedList);
    return updatedList;
};

// Edit berita berdasarkan ID
export const updateBerita = (id, updatedData) => {
    const currentList = getBerita();
    const updatedList = currentList.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
    );
    saveBerita(updatedList);
    return updatedList;
};

// Hapus berita berdasarkan ID
export const deleteBerita = (id) => {
    const currentList = getBerita();
    const updatedList = currentList.filter((item) => item.id !== id);
    saveBerita(updatedList);
    return updatedList;
};