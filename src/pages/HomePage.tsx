import { Card } from "../components/ui/Card";
import type { MenuId } from "../components/layout/Sidebar";
import { MarketTicker } from "../components/home/MarketTicker";
import { TokenUsage } from "../components/home/TokenUsage";
import { SystemMonitor } from "../components/home/SystemMonitor";
import { QuickNavigation } from "../components/home/QuickNavigation";
import "./HomePage.css";

interface HomePageProps {
  onNavigate: (menu: MenuId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="page home-page">
      <MarketTicker />
      <div className="home-mid-row">
        <Card
          title="SERVICE STATUS"
          subtitle="Koneksi layanan lokal (Python sidecar)"
          badge={{ variant: "neutral", label: "Not Connected" }}>
          <p className="home-note">
            Python service belum dijalankan — integrasi dimulai pada FASE 3.
            Aplikasi tetap berfungsi normal tanpa service ini.
          </p>
        </Card>

        <TokenUsage />
      </div>

      <SystemMonitor />

      <QuickNavigation onNavigate={onNavigate} />
    </div>
  );
}