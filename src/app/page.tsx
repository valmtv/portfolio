"use client"

import { Navbar } from "components/layout/navbar"
import { HeroSection } from "components/sections/hero-section"
import { CVSection } from "components/sections/cv-section"
import { ExploreSection } from "components/sections/explore-section"
import { ContactSection } from "components/sections/contact-section"
import { Footer } from "components/layout/footer"

function HomePage() {
  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 pt-28 md:pt-36">
        <section className="animate-on-scroll">
          <HeroSection />
        </section>
        <section className="animate-on-scroll">
          <CVSection />
        </section>
        <section className="animate-on-scroll">
          <ExploreSection />
        </section>
        <section className="animate-on-scroll">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage