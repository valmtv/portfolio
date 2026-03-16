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
  title: "Valerii Matviiv | CS Student & Full-Stack Developer",
  description:
    "CS student at AGH Kraków (GPA 4.73, Rector's Scholarship) with hands-on project experience across the stack - Java/Azure backend services, React frontends, and a static SSG site deployment on Amazon S3.",
  keywords: ["Valerii Matviiv", "CS Student", "Full Stack Developer", "Software Engineer", "Frontend Developer", "Backend Developer", "AGH Kraków", "Next.js Portfolio"],
  authors: [{ name: "Valerii Matviiv" }],
  creator: "Valerii Matviiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pi-navy-43.vercel.app/",
    title: "Valerii Matviiv | CS Student & Full-Stack Developer",
    description:
      "CS student at AGH Kraków with project experience in Java backends on Azure, React frontends, and cloud deployments. Rector's Scholar. Open to new opportunities.",
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
        <SpeedInsights/>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
};
