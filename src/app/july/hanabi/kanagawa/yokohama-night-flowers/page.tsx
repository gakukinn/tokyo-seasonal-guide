/**
 * 第五层页面 - yokohama-night-flowers完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 神奈川
 * @event yokohama-night-flowers
 * @type 花火详情页面
 * @path /july/hanabi/kanagawa/yokohama-night-flowers
 * @description yokohama-night-flowers完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { nightflowersData } from '@/data/level5-july-hanabi-kanagawa-nightflowers';

export default function YokohamaNightFlowersPage() {
 return (
 <HanabiDetailTemplate 
 data={nightflowersData}
 regionKey="kanagawa"
 />
 );
} 