import type { ReactNode } from "react";
import {
  Home,
  MessageSquare,
  Bot,
  Mic,
  Music,
  BarChart3,
  Puzzle,
  Settings,
  type LucideIcon,
} from "lucide-react";
import "./Sidebar.css";

export type MenuId =
  | "home"
  | "ai-chat"
  | "ai-agent"
  | "voice-waifu"
  | "music"
  | "market"
  | "extensions"
  | "settings";

interface SidebarProps {
  activeMenu: MenuId;
  onMenuClick: (menu: MenuId) => void;
  footer?: ReactNode;
}

const MENU_ITEMS: { id: MenuId; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "ai-chat", label: "AI Chat", icon: MessageSquare },
  { id: "ai-agent", label: "AI Agent", icon: Bot },
  { id: "voice-waifu", label: "Voice Waifu", icon: Mic },
  { id: "music", label: "Music", icon: Music },
  { id: "market", label: "Market Charts", icon: BarChart3 },
  { id: "extensions", label: "Extensions", icon: Puzzle },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ activeMenu, onMenuClick, footer }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <svg className="sidebar__logo-icon" viewBox="0 0 30 30" aria-hidden="true">
          <circle cx="15" cy="15" r="10" fill="none" stroke="var(--color-neon)" strokeWidth="2" />
          <circle cx="15" cy="15" r="4" fill="var(--color-violet)" />
          <circle cx="24" cy="9" r="2.5" fill="var(--color-neon)" />
        </svg>
        <div className="sidebar__logo-text">
          <span className="sidebar__brand">ZELTO-SPHARE</span>
          <span className="sidebar__tagline">DESKTOP AI SUITE</span>
        </div>
      </div>

      <span className="sidebar__label">MENU</span>

      <nav className="sidebar__nav-list">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`sidebar__nav ${activeMenu === item.id ? "sidebar__nav--active" : ""}`}
              onClick={() => onMenuClick(item.id)}
            >
              <Icon size={18} strokeWidth={1.35} className="sidebar__nav-icon" />
              <span className="sidebar__nav-text">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar__spacer" />
      {footer ? <div className="sidebar__vtuber-dock">{footer}</div> : null}
    </aside>
  );
}