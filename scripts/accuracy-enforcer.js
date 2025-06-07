const fs = require('fs');
const path = require('path');

console.log('🎯 综合数据准确性强制检查系统\n');

// 合并原有的4个数据准确性检查功能
class AccuracyEnforcer {
  constructor() {
    this.issues = [];
    this.blockedFiles = [];
    this.stats = {
      totalFiles: 0,
      validSources: 0,
      invalidSources: 0,
      fabricatedData: 0
    };
  }

  // 1. 强制官方数据源验证
  enforceOfficialSources() {
    console.log('🔒 强制官方数据源验证...');
    
    const requiredDomains = [
      'walkerplus.com',
      '.go.jp',
      '.city.jp',
      '.or.jp',
      '.ac.jp'
    ];

    const level5Files = fs.readdirSync(path.join(__dirname, '../src/data'))
      .filter(f => f.includes('level5') && f.endsWith('.ts'));

    level5Files.forEach(file => {
      try {
        const content = fs.readFileSync(path.join(__dirname, '../src/data', file), 'utf8');
        this.validateOfficialSource(file, content, requiredDomains);
      } catch (error) {
        this.issues.push(`❌ ${file}: ${error.message}`);
      }
      this.stats.totalFiles++;
    });
  }

  validateOfficialSource(filename, content, requiredDomains) {
    // 检查是否包含官方数据源
    const hasOfficialSource = requiredDomains.some(domain => 
      content.includes(domain)
    );

    if (!hasOfficialSource) {
      this.stats.invalidSources++;
      this.blockedFiles.push(filename);
      this.issues.push(`🚫 ${filename}: 缺少官方数据源验证`);
      this.issues.push(`   必须包含以下域名之一: ${requiredDomains.join(', ')}`);
    } else {
      this.stats.validSources++;
    }
  }

  // 2. 东京数据准确性检查
  checkTokyoAccuracy() {
    console.log('🗼 东京数据准确性检查...');
    
    const tokyoFile = path.join(__dirname, '../src/data/level4-july-tokyo-hanabi.ts');
    
    if (fs.existsSync(tokyoFile)) {
      const content = fs.readFileSync(tokyoFile, 'utf8');
      this.validateTokyoData(content);
    } else {
      this.issues.push('❌ Tokyo数据文件不存在');
    }
  }

  validateTokyoData(content) {
    // 检查可疑的精确数据
    const suspiciousPatterns = [
      /visitors:\s*['"`]322,?575['"`]/,  // 过于精确的访客数
      /visitors:\s*['"`]322575['"`]/,
      /visitors:\s*322575/
    ];

    suspiciousPatterns.forEach((pattern, index) => {
      if (pattern.test(content)) {
        this.stats.fabricatedData++;
        this.issues.push(`⚠️ Tokyo数据: 发现可疑的精确数据 (模式 ${index + 1})`);
      }
    });

    // 检查同日期多个活动（需要验证）
    const july26Events = (content.match(/date:\s*['"`]7月26日['"`]/g) || []).length;
    if (july26Events > 2) {
      this.issues.push(`⚠️ Tokyo数据: 7月26日有${july26Events}个活动，需要验证`);
    }

    // 检查异常数据
    if (content.includes('mikurajima') && content.includes('802')) {
      this.issues.push('⚠️ Tokyo数据: 御蔵岛数据异常 (802发花火, 1个赞)');
    }
  }

  // 3. 数据完整性强制执行
  enforceDataIntegrity() {
    console.log('💪 数据完整性强制执行...');
    
    const allDataFiles = fs.readdirSync(path.join(__dirname, '../src/data'))
      .filter(f => f.endsWith('.ts') && (f.includes('level4') || f.includes('level5')));

    allDataFiles.forEach(file => {
      try {
        const content = fs.readFileSync(path.join(__dirname, '../src/data', file), 'utf8');
        this.enforceDataStandards(file, content);
      } catch (error) {
        this.issues.push(`❌ ${file}: ${error.message}`);
      }
    });
  }

  enforceDataStandards(filename, content) {
    // 强制中文化检查
    if (/[ひらがなカタカナ]/.test(content)) {
      this.issues.push(`🚫 ${filename}: 严禁使用日文字符`);
    }

    // 强制真实数据检查
    const fabricatedPatterns = [
      /maruchiba\.jp/,
      /kanagawa-kankou\.or\.jp/,
      /koshintabi\.com/,
      /example\.com/,
      /test\.jp/
    ];

    fabricatedPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        this.stats.fabricatedData++;
        this.blockedFiles.push(filename);
        this.issues.push(`🚫 ${filename}: 检测到虚假数据源`);
      }
    });

    // 检查必填字段
    if (filename.includes('level5')) {
      const requiredLevel5Fields = ['title', 'date', 'venue', 'description'];
      requiredLevel5Fields.forEach(field => {
        if (!content.includes(`${field}:`)) {
          this.issues.push(`⚠️ ${filename}: 缺少必填字段: ${field}`);
        }
      });
    }
  }

  // 4. 绝对数据源强制执行
  absoluteSourceEnforcement() {
    console.log('⚡ 绝对数据源强制执行...');
    
    // 检查是否有文件被标记为需要官方源验证
    const markerFile = path.join(__dirname, '../.source-verification-required');
    
    if (fs.existsSync(markerFile)) {
      const requiredFiles = fs.readFileSync(markerFile, 'utf8')
        .split('\n')
        .filter(line => line.trim());
      
      requiredFiles.forEach(file => {
        if (file && !this.hasValidOfficialSource(file)) {
          this.blockedFiles.push(file);
          this.issues.push(`🔒 ${file}: 等待官方数据源验证`);
        }
      });
    }
  }

  hasValidOfficialSource(filename) {
    try {
      const content = fs.readFileSync(path.join(__dirname, '../src/data', filename), 'utf8');
      const officialDomains = ['walkerplus.com', '.go.jp', '.city.jp', '.or.jp', '.ac.jp'];
      return officialDomains.some(domain => content.includes(domain));
    } catch {
      return false;
    }
  }

  // 创建阻止机制
  createBlockingMechanism() {
    if (this.blockedFiles.length > 0) {
      console.log('\n🚫 创建数据阻止机制...');
      
      // 创建阻止文件列表
      const blockListPath = path.join(__dirname, '../.blocked-files');
      fs.writeFileSync(blockListPath, this.blockedFiles.join('\n'));
      
      console.log(`   已阻止 ${this.blockedFiles.length} 个文件，直到提供官方数据源`);
    }
  }

  // 生成报告
  generateReport() {
    console.log('\n📊 数据准确性检查报告:');
    console.log(`   检查文件数: ${this.stats.totalFiles}`);
    console.log(`   有效数据源: ${this.stats.validSources}`);
    console.log(`   无效数据源: ${this.stats.invalidSources}`);
    console.log(`   虚假数据: ${this.stats.fabricatedData}`);
    console.log(`   阻止文件数: ${this.blockedFiles.length}`);
    
    if (this.issues.length > 0) {
      console.log('\n🚨 准确性问题:');
      this.issues.forEach(issue => console.log(`   ${issue}`));
    } else {
      console.log('\n✅ 数据准确性检查通过！');
    }

    if (this.blockedFiles.length > 0) {
      console.log('\n🚫 阻止的文件:');
      this.blockedFiles.forEach(file => console.log(`   ${file}`));
    }

    this.createBlockingMechanism();

    return {
      success: this.issues.length === 0 && this.blockedFiles.length === 0,
      totalIssues: this.issues.length,
      blockedFiles: this.blockedFiles.length,
      stats: this.stats
    };
  }

  // 运行所有检查
  runAllChecks() {
    this.enforceOfficialSources();
    this.checkTokyoAccuracy();
    this.enforceDataIntegrity();
    this.absoluteSourceEnforcement();
    return this.generateReport();
  }
}

// 执行检查
const enforcer = new AccuracyEnforcer();
const result = enforcer.runAllChecks();

if (result.blockedFiles > 0) {
  console.log('\n🛑 由于数据准确性问题，部分文件已被阻止');
  process.exit(2); // 特殊退出码表示有阻止的文件
} else {
  process.exit(result.success ? 0 : 1);
} 