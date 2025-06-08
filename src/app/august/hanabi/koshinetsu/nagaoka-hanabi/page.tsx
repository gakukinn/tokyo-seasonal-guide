import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { nagaokaHanabiData } from '@/data/level5-august-nagaoka-hanabi';

export default function NagaokaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={nagaokaHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${nagaokaHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${nagaokaHanabiData.name}详细信息：${nagaokaHanabiData.date}在${nagaokaHanabiData.venues[0]?.location}举行，${nagaokaHanabiData.expectedVisitors}预计参加。日本三大花火大会之一，复兴祈愿花火凤凰震撼人心。`,
    keywords: '长冈祭大花火大会,甲信越花火,8月花火,信浓川,复兴祈愿凤凰,正三尺玉',
    openGraph: {
      title: nagaokaHanabiData.name,
      description: `${nagaokaHanabiData.date}举行，${nagaokaHanabiData.expectedVisitors}预计参加`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 