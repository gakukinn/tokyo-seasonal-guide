'use client';

import Link from 'next/link';
import { activityCategories, standardRegions, getMonthName } from '@/config/activityConfig';

interface ActivityCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  regions: string[];
}

interface RegionData {
  id: string;
  name: string;
  icon: string;
  count: number;
  available: boolean;
  description?: string;
}

interface ActivityTemplateProps {
  monthId: number;
  activityId: string;
  customConfig?: {
    category?: Partial<ActivityCategory>;
    regions?: Partial<RegionData>[];
  };
}

export default function ActivityTemplate({ 
  monthId, 
  activityId, 
  customConfig 
}: ActivityTemplateProps) {
  const monthInfo = getMonthName(monthId);
  const defaultCategory = activityCategories[activityId as keyof typeof activityCategories];
  
  // 合并默认和自定义配置
  const category = {
    ...defaultCategory,
    ...customConfig?.category
  };

  // 固定地区配置（图标和顺序都从模板中固定，不允许自定义）
  const fixedRegions: RegionData[] = category?.regions?.map(regionId => ({
    id: regionId,
    name: standardRegions[regionId as keyof typeof standardRegions]?.name || regionId,
    icon: standardRegions[regionId as keyof typeof standardRegions]?.icon || '📍',
    count: 0,
    available: true
  })) || [];

  // 如果有自定义配置，只允许修改count、available和description，图标和顺序保持模板固定
  const regions = customConfig?.regions ? fixedRegions.map(region => {
    const customRegion = customConfig.regions?.find(r => r.id === region.id);
    return {
      ...region,
      count: customRegion?.count || region.count,
      available: customRegion?.available !== undefined ? customRegion.available : region.available,
      description: customRegion?.description || region.description
    };
  }) : fixedRegions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-blue-200 border-b border-blue-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              首页
            </Link>
            <span className="text-gray-600">›</span>
            <Link href={`/${monthInfo.urlPath}`} className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              {monthInfo.chinese} · {monthInfo.traditional}
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-medium">{category?.name}</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-12 pb-12 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="text-6xl sm:text-7xl drop-shadow-lg flex items-center">{category?.icon}</div>
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 drop-shadow-sm leading-none">
                    {monthInfo.chinese} <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent font-extrabold transform hover:scale-105 transition-transform duration-300 drop-shadow-lg">{category?.name}</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium">
                    {category?.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 地区选择 */}
        <section className="py-16 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">选择地区</h2>
            
            {/* 优化响应式布局：针对6个卡片 */}
            <div className="grid gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3
              auto-rows-fr">
              {regions.map((region, index) => {
                // 定义地区卡片的颜色样式，循环使用二层的颜色配置
                const colorOptions = [
                  'from-rose-100 to-white',
                  'from-white to-blue-100', 
                  'from-blue-100 to-blue-200'
                ];
                const cardColor = colorOptions[index % colorOptions.length];
                
                return (
                <Link
                  key={region.id}
                  href={region.available ? `/${monthInfo.urlPath}/${activityId}/${region.id}` : '#'}
                  className={`group relative block p-6 sm:p-8 lg:p-10 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer hover:shadow-2xl border border-white/60 shadow-xl backdrop-blur-sm hover:border-white/80 ${
                    region.available 
                      ? `bg-gradient-to-br ${cardColor}`
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 opacity-60'
                  }`}
                  onClick={(e) => {
                    if (!region.available) {
                      e.preventDefault();
                    }
                  }}
                >
                  {/* 即将推出标识 */}
                  {!region.available && (
                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      即将推出
                    </div>
                  )}


                  
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {region.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                      {region.name}
                    </h3>
                    {region.description && (
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {region.description}
                      </p>
                    )}
                  </div>
                </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-16 bg-white/50 backdrop-blur-sm border-t border-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-10">快速导航</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <Link
                href={`/${monthInfo.urlPath}`}
                className="bg-white/80 border-2 border-rose-300/60 text-gray-700 font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-white hover:border-rose-400/80 hover:text-gray-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-sm hover:shadow-2xl text-center"
              >
                ← 返回{monthInfo.chinese}
              </Link>
              {regions.find(r => r.available) && activityId === 'hanabi' && [7, 8, 9].includes(monthId) && (
                <Link
                  href={
                    monthId === 7 ? "/august/hanabi" : 
                    monthId === 8 ? "/september/hanabi" : 
                    monthId === 9 ? "/july/hanabi" :
                    "/july/hanabi"
                  }
                  className="bg-gradient-to-r from-rose-300/90 to-blue-300/90 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:from-rose-400 hover:to-blue-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm hover:shadow-2xl text-center"
                >
                  {
                    monthId === 7 ? "八月花火" : 
                    monthId === 8 ? "九月花火" : 
                    monthId === 9 ? "七月花火" :
                    "七月花火"
                  } →
                </Link>
              )}
            </div>
            
            {/* 返回顶部按钮 */}
            <div className="mt-12">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white/70 hover:bg-white/90 text-blue-600 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg border border-white/60 backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
              >
                ↑ 返回顶部
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              {monthInfo.chinese} · {monthInfo.traditional} | {category?.name} | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 