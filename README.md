# 🎰 AdultSpin - Game Spinner Responsif

AdultSpin adalah game spinner interaktif yang dirancang dengan antarmuka yang menarik dan responsif. Game ini menampilkan roda spinner dengan 9 sektor yang dapat diputar untuk mendapatkan hasil acak.

## ✨ Fitur Utama

- **Spinner Interaktif**: Roda spinner dengan 9 sektor berwarna-warni
- **Responsif**: Didesain untuk bekerja optimal di desktop, tablet, dan mobile
- **Animasi Smooth**: Efek animasi yang halus saat memutar roda
- **Verifikasi Usia**: Sistem verifikasi untuk memastikan pemain berusia 21+ tahun
- **UI Modern**: Desain gradient yang menarik dengan efek glow
- **Ikon SVG**: Setiap sektor memiliki ikon unik

## 🎮 Cara Bermain

1. **Verifikasi Usia**: 
   - Masukkan jawaban untuk pertanyaan verifikasi yang muncul
   - Masukkan umur Anda (minimal 21 tahun)

2. **Memutar Roda**:
   - Setelah verifikasi berhasil, klik pada lingkaran spinner
   - Roda akan berputar dengan animasi yang dramatis
   - Tunggu hingga roda berhenti untuk melihat hasil

3. **Hasil**:
   - Roda akan berhenti pada salah satu dari 9 sektor
   - Setiap sektor memiliki nomor 1-9 dengan ikon unik

## 🛠️ Instalasi

1. **Clone atau Download**:
   ```bash
   git clone [repository-url]
   cd AdultSpin
   ```

2. **Buka File**:
   - Buka file `index.html` di browser web
   - Atau gunakan live server untuk development

3. **Struktur File**:
   ```
   AdultSpin/
   ├── index.html              # File utama game
   ├── manifest.json           # PWA manifest
   ├── sw.js                   # Service Worker
   ├── browserconfig.xml       # Windows tile config
   ├── .nojekyll               # GitHub Pages config
   ├── 404.html                # Error page
   ├── img/                    # Folder ikon SVG
   │   ├── 1.svg
   │   ├── 2.svg
   │   ├── ...
   │   └── 9.svg
   └── README.md               # Dokumentasi ini
   ```

## 📱 PWA (Progressive Web App)

AdultSpin sekarang mendukung PWA dengan fitur:

### **Fitur PWA:**
- ✅ **Installable** - Dapat diinstall di home screen
- ✅ **Offline Support** - Bisa dimainkan tanpa internet
- ✅ **App-like Experience** - Tampilan seperti aplikasi native
- ✅ **Push Notifications** - Notifikasi untuk engagement
- ✅ **Background Sync** - Sync data saat online
- ✅ **Responsive Design** - Optimal di semua perangkat

### **Setup PWA:**
1. **Deploy ke HTTPS**:
   - PWA membutuhkan HTTPS untuk berfungsi
   - Gunakan Netlify, Vercel, atau hosting dengan SSL

2. **Test PWA**:
   - Buka Chrome DevTools
   - Tab "Application" > "Manifest"
   - Tab "Application" > "Service Workers"

### **GitHub Pages Setup:**
1. **Upload semua file** ke repository GitHub
2. **Enable GitHub Pages** di Settings > Pages
3. **Source**: Deploy from a branch (main/master)
4. **Pastikan file `.nojekyll`** ada di root folder
5. **Tunggu beberapa menit** untuk deployment

### **Troubleshooting GitHub Pages:**
- **Manifest tidak load**: Pastikan path menggunakan `./` bukan `/`
- **Service Worker error**: Cek console untuk error details
- **404 errors**: File `404.html` akan handle missing pages

### **Install PWA:**
- **Chrome/Edge**: Klik icon install di address bar
- **Android**: "Add to Home Screen" dari menu browser
- **iOS**: "Add to Home Screen" dari Safari share menu

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur dasar aplikasi
- **CSS3**: 
  - Flexbox untuk layout responsif
  - CSS Grid untuk positioning
  - Animasi dan transisi
  - Gradient dan efek visual
- **JavaScript**: 
  - Logika game spinner
  - Validasi form
  - Manipulasi DOM
- **SVG**: Ikon dan elemen visual

## 📱 Responsivitas

Game ini dioptimalkan untuk berbagai ukuran layar:

- **Desktop**: Tampilan penuh dengan efek visual maksimal
- **Tablet**: Ukuran menyesuaikan dengan layar tablet
- **Mobile**: Layout yang compact dan mudah digunakan

## 🔧 Kustomisasi

### Mengubah Warna Sektor
Edit array `SECTOR_COLORS` di dalam JavaScript:
```javascript
const SECTOR_COLORS = [
  '#f8a1d1', // pink
  '#a18cd1', // ungu
  // ... tambahkan warna lain
];
```

### Mengubah Ikon
Ganti file SVG di folder `img/` atau update array `SVG_PATHS`:
```javascript
const SVG_PATHS = [
  'img/1.svg',
  'img/2.svg',
  // ... path ikon lainnya
];
```

### Mengubah Pertanyaan Verifikasi
Edit pertanyaan dan jawaban yang diterima di bagian JavaScript sesuai kebutuhan:
```javascript
const acceptedAnswers = [
  // ... tambahkan variasi jawaban yang diterima
];
```

## 🚀 Deployment

Game ini dapat di-deploy ke berbagai platform:

- **GitHub Pages**: Upload ke repository GitHub
- **Netlify**: Drag & drop folder ke Netlify
- **Vercel**: Connect repository ke Vercel
- **Server Web**: Upload ke hosting web tradisional

## 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan hiburan.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:
1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository atau hubungi developer.

---

**Dibuat dengan ❤️ untuk pengalaman gaming yang menyenangkan!** 