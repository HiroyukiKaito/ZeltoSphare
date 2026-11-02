import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
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

// Tipe data respons dari Rust (harus cocok dengan struct HealthResponse di lib.rs)
interface HealthStatus {
  status: string;
  service: string;
  version: string;
  db_ready: boolean;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [serviceStatus, setServiceStatus] = useState<"connected" | "disconnected" | "checking">("checking");
  const [healthData, setHealthData] = useState<HealthStatus | null>(null);

  useEffect(() => {
    const checkPythonHealth = async () => {
      try {
        // Memanggil perintah Rust 'python_health'
        const result = await invoke<HealthStatus>("python_health");
        setHealthData(result);
        setServiceStatus("connected");
      } catch (error) {
        console.error("Python service tidak terjangkau:", error);
        setServiceStatus("disconnected");
      }
    };

    checkPythonHealth();
    
    // Opsional: Cek ulang setiap 30 detik
    const interval = setInterval(checkPythonHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  // Tentukan variant badge berdasarkan status
  const badgeVariant = serviceStatus === "connected" ? "ok" : serviceStatus === "checking" ? "neutral" : "error";
  const badgeLabel = serviceStatus === "connected" ? "Connected" : serviceStatus === "checking" ? "Checking..." : "Not Connected";

  return (
    <div className="page home-page">
      <MarketTicker />

      <div className="home-mid-row">
        <Card
          title="SERVICE STATUS"
          subtitle="Koneksi layanan lokal (Python sidecar)"
          badge={{ variant: badgeVariant, label: badgeLabel }}
        >
          {serviceStatus === "connected" && healthData ? (
            <div className="home-note">
              <p>✅ Python service aktif ({healthData.service} v{healthData.version})</p>
              <p>Database: {healthData.db_ready ? "Siap" : "Belum siap"}</p>
            </div>
          ) : (
            <p className="home-note">
              Python service belum dijalankan atau tidak terjangkau — integrasi dimulai pada FASE 3.
              Aplikasi tetap berfungsi normal tanpa service ini.
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