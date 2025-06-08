const fs = require('fs');
const path = require('path');

// 导入路径映射
const importMappings = [
  {
    file: 'src/app/july/hanabi/chiba/marines-hanabi/page.tsx',
    oldImport: "import { marinesHanabiData } from '@/data/level5-july-hanabi-marines';",
    newImport: "import { marinesData } from '@/data/level5-july-hanabi-chiba-marines';",
    oldVariable: 'marinesHanabiData',
    newVariable: 'marinesData'
  },
  {
    file: 'src/app/july/hanabi/chiba/mother-farm-summer-night/page.tsx',
    oldImport: "import { motherfarmHanabiData } from '@/data/level5-july-hanabi-motherfarm';",
    newImport: "import { motherfarmData } from '@/data/level5-july-hanabi-chiba-motherfarm';",
    oldVariable: 'motherfarmHanabiData',
    newVariable: 'motherfarmData'
  },
  {
    file: 'src/app/july/hanabi/chiba/oamishirasato-hanabi/page.tsx',
    oldImport: "import { oamishirasatoHanabiData } from '@/data/level5-july-hanabi-oamishirasato';",
    newImport: "import { oamishirasatoData } from '@/data/level5-july-hanabi-chiba-oamishirasato';",
    oldVariable: 'oamishirasatoHanabiData',
    newVariable: 'oamishirasatoData'
  },
  {
    file: 'src/app/july/hanabi/kanagawa/seaparadise-hanabi-symphonia/page.tsx',
    oldImport: "import { seaparadiseHanabiData } from '@/data/level5-july-hanabi-seaparadise';",
    newImport: "import { seaparadiseData } from '@/data/level5-july-hanabi-kanagawa-seaparadise';",
    oldVariable: 'seaparadiseHanabiData',
    newVariable: 'seaparadiseData'
  },
  {
    file: 'src/app/july/hanabi/kanagawa/yokohama-night-flowers/page.tsx',
    oldImport: "import { nightflowersHanabiData } from '@/data/level5-july-hanabi-yokohama-night';",
    newImport: "import { nightflowersData } from '@/data/level5-july-hanabi-kanagawa-nightflowers';",
    oldVariable: 'nightflowersHanabiData',
    newVariable: 'nightflowersData'
  }
];

console.log('🔧 开始修复导入路径...');

importMappings.forEach(mapping => {
  const filePath = mapping.file;
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复导入语句
    content = content.replace(mapping.oldImport, mapping.newImport);
    
    // 修复变量使用
    content = content.replace(
      new RegExp(mapping.oldVariable, 'g'), 
      mapping.newVariable
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ 修复: ${filePath}`);
  } else {
    console.log(`❌ 文件不存在: ${filePath}`);
  }
});

// 处理九月东京页面
const septemberTokyoFile = 'src/app/september/hanabi/tokyo/page.tsx';
if (fs.existsSync(septemberTokyoFile)) {
  // 删除这个文件，因为对应的数据文件已被删除
  fs.unlinkSync(septemberTokyoFile);
  console.log(`🗑️ 删除无效页面: ${septemberTokyoFile}`);
}

console.log('✅ 导入路径修复完成！'); 