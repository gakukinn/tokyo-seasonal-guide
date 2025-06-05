#!/usr/bin/env node

/**
 * 新花火大会配置生成器
 * 交互式添加新的花火大会抓取配置
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function generateHanabiConfig() {
  console.log('🎆 新花火大会配置生成器\n');
  
  try {
    // 收集基本信息
    const id = await question('花火大会ID (英文，如: edogawa): ');
    const name = await question('花火大会中文名称: ');
    const officialUrl = await question('官方网站URL: ');
    
    console.log('\n📍 数据抓取配置 (CSS选择器)');
    console.log('提示：可以使用浏览器开发者工具查看页面元素');
    
    const dateSelector = await question('日期选择器 (默认: .date, :contains("開催日")): ') || '.date, :contains("開催日")';
    const timeSelector = await question('时间选择器 (默认: .time, :contains("時間")): ') || '.time, :contains("時間")';
    const visitorsSelector = await question('观众数选择器 (默认: :contains("来場者"), :contains("万人")): ') || ':contains("来場者"), :contains("万人")';
    const fireworksSelector = await question('花火数量选择器 (默认: :contains("発")): ') || ':contains("発")';
    
    // 生成配置
    const config = {
      [id]: {
        name: name,
        officialUrl: officialUrl,
        selectors: {
          date: dateSelector,
          time: timeSelector,
          visitors: visitorsSelector,
          fireworksCount: fireworksSelector,
          weather: ':contains("雨天"), :contains("中止"), :contains("延期")',
          venue: '.venue, :contains("会場")',
          access: ':contains("アクセス"), :contains("最寄り駅")'
        },
        dataFile: `src/data/level5-july-hanabi-tokyo-${id}.ts`,
        extractors: {
          dateExtractor: '(text) => { const match = text.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/); return match ? `${match[1]}年${match[2]}月${match[3]}日` : null; }',
          timeExtractor: '(text) => { const match = text.match(/(\\d{1,2}):(\\d{2})/); return match ? `${match[1]}:${match[2]}` : null; }',
          visitorsExtractor: '(text) => { const match = text.match(/(\\d+(?:\\.\\d+)?)万人/); return match ? `约${match[1]}万人` : null; }'
        }
      }
    };

    // 显示生成的配置
    console.log('\n✅ 生成的配置:');
    console.log('─'.repeat(50));
    console.log(JSON.stringify(config, null, 2));
    console.log('─'.repeat(50));

    const save = await question('\n💾 是否保存到 hanabi-auto-updater.js? (y/N): ');
    
    if (save.toLowerCase() === 'y' || save.toLowerCase() === 'yes') {
      await appendConfigToFile(id, config[id]);
      console.log(`✅ 配置已添加到 hanabi-auto-updater.js`);
      console.log(`📝 请检查生成的配置，并根据实际网站结构调整CSS选择器`);
    }

    const createDataFile = await question('📄 是否创建数据文件模板? (y/N): ');
    
    if (createDataFile.toLowerCase() === 'y' || createDataFile.toLowerCase() === 'yes') {
      await createDataFileTemplate(id, name);
      console.log(`✅ 数据文件模板已创建: src/data/level5-july-hanabi-tokyo-${id}.ts`);
    }

    console.log('\n🎯 下一步:');
    console.log(`1. 运行测试: node hanabi-auto-updater.js ${id}`);
    console.log(`2. 检查抓取结果并调整选择器`);
    console.log(`3. 创建页面文件: src/app/july/hanabi/tokyo/${id}/page.tsx`);

  } catch (error) {
    console.error('❌ 配置生成失败:', error.message);
  } finally {
    rl.close();
  }
}

async function appendConfigToFile(id, config) {
  const configFile = 'hanabi-auto-updater.js';
  
  if (!fs.existsSync(configFile)) {
    throw new Error('未找到 hanabi-auto-updater.js 文件');
  }

  let content = fs.readFileSync(configFile, 'utf8');
  
  // 找到配置对象的结束位置
  const configEndPattern = /};(\s*\/\/ 抓取配置定义结束|$)/;
  const match = content.match(configEndPattern);
  
  if (!match) {
    // 在 HANABI_CONFIGS 对象的最后一个条目后添加
    const insertPattern = /(,\s*)(}\s*;\s*$)/m;
    const insertMatch = content.match(insertPattern);
    
    if (insertMatch) {
      const newConfig = `,\n\n  ${id}: ${JSON.stringify(config, null, 4).replace(/^/gm, '  ')}`;
      content = content.replace(insertPattern, `${insertMatch[1]}${newConfig}${insertMatch[2]}`);
    }
  }

  // 创建备份
  fs.writeFileSync(`${configFile}.backup.${Date.now()}`, fs.readFileSync(configFile));
  
  // 写入更新后的文件
  fs.writeFileSync(configFile, content);
}

async function createDataFileTemplate(id, name) {
  const dataFile = `src/data/level5-july-hanabi-tokyo-${id}.ts`;
  
  // 确保目录存在
  const dir = path.dirname(dataFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const template = `import { HanabiData } from '../types/hanabi';

export const ${id}Data: HanabiData = {
  id: '${id}',
  name: '${name}',
  englishName: '${name} Fireworks Festival',
  year: 2025,
  date: '2025年7月26日(土)', // 将由自动更新器更新
  time: '19:00～20:30', // 将由自动更新器更新
  duration: '90分钟',
  fireworksCount: '约1万发', // 将由自动更新器更新
  expectedVisitors: '约30万人', // 将由自动更新器更新
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 关联推荐
  related: {
    regionRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川河川敷',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川河川敷',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      }
    ]
  },

  venues: [
    {
      name: '主会场',
      location: '待确认',
      startTime: '19:00',
      features: [
        '传统花火表演',
        '音乐同步表演',
        '地区特色展示'
      ]
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: '最近车站', 
          lines: ['待确认线路'], 
          walkTime: '徒步约分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '推荐观赏地点',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '建议提前到达占位',
      pros: ['视野较好', '交通便利'],
      cons: ['人流较多']
    }
  ],

  history: {
    established: 2000,
    significance: '地区重要的夏季庆典活动',
    highlights: [
      '传承地区传统文化',
      '促进社区交流',
      '夏季夜空的精彩表演'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午提前到达',
        '花火结束后避开人流高峰',
        '关注官方网站确认举办状态'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅',
        '充足的饮用水',
        '防蚊虫用品',
        '垃圾袋（保护环境）'
      ]
    }
  ],

  contact: {
    organizer: '${name}实行委员会',
    phone: '待确认',
    website: '官网URL将自动更新',
    socialMedia: '${name}官方SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '△ 建议使用公共交通工具'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '小雨决行（恶劣天气时中止）',
    note: '夏季请做好防暑准备'
  },

  specialFeatures: {
    scale: '地区规模花火大会',
    location: '待确认具体特色',
    tradition: '年度传统活动',
    atmosphere: '家庭友好的观赏氛围'
  }
};
`;

  fs.writeFileSync(dataFile, template);
}

// 执行主函数
generateHanabiConfig().catch(console.error); 