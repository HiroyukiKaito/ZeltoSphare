import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import type { MenuId } from "../components/layout/Sidebar";
import "./HomePage.css";

interface HomePageProps {
  onNavigate: (menu: MenuId) => void;
}

const QUICK_LINKS: { menu: MenuId; label: string; description: string }[] = [
  { menu: "ai-chat", label: "AI Chat", description: "Chat dengan satu provider (FASE 4)" },
  { menu: "market", label: "Market Charts", description: "Data market bersumber jelas (FASE 5)" },
  { menu: "music", label: "Music", description: "Player audio lokal (FASE 6)" },
  { menu: "settings", label: "Settings", description: "Preferensi & secret aman (FASE 9)" },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">HOME</h1>
          <p className="page-subtitle">
            Ringkasan status aplikasi — semua data ditampilkan jujur, tanpa angka palsu.
          </p>
        </div>
        <Badge variant="ok">Shell Aktif</Badge>
      </header>

      <div className="home-grid">
        <Card
          title="SERVICE STATUS"
          subtitle="Koneksi layanan lokal (Python sidecar)"
          badge={{ variant: "neutral", label: "Not Connected" }}
        >
          <p className="home-note">
            Python service belum dijalankan — integrasi dimulai pada FASE 3.
            Aplikasi tetap berfungsi normal tanpa service ini.
          </p>
        </Card>

        <Card title="QUICK NAVIGATION" subtitle="Akses cepat ke modul penting">
          <div className="quick-nav">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.menu}
                className="quick-nav-item"
                onClick={() => onNavigate(link.menu)}
              >
                <span className="quick-nav-label">{link.label}</span>
                <span className="quick-nav-desc">{link.description}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}