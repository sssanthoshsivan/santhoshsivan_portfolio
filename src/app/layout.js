import { Inter, Josefin_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--font-josefin-slab',
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
