/**
 * 第五层页面 - 第51回高崎大花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 高崎市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/takasaki
 * @description 展示第51回高崎大花火大会的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { takasakiHanabiData } from '@/data/level5-august-takasaki-hanabi';

export default function TakasakiHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={takasakiHanabiData}
      regionKey="kitakanto"
    />
  );
} 