// 1. Menghubungkan klik pada tombol "btnKonfirmasi" dengan fungsi kirimKonfirmasi
document.getElementById("btnKonfirmasi").addEventListener("click", function() {
    kirimKonfirmasi();
});

// 2. Fungsi utama konfirmasi donasi
function kirimKonfirmasi() {
    // =========================================================
    // UBAH NOMOR DI SINI:
    // Wajib gunakan format kode negara (62), tanpa tanda + atau 0.
    // Contoh: 6281234567890
    // =========================================================
    const noWaAdmin = "6281234567890"; 

    // Mengambil teks dari form input berdasarkan ID
    const nama = document.getElementById("nama").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const bank = document.getElementById("bank").value;

    // Pengecekan validasi: Jika ada kolom yang belum diisi
    if (!nama || !jumlah || !bank) {
        alert("Harap isi semua data pada formulir terlebih dahulu!");
        return; // Menghentikan proses jika data tidak lengkap
    }

    // Menyusun isi pesan WhatsApp yang akan terkirim otomatis
    const pesan = `Halo Admin, saya ingin konfirmasi transfer donasi Karhutla:\n\n` +
                  `*Nama:* ${nama}\n` +
                  `*Nominal:* Rp ${Number(jumlah).toLocaleString('id-ID')}\n` +
                  `*Transfer ke:* ${bank}\n\n` +
                  `Berikut saya lampirkan bukti transfernya. Terima kasih!`;

    // Membuat link resmi WhatsApp (API wa.me)
    // encodeURIComponent berfungsi agar karakter enter, spasi, dan simbol masuk dengan aman ke URL
    const url = `https://wa.me/${noWaAdmin}?text=${encodeURIComponent(pesan)}`;

    // Membuka aplikasi WhatsApp / WhatsApp Web di tab baru
    window.open(url, '_blank');
}
