/**
 * 第五层页面 - nojiri-lake-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event nojiri-lake-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/nojiri-lake-hanabi
 * @description nojiri-lake-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import React from 'react';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-nojiri-lake-hanabi';

export default function NojiriLakeHanabiPage() {
  return <HanabiDetailTemplate data={hanabiData} regionKey="koshinetsu" />;
} 