import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { asaharaHanabiData } from '@/data/level5-september-koshinetsu-asahara-hanabi';

export const metadata: Metadata = {
  title: '浅原神社秋季例大祭奉納大煙火 | 2025年9月12日・13日 | 新潟县小千谷市花火大会',
  description: '浅原神社秋季例大祭奉納大煙火将于2025年9月12日・13日在新潟县小千谷市片貝町举行。三尺玉发祥地200年传统祭典，世界最大四尺玉花火震撼打上，约1万5000发花火的大规模竞技大会。',
  keywords: '浅原神社花火,片貝花火,新潟县花火,9月花火大会,四尺玉花火,三尺玉发祥地,甲信越花火,小千谷花火',
  openGraph: {
    title: '浅原神社秋季例大祭奉納大煙火 | 2025年9月12日・13日',
    description: '三尺玉发祥地新潟县小千谷市片貝町举办的200年传统花火祭典，世界最大四尺玉花火震撼体验',
    type: 'article',
    locale: 'zh_CN',
  },
};

export default function AsaharaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={asaharaHanabiData}
      regionKey="koshinetsu"
    />
  );
} 