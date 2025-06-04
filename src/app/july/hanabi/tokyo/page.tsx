'use client';

import Link from 'next/link';
import { useState } from 'react';

// 7月东京花火大会数据
const tokyoHanabiEvents = [
  {
    id: 'itabashi',
    name: '板橋花火大会',
    englishName: 'Itabashi Hanabi',
    date: '7月第三个周六',
    specificDate: '2024年7月20日',
    time: '19:00-20:30',
    location: '荒川河岸 板橋区側',
    area: '板橋区',
    visitors: '52万人',
    fireworks: '12,000发',
    highlights: ['音乐烟花秀', '近距离观赏', '交通便利'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR浮間舟渡駅',
    walkingTime: '徒步15分钟',
    mapUrl: 'https://maps.google.com/itabashi-hanabi',
    image: '/hanabi-itabashi.jpg'
  },
  {
    id: 'tachikawa',
    name: '立川まつり国営昭和記念公園花火大会',
    englishName: 'Tachikawa Hanabi',
    date: '7月第四个周六',
    specificDate: '2024年7月27日',
    time: '19:20-20:20',
    location: '国営昭和記念公園',
    area: '立川市',
    visitors: '35万人',
    fireworks: '5,000发',
    highlights: ['大型创意烟花', '宽敞观赏空间', '有料观赏席'],
    level: 'primary',
    crowdLevel: 'medium',
    station: 'JR立川駅',
    walkingTime: '徒步10分钟',
    mapUrl: 'https://maps.google.com/tachikawa-hanabi',
    image: '/hanabi-tachikawa.jpg'
  },
  {
    id: 'sumida',
    name: '隅田川花火大会',
    englishName: 'Sumida River Hanabi',
    date: '7月最后一个周六',
    specificDate: '2024年7月27日',
    time: '19:00-20:30',
    location: '隅田川第一・第二会場',
    area: '台東区・墨田区',
    visitors: '95万人',
    fireworks: '20,000发',
    highlights: ['东京三大花火', '江户传统', '天空树背景'],
    level: 'primary',
    crowdLevel: 'high',
    station: '浅草駅・押上駅',
    walkingTime: '徒步5-15分钟',
    mapUrl: 'https://maps.google.com/sumida-hanabi',
    image: '/hanabi-sumida.jpg'
  },
  {
    id: 'katsushika',
    name: '葛飾納涼花火大会',
    englishName: 'Katsushika Hanabi',
    date: '7月最后一个周六',
    specificDate: '2024年7月27日',
    time: '19:20-20:20',
    location: '江戸川河川敷',
    area: '葛飾区',
    visitors: '65万人',
    fireworks: '15,000发',
    highlights: ['近距离震撼', '河川敷开阔', '交通便利'],
    level: 'primary',
    crowdLevel: 'high',
    station: '京成金町駅',
    walkingTime: '徒步5分钟',
    mapUrl: 'https://maps.google.com/katsushika-hanabi',
    image: '/hanabi-katsushika.jpg'
  }
];

// 东京区域分类
const tokyoAreas = [
  { id: 'all', name: '全部东京', count: 4 },
  { id: '23ku', name: '23区内', count: 3 },
  { id: 'tama', name: '多摩地区', count: 1 }
];

export default function JulyTokyoHanabiPage() {
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // 筛选事件
  const filteredEvents = tokyoHanabiEvents.filter(event => {
    if (selectedArea === 'all') return true;
    if (selectedArea === '23ku') return ['台東区・墨田区', '板橋区', '葛飾区'].includes(event.area);
    if (selectedArea === 'tama') return event.area === '立川市';
    return true;
  });

  const getLevelColor = (level: string) => {
    return level === 'primary' 
      ? 'from-red-400 to-red-600' 
      : 'from-red-300 to-red-500';
  };

  const getCrowdLevelInfo = (level: string) => {
    switch (level) {
      case 'high': return { text: '非常拥挤', color: 'bg-red-500', icon: '🔴' };
      case 'medium': return { text: '适中', color: 'bg-yellow-500', icon: '🟡' };
      case 'low': return { text: '相对宽松', color: 'bg-green-500', icon: '🟢' };
      default: return { text: '未知', color: 'bg-gray-500', icon: '⚪' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-10"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-red-600 border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              首页
            </Link>
            <span className="text-white/60">›</span>
            <Link href="/july" className="text-white/80 hover:text-white transition-colors">
              七月 · 文月
            </Link>
            <span className="text-white/60">›</span>
            <Link href="/july/hanabi" className="text-white/80 hover:text-white transition-colors">
              花火大会
            </Link>
            <span className="text-white/60">›</span>
            <span className="text-white font-medium">东京</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🗼</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  七月 <span className="text-red-600">东京花火</span>
                </h1>
                <p className="text-xl text-gray-700">
                  都市中的夏夜烟花盛宴
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              东京是关东地区花火大会的核心，从传统的隅田川到现代的立川，每场花火都有独特的魅力
            </p>
          </div>
        </section>

        {/* 工具栏 */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* 区域筛选 */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-800 font-medium">区域筛选：</span>
                <div className="flex space-x-2">
                  {tokyoAreas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area.id)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedArea === area.id
                          ? 'bg-red-600 text-white'
                          : 'bg-white border border-red-200 text-gray-700 hover:bg-red-50'
                      }`}
                    >
                      {area.name} ({area.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* 视图模式 */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 font-medium">视图：</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded text-sm ${
                    viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white border border-red-200 text-gray-700'
                  }`}
                >
                  🔳
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded text-sm ${
                    viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white border border-red-200 text-gray-700'
                  }`}
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 花火大会列表 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' 
                : 'space-y-6'
            }`}>
              {filteredEvents.map((event, index) => {
                const crowdInfo = getCrowdLevelInfo(event.crowdLevel);
                
                if (viewMode === 'list') {
                  return (
                    <div
                      key={event.id}
                      className="bg-white border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${crowdInfo.color}`}></div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                              <p className="text-gray-600 text-sm">{event.area} · {event.specificDate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>👥 {event.visitors}</span>
                          <span>🎆 {event.fireworks}</span>
                          <Link
                            href={`/july/hanabi/tokyo/${event.id}`}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
                          >
                            查看详情
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={event.id}
                    className="bg-white border border-red-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
                  >
                    {/* 图片和标签 */}
                    <div className={`relative h-48 bg-gradient-to-br ${getLevelColor(event.level)} flex items-center justify-center`}>
                      <div className="text-6xl">🎆</div>
                      
                      {/* 标签叠加 */}
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.level === 'primary' 
                            ? 'bg-white text-black' 
                            : 'bg-black/30 text-white'
                        }`}>
                          {event.level === 'primary' ? '重点推荐' : '值得关注'}
                        </span>
                      </div>
                      
                      <div className="absolute top-4 right-4 flex items-center space-x-1">
                        <span className="text-xs">{crowdInfo.icon}</span>
                        <span className="text-xs bg-black/30 text-white px-2 py-1 rounded-full">
                          {crowdInfo.text}
                        </span>
                      </div>
                    </div>

                    {/* 内容区域 */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                        <p className="text-gray-600 text-sm">{event.englishName}</p>
                      </div>

                      {/* 基本信息 */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span>📅</span>
                            <span className="text-gray-700">{event.specificDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>⏰</span>
                            <span className="text-gray-700">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📍</span>
                            <span className="text-gray-700">{event.area}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span>👥</span>
                            <span className="text-gray-700">{event.visitors}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>🎆</span>
                            <span className="text-gray-700">{event.fireworks}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>🚇</span>
                            <span className="text-gray-700">{event.walkingTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* 亮点标签 */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 交通信息 */}
                      <div className="mb-6 p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm">
                          <span>🚇</span>
                          <span className="text-gray-600">最近车站：</span>
                          <span className="text-gray-800">{event.station}</span>
                          <span className="text-gray-600">({event.walkingTime})</span>
                        </div>
                      </div>

                      {/* 行动按钮 */}
                      <div className="flex space-x-3">
                        <Link
                          href={`/july/hanabi/tokyo/${event.id}`}
                          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-center py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all"
                        >
                          查看详情
                        </Link>
                        <button 
                          className="px-4 py-3 bg-white border border-red-200 text-gray-700 rounded-lg hover:bg-red-50 transition-all"
                          title="查看地图"
                        >
                          📍
                        </button>
                        <button 
                          className="px-4 py-3 bg-white border border-red-200 text-gray-700 rounded-lg hover:bg-red-50 transition-all"
                          title="收藏"
                        >
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 东京花火特色 */}
        <section className="py-16 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">东京花火大会特色</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">江户传统</h3>
                <p className="text-gray-600 text-sm">
                  传承江户时代花火文化，隅田川花火大会有着300多年的悠久历史
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🗼</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">都市背景</h3>
                <p className="text-gray-600 text-sm">
                  东京天空树、彩虹桥等现代建筑为花火提供了独特的都市背景
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🚇</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">交通便利</h3>
                <p className="text-gray-600 text-sm">
                  发达的地铁和JR网络，让您轻松到达各个花火大会会场
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎌</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">规模宏大</h3>
                <p className="text-gray-600 text-sm">
                  隅田川花火大会吸引95万观众，是日本规模最大的花火大会之一
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">探索更多</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/july/hanabi"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                ← 返回花火大会
              </Link>
              <Link
                href="/july/hanabi/kanagawa"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                神奈川花火 →
              </Link>
              <Link
                href="/july/hanabi/tokyo/sumida"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all"
              >
                隅田川详情 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              七月东京花火大会 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 