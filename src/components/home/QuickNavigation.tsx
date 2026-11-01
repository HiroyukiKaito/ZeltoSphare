import { Card } from "../ui/Card";
import type { MenuId } from "../layout/Sidebar";
import "./QuickNavigation.css";

interface QuickNavigationProps {
  onNavigate: (menu: MenuId) => void;
}

const QUICK_LINKS: { menu: MenuId; label: string; description: string }[] = [
  { menu: "ai-chat", label: "AI Chat", description: "Chat dengan satu provider (FASE 4)" },
  { menu: "market", label: "Market Charts", description: "Data market bersumber jelas (FASE 5)" },
  { menu: "music", label: "Music", description: "Player audio lokal (FASE 6)" },
  { menu: "settings", label: "Settings", description: "Preferensi & secret aman (FASE 9)" },
];

export function QuickNavigation({ onNavigate }: QuickNavigationProps) {
  return (
    <Card title="QUICK NAVIGATION" subtitle="Akses cepat ke modul penting">
      <div className="quick-nav">
        {QUICK_LINKS.map((link) => (
          <button
            key={link.menu}
            type="button"
            className="quick-nav-item"
            onClick={() => onNavigate(link.menu)}
          >
            <span className="quick-nav-label">{link.label}</span>
            <span className="quick-nav-desc">{link.description}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}