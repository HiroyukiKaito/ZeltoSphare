import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import "./NowPlayingBar.css";

const NOT_ACTIVE = "Belum aktif — Music player dikerjakan di FASE 6";

export function NowPlayingBar() {
  return (
    <div className="now-playing-bar">
      <div className="track-info">
        <div className="track-artwork" aria-hidden="true" />
        <div className="track-details">
          <div className="track-title">No Track Playing</div>
          <div className="track-artist">Sumber audio belum tersedia</div>
        </div>
        <span className="demo-badge">DEMO</span>
      </div>

      <div className="progress-section" title={NOT_ACTIVE}>
        <span className="progress-time">0:00</span>
        <div className="progress-bar" aria-hidden="true">
          <div className="progress-level" style={{ width: "0%" }} />
        </div>
        <span className="progress-time">--:--</span>
      </div>

      <div className="player-controls">
        <button className="control-btn" disabled title={NOT_ACTIVE}>
          <SkipBack size={18} />
        </button>
        <button className="control-btn play-btn" disabled title={NOT_ACTIVE}>
          <Play size={20} />
        </button>
        <button className="control-btn" disabled title={NOT_ACTIVE}>
          <SkipForward size={18} />
        </button>
      </div>

      <div className="volume-control">
        <Volume2 size={18} />
        <div className="volume-slider" aria-hidden="true">
          <div className="volume-level" style={{ width: "0%" }} />
        </div>
      </div>
    </div>
  );
}