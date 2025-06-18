# Alan Resto Frontend

Ini adalah proyek frontend untuk **Alan Resto** yang dibangun menggunakan **Vue.js**. Frontend ini berkomunikasi dengan backend Laravel melalui API dan bisa dijalankan secara lokal untuk pengujian dan pengembangan.

## 🔧 Prasyarat

Sebelum mulai, pastikan perangkat kamu sudah terpasang:

- Node.js (disarankan versi LTS, minimal 16.x)
- npm (biasanya sudah terinstal bersama Node.js)
- Git
- Backend Alan Resto sudah aktif di `http://127.0.0.1:8000`

## 🚀 Langkah Instalasi

### 1. Kloning Repository

Clone repo ke lokal:

```bash
git clone https://github.com/DandungAji/alan-resto-frontend.git
cd alan-resto-frontend
```

### 2. Install Dependensi

Install semua dependensi Node.js:

```bash
npm install
```

> ⚠️ Pastikan backend sudah aktif sebelum menjalankan frontend.

### 3. Jalankan Aplikasi

Mulai server development Vue:

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain sesuai info di terminal).

## 🧪 Uji Aplikasi

Buka browser ke `http://localhost:5173`. Pastikan backend aktif untuk menjalankan fitur-fitur berikut:

- Menampilkan daftar menu (`GET /api/products`)
- Menambahkan menu baru (`POST /api/products`, dengan data: `name`, `price`, `image`)

**Cara uji tambah menu:**

1. Masukkan nama dan harga menu
2. Upload gambar (pastikan pratinjau gambar muncul)
3. Klik **Simpan** untuk kirim data ke backend

## ❗ Troubleshooting

- **Gagal install:** Coba pastikan Node.js & npm sudah terpasang. Cek versi: `npm -v`
- **API tidak nyambung:** Pastikan backend di `http://127.0.0.1:8000` berjalan dan base URL di kode sudah benar
- **App error saat run:** Periksa error yang muncul setelah `npm run dev`. Kalau perlu, jalankan ulang `npm install`
