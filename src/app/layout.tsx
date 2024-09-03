import Navbar from "./components/ui/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baloch Warrior Gaming Website",
  description: "This app is created for tournaments, competitions, and teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ensure the Navbar is correctly imported and placed */}
        <Navbar />
        {/* Ensure the children are rendered here */}
        {children}
      </body>
    </html>
  );
}
