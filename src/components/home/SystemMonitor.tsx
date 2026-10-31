import "./SystemMonitor.css";

interface GaugeProps {
  label: string;
  value: string;
  subtext: string;
  colorClass: string;
  percent?: number; // untuk gauge lingkaran
}

function Gauge({ label, value, subtext, colorClass, percent }: GaugeProps) {
  return (
    <div className={`gauge-card ${colorClass}`}>
      <div className="gauge-circle">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(27,58,115,0.8)" strokeWidth="8" />
          <circle 
            cx="50" cy="50" r="45" fill="none" 
            stroke="currentColor" strokeWidth="8"
            strokeDasharray={`${percent || 0} 283`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <span className="gauge-value">{value}</span>
      </div>
      <span className="gauge-name">{label}</span>
      <span className="gauge-sub">{subtext}</span>
    </div>
  );
}

export function SystemMonitor() {
  return (
    <div className="system-monitor-panel">
      <div className="panel-header">
        <h3>SYSTEM MONITOR</h3>
        <span className="chip red">NOT CONNECTED</span>
      </div>
      
      <div className="gauges-grid">
        <Gauge label="CPU" value="37%" subtext="Ryzen 9 7950X · 4.6GHz" colorClass="cpu" percent={37} />
        <Gauge label="GPU" value="62%" subtext="RTX 4080 · 11.2/16GB" colorClass="gpu" percent={62} />
        <Gauge label="RAM" value="48%" subtext="15.4 / 32 GB" colorClass="ram" percent={48} />
        <Gauge label="STORAGE" value="71%" subtext="142 / 2 TB NVMe" colorClass="storage" percent={71} />
        <Gauge label="TEMP" value="58°C" subtext="CPU 58° · GPU 68°" colorClass="temp" percent={58} />
        <Gauge label="POWER" value="212W" subtext="PSU 850W · 25% load" colorClass="power" percent={21} />
      </div>
    </div>
  );
}