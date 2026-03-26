import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dayron Vera — Backend Engineer & QA Automation",
  description:
    "Portfolio of Dayron Vera — Software Engineer specializing in Backend Development, QA Automation, and Cloud Infrastructure on GCP.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050508] text-[#eef2ff] antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
