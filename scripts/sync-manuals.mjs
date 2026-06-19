import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------
// 설정 (Settings)
// ---------------------------------------------------------
const SOURCE_MANUAL_DIR = 'E:\\DS_LSC\\dsvault\\Marketing\\06_Manual';
const SOURCE_RESOURCE_DIR = 'E:\\DS_LSC\\dsvault\\Marketing\\03_Resources';
const TARGET_CONTENT_BASE = path.join(process.cwd(), 'src', 'content', 'manuals');
const TARGET_CONTENT_DIR = path.join(TARGET_CONTENT_BASE, 'ko');
const TARGET_PUBLIC_DIR = path.join(process.cwd(), 'public', 'images', '03_Resources');

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

async function syncManuals() {
  try {
    console.log(`${COLORS.cyan}=== DSPAUT 매뉴얼 & 리소스 통합 동기화 (경로 최적화 버전) 시작 ===${COLORS.reset}\n`);

    // 1. 대상 폴더 정리 (한국어 폴더만 정리하여 영문 폴더를 보호함)
    if (fs.existsSync(TARGET_CONTENT_DIR)) {
      fs.rmSync(TARGET_CONTENT_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TARGET_CONTENT_DIR, { recursive: true });

    if (fs.existsSync(TARGET_PUBLIC_DIR)) {
      fs.rmSync(TARGET_PUBLIC_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TARGET_PUBLIC_DIR, { recursive: true });

    // 2. 이미지 리소스 복사 (Public 폴더로)
    console.log(`${COLORS.blue}[1/2] 이미지 리소스를 Public 폴더로 복사 중...${COLORS.reset}`);
    copyRecursive(SOURCE_RESOURCE_DIR, TARGET_PUBLIC_DIR);

    // 3. 매뉴얼 복사 및 경로 자동 변환 (src/content 폴더로)
    console.log(`\n${COLORS.blue}[2/2] 매뉴얼 파일 복사 및 이미지 경로 변환 중...${COLORS.reset}`);
    copyAndProcessManuals(SOURCE_MANUAL_DIR, TARGET_CONTENT_DIR);

    console.log(`\n${COLORS.green}✨ 모든 동기화 및 경로 최적화가 성공적으로 완료되었습니다!${COLORS.reset}`);
    console.log(`${COLORS.yellow}💡 이제 브라우저를 새로고침하면 이미지가 보일 것입니다.${COLORS.reset}`);

  } catch (error) {
    console.error(`\n❌ 동기화 중단: ${error.message}`);
    process.exit(1);
  }
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const allowedExts = ['.md', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
      if (allowedExts.includes(ext)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

function copyAndProcessManuals(src, dest) {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    // 대상 경로를 항상 언더바 버전으로 생성
    const normalizedName = entry.name.replace(/ /g, '_');
    const destPath = path.join(dest, normalizedName);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyAndProcessManuals(srcPath, destPath);
    } else if (entry.name.endsWith('.md') && !entry.name.endsWith('Plan.md')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // 이미지 경로 변환
      content = content.replace(/\.\.\/\.\.\/03_Resources\//g, '/images/03_Resources/');
      
      fs.writeFileSync(destPath, content, 'utf8');
    }
  }
}

syncManuals();
