'use client';

import Link from 'next/link';
import { useState } from 'react';

// 隅田川花火大会数据
const sumidaData = {
  id: 'sumida',
  name: '第48回 隅田川花火大会',
  englishName: 'Sumida River Fireworks Festival',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:00～20:30（第一会场19:00～、第二会场19:30～）',
  duration: '90分钟',
  fireworksCount: '约2万发',
  expectedVisitors: '约91万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  
  // 会场信息
  venues: [
    {
      name: '第一会场',
      location: '桜橋下流～言問橋上流',
      startTime: '19:00',
      features: ['传统花火竞技大会', '创意花火表演', '最佳摄影角度']
    },
    {
      name: '第二会场', 
      location: '駒形橋下流～厩橋上流',
      startTime: '19:30',
      features: ['创新花火设计', '音乐同步表演', '东京晴空塔背景']
    }
  ],

  // 交通指南
  access: [
    {
      venue: '第一会场',
      stations: [
        { name: '浅草站', lines: ['东武线', '东京地铁银座线', '都营浅草线'], walkTime: '15分钟' },
        { name: '东京晴空塔站', lines: ['东武晴空塔线'], walkTime: '20分钟' },
        { name: '押上站', lines: ['京成押上线', '都营浅草线'], walkTime: '25分钟' }
      ]
    },
    {
      venue: '第二会场',
      stations: [
        { name: '浅草站', lines: ['东武线', '东京地铁银座线', '都营浅草线'], walkTime: '5分钟' },
        { name: '蔵前站', lines: ['都营浅草线', '都营大江户线'], walkTime: '5分钟' },
        { name: '浅草桥站', lines: ['JR总武线', '都营浅草线'], walkTime: '10分钟' }
      ]
    }
  ],

  // 观赏地点推荐
  viewingSpots: [
    {
      name: '隅田公园',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '最佳观赏地点，需要早上占位',
      pros: ['最佳视角', '传统观赏地'],
      cons: ['人流量最大', '需要长时间等待']
    },
    {
      name: '汐入公园',
      rating: 4,
      crowdLevel: 'High', 
      tips: '第二会场附近，相对宽敞',
      pros: ['视野开阔', '设施较好'],
      cons: ['距离第一会场较远']
    },
    {
      name: '东京晴空塔周边',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可拍摄花火与晴空塔同框',
      pros: ['独特角度', '拍照胜地'],
      cons: ['距离较远', '收费区域']
    }
  ],

  // 历史与特色
  history: {
    established: 1978,
    significance: '日本最古老、最著名的花火大会之一',
    highlights: [
      '传承江户时代花火文化',
      '两会场同时举办的独特形式', 
      '花火师技艺比拼的竞技性质',
      '与东京晴空塔共演的现代美景'
    ]
  },

  // 实用建议
  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午2点前到达占位',
        '花火结束后避开人流高峰',
        '关注官方网站确认举办状态'
      ]
    },
    {
      category: '必备物品',
      items: [
        '便携式椅子或野餐垫',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '交通建议',
      items: [
        '避免私家车，公共交通必备',
        '准备多个返程路线',
        '考虑步行到较远车站'
      ]
    }
  ],

  contact: {
    organizer: '隅田川花火大会实行委员会事务局',
    phone: '03-5608-1111',
    website: 'https://www.sumidagawa-hanabi.com/',
    socialMedia: 'X (Twitter): @sumidagawa_official'
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
  }
};

export default function SumidaDetailPage() {
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
            <span className="text-gray-800 font-medium">隅田川花火大会</span>
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
                      {sumidaData.status}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      免费观赏
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {sumidaData.name}
                  </h1>
                  <p className="text-gray-600 text-lg">{sumidaData.englishName}</p>
                </div>

                {/* 花火展示图片区域 */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 mb-6 text-center border border-blue-200">
                  <div className="text-8xl mb-4">🎆</div>
                  <p className="text-gray-700 text-sm">
                    隅田川花火大会精彩瞬间 - 传统与现代的完美融合
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
                      <span className="text-gray-800 font-semibold">{sumidaData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时间</span>
                      <span className="text-gray-800 font-semibold">{sumidaData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">发数</span>
                      <span className="text-blue-600 font-bold">{sumidaData.fireworksCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">预计人数</span>
                      <span className="text-gray-800 font-semibold">{sumidaData.expectedVisitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">持续时间</span>
                      <span className="text-gray-800 font-semibold">{sumidaData.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">联系信息</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">主办方</span>
                      <span className="text-gray-800">{sumidaData.contact.organizer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">电话</span>
                      <span className="text-gray-800">{sumidaData.contact.phone}</span>
                    </div>
                    <div>
                      <a 
                        href={sumidaData.contact.website} 
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
                      <span className="text-red-600">{sumidaData.mapInfo.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-gray-800 font-bold text-lg mb-4">天气提醒</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600 block">举办条件</span>
                      <span className="text-gray-800">{sumidaData.weatherInfo.rainPolicy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block">建议</span>
                      <span className="text-orange-600">{sumidaData.weatherInfo.note}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-blue-700 text-xs">💡 {sumidaData.weatherInfo.recommendation}</span>
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
                      隅田川花火大会是日本历史最悠久、最著名的花火大会之一，自1978年开始举办。
                      作为东京夏季的传统盛事，每年吸引约91万观众前来观赏。大会以其独特的两会场同时举办形式而闻名，
                      融合了传统江户花火文化与现代都市美景。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="text-gray-800 font-bold mb-3">历史意义</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {sumidaData.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="text-gray-800 font-bold mb-3">活动特色</h4>
                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>• 传统花火师技艺竞技</p>
                        <p>• 创新花火设计展示</p>
                        <p>• 东京晴空塔背景加成</p>
                        <p>• 免费观赏的公共活动</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'venues' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">会场信息</h3>
                  <div className="space-y-4">
                    {sumidaData.venues.map((venue, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{venue.name}</h4>
                          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                            {venue.startTime}开始
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">📍 {venue.location}</p>
                        <div className="space-y-2">
                          <p className="text-gray-800 text-sm font-medium">会场特色：</p>
                          <div className="flex flex-wrap gap-2">
                            {venue.features.map((feature, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.4!2d139.798!3d35.710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec1a84be245%3A0x4e1d9c2e6c8a8a1d!2z6Zm45LqL5bed!5e0!3m2!1szh-CN!2sjp!4v1703123456789!5m2!1szh-CN!2sjp"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="隅田川花火大会会场位置"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <h5 className="text-blue-700 font-semibold mb-1">第一会场</h5>
                        <p className="text-gray-800 text-sm">桜橋下流～言問橋上流</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <h5 className="text-green-700 font-semibold mb-1">第二会场</h5>
                        <p className="text-gray-800 text-sm">駒形橋下流～厩橋上流</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {sumidaData.access.map((venueAccess, index) => (
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
                                <span className="text-blue-600 font-bold">{station.walkTime}</span>
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
                      活动当天交通拥堵严重，建议避免自驾。结束后请耐心等待，避开人流高峰。
                      考虑步行至较远车站，或准备多个返程路线。
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'viewing' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">观赏攻略</h3>
                  <div className="space-y-4">
                    {sumidaData.viewingSpots.map((spot, index) => (
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
                              spot.crowdLevel === 'Very High' ? 'bg-red-100 text-red-700' :
                              spot.crowdLevel === 'High' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              人流：{spot.crowdLevel}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-blue-600 font-semibold mb-3">💡 {spot.tips}</p>
                        
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
                </div>
              )}

              {selectedTab === 'tips' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">实用建议</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sumidaData.tips.map((tipCategory, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">{tipCategory.category}</h4>
                        <ul className="space-y-2">
                          {tipCategory.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-blue-500 mt-1">•</span>
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

        {/* 相关推荐 */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">相关推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/hanabi/detail/edogawa" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  江戸川区花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">8月第一个周六 • 东京江戸川</p>
                <p className="text-gray-500 text-xs">同在东京的另一场重要花火大会</p>
              </Link>
              
              <Link href="/hanabi/detail/yokohama" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  横浜开港祭花火大会
                </h3>
                <p className="text-gray-600 text-sm mb-3">7月下旬 • 神奈川横浜港</p>
                <p className="text-gray-500 text-xs">港口城市的浪漫花火盛典</p>
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