import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import ReadingProgress from "@/components/ReadingProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Dorai Sai Charan — AI & Backend Engineer",
  description:
    "Portfolio of Dorai Sai Charan Madisetty — AI & Backend Engineer. 3× Published Researcher. Building intelligent, scalable systems.",
  keywords: ["Dorai Sai Charan", "AI Engineer", "Backend Developer", "Python", "FastAPI", "Machine Learning"],
  authors: [{ name: "Dorai Sai Charan Madisetty" }],
  openGraph: {
    title: "Dorai Sai Charan — AI & Backend Engineer",
    description: "Building intelligent, scalable systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <ReadingProgress />
        {children}
      </body>
    </html>
  );
}
