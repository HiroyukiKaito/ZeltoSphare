import { useState } from "react";
import { TopBar } from "./components/layout/TopBar";
import { Sidebar } from "./components/layout/Sidebar";
import { NowPlayingBar } from "./components/layout/NowPlayingBar";
import { VtuberDock } from "./components/layout/VtuberDock";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="desktop-shell">
      <TopBar />
      <div className="shell-body">
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        <main className="main-content">
          <h1>Menu Aktif: {activeMenu}</h1>
          <p>Konten halaman akan ditampilkan di sini.</p>
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