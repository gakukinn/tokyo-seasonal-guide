/**
 * 第五层页面 - sanjo-natsumatsuri-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event sanjo-natsumatsuri-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/sanjo-natsumatsuri-hanabi
 * @description sanjo-natsumatsuri-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import React from 'react';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-sanjo-natsumatsuri-hanabi';

export default function SanjoNatsumatsuriHanabiPage() {
  return <HanabiDetailTemplate data={hanabiData} regionKey="koshinetsu" />;
} 