/**
 * 第三层页面 - 9月花火大会总览
 * @layer 三层 (Activity Layer)
 * @month 9月 
 * @type 花火活动总览页面
 * @path /september/hanabi
 * @description 展示9月所有地区的花火大会分类导航
 */
'use client';

import ActivityTemplate from '@/components/ActivityTemplate';

export default function SeptemberHanabiPage() {
  // 九月花火大会的特定配置 - 只配置数量和可用性，顺序使用模板固定
  const customConfig = {
    regions: [
      { id: 'tokyo', count: 4, available: true, description: '都心便利' },
      { id: 'saitama', count: 2, available: true, description: '交通便捷' },
      { id: 'chiba', count: 1, available: true, description: '海景特色' },
      { id: 'kanagawa', count: 2, available: true, description: '海景魅力' },
      { id: 'kitakanto', count: 1, available: true, description: '自然风光' },
      { id: 'koshinetsu', count: 1, available: true, description: '山岳景观' }
    ]
  };

  return (
    <ActivityTemplate 
      monthId={9} 
      activityId="hanabi" 
      customConfig={customConfig}
    />
  );
} 