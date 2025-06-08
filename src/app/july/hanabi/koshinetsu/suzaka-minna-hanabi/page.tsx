/**
 * 第五层页面 - suzaka-minna-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event suzaka-minna-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/suzaka-minna-hanabi
 * @description suzaka-minna-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import React from 'react';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { suzakaMinnaNHanabiData } from '@/data/level5-suzaka-minna-hanabi';

export default function SuzakaMinnaHanabiPage() {
  return <HanabiDetailTemplate data={suzakaMinnaNHanabiData} regionKey="koshinetsu" />;
} 