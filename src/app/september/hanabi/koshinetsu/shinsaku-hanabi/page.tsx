import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { shinsakuHanabiData } from '@/data/level5-september-koshinetsu-shinsaku-hanabi';

export const metadata: Metadata = {
  title: '全国新作花火チャレンジカップ2025 | 2025年9月6日・13日・20日・27日 | 長野県諏訪市花火大会',
  description: '全国新作花火チャレンジカップ2025将于2025年9月6日・13日・20日・27日在長野県諏訪市諏訪湖举行。6年ぶりに復活的全国新作花火競技大会，全国20名煙火師競演斬新創作花火，約400発×5回的芸術性花火競技。',
  keywords: '全国新作花火,諏訪湖花火,長野県花火,9月花火大会,新作花火競技,甲信越花火,諏訪市花火',
  openGraph: {
    title: '全国新作花火チャレンジカップ2025 | 2025年9月6日・13日・20日・27日',
    description: '6年ぶりに復活した全国新作花火競技大会，諏訪湖を舞台に全国煙火師が競演する芸術性花火',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function ShinsakuHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={shinsakuHanabiData}
      regionKey="koshinetsu"
    />
  );
} 