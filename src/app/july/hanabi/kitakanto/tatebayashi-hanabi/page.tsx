/**
 * 第五层页面 - tatebayashi-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 北关东
 * @event tatebayashi-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/kitakanto/tatebayashi-hanabi
 * @description tatebayashi-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { tatebayashiHanabiData } from '@/data/level5-tatebayashi-hanabi';

export default function TatebayashiHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={tatebayashiHanabiData}
      regionKey="kitakanto"
    />
  );
} 