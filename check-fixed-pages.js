// 检查修复页面的脚本
const fixedPages = [
  // 北关东花火
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/kitakanto/mito-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/kitakanto/moka-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/kitakanto/tamura-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/kitakanto/tatebayashi-hanabi/',
  
  // 甲信越花火
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/anime-classics-anisong-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/fuji-kawaguchi-lake-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/gion-kashiwazaki-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/nojiri-lake-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/sanjo-natsumatsuri-hanabi/',
  'https://tokyo-seasonal-guide.vercel.app/july/hanabi/koshinetsu/suzaka-minna-hanabi/'
];

async function checkPage(url) {
  try {
    const response = await fetch(url);
    const status = response.status;
    const text = await response.text();
    
    // 检查是否包含维护页面的标识
    const isMaintenance = text.includes('页面正在维护中') || text.includes('maintenance');
    
    // 检查是否包含花火大会的关键内容
    const hasContent = text.includes('花火大会') && text.includes('活动信息') && text.includes('观赏攻略');
    
    return {
      url,
      status,
      isMaintenance,
      hasContent,
      success: status === 200 && !isMaintenance && hasContent
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      error: error.message,
      success: false
    };
  }
}

async function checkAllPages() {
  console.log('🔍 开始检查10个修复页面的状态...\n');
  
  const results = [];
  
  for (const url of fixedPages) {
    console.log(`检查中: ${url}`);
    const result = await checkPage(url);
    results.push(result);
    
    if (result.success) {
      console.log('✅ 页面正常');
    } else {
      console.log(`❌ 页面异常: ${result.status} - 维护模式: ${result.isMaintenance} - 有内容: ${result.hasContent}`);
    }
    console.log('');
  }
  
  // 统计结果
  const successCount = results.filter(r => r.success).length;
  const totalCount = results.length;
  
  console.log('📊 检查结果统计:');
  console.log(`✅ 正常页面: ${successCount}/${totalCount}`);
  console.log(`❌ 异常页面: ${totalCount - successCount}/${totalCount}`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 所有页面都已修复成功！');
  } else {
    console.log('\n⚠️ 还有页面需要修复');
    results.filter(r => !r.success).forEach(r => {
      console.log(`- ${r.url}: ${r.status}`);
    });
  }
  
  return results;
}

// 运行检查
checkAllPages().catch(console.error); 