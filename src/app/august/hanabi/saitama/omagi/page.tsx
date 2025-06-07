/**
 * 第五层页面 - omagi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 埼玉
 * @event omagi
 * @type 花火详情页面
 * @path /august/hanabi/saitama/omagi
 * @description omagi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { saitamaOmagiHanabiData } from '@/data/level5-august-saitama-omagi-hanabi';

export const metadata: Metadata = {
  title: '埼玉市花火大会大间木公园会场 | 2025年8月9日 | 日本花火旅游指南',
  description: '2025年8月9日埼玉市花火大会大间木公园会场完整攻略。都市公园花火盛典，约6万人参加，JR武蔵野线东浦和站徒步15分可达。查看交通、观赏点、会场信息。',
  keywords: '埼玉市花火大会,大间木公园,东浦和站,2025年8月9日,都市花火,埼玉市绿区,花火攻略',
  openGraph: {
    title: '埼玉市花火大会大间木公园会场 - 2025年8月9日',
    description: '都市公园中的花火盛典，家庭友好的观赏环境，交通便利',
    images: ['/images/hanabi/tamura-fireworks-main.svg'],
    type: 'article'
  }
};

export default function SaitamaOmagiHanabiPage() {
  return <HanabiDetailTemplate data={saitamaOmagiHanabiData} regionKey="saitama" />;
} 