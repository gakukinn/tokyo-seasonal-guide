'use client';

import Link from 'next/link';
import { useState } from 'react';

// 葛飾納涼花火大会数据 - 基于官方信息
const katsushikaData = {
  id: 'katsushika',
  name: '第59回 葛飾納涼花火大会',
  englishName: 'Katsushika Fireworks Festival',
  year: 2025,
  date: '2025年7月22日(火)',
  time: '19:20～20:20',
  duration: '60分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '都内最大级规模',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '有料席・自由席',
  status: '东京都人气第2位',
  
  // 会场信息
  venues: [
    {
      name: '主会场',
      location: '葛飾区柴又野球場（江戸川河川敷）',
      startTime: '19:20',
      features: ['观赏距离极近', '轰音振动体验', '音乐花火联动']
    }
  ],

  // 交通指南
  access: [
    {
      venue: '柴又野球场会场',
      stations: [
        { name: '柴又站', lines: ['京成金町线'], walkTime: '10分钟' },
        { name: '京成金町站', lines: ['京成金町线'], walkTime: '15分钟' },
        { name: '金町站', lines: ['JR常磐线'], walkTime: '20分钟' }
      ]
    }
  ],

  // 观赏地点推荐
  viewingSpots: [
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '距离打上地点最近，震撼体验',
      pros: ['极近距离', '轰音振动', '最佳视角'],
      cons: ['需要购票', '价格较高']
    },
    {
      name: '江戸川河川敷自由席',
      rating: 4,
      crowdLevel: 'High', 
      tips: '免费观赏，需要早到占位',
      pros: ['免费观赏', '下町氛围', '空间开阔'],
      cons: ['需要早到', '距离较远']
    },
    {
      name: '东京晴空塔同框拍摄点',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可以拍摄花火与晴空塔同框',
      pros: ['独特角度', '拍照胜地', '纪念价值'],
      cons: ['距离较远', '人流较多']
    }
  ],

  // 历史与特色
  history: {
    established: 1966,
    significance: '下町情怀满溢的夏季传统祭典',
    highlights: [
      '半世纪以上历史传承',
      '观赏距离极近的震撼体验',
      '都内最大级规模1万5000发',
      '柴又帝释天下町风情'
    ]
  },

  // 实用建议
  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午早些时候到达占位',
        '提前享受柴又街道散步',
        '关注官方网站确认举办状态'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '体验建议',
      items: [
        '体验下町柴又的昭和风情',
        '参观柴又帝释天',
        '品尝当地传统美食'
      ]
    }
  ],

  contact: {
    organizer: '葛飾納涼花火大会実行委員会',
    phone: '03-3693-2111',
    website: 'https://www.city.katsushika.lg.jp/',
    socialMedia: '葛飾区公式SNS'
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

  // 特别信息
  specialFeatures: {
    proximity: '观赏距离极近的震撼体验',
    sound: '花火轰音与振动的五感体验',
    scale: '都内最大级规模1万5000发',
    location: '柴又下町风情与花火的完美融合'
  }
};

export default function KatsushikaDetailPage() {
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
            <span className="text-gray-800 font-medium">葛飾納涼花火大会</span>
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
                      {katsushikaData.status}
                    </span>
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                      都内最大级
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {katsushikaData.name}
                  </h1>
                  <p className="text-gray-600 text-lg">{katsushikaData.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-8 mb-6 text-center border border-orange-200">
                  <div className="text-8xl mb-4">🎆</div>
                  <p className="text-gray-700 text-sm">
                    五感体验的葛飾納涼花火大会 - 下町风情与震撼花火的完美融合
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
                      <span className="text-gray-800 font-semibold">{katsushikaData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时间</span>
                      <span className="text-gray-800 font-semibold">{katsushikaData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">发数</span>
                      <span className="text-blue-600 font-bold">{katsushikaData.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">规模</span>
                      <span className="text-gray-800 font-semibold">{katsushikaData.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">持续时间</span>
                      <span className="text-gray-800 font-semibold">{katsushikaData.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">主办方</span>
                      <span className="text-gray-800">{katsushikaData.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">电话</span>
                      <span className="text-gray-800">{katsushikaData.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={katsushikaData.contact.website} 
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
                      <span className="text-red-600">{katsushikaData.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">举办条件</span>
                      <span className="text-gray-800">{katsushikaData.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">建议</span>
                      <span className="text-orange-600">{katsushikaData.weatherInfo.note}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-blue-700 text-xs">💡 {katsushikaData.weatherInfo.recommendation}</span>
                    </div>
                  </div>
                </div>

                {/* 特色体验信息卡片 */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-orange-800 font-bold text-lg mb-4">🎇 五感体验特色</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-600">👁️</span>
                      <span className="text-gray-800">{katsushikaData.specialFeatures.proximity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-600">👂</span>
                      <span className="text-gray-800">{katsushikaData.specialFeatures.sound}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-600">🎆</span>
                      <span className="text-gray-800">{katsushikaData.specialFeatures.scale}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-600">🏮</span>
                      <span className="text-gray-800">{katsushikaData.specialFeatures.location}</span>
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
                      葛飾納涼花火大会是拥有半世纪以上历史的下町情怀满溢的夏季传统祭典。
                      举办地点在充满昭和怀旧风情的柴又，会场距离花火打上地点极近，
                      观众可以五感体验到花火的轰音与振动，这种震撼体验在其他地方难以感受到。
                      都内最大级规模的1万5000发花火，每年都吸引众多游客前来观赏。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="text-gray-800 font-bold mb-3">历史特色</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {katsushikaData.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="text-gray-800 font-bold mb-3">独特体验</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>• 观赏距离极近的震撼体验</p>
                        <p>• 花火轰音与振动的五感感受</p>
                        <p>• 柴又下町昭和风情散步</p>
                        <p>• 东京晴空塔同框拍摄机会</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  <div className="space-y-4">
                    {katsushikaData.venues.map((venue, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{venue.name}</h4>
                          <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {venue.startTime}开始
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">📍 {venue.location}</p>
                        <div className="space-y-2">
                          <p className="text-gray-800 text-sm font-medium">会场特色：</p>
                          <div className="flex flex-wrap gap-2">
                            {venue.features.map((feature, idx) => (
                              <span key={idx} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 柴又下町风情 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                    <h4 className="text-xl font-bold text-orange-800 mb-4">🏮 柴又下町风情</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-4 border border-orange-100">
                        <h5 className="font-semibold text-orange-700 mb-2">🏛️ 柴又帝释天</h5>
                        <p className="text-gray-700 text-sm">历史悠久的寺院，充满昭和风情的参道商店街</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-orange-100">
                        <h5 className="font-semibold text-orange-700 mb-2">🍡 传统美食</h5>
                        <p className="text-gray-700 text-sm">草团子、鲷鱼烧等怀旧点心，体验下町风味</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-orange-100">
                        <h5 className="font-semibold text-orange-700 mb-2">📸 昭和景观</h5>
                        <p className="text-gray-700 text-sm">保留着昭和时代风貌的街道，拍照绝佳</p>
                      </div>
                      <div className="bg-white rounded p-4 border border-orange-100">
                        <h5 className="font-semibold text-orange-700 mb-2">🗼 晴空塔同框</h5>
                        <p className="text-gray-700 text-sm">可以拍摄花火与东京晴空塔的同框美景</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.234!2d139.8797!3d35.6989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUVY2SitHOQ%3D%3D!5e0!3m2!1szh-CN!2sjp!4v1703123456789!5m2!1szh-CN!2sjp&q=QV6J%2BG9"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="葛飾納涼花火大会会场位置"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <div className="bg-orange-50 border border-orange-200 rounded p-3">
                        <h5 className="text-orange-700 font-semibold mb-1">柴又野球场会场</h5>
                        <p className="text-gray-800 text-sm">葛飾区柴又野球場（江戸川河川敷）</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {katsushikaData.access.map((venueAccess, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">{venueAccess.venue}</h4>
                        <div className="space-y-4">
                          {venueAccess.stations.map((station, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                              <div>
                                <p className="text-gray-800 font-semibold">{station.name}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {station.lines.map((line, lineIdx) => (
                                    <span key={lineIdx} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-orange-600 font-bold">{station.walkTime}</span>
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
                      活动当天交通拥堵严重，强烈建议使用公共交通。柴又站距离会场最近，
                      建议提前到达享受下町风情散步。结束后请耐心等待，避开人流高峰。
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="space-y-4">
                    {katsushikaData.viewingSpots.map((spot, index) => (
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
                        
                        <p className="text-orange-600 font-semibold mb-3">💡 {spot.tips}</p>
                        
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
                  
                  {/* 五感体验特别说明 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="text-orange-800 font-bold mb-4">🎇 五感体验指南</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-orange-700 mb-2">震撼体验</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• 观赏距离极近，轰音震撼</li>
                          <li>• 花火爆炸的振动直达全身</li>
                          <li>• 视觉、听觉、触觉三重享受</li>
                          <li>• 其他花火大会难以体验</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 mb-2">拍摄建议</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• 花火与东京晴空塔同框</li>
                          <li>• 河面倒影增加浪漫效果</li>
                          <li>• 柴又下町风情作为前景</li>
                          <li>• 建议使用三脚架稳定拍摄</li>
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
                    {katsushikaData.tips.map((tipCategory, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* 柴又下町体验 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                    <h4 className="text-orange-800 font-bold mb-4">🏮 柴又下町体验建议</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-orange-700 mb-2">文化体验</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• 参拜柴又帝释天，感受历史</li>
                          <li>• 漫步参道商店街，购买纪念品</li>
                          <li>• 品尝传统和果子与小食</li>
                          <li>• 体验昭和时代怀旧氛围</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 mb-2">时间安排</h5>
                        <ul className="space-y-1 text-orange-600">
                          <li>• 下午早些时候抵达柴又</li>
                          <li>• 先游览帝释天和商店街</li>
                          <li>• 傍晚前往会场占位</li>
                          <li>• 花火结束后继续夜游</li>
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
                  江戸川区花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">8月2日 • 东京江戸川</p>
                <p className="text-gray-500 text-xs">50周年纪念特别企划</p>
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