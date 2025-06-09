import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { numataHanabiData } from '@/data/level5-september-kitakanto-numata-hanabi';

export const metadata: Metadata = {
  title: '第13回沼田花火大会 | 2025年9月13日 | 群马县沼田市花火大会',
  description: '第13回沼田花火大会将于2025年9月13日在群马县沼田市利根川河畔举行。约1万发花火在河畔绽放，沼田城址公园的高台位置提供绝佳观赏视角，音乐花火和创意花火是最大特色。',
  keywords: '沼田花火大会,群马县花火,9月花火大会,利根川河畔,沼田城址公园,音乐花火,北关东花火',
  openGraph: {
    title: '第13回沼田花火大会 | 2025年9月13日',
    description: '群马县沼田市举办的秋季花火大会，约1万发花火在利根川河畔绽放，音乐花火和创意花火精彩纷呈',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function NumataHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={numataHanabiData}
      regionKey="kitakanto"
    />
  );
} 