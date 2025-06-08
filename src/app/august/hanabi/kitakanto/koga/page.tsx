/**
 * 古河花火大会详情页
 * @path /august/hanabi/kitakanto/koga
 */
import { Metadata } from 'next'
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate'
import { kogaHanabiData } from '@/data/level5-august-koga-hanabi'

export const metadata: Metadata = {
  title: '第20回 古河花火大会 2025 | 古河ゴルフリンクス | 茨城県古河市',
  description: '2025年8月2日开催的第20回古河花火大会详情。会场为古河ゴルフリンクス，特色三尺玉2发打ち上げ、特大ワイドスターマイン。提供详细交通指南、观赏攻略、会场信息。',
  keywords: [
    '古河花火大会',
    '茨城県',
    '古河市',
    '2025年8月',
    '花火',
    '三尺玉',
    'ワイドスターマイン',
    '古河ゴルフリンクス',
    '北关东花火',
    '花火大会'
  ],
  openGraph: {
    title: '第20回 古河花火大会 2025 | 茨城県古河市',
    description: '古河ゴルフリンクス河川敷で开催。三尺玉2发、特大ワイドスターマイン等华丽演出',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/images/koga-hanabi-og.jpg',
        width: 1200,
        height: 630,
        alt: '第20回 古河花火大会',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '第20回 古河花火大会 2025',
    description: '茨城県古河市 | 8月2日 19:20～ | 三尺玉×特大スターマイン',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('http://localhost:3001'),
  alternates: {
    canonical: '/august/hanabi/kitakanto/koga',
  },
}

export default function KogaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={kogaHanabiData}
      regionKey="kitakanto"
    />
  )
} 