const fs = require('fs');

console.log('🔍 四层花火页面检查\n');

const pages = [
  ['七月东京', 'src/app/july/hanabi/tokyo/page.tsx', 'src/data/level4-july-tokyo-hanabi.ts'],
  ['七月埼玉', 'src/app/july/hanabi/saitama/page.tsx', 'src/data/level4-july-saitama-hanabi.ts'],
  ['七月千叶', 'src/app/july/hanabi/chiba/page.tsx', 'src/data/level4-july-chiba-hanabi.ts'],
  ['七月神奈川', 'src/app/july/hanabi/kanagawa/page.tsx', 'src/data/level4-july-kanagawa-hanabi.ts'],
  ['七月北关东', 'src/app/july/hanabi/kitakanto/page.tsx', 'src/data/level4-july-kitakanto-hanabi.ts'],
  ['七月甲信越', 'src/app/july/hanabi/koshinetsu/page.tsx', 'src/data/level4-july-koshinetsu-hanabi.ts'],
  ['八月东京', 'src/app/august/hanabi/tokyo/page.tsx', 'src/data/level4-august-tokyo-hanabi.ts'],
  ['八月埼玉', 'src/app/august/hanabi/saitama/page.tsx', 'src/data/level4-august-saitama-hanabi.ts'],
  ['八月千叶', 'src/app/august/hanabi/chiba/page.tsx', 'src/data/level4-august-chiba-hanabi.ts'],
  ['八月神奈川', 'src/app/august/hanabi/kanagawa/page.tsx', 'src/data/level4-august-kanagawa-hanabi.ts'],
  ['八月北关东', 'src/app/august/hanabi/kitakanto/page.tsx', 'src/data/level4-august-kitakanto-hanabi.ts'],
  ['八月甲信越', 'src/app/august/hanabi/koshinetsu/page.tsx', 'src/data/level4-august-koshinetsu-hanabi.ts']
];

let passed = 0;
let total = 0;

pages.forEach(([name, pagePath, dataPath]) => {
  total++;
  const pageExists = fs.existsSync(pagePath);
  const dataExists = fs.existsSync(dataPath);
  
  if (pageExists && dataExists) {
    console.log(`✅ ${name} - 页面和数据完整`);
    passed++;
  } else {
    console.log(`❌ ${name} - ${!pageExists ? '缺页面' : ''} ${!dataExists ? '缺数据' : ''}`);
  }
});

console.log(`\n📊 总结: ${passed}/${total} 通过 (${Math.round(passed/total*100)}%)`);

if (passed === total) {
  console.log('�� 所有四层页面检查通过！');
} 