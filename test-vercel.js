import { chromium } from 'playwright';

async function testVercelDeployment() {
  console.log('🚀 开始测试Vercel部署状态...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 测试1: 检查主页
    console.log('📋 测试1: 检查主页...');
    await page.goto('https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    const mainTitle = await page.textContent('h1');
    console.log(`✅ 主页加载成功: ${mainTitle}`);

    // 测试2: 检查玉村花火页面
    console.log('\n📋 测试2: 检查玉村花火页面...');
    await page.goto('https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app/july/hanabi/kitakanto/tamura-hanabi/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    const pageTitle = await page.textContent('h1');
    const isMaintenancePage = await page.locator('text=页面正在维护中').count() > 0;
    
    if (isMaintenancePage) {
      console.log('❌ 玉村花火页面仍显示维护中');
    } else {
      console.log(`✅ 玉村花火页面正常: ${pageTitle}`);
      
      // 检查联盟营销链接
      const bookingLink = await page.locator('a[href*="booking.com"]').count();
      const agodaLink = await page.locator('a[href*="agoda.com"]').count();
      const klookLink = await page.locator('a[href*="klook.com"]').count();
      
      console.log(`   📊 联盟营销链接: Booking(${bookingLink}) Agoda(${agodaLink}) Klook(${klookLink})`);
    }

    // 测试3: 检查动漫经典花火页面
    console.log('\n📋 测试3: 检查动漫经典花火页面...');
    await page.goto('https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app/july/hanabi/koshinetsu/anime-classics-anisong-hanabi/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    const animeTitle = await page.textContent('h1');
    const isAnimeMaintenance = await page.locator('text=页面正在维护中').count() > 0;
    
    if (isAnimeMaintenance) {
      console.log('❌ 动漫经典花火页面仍显示维护中');
    } else {
      console.log(`✅ 动漫经典花火页面正常: ${animeTitle}`);
    }

    // 测试4: 检查其他北关东页面
    console.log('\n📋 测试4: 检查其他北关东页面...');
    const testPages = [
      '/july/hanabi/kitakanto/mito-hanabi/',
      '/july/hanabi/kitakanto/moka-hanabi/',
      '/july/hanabi/kitakanto/tatebayashi-hanabi/'
    ];

    for (const testPage of testPages) {
      try {
        await page.goto(`https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app${testPage}`, { 
          waitUntil: 'networkidle',
          timeout: 15000 
        });
        
        const title = await page.textContent('h1');
        const isMaintenance = await page.locator('text=页面正在维护中').count() > 0;
        
        if (isMaintenance) {
          console.log(`❌ ${testPage} 仍显示维护中`);
        } else {
          console.log(`✅ ${testPage} 正常: ${title}`);
        }
      } catch (error) {
        console.log(`❌ ${testPage} 加载失败: ${error.message}`);
      }
    }

    // 测试5: 检查SEO元素
    console.log('\n📋 测试5: 检查SEO优化...');
    await page.goto('https://tokyo-seasonal-guide-git-main-gakukinns-projects.vercel.app/july/hanabi/kitakanto/tamura-hanabi/');
    
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    const canonicalLink = await page.locator('link[rel="canonical"]').count();
    
    console.log(`   📊 Meta描述: ${metaDescription ? '✅' : '❌'}`);
    console.log(`   📊 OG标题: ${ogTitle ? '✅' : '❌'}`);
    console.log(`   📊 规范链接: ${canonicalLink > 0 ? '✅' : '❌'}`);

    console.log('\n🎉 测试完成！');

  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error.message);
  } finally {
    await browser.close();
  }
}

// 运行测试
testVercelDeployment().catch(console.error); 