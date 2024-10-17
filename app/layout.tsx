import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Demo of simple-portfolio-cwntf",
  description: "Code Practice: Simple Portfolio — Next.js 13 App Router, Tailwind CSS, Flowbite",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-screen font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
