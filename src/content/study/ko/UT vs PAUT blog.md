---
title: "UT vs PAUT — 무엇이 어떻게 다른가"
publishDate: 2026-06-10
description: "초음파 탐상(UT)과 위상 배열 초음파 탐상(PAUT)의 빔 생성 방식, 검사 속도, 이미징 능력 등 기술적 차이와 현장 선택 기준을 정리합니다."
tags: ["UT", "PAUT", "비교분석"]
category: "3. 위상 배열 초음파 탐상 (PAUT) 심화"
order: 10
---

초음파 탐상(UT)과 위상 배열 초음파 탐상(PAUT)은 같은 초음파 원리를 기반으로 하지만, 빔 생성 방식과 검사 능력에서 본질적인 차이가 있습니다. 두 기법의 기술적 차이와 현장 선택 기준을 정리합니다.
---
## 1. 공통 기반 — 두 기법은 같은 뿌리에서 출발한다

[cite_start]UT와 PAUT는 모두 압전 소자(Piezoelectric Element)를 이용해 초음파를 재료 내부로 전파하고, 결함 또는 후면벽에서 반사된 에코를 분석하는 펄스-에코(Pulse-Echo) 원리를 공유합니다[cite: 86]. [cite_start]적용 주파수 범위(0.5~25 MHz), 결함 검출 메커니즘, 음속 기반 깊이 계산 방식도 동일합니다[cite: 87].

[cite_start]두 기법의 차이는 '초음파를 어떻게 생성하고 제어하는가'에서 시작됩니다[cite: 88].

* [cite_start]**기존 UT**: 고체 재료가 음파의 좋은 전도체라는 사실에 기반하여 초음파 원리가 작동합니다[cite: 89].
* [cite_start]**PAUT**: 정밀하게 계산된 시간 지연 펄스에 의해 제어되는 다중 소자가 보강 위상 간섭을 일으켜 데이터를 생성합니다[cite: 90].

---

## 2. 핵심 차이 — 빔을 어떻게 제어하는가

### 2-1. 기존 UT: 단일 소자, 고정 빔
[cite_start]기존 UT 탐촉자는 하나의 압전 소자로 구성됩니다[cite: 92]. [cite_start]소자가 진동하면 고정된 방향으로 초음파 빔이 방사됩니다[cite: 93]. [cite_start]검사 각도를 바꾸려면 탐촉자를 물리적으로 이동하거나, 다른 각도의 탐촉자로 교체해야 합니다[cite: 94].
* [cite_start]**빔 각도**: 고정 (웨지 각도에 의해 결정됨) [cite: 95]
* [cite_start]**집속 깊이**: 고정 (소자 곡률 또는 렌즈에 의해 결정됨) [cite: 96]
* [cite_start]**다각도 검사**: 탐촉자 교체 또는 물리적 이동 필수 [cite: 97]

### 2-2. PAUT: 다수 소자, 전자적 빔 제어
[cite_start]PAUT 탐촉자는 16~128개 이상의 독립 소자로 구성됩니다[cite: 99]. [cite_start]각 소자에 정밀하게 계산된 시간 지연(Time Delay)을 적용하면, 소자에서 방사된 구면파들이 특정 방향에서 보강 간섭(Constructive Interference)을 일으켜 빔이 형성됩니다[cite: 99]. [cite_start]이 시간 지연 조합(Focal Law)을 소프트웨어로 실시간 전환하여 탐촉자를 움직이지 않고도 빔을 조향·집속합니다[cite: 100].
* [cite_start]**빔 각도**: 소프트웨어 제어로 연속 가변 가능 (예: 40°~70° 범위, 1° 간격) [cite: 101]
* [cite_start]**집속 깊이**: Focal Law별로 독립 설정 가능, 다중 집속점 동시 구현 가능 [cite: 102]
* [cite_start]**다각도 검사**: 단일 위치에서 전자적 스위핑 (S-Scan) 수행 [cite: 103]

> **핵심 비유**
> [cite_start]UT는 손전등 한 개를 손으로 움직이며 방을 비추는 것과 같고, PAUT는 LED 배열을 전자적으로 제어해 원하는 방향과 거리에 빔을 즉시 집중시키는 것과 같습니다[cite: 104].

---

## 3. 기술 항목별 상세 비교

| 비교 항목 | 기존 UT | PAUT | [cite_start]우위 항목 [cite: 107] |
| :--- | :--- | :--- | :--- |
| **빔 생성 방식** | [cite_start]단일 압전 소자, 고정 방향 방사 [cite: 107] | [cite_start]다수 소자에 시간 지연 적용, 전자적 빔 형성 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **빔 조향** | [cite_start]탐촉자 물리적 이동 또는 각도별 교체 [cite: 107] | [cite_start]전자적 스위핑 (S-Scan), 이동 없이 다각도 검사 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **빔 집속** | [cite_start]고정 초점 (렌즈 또는 곡면 소자) [cite: 107] | [cite_start]소프트웨어로 초점 깊이 가변 설정 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **탐촉자 구성** | [cite_start]단일 소자 (Monolithic) [cite: 107] | [cite_start]16~128개 이상 독립 소자 어레이 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **검사 속도** | [cite_start]각도별 탐촉자 교체 → 다회 스캔 필요 [cite: 107] | [cite_start]단일 탐촉자로 다각도 동시 검사 → 고속 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **데이터 표현** | [cite_start]A-Scan 파형 위주, 해석자 역량 의존 [cite: 107] | [cite_start]S-Scan 실시간 단면 이미지, 직관적 결함 확인 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **결함 이미징** | [cite_start]B/C-Scan 가능하나 설정 복잡 [cite: 107] | [cite_start]A/B/C/S-Scan 동시 표시, 풍부한 이미지 정보 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **기록 및 재현성** | [cite_start]수동 기록, 재현성 제한적 [cite: 107] | [cite_start]전체 스캔 데이터 디지털 저장, 오프라인 분석 가능 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **제한 접근 부위** | [cite_start]접근 제한 시 탐촉자 교체·조작 어려움 [cite: 107] | [cite_start]소프트웨어 빔 제어로 유연한 대응 [cite: 107] | [cite_start]PAUT [cite: 107] |
| **장비 비용** | [cite_start]저가, 구조 단순 [cite: 107] | [cite_start]고가, 하드웨어·소프트웨어 복잡도 높음 [cite: 107] | [cite_start]UT [cite: 107] |
| **운용 난이도** | [cite_start]상대적으로 낮음, 교육 진입 장벽 낮음 [cite: 107] | [cite_start]Focal Law 설계 등 전문 지식 필요 [cite: 107] | [cite_start]UT [cite: 107] |
| **유지보수** | [cite_start]부품 단순, 현장 유지보수 용이 [cite: 107] | [cite_start]복잡한 전자 회로, 전문 A/S 필요 [cite: 107] | [cite_start]UT [cite: 107] |
| **적용 규격** | [cite_start]ASME, EN, KS 등 광범위한 규격 지원 [cite: 107] | [cite_start]ASME Sec V, EN ISO 18563 등 전용 규격 필요 [cite: 107] | [cite_start]UT [cite: 107] |

---

## 4. 이미징 능력의 차이

### 4-1. 기존 UT의 이미징
[cite_start]기존 UT는 A-Scan 파형을 기본 출력으로 합니다[cite: 110]. [cite_start]B-Scan·C-Scan도 가능하지만, 탐촉자를 물리적으로 래스터 스캔하며 각 위치의 A-Scan을 축적해야 합니다[cite: 110]. [cite_start]결함 해석은 파형 패턴에 대한 숙련된 판독 능력에 크게 의존합니다[cite: 111].
* [cite_start]**A-Scan**: 단일 파형, 깊이·진폭 정보 제공 [cite: 112]
* [cite_start]**B/C-Scan**: 물리적 스캔 후 축적 가능, 셋업 구조 복잡 [cite: 113]
* [cite_start]**실시간 단면 이미지**: 구현 불가 (탐촉자 이동 후 데이터 재구성 필요) [cite: 114]

### 4-2. PAUT의 이미징
[cite_start]PAUT는 A/B/C/S-Scan을 단일 스캔으로 동시에 표시합니다[cite: 116]. [cite_start]특히 S-Scan(Sectorial Scan)은 다양한 각도의 A-Scan을 부채꼴 좌표계로 배치하여 실시간 단면 이미지를 제공합니다[cite: 116]. [cite_start]결함의 위치·방향·크기를 직관적으로 파악할 수 있어 해석자 역량 의존도가 상대적으로 낮아집니다[cite: 117].
* [cite_start]**S-Scan**: 다각도 부채꼴 실시간 단면 이미지 제공 [cite: 118]
* [cite_start]**E-Scan**: 고정 각도 선형 스캔, 대면적 고속 검사에 활용 [cite: 119]
* [cite_start]**오프라인 분석**: 전체 데이터 저장 후 게이트 재설정 및 뷰 전환 가능 [cite: 120]

---

## 5. 검사 속도와 커버리지

[cite_start]용접부 검사를 예로 들면, 기존 UT는 두께에 따라 45°·60°·70° 탐촉자를 각각 교체하며 3회 이상 스캔해야 전체 두께를 커버합니다[cite: 122]. [cite_start]반면 PAUT는 단일 탐촉자로 40°~70° 전 구간을 한 번에 스캔하여 동일한 커버리지를 훨씬 빠르게 달성합니다[cite: 123].

* [cite_start]**기존 UT**: 탐촉자 교체 포함 검사 시간 = (각도 수) × (1회 스캔 시간) [cite: 124]
* [cite_start]**PAUT**: 검사 시간 ≈ 단일 패스 스캔 시간 (각도 수와 관계없음) [cite: 125]

[cite_start]실제 현장에서 PAUT는 용접부 1m당 검사 시간을 기존 UT 대비 50~70% 단축하는 사례가 보고되고 있습니다[cite: 126]. [cite_start]단, 셋업(Focal Law 설계 및 교정) 시간은 PAUT가 더 길 수 있습니다[cite: 127].

---

## 6. 비용과 운용 복잡도

[cite_start]PAUT가 기술적으로 우위이지만, 비용과 운용 복잡도에서는 기존 UT가 유리합니다[cite: 129].

### 6-1. 장비 비용
* [cite_start]**기존 UT 장비**: 수백만 원 수준의 포터블 기기부터 구성 가능 [cite: 131]
* [cite_start]**PAUT 장비**: 소프트웨어·다채널 펄서·A/D 컨버터 통합으로 수천만 원 이상 소요 [cite: 132]
* [cite_start]**탐촉자 비용**: PAUT 어레이 탐촉자는 단일 소자 탐촉자 대비 수 배~수십 배 고가 [cite: 133]

### 6-2. 운용 전문성
* [cite_start]**기존 UT**: ASNT UT Level II 수준의 교육으로 현장 운용 가능 [cite: 135]
* [cite_start]**PAUT**: Focal Law 설계, S-Scan 해석, 장비 교정 등 추가 교육 필요 [cite: 136]
* [cite_start]**규격 요건**: ASME Sec V Article 4/14, EN ISO 18563 등 PAUT 전용 자격 및 절차 검증 요구 [cite: 137]

---

## 7. 현장 적용 선택 기준

[cite_start]두 기법은 경쟁 관계가 아니라 보완 관계입니다[cite: 139]. [cite_start]검사 대상, 요구 신뢰도, 비용, 규격 요건에 따라 최적 기법을 선택해야 합니다[cite: 139].

| 상황 | 권장 기법 | [cite_start]이유 [cite: 140] |
| :--- | :--- | :--- |
| **단순 형상, 소량 검사** | UT | [cite_start]저비용, 빠른 셋업 [cite: 140] |
| **두께 측정, 단순 결함 검출** | UT | [cite_start]A-Scan으로 충분한 정보 제공 [cite: 140] |
| **현장 간이 검사, 장비 휴대성 중요** | UT | [cite_start]장비 소형·경량, 배터리 운용 용이 [cite: 140] |
| **용접부 전체 커버리지 검사** | PAUT | [cite_start]다각도 단일 패스, 검사 속도·신뢰성 확보 [cite: 140] |
| **복잡 형상, 접근 제한 부위** | PAUT | [cite_start]전자적 빔 조향으로 유연 대응 [cite: 140] |
| **결함 이미징 및 정량 평가 필요** | PAUT | [cite_start]S-Scan 실시간 단면, 오프라인 분석 지원 [cite: 140] |
| **고안전 요구 검사 (원자력·항공)** | PAUT + ToFD | [cite_start]높은 신뢰성·커버리지, 규격 요건 충족 [cite: 140] |
| **오스테나이트 강재 등 고감쇠재** | PAUT (TRL) | [cite_start]TRL PA 탐촉자로 구조 잡음 억제 [cite: 140] |

---

## 8. 요약

1. [cite_start]**물리적 원리는 동일**: 두 기법 모두 압전 효과와 펄스-에코 메커니즘을 공유합니다[cite: 143].
2. [cite_start]**핵심 차이는 빔 제어**: UT는 고정 빔, PAUT는 전자적 조향·집속으로 단일 위치에서 다각도 검사를 실현합니다[cite: 144].
3. [cite_start]**선택 기준은 검사 목적**: 단순·저비용 검사는 UT, 고속·다각도·이미징·고신뢰도 검사는 PAUT가 적합합니다[cite: 145].

[cite_start]PAUT는 기존 UT를 대체하는 기법이 아닙니다[cite: 146]. [cite_start]오히려 현장에서는 두 기법을 함께 운용하거나, PAUT에 ToFD를 추가하여 결함 검출과 정밀 측정을 상호 보완하는 방식이 일반적입니다[cite: 146].