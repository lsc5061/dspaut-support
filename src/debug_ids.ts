import { getCollection } from 'astro:content';

async function dump() {
  const manuals = await getCollection('manuals');
  console.log('--- MANUALS COLLECTION DUMP ---');
  manuals.forEach(m => {
    console.log(`ID: ${m.id}`);
  });
  console.log('-------------------------------');
}

// 이 스크립트는 실제 환경에서 실행하기 위해 
// Sidebar.astro 등에 임시로 로그를 추가하여 터미널에서 확인하는 것이 좋습니다.
