/**
 * 第五层页面 - gion-kashiwazaki-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event gion-kashiwazaki-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/gion-kashiwazaki-hanabi
 * @description gion-kashiwazaki-hanabi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-gion-kashiwazaki-hanabi';

export const metadata: Metadata = {
 title: '祇园柏崎祭海之大花火大会 2025 | 越后三大花火之一 | 海中空星雷震撼演出',
 description: '2025年7月26日举办的祇园柏崎祭海之大花火大会，越后三大花火之一。尺玉100发一齐打上，海中空星雷等震撼演出，约1万6000发花火照亮日本海夜空。',
 keywords: '祇园柏崎祭,海之大花火,柏崎花火,越后三大花火,尺玉100发,海中空星雷,新潟花火,日本海花火',
 openGraph: {
 title: '祇园柏崎祭海之大花火大会 2025',
 description: '越后三大花火之一，尺玉100发一齐打上的震撼演出',
 type: 'website',
 locale: 'zh_CN',
 },
};

export default function GionKashiwazakiHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={hanabiData}
 regionKey="koshinetsu"
 />
 );
} 