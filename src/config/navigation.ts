// 地区导航配置
export interface NavigationRegion {
  name: string;
  slug: string;
  href: string;
}

// 七月花火地区循环导航顺序
export const JULY_REGIONS: NavigationRegion[] = [
  { name: '东京花火', slug: 'tokyo', href: '/july/hanabi/tokyo' },
  { name: '埼玉花火', slug: 'saitama', href: '/july/hanabi/saitama' },
  { name: '千叶花火', slug: 'chiba', href: '/july/hanabi/chiba' },
  { name: '神奈川花火', slug: 'kanagawa', href: '/july/hanabi/kanagawa' },
  { name: '北关东花火', slug: 'kitakanto', href: '/july/hanabi/kitakanto' },
  { name: '甲信越花火', slug: 'koshinetsu', href: '/july/hanabi/koshinetsu' }
];

// 获取地区的前后导航链接
export function getRegionNavigation(currentSlug: string) {
  const currentIndex = JULY_REGIONS.findIndex(region => region.slug === currentSlug);
  
  if (currentIndex === -1) {
    // 如果找不到当前地区，返回默认导航
    return {
      prev: { label: '← 返回', href: '/july/hanabi' },
      next: { label: '继续 →', href: '/july/hanabi' }
    };
  }
  
  // 循环导航：前一个和后一个
  const prevIndex = (currentIndex - 1 + JULY_REGIONS.length) % JULY_REGIONS.length;
  const nextIndex = (currentIndex + 1) % JULY_REGIONS.length;
  
  const prevRegion = JULY_REGIONS[prevIndex];
  const nextRegion = JULY_REGIONS[nextIndex];
  
  return {
    prev: { 
      label: `← ${prevRegion.name}`, 
      href: prevRegion.href 
    },
    next: { 
      label: `${nextRegion.name} →`, 
      href: nextRegion.href 
    }
  };
} 