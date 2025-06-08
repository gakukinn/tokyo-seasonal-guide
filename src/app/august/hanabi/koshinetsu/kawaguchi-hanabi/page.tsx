import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { kawaguchiHanabiData } from '@/data/level5-august-kawaguchi-hanabi';

export default function KawaguchiHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={kawaguchiHanabiData} 
      regionKey="koshinetsu" 
    />
  );
}

export async function generateMetadata() {
  return {
    title: `${kawaguchiHanabiData.name} - 甲信越8月花火大会详情`,
    description: `${kawaguchiHanabiData.name}详细信息：${kawaguchiHanabiData.date}在${kawaguchiHanabiData.venues[0]?.location}举行，${kawaguchiHanabiData.expectedVisitors}预计参加。以雄大富士山为背景，约1万发花火在湖面绽放，水面倒影美轮美奂。`,
    keywords: '河口湖湖上祭,甲信越花火,8月花火,富士山,湖面倒影,ミュージカル花火',
    openGraph: {
      title: kawaguchiHanabiData.name,
      description: `${kawaguchiHanabiData.date}举行，${kawaguchiHanabiData.expectedVisitors}预计参加`,
      type: 'article',
      locale: 'zh_CN',
    }
  };
} 