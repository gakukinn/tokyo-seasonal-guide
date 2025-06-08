import { Metadata } from 'next';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { oaraiHanabiData } from '../../../../../data/level5-september-kitakanto-oarai-hanabi';

export const metadata: Metadata = {
  title: '大洗海上花火大会2025〜千櫓祭〜 | 2025年9月北关东花火大会',
  description: '大洗海上花火大会2025〜千櫓祭〜，内閣总理大臣赏最多21回受赏的日本一花火师野村花火工业制作，约1万8000发花火照亮大洗海岸。2025年9月27日开催。',
  keywords: '大洗海上花火,千櫓祭,野村花火工业,茨城花火,海上花火,蓝色冲击波,北关东花火,9月花火',
  openGraph: {
    title: '大洗海上花火大会2025〜千櫓祭〜 | 2025年9月北关东花火大会',
    description: '大洗海上花火大会2025〜千櫓祭〜，内閣总理大臣赏最多21回受赏的日本一花火师野村花火工业制作，约1万8000发花火照亮大洗海岸。',
    type: 'article',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大洗海上花火大会2025〜千櫓祭〜 | 2025年9月北关东花火大会',
    description: '大洗海上花火大会2025〜千櫓祭〜，内閣总理大臣赏最多21回受赏的日本一花火师野村花火工业制作，约1万8000发花火照亮大洗海岸。',
  },
  alternates: {
    canonical: '/september/hanabi/kitakanto/oarai-hanabi'
  }
};

export default function OaraiHanabiPage() {
  return <HanabiDetailTemplate data={oaraiHanabiData} regionKey="kitakanto" />;
} 