/**
 * Navbar — Cipher SMC
 * Design: Institutional Edge — dark mode, transparent-to-opaque on scroll
 * Brand color: #00d4aa (electric cyan-green)
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strategies", href: "#strategies" },
  { label: "Indicators", href: "#indicators" },
  { label: "Community", href: "#community" },
  { label: "YouTube", href: "#youtube" },
  { label: "Connect", href: "#connect" },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 z-40 transition-all duration-300"
        style={{
          top: '36px',
          background: scrolled
            ? "rgba(10, 15, 30, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 212, 170, 0.12)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <div
              className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[rgba(0,212,170,0.4)] transition-all duration-200 group-hover:ring-[#00d4aa]"
              >
                <img
                  src="/images/profile_avatar.jpg"
                  alt="Cipher SMC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CIPHER
                </span>
                <span
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00d4aa" }}
                >
                  SMC
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150 rounded-md hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* LinkedIn icon */}
              <a
                href="https://www.linkedin.com/in/ciphersmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-150 hover:bg-white/10"
                style={{ color: "#9ca3af" }}
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://linktr.ee/CipherSMC"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold btn-brand"
              >
                All Links
              </a>
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 pt-16"
          style={{ background: "rgba(10, 15, 30, 0.98)", backdropFilter: "blur(12px)" }}
        >
          <nav className="container py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/ciphersmc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://linktr.ee/CipherSMC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold btn-brand"
              onClick={() => setMobileOpen(false)}
            >
              All Links
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
