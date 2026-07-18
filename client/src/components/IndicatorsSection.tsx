/**
 * IndicatorsSection — Cipher SMC
 * Design: Institutional Edge — terminal panel cards, Pine Script showcase
 */
import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const indicators = [
  {
    name: "MTF EMA Fibonacci Ribbon",
    shortName: "EMA_FIB_RIBBON",
    description:
      "Top-down analysis trading only in the direction of 'Big Money' (4H and 1H). Uses Fibonacci Ribbon on lower timeframes to find the most efficient entry point.",
    tags: ["Pine Script", "Multi-TF", "EMA", "Fibonacci"],
    link: "https://github.com/CipherSMC/MTF_EMA_Fibonacci_Ribbon",
    color: "#00d4aa",
  },
  {
    name: "Ultimate BBMA Confluence Suite",
    shortName: "BBMA_CONFLUENCE",
    description:
      "Institutional-grade analytical tool combining high-probability BBMA setups with modern data visualization, multi-timeframe logic, and predictive entry zones.",
    tags: ["Pine Script", "BBMA", "Bollinger Bands", "MA"],
    link: "https://github.com/CipherSMC/Ultimate_BBMA_Confluence_Suite",
    color: "#00b4d8",
  },
  {
    name: "VSA Wyckoff Analysis",
    shortName: "VSA_WYCKOFF",
    description:
      "Reveals 'Smart Money' activity by analyzing the relationship between Volume (Effort) and Price (Result). Wyckoff methodology applied to modern markets.",
    tags: ["Pine Script", "VSA", "Wyckoff", "Volume"],
    link: "https://github.com/CipherSMC/VSA_Wyckoff_Analysis",
    color: "#a78bfa",
  },
  {
    name: "Crypto Market Cap",
    shortName: "CRYPTO_MCAP",
    description:
      "Track and visualize Market Capitalization of the entire crypto market or specific tokens directly on your chart. Bridges price analysis with fundamental data.",
    tags: ["Pine Script", "Crypto", "Market Cap", "Fundamental"],
    link: "https://github.com/CipherSMC/Crypto_Market_Cap",
    color: "#f59e0b",
  },
  {
    name: "Imbalance Finder (FVG)",
    shortName: "FVG_FINDER",
    description:
      "Pine Script v6 indicator designed to automatically detect and highlight market imbalances (Fair Value Gaps). Essential for ICT-based trading setups.",
    tags: ["Pine Script", "FVG", "ICT", "Imbalance"],
    link: "https://github.com/CipherSMC/Imbalance_Finder_FVG",
    color: "#ec4899",
  },
  {
    name: "Market Cipher Suite",
    shortName: "MARKET_CIPHER",
    description:
      "Comprehensive Market Cipher A & B implementation. Combines momentum, wave analysis, and money flow indicators for a complete market overview.",
    tags: ["Pine Script", "Momentum", "Wave", "Money Flow"],
    link: "https://github.com/CipherSMC/Market_Cipher",
    color: "#10b981",
  },
];

export default function IndicatorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="indicators"
      ref={sectionRef}
      className="py-24"
      style={{ background: "#111827" }}
    >
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
            OPEN SOURCE · PINE SCRIPT
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Indicators Built for{" "}
            <span className="gradient-text">Institutional Precision</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            Custom TradingView indicators engineered with Pine Script. Each tool delivers
            institutional-grade analysis directly on your charts — free and open source.
          </p>
        </div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {indicators.map((ind, i) => (
            <a
              key={ind.name}
              href={ind.link}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up p-4 sm:p-5 rounded-xl card-hover group block relative overflow-hidden"
              style={{
                background: "rgba(26, 34, 53, 0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                transitionDelay: `${i * 60}ms`,
                textDecoration: "none",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r"
                style={{ background: ind.color }}
              />

              <div className="pl-3">
                {/* Monospace name */}
                <div className="flex items-start justify-between mb-2">
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: ind.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {ind.shortName}
                  </span>
                  <ExternalLink
                    size={13}
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    style={{ color: ind.color }}
                  />
                </div>

                <h3
                  className="font-semibold text-white text-sm leading-snug mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {ind.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                  {ind.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#9ca3af",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="animate-fade-up text-center">
          <a
            href="https://github.com/CipherSMC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e5e7eb",
            }}
          >
            <Github size={16} />
            View All 96 Repositories on GitHub
            <ExternalLink size={13} style={{ color: "#6b7280" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
