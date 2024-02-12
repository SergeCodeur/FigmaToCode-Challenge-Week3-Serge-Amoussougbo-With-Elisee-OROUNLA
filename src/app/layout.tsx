import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import "./globals.css";

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <header>
          <Navbar />
        </header>
        <React.Fragment>{children}</React.Fragment>
        <Footer />
      </body>
    </html>
  );
}
