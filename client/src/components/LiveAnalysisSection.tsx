/**
 * LiveAnalysisSection — Cipher SMC
 * Design: Institutional Edge — TradingView embedded chart with terminal HUD framing
 * Chart: BTCUSDT on Binance, dark theme, full-featured interactive widget
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
];

export default function LiveAnalysisSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSymbol, setActiveSymbol] = useState(SYMBOLS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Inject TradingView Advanced Chart widget
  const loadWidget = (symbol: string) => {
    if (!widgetRef.current) return;

    // Clear previous widget
    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: "D",
      timezone: "Asia/Phnom_Penh",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(10, 15, 30, 1)",
      gridColor: "rgba(0, 212, 170, 0.04)",
      hide_top_toolbar: false,
      hide_legend: false,
      allow_symbol_change: true,
      save_image: true,
      calendar: false,
      hide_volume: false,
      support_host: "https://www.tradingview.com",
    });

    widgetRef.current.appendChild(script);
  };

  useEffect(() => {
    loadWidget(activeSymbol.value);
  }, [activeSymbol]);

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

  return (
    <section
      id="analysis"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 animate-fade-up">
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
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
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
                className="absolute right-0 top-full mt-1 w-44 rounded-lg overflow-hidden z-20"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(0,212,170,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
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
          className="animate-fade-up rounded-2xl overflow-hidden relative"
          style={{
            border: "1px solid rgba(0, 212, 170, 0.15)",
            boxShadow: "0 0 40px rgba(0, 212, 170, 0.05), 0 20px 60px rgba(0,0,0,0.4)",
          }}
          ref={containerRef}
        >
          {/* HUD top bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{
              background: "rgba(10, 15, 30, 0.95)",
              borderBottom: "1px solid rgba(0, 212, 170, 0.1)",
            }}
          >
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444", opacity: 0.7 }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b", opacity: 0.7 }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e", opacity: 0.7 }} />
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
              >
                CIPHER_SMC · CHART_TERMINAL
              </span>
            </div>
            <div className="flex items-center gap-3">
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
                className="flex items-center gap-1 text-xs transition-colors hover:text-white"
                style={{ color: "#4b5563" }}
              >
                <ExternalLink size={11} />
                <span className="hidden sm:inline" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Open Full
                </span>
              </a>
            </div>
          </div>

          {/* TradingView widget mount point */}
          <div
            ref={widgetRef}
            className="tradingview-widget-container"
            style={{ height: "700px", background: "#0a0f1e" }}
          >
            <div
              className="tradingview-widget-container__widget"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-4 text-center text-xs animate-fade-up"
          style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
        >
          NFA · DYOR · Chart data provided by TradingView. For educational purposes only.
        </p>
      </div>
    </section>
  );
}
