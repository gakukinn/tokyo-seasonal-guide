import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { shinmeiHanabiData } from '@/data/level5-august-shinmei-hanabi';

export default function ShinmeiHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={shinmeiHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${shinmeiHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${shinmeiHanabiData.name}详细信息：${shinmeiHanabiData.date}在${shinmeiHanabiData.venues[0]?.location}举行，${shinmeiHanabiData.expectedVisitors}预计参加。约2万发花火与音乐完美同步，山梨县内最大级规模的花火大会。`,
    keywords: '神明花火大会,市川三郷町,甲信越花火,8月花火,音乐花火,三郡桥,笛吹川',
    openGraph: {
      title: shinmeiHanabiData.name,
      description: `${shinmeiHanabiData.date}举行，${shinmeiHanabiData.expectedVisitors}预计参加`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 