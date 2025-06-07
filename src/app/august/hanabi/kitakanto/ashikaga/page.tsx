/**
 * 第五层页面 - 第109回足利花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 足利市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/ashikaga
 * @description 展示第109回足利花火大会的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { ashikagaHanabiData } from '@/data/level5-august-ashikaga-hanabi';

export default function AshikagaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={ashikagaHanabiData}
      regionKey="kitakanto"
    />
  );
} 