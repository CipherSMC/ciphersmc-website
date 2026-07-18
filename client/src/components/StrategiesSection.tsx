/**
 * StrategiesSection — Cipher SMC
 * Design: Institutional Edge — terminal panel cards, sharp trader copy
 */
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const strategies = [
  {
    name: "Photon Concept",
    tag: "PRIMARY",
    description:
      "Precision-based methodology for identifying institutional order flow. Combines market structure analysis with liquidity concepts to locate high-probability entry points where smart money is positioned.",
    features: ["Order Flow", "Liquidity Mapping", "High-Probability Setups"],
    color: "#00d4aa",
  },
  {
    name: "ICT Concept",
    tag: "CORE",
    description:
      "Inner Circle Trader methodology — Market Maker Buy/Sell Models (MMXM), Fair Value Gaps (FVG), Optimal Trade Entry (OTE), and institutional-grade Smart Money analysis across all timeframes.",
    features: ["MMXM Models", "Fair Value Gaps", "OTE Zones", "Smart Money"],
    color: "#00b4d8",
    link: "https://t.me/s/CipherTA",
  },
  {
    name: "BBMA Strategy",
    tag: "CONFLUENCE",
    description:
      "Bollinger Bands & Moving Averages confluence system. Institutional analytical tool combining high-probability BBMA setups with multi-timeframe logic and predictive entry zones.",
    features: ["Bollinger Bands", "Moving Averages", "Multi-TF", "Entry Zones"],
    color: "#a78bfa",
    link: "https://github.com/CipherSMC/Ultimate_BBMA_Confluence_Suite",
  },
];

const markets = [
  { name: "Forex (FX)", pairs: ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"], icon: "💱" },
  { name: "Digital Assets", pairs: ["BTC/USDT", "ETH/USDT", "HYPE", "ALTS"], icon: "₿" },
  { name: "Equities", pairs: ["S&P 500", "NASDAQ", "Indices"], icon: "📈" },
];

// Market structure line decoration
function StructureLine() {
  return (
    <svg
      viewBox="0 0 600 40"
      className="absolute bottom-0 left-0 right-0 w-full opacity-[0.07]"
      style={{ pointerEvents: "none" }}
      preserveAspectRatio="none"
    >
      <polyline
        points="0,35 60,25 120,30 180,15 240,20 300,8 360,15 420,5 480,12 540,2 600,8"
        fill="none"
        stroke="#00d4aa"
        strokeWidth="1.5"
      />
      {[60, 180, 300, 420, 540].map((x) => (
        <circle key={x} cx={x} cy={x === 60 ? 25 : x === 180 ? 15 : x === 300 ? 8 : x === 420 ? 5 : 2} r="2.5" fill="#00d4aa" />
      ))}
    </svg>
  );
}

export default function StrategiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="strategies"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      <StructureLine />

      <div className="container">
        {/* Header */}
        <div className="mb-14 animate-fade-up">
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
            EXECUTION FRAMEWORK
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Edge Behind{" "}
            <span className="gradient-text">Every Trade</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            A multi-strategy framework combining institutional concepts with technical precision.
            Applied with strict risk management and top-down multi-timeframe analysis.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {strategies.map((s, i) => (
            <div
              key={s.name}
              className="animate-fade-up p-6 rounded-xl card-hover group relative overflow-hidden"
              style={{
                background: "rgba(17, 24, 39, 0.8)",
                border: `1px solid rgba(${s.color === "#00d4aa" ? "0,212,170" : s.color === "#00b4d8" ? "0,180,216" : "167,139,250"},0.15)`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2 py-0.5 rounded text-xs font-medium"
                  style={{
                    background: `${s.color}10`,
                    color: s.color,
                    border: `1px solid ${s.color}25`,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.tag}
                </span>
                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: s.color }}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                {s.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#9ca3af",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Markets Traded */}
        <div
          className="animate-fade-up p-6 rounded-xl"
          style={{
            background: "rgba(17, 24, 39, 0.5)",
            border: "1px solid rgba(0, 212, 170, 0.08)",
            borderLeft: "2px solid rgba(0, 212, 170, 0.4)",
          }}
        >
          <div
            className="text-xs font-medium mb-5"
            style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
          >
            ACTIVE MARKETS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.name} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{m.icon}</span>
                  <span
                    className="font-semibold text-sm text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {m.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {m.pairs.map((p) => (
                    <span
                      key={p}
                      className="font-mono-ticker px-2 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(0, 212, 170, 0.05)",
                        border: "1px solid rgba(0, 212, 170, 0.1)",
                        color: "#6b7280",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
