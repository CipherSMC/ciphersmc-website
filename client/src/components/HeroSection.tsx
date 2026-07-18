/**
 * HeroSection — Cipher SMC
 * Design: Institutional Edge — asymmetric split layout
 * Terminal HUD motif, sharp trader copy, cyan-green brand signal
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Telegram Subscribers", value: "154K+", mono: "COMMUNITY" },
  { label: "Open Source Repos", value: "96", mono: "GITHUB" },
  { label: "Asset Classes", value: "FX · CRYPTO · EQ", mono: "MARKETS" },
];

const pillars = [
  "Structure Over Noise",
  "Precision Over Prediction",
  "Discipline Over Emotion",
];

// Decorative candlestick SVG
function CandlestickDecor() {
  return (
    <svg
      viewBox="0 0 300 80"
      className="absolute bottom-0 right-0 opacity-10 w-full"
      style={{ pointerEvents: "none" }}
      preserveAspectRatio="none"
    >
      {/* Candle bodies */}
      {[
        { x: 10, y: 40, h: 20, bull: true },
        { x: 30, y: 30, h: 30, bull: true },
        { x: 50, y: 50, h: 15, bull: false },
        { x: 70, y: 35, h: 25, bull: true },
        { x: 90, y: 20, h: 35, bull: true },
        { x: 110, y: 45, h: 18, bull: false },
        { x: 130, y: 25, h: 28, bull: true },
        { x: 150, y: 15, h: 40, bull: true },
        { x: 170, y: 30, h: 22, bull: false },
        { x: 190, y: 10, h: 45, bull: true },
        { x: 210, y: 25, h: 30, bull: true },
        { x: 230, y: 40, h: 20, bull: false },
        { x: 250, y: 20, h: 38, bull: true },
        { x: 270, y: 5, h: 50, bull: true },
      ].map((c, i) => (
        <g key={i}>
          <line
            x1={c.x + 5}
            y1={c.y - 5}
            x2={c.x + 5}
            y2={c.y + c.h + 5}
            stroke={c.bull ? "#00d4aa" : "#ef4444"}
            strokeWidth="1"
          />
          <rect
            x={c.x}
            y={c.y}
            width="10"
            height={c.h}
            fill={c.bull ? "#00d4aa" : "#ef4444"}
            fillOpacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll(".animate-fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Background hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/manus-storage/hero_bg_21ad5d7b.jpg')",
          opacity: 0.35,
        }}
      />
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-40" />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(0,212,170,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0f1e)" }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Copy ── */}
          <div className="space-y-8">
            {/* HUD badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-2.5 px-3 py-1.5 rounded text-xs font-medium"
              style={{
                background: "rgba(0, 212, 170, 0.07)",
                border: "1px solid rgba(0, 212, 170, 0.2)",
                color: "#00d4aa",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.06em",
                transitionDelay: "0ms",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] pulse-brand" />
              CIPHER_SMC · CAMBODIA 🇰🇭 · IT + TRADING
            </div>

            {/* Headline */}
            <div className="animate-fade-up space-y-1" style={{ transitionDelay: "80ms" }}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-white">Mastering</span>
                <br />
                <span className="gradient-text">Market</span>
                <br />
                <span className="text-white">Structure</span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p
              className="animate-fade-up text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: "#8892a4", transitionDelay: "160ms" }}
            >
              Trading{" "}
              <span className="text-white font-medium">FX · Equities · Digital Assets</span>{" "}
              through Smart Money Concepts, ICT, and BBMA — where institutional order flow
              meets code-first execution.
            </p>

            {/* Pillars — terminal list */}
            <div
              className="animate-fade-up space-y-2"
              style={{ transitionDelay: "240ms" }}
            >
              {pillars.map((p, i) => (
                <div
                  key={p}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#9ca3af" }}
                >
                  <span
                    className="font-mono-ticker text-xs"
                    style={{ color: "#00d4aa", minWidth: "1.5rem" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: "rgba(0,212,170,0.12)", maxWidth: "24px" }}
                  />
                  {p}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-wrap gap-4"
              style={{ transitionDelay: "320ms" }}
            >
              <a
                href="https://linktr.ee/CipherSMC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold btn-brand"
              >
                Explore All Links
                <ArrowRight size={15} />
              </a>
              <a
                href="https://t.me/CipherCryptoTrader"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold btn-outline-brand"
              >
                Join 154K Traders
              </a>
            </div>

            {/* Ticker row */}
            <div
              className="animate-fade-up flex items-center gap-3 pt-2"
              style={{ transitionDelay: "400ms" }}
            >
              {["$BTC", "$ETH", "$XAU", "EUR/USD"].map((ticker) => (
                <span
                  key={ticker}
                  className="font-mono-ticker px-2 py-1 rounded text-xs"
                  style={{
                    background: "rgba(0, 212, 170, 0.07)",
                    color: "#00d4aa",
                    border: "1px solid rgba(0, 212, 170, 0.15)",
                  }}
                >
                  {ticker}
                </span>
              ))}
              <span className="text-xs" style={{ color: "#374151" }}>
                NFA · DYOR
              </span>
            </div>
          </div>

          {/* ── Right: Avatar + Stats ── */}
          <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-8">
            {/* Avatar */}
            <div className="relative animate-fade-up float-animation" style={{ transitionDelay: "200ms" }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)",
                  transform: "scale(1.35)",
                }}
              />
              <div
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: "1.5px solid rgba(0, 212, 170, 0.35)",
                  boxShadow: "0 0 50px rgba(0, 212, 170, 0.18), 0 0 100px rgba(0, 212, 170, 0.06)",
                }}
              >
                <img
                  src="/images/profile_avatar.jpg"
                  alt="Cipher SMC"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats — terminal data panels */}
            <div className="grid grid-cols-1 gap-2 w-full max-w-full sm:max-w-xs lg:max-w-sm">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="animate-fade-up flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-3 rounded"
                  style={{
                    background: "rgba(17, 24, 39, 0.7)",
                    border: "1px solid rgba(0, 212, 170, 0.1)",
                    borderLeft: "2px solid #00d4aa",
                    transitionDelay: `${300 + i * 70}ms`,
                  }}
                >
                  <span
                    className="font-mono-ticker text-xs w-16 sm:w-20 flex-shrink-0"
                    style={{ color: "#00d4aa" }}
                  >
                    {s.mono}
                  </span>
                  <span
                    className="text-sm sm:text-lg font-bold flex-1 truncate"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-right hidden sm:block" style={{ color: "#4b5563" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Candlestick decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <CandlestickDecor />
      </div>
    </section>
  );
}
