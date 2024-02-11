import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encurtador de URL",
  description: "Encurtar URL de maneira simples, fácil e rápida",
  keywords: [
    "encurtar link online",
    "encurtar url online",
    "tailwindcss",
    "nextjs",
    "reactjs",
    "programação",
    "projecto",
  ],
  robots: {
    follow: true,
    index: true,
  },
  other: {
    "google-site-verification": "COR6tNpKmUw-EQhvWImjYDwLM9fl2UTTkQLas7kmZRw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-blue-600 ${inter.className}`}>{children}</body>
    </html>
  );
}
