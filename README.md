# Quinzha Beauty 88 — Batulicin (website)

Situs marketing **Next.js (App Router) + JavaScript + Tailwind CSS v4**, deploy-ready Vercel. Pola & standar mengikuti `galuh-banjar-site`. Arah desain: **fresh & jujur** (warm white + coral), dengan **harga transparan** dan galeri **"Ruang Baru"**.

## Jalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```
Deploy: import folder ini ke Vercel (auto-detect Next.js). **Belum di-push/di-deploy** — itu langkah kamu.

## Struktur
```
quinzha-beauty/
├─ app/  layout.js · page.js (+JSON-LD) · globals.css (Tailwind v4 @theme)
│        icon.png · opengraph-image.png · twitter-image.png
├─ components/  Header.js · BeforeAfter.js · ScrollReveal.js
├─ public/  before.jpg  after.jpg  treatment.jpg  dr-amalia.jpg
└─ ...config (next/postcss/tailwind v4/jsconfig/.gitignore)
```

## ⚠️ FOTO = STOK DEMO (wajib ganti sebelum live)
Semua foto di `public/` adalah **foto stok placeholder** (dipinjam dari demo Galuh) — **bukan** klinik/pasien Quinzha asli:
| File | Dipakai di | Catatan |
|---|---|---|
| `/treatment.jpg` | Hero + galeri "Ruang Baru" | stok demo |
| `/dr-amalia.jpg` | Galeri (tim) | stok demo (bukan dokter Quinzha) |
| `/before.jpg` `/after.jpg` | Slider Bukti | **stok demo** |

**Before/after JANGAN dipajang sebagai hasil nyata** sebelum diganti foto pasien Quinzha **dengan izin tertulis**. Nama file `public/` semua **lowercase**, dirujuk `/nama.jpg` (Vercel = Linux = case-sensitive).

## Perlu diverifikasi / diisi sebelum tayang
- **Harga** semua bertanda *"harga ilustrasi"* — ganti dengan harga & promo asli (atau hapus angkanya). Sumber riset menyebut angle "treatment mulai 70rb".
- **Nomor WhatsApp** `0852-2208-8878` → `6285222088878` (terverifikasi dari IG, tetap konfirmasi). Semua tombol WA pakai pesan ter-isi otomatis + deep-link per treatment.
- **Alamat lengkap & jam buka** Batulicin (sekarang "setiap hari · sampai malam" — konfirmasi).
- **Nama dokter** (riset menyebut dr. Ardian & Via — belum dipasang sebagai klaim).
- **Palet & logo**: coral/peach = arah desain (asumsi); ganti di `app/globals.css` (`@theme`).
- Testimoni = **contoh**, ganti dengan asli (izin).

## Data terverifikasi (dari riset publik)
- IG **@quinzhabeautyaesthetic88**; lokasi **Batulicin, Tanah Bumbu**; menu termasuk **Hydra Facial, Skin Booster Korea, Tanam Benang, Filler Bibir**; momentum **pindah ke ruang baru** + angle harga terjangkau.
