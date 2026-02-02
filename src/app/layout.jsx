import { Inter, Josefin_Slab, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--font-josefin-slab',
});
const spaceMono = Space_Mono({
  weight: ['400', '700'],  // specify the weights you want (regular and bold)
  subsets: ['latin'],      // specify subsets (like latin)
});

export const metadata = {
  title: "Santhosh Sivan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
