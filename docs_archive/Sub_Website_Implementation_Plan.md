# 📋 DSPAUT 서브 홈페이지 구축 최종 구현 계획서 (V2)

이 계획서는 전문적인 장비 매뉴얼 및 블로그 콘텐츠를 제공하기 위한 DSPAUT 서브 웹사이트 구축의 기술적 방향과 실행 지침을 정의합니다.

---

## 🎯 프로젝트 목표
1. **전문성**: 바이어들에게 신뢰를 줄 수 있는 프리미엄 디자인의 매뉴얼 포털 구축.
2. **안정성**: 4단계 오류 처리 로직이 적용된 동기화 시스템으로 데이터 무결성 보장.
3. **최적화**: 글로벌 SEO(robots.txt, hreflang) 및 초고속 검색 기능 제공.

---

## 🛠 기술 스택 (Tech Stack)
*   **Framework**: Astro (정적 사이트 생성)
*   **Styling**: Tailwind CSS + daisyUI (프리미엄 UI 컴포넌트)
*   **Behavior**: Alpine.js (경량 인터랙션 처리)
*   **Diagrams**: Mermaid.js (텍스트 기반 기술 도식화)
*   **Search**: Pagefind (빌드 후 자동 인덱싱)
*   **i18n**: Astro 내장 i18n 라우팅 (`/ko`, `/en`)

---

## 🏗 주요 기능 및 상세 구현 방안

### 1. 4단계 보안 동기화 시스템 (Sync Script)
데이터 동기화 시 발생할 수 있는 사고를 방지하기 위해 다음 4단계를 거칩니다.
1. **사전 검사(Pre-check)**: 복사 시작 전 원본 폴더(`06_Manual`) 접근 권한 및 디스크 용량 확인.
2. **상세 로깅(Logging)**: 파일별 성공/실패 원인을 터미널에 **색상 텍스트**(성공-녹색, 실패-적색)로 출력.
3. **안전 중단(Fail-safe)**: 치명적 에러 발생 시 즉시 중단을 통해 불완전한 데이터 복사 방지.
4. **단순 복구(Recovery)**: 덮어쓰기(Overwrite) 방식을 사용하여 문제 발생 시 원본 재실행만으로 복구 가능.

### 2. 구체적 SEO 및 크롤링 전략
*   **robots.txt**: 모든 검색엔진에 대한 기본 허용을 설정하되, `*Plan.md` 파일이나 내부 관리용 경로에 대한 접근을 명시적으로 차단.
*   **Metadata**: 각 언어별 페이지에 `hreflang` 태그 및 `sitemap.xml` 자동 생성 적용.
*   **OG 태그**: 링크 공유 시 전문적인 이미지가 노출되도록 오픈 그래프 설정.

---

## 📅 단계별 체크리스트 (우선순위)

### [1단계] 환경 설정 (The Foundation)
- [ ] (필수) Astro 프로젝트 초기화 및 i18n 설정
- [ ] (필수) Tailwind CSS 및 daisyUI 설치
- [ ] (권장) 다크모드/라이트모드 테마 구성

### [2단계] 공통 레이아웃 (The Skeleton)
- [ ] (필수) 다국어 대응 Base Layout 제작
- [ ] (필수) Alpine.js를 활용한 반응형 GNB(드롭다운 포함)
- [ ] (권장) 로딩 스켈레톤 UI 적용

### [3단계] 데이터 연동 (The Data)
- [ ] (필수) 4단계 오류 처리가 포함된 Sync Script 제작
- [ ] (필수) Astro Content Collections 스키마 정의
- [ ] (권장) 이미지 최적화 파이프라인 구성

### [4단계] 상세 기능 (The Features)
- [ ] (필수) 본문 목차(TOC) 및 Mermaid.js 연동
- [ ] (필수) Pagefind 검색 인덱싱 자동화 구성
- [ ] (권장) 코드 하이라이팅 및 복사 기능

### [5단계] 최적화 (The Polish)
- [ ] (필수) robots.txt 및 sitemap 설정
- [ ] (필수) 모바일 반응형 최종 점검
- [ ] (권장) 페이지 전환 애니메이션 추가

---

## 🚀 시작 가이드: 오늘 당장 착수하기

지금 바로 터미널에서 다음 순서대로 실행하여 프로젝트를 시작할 수 있습니다.

**1. 프로젝트 폴더 생성 및 이동**
```bash
mkdir dspaut-portal
cd dspaut-portal
```

**2. Astro 초기화 (현재 폴더에 생성)**
```bash
npx create-astro@latest ./ --template minimal --install --no-git --yes
```

**3. 필수 플러그인 설치 (Tailwind, Alpine.js)**
```bash
npx astro add tailwind
npx astro add alpinejs
```

**4. daisyUI 설치**
```bash
npm install -D daisyui@latest
```

---

## 🙋‍♂️ 최종 결정이 필요한 사항
1. **Clean Sync**: 동기화 시 기존 폴더를 비우고 새로 복사할까요? (Clean Sync 추천)
2. **배포**: Cloudflare Pages를 기본 배포처로 설정하고 작업을 진행할까요?
