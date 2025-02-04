import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { Header } from "@/src/components/ui/header";
import Navbar from "@/src/components/ui/navbar";
import { Italianno } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({ subsets: ['latin'], weight: ['400'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={italianno.className}>
<Navbar />
      </body>
    </html>
  );
}
