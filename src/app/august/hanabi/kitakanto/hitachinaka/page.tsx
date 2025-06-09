/**
 * 第五层页面 - 第31回常陆那珂祭花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 常陆那珂市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/hitachinaka
 * @description 展示第31回常陆那珂祭花火大会的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hitachinakaHanabiData } from '@/data/level5-august-hitachinaka-hanabi';

export default function HitachinakaHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={hitachinakaHanabiData}
 regionKey="kitakanto"
 />
 );
} 