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

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuId>("home");

  return (
    <div className="desktop-shell">
      <TopBar />
      <div className="shell-body">
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        <main className="main-content">
          {activeMenu === "home" ? (
            <HomePage onNavigate={setActiveMenu} />
          ) : (
            <PlaceholderPage
              title={PAGE_TITLE[activeMenu]}
              targetPhase={PAGE_TARGET_PHASE[activeMenu]}
            />
          )}
        </main>
      </div>
      <div className="bottom-bar">
        <VtuberDock />
        <NowPlayingBar />
      </div>
    </div>
  );
}

export default App;