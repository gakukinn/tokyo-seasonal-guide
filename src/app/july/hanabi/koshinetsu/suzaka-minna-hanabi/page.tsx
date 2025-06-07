/**
 * 第五层页面 - suzaka-minna-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event suzaka-minna-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/suzaka-minna-hanabi
 * @description suzaka-minna-hanabi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { suzakaMinnaNHanabiData } from '../../../../../data/level5-suzaka-minna-hanabi';

export const metadata: Metadata = {
  title: '第38回须坂大家花火大会 2025 | 长野须坂市蔵町花火大会详情',
  description: '7月20日长野县须坂市举办的第38回须坂大家花火大会。1000发精品花火点亮蔵町夜空，全国花火竞技会级别品质，免费观赏市民传统活动。',
  keywords: '须坂花火大会,蔵町花火,长野花火,7月花火,市民花火,星雷花火,音乐花火,第38回',
  openGraph: {
    title: '第38回须坂大家花火大会 2025 | 长野须坂市蔵町花火',
    description: '7月20日，1000发精品花火点亮须坂市蔵町夜空。全国花火竞技会级别品质，免费观赏。',
    images: ['/images/hanabi/suzaka-minna-main.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '第38回须坂大家花火大会 2025',
    description: '须坂市蔵町传统花火，北信地域夏季到来的浪漫标志',
    images: ['/images/hanabi/suzaka-minna-main.svg']
  }
};

export default function SuzakaMinnaNHanabiPage() {
  return <HanabiDetailTemplate data={suzakaMinnaNHanabiData} regionKey="koshinetsu" />;
} 