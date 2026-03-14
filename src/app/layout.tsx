import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "contexts/theme-context"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
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
  description: "Portfolio of Valerii Matviiv, a Software Engineer specializing in full-stack web development, React, Next.js, and Java.",
  keywords: ["Valerii Matviiv", "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Next.js Portfolio", "Cyberpunk Portfolio"],
  authors: [{ name: "Valerii Matviiv" }],
  creator: "Valerii Matviiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pi-navy-43.vercel.app/",
    title: "Valerii Matviiv | Software Engineer",
    description: "Portfolio of Valerii Matviiv, a Software Engineer specializing in full-stack web development.",
    siteName: "Valerii Matviiv Portfolio",
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
        <SpeedInsights/>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
};
