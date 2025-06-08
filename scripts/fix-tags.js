const fs = require('fs');
const path = require('path');

console.log('🔧 五层页面标签自动修复系统\n');

class TagFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.stats = {
      totalFiles: 0,
      fixedFiles: 0,
      errorFiles: 0
    };
    
    // 地区标签映射
    this.regionMapping = {
      'tokyo': '东京',
      'saitama': '埼玉', 
      'chiba': '千叶',
      'kanagawa': '神奈川',
      'kitakanto': '北关东',
      'koshinetsu': '甲信越'
    };
    
    // 月份标签映射
    this.monthMapping = {
      'july': '7月',
      'august': '8月', 
      'september': '9月'
    };
    
    // 需要修复的错误地区名称映射
    this.regionFixMapping = {
      '东京都': '东京',
      '埼玉县': '埼玉',
      '千叶县': '千叶',
      '神奈川县': '神奈川',
      '茨城县': '北关东',
      '群马县': '北关东',
      '栃木县': '北关东',
      '新潟县': '甲信越',
      '长野县': '甲信越',
      '山梨县': '甲信越',
      '茨城県': '北关东',
      '群馬県': '北关东',
      '栃木県': '北关东'
    };
    
    // 基于地名的地区推断
    this.locationToRegion = {
      // 东京
      '东京': '东京', '新宿': '东京', '涩谷': '东京', '池袋': '东京', '银座': '东京',
      '秋叶原': '东京', '浅草': '东京', '上野': '东京', '品川': '东京', '立川': '东京',
      '八王子': '东京', '调布': '东京', '三鹰': '东京', '武蔵野': '东京', '府中': '东京',
      '昭岛': '东京', '町田': '东京', '小平': '东京', '日野': '东京', '东村山': '东京',
      '国分寺': '东京', '国立': '东京', '福生': '东京', '狛江': '东京', '东大和': '东京',
      '清瀬': '东京', '东久留米': '东京', '武蔵村山': '东京', '多摩': '东京', '稻城': '东京',
      '羽村': '东京', '青梅': '东京', '西东京': '东京', '瑞穗': '东京', '日之出': '东京',
      '檜原': '东京', '奥多摩': '东京', '大岛': '东京', '利岛': '东京', '新岛': '东京',
      '神津岛': '东京', '三宅岛': '东京', '御蔵岛': '东京', '八丈岛': '东京', '青岛': '东京',
      '小笠原': '东京', '神宫外苑': '东京', '葛饰': '东京', '江户川': '东京', '板桥': '东京',
      '神津': '东京', '小津': '东京',
      
      // 埼玉
      '埼玉': '埼玉', '浦和': '埼玉', '大宫': '埼玉', '川口': '埼玉', '川越': '埼玉',
      '所沢': '埼玉', '春日部': '埼玉', '狭山': '埼玉', '上尾': '埼玉', '草加': '埼玉',
      '越谷': '埼玉', '蕨': '埼玉', '戸田': '埼玉', '入间': '埼玉', '朝霞': '埼玉',
      '志木': '埼玉', '和光': '埼玉', '新座': '埼玉', '桶川': '埼玉', '久喜': '埼玉',
      '北本': '埼玉', '八潮': '埼玉', '富士见': '埼玉', '三郷': '埼玉', '莲田': '埼玉',
      '坂戸': '埼玉', '幸手': '埼玉', '鹤岛': '埼玉', '日高': '埼玉', '吉川': '埼玉',
      '白冈': '埼玉', '伊奈': '埼玉', '三芳': '埼玉', '毛吕山': '埼玉', '越生': '埼玉',
      '滑川': '埼玉', '嵐山': '埼玉', '小川': '埼玉', '川岛': '埼玉', '吉见': '埼玉',
      '鸠山': '埼玉', '东松山': '埼玉', '熊谷': '埼玉', '行田': '埼玉', '秩父': '埼玉',
      '飯能': '埼玉', '加须': '埼玉', '本庄': '埼玉', '羽生': '埼玉', '鸿巢': '埼玉',
      '深谷': '埼玉', '上里': '埼玉', '美里': '埼玉', '神川': '埼玉', '上野': '埼玉',
      '寄居': '埼玉', '宫代': '埼玉', '杉戸': '埼玉', '松伏': '埼玉', '岩槻': '埼玉',
      '大麻生': '埼玉', '西武园': '埼玉', '梅兹塔': '埼玉', '飯能': '埼玉',
      
      // 千叶
      '千叶': '千叶', '市川': '千叶', '船橋': '千叶', '松戸': '千叶', '野田': '千叶',
      '茂原': '千叶', '成田': '千叶', '佐倉': '千叶', '东金': '千叶', '旭': '千叶',
      '习志野': '千叶', '柏': '千叶', '勝浦': '千叶', '市原': '千叶', '流山': '千叶',
      '八千代': '千叶', '我孙子': '千叶', '鸭川': '千叶', '镰谷': '千叶', '君津': '千叶',
      '富津': '千叶', '浦安': '千叶', '四街道': '千叶', '袖浦': '千叶', '八街': '千叶',
      '印西': '千叶', '白井': '千叶', '富里': '千叶', '南房总': '千叶', '匝瑳': '千叶',
      '香取': '千叶', '山武': '千叶', '大网白里': '千叶', '酒々井': '千叶', '荣': '千叶',
      '神崎': '千叶', '多古': '千叶', '东庄': '千叶', '九十九里': '千叶', '芝山': '千叶',
      '横芝光': '千叶', '一宫': '千叶', '睦沢': '千叶', '长生': '千叶', '白子': '千叶',
      '长柄': '千叶', '长南': '千叶', '大多喜': '千叶', '御宿': '千叶', '鋸南': '千叶',
      '铫子': '千叶', '木更津': '千叶', '幕张': '千叶', '成东': '千叶', '手贺沼': '千叶',
      '母亲牧场': '千叶', '白浜': '千叶', '小见川': '千叶',
      
      // 神奈川
      '神奈川': '神奈川', '横滨': '神奈川', '川崎': '神奈川', '相模原': '神奈川', '横须贺': '神奈川',
      '平塚': '神奈川', '镰仓': '神奈川', '藤沽': '神奈川', '小田原': '神奈川', '茅崎': '神奈川',
      '逗子': '神奈川', '三浦': '神奈川', '秦野': '神奈川', '厚木': '神奈川', '大和': '神奈川',
      '伊势原': '神奈川', '海老名': '神奈川', '座间': '神奈川', '南足柄': '神奈川', '绫濑': '神奈川',
      '叶山': '神奈川', '寒川': '神奈川', '大矶': '神奈川', '二宫': '神奈川', '中井': '神奈川',
      '大井': '神奈川', '松田': '神奈川', '山北': '神奈川', '开成': '神奈川', '箱根': '神奈川',
      '真鹤': '神奈川', '湯河原': '神奈川', '爱川': '神奈川', '清川': '神奈川', '相模湖': '神奈川',
      '津久井': '神奈川', '相模': '神奈川', '酒匂川': '神奈川', '久里浜': '神奈川',
      '八景岛': '神奈川', '茅崎南': '神奈川',
      
      // 北关东（茨城、栃木、群马）
      '水戸': '北关东', '日立': '北关东', '土浦': '北关东', '古河': '北关东', '石冈': '北关东',
      '结城': '北关东', '龙崎': '北关东', '下妻': '北关东', '常总': '北关东', '常陆太田': '北关东',
      '高萩': '北关东', '北茨城': '北关东', '笠间': '北关东', '取手': '北关东', '牛久': '北关东',
      '筑波': '北关东', '日立那珂': '北关东', '鹿嶋': '北关东', '潮来': '北关东', '守谷': '北关东',
      '常陆大宫': '北关东', '那珂': '北关东', '筑西': '北关东', '坂东': '北关东', '稻敷': '北关东',
      '桝田': '北关东', '神栖': '北关东', '行方': '北关东', '鉾田': '北关东', '筑波未来': '北关东',
      '宇都宫': '北关东', '足利': '北关东', '栃木': '北关东', '佐野': '北关东', '鹿沼': '北关东',
      '日光': '北关东', '小山': '北关东', '真冈': '北关东', '大田原': '北关东', '矢板': '北关东',
      '那须塩原': '北关东', '樱': '北关东', '那须乌山': '北关东', '下野': '北关东',
      '前桥': '北关东', '高崎': '北关东', '桐生': '北关东', '伊势崎': '北关东', '太田': '北关东',
      '沼田': '北关东', '馆林': '北关东', '渋川': '北关东', '藤冈': '北关东', '富冈': '北关东',
      '安中': '北关东', '绿': '北关东', '玉村': '北关东', '板仓': '北关东', '明和': '北关东',
      '千代田': '北关东', '大泉': '北关东', '邑楽': '北关东', '茨城': '北关东', '栃木': '北关东',
      '群马': '北关东', '常陆': '北关东', '利根': '北关东', '鬼怒川': '北关东', '大洗': '北关东',
      '常总': '北关东', '取手': '北关东', '龙湖': '北关东',
      
      // 甲信越（山梨、长野、新潟）
      '甲府': '甲信越', '富士吉田': '甲信越', '都留': '甲信越', '山梨': '甲信越', '大月': '甲信越',
      '韭崎': '甲信越', '南阿尔卑斯': '甲信越', '北杜': '甲信越', '甲斐': '甲信越', '笛吹': '甲信越',
      '甲州': '甲信越', '中央': '甲信越', '市川三郷': '甲信越', '早川': '甲信越', '身延': '甲信越',
      '南部': '甲信越', '富士川': '甲信越', '昭和': '甲信越', '道志': '甲信越', '西桂': '甲信越',
      '忍野': '甲信越', '山中湖': '甲信越', '鸣沢': '甲信越', '富士河口湖': '甲信越', '小菅': '甲信越',
      '丹波山': '甲信越', '长野': '甲信越', '松本': '甲信越', '上田': '甲信越', '冈谷': '甲信越',
      '飯田': '甲信越', '诹访': '甲信越', '须坂': '甲信越', '小诸': '甲信越', '伊那': '甲信越',
      '驹根': '甲信越', '中野': '甲信越', '大町': '甲信越', '飯山': '甲信越', '茅野': '甲信越',
      '塩尻': '甲信越', '佐久': '甲信越', '千曲': '甲信越', '东御': '甲信越', '安云野': '甲信越',
      '新潟': '甲信越', '长冈': '甲信越', '三条': '甲信越', '柏崎': '甲信越', '新发田': '甲信越',
      '小千谷': '甲信越', '加茂': '甲信越', '十日町': '甲信越', '见附': '甲信越', '村上': '甲信越',
      '燕': '甲信越', '糸鱼川': '甲信越', '妙高': '甲信越', '五泉': '甲信越', '上越': '甲信越',
      '阿贺野': '甲信越', '佐渡': '甲信越', '魚沼': '甲信越', '南魚沼': '甲信越', '胎内': '甲信越',
      '河口湖': '甲信越', '富士山': '甲信越', '石和': '甲信越', '野尻湖': '甲信越', '朝原': '甲信越',
      '新作': '甲信越', '祇园': '甲信越', '柏崎': '甲信越', '动漫': '甲信越'
    };
  }

  // 从文件名推断正确的地区和月份
  inferCorrectTags(filename) {
    let correctRegion = null;
    let correctMonth = null;
    
    // 推断地区
    for (const [key, value] of Object.entries(this.regionMapping)) {
      if (filename.includes(key)) {
        correctRegion = value;
        break;
      }
    }
    
    // 推断月份
    for (const [key, value] of Object.entries(this.monthMapping)) {
      if (filename.includes(key)) {
        correctMonth = value;
        break;
      }
    }
    
    return { correctRegion, correctMonth };
  }

  // 从文件内容推断地区
  inferRegionFromContent(content) {
    // 检查文件内容中的地名
    for (const [location, region] of Object.entries(this.locationToRegion)) {
      if (content.includes(location)) {
        return region;
      }
    }
    return null;
  }

  // 修复单个文件的标签
  fixFileTags(filename) {
    try {
      const filePath = path.join(__dirname, '../src/data', filename);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 推断正确的标签
      let { correctRegion, correctMonth } = this.inferCorrectTags(filename);
      
      // 如果从文件名无法推断地区，尝试从内容推断
      if (!correctRegion) {
        correctRegion = this.inferRegionFromContent(content);
      }
      
      // 如果仍然无法推断月份，尝试从内容中查找
      if (!correctMonth) {
        if (content.includes('7月') || content.includes('july') || content.includes('July')) {
          correctMonth = '7月';
        } else if (content.includes('8月') || content.includes('august') || content.includes('August')) {
          correctMonth = '8月';
        } else if (content.includes('9月') || content.includes('september') || content.includes('September')) {
          correctMonth = '9月';
        }
      }
      
      let newContent = content;
      let hasChanges = false;
      
      // 检查是否存在tags对象
      const tagsMatch = content.match(/tags:\s*{([^}]*)}/s);
      if (!tagsMatch) {
        // 如果没有tags对象，添加一个
        const insertPosition = content.indexOf('export const');
        if (insertPosition !== -1 && correctRegion && correctMonth) {
          const tagsObject = `  tags: {
    timeTag: '${correctMonth}',
    regionTag: '${correctRegion}',
    typeTag: '花火',
    layerTag: '详细介绍'
  },
  `;
          newContent = content.slice(0, insertPosition) + tagsObject + content.slice(insertPosition);
          hasChanges = true;
        }
      } else {
        // 修复现有的tags对象
        const tagsContent = tagsMatch[1];
        let newTagsContent = tagsContent;
        
        // 修复timeTag
        const timeTagMatch = tagsContent.match(/timeTag:\s*['"`]([^'"`]*?)['"`]/);
        if (!timeTagMatch && correctMonth) {
          newTagsContent = newTagsContent + `\n    timeTag: '${correctMonth}',`;
          hasChanges = true;
        } else if (timeTagMatch && correctMonth && timeTagMatch[1] !== correctMonth) {
          newTagsContent = newTagsContent.replace(
            /timeTag:\s*['"`][^'"`]*?['"`]/,
            `timeTag: '${correctMonth}'`
          );
          hasChanges = true;
        }
        
        // 修复regionTag
        const regionTagMatch = tagsContent.match(/regionTag:\s*['"`]([^'"`]*?)['"`]/);
        if (!regionTagMatch && correctRegion) {
          newTagsContent = newTagsContent + `\n    regionTag: '${correctRegion}',`;
          hasChanges = true;
        } else if (regionTagMatch) {
          const currentRegion = regionTagMatch[1];
          // 检查是否需要修复地区名称
          const fixedRegion = this.regionFixMapping[currentRegion] || (correctRegion || currentRegion);
          if (fixedRegion !== currentRegion) {
            newTagsContent = newTagsContent.replace(
              /regionTag:\s*['"`][^'"`]*?['"`]/,
              `regionTag: '${fixedRegion}'`
            );
            hasChanges = true;
          }
        }
        
        // 修复typeTag
        const typeTagMatch = tagsContent.match(/typeTag:\s*['"`]([^'"`]*?)['"`]/);
        if (!typeTagMatch) {
          newTagsContent = newTagsContent + `\n    typeTag: '花火',`;
          hasChanges = true;
        } else if (typeTagMatch[1] !== '花火') {
          newTagsContent = newTagsContent.replace(
            /typeTag:\s*['"`][^'"`]*?['"`]/,
            `typeTag: '花火'`
          );
          hasChanges = true;
        }
        
        // 修复layerTag - 强制修复所有不是"详细介绍"的layerTag
        const layerTagMatch = tagsContent.match(/layerTag:\s*['"`]([^'"`]*?)['"`]/);
        if (!layerTagMatch) {
          newTagsContent = newTagsContent + `\n    layerTag: '详细介绍'`;
          hasChanges = true;
        } else if (layerTagMatch[1] !== '详细介绍') {
          newTagsContent = newTagsContent.replace(
            /layerTag:\s*['"`][^'"`]*?['"`]/,
            `layerTag: '详细介绍'`
          );
          hasChanges = true;
        }
        
        if (hasChanges) {
          newContent = content.replace(
            /tags:\s*{([^}]*)}/s,
            `tags: {${newTagsContent}
  }`
          );
        }
      }
      
      if (hasChanges) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedFiles.push(`✅ ${filename}: 标签已修复`);
        this.stats.fixedFiles++;
        console.log(`✅ 修复 ${filename}`);
      } else {
        console.log(`⏭️ 跳过 ${filename} (无需修复)`);
      }
      
    } catch (error) {
      this.errors.push(`❌ ${filename}: ${error.message}`);
      this.stats.errorFiles++;
    }
  }

  // 修复所有Level 5文件
  fixAllTags() {
    console.log('🔍 查找需要修复的Level 5文件...\n');
    
    const dataDir = path.join(__dirname, '../src/data');
    const level5Files = fs.readdirSync(dataDir)
      .filter(f => f.includes('level5') && f.endsWith('.ts'))
      .sort();
    
    console.log(`📊 发现 ${level5Files.length} 个Level 5文件\n`);
    
    level5Files.forEach(filename => {
      this.stats.totalFiles++;
      this.fixFileTags(filename);
    });
  }

  // 生成报告
  generateReport() {
    console.log('\n📊 标签修复报告:\n');
    console.log(`   总文件数: ${this.stats.totalFiles}`);
    console.log(`   修复文件数: ${this.stats.fixedFiles}`);
    console.log(`   错误文件数: ${this.stats.errorFiles}`);
    console.log(`   成功率: ${Math.round((this.stats.fixedFiles / this.stats.totalFiles) * 100)}%`);
    
    if (this.fixedFiles.length > 0) {
      console.log('\n✅ 修复的文件:');
      this.fixedFiles.forEach(fix => console.log(`   ${fix}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ 修复失败的文件:');
      this.errors.forEach(error => console.log(`   ${error}`));
      return false;
    } else {
      console.log('\n🎉 所有标签修复完成！');
      return true;
    }
  }

  // 运行完整修复
  runFix() {
    this.fixAllTags();
    return this.generateReport();
  }
}

// 执行修复
const fixer = new TagFixer();
const success = fixer.runFix();

process.exit(success ? 0 : 1); 