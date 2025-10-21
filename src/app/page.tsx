"use client"

import { Navbar } from "components/navbar";
import { useTheme } from "contexts/theme-context";
import { HeroSection } from "components/hero-section";
import { CVSection } from "components/cv-section";
import { ExploreSection } from "components/explore-section";
import { ContactSection } from "components/contact-section";
import { Footer } from "components/footer";

function HomePage() {
  const { themeConfig } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeConfig.colors.background }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 pt-28 md:pt-36">
        <HeroSection />
        <CVSection />
        <ExploreSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;