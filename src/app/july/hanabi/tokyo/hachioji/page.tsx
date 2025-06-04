'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hachioji } from '@/data/level5-july-hanabi-tokyo-hachioji';

export default function HachiojiHanabiDetail() {
  return <HanabiDetailTemplate data={hachioji} />;
} 