// 联盟营销链接配置
export const affiliateLinks = {
  // 酒店预订
  hotels: {
    booking: {
      name: "Booking.com",
      baseUrl: "https://www.booking.com/searchresults.zh-cn.html",
      params: "aid=YOUR_BOOKING_ID", // 需要申请Booking.com联盟ID
    },
    agoda: {
      name: "Agoda",
      baseUrl: "https://www.agoda.com/zh-cn/",
      params: "cid=YOUR_AGODA_ID", // 需要申请Agoda联盟ID
    }
  },
  
  // 交通票券
  transport: {
    jrPass: {
      name: "JR Pass 日本铁路通票",
      url: "https://affiliate-link-to-jr-pass",
      description: "7日/14日/21日通票，日本全境JR线路任意乘坐"
    },
    tokyoMetro: {
      name: "东京地铁48小时票",
      url: "https://affiliate-link-to-metro-pass",
      description: "48小时内东京Metro地铁全线任意乘坐"
    }
  },
  
  // 旅游保险
  insurance: {
    worldNomads: {
      name: "World Nomads 旅游保险",
      url: "https://affiliate-link-to-insurance",
      description: "专业旅游保险，医疗、行李、取消保障"
    }
  },
  
  // 体验活动
  experiences: {
    klook: {
      name: "Klook 客路",
      baseUrl: "https://www.klook.com/zh-CN/",
      params: "aid=YOUR_KLOOK_ID", // 需要申请Klook联盟ID
    },
    viator: {
      name: "Viator 旅游体验",
      baseUrl: "https://www.viator.com/",
      params: "aid=YOUR_VIATOR_ID", // 需要申请Viator联盟ID
    }
  }
}

// 生成带联盟参数的URL
export function generateAffiliateUrl(
  provider: keyof typeof affiliateLinks.hotels | keyof typeof affiliateLinks.experiences,
  location?: string,
  checkIn?: string,
  checkOut?: string
): string {
  // 根据不同提供商生成相应的联盟链接
  // 这里需要根据实际的联盟计划要求来实现
  const baseConfig = affiliateLinks.hotels[provider as keyof typeof affiliateLinks.hotels] || 
                     affiliateLinks.experiences[provider as keyof typeof affiliateLinks.experiences];
  
  if (!baseConfig) return '';
  
  let url = baseConfig.baseUrl;
  
  // 添加位置参数
  if (location) {
    url += `?dest_id=LOCATION_ID&dest_type=city`;
  }
  
  // 添加日期参数
  if (checkIn && checkOut) {
    url += `&checkin=${checkIn}&checkout=${checkOut}`;
  }
  
  // 添加联盟参数
  url += `&${baseConfig.params}`;
  
  return url;
} 