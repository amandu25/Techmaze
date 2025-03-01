import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechMaze Solutions - AI SaaS & Hybrid IT Solutions",
  description:
    "TechMaze Solutions is your trusted B2B technology partner specializing in AI as a Service (AI SaaS), Hybrid IT, Networking, and Security solutions.",
  keywords:
    "AI SaaS, Hybrid IT, Networking Solutions, Security Solutions, B2B Technology, TechMaze Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-full">
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
