const { test, expect } = require('@playwright/test');

test.describe('花火网站功能测试', () => {
  test('首页加载正常', async ({ page }) => {
    await page.goto('/');
    
    // 检查页面标题
    await expect(page).toHaveTitle(/关东花火/);
    
    // 检查主要导航存在
    await expect(page.locator('nav')).toBeVisible();
    
    // 截图保存
    await page.screenshot({ path: 'screenshots/homepage.png' });
  });

  test('7月花火页面功能', async ({ page }) => {
    await page.goto('/july');
    
    // 检查7月花火页面加载
    await expect(page.locator('h1')).toContainText('7月');
    
    // 检查地区卡片存在
    const regionCards = page.locator('[data-testid="region-card"]');
    await expect(regionCards).toHaveCountGreaterThan(0);
    
    // 点击第一个地区
    const firstCard = regionCards.first();
    await firstCard.click();
    
    // 确保跳转到地区页面
    await expect(page.url()).toContain('/july/hanabi/');
  });

  test('地区花火列表页面', async ({ page }) => {
    await page.goto('/july/hanabi/tokyo');
    
    // 检查页面加载
    await expect(page.locator('h1')).toContainText('东京');
    
    // 检查花火活动列表
    const eventCards = page.locator('[data-testid="event-card"]');
    await expect(eventCards).toHaveCountGreaterThan(0);
    
    // 检查查看详情按钮
    const detailButtons = page.locator('text=查看详情');
    await expect(detailButtons.first()).toBeVisible();
  });

  test('花火详情页面功能', async ({ page }) => {
    await page.goto('/july/hanabi/tokyo/sumida');
    
    // 检查详情页面加载
    await expect(page.locator('h1')).toBeVisible();
    
    // 检查标签页功能
    const tabs = page.locator('[role="tab"]');
    await expect(tabs).toHaveCountGreaterThan(0);
    
    // 点击不同标签页
    const tabNames = ['概览', '会场信息', '交通指南', '观赏攻略'];
    for (const tabName of tabNames) {
      const tab = page.locator(`[role="tab"]:has-text("${tabName}")`);
      if (await tab.isVisible()) {
        await tab.click();
        await page.waitForTimeout(500); // 等待内容加载
      }
    }
    
    // 检查地图显示
    const mapContainer = page.locator('[data-testid="map-container"]');
    if (await mapContainer.isVisible()) {
      console.log('地图容器正常显示');
    }
  });

  test('响应式设计测试', async ({ page }) => {
    // 桌面视图
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/july');
    await page.screenshot({ path: 'screenshots/desktop.png' });
    
    // 平板视图
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/july');
    await page.screenshot({ path: 'screenshots/tablet.png' });
    
    // 手机视图
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/july');
    await page.screenshot({ path: 'screenshots/mobile.png' });
    
    // 检查移动端导航
    const mobileNav = page.locator('[data-testid="mobile-nav"]');
    if (await mobileNav.isVisible()) {
      await mobileNav.click();
    }
  });

  test('快速导航功能', async ({ page }) => {
    await page.goto('/july/hanabi/tokyo');
    
    // 检查快速导航按钮
    const navButtons = page.locator('[data-testid="quick-nav"] button');
    await expect(navButtons).toHaveCountGreaterThanOrEqual(2);
    
    // 测试上一个/下一个地区按钮
    const nextButton = page.locator('text=埼玉花火');
    if (await nextButton.isVisible()) {
      await nextButton.click();
      await expect(page.url()).toContain('/saitama');
    }
  });

  test('搜索和筛选功能', async ({ page }) => {
    await page.goto('/july/hanabi/tokyo');
    
    // 检查视图切换按钮
    const viewToggle = page.locator('[data-testid="view-toggle"]');
    if (await viewToggle.isVisible()) {
      await viewToggle.click();
      await page.waitForTimeout(500);
    }
    
    // 检查点赞功能
    const likeButtons = page.locator('[data-testid="like-button"]');
    if (await likeButtons.count() > 0) {
      await likeButtons.first().click();
    }
  });
}); 