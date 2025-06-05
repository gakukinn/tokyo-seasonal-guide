'use client';

import ActivityTemplate from '@/components/ActivityTemplate';

export default function OctoberHanabiPage() {
  // 只配置活动数量和可用性，顺序和图标使用模板固定配置
  const customRegions = [
    { id: 'tokyo', count: 2, available: true },
    { id: 'saitama', count: 1, available: true },
    { id: 'chiba', count: 1, available: true },
    { id: 'kanagawa', count: 3, available: true },
    { id: 'koshinetsu', count: 1, available: true },
    { id: 'kitakanto', count: 1, available: true }
  ];

  return (
    <ActivityTemplate 
      monthId={10} 
      activityId="hanabi" 
      customConfig={{ regions: customRegions }}
    />
  );
} 