/**
 * 第五层页面 - itabashi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 东京
 * @event itabashi
 * @type 花火详情页面
 * @path /august/hanabi/tokyo/itabashi
 * @description itabashi完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { itabashiHanabiData } from '@/data';

export default function ItabashiDetailPage() {
 return <HanabiDetailTemplate data={itabashiHanabiData} regionKey="tokyo" />;
} 