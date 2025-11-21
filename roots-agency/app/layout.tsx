import type { Metadata } from "next";
import { IBM_Plex_Mono, Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roots — Creative Design Agency",
  description: "Bold, impactful design that tells your story. Roots is a creative agency specializing in branding, digital experiences, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexMono.variable} ${fraunces.variable} ${workSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
