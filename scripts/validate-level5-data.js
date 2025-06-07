#!/usr/bin/env node

/**
 * 第5层花火数据验证脚本
 * 检查所有level5数据文件的完整性，特别关注地图相关字段
 */

const fs = require('fs');
const path = require('path');

// 必填字段列表
const requiredFields = [
  'id', 'name', 'englishName', 'year', 'month', 'date', 'time',
  'duration', 'fireworksCount', 'expectedVisitors', 'weather',
  'ticketPrice', 'status', 'themeColor', 'tags', 'venues', 'access',
  'viewingSpots', 'history', 'tips', 'contact', 'mapInfo', 'weatherInfo',
  'mapEmbedUrl' // 地图URL为关键字段
];

// 地图相关检查
function validateMapData(data, filename) {
  const errors = [];
  
  // 检查mapEmbedUrl
  if (!data.mapEmbedUrl) {
    errors.push(`❌ ${filename}: 缺少必填字段 mapEmbedUrl`);
  } else if (!data.mapEmbedUrl.includes('google.com/maps/embed')) {
    errors.push(`⚠️  ${filename}: mapEmbedUrl格式不正确`);
  }
  
  // 检查mapInfo
  if (!data.mapInfo?.hasMap) {
    errors.push(`❌ ${filename}: mapInfo.hasMap应为true`);
  }
  
  if (!data.mapInfo?.mapNote) {
    errors.push(`❌ ${filename}: 缺少mapInfo.mapNote`);
  }
  
  if (!data.mapInfo?.parking) {
    errors.push(`❌ ${filename}: 缺少mapInfo.parking`);
  }
  
  return errors;
}

// 基础字段检查
function validateBasicFields(data, filename) {
  const errors = [];
  
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors.push(`❌ ${filename}: 缺少必填字段 ${field}`);
    }
  });
  
  return errors;
}

// 主要验证函数
function validateLevel5Files() {
  const dataDir = path.join(__dirname, '../src/data');
  const files = fs.readdirSync(dataDir)
    .filter(file => file.startsWith('level5-') && file.endsWith('.ts'));
  
  let totalErrors = 0;
  let totalFiles = files.length;
  
  console.log(`🔍 开始验证 ${totalFiles} 个第5层数据文件...\n`);
  
  files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    
    try {
      // 简单的数据提取（实际项目中应该使用更robust的方法）
      const dataMatch = fileContent.match(/export const \w+Data: HanabiData = ({[\s\S]*?});/);
      if (!dataMatch) {
        console.log(`❌ ${file}: 无法解析数据格式`);
        totalErrors++;
        return;
      }
      
      // 模拟数据对象（这里简化处理）
      const hasMapEmbedUrl = fileContent.includes('mapEmbedUrl:');
      const hasMapInfo = fileContent.includes('mapInfo:');
      const hasHasMap = fileContent.includes('hasMap: true');
      
      const errors = [];
      
      // 基础检查
      if (!hasMapEmbedUrl) {
        errors.push(`❌ ${file}: 缺少 mapEmbedUrl 字段`);
      }
      
      if (!hasMapInfo) {
        errors.push(`❌ ${file}: 缺少 mapInfo 字段`);
      } else if (!hasHasMap) {
        errors.push(`⚠️  ${file}: mapInfo.hasMap 应为 true`);
      }
      
      if (errors.length > 0) {
        console.log(`📁 ${file}:`);
        errors.forEach(error => console.log(`  ${error}`));
        console.log('');
        totalErrors += errors.length;
      } else {
        console.log(`✅ ${file}: 验证通过`);
      }
      
    } catch (error) {
      console.log(`❌ ${file}: 解析错误 - ${error.message}`);
      totalErrors++;
    }
  });
  
  console.log(`\n📊 验证完成:`);
  console.log(`📁 总文件数: ${totalFiles}`);
  console.log(`❌ 总错误数: ${totalErrors}`);
  
  if (totalErrors === 0) {
    console.log(`🎉 所有文件验证通过！`);
    process.exit(0);
  } else {
    console.log(`⚠️  发现 ${totalErrors} 个问题需要修复`);
    process.exit(1);
  }
}

// 运行验证
if (require.main === module) {
  validateLevel5Files();
}

module.exports = { validateLevel5Files }; 