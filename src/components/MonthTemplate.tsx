'use client';

import Link from 'next/link';
import { monthsConfig, getMonthPath, getNavigationMonths, type MonthConfig } from '@/config/monthsConfig';

interface MonthTemplateProps {
 monthId: number;
 customConfig?: Partial<MonthConfig>;
}

// 地区活动数量数据（基于实际统计）
const getRegionActivityCounts = (monthId: number) => {
  // 7月花火活动数量统计（基于项目实际数据）
  if (monthId === 7) {
    return {
      tokyo: { count: 6, activities: ['隅田川花火大会', '东京竞马场花火', '葛饰纳凉花火大会'] },
      saitama: { count: 7, activities: ['越谷花火大会', '西武园游乐园大火祭', '入间基地纳凉祭'] },
      chiba: { count: 6, activities: ['千叶罗德花火', '南房总白浜海女祭', '富津市民花火大会'] },
      kanagawa: { count: 3, activities: ['镰仓花火大会', '横滨夜间花火', '八景岛花火交响曲'] },
      kitakanto: { count: 4, activities: ['水户花火大会', '真冈花火大会', '玉村花火大会'] },
      koshinetsu: { count: 6, activities: ['富士河口湖花火', '祇园柏崎花火', '动漫经典花火'] },
      // 新增地区（暂时没有活动数据）
      niigata: { count: 0, activities: [] },
      fukushima: { count: 0, activities: [] },
      nagano: { count: 0, activities: [] },
      gunma: { count: 0, activities: [] },
      tochigi: { count: 0, activities: [] },
      ibaraki: { count: 0, activities: [] },
      yamanashi: { count: 0, activities: [] },
      shizuoka: { count: 0, activities: [] }
    };
  }
  
  // 8月花火活动数量统计
  if (monthId === 8) {
    return {
      tokyo: { count: 6, activities: ['板桥花火大会', '江户川花火大会', '神宫外苑花火大会'] },
      saitama: { count: 7, activities: ['朝霞花火大会', '熊谷花火大会', '户田桥花火大会'] },
      chiba: { count: 8, activities: ['幕张海滨花火', '松户花火大会', '市川花火大会'] },
      kanagawa: { count: 8, activities: ['厚木鲇祭花火', '金泽祭花火', '横滨夜间花火'] },
      kitakanto: { count: 6, activities: ['足利花火大会', '高崎花火大会', '前桥花火大会'] },
      koshinetsu: { count: 6, activities: ['神明花火大会', '新潟祭花火', '长冈花火大会'] },
      // 新增地区（暂时没有活动数据）
      niigata: { count: 0, activities: [] },
      fukushima: { count: 0, activities: [] },
      nagano: { count: 0, activities: [] },
      gunma: { count: 0, activities: [] },
      tochigi: { count: 0, activities: [] },
      ibaraki: { count: 0, activities: [] },
      yamanashi: { count: 0, activities: [] },
      shizuoka: { count: 0, activities: [] }
    };
  }
  
  // 9月花火活动数量统计
  if (monthId === 9) {
    return {
      tokyo: { count: 1, activities: ['调布花火大会'] },
      saitama: { count: 2, activities: ['梅兹塔花火大会', '西武花火大会'] },
      chiba: { count: 0, activities: [] },
      kanagawa: { count: 2, activities: ['八景岛花火', '横滨花火'] },
      kitakanto: { count: 6, activities: ['常陆海滨花火', '小山花火', '大洗花火'] },
      koshinetsu: { count: 2, activities: ['朝原花火', '信作花火'] },
      // 新增地区（暂时没有活动数据）
      niigata: { count: 0, activities: [] },
      fukushima: { count: 0, activities: [] },
      nagano: { count: 0, activities: [] },
      gunma: { count: 0, activities: [] },
      tochigi: { count: 0, activities: [] },
      ibaraki: { count: 0, activities: [] },
      yamanashi: { count: 0, activities: [] },
      shizuoka: { count: 0, activities: [] }
    };
  }
  
  // 其他月份暂时返回空数据
  return {
    tokyo: { count: 0, activities: [] },
    saitama: { count: 0, activities: [] },
    chiba: { count: 0, activities: [] },
    kanagawa: { count: 0, activities: [] },
    kitakanto: { count: 0, activities: [] },
    koshinetsu: { count: 0, activities: [] },
    niigata: { count: 0, activities: [] },
    fukushima: { count: 0, activities: [] },
    nagano: { count: 0, activities: [] },
    gunma: { count: 0, activities: [] },
    tochigi: { count: 0, activities: [] },
    ibaraki: { count: 0, activities: [] },
    yamanashi: { count: 0, activities: [] },
    shizuoka: { count: 0, activities: [] }
  };
};

// 地区信息配置 - 扩展为12个地区
const regionConfig: Record<string, {
  name: string;
  emoji: string;
  color: string;
  description: string;
  gridArea: string;
  hidden?: boolean;
}> = {
  // 第一行：北部地区
  niigata: { 
    name: '新潟县', 
    emoji: '🌾', 
    color: 'from-green-100 to-emerald-100 border-green-300/60',
    description: '日本海沿岸的花火与雪国文化',
    gridArea: 'niigata'
  },
  fukushima: { 
    name: '福岛县', 
    emoji: '🍑', 
    color: 'from-pink-100 to-red-100 border-pink-300/60',
    description: '水果王国的田园花火祭典',
    gridArea: 'fukushima'
  },
  
  // 第二行：中部地区
  nagano: { 
    name: '长野县', 
    emoji: '🏔️', 
    color: 'from-green-100 to-emerald-100 border-green-300/60',
    description: '信州高原的山间花火体验',
    gridArea: 'nagano'
  },
  gunma: { 
    name: '群马县', 
    emoji: '♨️', 
    color: 'from-yellow-100 to-orange-100 border-yellow-300/60',
    description: '温泉之乡的花火与自然',
    gridArea: 'gunma'
  },
  tochigi: { 
    name: '栃木县', 
    emoji: '🦌', 
    color: 'from-purple-100 to-indigo-100 border-purple-300/60',
    description: '日光与那须的花火名胜',
    gridArea: 'tochigi'
  },
  ibaraki: { 
    name: '茨城县', 
    emoji: '🌻', 
    color: 'from-yellow-100 to-orange-100 border-yellow-300/60',
    description: '农业大县的田园花火',
    gridArea: 'ibaraki'
  },
  
  // 第三行：中南部地区
  yamanashi: { 
    name: '山梨县', 
    emoji: '🗻', 
    color: 'from-purple-100 to-pink-100 border-purple-300/60',
    description: '富士山麓的绝景花火',
    gridArea: 'yamanashi'
  },
  saitama: { 
    name: '埼玉县', 
    emoji: '🏘️', 
    color: 'from-blue-100 to-green-100 border-blue-300/60',
    description: '现代住宅区的都市花火',
    gridArea: 'saitama'
  },
  chiba: { 
    name: '千叶县', 
    emoji: '🌊', 
    color: 'from-blue-100 to-cyan-100 border-blue-300/60',
    description: '海滨花火与房总半岛风情',
    gridArea: 'chiba'
  },
  
  // 第四行：南部地区
  shizuoka: { 
    name: '静冈县', 
    emoji: '🍵', 
    color: 'from-green-100 to-emerald-100 border-green-300/60',
    description: '富士山南麓的茶乡花火',
    gridArea: 'shizuoka'
  },
  tokyo: { 
    name: '东京都', 
    emoji: '🗼', 
    color: 'from-red-100 to-pink-100 border-red-300/60',
    description: '首都圈最大规模花火大会集中地',
    gridArea: 'tokyo'
  },
  kanagawa: { 
    name: '神奈川县', 
    emoji: '⚓', 
    color: 'from-blue-100 to-indigo-100 border-blue-300/60',
    description: '横滨港湾与湘南海岸花火',
    gridArea: 'kanagawa'
  },
  
  // 保留原有的合并地区作为备用
  kitakanto: { 
    name: '北关东', 
    emoji: '🏔️', 
    color: 'from-green-100 to-emerald-100 border-green-300/60',
    description: '群马・栃木・茨城三县花火',
    gridArea: 'kitakanto',
    hidden: true // 隐藏，不在新布局中显示
  },
  koshinetsu: { 
    name: '甲信越', 
    emoji: '⛰️', 
    color: 'from-yellow-100 to-orange-100 border-yellow-300/60',
    description: '富士山麓与信州高原花火',
    gridArea: 'koshinetsu',
    hidden: true // 隐藏，不在新布局中显示
  }
};

export default function MonthTemplate({ monthId, customConfig }: MonthTemplateProps) {
 // 获取基础配置，如果有自定义配置则合并
 const baseConfig = monthsConfig[monthId];
 const monthConfig = customConfig ? { ...baseConfig, ...customConfig } : baseConfig;
 
 if (!monthConfig) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="text-2xl font-bold text-gray-800 mb-4">页面不存在</h1>
 <p className="text-gray-600 mb-8">找不到指定的月份页面</p>
 <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
 返回首页
 </Link>
 </div>
 </div>
 );
 }

 const navigation = getNavigationMonths(monthConfig.id);
 const regionCounts = getRegionActivityCounts(monthId);
 const hasActivities = Object.values(regionCounts).some(region => region.count > 0);

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
 <span className="text-gray-900 font-medium">{monthConfig.chinese} · {monthConfig.traditional}</span>
 </div>
 </div>
 </nav>

 {/* 主要内容 */}
 <main className="relative z-10">
 {/* 标题区域 */}
 <section className="pt-12 pb-12 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-center space-x-8 mb-8">
 <div className="text-7xl drop-shadow-lg">{monthConfig.emoji}</div>
 <div>
 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3 drop-shadow-sm">
 {monthConfig.chinese} <span className="text-blue-600">{monthConfig.traditional}</span>
 </h1>
 <p className="text-xl text-gray-700 font-medium">
 {monthConfig.meaning} · {monthConfig.season === 'summer' ? '夏夜花火的黄金时节' : 
 monthConfig.season === 'spring' ? '春花烂漫的美好时光' :
 monthConfig.season === 'autumn' ? '秋高气爽的旅游佳期' :
 '冬日暖阳的温馨季节'}
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* 活动类型概览 - 新设计的顶部横向展示 */}
 {hasActivities && (
 <section className="py-12 bg-white/40 backdrop-blur-sm border-b border-white/50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">{monthConfig.chinese}精彩活动概览</h2>
 
 <div className="flex flex-wrap justify-center gap-6 mb-8">
 {monthConfig.activities.slice(0, 3).map((activity) => (
 <div
 key={activity.id}
 className={`flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r ${activity.color} border border-white/60 shadow-lg backdrop-blur-sm`}
 >
 <div className="text-4xl">{activity.icon}</div>
 <div>
 <h3 className="text-lg font-bold text-gray-800">{activity.name}</h3>
 <p className="text-sm text-gray-600">{activity.description}</p>
 </div>
 </div>
 ))}
 </div>
 
 </div>
 </section>
 )}

 {/* 地区选择 - 新设计的主体内容 */}
 {hasActivities ? (
 <section className="py-20 bg-white/30 backdrop-blur-sm">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* 地理位置布局的CSS Grid - 精确按照地理位置排列 */}
 <style jsx>{`
 .region-grid {
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: repeat(6, 120px);
 gap: 0.8rem;
 max-width: 600px;
 margin: 0 auto;
 grid-template-areas:
 "niigata niigata fukushima fukushima"
 "nagano gunma tochigi ibaraki"
 "nagano gunma tochigi ibaraki"
 "yamanashi saitama saitama chiba"
 "yamanashi tokyo tokyo chiba"
 "shizuoka kanagawa kanagawa .";
 }
 
 .region-grid > * {
 min-height: 120px;
 padding: 1rem !important;
 }
 
 .region-grid h3 {
 font-size: 1.2rem !important;
 margin-bottom: 0.5rem !important;
 }
 
 .region-grid .text-6xl {
 font-size: 2.5rem !important;
 margin-bottom: 0.5rem !important;
 }
 
 .region-grid .text-lg {
 font-size: 0.9rem !important;
 margin-bottom: 0.5rem !important;
 }
 
 .region-grid .text-sm {
 font-size: 0.75rem !important;
 margin-bottom: 0.3rem !important;
 }
 
 @media (max-width: 768px) {
 .region-grid {
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(8, 100px);
 gap: 0.6rem;
 max-width: 400px;
 grid-template-areas:
 "niigata fukushima"
 "nagano gunma"
 "tochigi ibaraki"
 "saitama chiba"
 "yamanashi chiba"
 "tokyo chiba"
 "shizuoka kanagawa"
 ". .";
 }
 
 .region-grid > * {
 min-height: 100px;
 padding: 0.8rem !important;
 }
 }
 `}</style>
 
 <div className="region-grid">
 {Object.entries(regionConfig)
 .filter(([_, region]) => !region.hidden) // 过滤掉隐藏的地区
 .map(([regionKey, region]) => {
 const regionData = regionCounts[regionKey as keyof typeof regionCounts];
 const hasEvents = regionData.count > 0;
 
 return (
 <Link
 key={regionKey}
 href={hasEvents ? `/${getMonthPath(monthConfig.id)}/${monthConfig.activities[0]?.id}/${regionKey}` : '#'}
 className={`group relative block p-6 rounded-2xl transition-all duration-500 transform ${
 hasEvents 
 ? `bg-gradient-to-br ${region.color} hover:shadow-2xl cursor-pointer hover:scale-105 hover:-translate-y-2 shadow-xl backdrop-blur-sm hover:border-white/80`
 : 'bg-gray-100/80 border-gray-300/60 cursor-not-allowed backdrop-blur-sm shadow-md'
 } border-2`}
 style={{ gridArea: region.gridArea }}
 onClick={(e) => {
 if (!hasEvents) {
 e.preventDefault();
 }
 }}
 >
 <div className="text-center">
 {/* 地区图标和名称 */}
 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
 {region.emoji}
 </div>
 <h3 className={`text-2xl font-bold transition-colors ${
 hasEvents ? 'text-gray-800 group-hover:text-gray-900' : 'text-gray-400'
 }`}>
 {region.name}
 </h3>
 </div>
 </Link>
 );
 })}
 </div>
 </div>
 </section>
 ) : (
 /* 无活动时的占位内容 */
 <section className="py-20 bg-white/30 backdrop-blur-sm">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="text-6xl mb-8">🚧</div>
 <h2 className="text-3xl font-bold text-gray-800 mb-4">{monthConfig.chinese}活动内容正在准备中</h2>
 <p className="text-gray-600 text-lg mb-8">
 我们正在为您精心准备{monthConfig.chinese}的精彩活动内容，敬请期待！
 </p>
 </div>
 </section>
 )}

 {/* 旅游实用信息 */}
 <section className="py-16 bg-gradient-to-b from-white/40 to-blue-100/60 border-t border-white/50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{monthConfig.chinese}旅游实用信息</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
 {/* 天气信息 */}
 <div className="group bg-gradient-to-br from-rose-100 to-white border border-rose-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🌡️</div>
 <h3 className="text-xl font-bold text-gray-800">天气状况</h3>
 </div>
 <div className="text-left space-y-2">
 <p className="text-gray-700 text-sm">🌡️ 平均{monthConfig.weather.temperature} 最高{monthConfig.weather.high_temp}</p>
 {monthConfig.weather.tip.split(/[，,]/).map((tip, index) => (
 <p key={index} className="text-gray-700 text-sm">💡 {tip.trim()}</p>
 ))}
 </div>
 </div>

 {/* 交通信息 */}
 <div className="group bg-gradient-to-br from-white to-blue-100 border border-blue-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🚇</div>
 <h3 className="text-xl font-bold text-gray-800">交通指南</h3>
 </div>
 <div className="text-left space-y-2">
 <p className="text-gray-700 text-sm">💡 {monthConfig.travel_info.transport}</p>
 <p className="text-gray-700 text-sm">💡 大型活动日建议查询最新时刻表</p>
 </div>
 </div>

 {/* 旅游贴士 */}
 <div className="group bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">💡</div>
 <h3 className="text-xl font-bold text-gray-800">旅游贴士</h3>
 </div>
 <div className="text-left space-y-2">
 {monthConfig.travel_info.tip.split(/[，,]/).map((tip, index) => (
 <p key={index} className="text-gray-700 text-sm">💡 {tip.trim()}</p>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 快速导航 */}
 <section className="py-16 bg-white/50 backdrop-blur-sm border-t border-white/50">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h3 className="text-2xl font-bold text-gray-800 mb-10">快速导航</h3>
 <div className="flex flex-wrap justify-center gap-8">
 {/* 上一个月活动 */}
 <Link
 href={`/${getMonthPath(navigation.prev.id)}`}
 className="bg-white/80 border-2 border-blue-300/60 text-gray-700 font-semibold px-12 py-5 rounded-2xl hover:bg-white hover:border-blue-400/80 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-sm hover:shadow-2xl"
 >
 ← {navigation.prev.name}活动
 </Link>
 
 {/* 返回首页 */}
 <Link
 href="/"
 className="bg-gradient-to-r from-blue-300/90 to-purple-300/90 text-white font-semibold px-12 py-5 rounded-2xl hover:from-blue-400 hover:to-purple-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm hover:shadow-2xl"
 >
 返回首页
 </Link>
 
 {/* 下一个月活动 */}
 <Link
 href={`/${getMonthPath(navigation.next.id)}`}
 className="bg-gradient-to-r from-pink-300/90 to-blue-300/90 text-white font-semibold px-12 py-5 rounded-2xl hover:from-pink-400 hover:to-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm hover:shadow-2xl"
 >
 {navigation.next.name}活动 →
 </Link>
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
 {monthConfig.chinese} · {monthConfig.traditional} | 关东地区旅游指南
 </p>
 </div>
 </div>
 </footer>
 </div>
 );
} 