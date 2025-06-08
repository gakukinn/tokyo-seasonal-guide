import { Metadata } from 'next';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { tonegawaHanabiData } from '../../../../../data/level5-september-kitakanto-tonegawa-hanabi';

export const metadata: Metadata = {
  title: '第38回利根川大花火大会 | 2025年9月北关东花火大会',
  description: '第38回利根川大花火大会，四大花火师梦幻合作，约3万发花火照亮利根川夜空。茨城县境町河滨公园，2025年9月13日开催。',
  keywords: '利根川大花火,境町花火,茨城花火,四大花火师,关东最大规模,北关东花火,9月花火',
  openGraph: {
    title: '第38回利根川大花火大会 | 2025年9月北关东花火大会',
    description: '第38回利根川大花火大会，四大花火师梦幻合作，约3万发花火照亮利根川夜空。茨城县境町河滨公园，2025年9月13日开催。',
    type: 'article',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '第38回利根川大花火大会 | 2025年9月北关东花火大会',
    description: '第38回利根川大花火大会，四大花火师梦幻合作，约3万发花火照亮利根川夜空。',
  },
  alternates: {
    canonical: '/september/hanabi/kitakanto/tonegawa-hanabi'
  }
};

export default function TonegawaHanabiPage() {
  return <HanabiDetailTemplate data={tonegawaHanabiData} regionKey="kitakanto" />;
} 