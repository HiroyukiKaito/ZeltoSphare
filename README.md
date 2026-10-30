# Zelto-Sphare — Desktop AI Suite

Aplikasi desktop pribadi berbasis AI untuk Windows dengan gaya visual
cyberpunk minimalis. Proyek ini mengikuti Master Implementation Plan
berjenjang

## Stack Teknologi

| Layer | Teknologi |
|---|---|
| Frontend UI | React + TypeScript + Vite |
| Desktop runtime | Tauri v2 (Rust) |
| Layanan lokal (fase berikutnya) | Python 3 + FastAPI + SQLite |

## Versi Tool Development (catatan FASE 0)

- Node.js: v22.17.0
- npm: 10.9.2
- Rust (rustc): 1.99.1
- Cargo: 1.99.1
- Python: 3.11.9
- Git: 2.55.0.windows.5
- Windows: Visual Studio Build Tools (MSVC + Windows 11 SDK)

## Perintah Menjalankan

```bash
# instal dependency frontend
npm install

# jalankan aplikasi desktop (mode development)
npm run tauri dev

# frontend saja di browser (tanpa jendela desktop)
npm run dev

# build frontend produksi
npm run build

# paket installer Windows (fase distribusi)
npm run tauri build
```

## Struktur Project

- `src/` — halaman, komponen, hooks, dan style React
- `src-tauri/` — konfigurasi dan kode desktop Rust/Tauri
- `docs/` — keputusan arsitektur (akan diisi bertahap)

## Status Fase

- [x] FASE 0 — Persiapan lingkungan dan keputusan teknis
- [x] FASE 1 — Desktop shell dan design system
- [ ] FASE 2 — Home dashboard dengan state jujur
- [ ] FASE 3 — Python service dan persistence
- [ ] FASE 4 — AI Chat dasar

## Prinsip Keamanan

- Secret/API key tidak pernah masuk repository.
- Layanan lokal hanya bind ke 127.0.0.1.
- Tidak ada tindakan berbahaya tanpa persetujuan pengguna.