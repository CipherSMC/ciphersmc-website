/**
 * Footer — Cipher SMC
 * Design: Institutional Edge — minimal dark footer with terminal motif
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 relative"
      style={{
        background: "#060b17",
        borderTop: "1px solid rgba(0, 212, 170, 0.08)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)" }}
      />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full overflow-hidden"
              style={{ border: "1px solid rgba(0, 212, 170, 0.25)" }}
            >
              <img
                src="/manus-storage/profile_avatar_517766fb.jpg"
                alt="Cipher SMC"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CIPHER
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00d4aa" }}
                >
                  SMC
                </span>
              </div>
              <div
                className="text-xs"
                style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
              >
                Mastering Market Structure
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center max-w-sm">
            <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
              <span style={{ color: "#4b5563" }}>NFA · DYOR</span> — All content is for educational
              purposes only. Trading involves substantial risk of loss.
            </p>
          </div>

          {/* Copyright */}
          <div
            className="text-xs"
            style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {year} Cipher SMC
          </div>
        </div>

        {/* Bottom links */}
        <div
          className="mt-6 pt-5 flex flex-wrap justify-center gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}
        >
          {[
            { label: "Linktree", href: "https://linktr.ee/CipherSMC" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ciphersmc/" },
            { label: "GitHub", href: "https://github.com/CipherSMC" },
            { label: "Telegram", href: "https://t.me/CipherCryptoTrader" },
            { label: "YouTube", href: "https://www.youtube.com/@Cipher_SMC" },
            { label: "X / Twitter", href: "https://x.com/Cipher_SMC" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-[#00d4aa]"
              style={{ color: "#374151" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
