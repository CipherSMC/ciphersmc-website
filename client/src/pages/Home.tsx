/**
 * Home Page — Cipher SMC
 * Design: Institutional Edge — dark mode trading personal site
 * Sections: Hero → About → Strategies → Live Analysis → Indicators → Community → YouTube → Connect → Footer
 */
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StrategiesSection from "@/components/StrategiesSection";
import IndicatorsSection from "@/components/IndicatorsSection";
import CommunitySection from "@/components/CommunitySection";
import YouTubeSection from "@/components/YouTubeSection";
import LiveAnalysisSection from "@/components/LiveAnalysisSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0f1e" }}>
      <TickerBar />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <StrategiesSection />
      <div className="section-divider" />
      <LiveAnalysisSection />
      <div className="section-divider" />
      <IndicatorsSection />
      <div className="section-divider" />
      <CommunitySection />
      <div className="section-divider" />
      <YouTubeSection />
      <div className="section-divider" />
      <ConnectSection />
      <Footer />
    </div>
  );
}
