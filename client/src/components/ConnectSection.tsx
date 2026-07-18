/**
 * ConnectSection — Cipher SMC
 * Design: Institutional Edge — curated links, sharp trader copy, terminal panel language
 */
import { useEffect, useRef } from "react";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";

const primaryLinks = [
  {
    name: "Cipher Crypto Trader",
    desc: "Main trading channel · 154K subscribers",
    url: "https://t.me/CipherCryptoTrader",
    icon: "✈️",
    badge: "154K",
    color: "#00d4aa",
  },
  {
    name: "X / Twitter",
    desc: "@Cipher_SMC · Market intelligence feed",
    url: "https://x.com/Cipher_SMC",
    icon: "𝕏",
    badge: null,
    color: "#e5e7eb",
  },
  {
    name: "GitHub",
    desc: "96 open-source Pine Script indicators",
    url: "https://github.com/CipherSMC",
    icon: "⌥",
    badge: "96 repos",
    color: "#9ca3af",
  },
  {
    name: "YouTube",
    desc: "Strategy breakdowns · 21 videos",
    url: "https://www.youtube.com/@Cipher_SMC",
    icon: "▶",
    badge: null,
    color: "#ef4444",
  },
];

const secondaryLinks = [
  {
    name: "Cipher SMC — FX × Crypto",
    desc: "Personal Telegram channel",
    url: "https://t.me/CipherSMC",
    icon: "✈️",
    color: "#00b4d8",
  },
  {
    name: "Cipher TA",
    desc: "Technical analysis education",
    url: "https://t.me/CipherTA",
    icon: "✈️",
    color: "#a78bfa",
  },
  {
    name: "Bybit",
    desc: "Preferred crypto exchange",
    url: "https://linktr.ee/CipherSMC",
    icon: "🔄",
    color: "#f59e0b",
  },
  {
    name: "MEXC",
    desc: "Crypto trading platform",
    url: "https://linktr.ee/CipherSMC",
    icon: "🔄",
    color: "#3b82f6",
  },
  {
    name: "10K Challenge",
    desc: "SMC 10K trading challenge",
    url: "https://linktr.ee/CipherSMC",
    icon: "🎯",
    color: "#f59e0b",
  },
  {
    name: "EightCap",
    desc: "Forex trading broker",
    url: "https://linktr.ee/CipherSMC",
    icon: "📊",
    color: "#10b981",
  },
];

export default function ConnectSection() {
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
      id="connect"
      ref={sectionRef}
      className="py-24"
      style={{ background: "#0a0f1e" }}
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
            CONNECT
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Every Signal,{" "}
            <span className="gradient-text">Every Channel</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            Access Cipher SMC's complete network — from live trade signals to open-source
            tools and educational content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Primary Links — 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="text-xs font-medium mb-3"
              style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
            >
              PRIMARY CHANNELS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-up flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] group"
                  style={{
                    background: "rgba(17, 24, 39, 0.8)",
                    border: `1px solid rgba(${link.color === "#00d4aa" ? "0,212,170" : link.color === "#e5e7eb" ? "255,255,255" : link.color === "#9ca3af" ? "156,163,175" : "239,68,68"},0.12)`,
                    textDecoration: "none",
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm font-semibold text-white truncate"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {link.name}
                      </span>
                      {link.badge && (
                        <span
                          className="px-1.5 py-0.5 rounded text-xs flex-shrink-0"
                          style={{
                            background: `${link.color}12`,
                            color: link.color,
                            border: `1px solid ${link.color}20`,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs truncate" style={{ color: "#6b7280" }}>
                      {link.desc}
                    </div>
                  </div>
                  <ExternalLink
                    size={13}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: link.color }}
                  />
                </a>
              ))}
            </div>

            <div
              className="text-xs font-medium mt-6 mb-3"
              style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
            >
              RESOURCES & TOOLS
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {secondaryLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-up flex items-center gap-2.5 p-3 rounded-lg transition-all duration-150 hover:bg-white/5 group"
                  style={{
                    background: "rgba(17, 24, 39, 0.5)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    textDecoration: "none",
                    transitionDelay: `${i * 40}ms`,
                  }}
                >
                  <span className="text-base" style={{ color: link.color }}>
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white truncate">{link.name}</div>
                    <div className="text-xs truncate" style={{ color: "#4b5563" }}>
                      {link.desc}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right column: Contact + Linktree */}
          <div className="space-y-4">
            {/* Email */}
            <div
              className="animate-fade-up p-5 rounded-xl"
              style={{
                background: "rgba(17, 24, 39, 0.7)",
                border: "1px solid rgba(0, 212, 170, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0, 212, 170, 0.1)", color: "#00d4aa" }}
                >
                  <Mail size={16} />
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}
                >
                  EMAIL
                </div>
              </div>
              <a
                href="mailto:ciphersmc@gmail.com"
                className="text-sm font-medium hover:text-[#00d4aa] transition-colors block"
                style={{ color: "#d1d5db" }}
              >
                ciphersmc@gmail.com
              </a>
            </div>

            {/* Linktree CTA */}
            <a
              href="https://linktr.ee/CipherSMC"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up block p-5 rounded-xl group transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,180,216,0.08) 100%)",
                border: "1px solid rgba(0, 212, 170, 0.2)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🌿</span>
                <ExternalLink size={14} style={{ color: "#00d4aa" }} />
              </div>
              <div
                className="font-semibold text-white mb-1 text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                All Links in One Place
              </div>
              <div className="text-xs mb-4" style={{ color: "#6b7280" }}>
                linktr.ee/CipherSMC
              </div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold"
                style={{ color: "#00d4aa" }}
              >
                Open Linktree
                <ArrowRight size={12} />
              </div>
            </a>

            {/* Disclaimer */}
            <div
              className="animate-fade-up p-4 rounded-xl"
              style={{
                background: "rgba(17, 24, 39, 0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="text-xs font-medium mb-2"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
              >
                DISCLAIMER
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#4b5563" }}>
                Not Financial Advice (NFA). Do Your Own Research (DYOR). All content is
                for educational purposes only. Trading involves risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
