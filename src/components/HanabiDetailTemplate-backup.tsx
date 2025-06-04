// 备份 - 原始HanabiDetailTemplate.tsx (2025-01-28)
'use client';

import React, { useState } from 'react';
import { HanabiData } from '../types/hanabi-backup';

interface Props {
  data: HanabiData;
}

export default function HanabiDetailTemplateBackup({ data }: Props) {
  const [selectedTab, setSelectedTab] = useState('overview');

  const getThemeClasses = () => {
    const baseClasses = 'bg-blue-50 border-blue-200 text-blue-800';
    return baseClasses;
  };

  const themeClasses = getThemeClasses();

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
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{data.englishName}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${themeClasses}`}>
                📅 {data.date}
              </span>
              <span className={`px-3 py-1 rounded-full ${themeClasses}`}>
                ⏰ {data.time}
              </span>
              <span className={`px-3 py-1 rounded-full ${themeClasses}`}>
                🎆 {data.fireworksCount}
              </span>
              <span className={`px-3 py-1 rounded-full ${themeClasses}`}>
                👥 {data.expectedVisitors}
              </span>
              <span className={`px-3 py-1 rounded-full ${themeClasses}`}>
                🎫 {data.ticketPrice}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: '概要', icon: '📋' },
              { id: 'venues', label: '会场', icon: '📍' },
              { id: 'access', label: '交通', icon: '🚇' },
              { id: 'spots', label: '观赏点', icon: '👀' },
              { id: 'tips', label: '攻略', icon: '💡' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                {/* 特色亮点 */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">🌟 特色亮点</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${themeClasses.replace('border-blue-200', 'border-l-4 border-l-blue-500')}`}>
                      <h3 className="font-medium mb-2">规模</h3>
                      <p className="text-sm">{data.specialFeatures.scale}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${themeClasses.replace('border-blue-200', 'border-l-4 border-l-blue-500')}`}>
                      <h3 className="font-medium mb-2">地点</h3>
                      <p className="text-sm">{data.specialFeatures.location}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${themeClasses.replace('border-blue-200', 'border-l-4 border-l-blue-500')}`}>
                      <h3 className="font-medium mb-2">传统</h3>
                      <p className="text-sm">{data.specialFeatures.tradition}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${themeClasses.replace('border-blue-200', 'border-l-4 border-l-blue-500')}`}>
                      <h3 className="font-medium mb-2">氛围</h3>
                      <p className="text-sm">{data.specialFeatures.atmosphere}</p>
                    </div>
                  </div>
                </div>

                {/* 历史背景 */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">📚 历史背景</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${themeClasses}`}>
                        创办于 {data.history.established}年
                      </span>
                    </div>
                    <p className="text-gray-700">{data.history.significance}</p>
                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-900">主要亮点：</h3>
                      <ul className="space-y-1">
                        {data.history.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'venues' && (
              <div className="space-y-6">
                {/* 会场信息 */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">📍 会场信息</h2>
                  <div className="space-y-6">
                    {data.venues.map((venue, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${themeClasses.replace('bg-blue-50', 'bg-white')}`}>
                        <h3 className="font-semibold text-gray-900 mb-2">{venue.name}</h3>
                        <p className="text-gray-600 mb-3">📍 {venue.location}</p>
                        <p className="text-gray-600 mb-3">🕐 开始时间：{venue.startTime}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">特色:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {venue.features.map((feature, featIndex) => (
                              <div key={featIndex} className="flex items-center space-x-2">
                                <span className="text-blue-500">✨</span>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 地图 */}
                {data.mapInfo.hasMap && (
                  <div id="map-section" className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">🗺️ 地图位置</h2>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={data.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{data.mapInfo.mapNote}</p>
                  </div>
                )}
              </div>
            )}

            {selectedTab === 'access' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">🚇 交通方式</h2>
                  <div className="space-y-6">
                    {data.access.map((accessInfo, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="font-semibold text-gray-900">{accessInfo.venue}</h3>
                        <div className="grid gap-4">
                          {accessInfo.stations.map((station, stationIndex) => (
                            <div key={stationIndex} className={`p-4 rounded-lg ${themeClasses.replace('bg-blue-50', 'bg-gray-50')} border`}>
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                                <div>
                                  <h4 className="font-medium text-gray-900">{station.name}</h4>
                                  <div className="flex flex-wrap gap-2 mt-1">
                                    {station.lines.map((line, lineIndex) => (
                                      <span key={lineIndex} className={`px-2 py-1 text-xs rounded ${themeClasses}`}>
                                        {line}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                  🚶 {station.walkTime}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 停车信息 */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">🚗 停车信息</h2>
                  <div className={`p-4 rounded-lg ${themeClasses}`}>
                    <p>{data.mapInfo.parking}</p>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'spots' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">👀 观赏点推荐</h2>
                  <div className="space-y-4">
                    {data.viewingSpots.map((spot, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{spot.name}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <div className="flex items-center">
                                <span className="text-yellow-400">
                                  {'★'.repeat(spot.rating)}{'☆'.repeat(5-spot.rating)}
                                </span>
                                <span className="text-sm text-gray-600 ml-1">({spot.rating}/5)</span>
                              </div>
                              <span className={`px-2 py-1 rounded text-xs ${
                                spot.crowdLevel === 'Low' ? 'bg-green-100 text-green-800' :
                                spot.crowdLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                spot.crowdLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                                spot.crowdLevel === 'Very High' ? 'bg-red-100 text-red-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {spot.crowdLevel === 'Controlled' ? '管制入场' : `拥挤度: ${spot.crowdLevel}`}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{spot.tips}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">👍 优点:</h4>
                            <ul className="space-y-1">
                              {spot.pros.map((pro, proIndex) => (
                                <li key={proIndex} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-green-500 mr-2">+</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-700 mb-2">👎 缺点:</h4>
                            <ul className="space-y-1">
                              {spot.cons.map((con, conIndex) => (
                                <li key={conIndex} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-red-500 mr-2">-</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'tips' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">💡 实用攻略</h2>
                  <div className="space-y-6">
                    {data.tips.map((tipCategory, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-3">{tipCategory.category}</h3>
                        <div className="grid gap-3">
                          {tipCategory.items.map((item, itemIndex) => (
                            <div key={itemIndex} className={`p-3 rounded-lg ${themeClasses.replace('bg-blue-50', 'bg-gray-50')} border-l-4 border-blue-500`}>
                              <p className="text-sm text-gray-700">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* 基本信息 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">📊 基本信息</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">日期</span>
                  <span className="font-medium">{data.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">时间</span>
                  <span className="font-medium">{data.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">时长</span>
                  <span className="font-medium">{data.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">花火数</span>
                  <span className="font-medium">{data.fireworksCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">预计人数</span>
                  <span className="font-medium">{data.expectedVisitors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">门票</span>
                  <span className="font-medium">{data.ticketPrice}</span>
                </div>
              </div>
            </div>

            {/* 天气信息 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">🌤️ 天气信息</h2>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${themeClasses}`}>
                  <p className="text-sm font-medium mb-1">雨天政策</p>
                  <p className="text-sm">{data.weatherInfo.rainPolicy}</p>
                </div>
                <div className={`p-3 rounded-lg ${themeClasses}`}>
                  <p className="text-sm font-medium mb-1">建议</p>
                  <p className="text-sm">{data.weatherInfo.recommendation}</p>
                </div>
                {data.weatherInfo.note && (
                  <div className={`p-3 rounded-lg ${themeClasses}`}>
                    <p className="text-sm font-medium mb-1">注意事项</p>
                    <p className="text-sm">{data.weatherInfo.note}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 联系信息 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">📞 联系信息</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">主办方</p>
                  <p className="font-medium">{data.contact.organizer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">电话</p>
                  <p className="font-medium">{data.contact.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">官网</p>
                  <a href={data.contact.website} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800 text-sm">
                    {data.contact.website}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600">社交媒体</p>
                  <p className="font-medium">{data.contact.socialMedia}</p>
                </div>
              </div>
            </div>

            {/* 快速查看地图 */}
            {data.mapInfo.hasMap && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">🗺️ 快速导航</h2>
                <button
                  onClick={handleMapClick}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  查看详细地图
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 