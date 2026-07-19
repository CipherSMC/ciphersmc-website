/**
 * LiveAnalysisSection — Cipher SMC
 * Design: Institutional Edge — TradingView embedded chart with terminal HUD framing
 * Uses direct <iframe> src approach for reliable full-height rendering
 */
import { useEffect, useRef, useState } from "react";
import { Activity, ExternalLink, ChevronDown } from "lucide-react";

const SYMBOLS = [
  { label: "BTC/USDT", value: "BINANCE:BTCUSDT" },
  { label: "ETH/USDT", value: "BINANCE:ETHUSDT" },
  { label: "XAU/USD", value: "OANDA:XAUUSD" },
  { label: "EUR/USD", value: "OANDA:EURUSD" },
  { label: "SOL/USDT", value: "BINANCE:SOLUSDT" },
  { label: "BNB/USDT", value: "BINANCE:BNBUSDT" },
  { label: "XAUT/USD", value: "BINANCE:XAUTUSDT" },
  { label: "HYPE/USDT", value: "HYPERLIQUID:HYPEUSDT" },
];

function buildIframeSrc(symbol: string) {
  const params = new URLSearchParams({
    symbol,
    interval: "D",
    timezone: "Asia/Phnom_Penh",
    theme: "dark",
    style: "1",
    locale: "en",
    backgroundColor: "rgba(10,15,30,1)",
    gridColor: "rgba(0,212,170,0.04)",
    hide_top_toolbar: "false",
    hide_legend: "false",
    allow_symbol_change: "true",
    save_image: "true",
    hide_volume: "false",
    withdateranges: "true",
    details: "false",
    hotlist: "false",
    calendar: "false",
    autosize: "true",
    hide_side_toolbar: "false",
    // Suppress the right-side watchlist panel
    watchlist: "[]",
    show_popup_button: "false",
    popup_width: "0",
    popup_height: "0",
    no_referral_id: "true",
    container_id: "cipher_tv_chart",
  });
  // Use the chart embed URL which does not include the watchlist panel
  return `https://s.tradingview.com/embed-widget/advanced-chart/?${params.toString()}`;
}

export default function LiveAnalysisSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSymbol, setActiveSymbol] = useState(SYMBOLS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section
      id="analysis"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ background: "#080d1a" }}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30" />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)" }}
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 animate-fade-up">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-medium mb-4"
              style={{
                background: "rgba(0, 212, 170, 0.07)",
                border: "1px solid rgba(0, 212, 170, 0.2)",
                color: "#00d4aa",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.06em",
              }}
            >
              <Activity size={11} />
              LIVE ANALYSIS
            </div>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Market{" "}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
              Interactive institutional-grade charts. Switch instruments, change timeframes,
              and draw directly on the chart — powered by TradingView.
            </p>
          </div>

          {/* Symbol selector */}
          <div className="relative flex-shrink-0" data-dropdown>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{
                background: "rgba(0, 212, 170, 0.08)",
                border: "1px solid rgba(0, 212, 170, 0.25)",
                color: "#00d4aa",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-brand"
                style={{ background: "#00d4aa" }}
              />
              {activeSymbol.label}
              <ChevronDown
                size={14}
                className="transition-transform duration-150"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {dropdownOpen && (
              <div
                className="absolute right-0 top-full mt-1 w-48 rounded-lg overflow-hidden z-20"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(0,212,170,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}
              >
                {SYMBOLS.map((sym) => (
                  <button
                    key={sym.value}
                    onClick={() => {
                      setActiveSymbol(sym);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-100 hover:bg-white/5"
                    style={{
                      color: activeSymbol.value === sym.value ? "#00d4aa" : "#9ca3af",
                      fontFamily: "'JetBrains Mono', monospace",
                      background: activeSymbol.value === sym.value ? "rgba(0,212,170,0.07)" : "transparent",
                    }}
                  >
                    {sym.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chart container */}
        <div
          className="animate-fade-up rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(0, 212, 170, 0.15)",
            boxShadow: "0 0 60px rgba(0, 212, 170, 0.06), 0 24px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* HUD top bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: "rgba(10, 15, 30, 0.98)",
              borderBottom: "1px solid rgba(0, 212, 170, 0.1)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444", opacity: 0.7 }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#f59e0b", opacity: 0.7 }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e", opacity: 0.7 }} />
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
              >
                CIPHER_SMC · CHART_TERMINAL
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span
                className="hidden sm:flex items-center gap-1.5 text-xs"
                style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-brand"
                  style={{ background: "#00d4aa" }}
                />
                LIVE · {activeSymbol.label}
              </span>
              <a
                href={`https://www.tradingview.com/chart/?symbol=${activeSymbol.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs transition-colors hover:text-white"
                style={{ color: "#4b5563" }}
              >
                <ExternalLink size={12} />
                <span className="hidden sm:inline" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Open Full
                </span>
              </a>
            </div>
          </div>

          {/* TradingView iframe — direct embed for reliable full-height rendering */}
          <div style={{ height: "75vh", minHeight: "550px", maxHeight: "850px", position: "relative" }}>
            <iframe
              key={activeSymbol.value}
              src={buildIframeSrc(activeSymbol.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
              allowFullScreen
              title={`TradingView Chart — ${activeSymbol.label}`}
            />
            {/* Cover the TradingView watchlist/right-panel — it is stored in user's browser
                localStorage and cannot be disabled via URL params alone */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "220px",
                background: "#0a0f1e",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-5 text-center text-xs animate-fade-up"
          style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
        >
          NFA · DYOR · Chart data provided by TradingView. For educational purposes only.
        </p>
      </div>
    </section>
  );
}
