import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "contexts/theme-context"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "components/layout/footer/index";
import { Navbar } from "components/layout/navbar"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valerii Matviiv | Software Engineer",
  description:
    "3rd year CS student at AGH Kraków (GPA 4.57/5) and Testing Processes & Automation Intern at ABB. Full-stack experience across Java/Azure backends, React frontends, TypeScript/Playwright test automation, and cloud deployments.",
  keywords: ["Valerii Matviiv", "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "AGH Kraków", "Next.js Portfolio"],
  authors: [{ name: "Valerii Matviiv" }],
  creator: "Valerii Matviiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pi-navy-43.vercel.app/",
    title: "Valerii Matviiv | Software Engineer",
    description:
      "3rd year CS student at AGH Kraków and Software Engineer intern at ABB. Full-stack experience in Java/Azure, React, TypeScript/Playwright, and cloud deployments.",
    siteName: "Valerii Matviiv Portfolio",
  },
  verification: {
    google: "4HrQrkeRacUm619coFoi9_pCrIXMyK_kNAzhQMbCv0k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Navbar />

          <main id="main-content" className="min-h-screen flex flex-col">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>

        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
};
