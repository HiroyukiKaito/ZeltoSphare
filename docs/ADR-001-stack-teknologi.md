# ADR-001 — Pilihan Stack Teknologi (FASE 0)

Status: Diterima

## Keputusan
- Frontend: React + TypeScript + Vite
- Desktop: Tauri v2 (Rust) di atas WebView2
- Layanan lokal (FASE 3): Python 3 + FastAPI + SQLite
- Identitas: productName `Zelto-Sphare`, identifier `com.zelto.sphare`

## Alasan
- Master Implementation Plan menetapkan stack ini.
- Tauri menghasilkan binary kecil dan akses native yang aman dibanding Electron.
- TypeScript memberi type safety untuk codebase multi-modul.

## Konsekuensi
- Wajib Rust toolchain + MSVC Build Tools di Windows (terinstal: rustc 1.99.1).
- Kompilasi Rust pertama lambat (5–15 menit), selanjutnya incremental.