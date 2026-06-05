import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dorai Sai Charan — AI & Backend Engineer",
  description:
    "Portfolio of Dorai Sai Charan Madisetty — AI & Backend Engineer building intelligent, scalable systems. B.Tech CSE with AI at Amrita Vishwa Vidyapeetham.",
  keywords: [
    "Dorai Sai Charan",
    "AI Engineer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Dorai Sai Charan Madisetty" }],
  openGraph: {
    title: "Dorai Sai Charan — AI & Backend Engineer",
    description: "Building intelligent, scalable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
