import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
// import { Navbar } from "./components/partials/Navbar";
import Navbar from "@/components/Navbar";
// import { Footer } from "../../../components/Footer";
// import LayoutGlob from "./components/partials/Layout";
import "bootstrap-icons/font/bootstrap-icons.css"
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-blue-60"}>
        {" "}
        <Navbar/>
        {/* <LayoutGlob> */}
          {children}
          {/* </LayoutGlob> */}
          <Footer/>
      </body>
    </html>
  );
}
