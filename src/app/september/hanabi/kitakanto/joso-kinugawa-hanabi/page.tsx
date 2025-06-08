import { Metadata } from 'next';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { josoKinugawaHanabiData } from '../../../../../data/level5-september-kitakanto-joso-kinugawa-hanabi';

export const metadata: Metadata = {
  title: '第58回常总绹川花火大会 | 2025年9月北关东花火大会',
  description: '第58回常总绹川花火大会，日本代表花火师作品竞演，约1万3000发花火照亮鬼怒川夜空。茨城县常总市，2025年9月20日开催。',
  keywords: '常总绹川花火,鬼怒川花火,茨城花火,日本代表花火师,音乐星矿,北关东花火,9月花火',
  openGraph: {
    title: '第58回常总绹川花火大会 | 2025年9月北关东花火大会',
    description: '第58回常总绹川花火大会，日本代表花火师作品竞演，约1万3000发花火照亮鬼怒川夜空。茨城县常总市，2025年9月20日开催。',
    type: 'article',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '第58回常总绹川花火大会 | 2025年9月北关东花火大会',
    description: '第58回常总绹川花火大会，日本代表花火师作品竞演，约1万3000发花火照亮鬼怒川夜空。',
  },
  alternates: {
    canonical: '/september/hanabi/kitakanto/joso-kinugawa-hanabi'
  }
};

export default function JosoKinugawaHanabiPage() {
  return <HanabiDetailTemplate data={josoKinugawaHanabiData} regionKey="kitakanto" />;
} 