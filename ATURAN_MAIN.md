# 📋 ATURAN MAIN ADULTSPIN

## 🎯 Tujuan Game
AdultSpin adalah game spinner interaktif dimana pemain memutar roda untuk mendapatkan hasil acak dari 9 sektor yang tersedia.

## 🔞 Batasan Usia
- **Usia Minimum**: 21 tahun
- **Verifikasi Wajib**: Setiap pemain harus melewati verifikasi usia sebelum dapat bermain
- **Pertanyaan Verifikasi**: Pertanyaan akan muncul saat game dimulai
- **Jawaban yang Diterima**: Berbagai variasi format jawaban yang valid

## 🎮 Cara Bermain

### Langkah 1: Verifikasi
1. Buka game di browser
2. Modal verifikasi akan muncul otomatis
3. Jawab pertanyaan verifikasi yang muncul
4. Masukkan umur Anda (minimal 21 tahun)
5. Klik tombol "Kirim Jawaban"

### Langkah 2: Memutar Roda
1. Setelah verifikasi berhasil, spinner akan muncul
2. Klik pada lingkaran spinner untuk memulai putaran
3. Roda akan berputar dengan animasi selama 4 detik
4. Tunggu hingga roda berhenti sepenuhnya

### Langkah 3: Hasil
1. Roda akan berhenti pada salah satu dari 9 sektor
2. Setiap sektor memiliki nomor 1-9
3. Setiap sektor memiliki ikon unik
4. Hasil ditentukan secara acak

## 🎨 Elemen Visual

### Warna Sektor
- Sektor 1: Pink (#f8a1d1)
- Sektor 2: Ungu (#a18cd1)
- Sektor 3: Pink Muda (#fcb1e3)
- Sektor 4: Ungu Muda (#c084fc)
- Sektor 5: Pink Terang (#f672b5)
- Sektor 6: Ungu Terang (#b388ff)
- Sektor 7: Pink Pastel (#ffb6b9)
- Sektor 8: Ungu Pastel (#e1bee7)
- Sektor 9: Pink Soft (#f7c1e3)

### Ikon Sektor
- Setiap sektor memiliki ikon SVG unik
- Ikon diambil dari folder `img/` (1.svg hingga 9.svg)
- Ukuran ikon: 130px x 130px
- Posisi: 75% dari radius roda

## ⚙️ Mekanisme Teknis

### Animasi Spinner
- **Durasi**: 4 detik
- **Easing**: cubic-bezier(0.17, 0.67, 0.83, 0.67)
- **Putaran Tambahan**: 4 putaran penuh (1440 derajat)
- **Sudut Sektor**: 40 derajat per sektor (360° ÷ 9)

### Responsivitas
- **Desktop**: Maksimal 480px x 480px
- **Tablet**: Menyesuaikan dengan viewport
- **Mobile**: Minimal 140px x 140px
- **Aspect Ratio**: Selalu 1:1 (persegi)

### Interaksi
- **Click**: Memulai putaran
- **Disabled State**: Tidak dapat diklik saat berputar
- **Pointer Events**: Dinonaktifkan saat animasi berjalan

## 🚫 Pembatasan

### Saat Verifikasi
- Modal tidak dapat ditutup dengan ESC
- Klik di luar modal tidak menutup modal
- Form harus diisi lengkap
- Jawaban harus tepat sesuai daftar yang diterima

### Saat Bermain
- Hanya satu putaran dapat dilakukan pada satu waktu
- Tidak ada sistem skor atau poin
- Tidak ada sistem save/load
- Tidak ada multiplayer

## 🔧 Troubleshooting

### Masalah Umum
1. **Modal tidak muncul**: Refresh halaman
2. **Jawaban tidak diterima**: Pastikan format jawaban sesuai
3. **Umur ditolak**: Pastikan umur 21 tahun atau lebih
4. **Spinner tidak berputar**: Tunggu animasi selesai

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Kompatibilitas Perangkat

### Desktop
- Windows 10/11
- macOS 10.14+
- Linux (Ubuntu, Fedora, dll.)

### Mobile
- iOS 12+ (Safari)
- Android 8+ (Chrome)
- Responsive design untuk semua ukuran layar

### Tablet
- iPad (Safari)
- Android Tablet (Chrome)
- Windows Tablet (Edge)

## 🎯 Tips Bermain

1. **Pastikan Koneksi Stabil**: Game membutuhkan loading ikon SVG
2. **Gunakan Browser Terbaru**: Untuk performa optimal
3. **Nonaktifkan Ad Blocker**: Jika ikon tidak muncul
4. **Refresh Jika Bermasalah**: Untuk reset game state

## 🔒 Keamanan

- Tidak ada data yang disimpan secara lokal
- Tidak ada tracking atau analytics
- Tidak ada koneksi ke server eksternal
- Semua logika berjalan di client-side

## 📞 Bantuan

Jika mengalami masalah:
1. Refresh halaman
2. Coba browser berbeda
3. Periksa koneksi internet
4. Pastikan JavaScript diaktifkan

---

**Selamat bermain AdultSpin! 🎰** 