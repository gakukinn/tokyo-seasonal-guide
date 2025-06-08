import { Metadata } from 'next';
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { events, regionInfo, monthInfo } from '@/data/level4-september-tokyo-hanabi';

export default function SeptemberTokyoHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={events}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `9月东京花火大会 | 2025年花火大会指南`,
    description: `2025年9月东京花火大会完整指南。包含第40回调布花火等精彩活动，提供详细的时间、地点、交通信息。`,
    keywords: [
      '9月花火大会',
      '东京花火',
      '调布花火',
      '2025年花火',
      '秋季花火',
      '多摩川花火'
    ].join(', '),
    openGraph: {
      title: '9月东京花火大会 | 2025年花火大会指南',
      description: '2025年9月东京花火大会完整指南，包含调布花火等精彩活动信息',
      type: 'website',
      locale: 'zh_CN',
    },
  };
} 