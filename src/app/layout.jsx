import { Inter, Josefin_Slab, Space_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/layout/CommandPalette";
import SpotifyWidget from "@/components/layout/SpotifyWidget";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});
const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--font-josefin-slab',
});
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata = {
  title: "Santhosh Sivan",
  description: "Portfolio",
};

import ThemeTransition from "@/components/layout/ThemeTransition";
import InitialLoader from "@/components/layout/InitialLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} dark`}>
      <body className={`${inter.className} font-sans antialiased`}>
        <InitialLoader />
        <ThemeTransition />
        <CommandPalette />
        <SpotifyWidget />
        {children}
      </body>
    </html>
  );
}
