import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// 데이터가 들어있는 진짜 폴더를 찾기 위해 우선순위 조정
const srcCandidates = [
  path.join(root, 'dist', 'pagefind'), // 언더바 없는 쪽이 실제 데이터가 있을 확률 높음
  path.join(root, 'dist', '_pagefind')
];
const dest = path.join(root, 'public', 'pagefind');

function copyRecursive(source, destination) {
  if (!fs.existsSync(source)) return;
  
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`🚀 [복사 중] ${entry.name}`);
    }
  }
}

console.log('--- 검색 데이터 최종 복사 작업 시작 ---');

// 기존 public/pagefind 삭제
if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}

let foundSrc = null;
for (const cand of srcCandidates) {
  // 폴더가 존재하고, 안에 내용물이 있는지 확인
  if (fs.existsSync(cand) && fs.readdirSync(cand).length > 0) {
    foundSrc = cand;
    break;
  }
}

if (foundSrc) {
  console.log(`📂 유효한 원본 발견: ${foundSrc}`);
  copyRecursive(foundSrc, dest);
  console.log('\n✨ 모든 파일이 성공적으로 복사되었습니다!');
  console.log('--- 이제 브라우저에서 테스트해 보세요! (새로고침 필수) ---');
} else {
  console.error('❌ 유효한 검색 데이터를 찾을 수 없습니다. npm run build를 먼저 실행해 주세요.');
}
