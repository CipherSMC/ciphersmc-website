/**
 * AboutSection — Cipher SMC
 * Design: Institutional Edge — terminal panel language, sharp copy
 */
import { useEffect, useRef } from "react";
import { Code2, TrendingUp, Globe, BookOpen } from "lucide-react";

const skills = [
  { category: "LANGUAGES", items: ["Ruby", "Python", "JavaScript"] },
  { category: "FRAMEWORKS", items: ["Ruby on Rails", "Django", "Node.js"] },
  { category: "PLATFORMS", items: ["Heroku", "GitHub", "AWS"] },
  { category: "DATABASES", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "TOOLS", items: ["Docker", "VS Code", "Git"] },
];

const highlights = [
  {
    icon: <BookOpen size={18} />,
    title: "Full Stack Certified",
    desc: "Certified in Full Stack Web Development from freeCodeCamp",
    color: "#00d4aa",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Active Trader",
    desc: "Actively engaged in Forex, Stock, and Crypto with technical edge",
    color: "#00b4d8",
  },
  {
    icon: <Code2 size={18} />,
    title: "Pine Script Author",
    desc: "Building custom indicators, trading bots, and automation tools",
    color: "#a78bfa",
  },
  {
    icon: <Globe size={18} />,
    title: "Community Builder",
    desc: "Growing a global network of traders across Telegram and GitHub",
    color: "#f59e0b",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
            PROFILE
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Where Code Meets{" "}
            <span className="gradient-text">Market Intelligence</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            An Information Technology Specialist with a proven track record in software development
            and a deep commitment to blending technology with financial market analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="animate-fade-up p-5 rounded-xl card-hover relative overflow-hidden"
                style={{
                  background: "rgba(26, 34, 53, 0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `2px solid ${h.color}`,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${h.color}12`, color: h.color }}
                >
                  {h.icon}
                </div>
                <h3
                  className="font-semibold text-white mb-1 text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {h.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Tech Stack — terminal panel */}
          <div
            className="animate-fade-up p-6 rounded-xl"
            style={{
              background: "rgba(10, 15, 30, 0.7)",
              border: "1px solid rgba(0, 212, 170, 0.1)",
              transitionDelay: "160ms",
            }}
          >
            {/* Panel header */}
            <div
              className="flex items-center gap-2 mb-5 pb-3"
              style={{ borderBottom: "1px solid rgba(0,212,170,0.08)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-60" />
              </div>
              <span
                className="text-xs ml-2"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
              >
                cipher_smc.stack
              </span>
            </div>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <div
                    className="text-xs font-medium mb-2"
                    style={{ color: "#00d4aa", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}
                  >
                    {skill.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded text-xs font-medium"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.07)",
                          color: "#d1d5db",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div
              className="mt-5 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div
                className="text-xs font-medium mb-3"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}
              >
                CURRENT_FOCUS
              </div>
              <ul className="space-y-1.5">
                {[
                  "Pine Script Indicator Development",
                  "Technical Analysis Research",
                  "Forex Trading Psychology",
                  "MT5 Automation & Full-Stack Dev",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#9ca3af" }}
                  >
                    <span style={{ color: "#00d4aa", fontFamily: "'JetBrains Mono', monospace" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
