'use client';

import { useState } from 'react';
import Link from 'next/link';

// 月份数据
const months = [
  { id: 1, name: '1月', season: 'winter', active: false },
  { id: 2, name: '2月', season: 'winter', active: false },
  { id: 3, name: '3月', season: 'spring', active: false },
  { id: 4, name: '4月', season: 'spring', active: false },
  { id: 5, name: '5月', season: 'spring', active: false },
  { id: 6, name: '6月', season: 'summer', active: false },
  { id: 7, name: '7月', season: 'summer', active: true },
  { id: 8, name: '8月', season: 'summer', active: true },
  { id: 9, name: '9月', season: 'autumn', active: false },
  { id: 10, name: '10月', season: 'autumn', active: false },
  { id: 11, name: '11月', season: 'autumn', active: false },
  { id: 12, name: '12月', season: 'winter', active: false },
];

// 地区数据
const regions = [
  { id: 'tokyo', name: '东京', description: '都市中的璀璨花火' },
  { id: 'kanagawa', name: '神奈川', description: '湘南海岸的夏日盛典' },
  { id: 'saitama', name: '埼玉', description: '关东平原的花火之美' },
  { id: 'chiba', name: '千叶', description: '海风中的烟花绽放' },
  { id: 'koshinetsu', name: '甲越信', description: '山间的夏夜浪漫' },
  { id: 'izu', name: '伊豆', description: '温泉乡的花火大会' },
];

// 热门花火大会
const popularHanabi = [
  {
    id: 'sumida',
    name: '隅田川花火大会',
    date: '7月最后一个周六',
    location: '东京·隅田川',
    visitors: '95万人',
    image: '/hanabi-sumida.jpg'
  },
  {
    id: 'edogawa',
    name: '江戸川区花火大会',
    date: '8月第一个周六',
    location: '东京·江戸川',
    visitors: '85万人',
    image: '/hanabi-edogawa.jpg'
  },
  {
    id: 'yokohama',
    name: '横浜开港祭花火大会',
    date: '7月下旬',
    location: '神奈川·横浜港',
    visitors: '60万人',
    image: '/hanabi-yokohama.jpg'
  }
];

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(7);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-10"></div>
      
      {/* 头部导航 */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🎆</div>
              <h1 className="text-xl font-bold text-white">关东花火指南</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#timeline" className="text-white/80 hover:text-white transition-colors">时间轴</a>
              <a href="#regions" className="text-white/80 hover:text-white transition-colors">地区</a>
              <a href="#popular" className="text-white/80 hover:text-white transition-colors">热门推荐</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 英雄区域 */}
        <section className="pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              关东地区
              <span className="block text-yellow-400">花火大会指南</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              探索日本关东地区最美的夏日花火大会，感受烟花绽放的瞬间之美
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-3 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105">
                开始探索
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">
                查看地图
              </button>
            </div>
          </div>
        </section>

        {/* 时间轴导航 */}
        <section id="timeline" className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">按月份浏览</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
              {months.map((month) => (
                <button
                  key={month.id}
                  onClick={() => setSelectedMonth(month.id)}
                  className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
                    month.active
                      ? selectedMonth === month.id
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/50'
                        : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:from-yellow-400 hover:to-orange-500 hover:text-black'
                      : 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!month.active}
                >
                  <div className="text-sm font-semibold">{month.name}</div>
                  <div className="text-xs opacity-80 mt-1">
                    {month.season === 'summer' && month.active ? '花火季' : '暂未开放'}
                  </div>
                </button>
              ))}
            </div>
            
            {selectedMonth && (selectedMonth === 7 || selectedMonth === 8) && (
              <div className="mt-8 text-center">
                <Link
                  href={`/hanabi/${selectedMonth}`}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
                >
                  <span>查看{selectedMonth}月花火活动</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 地区选择 */}
        <section id="regions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">按地区浏览</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <Link
                  key={region.id}
                  href={`/region/${region.id}`}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-white/70 text-sm">{region.description}</p>
                  <div className="mt-4 flex items-center text-yellow-400 text-sm font-semibold">
                    <span>查看详情</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 热门推荐 */}
        <section id="popular" className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">热门花火大会</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularHanabi.map((hanabi) => (
                <Link
                  key={hanabi.id}
                  href={`/hanabi/detail/${hanabi.id}`}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                    <div className="text-6xl">🎆</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {hanabi.name}
                    </h3>
                    <div className="space-y-2 text-sm text-white/70">
                      <div className="flex items-center space-x-2">
                        <span>📅</span>
                        <span>{hanabi.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📍</span>
                        <span>{hanabi.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>👥</span>
                        <span>预计{hanabi.visitors}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-yellow-400 text-sm font-semibold">
                      <span>查看详情</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">🎆</div>
                <h3 className="text-lg font-bold text-white">关东花火指南</h3>
              </div>
              <p className="text-white/60 text-sm">
                为您提供最全面的关东地区花火大会信息
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速导航</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#timeline" className="text-white/60 hover:text-white transition-colors">时间轴</a></li>
                <li><a href="#regions" className="text-white/60 hover:text-white transition-colors">地区指南</a></li>
                <li><a href="#popular" className="text-white/60 hover:text-white transition-colors">热门推荐</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">热门地区</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/region/tokyo" className="text-white/60 hover:text-white transition-colors">东京</a></li>
                <li><a href="/region/kanagawa" className="text-white/60 hover:text-white transition-colors">神奈川</a></li>
                <li><a href="/region/saitama" className="text-white/60 hover:text-white transition-colors">埼玉</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">参考资料</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gotokyo.org/tc/index.html" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Go Tokyo</a></li>
                <li><a href="https://hanabi.walkerplus.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Walker Plus</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 关东花火指南. 专为花火爱好者打造.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
