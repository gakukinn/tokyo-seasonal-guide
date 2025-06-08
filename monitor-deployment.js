import { chromium } from 'playwright';

async function checkDeploymentStatus() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`⏰ ${new Date().toLocaleTimeString()} - 检查部署状态...`);
    
    // 检查玉村花火页面
    await page.goto('https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app/july/hanabi/kitakanto/tamura-hanabi/', { 
      waitUntil: 'networkidle',
      timeout: 15000 
    });
    
    const isMaintenancePage = await page.locator('text=页面正在维护中').count() > 0;
    
    if (isMaintenancePage) {
      console.log('❌ 仍显示维护页面，继续等待...');
      return false;
    } else {
      const pageTitle = await page.textContent('h1');
      console.log(`✅ 部署成功！页面标题: ${pageTitle}`);
      
      // 检查联盟营销链接
      const bookingLink = await page.locator('a[href*="booking.com"]').count();
      const agodaLink = await page.locator('a[href*="agoda.com"]').count();
      console.log(`📊 联盟营销链接: Booking(${bookingLink}) Agoda(${agodaLink})`);
      
      // 快速检查其他页面
      const testPages = [
        '/july/hanabi/kitakanto/mito-hanabi/',
        '/july/hanabi/koshinetsu/anime-classics-anisong-hanabi/'
      ];
      
      let allPagesWorking = true;
      for (const testPage of testPages) {
        try {
          await page.goto(`https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app${testPage}`, { 
            waitUntil: 'networkidle',
            timeout: 10000 
          });
          
          const isMaintenance = await page.locator('text=页面正在维护中').count() > 0;
          if (isMaintenance) {
            console.log(`⚠️ ${testPage} 仍显示维护中`);
            allPagesWorking = false;
          } else {
            const title = await page.textContent('h1');
            console.log(`✅ ${testPage} 正常: ${title}`);
          }
        } catch (error) {
          console.log(`❌ ${testPage} 检查失败: ${error.message}`);
          allPagesWorking = false;
        }
      }
      
      if (allPagesWorking) {
        console.log('\n🎉 所有页面部署成功！监控结束。');
        return true;
      } else {
        console.log('\n⚠️ 部分页面仍有问题，继续监控...');
        return false;
      }
    }
    
  } catch (error) {
    console.log(`❌ 检查失败: ${error.message}`);
    return false;
  } finally {
    await browser.close();
  }
}

async function monitorDeployment() {
  console.log('🚀 开始监控Vercel部署状态...');
  console.log('📝 每30秒检查一次，最多监控30分钟');
  console.log('💡 您可以继续其他工作，脚本会在后台运行\n');
  
  const maxAttempts = 60; // 30分钟 (30秒 × 60次)
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    attempts++;
    
    const isDeployed = await checkDeploymentStatus();
    
    if (isDeployed) {
      console.log('\n🎊 部署监控完成！所有页面正常运行。');
      break;
    }
    
    if (attempts < maxAttempts) {
      console.log(`⏳ 等待30秒后重试... (${attempts}/${maxAttempts})\n`);
      await new Promise(resolve => setTimeout(resolve, 30000)); // 等待30秒
    } else {
      console.log('\n⏰ 监控超时（30分钟），请手动检查Vercel控制台。');
    }
  }
}

// 运行监控
monitorDeployment().catch(console.error); 