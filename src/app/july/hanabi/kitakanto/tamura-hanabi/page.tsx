/**
 * 第五层页面 - tamura-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 北关东
 * @event tamura-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/kitakanto/tamura-hanabi
 * @description tamura-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { tamuraHanabiData } from '@/data';

export default function TamuraHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={tamuraHanabiData}
 regionKey="kitakanto"
 />
 );
} 