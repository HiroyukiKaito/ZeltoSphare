import type { CSSProperties } from "react";
import { Mic, MicOff, Maximize2 } from "lucide-react";
import "./VtuberDock.css";

export type VtuberStatus = "idle" | "listening" | "speaking" | "error";

interface VtuberDockProps {
  status?: VtuberStatus;
  name?: string;
}

const STATUS_LABEL: Record<VtuberStatus, string> = {
  idle: "IDLE",
  listening: "LISTENING",
  speaking: "SPEAKING",
  error: "ERROR",
};

const NOT_ACTIVE = "Belum aktif — voice dikerjakan di FASE 7";

/* Avatar Aya digambar penuh dengan CSS sesuai spesifikasi Figma (nexus7-all.css) */
const AVATAR_PARTS: { cls: string; style: CSSProperties }[] = [
  { cls: "vta-glow", style: { left: 30, top: 10, width: 120, height: 110 } },
  { cls: "vta-ear vta-ear--l", style: { left: 44, top: 0, width: 30, height: 34 } },
  { cls: "vta-ear vta-ear--r", style: { left: 106, top: 0, width: 30, height: 34 } },
  { cls: "vta-ear-in vta-ear-in--l", style: { left: 50, top: 8, width: 16, height: 20 } },
  { cls: "vta-ear-in vta-ear-in--r", style: { left: 114, top: 8, width: 16, height: 20 } },
  { cls: "vta-hair-back", style: { left: 38, top: 14, width: 104, height: 110 } },
  { cls: "vta-body", style: { left: 38, top: 86, width: 104, height: 60 } },
  { cls: "vta-collar", style: { left: 70, top: 90, width: 40, height: 10 } },
  { cls: "vta-sidelock vta-sidelock--l", style: { left: 44, top: 40, width: 20, height: 66 } },
  { cls: "vta-sidelock vta-sidelock--r", style: { left: 116, top: 40, width: 20, height: 66 } },
  { cls: "vta-face", style: { left: 57, top: 26, width: 66, height: 74 } },
  { cls: "vta-eye", style: { left: 68, top: 60, width: 13, height: 18 } },
  { cls: "vta-eye", style: { left: 99, top: 60, width: 13, height: 18 } },
  { cls: "vta-iris", style: { left: 71, top: 63, width: 7, height: 11 } },
  { cls: "vta-iris", style: { left: 102, top: 63, width: 7, height: 11 } },
  { cls: "vta-shine", style: { left: 74, top: 64, width: 3, height: 3 } },
  { cls: "vta-shine", style: { left: 105, top: 64, width: 3, height: 3 } },
  { cls: "vta-blush", style: { left: 62, top: 80, width: 12, height: 6 } },
  { cls: "vta-blush", style: { left: 106, top: 80, width: 12, height: 6 } },
  { cls: "vta-mouth", style: { left: 86, top: 86, width: 8, height: 4 } },
  { cls: "vta-bangs", style: { left: 50, top: 16, width: 80, height: 36 } },
  { cls: "vta-phone vta-phone--l", style: { left: 32, top: 58, width: 14, height: 26 } },
  { cls: "vta-phone vta-phone--r", style: { left: 134, top: 58, width: 14, height: 26 } },
];

export function VtuberDock({ status = "idle", name = "Aya" }: VtuberDockProps) {
  return (
    <div className={`vtuber-dock vtuber-dock--${status}`} title="VTuber companion (voice belum aktif)">
      <div className="vtuber-dock__avatar" aria-hidden="true">
        {AVATAR_PARTS.map((part, index) => (
          <i key={index} className={`vta ${part.cls}`} style={part.style} />
        ))}
      </div>

      <div className="vtuber-dock__name-row">
        <span className="vtuber-dock__name">{name}</span>
        <span className="vtuber-dock__chip">
          <i className="vtuber-dock__chip-dot" />
          {STATUS_LABEL[status]}
        </span>
      </div>

      <p className="vtuber-dock__transcript">Menunggu sapaan… modul voice belum aktif.</p>

      <div className="vtuber-dock__waveform" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="vtuber-dock__controls">
        <button className="vtuber-dock__btn" disabled title={NOT_ACTIVE}>
          <MicOff size={16} strokeWidth={1.2} />
        </button>
        <button className="vtuber-dock__mic" disabled title={NOT_ACTIVE}>
          <Mic size={20} strokeWidth={1.67} />
        </button>
        <button className="vtuber-dock__btn" disabled title={NOT_ACTIVE}>
          <Maximize2 size={16} strokeWidth={1.2} />
        </button>
      </div>
    </div>
  );
}