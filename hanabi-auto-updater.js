#!/usr/bin/env node

/**
 * 花火大会信息自动更新器
 * 从官网自动抓取最新信息，更新本地数据文件
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 抓取配置定义
const HANABI_CONFIGS = {
  sumida: {
    name: '隅田川花火大会',
    officialUrl: 'https://sumidagawa-hanabi.com/',
    selectors: {
      date: 'h2:contains("開催日"), .date, .schedule-date',
      time: '.time, .schedule-time, :contains("時間")',
      visitors: ':contains("来場者"), :contains("観客"), :contains("万人")',
      fireworksCount: ':contains("発"), :contains("玉")',
      weather: ':contains("雨天"), :contains("中止"), :contains("延期")',
      venue: '.venue, :contains("会場")',
      access: ':contains("アクセス"), :contains("最寄り駅")'
    },
    dataFile: 'src/data/level5-july-hanabi-tokyo-sumida.ts',
    extractors: {
      dateExtractor: (text) => {
        const match = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        return match ? `${match[1]}年${match[2]}月${match[3]}日` : null;
      },
      timeExtractor: (text) => {
        const match = text.match(/(\d{1,2}):(\d{2})/);
        return match ? `${match[1]}:${match[2]}` : null;
      },
      visitorsExtractor: (text) => {
        const match = text.match(/(\d+(?:\.\d+)?)万人/);
        return match ? `约${match[1]}万人` : null;
      }
    }
  },

  tachikawa: {
    name: '立川祭国営昭和纪念公园花火大会',
    officialUrl: 'https://hanabi.tokyo-tachikawa.org/',
    selectors: {
      date: '.event-date, h2:contains("日程")',
      time: '.event-time, :contains("開始時間")',
      visitors: ':contains("来場者数"), :contains("観客数")',
      fireworksCount: ':contains("約") + :contains("発")',
      ticketPrice: ':contains("料金"), :contains("有料")',
      venue: ':contains("会場"), .venue-name'
    },
    dataFile: 'src/data/level5-july-hanabi-tokyo-tachikawa.ts'
  },

  hachioji: {
    name: '八王子花火大会',
    officialUrl: 'https://www.hkc.or.jp/fireworks/',
    selectors: {
      date: '.date, :contains("開催日")',
      time: '.time, :contains("開始時間")',
      visitors: ':contains("観客数"), :contains("来場者")',
      venue: ':contains("富士森公園")',
      phone: ':contains("042-643-")'
    },
    dataFile: 'src/data/level5-july-hanabi-tokyo-hachioji.ts'
  },

  okutama: {
    name: '町制施行70周年記念 奥多摩納涼花火大会',
    officialUrl: 'https://www.town.okutama.tokyo.jp/',
    fallbackUrl: 'https://hanabi.walkerplus.com/detail/ar0313e00913/data.html',
    // 双重数据源配置
    sources: {
      primary: {
        url: 'https://www.town.okutama.tokyo.jp/',
        selectors: {
          date: 'h1, h2, h3, .news-title, .event-info',
          time: '.time, .schedule, .event-time',
          visitors: '.visitors, .attendance, .人出',
          fireworksCount: '.fireworks, .hanabi, .花火',
          venue: '.venue, .location, .会場',
          phone: 'a[href*="tel:"], .contact-phone'
        }
      },
      fallback: {
        url: 'https://hanabi.walkerplus.com/detail/ar0313e00913/data.html',
        selectors: {
          date: 'td',
          time: 'td', 
          visitors: 'td',
          fireworksCount: 'td',
          weather: 'td',
          venue: 'td',
          phone: 'td'
        }
      }
    },
    dataFile: 'src/data/level5-august-hanabi-tokyo-okutama.ts',
    extractors: {
      dateExtractor: (text) => {
        const match = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        return match ? `${match[1]}年${match[2]}月${match[3]}日` : null;
      },
      timeExtractor: (text) => {
        const match = text.match(/(\d{1,2}):(\d{2})(?:〜|～)(\d{1,2}):(\d{2})/);
        return match ? `${match[1]}:${match[2]}～${match[3]}:${match[4]}` : null;
      },
      visitorsExtractor: (text) => {
        const match = text.match(/約(\d+(?:\.\d+)?)万人/);
        return match ? `约${match[1]}万人` : null;
      },
      fireworksExtractor: (text) => {
        const match = text.match(/約(\d+)発/);
        return match ? `约${match[1]}发` : null;
      },
      phoneExtractor: (text) => {
        const match = text.match(/(\d{3,4}-\d{2,3}-\d{4})/);
        return match ? match[1] : null;
      }
    }
  }
};

class HanabiDataScraper {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async init() {
    console.log('🚀 启动浏览器...');
    this.browser = await puppeteer.launch({
      headless: false, // 设置为false便于调试
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // 设置用户代理，避免被识别为机器人
    await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  }

  async scrapeHanabiData(configKey) {
    const config = HANABI_CONFIGS[configKey];
    if (!config) {
      throw new Error(`未找到配置: ${configKey}`);
    }

    console.log(`\n📡 开始抓取: ${config.name}`);
    
    let finalData = {};
    
    // 双重数据源抓取策略
    if (config.sources) {
      // 1. 先从官网抓取
      console.log(`🎯 主要数据源: ${config.sources.primary.url}`);
      const primaryData = await this.scrapeFromSource(config.sources.primary);
      finalData = { ...primaryData };
      
      // 2. 从Walker Plus补充缺失数据
      console.log(`🔄 补充数据源: ${config.sources.fallback.url}`);
      const fallbackData = await this.scrapeFromSource(config.sources.fallback);
      
      // 合并数据，优先使用官网数据
      for (const [key, value] of Object.entries(fallbackData)) {
        if (!finalData[key] || finalData[key].trim() === '') {
          finalData[key] = value;
          console.log(`  🔗 从备用源补充 ${key}: ${value}`);
        }
      }
    } else {
      // 兼容旧配置格式
      console.log(`🌐 访问: ${config.officialUrl}`);
      finalData = await this.scrapeFromLegacyConfig(config);
    }

    // 应用自定义提取器
    if (config.extractors) {
      for (const [field, extractor] of Object.entries(config.extractors)) {
        const sourceField = field.replace('Extractor', '');
        if (finalData[sourceField]) {
          const extracted = extractor(finalData[sourceField]);
          if (extracted) {
            finalData[sourceField] = extracted;
            console.log(`  🔧 ${sourceField}: 处理后 -> ${extracted}`);
          }
        }
      }
    }

    return finalData;
  }

  async scrapeFromSource(source) {
    try {
      await this.page.goto(source.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });

      const extractedData = {};

      // 抓取基本信息
      for (const [field, selector] of Object.entries(source.selectors)) {
        try {
          // 尝试多个选择器（以逗号分隔）
          const selectors = selector.split(',').map(s => s.trim());
          let text = '';
          
          for (const sel of selectors) {
            const elements = await this.page.$$(sel);
            if (elements.length > 0) {
              // 获取所有匹配元素的文本
              const texts = await Promise.all(
                elements.map(el => this.page.evaluate(element => element.textContent.trim(), el))
              );
              
              // 寻找包含有用信息的文本
              for (const t of texts) {
                if (this.isRelevantText(field, t)) {
                  text = t;
                  break;
                }
              }
              
              if (text) break;
            }
          }
          
          if (text) {
            extractedData[field] = text;
            console.log(`  ✅ ${field}: ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`);
          } else {
            console.log(`  ❌ ${field}: 未找到相关信息`);
          }
        } catch (error) {
          console.log(`  ⚠️ ${field}: 抓取失败 - ${error.message}`);
        }
      }

      return extractedData;

    } catch (error) {
      console.error(`❌ 从 ${source.url} 抓取失败: ${error.message}`);
      return {};
    }
  }

  // 判断文本是否与字段相关
  isRelevantText(field, text) {
    const keywords = {
      date: ['2025年', '月', '日', '開催'],
      time: [':', '時', '分', '19:', '20:'],
      visitors: ['万人', '観客', '来場'],
      fireworksCount: ['発', '花火', '打ち上げ'],
      phone: ['-', '0428', '042'],
      venue: ['会場', '広場', '公園'],
      weather: ['雨天', '延期', '中止']
    };

    if (!keywords[field]) return text.length > 0;
    
    return keywords[field].some(keyword => text.includes(keyword));
  }

  async scrapeFromLegacyConfig(config) {
    try {
      await this.page.goto(config.officialUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });

      const extractedData = {};

      for (const [field, selector] of Object.entries(config.selectors)) {
        try {
          const element = await this.page.$(selector);
          if (element) {
            const text = await this.page.evaluate(el => el.textContent.trim(), element);
            extractedData[field] = text;
            console.log(`  ✅ ${field}: ${text}`);
          } else {
            console.log(`  ❌ ${field}: 未找到`);
          }
        } catch (error) {
          console.log(`  ⚠️ ${field}: 抓取失败 - ${error.message}`);
        }
      }

      return extractedData;
    } catch (error) {
      console.error(`❌ 抓取失败: ${error.message}`);
      return {};
    }
  }

  async updateDataFile(configKey, extractedData) {
    const config = HANABI_CONFIGS[configKey];
    const dataFilePath = config.dataFile;

    console.log(`\n📝 准备更新数据文件: ${dataFilePath}`);

    try {
      // 读取现有数据文件
      if (!fs.existsSync(dataFilePath)) {
        console.error(`❌ 数据文件不存在: ${dataFilePath}`);
        return false;
      }

      let fileContent = fs.readFileSync(dataFilePath, 'utf8');
      
      // 更新数据字段
      const updates = [];
      
      if (extractedData.date) {
        const newDate = `date: '${extractedData.date}',`;
        fileContent = fileContent.replace(/date: '[^']*',/, newDate);
        updates.push(`日期: ${extractedData.date}`);
      }

      if (extractedData.time) {
        const newTime = `time: '${extractedData.time}',`;
        fileContent = fileContent.replace(/time: '[^']*',/, newTime);
        updates.push(`时间: ${extractedData.time}`);
      }

      if (extractedData.visitors) {
        const newVisitors = `expectedVisitors: '${extractedData.visitors}',`;
        fileContent = fileContent.replace(/expectedVisitors: '[^']*',/, newVisitors);
        updates.push(`观众数: ${extractedData.visitors}`);
      }

      // 创建备份
      const backupPath = `${dataFilePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, fs.readFileSync(dataFilePath));
      console.log(`💾 已创建备份: ${backupPath}`);

      // 写入更新后的文件
      fs.writeFileSync(dataFilePath, fileContent);
      
      if (updates.length > 0) {
        console.log(`✅ 文件更新成功! 更新内容:`);
        updates.forEach(update => console.log(`   - ${update}`));
      } else {
        console.log(`ℹ️ 未找到需要更新的数据`);
      }

      return true;

    } catch (error) {
      console.error(`❌ 文件更新失败: ${error.message}`);
      return false;
    }
  }

  async scrapeAll() {
    console.log('🌟 开始批量抓取所有花火大会信息...\n');
    
    const results = {};
    
    for (const configKey of Object.keys(HANABI_CONFIGS)) {
      try {
        const data = await this.scrapeHanabiData(configKey);
        if (data) {
          results[configKey] = data;
          await this.updateDataFile(configKey, data);
        }
        
        // 等待2秒，避免频繁请求
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.error(`❌ ${configKey} 处理失败: ${error.message}`);
      }
    }

    return results;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('\n🔚 浏览器已关闭');
    }
  }
}

// 主执行函数
async function main() {
  const scraper = new HanabiDataScraper();
  
  try {
    await scraper.init();
    
    // 获取命令行参数
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      // 没有参数，抓取所有
      console.log('📋 将抓取所有花火大会信息...');
      await scraper.scrapeAll();
    } else {
      // 指定抓取某个花火大会
      const target = args[0];
      if (HANABI_CONFIGS[target]) {
        console.log(`🎯 指定抓取: ${target}`);
        const data = await scraper.scrapeHanabiData(target);
        if (data) {
          await scraper.updateDataFile(target, data);
        }
      } else {
        console.error(`❌ 未找到配置: ${target}`);
        console.log('可用配置:', Object.keys(HANABI_CONFIGS).join(', '));
      }
    }
    
  } catch (error) {
    console.error('💥 运行失败:', error);
  } finally {
    await scraper.close();
  }
}

// 如果直接执行此文件
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { HanabiDataScraper, HANABI_CONFIGS }; 