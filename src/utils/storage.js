import { supabase } from "./supabase";

// Ambil semua berita dari Supabase (diurutkan dari yang terbaru)
export const getBerita = async () => {
    try {
        const { data, error } = await supabase
            .from("berita")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching berita:", error);
            return [];
        }
        return data || [];
    } catch (err) {
        console.error("Unexpected error:", err);
        return [];
    }
};

// Ambil 1 berita spesifik berdasarkan ID untuk halaman detail (/berita/[id])
export const getBeritaById = async (id) => {
    try {
        const { data, error } = await supabase
            .from("berita")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.error("Error fetching detail berita:", error);
            return null;
        }
        return data;
    } catch (err) {
        console.error("Unexpected error:", err);
        return null;
    }
};

// Tambah berita baru ke Supabase
export const addBerita = async (beritaBaru) => {
    try {
        const newItem = {
            ...beritaBaru,
            tanggal: new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            }),
        };

        const { data, error } = await supabase
            .from("berita")
            .insert([newItem])
            .select();

        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Error adding berita:", err);
        alert("Gagal menambah berita: " + err.message);
        return null;
    }
};

// Edit berita berdasarkan ID
export const updateBerita = async (id, updatedData) => {
    try {
        const { data, error } = await supabase
            .from("berita")
            .update(updatedData)
            .eq("id", id)
            .select();

        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Error updating berita:", err);
        alert("Gagal mengupdate berita: " + err.message);
        return null;
    }
};

// Hapus berita berdasarkan ID
export const deleteBerita = async (id) => {
    try {
        const { error } = await supabase.from("berita").delete().eq("id", id);
        if (error) throw error;
        return true;
    } catch (err) {
        console.error("Error deleting berita:", err);
        alert("Gagal menghapus berita: " + err.message);
        return false;
    }
};