/**
 * 第五层页面 - 第70回利根川大花火详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 取手市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/toride
 * @description 展示第70回利根川大花火的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { torideHanabiData } from '@/data/level5-august-toride-hanabi';

export default function TorideHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={torideHanabiData}
 regionKey="kitakanto"
 />
 );
} 