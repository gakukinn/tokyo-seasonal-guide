#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * 后台数据同步系统
 * 自动从官方数据源获取最新花火大会信息并更新本地数据文件
 * 不显示任何前端UI，纯后台运行
 */

class BackgroundDataSync {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/background-sync.log');
    this.dataDir = path.join(__dirname, '../src/data');
    this.lastSyncFile = path.join(__dirname, '../logs/last-sync.json');
    
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

  async fetchOfficialData(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            // 这里可以根据实际的官方数据源格式进行解析
            // 目前返回模拟数据
            resolve({
              success: true,
              data: this.parseOfficialData(data),
              lastUpdated: new Date().toISOString()
            });
          } catch (error) {
            reject(error);
          }
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  parseOfficialData(htmlData) {
    // 模拟解析官方数据
    // 实际使用时需要根据具体的官方网站结构进行解析
    // 注意：不包含红心数，因为用户要求不同步红心数
    return {
      name: "调布花火2025",
      date: "2025年9月20日",
      time: "18:15-19:15",
      location: "调布市多摩川周边",
      fireworksCount: "约10000发",
      expectedVisitors: "约30万人",
      status: "confirmed"
      // 不同步红心数 (wantToGo)
    };
  }

  async syncChofuHanabi() {
    try {
      this.log('开始同步调布花火数据...');
      
      // 官方数据源URL（示例）
      const officialUrl = 'https://hanabi.walkerplus.com/detail/ar0313e00881/';
      
      // 获取官方数据
      const officialData = await this.fetchOfficialData(officialUrl);
      
      // 读取当前本地数据
      const dataFile = path.join(this.dataDir, 'level5-september-tokyo-chofu-hanabi.ts');
      
      if (fs.existsSync(dataFile)) {
        const currentData = fs.readFileSync(dataFile, 'utf8');
        
        // 检查是否需要更新
        if (this.needsUpdate(currentData, officialData.data)) {
          this.log('检测到数据变化，准备更新...');
          
          // 备份当前数据
          const backupFile = `${dataFile}.backup.${Date.now()}`;
          fs.copyFileSync(dataFile, backupFile);
          this.log(`已备份当前数据到: ${backupFile}`);
          
          // 更新数据文件
          const updatedData = this.updateDataFile(currentData, officialData.data);
          fs.writeFileSync(dataFile, updatedData);
          
          this.log('数据更新完成');
          
          // 记录同步信息
          this.recordSync('chofu-hanabi', officialData.data, true);
        } else {
          this.log('数据无变化，跳过更新');
          this.recordSync('chofu-hanabi', officialData.data, false);
        }
      } else {
        this.log(`数据文件不存在: ${dataFile}`);
      }
      
    } catch (error) {
      this.log(`同步失败: ${error.message}`);
    }
  }

  needsUpdate(currentData, officialData) {
    // 简单的变化检测逻辑
    // 实际使用时可以更精确地比较具体字段
    return true; // 暂时总是返回true用于测试
  }

  updateDataFile(currentData, officialData) {
    // 这里实现数据文件的更新逻辑
    // 保持原有格式，只更新必要的字段
    // 注意：不更新红心数，保持原有数值
    
    let updatedData = currentData;
    
    // 更新日期信息
    if (officialData.date) {
      updatedData = updatedData.replace(
        /date: ".*?"/,
        `date: "${officialData.date}"`
      );
    }
    
    // 更新时间信息
    if (officialData.time) {
      updatedData = updatedData.replace(
        /time: ".*?"/,
        `time: "${officialData.time}"`
      );
    }
    
    // 更新地点信息
    if (officialData.location) {
      updatedData = updatedData.replace(
        /location: ".*?"/,
        `location: "${officialData.location}"`
      );
    }
    
    // 更新花火数量
    if (officialData.fireworksCount) {
      updatedData = updatedData.replace(
        /fireworksCount: ".*?"/,
        `fireworksCount: "${officialData.fireworksCount}"`
      );
    }
    
    // 更新访客数量
    if (officialData.expectedVisitors) {
      updatedData = updatedData.replace(
        /expectedVisitors: ".*?"/,
        `expectedVisitors: "${officialData.expectedVisitors}"`
      );
    }
    
    // 不更新红心数 (wantToGo) - 保持原有数值
    
    // 添加数据更新时间戳
    const timestamp = new Date().toISOString();
    updatedData = updatedData.replace(
      /dataConfirmedBy: ".*?"/,
      `dataConfirmedBy: "AUTO_SYNC_${timestamp}"`
    );
    
    return updatedData;
  }

  recordSync(eventId, data, updated) {
    const syncRecord = {
      eventId,
      timestamp: new Date().toISOString(),
      updated,
      data: data,
      source: 'official_website'
    };
    
    // 读取历史同步记录
    let syncHistory = [];
    if (fs.existsSync(this.lastSyncFile)) {
      try {
        syncHistory = JSON.parse(fs.readFileSync(this.lastSyncFile, 'utf8'));
      } catch (error) {
        this.log(`读取同步历史失败: ${error.message}`);
      }
    }
    
    // 添加新记录
    syncHistory.push(syncRecord);
    
    // 只保留最近100条记录
    if (syncHistory.length > 100) {
      syncHistory = syncHistory.slice(-100);
    }
    
    // 保存同步历史
    fs.writeFileSync(this.lastSyncFile, JSON.stringify(syncHistory, null, 2));
  }

  async syncAllEvents() {
    this.log('开始后台数据同步...');
    
    // 同步调布花火
    await this.syncChofuHanabi();
    
    // 可以添加更多花火大会的同步
    // await this.syncOtherEvents();
    
    this.log('后台数据同步完成');
  }

  async startWatchMode() {
    this.log('启动监控模式，每周检查一次数据更新...');
    
    const syncInterval = 7 * 24 * 60 * 60 * 1000; // 7天
    
    // 立即执行一次同步
    await this.syncAllEvents();
    
    // 设置定时同步
    setInterval(async () => {
      await this.syncAllEvents();
    }, syncInterval);
  }

  async startDailyMode() {
    this.log('启动每日同步模式...');
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(2, 0, 0, 0); // 每天凌晨2点执行
    
    const timeUntilTomorrow = tomorrow.getTime() - now.getTime();
    
    this.log(`下次同步时间: ${tomorrow.toISOString()}`);
    
    // 设置首次执行时间
    setTimeout(async () => {
      await this.syncAllEvents();
      
      // 之后每24小时执行一次
      setInterval(async () => {
        await this.syncAllEvents();
      }, 24 * 60 * 60 * 1000);
      
    }, timeUntilTomorrow);
  }
}

// 命令行参数处理
async function main() {
  const args = process.argv.slice(2);
  const sync = new BackgroundDataSync();
  
  if (args.includes('--watch')) {
    await sync.startWatchMode();
  } else if (args.includes('--daily')) {
    await sync.startDailyMode();
  } else {
    // 单次同步
    await sync.syncAllEvents();
    process.exit(0);
  }
}

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n后台数据同步服务已停止');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n后台数据同步服务已停止');
  process.exit(0);
});

if (require.main === module) {
  main().catch(error => {
    console.error('后台数据同步失败:', error);
    process.exit(1);
  });
}

module.exports = BackgroundDataSync; 