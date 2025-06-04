import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { okutamaData } from '@/data/level5-august-hanabi-tokyo-okutama';

export default function OkutamaDetailPage() {
  return <HanabiDetailTemplate data={okutamaData} />;
}

export async function generateMetadata() {
  return {
    title: `${okutamaData.name} - ${okutamaData.date} | 花火指南`,
    description: `${okutamaData.name}の詳細情報。${okutamaData.date}開催、${okutamaData.expectedVisitors}の観客が予想される${okutamaData.fireworksCount}の花火大会。愛宕山広場で開催される町制施行70周年記念の特別な花火大会です。`,
    keywords: '奥多摩,花火大会,愛宕山広場,8月,東京,自然',
  };
} 