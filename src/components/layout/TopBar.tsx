import { Bell, Search } from "lucide-react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./TopBar.css";

interface TopBarProps {
  title: string;
  subtitle: string;
}

const NOT_ACTIVE = "Belum aktif — akan tersedia pada fase berikutnya";

export function TopBar({ title, subtitle }: TopBarProps) {
  const appWindow = getCurrentWindow();

  return (
    <header className="top-bar" data-tauri-drag-region>
      <div className="top-bar__heading" data-tauri-drag-region>
        <h1 className="top-bar__title">{title}</h1>
        <span className="top-bar__subtitle">{subtitle}</span>
      </div>

      <div className="top-bar__right">
        <label className="top-bar__search">
          <Search size={16} strokeWidth={1.35} />
          <input type="text" placeholder="Cari modul, perintah, track..." disabled title={NOT_ACTIVE} />
          <span className="top-bar__kbd">CTRL K</span>
        </label>

        <span
          className="top-bar__api-chip top-bar__api-chip--off"
          title="Provider AI belum dikonfigurasi (FASE 4)"
        >
          <i className="top-bar__api-dot" />
          NO API KEY
        </span>

        <button className="top-bar__bell" disabled title={NOT_ACTIVE}>
          <Bell size={18} strokeWidth={1.35} />
        </button>

        <span className="top-bar__profile" title="Profil lokal">ZS</span>

        <div className="top-bar__win-controls">
          <button className="top-bar__win" title="Minimize" onClick={() => { void appWindow.minimize(); }}>
            ─
          </button>
          <button className="top-bar__win" title="Maximize" onClick={() => { void appWindow.toggleMaximize(); }}>
            □
          </button>
          <button className="top-bar__win top-bar__win--close" title="Close" onClick={() => { void appWindow.close(); }}>
            ×
          </button>
        </div>
      </div>
    </header>
  );
}