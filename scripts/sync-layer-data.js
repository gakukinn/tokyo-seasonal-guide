#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 第四层和第五层数据同步工具
 * 同步基本信息：标题、日期、人数、地址、发数
 * 保持独立：红心数（点击+1逻辑）
 */

class LayerDataSync {
  constructor() {
    this.dataDir = path.join(__dirname, '../src/data');
    this.logFile = path.join(__dirname, '../logs/layer-sync.log');
    
    // 确保日志目录存在
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  // 从第五层数据提取基本信息
  extractLevel5Data(level5Data) {
    // 解析第五层数据文件内容
    const nameMatch = level5Data.match(/name: ['"`]([^'"`]+)['"`]/);
    const dateMatch = level5Data.match(/date: ['"`]([^'"`]+)['"`]/);
    const fireworksCountMatch = level5Data.match(/fireworksCount: ['"`]([^'"`]+)['"`]/);
    const expectedVisitorsMatch = level5Data.match(/expectedVisitors: ['"`]([^'"`]+)['"`]/);
    
    // 从venues中提取主要地点
    const venuesMatch = level5Data.match(/venues: \[([\s\S]*?)\]/);
    let mainLocation = '';
    if (venuesMatch) {
      const firstVenueMatch = venuesMatch[1].match(/location: ['"`]([^'"`]+)['"`]/);
      if (firstVenueMatch) {
        mainLocation = firstVenueMatch[1];
      }
    }

    return {
      name: nameMatch ? nameMatch[1] : null,
      date: dateMatch ? dateMatch[1] : null,
      fireworksCount: fireworksCountMatch ? fireworksCountMatch[1] : null,
      expectedVisitors: expectedVisitorsMatch ? expectedVisitorsMatch[1] : null,
      location: mainLocation || null
    };
  }

  // 更新第四层数据文件
  updateLevel4Data(level4Data, level5Info) {
    let updatedData = level4Data;

    // 更新标题
    if (level5Info.name) {
      updatedData = updatedData.replace(
        /name: ['"`]([^'"`]+)['"`]/,
        `name: '${level5Info.name}'`
      );
    }

    // 更新日期（转换为简短格式）
    if (level5Info.date) {
      const shortDate = this.convertToShortDate(level5Info.date);
      updatedData = updatedData.replace(
        /date: ['"`]([^'"`]+)['"`]/,
        `date: "${shortDate}"`
      );
    }

    // 更新花火数量
    if (level5Info.fireworksCount) {
      updatedData = updatedData.replace(
        /fireworks: ['"`]([^'"`]+)['"`]/,
        `fireworks: '${level5Info.fireworksCount}'`
      );
    }

    // 更新访客数量
    if (level5Info.expectedVisitors) {
      updatedData = updatedData.replace(
        /visitors: ['"`]([^'"`]+)['"`]/,
        `visitors: '${level5Info.expectedVisitors}'`
      );
    }

    // 更新地点信息
    if (level5Info.location) {
      updatedData = updatedData.replace(
        /location: ['"`]([^'"`]+)['"`]/,
        `location: '${level5Info.location}'`
      );
    }

    // 不更新红心数 (likes) - 保持原有数值和点击+1逻辑

    return updatedData;
  }

  // 将完整日期转换为简短格式
  convertToShortDate(fullDate) {
    // 例：'2025年9月20日(土)' -> '9月20日'
    const match = fullDate.match(/(\d+月\d+日)/);
    return match ? match[1] : fullDate;
  }

  // 同步调布花火数据
  async syncChofuHanabi() {
    try {
      this.log('开始同步调布花火第四层和第五层数据...');

      const level4File = path.join(this.dataDir, 'level4-september-tokyo-hanabi.ts');
      const level5File = path.join(this.dataDir, 'level5-september-tokyo-chofu-hanabi.ts');

      // 检查文件是否存在
      if (!fs.existsSync(level4File)) {
        this.log(`第四层文件不存在: ${level4File}`);
        return;
      }

      if (!fs.existsSync(level5File)) {
        this.log(`第五层文件不存在: ${level5File}`);
        return;
      }

      // 读取文件内容
      const level4Data = fs.readFileSync(level4File, 'utf8');
      const level5Data = fs.readFileSync(level5File, 'utf8');

      // 从第五层提取数据
      const level5Info = this.extractLevel5Data(level5Data);
      this.log(`提取的第五层数据: ${JSON.stringify(level5Info, null, 2)}`);

      // 检查是否需要更新
      if (this.needsSync(level4Data, level5Info)) {
        this.log('检测到数据差异，开始同步...');

        // 备份第四层数据
        const backupFile = `${level4File}.backup.${Date.now()}`;
        fs.copyFileSync(level4File, backupFile);
        this.log(`已备份第四层数据到: ${backupFile}`);

        // 更新第四层数据
        const updatedLevel4Data = this.updateLevel4Data(level4Data, level5Info);
        fs.writeFileSync(level4File, updatedLevel4Data);

        this.log('第四层数据同步完成');
        this.log('注意：红心数保持不变，继续使用点击+1逻辑');
      } else {
        this.log('数据已同步，无需更新');
      }

    } catch (error) {
      this.log(`同步失败: ${error.message}`);
    }
  }

  // 检查是否需要同步
  needsSync(level4Data, level5Info) {
    // 检查关键字段是否有差异
    const level4Name = level4Data.match(/name: ['"`]([^'"`]+)['"`]/);
    const level4Date = level4Data.match(/date: ['"`]([^'"`]+)['"`]/);
    const level4Fireworks = level4Data.match(/fireworks: ['"`]([^'"`]+)['"`]/);
    const level4Visitors = level4Data.match(/visitors: ['"`]([^'"`]+)['"`]/);

    if (level4Name && level5Info.name && level4Name[1] !== level5Info.name) {
      return true;
    }

    if (level4Date && level5Info.date) {
      const shortDate = this.convertToShortDate(level5Info.date);
      if (level4Date[1] !== shortDate) {
        return true;
      }
    }

    if (level4Fireworks && level5Info.fireworksCount && level4Fireworks[1] !== level5Info.fireworksCount) {
      return true;
    }

    if (level4Visitors && level5Info.expectedVisitors && level4Visitors[1] !== level5Info.expectedVisitors) {
      return true;
    }

    return false;
  }

  // 同步所有事件
  async syncAllEvents() {
    this.log('开始第四层和第五层数据同步...');
    
    // 同步调布花火
    await this.syncChofuHanabi();
    
    // 可以添加更多花火大会的同步
    // await this.syncOtherEvents();
    
    this.log('数据同步完成');
  }

  // 验证同步结果
  async validateSync() {
    this.log('验证同步结果...');
    
    try {
      const level4File = path.join(this.dataDir, 'level4-september-tokyo-hanabi.ts');
      const level5File = path.join(this.dataDir, 'level5-september-tokyo-chofu-hanabi.ts');

      const level4Data = fs.readFileSync(level4File, 'utf8');
      const level5Data = fs.readFileSync(level5File, 'utf8');

      const level5Info = this.extractLevel5Data(level5Data);
      
      // 检查同步状态
      const level4Name = level4Data.match(/name: ['"`]([^'"`]+)['"`]/);
      const level4Date = level4Data.match(/date: ['"`]([^'"`]+)['"`]/);
      const level4Fireworks = level4Data.match(/fireworks: ['"`]([^'"`]+)['"`]/);
      const level4Visitors = level4Data.match(/visitors: ['"`]([^'"`]+)['"`]/);
      const level4Likes = level4Data.match(/likes: (\d+)/);

      this.log('=== 同步验证结果 ===');
      this.log(`标题同步: ${level4Name ? level4Name[1] : 'N/A'} ✓`);
      this.log(`日期同步: ${level4Date ? level4Date[1] : 'N/A'} ✓`);
      this.log(`花火数: ${level4Fireworks ? level4Fireworks[1] : 'N/A'} ✓`);
      this.log(`访客数: ${level4Visitors ? level4Visitors[1] : 'N/A'} ✓`);
      this.log(`红心数: ${level4Likes ? level4Likes[1] : 'N/A'} (保持独立) ✓`);
      this.log('===================');

    } catch (error) {
      this.log(`验证失败: ${error.message}`);
    }
  }
}

// 命令行参数处理
async function main() {
  const args = process.argv.slice(2);
  const sync = new LayerDataSync();
  
  if (args.includes('--validate')) {
    await sync.validateSync();
  } else {
    await sync.syncAllEvents();
    await sync.validateSync();
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('数据同步失败:', error);
    process.exit(1);
  });
}

module.exports = LayerDataSync; 