import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { oyamaHanabiData } from '@/data/level5-september-kitakanto-oyama-hanabi';

export const metadata: Metadata = {
  title: '第73回小山花火 | 2025年9月23日 | 栃木县小山市花火大会',
  description: '第73回小山花火将于2025年9月23日在栃木县小山市观晃桥下流思川河畔举行。小山市制70周年纪念特别企划，约2万发花火与500机ドローンショー共同演绎夜空奇迹。关东有数规模的盛大花火祭典。',
  keywords: '小山花火,栃木县花火,9月花火大会,思川河畔,ドローンショー,关东花火,小山市制70周年',
  openGraph: {
    title: '第73回小山花火 | 2025年9月23日',
    description: '小山市制70周年纪念特别花火大会，约2万发花火与500机ドローンショー共同演绎夜空奇迹',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function OyamaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={oyamaHanabiData}
      regionKey="kitakanto"
    />
  );
} 