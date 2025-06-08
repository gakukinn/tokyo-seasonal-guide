import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { uedaHanabiData } from '@/data/level5-august-ueda-hanabi';

export default function UedaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={uedaHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${uedaHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${uedaHanabiData.name}详细信息：${uedaHanabiData.date}在${uedaHanabiData.venues[0]?.location}举行，${uedaHanabiData.expectedVisitors}预计参加。煙火業者3社による競演，约8000发花火在千曲川河川敷绽放。`,
    keywords: '信州上田大花火大会,甲信越花火,8月花火,千曲川,煙火業者3社競演,音乐花火',
    openGraph: {
      title: uedaHanabiData.name,
      description: `${uedaHanabiData.date}举行，${uedaHanabiData.expectedVisitors}预计参加`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 