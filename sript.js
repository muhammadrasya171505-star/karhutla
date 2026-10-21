// Memastikan semua elemen HTML selesai dimuat oleh browser sebelum script berjalan
document.addEventListener("DOMContentLoaded", function() {

    // 1. Ambil elemen formulir berdasarkan ID
    const formDonasi = document.getElementById("formDonasi");

    // 2. Berikan penanganan event saat formulir dikirim (submit)
    formDonasi.addEventListener("submit", function(event) {
        
        // Mencegah halaman web ter-refresh otomatis secara standar HTML
        event.preventDefault();

        // ==========================================================
        // NOMOR WHATSAPP ADMIN:
        // Gunakan kode negara '62' (tanpa tanda '+' atau angka '0')
        // ==========================================================
        const noWaAdmin = "6289691000309";

        // 3. Ambil data yang dimasukkan oleh pengguna di inputan
        const nama = document.getElementById("nama").value.trim();
        const nominal = document.getElementById("nominal").value.trim();
        const bank = document.getElementById("bank").value;

        // Validasi opsional untuk memastikan tidak ada data kosong
        if (!nama || !nominal || !bank) {
            alert("Silakan lengkapi semua data formulir terlebih dahulu.");
            return;
        }

        // Format angka nominal menjadi rupiah (Contoh: 100000 -> 100.000)
        const nominalFormat = parseInt(nominal, 10).toLocaleString("id-ID");

        // 4. Susun pesan yang akan langsung masuk ke chat WhatsApp
        const pesan = `Halo Admin Peduli Karhutla,\n\n` +
                      `Saya ingin konfirmasi transfer donasi:\n` +
                      `• *Nama Donatur:* ${nama}\n` +
                      `• *Nominal:* Rp ${nominalFormat}\n` +
                      `• *Tujuan Transfer:* ${bank}\n\n` +
                      `Berikut saya lampirkan bukti transfernya. Terima kasih!`;

        // 5. Buat tautan URL resmi WhatsApp
        const urlWhatsApp = `https://wa.me/${noWaAdmin}?text=${encodeURIComponent(pesan)}`;

        // 6. Buka aplikasi WhatsApp / WhatsApp Web di tab baru
        window.open(urlWhatsApp, "_blank");
    });

});
