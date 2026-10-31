import { useState } from "react";
import { TopBar } from "./components/layout/TopBar";
import { Sidebar, type MenuId } from "./components/layout/Sidebar";
import { NowPlayingBar } from "./components/layout/NowPlayingBar";
import { VtuberDock } from "./components/layout/VtuberDock";
import { HomePage } from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import "./App.css";

const PAGE_TITLE: Record<Exclude<MenuId, "home">, string> = {
  "ai-chat": "AI CHAT",
  "ai-agent": "AI AGENT",
  "voice-waifu": "VOICE WAIFU",
  music: "MUSIC",
  market: "MARKET CHARTS",
  extensions: "EXTENSIONS",
  settings: "SETTINGS",
};

const PAGE_TARGET_PHASE: Record<Exclude<MenuId, "home">, string> = {
  "ai-chat": "4",
  "ai-agent": "8",
  "voice-waifu": "7",
  music: "6",
  market: "5",
  extensions: "9",
  settings: "9",
};

const PAGE_SUBTITLE: Record<MenuId, string> = {
  home: "Ringkasan status aplikasi — data jujur, tanpa angka palsu",
  "ai-chat": "Percakapan dengan satu provider AI (FASE 4)",
  "ai-agent": "Otomasi bertahap dengan persetujuan user (FASE 8)",
  "voice-waifu": "Kompanion suara push-to-talk (FASE 7)",
  music: "Player audio lokal persisten (FASE 6)",
  market: "Data market dengan sumber yang jelas (FASE 5)",
  extensions: "Katalog ekstensi lokal (FASE 9)",
  settings: "Preferensi, secret, dan keamanan (FASE 9)",
};

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuId>("home");

  return (
    <div className="shell-page">
      <div className="shell-glow shell-glow--a" aria-hidden="true" />
      <div className="shell-glow shell-glow--b" aria-hidden="true" />
      <Sidebar
        activeMenu={activeMenu}
        onMenuClick={setActiveMenu}
        footer={<VtuberDock status="idle" name="Aya" />}
      />
      <div className="shell-main">
        <TopBar
          title={activeMenu === "home" ? "HOME" : PAGE_TITLE[activeMenu]}
          subtitle={PAGE_SUBTITLE[activeMenu]}
        />
        <main className="shell-content">
          {activeMenu === "home" ? (
            <HomePage onNavigate={setActiveMenu} />
          ) : (
            <PlaceholderPage
              title={PAGE_TITLE[activeMenu]}
              targetPhase={PAGE_TARGET_PHASE[activeMenu]}
            />
          )}
        </main>
        <NowPlayingBar />
      </div>
    </div>
  );
}

export default App;