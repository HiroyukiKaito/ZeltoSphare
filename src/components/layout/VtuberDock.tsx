import vtuberAvatar from "../../assets/vtuber/vtuber-avatar.png";
import "./VtuberDock.css";

export type VtuberStatus = "idle" | "listening" | "speaking" | "error";

interface VtuberDockProps {
  status?: VtuberStatus;
  name?: string;
}

const STATUS_CONFIG: Record<VtuberStatus, { label: string }> = {
  idle: { label: "IDLE" },
  listening: { label: "LISTENING" },
  speaking: { label: "SPEAKING" },
  error: { label: "ERROR" },
};

export function VtuberDock({ status = "idle", name = "Aya" }: VtuberDockProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div className="vtuber-dock" title="VTuber companion (fungsi voice belum aktif)">
      <div className={`vtuber-avatar status-${status}`}>
        <img src={vtuberAvatar} alt={`Avatar ${name}`} />
      </div>
      <div className="vtuber-info">
        <span className="vtuber-name">{name}</span>
        <span className={`vtuber-status status-${status}`}>
          <span className="status-dot" />
          {config.label}
        </span>
      </div>
    </div>
  );
}