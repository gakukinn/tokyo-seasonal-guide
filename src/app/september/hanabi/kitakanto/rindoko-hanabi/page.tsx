import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { rindokoHanabiData } from '@/data/level5-september-kitakanto-rindoko-hanabi';

export const metadata: Metadata = {
  title: '第31回りんどう湖花火大会 | 2025年9月14日・21日 | 栃木县那须高原花火大会',
  description: '第31回りんどう湖花火大会将于2025年9月14日・21日在栃木县那须高原りんどう湖家庭牧场举行。约3000发花火在湖上绽放，湖面映照的幻想水中・水上花火和音乐协作花火是最大看点。',
  keywords: 'りんどう湖花火,那须高原花火,9月花火大会,湖上花火,水中花火,音乐协作花火,栃木县花火',
  openGraph: {
    title: '第31回りんどう湖花火大会 | 2025年9月14日・21日',
    description: '那须高原りんどう湖家庭牧场举办的湖上花火大会，约3000发花火与湖面倒影共同演绎梦幻夜空',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function RindokoHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={rindokoHanabiData}
      regionKey="kitakanto"
    />
  );
} 