/**
 * 第五层页面 - fuji-kawaguchi-lake-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event fuji-kawaguchi-lake-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/fuji-kawaguchi-lake-hanabi
 * @description fuji-kawaguchi-lake-hanabi完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { fujiKawaguchiData } from '@/data/level5-fuji-kawaguchi-lake-hanabi';

export default function FujiKawaguchiLakeHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={fujiKawaguchiData} 
 regionKey="koshinetsu"
 />
 );
} 