/**
 * YouTubeSection — Cipher SMC
 * Design: Institutional Edge — video grid with brand-consistent styling
 */
import { useEffect, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";

const videos = [
  {
    title: "Mastering Cipher SMC: A Trading Strategy Breakdown",
    id: "ehjwLvNT6ek",
    views: "67 views",
    duration: "2:36",
    thumb: "https://i.ytimg.com/vi/ehjwLvNT6ek/hqdefault.jpg",
    featured: true,
  },
  {
    title: "Entry Type: RE, CE & DCE",
    id: "gY8_jOtzUjc",
    views: "64 views",
    duration: "14:18",
    thumb: "https://i.ytimg.com/vi/gY8_jOtzUjc/hqdefault.jpg",
    featured: false,
  },
  {
    title: "Liquidity Entry Models (LQ-EM) ~ Walkthrough",
    id: "WXCaEMGkkJk",
    views: "48 views",
    duration: "28:31",
    thumb: "https://i.ytimg.com/vi/WXCaEMGkkJk/hqdefault.jpg",
    featured: false,
  },
  {
    title: "EightCap: Your Gateway to Forex Trading Success",
    id: "LWO2NwBUl9s",
    views: "25 views",
    duration: "2:09",
    thumb: "https://i.ytimg.com/vi/LWO2NwBUl9s/hqdefault.jpg",
    featured: false,
  },
  {
    title: "Roger Ver's AMAZING #bitcoin speech in 2011",
    id: "c5yT683PYP8",
    views: "77 views",
    duration: "1:51",
    thumb: "https://i.ytimg.com/vi/c5yT683PYP8/hqdefault.jpg",
    featured: false,
  },
  {
    title: "The greatest Bitcoin explanation of all time",
    id: "PmDBi9X-eyM",
    views: "10 views",
    duration: "6:15",
    thumb: "https://i.ytimg.com/vi/PmDBi9X-eyM/hqdefault.jpg",
    featured: false,
  },
];

export default function YouTubeSection() {
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
      id="youtube"
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
            VIDEO ANALYSIS
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Strategy Breakdowns,{" "}
            <span className="gradient-text">On Camera</span>
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "#8892a4" }}>
            Indicator walkthroughs, ICT concept explanations, and live market analysis.
            21 videos covering Smart Money Concepts, BBMA, and crypto trading fundamentals.
          </p>
        </div>

        {/* Channel Banner */}
        <div
          className="animate-fade-up rounded-xl overflow-hidden mb-8"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="relative">
            <img
              src="/images/youtube_banner_full.jpg"
              alt="Cipher SMC YouTube Channel"
              className="w-full object-cover"
              style={{ maxHeight: "180px", objectPosition: "center" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(10,15,30,0.2) 0%, transparent 50%, rgba(10,15,30,0.2) 100%)",
              }}
            />
          </div>
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ background: "rgba(17, 24, 39, 0.95)" }}
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/profile_avatar.jpg"
                alt="Cipher SMC"
                className="w-10 h-10 rounded-full object-cover"
                style={{ border: "1.5px solid rgba(0, 212, 170, 0.3)" }}
              />
              <div>
                <div
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Cipher SMC
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#6b7280", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  @Cipher_SMC · 19 subscribers · 21 videos
                </div>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@Cipher_SMC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold"
              style={{ background: "#ef4444", color: "white" }}
            >
              <Play size={12} />
              Subscribe
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up rounded-xl overflow-hidden card-hover group block"
              style={{
                background: "rgba(26, 34, 53, 0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                transitionDelay: `${i * 60}ms`,
                textDecoration: "none",
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "#ef4444" }}
                  >
                    <Play size={18} fill="white" color="white" />
                  </div>
                </div>
                <div
                  className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-medium"
                  style={{ background: "rgba(0,0,0,0.85)", color: "white" }}
                >
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3
                  className="font-semibold text-white text-sm leading-tight mb-2 line-clamp-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs"
                    style={{ color: "#6b7280", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {video.views}
                  </span>
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#6b7280" }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="animate-fade-up text-center mt-8">
          <a
            href="https://www.youtube.com/@Cipher_SMC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e5e7eb",
            }}
          >
            <Play size={15} />
            View All 21 Videos on YouTube
            <ExternalLink size={13} style={{ color: "#6b7280" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
