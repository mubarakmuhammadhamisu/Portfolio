import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const OG_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL("https://mubarak.dev"),
  title: {
    default: "Mubarak — Modern Web Developer | Portfolio",
    template: "%s | Mubarak",
  },
  description:
    "High-end web development and digital solutions for Nigerian businesses. Specialized in Next.js, Supabase, and Paystack integrations. Based in Nigeria, available worldwide.",
  keywords: [
    "web developer Nigeria",
    "next.js developer",
    "react developer",
    "full-stack developer",
    "Supabase",
    "Paystack integration",
    "freelance developer Nigeria",
    "portfolio",
    "Mubarak",
    "Titecx",
  ],
  authors: [{ name: "Mubarak Muhammad Hamisu", url: "https://mubarak.dev" }],
  creator: "Mubarak Muhammad Hamisu",
  publisher: "Mubarak Muhammad Hamisu",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mubarak.dev",
    siteName: "Mubarak — Web Developer",
    title: "Mubarak — Modern Web Developer",
    description:
      "High-end web development and digital solutions for Nigerian businesses. Next.js, Supabase, Paystack.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mubarak — Modern Web Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubarak — Modern Web Developer",
    description:
      "High-end web development and digital solutions for Nigerian businesses.",
    images: [OG_IMAGE],
    creator: "@mubarak_dev",
  },
  alternates: {
    canonical: "https://mubarak.dev",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${dmSans.variable} ${syne.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard/screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
