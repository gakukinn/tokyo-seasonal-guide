'use client';

import Link from 'next/link';
import { useState } from 'react';

// 板桥花火大会数据 - 基于官方信息
const itabashiData = {
  id: 'itabashi',
  name: '第66届板桥花火大会',
  englishName: 'The 66th Itabashi Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:00～20:30',
  duration: '90分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '57万人',
  weather: '雨天延期',
  ticketPrice: '有料观览席',
  status: '都内最大尺五寸玉',
  ranking: '东京都人气第6位',
  
  // 会场信息
  venues: [
    {
      name: '荒川河川敷会场',
      location: '东京都板桥区 荒川河川敷',
      startTime: '19:00',
      features: ['都内最大尺五寸玉', '与戸田桥花火大会同时开催', '5处同时打上', '天空的尼亚加拉瀑布']
    }
  ],

  // 交通指南
  access: [
    {
      venue: '荒川河川敷会场',
      stations: [
        { name: '浮間舟渡站', lines: ['JR埼京线'], walkTime: '徒步20分' },
        { name: '高島平站', lines: ['都营地下铁三田线'], walkTime: '徒步20分' },
        { name: '西台站', lines: ['都营地下铁三田线'], walkTime: '徒步20分' },
        { name: '蓮根站', lines: ['都营地下铁三田线'], walkTime: '徒步20分' }
      ]
    }
  ],

  // 观赏地点推荐
  viewingSpots: [
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳视角，观赏都内最大尺五寸玉',
      pros: ['绝佳视角', '指定座席', '震撼体验'],
      cons: ['价格较高', '需提前预约']
    },
    {
      name: '荒川河川敷自由观览区',
      rating: 4,
      crowdLevel: 'Very High', 
      tips: '免费观赏，提前占位是关键',
      pros: ['免费观赏', '气氛热烈', '贴近花火'],
      cons: ['人流密集', '需提早到达', '视角有限']
    },
    {
      name: '戸田桥周边',
      rating: 3,
      crowdLevel: 'High',
      tips: '可同时观赏两岸花火',
      pros: ['双岸花火', '人流稍少', '交通便利'],
      cons: ['距离较远', '花火较小', '音响效果弱']
    }
  ],

  // 历史与特色
  history: {
    established: 1950,
    significance: '都内最大尺五寸玉与戸田桥花火同时开催',
    highlights: [
      '第66届历史悠久传统花火大会',
      '都内最大尺五寸玉震撼演出',
      '与戸田桥花火大会同时开催双重享受',
      '5处同时打上的壮观星雷'
    ]
  },

  // 实用建议
  tips: [
    {
      category: '时间安排',
      items: [
        '建议16:00前到达占据观赏位置',
        '19:00正式开始，20:30结束',
        '双岸花火同时进行，视觉盛宴'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫和折叠椅（河川敷观赏）',
        '充足的饮用水和轻食',
        '防蚊虫用品和小扇子',
        '垃圾袋（请带走垃圾保护环境）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '重点关注都内最大尺五寸玉',
        '注意天空的尼亚加拉瀑布终演',
        '河川敷中央位置视野最佳',
        '可同时欣赏戸田侧花火'
      ]
    }
  ],

  contact: {
    organizer: '板桥花火大会实行委员会',
    phone: '03-3579-2251',
    website: 'https://itabashihanabi.jp/',
    socialMedia: '板桥花火大会官方'
  },

  // 地图和停车信息
  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '△ 周边停车场有限（强烈推荐公共交通）'
  },

  // 天气信息
  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '雨天延期（延期日程另行通知）',
    note: '夏季河川敷闷热，请做好防暑准备'
  },

  // 特别信息
  specialFeatures: {
    scale: '都内最大尺五寸玉',
    location: '荒川河川敷双岸观赏',
    tradition: '第66届传统花火大会',
    atmosphere: '57万人共享夏夜盛典',
    collaboration: '与戸田桥花火大会同时开催'
  },

  // 2025年特别企划
  special2025: {
    theme: '传承与革新',
    concept: '第66届纪念大会',
    memorial: 'ボローニャ市友好都市交流20周年纪念',
    features: [
      '都内最大尺五寸玉特别演出',
      '日本最高峰花火师手工制作芸術玉',
      '5处同时打上的壮观星雷升级版',
      '终演"天空的尼亚加拉瀑布"',
      'ボローニャ市友好都市交流20周年纪念花火'
    ]
  }
};

export default function ItabashiDetailPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 背景装饰 - 浅色 */}
      <div className="absolute inset-0 bg-gray-100/50"></div>
      
      {/* 头部导航 - 浅色商业风格 */}
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

      {/* 面包屑导航 - 浅色 */}
      <div className="relative z-10 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800 transition-colors">首页</Link>
            <span>›</span>
            <Link href="/hanabi/8" className="hover:text-gray-800 transition-colors">8月花火大会</Link>
            <span>›</span>
            <Link href="/region/tokyo" className="hover:text-gray-800 transition-colors">东京地区</Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">板桥花火大会</span>
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
                      都内最大尺五寸玉
                    </span>
                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                      第66届传统大会
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    第66届板桥花火大会
                  </h1>
                  <p className="text-gray-600 text-lg">{itabashiData.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-8 mb-6 text-center border border-red-200">
                  <div className="text-8xl mb-4">🎆</div>
                  <p className="text-gray-700 text-sm">
                    板桥花火大会精彩瞬间 - 都内最大尺五寸玉的震撼演出
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
                      <span className="text-gray-800 font-semibold">{itabashiData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时间</span>
                      <span className="text-gray-800 font-semibold">{itabashiData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">发数</span>
                      <span className="text-red-600 font-bold">{itabashiData.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">预计人数</span>
                      <span className="text-gray-800 font-semibold">{itabashiData.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">持续时间</span>
                      <span className="text-gray-800 font-semibold">{itabashiData.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">主办方</span>
                      <span className="text-gray-800">{itabashiData.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">电话</span>
                      <span className="text-gray-800">{itabashiData.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={itabashiData.contact.website} 
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
                      <span className="text-red-600">{itabashiData.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">举办条件</span>
                      <span className="text-gray-800">{itabashiData.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">建议</span>
                      <span className="text-orange-600">{itabashiData.weatherInfo.note}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-blue-700 text-xs">💡 {itabashiData.weatherInfo.recommendation}</span>
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
                      ? 'bg-red-600 text-white'
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
                      第66届板桥花火大会是东京都内历史悠久的传统花火盛会，以"都内最大尺五寸玉"而闻名。
                      与埼玉县戸田市的"戸田桥花火大会"同时开催，荒川两岸共约1万5000发花火点亮夏夜天空，
                      吸引57万观众共同欣赏。承载着66年的传统与历史，为观众呈现震撼的花火体验。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="text-gray-800 font-bold mb-3">历史意义</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {itabashiData.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="text-gray-800 font-bold mb-3">独特优势</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>• 都内最大尺五寸玉震撼演出</p>
                        <p>• 与戸田桥花火大会同时开催</p>
                        <p>• 荒川河川敷开阔观赏视野</p>
                        <p>• 57万人共享夏夜盛典</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  <div className="space-y-4">
                    {itabashiData.venues.map((venue, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{venue.name}</h4>
                          <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {venue.startTime}开始
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">📍 {venue.location}</p>
                        <div className="space-y-2">
                          <p className="text-gray-800 text-sm font-medium">会场特色：</p>
                          <div className="flex flex-wrap gap-2">
                            {venue.features.map((feature, idx) => (
                              <span key={idx} className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 荒川河川敷特色介绍 */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
                    <h4 className="text-xl font-bold text-red-800 mb-4">🌉 荒川河川敷会场优势</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-4 border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">🎆 开阔视野</h5>
                        <p className="text-gray-700 text-sm">河川敷平坦开阔，360度无遮挡观赏体验</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">💥 尺五寸玉</h5>
                        <p className="text-gray-700 text-sm">都内最大尺五寸玉，震撼视觉和听觉体验</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">🚇 交通便利</h5>
                        <p className="text-gray-700 text-sm">多条路线可达，都营三田线直达</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">🎪 活动丰富</h5>
                        <p className="text-gray-700 text-sm">屋台美食，现场音乐，完整夏日祭体验</p>
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
                        src="https://maps.google.com/maps?q=%E6%9D%BF%E6%A9%8B%E5%8C%BA+%E8%8D%92%E5%B7%9D%E6%B2%B3%E5%B7%9D%E6%95%B7+%E6%9D%B1%E4%BA%AC%E9%83%BD&output=embed&z=15"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="板桥花火大会会场位置"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <h5 className="text-red-700 font-semibold mb-1">荒川河川敷会场</h5>
                        <p className="text-gray-800 text-sm">东京都板桥区 荒川河川敷</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {itabashiData.access.map((venueAccess, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">{venueAccess.venue}</h4>
                        <div className="space-y-4">
                          {venueAccess.stations.map((station, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                              <div>
                                <p className="text-gray-800 font-semibold">{station.name}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {station.lines.map((line, lineIdx) => (
                                    <span key={lineIdx} className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-red-600 font-bold">{station.walkTime}</span>
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
                      大会当日交通管制严格，建议使用公共交通。河川敷无固定停车场，
                      自驾前往需在周边寻找收费停车场。建议提前2-3小时到达会场占据观赏位置。
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="space-y-4">
                    {itabashiData.viewingSpots.map((spot, index) => (
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
                              'bg-red-100 text-red-700'
                            }`}>
                              人流：{spot.crowdLevel}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-red-600 font-semibold mb-3">💡 {spot.tips}</p>
                        
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
                  
                  {/* 尺五寸玉观赏特别说明 */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
                    <h4 className="text-red-800 font-bold mb-4">💥 都内最大尺五寸玉观赏指南</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-red-700 mb-2">震撼体验</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• 直径约450米的巨大花火</li>
                          <li>• 震撼视觉与听觉双重冲击</li>
                          <li>• 都内唯一尺五寸玉体验</li>
                          <li>• 夜空中绽放的绚烂奇迹</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 mb-2">观赏建议</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• 选择河川敷中央位置</li>
                          <li>• 准备防振耳塞保护听力</li>
                          <li>• 注意观赏花火爆炸后余韵</li>
                          <li>• 提前占位确保最佳视角</li>
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
                    {itabashiData.tips.map((tipCategory, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-red-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* 河川敷观赏特别建议 */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
                    <h4 className="text-red-800 font-bold mb-4">🌉 河川敷观赏特别建议</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-red-700 mb-2">观赏准备</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• 携带防潮垫和折叠椅</li>
                          <li>• 准备充足水和轻食</li>
                          <li>• 防蚊虫喷雾必不可少</li>
                          <li>• 携带垃圾袋保护环境</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 mb-2">安全提醒</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• 注意河川敷地面不平</li>
                          <li>• 夏季防暑降温很重要</li>
                          <li>• 保持与河水安全距离</li>
                          <li>• 大会结束后耐心等待退场</li>
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
              
              <Link href="/hanabi/detail/edogawa" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  江户川区花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">8月2日 • 东京江户川</p>
                <p className="text-gray-500 text-xs">第50周年纪念特别企划</p>
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