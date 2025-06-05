'use client';

import ActivityTemplate from '@/components/ActivityTemplate';

export default function JulyHanabiPage() {
  // 七月花火大会的特定配置 - 只配置数量和可用性，顺序使用模板固定
  const customConfig = {
    regions: [
      { id: 'tokyo', count: 6, available: true, description: '都心便利' },
      { id: 'saitama', count: 1, available: true, description: '交通便捷' },
      { id: 'chiba', count: 1, available: true, description: '海景特色' },
      { id: 'kanagawa', count: 3, available: true, description: '港湾风情' },
      { id: 'koshinetsu', count: 1, available: true, description: '山岳美景' },
      { id: 'kitakanto', count: 1, available: true, description: '自然风光' }
    ]
  };

  return (
    <ActivityTemplate 
      monthId={7}
      activityId="hanabi"
      customConfig={customConfig}
    />
  );
} 