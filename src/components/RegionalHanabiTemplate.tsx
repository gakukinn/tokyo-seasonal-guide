'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HanabiEvent {
  id: string;
  name: string;
  englishName: string;
  date: string;
  specificDate: string;
  time: string;
  location: string;
  area: string;
  visitors: string;
  fireworks: string;
  highlights: string[];
  level: 'primary' | 'secondary';
  crowdLevel: 'high' | 'medium' | 'low';
  station: string;
  walkingTime: string;
  mapUrl: string;
  image: string;
}

interface MonthInfo {
  month: string;
  monthName: string;
  urlPath: string;
}

interface RegionInfo {
  name: string;
  englishName: string;
  icon: string;
  description: string;
  urlSlug: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  navigationLinks: {
    label: string;
    href: string;
    isPrimary?: boolean;
  }[];
}

interface RegionalHanabiTemplateProps {
  events: HanabiEvent[];
  regionInfo: RegionInfo;
  monthInfo: MonthInfo;
}

export default function RegionalHanabiTemplate({ 
  events, 
  regionInfo,
  monthInfo
}: RegionalHanabiTemplateProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const getLevelColor = (level: string) => {
    return level === 'primary' 
      ? 'from-pink-400 to-pink-600' 
      : 'from-pink-300 to-pink-500';
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-10"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-blue-300 border-b border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              首页
            </Link>
            <span className="text-gray-600">›</span>
            <Link href={`/${monthInfo.urlPath}`} className="text-gray-700 hover:text-gray-900 transition-colors">
              {monthInfo.month} · {monthInfo.monthName}
            </Link>
            <span className="text-gray-600">›</span>
            <Link href={`/${monthInfo.urlPath}/hanabi`} className="text-gray-700 hover:text-gray-900 transition-colors">
              花火大会
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-medium">{regionInfo.name}</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">{regionInfo.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {monthInfo.month} <span className="text-blue-400">{regionInfo.name}花火</span>
                </h1>
                <p className="text-xl text-gray-700">
                  {regionInfo.description}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {regionInfo.englishName}
            </p>
          </div>
        </section>

        {/* 工具栏 */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              {/* 视图模式 */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 font-medium">视图：</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded text-sm ${
                    viewMode === 'grid' ? 'bg-pink-600 text-white' : 'bg-white border border-pink-200 text-gray-700'
                  }`}
                >
                  🔳
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded text-sm ${
                    viewMode === 'list' ? 'bg-pink-600 text-white' : 'bg-white border border-pink-200 text-gray-700'
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
              {events.map((event) => {
                const crowdInfo = getCrowdLevelInfo(event.crowdLevel);
                
                if (viewMode === 'list') {
                  return (
                    <div
                      key={event.id}
                      className="bg-white border border-pink-200 rounded-xl p-6 hover:shadow-lg transition-all"
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
                            href={`/${monthInfo.urlPath}/hanabi/${regionInfo.urlSlug}/${event.id}`}
                            className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-all"
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
                    className="bg-white border border-pink-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
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
                              className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 交通信息 */}
                      <div className="mb-6 p-3 bg-pink-50 rounded-lg">
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
                          href={`/${monthInfo.urlPath}/hanabi/${regionInfo.urlSlug}/${event.id}`}
                          className="flex-1 bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold text-center py-3 rounded-lg hover:from-pink-500 hover:to-blue-500 transition-all"
                        >
                          查看详情
                        </Link>
                        <button 
                          className="px-4 py-3 bg-white border border-pink-200 text-gray-700 rounded-lg hover:bg-pink-50 transition-all"
                          title="查看地图"
                        >
                          📍
                        </button>
                        <button 
                          className="px-4 py-3 bg-white border border-pink-200 text-gray-700 rounded-lg hover:bg-pink-50 transition-all"
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

        {/* 地区花火特色 */}
        <section className="py-16 bg-white/80 backdrop-blur-sm border-t border-pink-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{regionInfo.name}花火大会特色</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {regionInfo.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-pink-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">探索更多</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {regionInfo.navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`${
                    link.isPrimary 
                      ? 'bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-500 hover:to-blue-500 transition-all'
                      : 'bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              {monthInfo.month}{regionInfo.name}花火大会 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 