// 花火大会数据结构类型定义

export interface HanabiStation {
  name: string;
  lines: string[];
  walkTime: string;
}

export interface HanabiVenue {
  name: string;
  location: string;
  startTime: string;
  features: string[];
}

export interface HanabiAccess {
  venue: string;
  stations: HanabiStation[];
}

export interface HanabiViewingSpot {
  name: string;
  rating: number;
  crowdLevel: string;
  tips: string;
  pros: string[];
  cons: string[];
}

export interface HanabiHistory {
  established: number;
  significance: string;
  highlights: string[];
}

export interface HanabiTipCategory {
  category: string;
  items: string[];
}

export interface HanabiContact {
  organizer: string;
  phone: string;
  website: string;
  socialMedia: string;
}

export interface HanabiMapInfo {
  hasMap: boolean;
  mapNote: string;
  parking: string;
}

export interface HanabiWeatherInfo {
  recommendation: string;
  rainPolicy: string;
  note: string;
}

export interface HanabiSpecialFeatures {
  scale?: string;
  location?: string;
  tradition?: string;
  atmosphere?: string;
  collaboration?: string;
}

export interface HanabiSpecial2025 {
  theme?: string;
  concept?: string;
  memorial?: string;
  features?: string[];
}

// 媒体内容类型定义
export interface HanabiMedia {
  type: 'video' | 'image';
  url: string;
  thumbnail?: string; // 视频缩略图
  title: string;
  description?: string;
  duration?: string; // 视频时长
  // 建议使用1:1比例（正方形）的媒体内容，适配手机和电脑
}

// 关联推荐项目类型
export interface HanabiRecommendation {
  id: string;
  name: string;
  date: string;
  location: string;
  visitors: string;
  link: string;
}

// 关联推荐集合类型
export interface HanabiRelated {
  regionRecommendations: HanabiRecommendation[]; // 同地区花火推荐
  timeRecommendations: HanabiRecommendation[];   // 同时间花火推荐
}

export interface HanabiData {
  id: string;
  name: string;
  englishName: string;
  year: number;
  date: string;
  time: string;
  duration: string;
  fireworksCount: string;
  expectedVisitors: string;
  weather: string;
  ticketPrice: string;
  status: string;
  ranking?: string;
  themeColor: string; // 主题颜色
  
  // 新增标签系统
  tags: {
    timeTag: string;    // 时间标签：7月、8月、9月、10月
    regionTag: string;  // 地区标签：东京都、神奈川县、千叶县等
    typeTag: string;    // 活动类型标签：花火
    layerTag: string;   // 层级标签：Layer 4详情页
  };
  
  // 关联推荐
  related: HanabiRelated;
  
  venues: HanabiVenue[];
  access: HanabiAccess[];
  viewingSpots: HanabiViewingSpot[];
  history: HanabiHistory;
  tips: HanabiTipCategory[];
  contact: HanabiContact;
  mapInfo: HanabiMapInfo;
  weatherInfo: HanabiWeatherInfo;
  specialFeatures?: HanabiSpecialFeatures;
  special2025?: HanabiSpecial2025;
  
  // 地图嵌入URL
  mapEmbedUrl?: string;
  
  // 媒体内容（视频和图片）
  media?: HanabiMedia[];
  
  // 月份（用于面包屑导航）
  month: number;
}

export interface Venue {
  name: string;
  location: string;
  startTime: string;
  features: string[];
}

export interface Access {
  venue: string;
  stations: HanabiStation[];
}

export interface Station {
  name: string;
  lines: string[];
  walkTime: string;
}

export interface ViewingSpot {
  name: string;
  rating: number;
  crowdLevel: 'Low' | 'Medium' | 'High' | 'Very High' | 'Controlled';
  tips: string;
  pros: string[];
  cons: string[];
}

export interface History {
  established: number;
  significance: string;
  highlights: string[];
}

export interface TipCategory {
  category: string;
  items: string[];
}

export interface MapInfo {
  hasMap: boolean;
  mapNote: string;
  parking: string;
}

export interface WeatherInfo {
  recommendation: string;
  rainPolicy: string;
  note: string;
}

export interface SpecialFeatures {
  scale: string;
  location: string;
  tradition: string;
  atmosphere: string;
} 