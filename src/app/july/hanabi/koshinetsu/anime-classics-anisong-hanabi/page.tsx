/**
 * 第五层页面 - anime-classics-anisong-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event anime-classics-anisong-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/anime-classics-anisong-hanabi
 * @description anime-classics-anisong-hanabi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { animeClassicsData } from '../../../../../data/level5-anime-classics-anisong-hanabi';

export const metadata: Metadata = {
 title: '动漫经典动画歌曲花火 2025 | 山梨富士川町花火大会详情',
 description: '7月5日山梨县富士川町举办的动漫经典动画歌曲花火大会。1万发花火与怀念动漫音乐完美同步，井上现场演出，打造跨世代感动体验。',
 keywords: '动漫花火,富士川町,动画歌曲,山梨花火大会,7月花火,井上,动画经典',
 openGraph: {
 title: '动漫经典动画歌曲花火 2025 | 山梨富士川町花火大会',
 description: '7月5日，1万发花火与怀念动漫音乐的完美融合。井上现场演出，制作会社跨界合作。',
 images: ['/images/hanabi/anime-classics-main.svg'],
 type: 'website'
 },
 twitter: {
 card: 'summary_large_image',
 title: '动漫经典动画歌曲花火 2025',
 description: '1970-90年代名作动漫主题歌与花火同步演出',
 images: ['/images/hanabi/anime-classics-main.svg']
 }
};

export default function AnimeClassicsAnisongHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={animeClassicsData} 
 regionKey="koshinetsu"
 />
 );
} 