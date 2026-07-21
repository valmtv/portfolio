"use client"

import { HeroSection } from "components/sections/hero-section"
import { CVSection } from "components/sections/cv-section"
import { ExploreSection } from "components/sections/explore-section"

function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 pt-28 md:pt-36">
      <div className="animate-hero">
        <HeroSection />
      </div>
      <div className="animate-on-scroll">
        <CVSection />
      </div>
      <div className="animate-on-scroll">
        <ExploreSection />
      </div>
    </main>
  )
}

export default HomePage