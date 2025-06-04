'use client';

import Link from 'next/link';
import { useState } from 'react';

// 地区数据
const regions = [
  { 
    id: 'tokyo', 
    name: '东京都', 
    description: '都市中的璀璨花火，历史悠久的花火大会',
    count: 8,
    featured: ['隅田川花火大会', '江戸川区花火大会']
  },
  { 
    id: 'kanagawa', 
    name: '神奈川县', 
    description: '湘南海岸与港口城市的夏日盛典',
    count: 6,
    featured: ['横浜开港祭花火大会', '湘南海岸花火大会']
  },
  { 
    id: 'saitama', 
    name: '埼玉县', 
    description: '关东平原的花火之美，传统与现代并存',
    count: 5,
    featured: ['大宫夏祭花火大会', '川越花火大会']
  },
  { 
    id: 'chiba', 
    name: '千叶县', 
    description: '海风中的烟花绽放，东京湾畔的夏夜',
    count: 4,
    featured: ['市川市民花火大会', '船橋港花火大会']
  },
  { 
    id: 'koshinetsu', 
    name: '甲越信', 
    description: '山间的夏夜浪漫，自然与花火的完美融合',
    count: 3,
    featured: ['甲府夏祭花火大会', '信州上田花火大会']
  },
  { 
    id: 'izu', 
    name: '伊豆地区', 
    description: '温泉乡的花火大会，海与山的绝景',
    count: 2,
    featured: ['熱海海上花火大会', '下田港花火大会']
  },
];

export default function JulyPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-10"></div>
      
      {/* 头部导航 */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="text-3xl">🎆</div>
                <h1 className="text-xl font-bold text-white">关东花火指南</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">首页</Link>
              <a href="#regions" className="text-white/80 hover:text-white transition-colors">地区</a>
              <a href="#calendar" className="text-white/80 hover:text-white transition-colors">日程</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 面包屑导航 */}
      <div className="relative z-10 bg-black/10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">首页</Link>
            <span>›</span>
            <span className="text-white font-medium">7月花火大会</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 月份介绍区域 */}
        <section className="pt-12 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              7月
              <span className="block text-yellow-400 text-3xl md:text-4xl mt-2">
                盛夏花火月
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
              梅雨季结束，夏日花火大会正式拉开序幕
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">28</div>
                <div className="text-white/80 text-sm">花火大会活动</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">{regions.reduce((sum, region) => sum + region.count, 0)}</div>
                <div className="text-white/80 text-sm">涵盖地区活动</div>
              </div>
            </div>
          </div>
        </section>

        {/* 重点日期提醒 */}
        <section className="py-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-6">本月重点活动</h2>
            <div className="space-y-3 mb-8">
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4 text-center">
                <div className="text-yellow-400 font-semibold">7月最后一个周六 - 隅田川花火大会</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4 text-center">
                <div className="text-yellow-400 font-semibold">7月下旬 - 横浜开港祭</div>
              </div>
            </div>
            
            {/* 7月花火专题按钮 */}
            <div className="text-center">
              <Link
                href="/hanabi/month/july"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:from-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                <span className="text-2xl">🎆</span>
                <span>查看7月所有花火大会</span>
                <span className="text-xl">→</span>
              </Link>
              <p className="text-white/70 text-sm mt-3">
                专题展示：按时间顺序浏览7月所有花火大会
              </p>
            </div>
          </div>
        </section>

        {/* 地区选择 */}
        <section id="regions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">按地区浏览花火大会</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <Link
                  key={region.id}
                  href={`/region/${region.id}?month=7`}
                  className={`group backdrop-blur-sm border rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 ${
                    selectedRegion === region.id 
                      ? 'bg-white/20 border-yellow-400/50 shadow-lg shadow-yellow-400/20' 
                      : 'bg-white/10 border-white/20'
                  }`}
                  onMouseEnter={() => setSelectedRegion(region.id)}
                  onMouseLeave={() => setSelectedRegion(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {region.name}
                    </h3>
                    <div className="bg-yellow-400/20 text-yellow-400 text-sm font-semibold px-2 py-1 rounded-full">
                      {region.count}个活动
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {region.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-white/60 text-xs font-medium">热门活动：</div>
                    {region.featured.map((event, index) => (
                      <div key={index} className="text-white/80 text-sm flex items-center space-x-2">
                        <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-yellow-400 text-sm font-semibold">
                    <span>查看{region.name}花火大会</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 快速跳转 */}
        <section className="py-12 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">快速跳转</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hanabi/august"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                查看8月花火大会
              </Link>
              <Link
                href="/"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all"
              >
                返回首页
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-2xl">🎆</div>
              <h3 className="text-lg font-bold text-white">关东花火指南</h3>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 关东花火指南. 专为花火爱好者打造.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 