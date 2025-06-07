/**
 * 第五层页面 - shirahama-ama-matsuri完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 千叶
 * @event shirahama-ama-matsuri
 * @type 花火详情页面
 * @path /july/hanabi/chiba/shirahama-ama-matsuri
 * @description shirahama-ama-matsuri完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { shirahamaAmaHanabiData } from '@/data/level5-july-hanabi-shirahama-ama';

export default function ShirahamaAmaHanabiPage() {
  return <HanabiDetailTemplate data={shirahamaAmaHanabiData} regionKey="chiba" />;
} 