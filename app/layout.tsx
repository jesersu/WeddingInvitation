import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Ballet } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-elegant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ballet = Ballet({
  variable: "--font-ballet",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aaron & Johanna",
  description: "Nos casamos csmr!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${playfair.variable} ${ballet.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
