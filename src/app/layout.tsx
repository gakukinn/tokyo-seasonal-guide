import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StagewiseProvider from '../components/StagewiseProvider';
import Script from 'next/script';

const geist = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "关东地区花火大会指南 - 日本夏日烟花祭典完全攻略",
 description: "发现关东地区最精彩的花火大会，享受夏日烟花之美。涵盖东京、神奈川、埼玉、千叶、北关东、甲信越地区详细花火信息，包含时间、地点、交通、观赏指南。",
 keywords: "花火大会,日本花火,关东花火,东京花火,神奈川花火,埼玉花火,千叶花火,烟花节,日本旅游",
 openGraph: {
   title: "关东地区花火大会指南",
   description: "发现关东地区最精彩的花火大会，享受夏日烟花之美",
   type: "website",
   locale: "zh_CN",
 },
 robots: {
   index: true,
   follow: true,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="zh">
 <head>
   {/* Google Analytics */}
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
 </head>
 <body
 className={`${geist.variable} ${geistMono.variable} antialiased`}
 >
 <StagewiseProvider />
 {children}
 </body>
 </html>
 );
}
