import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Inter_Tight,
  Space_Mono,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { ChatbotEyes } from "@/components/ui/ChatbotEyes";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const tight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cta = Poppins({
  variable: "--font-cta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio · Kishan Vishwakarma",
  description: "Product design, UX, and web implementation portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${tight.variable} ${mono.variable} ${cta.variable} scroll-smooth`}
    >
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Manrope:wght@200..800&display=swap');
        </style>
      </head>
      <body className="antialiased bg-black text-zinc-50">
        {children}
        <CursorFollower />
        <ChatbotEyes />
      </body>
    </html>
  );
}
