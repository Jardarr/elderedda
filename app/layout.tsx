// import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
          <div className="px-4 md:px-24 bg-black sticky top-0">
            <Navbar />
          </div>
          {children}
          <div className="px-4 md:px-24 py-4"><Footer /></div>
      </body>
    </html>
  );
}