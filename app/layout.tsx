import React from "react"
import type { Metadata, Viewport } from "next";
import { Unbounded, Poppins } from "next/font/google";

import "./globals.css";
import { ColorThemeProvider } from "@/components/color-theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Creative Studio | Design & Video Agency",
    template: "%s | Creative Studio",
  },
  description:
    "Premium creative agency specializing in social media design, video editing, print design, and packaging. Helping startups and corporates elevate their brand.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ColorThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ColorThemeProvider>
      </body>
    </html>
  );
}
