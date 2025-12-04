import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Civister | Build Your Dream Home - Custom Floor Plans & Vastu Designs",
  description: "Get instant, Vastu-compliant floor plans for your 30x40 or 40x60 plot. Civister connects you with trusted contractors to build your home on time and within budget.",
  keywords: ["house construction", "floor plan generator", "vastu compliant home plans", "30x40 house plan", "40x60 house plan", "home builders bangalore", "turnkey construction"],
  openGraph: {
    title: "Civister | Smart Home Construction",
    description: "Design and build your perfect home with AI-powered floor plans and verified contractors.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
