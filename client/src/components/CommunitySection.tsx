/**
 * CommunitySection — Cipher SMC
 * Design: Institutional Edge — editorial hierarchy, featured panel, terminal motif
 */
import { useEffect, useRef } from "react";
import { Users, ExternalLink, ArrowRight } from "lucide-react";

const featured = {
  name: "Cipher Crypto Trader",
  handle: "@CipherCryptoTrader",
  subscribers: "154,000+",
  description:
    "The primary intelligence channel. Real-time FX & crypto signals, institutional order flow analysis, and live trade commentary. Where smart money meets the community.",
  topics: ["#GoldTrading", "#Bitcoin", "#ALTS", "#SP500", "#FX"],
  link: "https://t.me/CipherCryptoTrader",
};

const secondary = [
  {
    name: "Cipher SMC — FX × Crypto",
    handle: "@CipherSMC",
    subscribers: "382",
    description: "Personal channel. Direct trade ideas and daily market commentary.",
    topics: ["#GoldTrading", "#ALTS", "#HYPE"],
    link: "https://t.me/CipherSMC",
    color: "#00b4d8",
  },
  {
    name: "Cipher TA",
    handle: "@CipherTA",
    subscribers: "56",
    description: "Deep-dive technical analysis. ICT, BBMA, and indicator education.",
    topics: ["#ICT", "#BBMA", "#FVG"],
    link: "https://t.me/CipherTA",
    color: "#a78bfa",
  },
];

const socials = [
  { name: "X / Twitter", handle: "@Cipher_SMC", link: "https://x.com/Cipher_SMC", icon: "𝕏", color: "#e5e7eb" },
  { name: "YouTube", handle: "@Cipher_SMC", link: "https://www.youtube.com/@Cipher_SMC", icon: "▶", color: "#ef4444" },
  { name: "GitHub", handle: "CipherSMC", link: "https://github.com/CipherSMC", icon: "⌥", color: "#9ca3af" },
  { name: "Linktree", handle: "CipherSMC", link: "https://linktr.ee/CipherSMC", icon: "🌿", color: "#00d4aa" },
];

// Decorative order-flow lines
function OrderFlowLines() {
  return (
    <svg
      viewBox="0 0 800 120"
      className="absolute top-0 left-0 right-0 w-full opacity-[0.06]"
      style={{ pointerEvents: "none" }}
      preserveAspectRatio="none"
    >
      <polyline
        points="0,80 100,60 200,70 300,40 400,55 500,30 600,45 700,20 800,35"
        fill="none"
        stroke="#00d4aa"
        strokeWidth="1.5"
      />
      <polyline
        points="0,100 100,85 200,90 300,65 400,75 500,50 600,65 700,40 800,55"
        fill="none"
        stroke="#00b4d8"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function CommunitySection() {
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
      id="community"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/community_bg.jpg')",
          opacity: 0.1,
        }}
      />
      <div className="absolute inset-0 grid-texture opacity-25" />
      <OrderFlowLines />

      <div className="container relative z-10">
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
            LIVE CHANNELS
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Intelligence,{" "}
            <span className="gradient-text">Broadcast Live</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            Real-time signals, institutional analysis, and educational content — distributed
            across three Telegram channels to over 154,000 traders.
          </p>
        </div>

        {/* Featured Channel */}
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up block mb-6 p-6 lg:p-8 rounded-2xl group relative overflow-hidden transition-all duration-200 hover:scale-[1.01]"
          style={{
            background: "rgba(17, 24, 39, 0.9)",
            border: "1px solid rgba(0, 212, 170, 0.25)",
            textDecoration: "none",
          }}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #00d4aa, #00b4d8, transparent)" }}
          />
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: "inset 0 0 40px rgba(0, 212, 170, 0.05)" }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#00d4aa", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {featured.handle}
                  </span>
                  <div
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {featured.name}
                  </div>
                </div>
                <span
                  className="ml-2 px-2 py-0.5 rounded text-xs font-medium"
                  style={{
                    background: "rgba(0,212,170,0.12)",
                    color: "#00d4aa",
                    border: "1px solid rgba(0,212,170,0.25)",
                  }}
                >
                  FLAGSHIP
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xl" style={{ color: "#9ca3af" }}>
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{
                      background: "rgba(0,212,170,0.07)",
                      color: "#00d4aa",
                      border: "1px solid rgba(0,212,170,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Subscriber count */}
            <div className="flex-shrink-0 text-center lg:text-right">
              <div className="flex items-center gap-2 mb-1 justify-center lg:justify-end">
                <Users size={16} style={{ color: "#00d4aa" }} />
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff" }}
                >
                  154K+
                </span>
              </div>
              <div className="text-xs mb-4" style={{ color: "#4b5563" }}>
                active subscribers
              </div>
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold btn-brand"
              >
                Join Channel
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </a>

        {/* Secondary Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {secondary.map((ch, i) => (
            <a
              key={ch.name}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up p-5 rounded-xl card-hover group block relative overflow-hidden"
              style={{
                background: "rgba(17, 24, 39, 0.7)",
                border: `1px solid rgba(${ch.color === "#00b4d8" ? "0,180,216" : "167,139,250"},0.15)`,
                transitionDelay: `${i * 80}ms`,
                textDecoration: "none",
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r"
                style={{ background: ch.color }}
              />
              <div className="pl-3">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-medium"
                    style={{ color: ch.color, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {ch.handle}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Users size={12} style={{ color: "#4b5563" }} />
                    <span className="text-xs font-bold" style={{ color: "#9ca3af" }}>
                      {ch.subscribers}
                    </span>
                  </div>
                </div>
                <h3
                  className="font-semibold text-white text-sm mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {ch.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                  {ch.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ch.topics.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-xs font-mono"
                      style={{
                        background: `${ch.color}0d`,
                        color: ch.color,
                        border: `1px solid ${ch.color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social grid — compact */}
        <div
          className="animate-fade-up p-5 rounded-xl"
          style={{
            background: "rgba(17, 24, 39, 0.5)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="text-xs font-medium mb-4"
            style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
          >
            ALSO ON
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-150 hover:bg-white/5 group"
                style={{ textDecoration: "none" }}
              >
                <span className="text-lg" style={{ color: s.color }}>
                  {s.icon}
                </span>
                <div>
                  <div className="text-xs font-medium text-white">{s.name}</div>
                  <div
                    className="text-xs"
                    style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.handle}
                  </div>
                </div>
                <ExternalLink
                  size={11}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#4b5563" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
