# ADR-002 — Avatar VTuber: PNG placeholder (FASE 1) → VRM 3D (FASE 7)

Status: Diterima

## Keputusan
- FASE 1: VTuber Dock memakai avatar PNG statis, disimpan lokal di `src/assets/vtuber/`.
- FASE 7: migrasi ke avatar 3D format VRM via three.js + @pixiv/three-vrm (+ @react-three/fiber).
- Pembuatan karakter: VRoid Studio (gratis) atau aset dengan hak pakai jelas; file disimpan di repo, bukan URL sementara.

## Alasan
- Fokus FASE 1 adalah desktop shell & design system; 3D belum dibutuhkan.
- Ekosistem VRM gratis dan kompatibel WebGL di WebView2 milik Tauri.
- Master Plan: Dock = widget UI di FASE 1; avatar states/animasi = FASE 7; aset tidak boleh mengandalkan URL sementara.

## Konsekuensi
- Komponen VtuberDock dirancang dengan prop `status` (idle/listening/speaking/error) agar migrasi FASE 7 hanya mengganti lapisan visual.
- Aset PNG harus punya hak pakai (ekspor dari Figma project kita atau buatan sendiri).