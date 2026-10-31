import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import "./NowPlayingBar.css";

const NOT_ACTIVE = "Belum aktif — music player dikerjakan di FASE 6";

export function NowPlayingBar() {
  return (
    <div className="now-playing">
      <div className="now-playing__cover" aria-hidden="true" />

      <div className="now-playing__track-meta">
        <span className="now-playing__title">No Track Playing</span>
        <span className="now-playing__artist">Sumber audio belum tersedia</span>
      </div>

      <span className="now-playing__demo">DEMO</span>

      <div className="now-playing__transport">
        <div className="now-playing__buttons">
          <button className="now-playing__btn" disabled title={NOT_ACTIVE}>
            <SkipBack size={18} strokeWidth={1.35} />
          </button>
          <button className="now-playing__play" disabled title={NOT_ACTIVE}>
            <Play size={14} strokeWidth={1.4} />
          </button>
          <button className="now-playing__btn" disabled title={NOT_ACTIVE}>
            <SkipForward size={18} strokeWidth={1.35} />
          </button>
        </div>
        <div className="now-playing__progress">
          <span className="now-playing__time">0:00</span>
          <div className="now-playing__bar" aria-hidden="true">
            <i className="now-playing__bar-fill" style={{ width: 0 }} />
          </div>
          <span className="now-playing__time">--:--</span>
        </div>
      </div>

      <div className="now-playing__volume" title={NOT_ACTIVE}>
        <Volume2 size={18} strokeWidth={1.35} />
        <div className="now-playing__vol-bar" aria-hidden="true">
          <i className="now-playing__vol-fill" style={{ width: 0 }} />
        </div>
        <span className="now-playing__vol-text">--</span>
      </div>

      <span className="now-playing__source-chip">
        <i className="now-playing__source-dot" />
        NO SOURCE
      </span>
    </div>
  );
}