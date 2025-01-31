import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--barlow_semi_condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Game",
  description: "Created by Muhammad Ali Haider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowSemiCondensed.variable} overflow-hidden text-white min-h-screen flex justify-center bg-gradient-to-b from-[#1f3756] to-[#141539]  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
