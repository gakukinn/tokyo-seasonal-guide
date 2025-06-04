// 备份 - 原始hanabi.ts类型定义 (2025-01-28)
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
  themeColor: string;
  month: number;

  venues: Venue[];
  access: Access[];
  viewingSpots: ViewingSpot[];
  history: History;
  tips: TipCategory[];
  contact: Contact;
  mapInfo: MapInfo;
  weatherInfo: WeatherInfo;
  specialFeatures: SpecialFeatures;
  mapEmbedUrl: string;
}

export interface Venue {
  name: string;
  location: string;
  startTime: string;
  features: string[];
}

export interface Access {
  venue: string;
  stations: Station[];
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

export interface Contact {
  organizer: string;
  phone: string;
  website: string;
  socialMedia: string;
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