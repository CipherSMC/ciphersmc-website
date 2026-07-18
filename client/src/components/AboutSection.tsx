/**
 * AboutSection — Cipher SMC
 * Design: Institutional Edge — terminal panel language, sharp copy
 * Updated: LinkedIn experience, education, certifications added
 */
import { useEffect, useRef } from "react";
import { Code2, TrendingUp, Globe, BookOpen, ExternalLink } from "lucide-react";

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
    title: "Funded Trader",
    desc: "Active FX Trader at The5ers.com — a leading proprietary trading firm",
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

const experience = [
  {
    company: "The5ers.com",
    title: "Foreign Exchange Trader",
    period: "Sep 2024 – Present",
    type: "Full-time · Mid-Senior",
    color: "#00d4aa",
    current: true,
  },
  {
    company: "Bybit",
    title: "Seasoned Trader & Investor",
    period: "Dec 2021 – Present",
    type: "Crypto · Digital Assets",
    color: "#f59e0b",
    current: true,
  },
  {
    company: "Binance",
    title: "Seasoned Trader & Investor",
    period: "Nov 2020 – Present",
    type: "Crypto · Digital Assets",
    color: "#f59e0b",
    current: true,
  },
  {
    company: "FOREX.com",
    title: "Foreign Exchange Trader",
    period: "May 2018 – Present",
    type: "Full-time · Mid-Senior",
    color: "#00b4d8",
    current: true,
  },
];

const education = [
  {
    school: "Build Bright University",
    degree: "Bachelor's Degree",
    period: "2010 – 2014",
    icon: "🎓",
  },
];

const certifications = [
  {
    title: "Investing In Stocks — The Complete Course",
    issuer: "Udemy",
    date: "Feb 2024",
    url: "https://www.udemy.com/certificate/UC-72b66517-e5a9-4ad3-94e0-6d306e2b72d6/",
    icon: "📜",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Certified",
    url: "https://github.com/CipherSMC",
    icon: "💻",
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
      { threshold: 0.05 }
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
            An Information Technology Specialist and funded proprietary trader with a deep commitment
            to blending software development with institutional-grade financial market analysis.
          </p>
        </div>

        {/* Top row: Highlights + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Highlights */}
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

          {/* Tech Stack terminal panel */}
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
                  <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "#9ca3af" }}>
                    <span style={{ color: "#00d4aa", fontFamily: "'JetBrains Mono', monospace" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: Experience + Education & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Experience Timeline */}
          <div
            className="animate-fade-up lg:col-span-2 p-6 rounded-xl"
            style={{
              background: "rgba(10, 15, 30, 0.6)",
              border: "1px solid rgba(0, 212, 170, 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div
                className="text-xs font-medium"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
              >
                TRADING EXPERIENCE
              </div>
              <a
                href="https://www.linkedin.com/in/ciphersmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#00d4aa]"
                style={{ color: "#4b5563" }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
                <ExternalLink size={10} />
              </a>
            </div>

            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div
                  key={`${exp.company}-${i}`}
                  className="flex items-start gap-4 pb-4"
                  style={{
                    borderBottom: i < experience.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center mt-1 flex-shrink-0">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: exp.current ? exp.color : "#374151",
                        boxShadow: exp.current ? `0 0 6px ${exp.color}60` : "none",
                      }}
                    />
                    {i < experience.length - 1 && (
                      <div
                        className="w-px flex-1 mt-1"
                        style={{ background: "rgba(255,255,255,0.05)", minHeight: "20px" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                      <div>
                        <div
                          className="font-semibold text-white text-sm"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.title}
                        </div>
                        <div
                          className="text-xs font-medium mt-0.5"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <div
                          className="text-xs"
                          style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {exp.period}
                        </div>
                        {exp.current && (
                          <span
                            className="inline-flex items-center gap-1 text-xs mt-0.5"
                            style={{ color: "#00d4aa" }}
                          >
                            <span className="w-1 h-1 rounded-full bg-[#00d4aa] pulse-brand" />
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs mt-1" style={{ color: "#6b7280" }}>
                      {exp.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="space-y-4">
            {/* Education */}
            <div
              className="animate-fade-up p-5 rounded-xl"
              style={{
                background: "rgba(10, 15, 30, 0.6)",
                border: "1px solid rgba(0, 212, 170, 0.08)",
              }}
            >
              <div
                className="text-xs font-medium mb-4"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
              >
                EDUCATION
              </div>
              {education.map((edu) => (
                <div key={edu.school} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{edu.icon}</span>
                  <div>
                    <div
                      className="font-semibold text-white text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {edu.school}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>
                      {edu.degree}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div
              className="animate-fade-up p-5 rounded-xl"
              style={{
                background: "rgba(10, 15, 30, 0.6)",
                border: "1px solid rgba(0, 212, 170, 0.08)",
              }}
            >
              <div
                className="text-xs font-medium mb-4"
                style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
              >
                CERTIFICATIONS
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="text-lg flex-shrink-0">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-medium text-white text-xs leading-tight group-hover:text-[#00d4aa] transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {cert.title}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-xs" style={{ color: "#6b7280" }}>
                          {cert.issuer}
                        </span>
                        <span style={{ color: "#374151" }}>·</span>
                        <span
                          className="text-xs"
                          style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <ExternalLink
                      size={11}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                      style={{ color: "#00d4aa" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
