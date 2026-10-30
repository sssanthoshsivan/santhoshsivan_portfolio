import { Inter } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/layout/CommandPalette";
import SpotifyWidget from "@/components/layout/SpotifyWidget";
import InitialLoader from "@/components/layout/InitialLoader";
import DynamicBackground from "@/components/layout/DynamicBackground";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Santhosh Sivan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased text-base leading-[1.8] font-[300]`}>
        <InitialLoader />
        <DynamicBackground />
        <CommandPalette />
        <SpotifyWidget />
        {children}
      </body>
    </html>
  );
}
