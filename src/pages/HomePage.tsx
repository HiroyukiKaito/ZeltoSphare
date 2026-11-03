import { Card } from "../components/ui/Card";
import type { MenuId } from "../components/layout/Sidebar";
import { MarketTicker } from "../components/home/MarketTicker";
import { TokenUsage } from "../components/home/TokenUsage";
import { SystemMonitor } from "../components/home/SystemMonitor";
import { QuickNavigation } from "../components/home/QuickNavigation";
import { MiniChatWidget } from "../components/home/MiniChatWidget";
import "./HomePage.css";

interface HomePageProps {
  onNavigate: (menu: MenuId) => void;
  serviceStatus: "connected" | "disconnected" | "checking"; // <-- DITERIMA DARI App.tsx
}

export function HomePage({ onNavigate, serviceStatus }: HomePageProps) {
  // HAPUS useState dan useEffect dari sini (sudah dipindah ke App.tsx)

  const badgeVariant = serviceStatus === "connected" ? "ok" : serviceStatus === "checking" ? "neutral" : "error";
  const badgeLabel = serviceStatus === "connected" ? "Connected" : serviceStatus === "checking" ? "Checking..." : "Not Connected";

  return (
    <div className="page home-page">
      <MarketTicker />
      
      <div className="home-mid-row">
        <Card
          title="SERVICE STATUS"
          subtitle={serviceStatus === "connected" ? "Mini Chat Cepat" : "Koneksi layanan lokal (Python sidecar)"}
          badge={{ variant: badgeVariant, label: badgeLabel }}
        >
          {serviceStatus === "connected" ? (
            <MiniChatWidget 
              isConnected={true} 
              onExpandChat={() => onNavigate("ai-chat")} 
            />
          ) : (
            <p className="home-note">
              Python service belum dijalankan atau tidak terjangkau.
              <br />
              <small style={{ opacity: 0.7 }}>Aplikasi tetap berfungsi normal tanpa service ini (Mode Offline).</small>
            </p>
          )}
        </Card>

        <TokenUsage />
      </div>

      <SystemMonitor />
      <QuickNavigation onNavigate={onNavigate} />
    </div>
  );
}