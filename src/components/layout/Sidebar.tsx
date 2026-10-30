import { 
  Home, MessageSquare, Bot, Mic, Music, 
  BarChart3, Puzzle, Settings 
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'ai-chat', label: 'AI Chat', icon: MessageSquare },
  { id: 'ai-agent', label: 'AI Agent', icon: Bot },
  { id: 'voice-waifu', label: 'Voice Waifu', icon: Mic },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'market', label: 'Market Charts', icon: BarChart3 },
  { id: 'extensions', label: 'Extensions', icon: Puzzle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeMenu, onMenuClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => onMenuClick(item.id)}
            >
              <Icon size={18} className="menu-icon" />
              <span className="menu-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}