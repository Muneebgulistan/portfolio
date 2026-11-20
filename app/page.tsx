import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Ambient HUD Radial Glows & Fixed Scanlines */}
      <div className="hud-ambient" aria-hidden="true" />
      <div className="hud-scanlines" aria-hidden="true" />

      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Services />
        <Contact />
      </main>

      <Footer />
      <KonamiEasterEgg />
    </div>
  );
}
