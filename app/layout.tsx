import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["300","400","500","600"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Mubarak — Modern Web Developer | Portfolio",
  description: "High-end portfolio for a modern web developer and digital solutions expert. Specialized in Next.js, React, and full-stack web applications.",
  keywords: ["web developer", "next.js", "react", "full-stack", "portfolio", "Nigeria"],
  authors: [{ name: "Mubarak Muhammad Hamisu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Mubarak — Modern Web Developer",
    description: "High-end portfolio for a modern web developer and digital solutions expert.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#080808",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
