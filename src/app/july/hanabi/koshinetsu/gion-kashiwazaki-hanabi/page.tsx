/**
 * 第五层页面 - gion-kashiwazaki-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import React from 'react';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-gion-kashiwazaki-hanabi';

export default function GionKashiwazakiHanabiPage() {
  return <HanabiDetailTemplate data={hanabiData} regionKey="koshinetsu" />;
} 