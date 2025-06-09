'use client';

import Link from 'next/link';
import { useState } from 'react';

// 東京競馬場花火2025数据 - 基于官方信息
const tokyoRacecourseData = {
  id: 'tokyo-racecourse',
  name: '東京競馬場花火 2025 〜花火と聴きたい J-POP BEST〜',
  englishName: 'Tokyo Racecourse Fireworks 2025',
  year: 2025,
  date: '2025年7月2日(水)',
  time: '19:30～20:40',
  openTime: '17:00开场',
  duration: '70分钟',
  fireworksCount: '日本最高峰水准',
  expectedVisitors: '全席指定席',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '全席指定席制',
  status: '东京都人气第1位',
  
  // 会场信息
  venues: [
    {
      name: 'JRA東京競馬場',
      location: '東京都府中市日吉町1-1',
      startTime: '19:30',
      features: ['距离观览席仅100米', 'J-POP音乐同步', '全席指定席', '2公里广阔会场']
    }
  ],

  // 交通指南
  access: [
    {
      venue: '東京競馬場会场',
      stations: [
        { name: '府中競馬正門前站', lines: ['京王竞马场线'], walkTime: '徒歩すぐ' },
        { name: '東府中站', lines: ['京王线'], walkTime: '5分钟' },
        { name: '府中本町站', lines: ['JR南武线'], walkTime: '15分钟' }
      ]
    }
  ],

  // 观赏地点推荐
  viewingSpots: [
    {
      name: 'A席观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳视角，距离花火最近',
      pros: ['绝佳视角', '指定座席', '设备完善'],
      cons: ['价格较高', '需提前预约']
    },
    {
      name: 'B席观览席',
      rating: 4,
      crowdLevel: 'Controlled', 
      tips: '性价比较高的指定席',
      pros: ['指定座席', '视野良好', '相对实惠'],
      cons: ['距离稍远', '需提前预约']
    },
    {
      name: 'C席观览席',
      rating: 4,
      crowdLevel: 'Controlled',
      tips: '经济实惠的指定席选择',
      pros: ['价格实惠', '指定座席', '完整体验'],
      cons: ['距离较远', '视角一般']
    }
  ],

  // 历史与特色
  history: {
    established: 2018,
    significance: '日本最高峰的花火娱乐体验',
    highlights: [
      '东京都人气排名第1位',
      '观览席距离花火仅100米',
      '音乐与花火完美同步',
      '全席指定席的舒适体验'
    ]
  },

  // 实用建议
  tips: [
    {
      category: '时间安排',
      items: [
        '17:00开场，建议提前到达',
        '19:30正式开始，20:40结束',
        '终演后有规制退场，请耐心等待'
      ]
    },
    {
      category: '必备物品',
      items: [
        '门票（全席指定席制）',
        '身份证件确认',
        '轻便雨具（夏季天气）',
        '舒适的观赏服装'
      ]
    },
    {
      category: '体验建议',
      items: [
        '感受J-POP与花火的完美融合',
        '体验日本最高峰花火娱乐',
        '享受全席指定席的舒适观赏'
      ]
    }
  ],

  contact: {
    organizer: '東京競馬場花火実行委員会',
    phone: '03-5471-5912',
    website: 'https://hanabitokyo.com/',
    socialMedia: '東京競馬場花火公式'
  },

  // 地图和停车信息
  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '○ 提供停车场（收费）'
  },

  // 天气信息
  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '小雨决行（恶劣天气时中止）',
    note: '夏季天气变化快，请携带雨具'
  },

  // 特别信息
  specialFeatures: {
    music: 'J-POP BEST主题，昭和100年纪念',
    proximity: '观览席距离花火仅100米',
    comfort: '全席指定席，设备完善',
    scale: '约2公里广阔竞马场的壮观演出'
  },

  // 2025年特别企划
  special2025: {
    theme: 'J-POP BEST',
    concept: '昭和100年纪念特别企划',
    features: [
      '经典J-POP名曲与花火同步',
      '音乐世界观的极致花火演出',
      '色彩、形状、高度精心计算',
      '余韵效果的完美呈现'
    ]
  }
};

export default function TokyoRacecourseDetailPage() {
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
              <Link href="/hanabi/7" className="text-gray-600 hover:text-gray-800 transition-colors">7月花火</Link>
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
            <Link href="/hanabi/7" className="hover:text-gray-800 transition-colors">7月花火大会</Link>
            <span>›</span>
            <Link href="/region/tokyo" className="hover:text-gray-800 transition-colors">东京地区</Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">東京競馬場花火大会</span>
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
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {tokyoRacecourseData.status}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      日本最高峰
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      J-POP主题
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    東京競馬場花火 2025
                  </h1>
                  <p className="text-xl text-green-600 font-semibold mb-2">
                    〜花火と聴きたい J-POP BEST〜
                  </p>
                  <p className="text-gray-600 text-lg">{tokyoRacecourseData.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8 mb-6 text-center border border-green-200">
                  <div className="text-8xl mb-4">🏇🎆</div>
                  <p className="text-gray-700 text-sm">
                    日本最高峰的花火娱乐体验 - J-POP与花火的极致融合
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
                      <span className="text-gray-800 font-semibold">{tokyoRacecourseData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时间</span>
                      <span className="text-gray-800 font-semibold">{tokyoRacecourseData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">开场</span>
                      <span className="text-gray-800 font-semibold">{tokyoRacecourseData.openTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">规模</span>
                      <span className="text-blue-600 font-bold">{tokyoRacecourseData.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">座席</span>
                      <span className="text-gray-800 font-semibold">{tokyoRacecourseData.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">持续时间</span>
                      <span className="text-gray-800 font-semibold">{tokyoRacecourseData.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">主办方</span>
                      <span className="text-gray-800">{tokyoRacecourseData.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">电话</span>
                      <span className="text-gray-800">{tokyoRacecourseData.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={tokyoRacecourseData.contact.website} 
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
                      <span className="text-green-600">{tokyoRacecourseData.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">举办条件</span>
                      <span className="text-gray-800">{tokyoRacecourseData.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">建议</span>
                      <span className="text-green-600">{tokyoRacecourseData.weatherInfo.note}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-blue-700 text-xs">💡 {tokyoRacecourseData.weatherInfo.recommendation}</span>
                    </div>
                  </div>
                </div>

                {/* 2025年特别企划信息卡片 */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-green-800 font-bold text-lg mb-4">🎵 2025年特别企划</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">🎶</span>
                      <span className="text-gray-800">{tokyoRacecourseData.special2025.theme}主题</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">🏆</span>
                      <span className="text-gray-800">{tokyoRacecourseData.special2025.concept}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">📏</span>
                      <span className="text-gray-800">{tokyoRacecourseData.specialFeatures.proximity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">🪑</span>
                      <span className="text-gray-800">{tokyoRacecourseData.specialFeatures.comfort}</span>
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
                      東京競馬場花火2025是日本最高峰的花火娱乐体验，以"J-POP BEST"为主题，
                      在"昭和100年"这一记念年份，呈现经典名曲与花火的完美同步演出。
                      约2公里的广阔竞马场为舞台，音乐与花火完美融合的大规模演出在此独家上演。
                      观览席距离花火仅100米，全席指定席制度确保每位观众都能舒适观赏。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="text-gray-800 font-bold mb-3">2025年特色</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {tokyoRacecourseData.special2025.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="text-gray-800 font-bold mb-3">独特优势</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>• 东京都人气排名第1位</p>
                        <p>• 观览席距离花火仅100米</p>
                        <p>• 全席指定席舒适体验</p>
                        <p>• 交通便利，车站徒步即达</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  <div className="space-y-4">
                    {tokyoRacecourseData.venues.map((venue, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{venue.name}</h4>
                          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {venue.startTime}开始
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">📍 {venue.location}</p>
                        <div className="space-y-2">
                          <p className="text-gray-800 text-sm font-medium">会场特色：</p>
                          <div className="flex flex-wrap gap-2">
                            {venue.features.map((feature, idx) => (
                              <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 竞马场设施介绍 */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                    <h4 className="text-xl font-bold text-green-800 mb-4">🏇 竞马场完善设施</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-4 border border-green-100">
                        <h5 className="font-semibold text-green-700 mb-2">🎫 全席指定席</h5>
                        <p className="text-gray-700 text-sm">混雑を気にせずゆったり鑑賞，各席位置保证</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-green-100">
                        <h5 className="font-semibold text-green-700 mb-2">🚻 完善设施</h5>
                        <p className="text-gray-700 text-sm">厕所、饮食摊位等设施齐全，各年龄层都能舒适享受</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-green-100">
                        <h5 className="font-semibold text-green-700 mb-2">🚇 交通便利</h5>
                        <p className="text-gray-700 text-sm">最寄り駅から徒歩すぐ，都内轻松前往</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-green-100">
                        <h5 className="font-semibold text-green-700 mb-2">🅿️ 停车场</h5>
                        <p className="text-gray-700 text-sm">提供收费停车场，自驾前往也很方便</p>
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
                        src="https://maps.google.com/maps?q=JRA%E6%9D%B1%E4%BA%AC%E7%AB%B6%E9%A6%AC%E5%A0%B4+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%B8%AD%E5%B8%82%E6%97%A5%E5%90%89%E7%94%BA1-1&output=embed&z=16"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="東京競馬場花火大会会场位置"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <h5 className="text-green-700 font-semibold mb-1">JRA東京競馬場</h5>
                        <p className="text-gray-800 text-sm">東京都府中市日吉町1-1</p>
                        <p className="text-gray-600 text-xs mt-1">Plus Code: MF6P+XC 府中市 日本东京都</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {tokyoRacecourseData.access.map((venueAccess, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">{venueAccess.venue}</h4>
                        <div className="space-y-4">
                          {venueAccess.stations.map((station, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                              <div>
                                <p className="text-gray-800 font-semibold">{station.name}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {station.lines.map((line, lineIdx) => (
                                    <span key={lineIdx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-green-600 font-bold">{station.walkTime}</span>
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
                      全席指定席制，需提前购票。17:00开场，建议早些到达熟悉会场。
                      终演后有规制退场，请按指示有序离场。竞马场内设施齐全，可安心享受。
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="space-y-4">
                    {tokyoRacecourseData.viewingSpots.map((spot, index) => (
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
                        
                        <p className="text-green-600 font-semibold mb-3">💡 {spot.tips}</p>
                        
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
                  
                  {/* J-POP体验特别说明 */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-green-800 font-bold mb-4">🎵 J-POP花火体验指南</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">音乐体验</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 经典J-POP名曲与花火完美同步</li>
                          <li>• 昭和100年纪念特别选曲</li>
                          <li>• 音乐世界观的极致花火演出</li>
                          <li>• 体感型音乐花火秀</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">观赏建议</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 观览席距离花火仅100米</li>
                          <li>• 色彩、形状、高度精心计算</li>
                          <li>• 注意花火消逝时的余韵效果</li>
                          <li>• 全席指定席安心享受</li>
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
                    {tokyoRacecourseData.tips.map((tipCategory, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* 全席指定席体验 */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                    <h4 className="text-green-800 font-bold mb-4">🎫 全席指定席体验建议</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">购票建议</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 提前通过官方渠道购票</li>
                          <li>• 根据预算选择A/B/C席</li>
                          <li>• 确认座席位置和视角</li>
                          <li>• 保存好门票和身份证件</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">当日安排</h5>
                        <ul className="space-y-1 text-green-600">
                          <li>• 17:00开场，建议提早到达</li>
                          <li>• 熟悉会场设施布局</li>
                          <li>• 享受竞马场的完善服务</li>
                          <li>• 终演后按指示有序退场</li>
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
              <Link href="/hanabi/detail/katsushika" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  葛飾納涼花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">7月22日 • 东京葛饰</p>
                <p className="text-gray-500 text-xs">五感体验的下町花火</p>
              </Link>
              
              <Link href="/hanabi/detail/sumida" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  隅田川花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">7月26日 • 东京隅田川</p>
                <p className="text-gray-500 text-xs">日本最著名的传统花火大会</p>
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