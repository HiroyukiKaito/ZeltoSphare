import './TopBar.css';

export function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <div className="logo-icon"></div>
        <h1 className="app-title">ZELTO-SPHARE</h1>
      </div>
      <div className="top-bar-center">
        <div className="system-status">
          <span className="status-indicator online"></span>
          <span className="status-text">SYSTEM ONLINE</span>
        </div>
      </div>
      <div className="top-bar-right">
        <div className="window-controls">
          <button className="control minimize">─</button>
          <button className="control maximize">□</button>
          <button className="control close">×</button>
        </div>
      </div>
    </header>
  );
}