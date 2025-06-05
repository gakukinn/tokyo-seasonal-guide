'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * RegionalHanabiTemplate - 第4层花火大会地区模板
 * 
 * 🚨 数据格式规范 (必须遵守):
 * 
 * 1. 标题格式 (name字段):
 *    ✅ 使用中文标题，简洁明了，不换行
 *    ✅ 示例: "越谷花火大会"、"入间基地纳凉祭"、"西武园大火祭"
 *    ❌ 避免: 日文原文、冗长副标题、换行符
 * 
 * 2. 访客数据格式 (visitors字段):
 *    ✅ 格式: "77万"、"91万"、"500人"、"未公布"
 *    ❌ 避免: "77万人"、"非公布"、英文表述
 * 
 * 3. 地区图标 (regionInfo.icon):
 *    ✅ 选择最具代表性的地区特色图标
 *    ✅ 埼玉: 🌽 (农业特色)、东京: 🗼 (都市特色)
 *    
 * 4. 色调规范:
 *    ✅ 与第3层ActivityTemplate保持一致的蓝色渐变系统
 *    ✅ 卡片循环: rose-100→white→blue-100→blue-200
 */

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

  // 初始点赞数据 (从hanabi.walkerplus.com获取)
  const initialLikes: Record<string, number> = {
    // 东京地区
    'tokyo-racecourse': 152,
    'katsushika': 98,
    'sumida': 124,
    'hachioji': 30,
    'tachikawa': 34,
    'mikurajima': 1,
    // 埼玉地区 (数据来源: Walker Plus 行ってみたい)
    'koshigaya': 82,
    'saitama-owada': 33,
    'iruma-base': 18,
    'ogawa-tanabata': 4,
    'seibu-en': 29,
    'metsza-nordic': 10
  };
  
  // 从localStorage读取保存的点赞数据
  const [likes, setLikes] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hanabi-likes');
      if (saved) {
        const savedLikes = JSON.parse(saved);
        // 合并初始数据和保存的数据，保存的数据优先
        return { ...initialLikes, ...savedLikes };
      }
    }
    return initialLikes;
  });

  // 简约三色循环（与第三层ActivityTemplate一致）
  const getCardColor = (index: number) => {
    const colorOptions = [
      'from-rose-100 to-white',
      'from-white to-blue-100', 
      'from-blue-100 to-blue-200'
    ];
    return colorOptions[index % colorOptions.length];
  };

  const getCrowdLevelInfo = (level: string) => {
    switch (level) {
      case 'high': return { text: '非常拥挤', color: 'bg-red-200', icon: '🔴' };
      case 'medium': return { text: '适中', color: 'bg-yellow-200', icon: '🟡' };
      case 'low': return { text: '相对宽松', color: 'bg-green-200', icon: '🟢' };
      default: return { text: '未知', color: 'bg-gray-200', icon: '⚪' };
    }
  };

  // 点赞处理函数
  const handleLike = (eventId: string) => {
    const newLikes = {
      ...likes,
      [eventId]: (likes[eventId] || 0) + 1
    };
    setLikes(newLikes);
    
    // 保存到localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('hanabi-likes', JSON.stringify(newLikes));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-5"></div>
      
      {/* 面包屑导航 - 第1段：蓝色 */}
      <nav className="relative z-10 bg-blue-200 border-b border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* 桌面端完整面包屑 */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
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
          
          {/* 移动端简化导航 */}
          <div className="md:hidden flex items-center justify-between">
            <Link 
              href={`/${monthInfo.urlPath}/hanabi`}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span className="text-sm">返回花火大会</span>
            </Link>
            <span className="text-gray-900 font-medium text-sm">{regionInfo.name}花火</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 - 第2段：蓝色 */}
        <section className="pt-12 pb-16 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  <span className="text-4xl md:text-6xl mr-2">{regionInfo.icon}</span>
                  <span className="block md:inline">{monthInfo.month} <span className="text-blue-400">{regionInfo.name}花火</span></span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {regionInfo.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 花火大会列表 - 主要内容区：蓝色 */}
        <section className="py-12 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 简洁视图切换 */}
            <div className="flex justify-end mb-6">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg text-sm transition-all ${
                    viewMode === 'grid' ? 'bg-blue-200/60 text-gray-700' : 'hover:bg-white/50 text-gray-500'
                  }`}
                  title="网格视图"
                >
                  🔳
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg text-sm transition-all ${
                    viewMode === 'list' ? 'bg-blue-200/60 text-gray-700' : 'hover:bg-white/50 text-gray-500'
                  }`}
                  title="列表视图"
                >
                  📋
                </button>
              </div>
            </div>
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr' 
                : 'space-y-4 md:space-y-5'
            }`}>
              {events.map((event, index) => {
                const crowdInfo = getCrowdLevelInfo(event.crowdLevel);
                
                if (viewMode === 'list') {
                  return (
                    <div
                      key={event.id}
                      className="bg-white border border-blue-100 rounded-xl p-4 md:p-6 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${crowdInfo.color}`}></div>
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-xl font-bold text-gray-800">{event.name}</h3>
                              <p className="text-gray-600 text-sm">{event.area} · {event.specificDate}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>⏰ {event.time}</span>
                              <span>🚇 {event.station} ({event.walkingTime})</span>
                              <span className="bg-pink-50 text-rose-500 px-2 py-1 rounded-full text-xs">{event.highlights[0]}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>👥 {event.visitors}</span>
                          <span>🎆 {event.fireworks}</span>
                          <button 
                            className="px-3 py-2 md:px-3 md:py-2 min-w-[44px] min-h-[44px] bg-red-50 border border-red-200 text-gray-600 rounded-lg hover:bg-red-100 active:scale-95 transition-all flex items-center justify-center space-x-1"
                            title={`点赞 ${likes[event.id] || 0} 次 (点击增加)`}
                            onClick={() => handleLike(event.id)}
                          >
                            <span className="text-red-500 text-lg">❤️</span>
                            <span className="text-sm font-bold text-red-600">{likes[event.id] || 0}</span>
                          </button>
                          <Link
                            href={`/${monthInfo.urlPath}/hanabi/${regionInfo.urlSlug}/${event.id}`}
                            className="bg-blue-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-400 active:scale-95 transition-all"
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
                                          className="bg-white border border-blue-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all duration-300 group cursor-pointer"
                  >
                    {/* 图片和标签 */}
                                            <div className={`relative h-48 bg-gradient-to-br ${getCardColor(index)} flex items-center justify-center`}>
                      <div className="text-6xl">🎆</div>
                      
                      {/* 标签叠加 */}
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.level === 'primary' 
                            ? 'bg-white/90 text-gray-700' 
                            : 'bg-white/70 text-gray-600'
                        }`}>
                          {event.level === 'primary' ? '重点推荐' : '值得关注'}
                        </span>
                      </div>
                      
                      <div className="absolute top-4 right-4 flex items-center space-x-1">
                        <span className="text-xs">{crowdInfo.icon}</span>
                        <span className="text-xs bg-white/80 text-gray-600 px-2 py-1 rounded-full">
                          {crowdInfo.text}
                        </span>
                      </div>
                    </div>

                    {/* 内容区域 */}
                    <div className="p-4 md:p-6">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-lg font-bold text-gray-800 mb-1 leading-tight">{event.name}</h3>
                      </div>

                      {/* 基本信息 */}
                      <div className="space-y-2 mb-4">
                        {/* 第一行：日期和时间 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 min-w-0 flex-1">
                            <span className="text-sm flex-shrink-0">📅</span>
                            <span className="text-xs text-gray-700 font-semibold truncate">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 min-w-0">
                            <span className="text-sm flex-shrink-0">⏰</span>
                            <span className="text-xs text-gray-600 font-medium">{event.time}</span>
                          </div>
                        </div>
                        
                        {/* 第二行：地点 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm flex-shrink-0">📍</span>
                          <span className="text-xs text-gray-600">{event.area}</span>
                        </div>
                        
                        {/* 第三行：人数和花火数 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 min-w-0">
                            <span className="text-sm flex-shrink-0">👥</span>
                            <span className="text-xs text-blue-600 font-semibold">{event.visitors}</span>
                          </div>
                          <div className="flex items-center space-x-2 min-w-0">
                            <span className="text-sm flex-shrink-0">🎆</span>
                            <span className="text-xs text-rose-600 font-semibold">{event.fireworks}</span>
                          </div>
                        </div>
                      </div>

                      {/* 亮点标签 */}
                      <div className="mb-5">
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.slice(0, 2).map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-pink-50 text-rose-500 px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 交通信息 */}
                      <div className="mb-5 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center space-x-2 text-xs min-w-0">
                          <span className="text-sm flex-shrink-0">🚇</span>
                          <span className="text-gray-500 flex-shrink-0">最近车站：</span>
                          <span className="text-gray-700 font-medium truncate">{event.station}</span>
                          <span className="text-gray-500 flex-shrink-0 hidden md:inline">({event.walkingTime})</span>
                        </div>
                      </div>

                      {/* 行动按钮 */}
                      <div className="flex space-x-2">
                        <button 
                          className="px-3 py-3 md:px-3 md:py-3 min-w-[44px] min-h-[44px] bg-red-50 border border-red-200 text-gray-600 rounded-lg hover:bg-red-100 active:scale-95 transition-all flex items-center justify-center space-x-1"
                          title={`点赞 ${likes[event.id] || 0} 次 (点击增加)`}
                          onClick={() => handleLike(event.id)}
                        >
                          <span className="text-red-500 text-lg">❤️</span>
                          <span className="text-sm font-bold text-red-600">{likes[event.id] || 0}</span>
                        </button>
                        <Link
                          href={`/${monthInfo.urlPath}/hanabi/${regionInfo.urlSlug}/${event.id}`}
                          className="flex-1 bg-gradient-to-r from-pink-200 to-blue-200 text-gray-700 font-medium text-center py-3 rounded-lg hover:from-pink-300 hover:to-blue-300 active:scale-95 transition-all"
                        >
                          查看详情
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 地区花火特色 - 装饰性区域：蓝色 */}
        <section className="py-12 bg-blue-100 border-t border-blue-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">{regionInfo.name}花火大会特色</h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {regionInfo.features.map((feature, index) => (
                                                                     <div key={index} className="flex-1 min-w-0 max-w-xs text-center bg-white rounded-lg p-4 md:p-6 shadow-sm">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 快速导航 - 主要内容区：蓝色 */}
        <section className="py-10 bg-blue-50 border-t border-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">快速导航</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {regionInfo.navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`${
                    link.isPrimary 
                      ? 'bg-gradient-to-r from-pink-200 to-blue-200 text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:from-pink-300 hover:to-blue-300 active:scale-95 transition-all'
                      : 'bg-white border border-blue-100 text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:bg-blue-50 hover:border-blue-200 active:scale-95 transition-all'
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