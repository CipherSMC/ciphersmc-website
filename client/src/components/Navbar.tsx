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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
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
                  src="/manus-storage/profile_avatar_517766fb.jpg"
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
