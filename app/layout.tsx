import React from "react";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";

export const metadata = {
  title: "FullStack-portfolio",
  description: "Code Practice: Simple Portfolio — Next.js 13 App Router, Tailwind CSS, Flowbite",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-screen font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif overflow-y-scroll overflow-x-hidden}`}
      >
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <Hero />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
