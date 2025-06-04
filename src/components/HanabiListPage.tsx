import Link from 'next/link';
import { sumidaData } from '../data/sumida';
import { setagayaData } from '../data/setagaya';
import { jinguData } from '../data/jingu';
import { chofuData } from '../data/chofu';
import { tachikawaData } from '../data/tachikawa';
import { itabashiData } from '../data/itabashi';
import { tokyoRacecourseData } from '../data/tokyo-racecourse';
import { katsushikaData } from '../data/katsushika';
import { edogawaData } from '../data/edogawa';
import { HanabiData } from '../types/hanabi';

// 按时间顺序排列所有花火大会数据
const allHanabiData: HanabiData[] = [
  tokyoRacecourseData,  // 7月2日
  tachikawaData,        // 7月12日
  katsushikaData,       // 7月22日
  sumidaData,           // 7月26日
  itabashiData,         // 8月2日
  edogawaData,          // 8月2日
  jinguData,            // 8月9日
  chofuData,            // 9月6日
  setagayaData,         // 10月4日
];

export default function HanabiListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 - 增强对比度 */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              东京花火大会 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-6 font-medium">
              夏日绚烂，夜空盛典 - 体验江户传统文化魅力
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/30 text-white px-4 py-2 rounded-full font-semibold">
                🎆 9大花火大会
              </span>
              <span className="bg-white/30 text-white px-4 py-2 rounded-full font-semibold">
                📅 7月-10月
              </span>
              <span className="bg-white/30 text-white px-4 py-2 rounded-full font-semibold">
                👥 累计观众超500万人
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 花火大会列表 - 优化对比度 */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            按时间顺序排列
          </h2>
          <p className="text-gray-700 text-lg">
            点击查看详细信息，包括观赏地点、交通方式、购票信息等
          </p>
        </div>

        <div className="grid gap-6">
          {allHanabiData.map((hanabi) => (
            <Link
              key={hanabi.id}
              href={`/hanabi/detail/${hanabi.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* 左侧信息 - 增强文字对比度 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                          hanabi.month === 7 ? 'bg-orange-200 text-orange-900' :
                          hanabi.month === 8 ? 'bg-red-200 text-red-900' :
                          hanabi.month === 9 ? 'bg-amber-200 text-amber-900' :
                          'bg-purple-200 text-purple-900'
                        }`}>
                          {hanabi.month}月
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {hanabi.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {hanabi.name}
                      </h3>
                      
                      <p className="text-gray-700 mb-3 font-medium">
                        {hanabi.englishName}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-800">
                          🎆 <strong className="text-gray-900">{hanabi.fireworksCount}</strong>
                        </span>
                        <span className="flex items-center gap-1 text-gray-800">
                          👥 <strong className="text-gray-900">{hanabi.expectedVisitors}</strong>
                        </span>
                        <span className="flex items-center gap-1 text-gray-800">
                          ⏰ <strong className="text-gray-900">{hanabi.duration}</strong>
                        </span>
                        <span className="flex items-center gap-1 text-gray-800">
                          💺 <strong className="text-gray-900">{hanabi.ticketPrice}</strong>
                        </span>
                      </div>
                    </div>

                    {/* 右侧状态和箭头 - 增强对比度 */}
                    <div className="flex flex-col items-end gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        hanabi.status.includes('确认') ? 'bg-green-200 text-green-900' :
                        hanabi.status.includes('代表') ? 'bg-blue-200 text-blue-900' :
                        'bg-gray-200 text-gray-900'
                      }`}>
                        {hanabi.status}
                      </span>
                      
                      <div className="flex items-center text-blue-700 group-hover:text-blue-900 transition-colors">
                        <span className="text-sm font-bold mr-2">查看详情</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 底部特色信息 - 增强对比度 */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {hanabi.venues.slice(0, 3).map((venue, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {venue.name}
                        </span>
                      ))}
                      {hanabi.venues.length > 3 && (
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{hanabi.venues.length - 3}个会场
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部提示 - 增强对比度 */}
        <div className="mt-12 bg-blue-100 rounded-lg p-6 text-center border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            观赏花火大会小贴士
          </h3>
          <p className="text-blue-800 mb-4 font-medium">
            建议提前查看天气预报，携带防潮垫和雨具，利用公共交通前往
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-bold">
              💡 提前2-3小时到达
            </span>
            <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-bold">
              🚊 推荐公共交通
            </span>
            <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-bold">
              🎫 有料席需提前购买
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 