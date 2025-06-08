import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { niigataHanabiData } from '@/data/level5-august-niigata-hanabi';

export default function NiigataHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={niigataHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${niigataHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${niigataHanabiData.name}详细信息：${niigataHanabiData.date}在${niigataHanabiData.venues[0]?.location}举行，${niigataHanabiData.expectedVisitors}预计参加。新潟祭压轴活动，都心部音乐花火与初音未来合作的现代化花火体验。`,
    keywords: '新潟祭花火大会,甲信越花火,8月花火,信浓川,都心部花火,音乐花火,初音未来',
    openGraph: {
      title: niigataHanabiData.name,
      description: `${niigataHanabiData.date}举行，${niigataHanabiData.expectedVisitors}预计参加`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 