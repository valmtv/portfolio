import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "contexts/theme-context"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ConditionalFooter } from "components/layout/conditional-footer";
import { Navbar } from "components/layout/navbar"
import { ChatWidget } from "components/chat/chat-widget";
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
    "3rd year CS student at AGH Kraków (GPA 4.57/5) and Software Engineer Intern (Testing Processes & Automation) at ABB. Full-stack experience across React, Next.js, Fastify/Node, Java/Azure, Playwright test infrastructure, and cloud deployments.",
  keywords: ["Valerii Matviiv", "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "AGH Kraków", "Next.js Portfolio"],
  authors: [{ name: "Valerii Matviiv" }],
  creator: "Valerii Matviiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pi-navy-43.vercel.app/",
    title: "Valerii Matviiv | Software Engineer",
    description:
      "3rd year CS student at AGH Kraków and Software Engineer Intern (Testing Processes & Automation) at ABB. Full-stack experience across React/Next.js, fastify/Node, Java/Azure, Playwright automation, and cloud deployments.",
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
          
          <ConditionalFooter />
          <ChatWidget />
        </ThemeProvider>

        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
};
