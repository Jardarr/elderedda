import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JardarEdda",
  description: "Elder Edda's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="px-4 md:px-24">
            <Navbar />
          </div>
          {children}
          <div className="px-4 py-8 md:px-24"><Footer /></div>
        </div>
      </body>
    </html>
  );
}