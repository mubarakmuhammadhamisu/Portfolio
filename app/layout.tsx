import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["300","400","500","600"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Mubarak — Modern Web Developer",
  description: "High-end portfolio for a modern web developer and digital solutions expert.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
