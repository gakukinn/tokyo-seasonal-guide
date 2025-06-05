import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StagewiseProvider from '../components/StagewiseProvider';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "关东地区花火大会指南",
  description: "发现关东地区最精彩的花火大会，享受夏日烟花之美",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <StagewiseProvider />
        {children}
      </body>
    </html>
  );
}
