'use client';

import Link from 'next/link';
import { useState } from 'react';

// 江户川花火大会数据 - 基于官方信息
const edogawaData = {
  id: 'edogawa',
  name: '第50回 江戸川区花火大会',
  englishName: 'Edogawa Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:15～20:20（预定）',
  duration: '65分钟',
  fireworksCount: '多层构造花火',
  expectedVisitors: '有料席约3万席',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '有料席3万席',
  status: '50周年纪念大会',
  
  // 会场信息
  venues: [
    {
      name: '主会场',
      location: '江戸川河川敷（都立篠崎公園先）',
      startTime: '19:15',
      features: ['7主题音乐演出', '吉尼斯世界记录挑战', '50周年纪念企划']
    }
  ],

  // 交通指南
  access: [
    {
      venue: '江戸川河川敷会场',
      stations: [
        { name: '江戸川站', lines: ['京成本线'], walkTime: '15分钟' },
        { name: '小岩站', lines: ['JR总武线'], walkTime: '20分钟' },
        { name: '篠崎站', lines: ['都营新宿线'], walkTime: '15分钟' }
      ]
    }
  ],

  // 观赏地点推荐
  viewingSpots: [
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳观赏体验，建议提前购票',
      pros: ['最佳视角', '座位保证', '相对舒适'],
      cons: ['需要购票', '价格较高']
    },
    {
      name: '江戸川河川敷自由席',
      rating: 4,
      crowdLevel: 'High', 
      tips: '免费观赏区域，需要早到占位',
      pros: ['免费观赏', '空间较大', '氛围热烈'],
      cons: ['需要早到', '设施简单']
    },
    {
      name: '篠崎公园周边',
      rating: 3,
      crowdLevel: 'Medium',
      tips: '距离稍远但人流相对较少',
      pros: ['人流较少', '公园设施', '交通便利'],
      cons: ['距离较远', '观赏角度一般']
    }
  ],

  // 历史与特色
  history: {
    established: 1976,
    significance: '江户川区具有代表性的夏季祭典',
    highlights: [
      '50周年纪念大会特别企划',
      '宗家花火"鍵屋"360年历史传承',
      '7主题音乐同步演出',
      '吉尼斯世界记录挑战"富士の大仕掛け"'
    ]
  },

  // 实用建议
  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午4点前到达占位（自由席）',
        '有料席建议提前30分钟入场',
        '关注官方网站确认举办状态'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅（自由席）',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '交通建议',
      items: [
        '强烈推荐公共交通',
        '考虑多条返程路线',
        '预留充足的往返时间'
      ]
    }
  ],

  contact: {
    organizer: '江戸川区花火大会実行委員会',
    phone: '03-5662-0523',
    website: 'https://www.city.edogawa.tokyo.jp/hanabi/',
    socialMedia: '江戸川区公式SNS'
  },

  // 地图和停车信息
  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '× 不提供停车位，请使用公共交通工具'
  },

  // 天气信息
  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '小雨决行（恶劣天气时中止）',
    note: '夏季多雨，请携带雨具'
  },

  // 50周年特别信息
  specialFeatures: {
    anniversary: '50周年纪念大会',
    guinness: '富士の大仝掛け吉尼斯世界记录挑战',
    opening: '开场5秒1000发震撼演出',
    themes: '7个不同主题的音乐演出',
    kagiya: '宗家花火"鍵屋"360年历史传承'
  }
};

export default function EdogawaDetailPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 背景装饰 - 改为浅色 */}
      <div className="absolute inset-0 bg-gray-100/50"></div>
      
      {/* 头部导航 - 改为浅色商业风格 */}
      <header className="relative z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="text-3xl">🎆</div>
                <h1 className="text-xl font-bold text-gray-800">关东地区旅游指南</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">首页</Link>
              <Link href="/hanabi/8" className="text-gray-600 hover:text-gray-800 transition-colors">8月花火</Link>
              <Link href="/region/tokyo" className="text-gray-600 hover:text-gray-800 transition-colors">东京地区</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 面包屑导航 - 改为浅色 */}
      <div className="relative z-10 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800 transition-colors">首页</Link>
            <span>›</span>
            <Link href="/hanabi/8" className="hover:text-gray-800 transition-colors">8月花火大会</Link>
            <span>›</span>
            <Link href="/region/tokyo" className="hover:text-gray-800 transition-colors">东京地区</Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">江戸川区花火大会</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 英雄区域 */}
        <section className="pt-8 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧：基本信息 */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {edogawaData.specialFeatures.anniversary}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                      有料席
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {edogawaData.name}
                  </h1>
                  <p className="text-gray-600 text-lg">{edogawaData.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 mb-6 text-center border border-purple-200">
                  <div className="text-8xl mb-4">🎆</div>
                  <p className="text-gray-700 text-sm">
                    50周年纪念江戸川花火大会 - 7主题音乐演出与传统花火的完美融合
                  </p>
                </div>
              </div>

              {/* 右侧：关键信息卡片 */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">活动信息</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">日期</span>
                      <span className="text-gray-800 font-semibold">{edogawaData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时间</span>
                      <span className="text-gray-800 font-semibold">{edogawaData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">发数</span>
                      <span className="text-blue-600 font-bold">{edogawaData.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">预计人数</span>
                      <span className="text-gray-800 font-semibold">{edogawaData.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">持续时间</span>
                      <span className="text-gray-800 font-semibold">{edogawaData.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">主办方</span>
                      <span className="text-gray-800">{edogawaData.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">电话</span>
                      <span className="text-gray-800">{edogawaData.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={edogawaData.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        官方网站 →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">地图&交通</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">地图</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-800">📍</span>
                        <button 
                          onClick={() => setSelectedTab('access')}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          查看详细地图 →
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600 block">停车场</span>
                      <span className="text-red-600">{edogawaData.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">举办条件</span>
                      <span className="text-gray-800">{edogawaData.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">建议</span>
                      <span className="text-orange-600">{edogawaData.weatherInfo.note}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-blue-700 text-xs">💡 {edogawaData.weatherInfo.recommendation}</span>
                    </div>
                  </div>
                </div>

                {/* 50周年特别信息卡片 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-purple-800 font-bold text-lg mb-4">🎉 50周年特别企划</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">🏆</span>
                      <span className="text-gray-800">{edogawaData.specialFeatures.guinness}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">💥</span>
                      <span className="text-gray-800">{edogawaData.specialFeatures.opening}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">🎵</span>
                      <span className="text-gray-800">{edogawaData.specialFeatures.themes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">🏮</span>
                      <span className="text-gray-800">{edogawaData.specialFeatures.kagiya}</span>
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
                      ? 'bg-blue-600 text-white'
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
                      江戸川区花火大会是江户川区具有代表性的夏季祭典，2025年迎来第50回纪念大会。
                      本大会以7个不同主题的音乐演出配合花火闻名，由拥有360年历史传承的宗家花火"鍵屋"负责制作。
                      50周年特别企划包括挑战吉尼斯世界记录的"富士の大仕掛け"以及震撼的开场5秒1000发演出。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="text-gray-800 font-bold mb-3">历史意义</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {edogawaData.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                      <h4 className="text-gray-800 font-bold mb-3">50周年特色</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>• 吉尼斯世界记录挑战</p>
                        <p>• 开场5秒1000发震撼演出</p>
                        <p>• 7个主题音乐同步表演</p>
                        <p>• 花火设计公募企划</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  <div className="space-y-4">
                    {edogawaData.venues.map((venue, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{venue.name}</h4>
                          <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {venue.startTime}开始
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">📍 {venue.location}</p>
                        <div className="space-y-2">
                          <p className="text-gray-800 text-sm font-medium">会场特色：</p>
                          <div className="flex flex-wrap gap-2">
                            {venue.features.map((feature, idx) => (
                              <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 50周年特别信息 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-xl font-bold text-purple-800 mb-4">🎉 50周年纪念亮点</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-4 border border-purple-100">
                        <h5 className="font-semibold text-purple-700 mb-2">🏆 吉尼斯世界记录挑战</h5>
                        <p className="text-gray-700 text-sm">江户川名物"富士の大仕掛け"挑战"最高山型仕掛花火"世界记录</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-purple-100">
                        <h5 className="font-semibold text-purple-700 mb-2">💥 震撼开场</h5>
                        <p className="text-gray-700 text-sm">开场5秒内连续发射1000发花火，带来震撼的视觉冲击</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-purple-100">
                        <h5 className="font-semibold text-purple-700 mb-2">🎵 音乐演出</h5>
                        <p className="text-gray-700 text-sm">7个不同主题配合BGM，提供视听双重享受</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-purple-100">
                        <h5 className="font-semibold text-purple-700 mb-2">🏮 传统传承</h5>
                        <p className="text-gray-700 text-sm">宗家花火"鍵屋"360年历史传承，工艺精湛</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'access' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">交通指南</h3>
                  
                  {/* 嵌入式地图 */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">会场位置地图</h4>
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.234!2d139.8797!3d35.6989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUFY4WCs3TSDmsZ_miLjlt53ljLrmnbHkuqzpg70%3D!5e0!3m2!1szh-CN!2sjp!4v1703123456789!5m2!1szh-CN!2sjp&q=PV8X%2B7M+%E6%B1%9F%E6%88%B8%E5%B7%9D%E5%8C%BA+%E6%9D%B1%E4%BA%AC%E9%83%BD"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="江戸川花火大会会场位置"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <div className="bg-purple-50 border border-purple-200 rounded p-3">
                        <h5 className="text-purple-700 font-semibold mb-1">江戸川河川敷会场</h5>
                        <p className="text-gray-800 text-sm">都立篠崎公園先 (东京都江戸川区)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {edogawaData.access.map((venueAccess, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">{venueAccess.venue}</h4>
                        <div className="space-y-4">
                          {venueAccess.stations.map((station, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                              <div>
                                <p className="text-gray-800 font-semibold">{station.name}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {station.lines.map((line, lineIdx) => (
                                    <span key={lineIdx} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-purple-600 font-bold">{station.walkTime}</span>
                                <p className="text-gray-600 text-xs">步行时间</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="text-amber-800 font-bold mb-2">⚠️ 重要提醒</h4>
                    <p className="text-amber-700 text-sm">
                      活动当天交通拥堵严重，强烈建议使用公共交通。结束后请耐心等待，避开人流高峰。
                      建议准备多条返程路线，并预留充足的往返时间。
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="space-y-4">
                    {edogawaData.viewingSpots.map((spot, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{spot.name}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                  {i < spot.rating ? '★' : '☆'}
                                </span>
                              ))}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${
                              spot.crowdLevel === 'Controlled' ? 'bg-green-100 text-green-700' :
                              spot.crowdLevel === 'High' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              人流：{spot.crowdLevel}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-purple-600 font-semibold mb-3">💡 {spot.tips}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-green-600 font-medium mb-2">✓ 优势</p>
                            <ul className="space-y-1 text-gray-700 text-sm">
                              {spot.pros.map((pro, idx) => (
                                <li key={idx}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-red-600 font-medium mb-2">✗ 劣势</p>
                            <ul className="space-y-1 text-gray-700 text-sm">
                              {spot.cons.map((con, idx) => (
                                <li key={idx}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 有料席特别说明 */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-green-800 font-bold mb-4">🎫 有料席购票信息</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">购票详情</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 销售时间：6月中旬开始</li>
                          <li>• 席位数：约3万席</li>
                          <li>• 价格：详询官方网站</li>
                          <li>• 建议：50周年纪念大会，提前购买</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">有料席优势</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 最佳观赏角度保证</li>
                          <li>• 座位空间充足舒适</li>
                          <li>• 避免长时间占位等待</li>
                          <li>• 设施相对完善便利</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'tips' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">实用建议</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {edogawaData.tips.map((tipCategory, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* 50周年特别提醒 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-purple-800 font-bold mb-4">🎉 50周年特别提醒</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-purple-700 mb-2">纪念大会注意事项</h5>
                        <ul className="space-y-1 text-purple-600">
                          <li>• 预计观众人数较往年增加</li>
                          <li>• 吉尼斯记录挑战期间请保持安静</li>
                          <li>• 特别企划时段禁止移动</li>
                          <li>• 建议提前了解程序时间安排</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 mb-2">摄影建议</h5>
                        <ul className="space-y-1 text-purple-600">
                          <li>• 富士大仕掛是绝佳拍摄主题</li>
                          <li>• 开场1000发需快速连拍</li>
                          <li>• 7主题演出各有不同拍摄角度</li>
                          <li>• 建议使用三脚架稳定拍摄</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 相关推荐 */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">相关推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/hanabi/detail/sumida" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  隅田川花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">7月26日 • 东京隅田川</p>
                <p className="text-gray-500 text-xs">日本最著名的传统花火大会</p>
              </Link>
              
              <Link href="/hanabi/detail/adachi" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  足立花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">7月下旬 • 东京足立区</p>
                <p className="text-gray-500 text-xs">东京最早的夏季花火大会</p>
              </Link>
              
              <Link href="/region/tokyo" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  东京地区花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">查看全部 • 东京都</p>
                <p className="text-gray-500 text-xs">探索更多东京地区的花火活动</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-2xl">🎆</div>
              <h3 className="text-lg font-bold">关东地区旅游指南</h3>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 关东地区旅游指南. 专为旅游爱好者打造.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 