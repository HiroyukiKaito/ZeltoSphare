import "./MarketTicker.css";

interface TickerItem {
  symbol: string;
  price: string;
  change: number;
}

const TICKER_DATA: TickerItem[] = [
  { symbol: "BTC / USD", price: "$97,420.50", change: 2.41 },
  { symbol: "ETH / USD", price: "$3,512.18", change: -0.84 },
  { symbol: "SOL / USD", price: "$214.66", change: 5.12 },
  { symbol: "NASDAQ", price: "$21,840.3", change: 0.62 },
  { symbol: "GOLD", price: "$2,964.10", change: -0.21 },
];

export function MarketTicker() {
  return (
    <div className="market-ticker-row">
      {TICKER_DATA.map((item) => (
        <div key={item.symbol} className="ticker-card">
          <div className="ticker-header">
            <span className="ticker-symbol">{item.symbol}</span>
            <span className={`ticker-badge ${item.change >= 0 ? "up" : "down"}`}>
              {item.change >= 0 ? "+" : ""}{item.change}%
            </span>
          </div>
          <div className="ticker-body">
            <span className="ticker-price">{item.price}</span>
            <svg className="sparkline" viewBox="0 0 64 30" preserveAspectRatio="none">
              <path 
                d={item.change >= 0 
                  ? "M0 25 L10 20 L20 22 L30 15 L40 18 L50 10 L64 5" 
                  : "M0 5 L10 10 L20 8 L30 15 L40 12 L50 20 L64 25"}
                fill="none"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="ticker-demo-badge">DEMO</span>
        </div>
      ))}
    </div>
  );
}