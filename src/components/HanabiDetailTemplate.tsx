'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HanabiData } from '../types/hanabi';
import MediaDisplay from './MediaDisplay';

interface HanabiDetailTemplateProps {
  data: HanabiData;
}

export default function HanabiDetailTemplate({ data }: HanabiDetailTemplateProps) {
  const [selectedTab, setSelectedTab] = useState('overview');

  const getThemeColors = (color: string) => {
    const colorMap = {
      blue: {
        bg50: 'bg-blue-50',
        bg100: 'bg-blue-100', 
        bg200: 'bg-blue-200',
        bg500: 'bg-blue-500',
        bg600: 'bg-blue-600',
        text600: 'text-blue-600',
        text700: 'text-blue-700',
        text800: 'text-blue-800',
        border200: 'border-blue-200',
        gradientFrom: 'from-blue-100',
        gradientTo: 'to-blue-200'
      },
      purple: {
        bg50: 'bg-purple-50',
        bg100: 'bg-purple-100',
        bg200: 'bg-purple-200', 
        bg500: 'bg-purple-500',
        bg600: 'bg-purple-600',
        text600: 'text-purple-600',
        text700: 'text-purple-700',
        text800: 'text-purple-800',
        border200: 'border-purple-200',
        gradientFrom: 'from-purple-100',
        gradientTo: 'to-purple-200'
      },
      orange: {
        bg50: 'bg-orange-50',
        bg100: 'bg-orange-100',
        bg200: 'bg-orange-200',
        bg500: 'bg-orange-500', 
        bg600: 'bg-orange-600',
        text600: 'text-orange-600',
        text700: 'text-orange-700',
        text800: 'text-orange-800',
        border200: 'border-orange-200',
        gradientFrom: 'from-orange-100',
        gradientTo: 'to-orange-200'
      },
      green: {
        bg50: 'bg-green-50',
        bg100: 'bg-green-100',
        bg200: 'bg-green-200',
        bg500: 'bg-green-500',
        bg600: 'bg-green-600', 
        text600: 'text-green-600',
        text700: 'text-green-700',
        text800: 'text-green-800',
        border200: 'border-green-200',
        gradientFrom: 'from-green-100',
        gradientTo: 'to-green-200'
      },
      red: {
        bg50: 'bg-red-50',
        bg100: 'bg-red-100',
        bg200: 'bg-red-200',
        bg500: 'bg-red-500',
        bg600: 'bg-red-600',
        text600: 'text-red-600', 
        text700: 'text-red-700',
        text800: 'text-red-800',
        border200: 'border-red-200',
        gradientFrom: 'from-red-100',
        gradientTo: 'to-red-200'
      },
      yellow: {
        bg50: 'bg-yellow-50',
        bg100: 'bg-yellow-100',
        bg200: 'bg-yellow-200',
        bg500: 'bg-yellow-500',
        bg600: 'bg-yellow-600',
        text600: 'text-yellow-600',
        text700: 'text-yellow-700', 
        text800: 'text-yellow-800',
        border200: 'border-yellow-200',
        gradientFrom: 'from-yellow-100',
        gradientTo: 'to-yellow-200'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const themeColors = getThemeColors(data.themeColor);

  const handleMapClick = () => {
    setSelectedTab('venues');
    setTimeout(() => {
      const mapElement = document.getElementById('map-section');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 背景装饰 - 浅色 */}
      <div className="absolute inset-0 bg-gray-100/50"></div>
      
      {/* 头部导航 - 浅色商业风格 */}
      <header className="relative z-10 bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="text-3xl">🎆</div>
                <h1 className="text-xl font-bold text-gray-900">关东地区旅游指南</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">首页</Link>
              <Link href="/july" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">七月花火</Link>
              <Link href="/july/hanabi/tokyo" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">东京地区</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 标签显示区域 */}
      <div className="relative z-10 bg-white border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {/* 时间标签 */}
            <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
              📅 {data.tags.timeTag}
            </span>
            {/* 地区标签 */}
            <span className="bg-purple-200 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
              📍 {data.tags.regionTag}
            </span>
            {/* 活动类型标签 */}
            <span className="bg-orange-200 text-orange-900 text-xs font-bold px-3 py-1 rounded-full">
              🎆 {data.tags.typeTag}
            </span>
            {/* 层级标签 */}
            <span className="bg-blue-200 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
              📄 {data.tags.layerTag}
            </span>
          </div>
        </div>
      </div>

      {/* 面包屑导航 - 浅色 */}
      <div className="relative z-10 bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-700">
            <Link href="/" className="hover:text-gray-900 transition-colors font-medium">首页</Link>
            <span className="text-gray-600">›</span>
            <Link href="/july" className="hover:text-gray-900 transition-colors font-medium">七月 · 文月</Link>
            <span className="text-gray-600">›</span>
            <Link href="/july/hanabi" className="hover:text-gray-900 transition-colors font-medium">花火大会</Link>
            <span className="text-gray-600">›</span>
            <Link href="/july/hanabi/tokyo" className="hover:text-gray-900 transition-colors font-medium">东京</Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-bold">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 英雄区域 */}
        <section className="pt-8 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 返回按钮 */}
            <div className="mb-6">
              <Link 
                href="/july/hanabi/tokyo" 
                className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                返回东京花火大会列表
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧：基本信息 */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`${themeColors.bg200} ${themeColors.text800} text-xs font-bold px-3 py-1 rounded-full border ${themeColors.border200}`}>
                      {data.status}
                    </span>
                    <span className="bg-pink-200 text-pink-900 text-xs font-bold px-3 py-1 rounded-full">
                      {data.ticketPrice}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {data.name}
                  </h1>
                  <p className="text-gray-700 text-lg font-medium">{data.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <MediaDisplay 
                  media={data.media} 
                  themeColors={themeColors} 
                  eventName={data.name} 
                />
              </div>

              {/* 右侧：关键信息卡片 */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">活动信息</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">日期</span>
                      <span className="text-gray-900 font-bold">{data.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">时间</span>
                      <span className="text-gray-900 font-bold">{data.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">发数</span>
                      <span className={`${themeColors.text600} font-bold`}>{data.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">预计人数</span>
                      <span className="text-gray-900 font-bold">{data.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">持续时间</span>
                      <span className="text-gray-900 font-bold">{data.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-700 font-medium block">主办方</span>
                      <span className="text-gray-900 font-medium">{data.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium block">电话</span>
                      <span className="text-gray-900 font-medium">{data.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={data.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${themeColors.text600} hover:${themeColors.text800} transition-colors font-bold`}
                      >
                        官方网站 →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">地图&交通</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-700 font-medium block">地图</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900">📍</span>
                        <button 
                          onClick={handleMapClick}
                          className={`${themeColors.text600} hover:${themeColors.text800} transition-colors font-bold`}
                        >
                          查看详细地图 →
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium block">停车场</span>
                      <span className="text-red-700 font-bold">{data.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-700 font-medium block">举办条件</span>
                      <span className="text-gray-900 font-medium">{data.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium block">建议</span>
                      <span className="text-orange-700 font-bold">{data.weatherInfo.note}</span>
                    </div>
                    <div className={`${themeColors.bg50} border ${themeColors.border200} rounded p-2`}>
                      <span className={`${themeColors.text700} text-xs font-medium`}>💡 {data.weatherInfo.recommendation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 标签导航 */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {[
                { id: 'overview', name: '概览', icon: '📋' },
                { id: 'venues', name: '会场信息', icon: '📍' },
                { id: 'access', name: '交通指南', icon: '🚇' },
                { id: 'viewing', name: '观赏攻略', icon: '👀' },
                { id: 'tips', name: '实用建议', icon: '💡' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedTab === tab.id
                      ? `${themeColors.bg200} ${themeColors.text800} border ${themeColors.border200}`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* 内容区域 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              {selectedTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">活动概览</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {data.name}是{data.history.significance}，自{data.history.established}年开始举办。
                      每年吸引约{data.expectedVisitors}观众前来观赏。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`${themeColors.bg50} rounded-lg p-4 border ${themeColors.border200}`}>
                      <h4 className="text-gray-800 font-bold mb-3">历史意义</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {data.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className={`${themeColors.text600} mt-1`}>•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                      <h4 className="text-gray-800 font-bold mb-3">活动特色</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        {data.venues[0]?.features.map((feature, index) => (
                          <p key={index}>• {feature}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  {data.venues.map((venue, index) => (
                    <div key={index} className={`${themeColors.bg50} rounded-lg p-6 border ${themeColors.border200}`}>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{venue.name}</h4>
                      <p className="text-gray-700 mb-3">{venue.location}</p>
                      <p className="text-gray-600 text-sm mb-4">开始时间：{venue.startTime}</p>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">特色亮点</h5>
                        <ul className="space-y-1">
                          {venue.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-gray-700">
                              <span className={`${themeColors.text600} mt-1`}>•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  {/* 地图 */}
                  {data.mapEmbedUrl && (
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">会场地图</h4>
                      <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                          src={data.mapEmbedUrl}
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${data.name}会场位置`}
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedTab === 'access' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">交通指南</h3>
                  {data.access.map((accessInfo, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">{accessInfo.venue}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {accessInfo.stations.map((station, stationIndex) => (
                          <div key={stationIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h5 className="font-bold text-gray-800 mb-2">{station.name}</h5>
                            <div className="space-y-1 text-sm text-gray-700">
                              {station.lines.map((line, lineIndex) => (
                                <p key={lineIndex}>• {line}</p>
                              ))}
                              <p className={`${themeColors.text600} font-semibold mt-2`}>📍 {station.walkTime}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.viewingSpots.map((spot, spotIndex) => (
                      <div key={spotIndex} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-gray-800">{spot.name}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-${i < spot.rating ? 'yellow' : 'gray'}-400`}>⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">人流: {spot.crowdLevel}</p>
                        <p className="text-sm text-gray-700 mb-3">{spot.tips}</p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-pink-600 font-semibold text-xs">优点：</span>
                            <ul className="text-xs text-gray-700">
                              {spot.pros.map((pro, proIndex) => (
                                <li key={proIndex}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-red-600 font-semibold text-xs">缺点：</span>
                            <ul className="text-xs text-gray-700">
                              {spot.cons.map((con, conIndex) => (
                                <li key={conIndex}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'tips' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">实用建议</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.tips.map((tipCategory, tipIndex) => (
                      <div key={tipIndex} className={`${themeColors.bg50} rounded-lg p-4 border ${themeColors.border200}`}>
                        <h4 className="font-bold text-gray-800 mb-3">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className={`${themeColors.text600} mt-1`}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 关联推荐 - 轮回设计 */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔄 关联推荐</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                继续探索更多精彩花火大会，发现你的下一个目标！
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 地区维度推荐 */}
              <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">东京其他花火</h3>
                    <p className="text-gray-600 text-sm">同地区，不同精彩</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {data.related.regionRecommendations.map((item) => (
                    <Link 
                      key={item.id} 
                      href={item.link}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>📅 {item.date}</span>
                            <span>📍 {item.location}</span>
                            <span>👥 {item.visitors}</span>
                          </div>
                        </div>
                        <div className="ml-4 text-purple-600 group-hover:text-purple-700 transition-colors">
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link 
                    href="/july/hanabi/tokyo"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-semibold"
                  >
                    <span>查看东京所有花火大会</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* 时间维度推荐 */}
              <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">7月其他花火</h3>
                    <p className="text-gray-600 text-sm">同时期，多选择</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {data.related.timeRecommendations.map((item) => (
                    <Link 
                      key={item.id} 
                      href={item.link}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-pink-700 transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>📅 {item.date}</span>
                            <span>📍 {item.location}</span>
                            <span>👥 {item.visitors}</span>
                          </div>
                        </div>
                        <div className="ml-4 text-pink-600 group-hover:text-pink-700 transition-colors">
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link 
                    href="/july/hanabi"
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors font-semibold"
                  >
                    <span>查看7月所有花火大会</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  );
} 