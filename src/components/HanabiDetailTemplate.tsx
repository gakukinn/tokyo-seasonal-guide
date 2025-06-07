'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HanabiData } from '../types/hanabi';
import MediaDisplay from './MediaDisplay';
import HanabiHeader from './shared/HanabiHeader';
import HanabiBreadcrumb from './shared/HanabiBreadcrumb';
import { getThemeColors, getRegionConfig, validateHanabiData } from '../config/hanabi-detail-template';

interface HanabiDetailTemplateProps {
  data: HanabiData;
  regionKey: string;
}

export default function HanabiDetailTemplate({ data, regionKey }: HanabiDetailTemplateProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // 验证数据格式
  const validation = validateHanabiData(data);
  if (!validation.isValid) {
    console.warn('数据格式警告:', validation.errors);
  }
  
  const themeColors = getThemeColors(data.themeColor);
  const regionConfig = getRegionConfig(regionKey);

  const handleMapClick = () => {
    setSelectedTab('venues');
    setTimeout(() => {
      const mapElement = document.getElementById('map-section');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // 格式化时间显示 - 只显示最早的开始时间
  const formatTimeDisplay = (timeString: string) => {
    const timeMatches = timeString.match(/\d{1,2}:\d{2}/g);
    if (timeMatches && timeMatches.length > 0) {
      return <span className="text-gray-900 font-bold">{timeMatches[0]}开始</span>;
    }
    return <span className="text-gray-900 font-bold">{timeString}</span>;
  };

  // 状态翻译函数
  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'scheduled': '预定举行',
      'confirmed': '确认举行', 
      'cancelled': '已取消',
      'postponed': '延期举办',
      'completed': '已结束'
    };
    return statusMap[status] || status;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
      {/* 背景装饰 - 渐变色 */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/30 via-white/20 to-blue-100/40"></div>
      
      {/* 面包屑导航 */}
      <HanabiBreadcrumb regionKey={regionKey} hanabiName={data.name} />

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 英雄区域 */}
        <section className="pt-8 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
              {/* 左侧：基本信息 */}
              <div className="lg:col-span-2">
                {/* 标题区域背景装饰 */}
                <div className="bg-gradient-to-r from-white/80 via-rose-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/60 shadow-lg">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    {data.name}
                  </h1>
                  {data.japaneseName && (
                    <p className="text-gray-700 text-base font-semibold mb-2 opacity-90">{data.japaneseName}</p>
                  )}
                  {data.englishName && (
                    <p className="text-gray-600 text-base font-medium italic">{data.englishName}</p>
                  )}
                </div>

                {/* 花火展示图片区域 */}
                <MediaDisplay 
                  media={data.media} 
                  themeColors={themeColors} 
                  eventName={data.name} 
                />
              </div>

              {/* 右侧：关键信息卡片 */}
              <div className="flex flex-col lg:h-full space-y-3">
                <div className="bg-gradient-to-br from-rose-100 to-white backdrop-blur-sm rounded-xl p-4 border border-rose-200/60 shadow-lg flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-gray-900 font-bold text-xl whitespace-nowrap">活动信息</h3>
                    <div className="flex flex-col gap-2 items-end max-w-[200px]">
                      <span className={`${themeColors.bg200} ${themeColors.text800} text-xs font-bold px-3 py-1.5 rounded-full border ${themeColors.border200} shadow-sm whitespace-nowrap`}>
                        {getStatusText(data.status)}
                      </span>
                      <span className="bg-pink-200 text-pink-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap text-center leading-tight">
                        {data.ticketPrice}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold flex items-center">📅 日期</span>
                      <span className="text-gray-900 font-bold text-right">{data.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold flex items-center">🕐 时间</span>
                      <div className="text-right">{formatTimeDisplay(data.time)}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold flex items-center">🎆 发数</span>
                      <span className={`${themeColors.text600} font-bold text-right`}>{data.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold flex items-center">👥 预计人数</span>
                      <span className="text-gray-900 font-bold text-right">{data.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold flex items-center">⏱️ 持续时间</span>
                      <span className="text-gray-900 font-bold text-right">{data.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-blue-100 backdrop-blur-sm rounded-xl p-4 border border-blue-200/60 shadow-lg flex-1">
                  <h3 className="text-gray-900 font-bold text-xl mb-3">联系信息</h3>
                                      <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-800 font-semibold block flex items-center">🏢 主办方</span>
                        <span className="text-gray-900 font-bold mt-1">{data.contact.organizer}</span>
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold block flex items-center">📞 电话</span>
                        <span className="text-gray-900 font-bold mt-1">{data.contact.phone}</span>
                      </div>
                      <div>
                        <a 
                          href={data.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${themeColors.text600} hover:${themeColors.text800} transition-colors font-bold flex items-center`}
                        >
                          🌐 官方网站 →
                        </a>
                      </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-sm rounded-xl p-4 border border-blue-300/60 shadow-lg flex-1">
                  <h3 className="text-gray-900 font-bold text-xl mb-3">地图&交通</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                                              <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-semibold flex items-center">📍 地图</span>
                          <button 
                            onClick={handleMapClick}
                            className={`${themeColors.text600} hover:${themeColors.text800} transition-colors font-bold flex items-center space-x-1`}
                          >
                            <span>查看详细地图 →</span>
                          </button>
                        </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold flex items-center block">🚗 停车场</span>
                      <div className="text-red-700 font-bold mt-1 whitespace-pre-line">{data.mapInfo.parking}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-sm rounded-xl p-4 border border-purple-200/60 shadow-lg flex-1">
                  <h3 className="text-gray-900 font-bold text-xl mb-3">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                                          {data.weatherInfo.rainPolicy && (
                        <div>
                          <span className="text-gray-800 font-semibold block flex items-center">🌦️ 举办条件</span>
                          <span className="text-gray-900 font-bold mt-1">{data.weatherInfo.rainPolicy}</span>
                        </div>
                      )}
                      {data.weatherInfo.note && (
                        <div>
                          <span className="text-gray-800 font-semibold block flex items-center">💡 建议</span>
                          <span className="text-orange-700 font-bold mt-1">{data.weatherInfo.note}</span>
                        </div>
                      )}
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
        <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-white/50">
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
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-xl p-6 border border-gray-200/60 shadow-sm backdrop-blur-sm">
              {selectedTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">活动概览</h3>
                    {data.history?.significance && (
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {data.name}是{data.history.significance}
                        {data.history?.established && `，自${data.history.established}年开始举办`}。
                        {data.expectedVisitors && `每年吸引约${data.expectedVisitors}观众前来观赏`}。
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-rose-50 via-white to-blue-50 rounded-lg p-4 border border-rose-200/60">
                      <h4 className="text-gray-800 font-bold mb-3">历史意义</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {data.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-rose-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {data.venues[0]?.features && data.venues[0].features.length > 0 && (
                      <div className="bg-gradient-to-br from-rose-50 via-white to-blue-50 rounded-lg p-4 border border-rose-200/60">
                        <h4 className="text-gray-800 font-bold mb-3">活动特色</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          {data.venues[0].features.map((feature, index) => (
                            <p key={index}>• {feature}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  {data.venues.map((venue, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-lg p-6 border border-purple-200/60">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{venue.name}</h4>
                      <p className="text-gray-700 mb-3">{venue.location}</p>
                      <p className="text-gray-600 text-sm mb-4">开始时间：{venue.startTime}</p>
                    </div>
                  ))}

                  {/* 地图 */}
                  {data.mapEmbedUrl && (
                    <div className="bg-gradient-to-br from-rose-50 via-white to-blue-50 rounded-lg p-6 border border-gray-200/60">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">会场地图</h4>
                      <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                          src={data.mapEmbedUrl}
                          width="100%"
                          height="100%"
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
                      <div key={spotIndex} className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-lg p-4 border border-blue-200/60 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-3">
                          <h4 className="font-bold text-gray-800">{spot.name}</h4>
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
                    {data.tips.map((tipCategory, tipIndex) => {
                      // 为不同类别的建议卡片分配不同的渐变色
                      const gradientStyles = [
                        'bg-gradient-to-br from-rose-100 to-white border-rose-200/60',
                        'bg-gradient-to-br from-white to-blue-100 border-blue-200/60', 
                        'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300/60',
                        'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200/60',
                        'bg-gradient-to-br from-green-100 to-emerald-100 border-green-200/60',
                        'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200/60'
                      ];
                      
                      const cardStyle = gradientStyles[tipIndex % gradientStyles.length];
                      
                      return (
                        <div key={tipIndex} className={`${cardStyle} backdrop-blur-sm rounded-lg p-4 border shadow-sm hover:shadow-md transition-shadow`}>
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
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 关联推荐 - 轮回设计 */}
        <section className="py-12 bg-white/50 backdrop-blur-sm border-t border-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔄 关联推荐</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                继续探索更多精彩花火大会，发现你的下一个目标！
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 地区维度推荐 */}
              <div className="bg-gradient-to-br from-rose-50/90 via-white/90 to-blue-50/90 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{regionConfig.name}其他花火</h3>
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
                    href={`/july/hanabi/${regionKey}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-semibold"
                  >
                    <span>查看{regionConfig.name}所有花火大会</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* 时间维度推荐 */}
              <div className="bg-gradient-to-br from-rose-50/90 via-white/90 to-blue-50/90 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{data.month}月其他花火</h3>
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
                    href={`/${data.month === 7 ? 'july' : data.month === 8 ? 'august' : data.month === 9 ? 'september' : data.month === 10 ? 'october' : 'july'}/hanabi`}
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors font-semibold"
                  >
                    <span>查看{data.month}月所有花火大会</span>
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