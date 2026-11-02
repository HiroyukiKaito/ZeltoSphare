import { useState } from "react";
import "./TokenUsage.css";

const TABS = ["AI Chat", "AI Agent", "Voice Waifu"];

export function TokenUsage() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="usage-panel">
      <div className="panel-header">
        <h3>
          TOKEN USAGE
          <span className="usage-demo-chip">DEMO</span>
        </h3>
        <div className="tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`tab ${i === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(i)}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="kpi-row">
        <div className="kpi">
          <span className="kpi-label">INPUT</span>
          <span className="kpi-value input">1.84M</span>
        </div>
        <div className="kpi">
          <span className="kpi-label">OUTPUT</span>
          <span className="kpi-value output">612K</span>
        </div>
        <div className="kpi">
          <span className="kpi-label">REQUESTS</span>
          <span className="kpi-value requests">1,284</span>
        </div>
        <div className="kpi">
          <span className="kpi-label">EST. COST</span>
          <span className="kpi-value cost">$2.31</span>
        </div>
      </div>
      <div className="chart-area">
        <div className="chart-line input-line"></div>
        <div className="chart-line output-line"></div>
        <div className="x-labels">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
        </div>
      </div>
    </div>
  );
}