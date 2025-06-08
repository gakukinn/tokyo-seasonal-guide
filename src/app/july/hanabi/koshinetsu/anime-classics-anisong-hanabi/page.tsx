/**
 * 第五层页面 - anime-classics-anisong-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event anime-classics-anisong-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/anime-classics-anisong-hanabi
 * @description anime-classics-anisong-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import React from 'react';
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { animeClassicsData } from '../../../../../data/level5-anime-classics-anisong-hanabi';

export default function AnimeClassicsAnisongHanabiPage() {
  return <HanabiDetailTemplate data={animeClassicsData} regionKey="koshinetsu" />;
} 