/**
 * 第五层页面 - 第69回前桥花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 前桥市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/maebashi
 * @description 展示第69回前桥花火大会的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { maebashiHanabiData } from '@/data/level5-august-maebashi-hanabi';

export default function MaebashiHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={maebashiHanabiData}
 regionKey="kitakanto"
 />
 );
} 