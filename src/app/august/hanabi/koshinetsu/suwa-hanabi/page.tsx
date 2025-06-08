import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { suwaHanabiData } from '@/data/level5-august-suwa-hanabi';

export default function SuwaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={suwaHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${suwaHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${suwaHanabiData.name}详细信息：${suwaHanabiData.date}在${suwaHanabiData.venues[0]?.location}举行。全国屈指规模的湖上花火大会，水上连发花火与山间回响营造震撼体验。`,
    keywords: '诏访湖祭湖上花火大会,甲信越花火,8月花火,诏访湖,水上连发花火,湖上花火,山间回响',
    openGraph: {
      title: suwaHanabiData.name,
      description: `${suwaHanabiData.date}举行，全国屈指规模的湖上花火大会`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 