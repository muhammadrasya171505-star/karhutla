document.addEventListener("DOMContentLoaded", function() {
    
    const formDonasi = document.getElementById("formDonasi");

    formDonasi.addEventListener("submit", function(event) {
        // 1. Mencegah halaman ter-refresh
        event.preventDefault();

        // 2. Nomor WhatsApp Tujuan (Wajib awalan 62)
        const noWaAdmin = "6289691000309";

        // 3. Mengambil data dari form
        const nama = document.getElementById("nama").value.trim();
        const nominal = document.getElementById("nominal").value.trim();
        const bank = document.getElementById("bank").value;

        // 4. Memformat angka menjadi format titik (contoh: 50.000)
        const nominalFormat = parseInt(nominal, 10).toLocaleString("id-ID");

        // 5. Menyusun pesan otomatis
        const pesan = `Halo Admin Peduli Karhutla,\n\n` +
                      `Saya ingin konfirmasi transfer donasi:\n` +
                      `• *Nama Donatur:* ${nama}\n` +
                      `• *Nominal:* Rp ${nominalFormat}\n` +
                      `• *Tujuan Transfer:* ${bank}\n\n` +
                      `Berikut saya lampirkan bukti transfernya. Terima kasih!`;

        // 6. Membuat Link WhatsApp API
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${noWaAdmin}&text=${encodeURIComponent(pesan)}`;

        // 7. SOLUSI BARU: Menggunakan window.location.href
        // Ini akan memindahkan tab yang sedang dibuka langsung ke WhatsApp (anti-blokir browser)
        window.location.href = urlWhatsApp;
    });

});
