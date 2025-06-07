/**
 * 第五层页面 - 第20回古河花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 北关东
 * @city 古河市
 * @type 花火详情页面
 * @path /august/hanabi/kitakanto/koga
 * @description 展示第20回古河花火大会的详细信息，包含活动详情、交通信息、观赏攻略等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { kogaHanabiData } from '@/data/level5-august-koga-hanabi';

export default function KogaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={kogaHanabiData}
      regionKey="kitakanto"
    />
  );
} 