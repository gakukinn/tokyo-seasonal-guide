const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// 收集所有五层数据文件中的网站信息
async function collectAllWebsites() {
  const websites = [];
  const dataDir = path.join(process.cwd(), 'src/data');
  
  const files = fs.readdirSync(dataDir).filter(file => 
    file.startsWith('level5-july') && file.endsWith('.ts')
  );

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 提取website字段
    const websiteMatch = content.match(/website:\s*['"]([^'"]+)['"]/);
    if (websiteMatch) {
      const url = websiteMatch[1];
      const isOfficial = url.includes('.go.jp') || url.includes('.city.jp') || 
                        url.includes('.lg.jp') || url.includes('.or.jp');
      
      websites.push({
        file: file,
        url: url,
        name: file.replace('level5-july-hanabi-', '').replace('.ts', ''),
        isOfficial: isOfficial,
        type: isOfficial ? 'official' : 'non-official'
      });
    }
  }
  
  return websites;
}

test.describe('7月花火网站完整验证', () => {
  let allWebsites;
  let officialWebsites;
  let nonOfficialWebsites;

  test.beforeAll(async () => {
    allWebsites = await collectAllWebsites();
    officialWebsites = allWebsites.filter(site => site.isOfficial);
    nonOfficialWebsites = allWebsites.filter(site => !site.isOfficial);
    
    console.log(`\n📊 7月花火网站统计:`);
    console.log(`总计: ${allWebsites.length} 个网站`);
    console.log(`官方网站: ${officialWebsites.length} 个`);
    console.log(`非官方网站: ${nonOfficialWebsites.length} 个`);
  });

  test('验证所有官方网站可访问性', async ({ page }) => {
    const results = [];
    
    console.log(`\n🏛️ 验证 ${officialWebsites.length} 个官方网站:`);
    
    for (const site of officialWebsites) {
      try {
        console.log(`检查官方网站: ${site.name} - ${site.url}`);
        
        const response = await page.goto(site.url, { 
          waitUntil: 'domcontentloaded',
          timeout: 30000 
        });
        
        const status = response.status();
        const isAccessible = status >= 200 && status < 400;
        
        results.push({
          name: site.name,
          url: site.url,
          type: 'official',
          status: status,
          accessible: isAccessible
        });
        
        if (isAccessible) {
          console.log(`✅ ${site.name}: ${status}`);
        } else {
          console.log(`❌ ${site.name}: ${status}`);
        }
        
        await page.waitForTimeout(1000);
        
      } catch (error) {
        console.log(`❌ ${site.name}: 错误 - ${error.message}`);
        results.push({
          name: site.name,
          url: site.url,
          type: 'official',
          status: 'ERROR',
          accessible: false,
          error: error.message
        });
      }
    }
    
    const accessibleCount = results.filter(r => r.accessible).length;
    const totalCount = results.length;
    
    console.log(`\n📊 官方网站验证报告:`);
    console.log(`总计: ${totalCount} 个官方网站`);
    console.log(`可访问: ${accessibleCount} 个`);
    console.log(`失败: ${totalCount - accessibleCount} 个`);
    
    // 官方网站应该至少90%可访问
    expect(accessibleCount / totalCount).toBeGreaterThanOrEqual(0.9);
  });

  test('抽样验证非官方网站', async ({ page }) => {
    // 抽样验证前5个非官方网站
    const sampleSites = nonOfficialWebsites.slice(0, 5);
    const results = [];
    
    console.log(`\n🌐 抽样验证 ${sampleSites.length} 个非官方网站:`);
    
    for (const site of sampleSites) {
      try {
        console.log(`检查非官方网站: ${site.name} - ${site.url}`);
        
        const response = await page.goto(site.url, { 
          waitUntil: 'domcontentloaded',
          timeout: 20000 
        });
        
        const status = response.status();
        const isAccessible = status >= 200 && status < 400;
        
        results.push({
          name: site.name,
          url: site.url,
          type: 'non-official',
          status: status,
          accessible: isAccessible
        });
        
        if (isAccessible) {
          console.log(`✅ ${site.name}: ${status}`);
        } else {
          console.log(`⚠️  ${site.name}: ${status}`);
        }
        
        await page.waitForTimeout(1000);
        
      } catch (error) {
        console.log(`⚠️  ${site.name}: 错误 - ${error.message}`);
        results.push({
          name: site.name,
          url: site.url,
          type: 'non-official',
          status: 'ERROR',
          accessible: false,
          error: error.message
        });
      }
    }
    
    const accessibleCount = results.filter(r => r.accessible).length;
    console.log(`非官方网站可访问率: ${accessibleCount}/${sampleSites.length}`);
  });

  test('检查官方网站内容质量', async ({ page }) => {
    const importantSites = officialWebsites.slice(0, 3);
    
    console.log(`\n🔍 检查 ${importantSites.length} 个重要官方网站的内容质量:`);
    
    for (const site of importantSites) {
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // 检查页面是否包含花火相关信息
      const pageContent = await page.textContent('body');
      const hasFireworksContent = 
        pageContent.includes('花火') || 
        pageContent.includes('はなび') ||
        pageContent.includes('ハナビ') ||
        pageContent.includes('祭り') ||
        pageContent.includes('イベント') ||
        pageContent.includes('fireworks');
      
      console.log(`${site.name} 包含花火相关信息: ${hasFireworksContent ? '是' : '否'}`);
      
      // 检查页面是否是日语页面
      const isJapanese = 
        pageContent.includes('年') || 
        pageContent.includes('月') ||
        pageContent.includes('日') ||
        pageContent.includes('時間');
      
      console.log(`${site.name} 是日语页面: ${isJapanese ? '是' : '否'}`);
    }
  });

  test('生成完整网站分析报告', async () => {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalWebsites: allWebsites.length,
        officialWebsites: officialWebsites.length,
        nonOfficialWebsites: nonOfficialWebsites.length,
        officialPercentage: (officialWebsites.length / allWebsites.length * 100).toFixed(1) + '%'
      },
      officialWebsites: officialWebsites.map(site => ({
        name: site.name,
        url: site.url,
        domain: new URL(site.url).hostname
      })),
      nonOfficialWebsites: nonOfficialWebsites.map(site => ({
        name: site.name,
        url: site.url,
        domain: new URL(site.url).hostname
      })),
      recommendations: [
        '建议优先为非官方网站寻找对应的政府官方页面',
        '重点关注市政府(.city.jp)和政府机构(.go.jp)的活动公告',
        '可以联系当地观光协会获取官方活动信息链接'
      ]
    };
    
    const reportPath = path.join(process.cwd(), 'comprehensive-websites-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📋 完整网站分析报告已保存至: ${reportPath}`);
    console.log(`📊 官方网站覆盖率: ${report.summary.officialPercentage}`);
  });
}); 