'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { saitamaHanabiEvents, saitamaMonthInfo, saitamaRegionInfo } from '@/data/level4-july-hanabi-saitama';

export default function JulySaitamaHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={saitamaHanabiEvents}
      regionInfo={saitamaRegionInfo}
      monthInfo={saitamaMonthInfo}
    />
  );
} 