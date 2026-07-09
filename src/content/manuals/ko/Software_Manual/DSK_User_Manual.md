---
title: User Manual
description: Deepsound Software Development Kit (DSK) 버전 2.0 사용자 매뉴얼입니다.
version: v2.0
releaseDate: 2026-05-18
author: (주)성산연구소
---

# DSK 사용자 설명서

**Software Development Kit DSK — DSK Version 2.0**

---

**Copyright ⓒ 2026 / (주)성산연구소**

이 사용 설명서는 저작권법에 의해 보호받는 저작물입니다. ㈜성산연구소의 사전 서면 동의 없이 사용 설명서의 일부 또는 전체를 복제, 공중 송신, 배포, 번역하거나 전자 매체 또는 기계가 읽을 수 있는 형태로 바꿀 수 없습니다. 사용 설명서의 내용, 프로그램의 성능 개선을 위해 사전 예고 없이 변경될 수 있습니다.

**All rights reserved**

**API Reference for DSK 1.0**

**릴리스 2.0**

이 사용 설명서는 저작권법에 의해 보호받는 저작물입니다. ㈜성산연구소의 사전 서면 동의 없이 사용 설명서의 일부 또는 전체를 복제, 공중 송신, 배포, 번역하거나 전자 매체 또는 기계가 읽을 수 있는 형태로 바꿀 수 없습니다. 사용 설명서의 내용, 프로그램 성능 개선을 위해 사전 예고 없이 변경될 수 있습니다.

이 안내서의 내용은 정보 목적으로만 제공되며 예고 없이 변경 될 수 있습니다. (주)성산연구소는 이 안내서에 포함 된 정보 내용에 나타날 수 있는 오류나 부정확성에 대해 어떠한 책임이나 의무도 지지 않습니다. 귀하의 프로젝트에 포함시키고자 하는 기존의 이미지는 저작권법에 의해 보호 될 수 있으며, 사용 시 저작권 소유자에게 허가를 받아야 합니다.

이 소프트웨어에 포함 된 견본 자료 또는 Sample 양식의 회사 이름, 회사 로고 및 사용자 이름에 대한 언급은 실제 용도로만 사용 가능합니다.

기타 모든 상표 및 저작권은 해당 업체의 자산입니다.

**등록상표권**

- DEEPSOUND 로고는 ㈜성산연구소의 등록상표입니다.
- 마이크로소프트, MS-DOS 및 Windows는 Microsoft Corporation의 등록상표입니다.

**연락처 정보**
- **본사**: (주)성산연구소 (P: 02-2039-5725 | F: 02-2039-5726)
- **주소**: 경기도 군포시 공단로 140번길 52, 에이스하이테크시티 13층 1318호 대한민국
- **웹사이트**: [www.dspaut.com](http://www.dspaut.com) | **이메일**: admin@dspaut.com
- **품질**: 모든 작업은 (주)성산연구소 품질 표준에 따라 수행됩니다.

> **주의**  
> (주)성산연구소, 2026. Rev 2.0. 이 문서의 모든 정보는 사전 통보 없이 변경될 수 있습니다.

---

## DSK Version Check List

| Version | Check List |
|---------|------------|
| 1.0 | 최초 DSK Version 생성 |
| 1.3 | Multi Channel 구성 기능 추가 |
| 1.4 | Multi Board 구성 기능 추가 및 Focal Law Angle Resolution 확장 |
| 1.5 | UT Group 구성 기능 추가 및 UT 기능 확장 |
| 2.0 | USB 통신 삭제 및 LAN 통신 위주로 진행 |

---

## PREFACE

### 해당 Manual은 무엇을 의미합니까?

이 문서는 DSK에서 사용하기 위한 일반 기술 설계 문서입니다. 프로젝트 또는 DSK 소프트웨어 개발 키트를 제작 할 때 기술 지원하기 위하여 지침 및 템플릿 자료를 제공하고 있습니다.

### 해당 Manual의 대상은 누구입니까?

이 문서는 Microsoft C/C# 언어에 익숙한 작업자에게 도움을 주기 위함입니다.

대상은 C/C# 기본 언어에 대한 기본 지식을 가지고 있어야 하며, 초음파 소프트웨어 작업 유저에게 효율적인 작업을 지원합니다.

나머지 섹션 (DSK/API / ...)은 DSK 개발 프로젝트를 설정하는데 사용되는 API를 설정합니다.

정상적인 경우의 텍스트는 대부분 문서에 보관, 수정 또는 삭제 될 수 있습니다.

다른 글꼴로 된 텍스트는 관련 API 섹션용으로 작성된 Sample 코드를 제공합니다.

이 문서는 MS Word를 사용하여 작성되었으며, 이 문서의 최종 버전은 PDF 형식으로 배포됩니다.

---

## BASIE OF THIS DOCUMENT

다음 소개 섹션에서는 DSK에서 개발할 수 있는 시스템을 설계하는 방법에 대한 설명입니다. 이것은 표준을 설정하고 DSK 전반에 걸쳐 시스템의 설계 및 개발에 대한 일관된 접근 방식을 창출 하려고 하며, 그로 인해 API 개발과 시스템 구축 및 배포 방법의 일관성을 통해 이점을 얻을 수 있습니다.

---

## 1. INTRODUCTION

### 1.1 DSK 소개

DSK는 Deepsound Software Development Kit를 의미하며 기존의 DS Gear SDK를 대체하는 프로그램입니다.

DSK는 비파괴 초음파 검사를 위해 탐촉자부터 초음파 신호를 발생 시키고, 돌아오는 신호를 수집 및 분석 할 수 있습니다. 검사 하고자 하는 시스템에 맞춰 Hardware를 Control하고, 수집된 데이터를 가공하기 위해 DSK를 제공하며, 다양한 API 활용으로 손쉽게 비파괴 검사 시스템을 구축할 수 있도록 도와줍니다.

#### 목적

이 문서의 목적은 다음과 같습니다:

- DSK 프로그램 설치 전 Background 적용 설명
- DSK의 조작 설명
- DSK의 API 사용법 설명

사용자는 소프트웨어 아키텍처, 프로그래밍 언어 (C#/C) 및 Microsoft Visual Studio 프로그램에 대한 사전 지식이 있어야 합니다.

#### 개발환경

- Windows 10 x64 권장
- Microsoft Visual Studio 2017 이상
- NET Framework 8.0

---

## 2. DSK

### 2.1 BACKGROUND SETTING

Tutorials 프로그램을 설치 하기 전 배경환경을 설정 해야 합니다.

설정은 제공 된 프로그램 폴더 안에 설치가 필요한 목록으로 정리가 되어 있으며, 아래 방법을 통해 순차적으로 진행합니다.

설치가 필요한 목록:

- NET Framework 8.0
- Log2console
- Vcredist

#### 2.1.1 NET Framework 8.0 설치 방법

DSK 프로그램은 C#으로 구성 되어 있습니다. 개발을 위해 해당 프로그램을 설치하여 진행하시길 바랍니다.

> **중요:** 낮은 버전으로 실행 시 문제가 발생 할 수 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image1.png)


#### 2.1.2 Log2console 설치 방법

Log2console 프로그램은 DSK 개발 시 중요한 역할을 하고 있습니다. 개발 진행 시 문제가 되는 코드 및 위치를 읽어 수월하게 작업을 진행 할 수 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image2.png)


**Log2console 프로그램 기본 설정 방법:**

Log2console 프로그램 설치 후 실행 시 기본 설정을 하라는 문구가 발생합니다. 그러므로 아래와 같은 방법으로 설정을 하여 진행하시면 됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image3.png)


**#1** 상단 Tool에 버튼 클릭

**#2** 클릭 시 창 생성



![](/images/03_Resources/Image/DSK_User_Manual_Media/image4.png)


**#3** Add 클릭



![](/images/03_Resources/Image/DSK_User_Manual_Media/image5.png)


**#4** `"UDP (IP v4 and v6) / WinDebug (OutputDebugString)"` 각각 선택하여 목록 추가



![](/images/03_Resources/Image/DSK_User_Manual_Media/image6.png)


#### 2.1.3 Vcredist 설치 방법

Visual Studio 2017를 권장하고 있으며, 설치 시 발생 되는 문제를 최소화하기 위해 Vcredist를 설치를 해야 합니다.

설치 프로그램은 제공 된 폴더 안에 있으며, Windows 운영 체제를 확인하시고 설치 하시길 바랍니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image7.png)


### 2.2 프로그램 설치하기

이 섹션에는 DSK의 설치 및 제거에 대한 설명입니다. 프로그램이 Host-PC에서 설치를 실행 합니다. 프로그램의 설치와 함께 두 가지 버전 파일이 있습니다. DSK x86 설치 프로그램은 32 비트 (x86) Windows 운영 체제를 사용하는 반면 DSK x64 설치 프로그램은 64 비트 Windows 운영 체제 용으로 설계 되었습니다.

소프트웨어 설치는 다음과 같습니다: 설치 준비 (`DskTutorial_setup.exe`)



![](/images/03_Resources/Image/DSK_User_Manual_Media/image8.png)


**Next** → **Install** 버튼을 클릭 → 완료 **Close** 클릭



![](/images/03_Resources/Image/DSK_User_Manual_Media/image9.png)


완료 후 DEEPSOUND 설치 된 폴더 경로에 **DskTutorial** 폴더 생성



![](/images/03_Resources/Image/DSK_User_Manual_Media/image10.png)


### 2.3 폴더 설명

DSK 설치가 완료 되면 아래 이미지와 같은 폴더가 생성 됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image11.png)


| 폴더 이름 | 내용 |
|-----------|------|
| **01-InitDevice** | 01-InitDevice.csproj 소스 파일 포함 |
| **02-SScan** | 02-SScan.csproj 소스 파일 포함 |
| **03-AScan** | 03-AScan.csproj 소스 파일 포함 |
| **04-Inspection** | 04-Inspection.csproj 소스 파일 포함 |
| **10-SimplePAUT** | 10-SimplePAUT.csproj 소스 파일 포함 |
| **Bin** | Release 및 RES 폴더, 프로그램 .exe 포함 |
| **DskCommon** | .dll 소스 파일 포함 |
| **DskTutorial.sln** | Visual Studio 프로젝트 파일 |

---

## 3. TUTORIAL

### 3.1 TUTORIAL 1: Visual Studio DSK 적용 방법

**DSK**는 **Visual Studio 2017** 기준으로 프로그램 제작을 권장하며, 설치 후에 아래 이미지와 같은 방법으로 진행하시면 됩니다.

**#1** Visual Studio 2017 실행



![](/images/03_Resources/Image/DSK_User_Manual_Media/image12.png)


**#2** Visual Studio 상단 Tool **"파일"** 목록 클릭 후 열기 → **프로젝트 / 솔루션 (Ctrl+Shift+O)** 클릭



![](/images/03_Resources/Image/DSK_User_Manual_Media/image13.png)


**#3** 프로젝트 열기 생성창에서 DskTutorial 폴더 안 **DskTutorial.sln** 파일 클릭



![](/images/03_Resources/Image/DSK_User_Manual_Media/image14.png)


### 3.2 TUTORIAL 2: 프로그램 빌드 방법

`DskTutorial.sln`을 Visual Studio에 적용 완료 후 솔루션 탐색기에 6개 프로젝트가 등록 된 것을 알 수 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image15.png)


진행에 앞서 상단 Tool 목록 중 빌드를 선택 후 솔루션 다시 빌드를 실행하여 등록을 완료합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image16.png)


### 3.3 TUTORIAL 3: 프로젝트 별 사용법 및 실행 방법

DSK 프로그램을 사용하기 앞서 USB Cable 연결 및 Network 연결 상태 (R3, P3 장비만 가능)를 꼭 확인 하시길 바랍니다.

#### #1 01-InitDevice

`01-InitDevice`는 프로그램 개발의 첫 번째 단계이며, DSK 프로그램과 장비의 연결 상태를 확인하는 목적을 가지고 있습니다.

**해당 프로젝트를 활성화하는 방법**

`"InitDevice"`에 마우스 오른쪽 클릭 후 **"시작프로젝트로 설정"**을 클릭하여 선택합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image17.png)
![](/images/03_Resources/Image/DSK_User_Manual_Media/image18.png)


**UI 불러오는 방법**

`"Ctrl+F5"`를 클릭하게 되면 제작한 Form1.cs 화면이 나타납니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image19.png)


**UI 화면 구성 설명**

구성은 Init Device 및 Freeze로 되어 있습니다.

- **Init Device:** 장비와 연결 상태 확인 및 정상적으로 실행 시 아래 숫자 카운트가 올라갑니다.
- **Freeze:** Init Device 연결 상태가 완료가 되면 선택 항목은 활성화 되고 클릭 시 멈추는 기능입니다.

> **중요:** 장비에 대한 Project code 입력을 완료 후 진행하시길 바랍니다. Project code 입력 방법은 **"APPENDIX C"** 해당 링크를 통해 이동하시면 됩니다.

#### #2 02-SScan

`02-SScan`는 장비 연결 후 S-scan의 이미지를 확인 할 수 있는 단계입니다.

프로젝트 활성화 후 UI 화면을 불러오면 아래와 같은 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image20.png)


**UI 화면 구성 설명**

구성은 Init Device 및 Freeze로 되어 있습니다.

- **Init Device:** 장비와 연결을 하며, 정상적으로 실행 시 S-scan 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image21.png)


- **Freeze:** 클릭 시 프로그램 멈추는 기능입니다.

#### #3 03-AScan

`03-AScan`는 장비 연결 후 A-scan / S-scan의 이미지를 확인 할 수 있는 단계입니다.

프로젝트 활성화 후 UI 화면을 불러오면 아래와 같은 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image22.png)


**UI 화면 구성 설명**

구성은 Init Device 및 Freeze로 되어 있습니다.

- **Init Device:** 장비와 연결을 하며, 정상적으로 실행 시 A-scan / S-scan의 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image23.png)


- **Freeze:** 클릭 시 프로그램 멈추는 기능입니다.

#### #4 04-Inspection

`04-Inspection`는 S-scan의 화면 및 Encoder 구동을 확인 할 수 있는 단계입니다.

프로젝트 활성화 후 UI 화면을 불러오면 아래와 같은 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image24.png)


**UI 화면 구성 설명**

구성은 Init Device, Freeze, Start, Stop, Clear, X = 0mm로 되어 있습니다.

- **Init Device:** 장비와 연결을 하며, 정상적으로 실행 시 S-scan의 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image25.png)


- **Freeze:** 클릭 시 프로그램 멈추는 기능입니다.
- **Start:** Encoder Start 적용 되는지 확인 기능입니다. (이미지에는 영향 없음)
- **Stop:** Encoder Stop 적용 되는지 확인 기능입니다. (이미지에는 영향 없음)
- **X= 0mm:** Scan Encoder 조작 시 카운트가 올라갑니다.
- **Clear:** Scan Encoder 조작 카운트를 초기화 시켜줍니다.

#### #5 10-SimplePAUT

`10-SimplePAUT`는 전체적인 UI가 완성된 프로그램을 볼 수 있으며, 이미지는 A-scan, S-scan, B-scan, C-scan을 확인 할 수 있습니다.

DSK 최종 단계로 여러 목록의 Parameter 값을 적용하여 이미지를 구현 할 수 있습니다.

프로젝트 활성화 후 UI 화면을 불러오면 아래와 같은 이미지가 발생합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image26.png)


**UI 화면 구성 설명**

구성은 Init Device, Encoder, Inspect, Scan Layout, 각 Parameter 값 적용 목록으로 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image27.png)


- **File:** Load & Save 기능을 사용할 수 있는 목록입니다.

> **중요:** Load & Save .json 파일 경로는 DskTutorial > Bin > RES > Saves > UserSetup에 저장 및 불러올 수 있습니다. (유저가 원하는 위치 변경 가능 및 마지막 Save 위치로 유지)

- **Init Device:** 장비와 연결을 시도하고 이미지가 발생합니다.
- **Encoder:** Scan, Index Axis로 구성 되어 있으며, Encoder 연결 후 이동한 만큼의 거리 값이 표현됩니다. 아이콘은 Encoder의 거리 값을 0mm로 초기화 시켜주는 기능입니다.
- **AScan index:** Vector의 현재 위치를 표현 합니다.
- **Inspect:** Start, Stop으로 구성 되어 있으며, Start 클릭 후 Encoder 작동 시 C-scan, B-scan Data 수집을 진행하고 Stop를 클릭 시 수집된 Data를 저장 할 수 있습니다.

**General**

전반적인 이미지에 관여하는 Parameter 및 정보가 구성 되어 있는 목록입니다. Gain / Digitizing / Beam type / Refraction Angle / Resolution / Aperture Size / Aperture Step / Vector Count / Sample Count / Acquisition Rate로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image28.png)


- **Gain:** 값에 의해 신호를 컨트롤 할 수 있습니다.
- **Digitizing:** Sample count에 영향을 끼치며, Frequency의 Data 변환을 선택 할 수 있습니다.
- **Beam type:** Azimuthal / Linear 선택하는 목록입니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image29.png)
![](/images/03_Resources/Image/DSK_User_Manual_Media/image30.png)


- **Refraction Angle Start, Stop:** Angle의 범위를 설정하는 목록입니다.
- **Resolution:** Angle 범위를 세분 또는 대별하여 이미지를 확인 목록 입니다. (Azimuthal 선택 시 활성화)
- **Aperture Size:** Linear type에서 활성화 되며, Vector Group Count를 설정하는 목록입니다. (Aperture Size 설정 시 예를 들어 16을 설정 시 1~16, 2~17, 3~18 … 순차적으로 진행)
- **Aperture Step:** Linear type에서 활성화 되며, Vector Group Count를 설정하는 목록입니다. (Aperture Step 설정 시 예를 들어 16을 설정 시 1~16, 17~32, 33~45 …로 진행)
- **Vector Count:** 설정한 범위에 대한 개수를 표현한 값입니다.
- **Sample Count:** Sample Data 개수를 표현한 값입니다.
- **Acquisition Rate:** 샘플링 속도 값을 표현합니다.

**Probe**

사용하고 있는 Probe의 정보 입력 및 설정하는 목록입니다. Frequency / Element Pitch / Number of Element / UT connector / Transmitter / Receiver / Probe First Element로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image31.png)


- **Frequency:** 사용하고 있는 Probe의 주파수를 입력하는 목록입니다.
- **Element Pitch:** 사용하고 있는 Probe의 Element간의 거리를 입력하는 목록입니다.
- **Number of Element:** 사용하고 있는 Probe의 Element의 개수를 입력하는 목록입니다.
- **UT connector:** Conventional UT를 활성화 해주는 Check 박스 입니다. (UT Port가 존재하는 장비에만 해당되며, 설명은 **"APPENDIX G"** 링크를 참고하시길 바랍니다.)
- **Transmitter Start, Stop:** 송신 Element의 시작 및 마지막 값을 설정하는 목록입니다.
- **Receiver Start, Stop:** 수신 Element의 시작 및 마지막 값을 설정하는 목록입니다.
- **Probe First Element:** Element의 시작 위치를 설정하는 목록입니다.

**Wedge**

사용하고 있는 Wedge의 정보를 입력하는 목록입니다. Enable / Wedge Angle / Wedge Velocity / Height로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image32.png)


- **Enable:** Wedge를 활성화 해주는 Check 박스 입니다.
- **Wedge Angle:** 사용하고 있는 Wedge Angle를 입력하는 목록입니다.
- **Wedge Velocity:** 사용하고 있는 Wedge Velocity를 입력하는 목록입니다.
- **Height:** 사용하고 있는 Wedge Height 정보를 입력하는 목록입니다.

**Pulse**

신호에 대한 부분을 설정하는 목록입니다. PRF / Pulse Width / Voltage / Burst Count / Focus Position / Wave Velocity로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image33.png)


- **PRF:** 원하는 값을 입력합니다. (Depth에 최소 / 최대에 의해 값이 변동됩니다.)
- **Pulse Width:** Probe Frequency 값에 의해 결정됩니다. (계산은 1 / 5(5Mhz) = 0.2 (200ns))
- **Voltage:** 원하는 값을 입력합니다. (범위: 25~200V)
- **Burst Count:** Bipolar Wave만의 장점인 Burst wave를 설정 할 수 있습니다. (범위: 1~3)
- **Focus Position:** 원하는 위치 값을 입력합니다.
- **Wave Velocity:** 재질의 속도 값을 입력합니다.

**Receive**

수신 신호에 대한 부분을 설정하는 목록입니다. Depth Start / Depth Range / Filter Start / Filter Stop / Wedge Delay로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image34.png)


- **Depth Start:** 스캔 범위에 대한 시작 부분을 설정하는 목록입니다.
- **Depth Stop:** 스캔 범위에 전체를 설정하는 목록입니다.
- **Filter Start / Stop:** Probe Frequency가 기준이 되며, 원하는 범위를 설정하는 목록입니다.
- **Wedge Delay:** 원하는 Delay값을 설정하는 목록입니다.

**Mechanical**

Scanner Encoder에 대한 설정을 할 수 있는 목록입니다. Encoder Axis Reverse / Scan Axis (Start, Stop, Step, Resolution, Reverse) / Index Axis (Start, Stop, Step, Resolution, Reverse)로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image35.png)


- **Encoder Axis Reverse:** Scan Axis / Index Axis를 위치를 전환해주는 Check 박스 입니다.

**Scan Axis**

- **Start:** Scanner 시작 위치 값을 설정하는 목록입니다.
- **Stop:** Scanner 마지막 위치 값을 설정하는 목록입니다.
- **Step:** 진행하는 위치 값의 간격을 설정하는 목록입니다.
- **Resolution:** Scanner의 Resolution 값을 입력하는 목록입니다.
- **Reverse:** 진행 방향을 반대로 전환해주는 Check 박스입니다.

**Index Axis:** Scan Axis 설명과 동일합니다.

**Gate**

신호에 대한 정보 및 위치를 조정 할 수 있는 목록입니다. Gate A (Start, Range, Threshold, A%, A^) / Gate B (Start, Range, Threshold, B%, B^)로 구성 되어 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image36.png)


- **Check box:** Gate 활성화 시 적용
- **Start:** Gate의 시작 위치 값을 적용하는 목록입니다.
- **Range:** Gate의 범위 값을 적용하는 목록입니다.
- **Threshold:** Gate의 높이 값을 적용하는 목록입니다.
- **A% / B%:** Gate에 걸친 신호에 대한 Amplitude 값을 나타냅니다.
- **A^ / B^:** Gate에 걸친 신호에 대한 최대 Peak 값을 나타냅니다.

---

## 4. ULTRASOUND ENGINEERING

DSK에서 사용되는 기본적인 UE (Ultrasound Engineering) Parameter 정의에 대한 설명입니다.

### Vector

비파괴(Non-Destructive Testing) 초음파 검사에서 Vector는 특정 각도와 Range로 수집 된 초음파 데이터로 정의됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image37.png)


#### Vector 수 계산

Vector의 개수를 계산하는 수식은 다음과 같습니다.

```
Vector count = (Refracted angle end – Refracted angle start) / Resolution + 1
```

- Refracted angle의 최대 범위는 -85 ~ 85도 이며, Resolution 설정 값 범위는 0.5 ~ 2로 구현 할 수 있습니다.

**예시:**

> [조건] Refracted angle 범위는 Start 10도 Stop 20도, Angle Resolution 값은 2.0로 하여 공식으로 풀이 할 시 전체 Vector 수는 6입니다.
>
> **Ex.** (20 - 10) / 2.0 + 1 = 6 (Vector Count)

### Sample

탐촉자에서 수집된 아날로그 신호가 ADC (Analog-Digital Converter)를 거쳐 디지털화 되면서(Sampling) 하나의 Sample 데이터를 생성 합니다.

**Ex.** 50MHz 주파수의 Digitizing Frequency로 설정 시 Sample은 20e-9 (nsec) 마다 (1초 / 50MHz) Sample 데이터를 변환 합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image38.png)


#### Sample 수 계산

```
Sample count = Range (mm) / ( US velocity / Sample frequency / 2 )
```

> 참고: 위 식에서 최종 얻게 되는 Sample Data는 초음파 송, 수신된 데이터를 의미하기에 2로 나누어 줍니다.

**Ex.** 5900 m/s의 초음파 속도에서 100 mm의 Sample Count 계산은 아래와 같습니다.

```
1694 = 100 mm / (5900 m/s / 50 MHZ / 2)
```



![](/images/03_Resources/Image/DSK_User_Manual_Media/image44.png)


### Digitizing Index

Digitizing (또는 Sampling) Frequency는 ADC를 진행하는 동안 얼마나 세밀한 데이터로 변환 될 것인가에 대한 수치로 DSK에서는 최대 50MHz, 최저 3.125 MHz로 설정 할 수 있습니다.

DSK는 이런 수치 값을 내부 Table로 구성 되어 있으며, 아래 Digitizing Index는 그 테이블에 대한 Index number입니다.

| Digitizing Frequency | Digital Index |
|----------------------|---------------|
| 50 MHz | 0 |
| 25 MHz | 1 |
| 12.5 MHz | 3 |
| 6.25 MHz | 7 |
| 3.125 MHz | 15 |



![](/images/03_Resources/Image/DSK_User_Manual_Media/image45.png)


### Frame 및 Channel Group

여러 개의 Vector를 Group으로 설정하는 것을 Channel Group 이라고 합니다. 각각의 Channel Group별로 Range, Gain, Pulse Width와 같이 서로 다른 값으로 설정 가능하며, DSK장비에서는 Channel Group의 Index 순서에 따라 초음파 Vector 데이터를 수집 하게 됩니다. 최종적으로 설정된 Channel Group만큼의 모든 Vector를 1 Frame이라고 하며, 이 1 Frame에 대한 수집이 완료되면 Rx Callback이 호출되어 수집된 데이터를 처리 할 수 있습니다.

| 채널 색인 (Index) | 굴절 각도 (Refracted angle) | Vector Count |
|-------------------|------------------------------|--------------|
| Channel 0 | 0~4 | 5 |
| Channel 1 | 10~12 | 3 |
| Channel 2 | 45 | 1 |
| Channel 3 | 30~31 | 2 |



![](/images/03_Resources/Image/DSK_User_Manual_Media/image48.png)


#### 프레임 생성 (Frame Creation)



![](/images/03_Resources/Image/DSK_User_Manual_Media/image49.png)


1 Frame은 설정 된 Channel Group 수만큼의 데이터로 구성 되어 있습니다. Channel Group Index의 순서에 맞춰 해당 Channel Group의 `BackEndSampleCountPerVector * Vector` 수만큼의 크기가 순서대로 저장 되어 있습니다.

예를 들어 Channel Group 0, 1, 2 모두 Vector Count가 1개인 경우 `BackEndSampleCountPerVector` 수가 Channel Group 0번은 2500개, Channel Group 1번은 5000개, Channel Group 2번은 7500개인 경우, 1차원 Array의 0번 Index에는 Channel Group 0번의 0번 Vector의 0번 sample data가 저장되어 있습니다. 그 후 2500 sample 이후인 2500번 Index에는 Channel Group 1번의 0번 Vector의 0번 Sample Data가 저장되어 있습니다. 원하는 특정 Channel Group의 데이터를 사용하기 위해서는 이전 ChannelGroup의 `Vector Count * BackEndSampleCountPerVector` 수만큼 Offset 후에 해당 데이터를 가져와서 사용하면 됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image51.png)


### Pulse

#### Bipolar Pulse wave type

Unipolar Pulse Wave는 시간에 따라 극성이 바뀌지 않는 Pulse Wave이며, Bipolar pulse wave는 Sine Wave와 마찬가지로 시간에 따라 극성이 바뀌는 Pulse Wave 입니다. 기존 비파괴 초음파 검사 장비는 Hardware 설계상 구현하기 쉬운 Unipolar 방식의 Pulse wave를 사용하였습니다. 하지만 DSK장비는 Medical 기술을 적용하여, Bipolar Pulse Wave를 사용하고 있습니다.

이는 Bipolar Wave만의 장점인 Burst Count를 원하는 대로 설정하여, 감쇠가 심한 곳에서의 결함 검출 능력을 향상 시키는 큰 장점으로 사용할 수 있습니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image52.png)


#### 각 Pulse Width 공식 및 그림

**#1 Unipolar pulse width:**

Unipolar pulse width 계산은 주파수의 역수에 2로 계산하며, 공식은 다음과 같습니다.

```
Unipolar Pulse width = 1 / Pulse Frequency (Hz) / 2
```

**Ex.** 5 MHz 펄스 주파수의 Pulse width 계산:

```
1 / 5 MHz / 2 = 100 (ns)
```



![](/images/03_Resources/Image/DSK_User_Manual_Media/image54.png)


**#2 Bipolar pulse width:**

Bipolar pulse width 계산 공식은 다음과 같습니다.

```
Bipolar Pulse width = 1 / Pulse frequency (Hz)
```

**Ex.** 5 MHz 펄스 주파수의 Pulse Width 계산:

```
1 / 5 MHz = 200 (ns)
```



![](/images/03_Resources/Image/DSK_User_Manual_Media/image55.png)


### Burst Count



![](/images/03_Resources/Image/DSK_User_Manual_Media/image56.jpeg)


Burst는 하나의 Pulse wave에서 여러 개의 Count 개수를 늘려서 Wave 신호를 생성하여 수집하는 방법입니다. Rx 에서 echo pulse가 더 강하게 수집이 되기 때문에 초음파 감쇠가 심한 구간을 수집할 때 사용 할 수 있는 기능입니다.

DSK 프로그램에서는 Burst Count 설정을 **1~5**까지 사용 할 수 있습니다.

### Focus Type

Focus Type는 각 Vector의 focal law의 Focus Position 설정 방식을 의미 합니다. 실제 True Depth, Half Path, Auto Focus 및 Projection의 네 가지 유형의 Focus Type이 있습니다.

- **True depth:** 모든 focal laws 는 Depth 값 기준으로 Focus를 맞춥니다.
- **Auto focus:** Auto Focus는 Pitch & Catch Probe Type인 경우에만 설정 가능하며, Roof Angle에 의해 물리적으로 Focusing 되는 Position을 계산하여 적용 합니다.
- **Half path:** 모든 focal laws 은 Sound path Distance 값 기준으로 Focus 를 설정 합니다.
- **Projection:** 모든 focal laws 은 미리 정의 된 focus plane (Index / Scan offset)에 맞춰서 Focus를 설정 합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image57.jpeg)


| Beam Type | Index |
|-----------|-------|
| FOCUSTYPE_TRUEDEPTH | 0 |
| FOCUSTYPE_AUTOFOCUS | 1 |
| FOCUSTYPE_HALFPATH | 2 |
| FOCUSTYPE_PROJECTION | 3 |

### Focal Plane Position Offset

Focal Plane의 위치 (wedge 기준 점에서 focal plane offset까지)의 의미입니다. 단위는 mm로 설정합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image58.jpeg)


### Scan/Index Encoder

다음 그림은 Scanner(Encoder)가 Scan축과 Index축 방향으로 어떻게 이동하는지 보여 줍니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image59.jpeg)


DSK 프로그램 에서는 Encoder의 시작 / 정지 및 해상도를 세부적으로 설정 할 수 있으며, 자세한 내용은 아래와 같습니다.

- **Scan encoder start:** 획득 범위에서 Scan Encoder의 시작 위치를 정의합니다. 단위: mm (예: 100, 500...)
- **Scan encoder stop:** 획득 범위에서 Scan Encoder 정지 위치를 정의합니다. 단위: mm (예: 100, 500…)
- **Scan encoder step:** 획득 범위에서 Scan Encoder의 Step 단위 수를 정의합니다. (예: 1.0, 2.0, 2.54…)
- **Scan encoder resolution:** Scan Encoder의 mm 당 Pulse의 수를 정의합니다. (Step / mm) (예: 20.0, 5210.8...)

---

## 5. APPENDIX

### 5.1 APPENDIX C: PROJECT CODE 설명 및 입력 방법

각각의 장비 별 부여되고 있는 **Project code**는 다르며, 참조하여 **DSK** 프로그램을 실행합니다.

| SDK 장비 모델 | 프로젝트 코드 |
|--------------|--------------|
| **P5** | 0x50 |
| **P1** | 0x70 |
| **S3 ( 64CH )** | 0x60 |
| **S3 mini 2 Port** | 0x51 |
| **S3 Mini 4 Port** | 0x52 |
| **P3 ( 32CH )** | 0x90 |
| **P3 ( 16CH )** | 0x91 |
| **R3** | 0x80 |

**장비 별 PROJECT CODE 등록 방법**

장비는 고유의 Code Name를 가지고 있으며, 하드웨어는 Code를 확인 후 이에 맞는 가동을 진행하고 있습니다.

Project code는 S2.json 파일을 실행 시 입력하는 목록이 있으며, 위치 및 방법은 아래 그림을 확인 후 진행하시면 됩니다.

**#1 S2.json 파일 위치 경로**



![](/images/03_Resources/Image/DSK_User_Manual_Media/image62.png)


**#2 Project code 입력 목록**



![](/images/03_Resources/Image/DSK_User_Manual_Media/image63.png)


> **주의:** Project code와 장비가 미 일치 시 정상적으로 프로그램을 실행 할 수 없습니다.

### 5.2 APPENDIX D: POWER ADAPTER 설명

**Technical specification:**

- **유형:** AC / DC 어댑터
- **모델명:** SW60-12005000-W
- **정격입력:** 100-240V ~ 50 / 60Hz, 1.5A
- **정격출력:** 12V / ~ 5.0A

**연결하기:**

연결하려면 다음 단계를 따르십시오.

1. 전원 공급 장치 분리
2. 팁과 출력 케이블 연결
3. 팁을 장치 (DC 입력)에 꽂으세요.
4. 플러그 인 전원 공급 장치
5. 전원 스위치 누르기



![](/images/03_Resources/Image/DSK_User_Manual_Media/image64.png)


**주의 및 참고 사항:**

- 장비는 부착 된 AC 전원 코드를 사용하여 콘센트를 이용하여 연결합니다.
- 사용 중에 열원, 직사광선 또는 열에 민감한 물질 멀리 하시길 바랍니다.
- 코드와 케이블을 무리하게 당길 시 끊어집니다.
- 전원 어댑터가 사용 중에 따뜻해지는 것은 정상입니다.
- 비상 시 메인 콘센트를 차단하여 사고를 사전에 예방하시길 바랍니다.

### 5.3 APPENDIX E: Hardware Connecter 설명

#### Power Connector

장비 Hardware 전원부는 아래 그림과 같은 구경으로 사용 하고 있습니다.

| Pin | Description |
|-----|-------------|
| 1 | DC12V |
| 2 | GND |
| 외경: 5.5mm | 내경: 2.1~2.5mm |



![](/images/03_Resources/Image/DSK_User_Manual_Media/image65.png)


#### Encoder Connecter

Encoder Connecter는 D-SUB DS1033-15F를 사용하고 있습니다.

**Pin Number**

| PIN | Description |
|-----|-------------|
| 1 | ENC_Q2 |
| 2 | ENC_I2 |
| 3 | 5V |
| 4 | NC |
| 5 | NC |
| 6 | ENC_Q3 |
| 7 | NC |
| 8 | NC |
| 9 | ENC_Q0 |
| 10 | ENC_I0 |
| 11 | ENC_Q1 |
| 12 | ENC_I1 |
| 13 | NC |
| 14 | ENC_I3 |
| 15 | GND |



![](/images/03_Resources/Image/DSK_User_Manual_Media/image66.png)


### 5.4 APPENDIX F: NETWORK CONNECTION 설명

DSK 프로그램은 LAN Cable를 이용하여 원격으로 장비와 Network 연결을 지원합니다. 하지만 LAN Cable를 연결 할 수 있는 R3, P3 장비만 가능하며, 다른 장비에는 USB Cable로만 연결이 가능합니다.

> **주의:** 해당 설명은 R3, P3 Board만 활용을 할 수 있습니다.

**DSK 프로그램 Network connection 방법**

**#1 RES 폴더 SV.json / S2.json 파일 위치 확인**



![](/images/03_Resources/Image/DSK_User_Manual_Media/image67.png)


**#2 SV.json / S2.json 개념 확인**

`SV.json`은 Master(Host)-PC를 의미하며, `S2.json`은 Slave(장비)를 의미합니다.

Network를 연결하기 위해서는 각 PC의 IP Address를 입력을 하면 자동으로 연결됩니다.

**#3 S2Net.exe 프로그램 활용 방법**



![](/images/03_Resources/Image/DSK_User_Manual_Media/image68.png)


`S2Net.exe` 프로그램은 Network를 이용하여 Host-pc와 연결해주는 역할을 합니다.

그러므로 R3, P3 장비에 DSK 프로그램을 설치하여 앞서 #2번의 방법을 적용 할 수 있습니다.

**#3 IP Address 확인 방법**

IP Address는 Window 키 + R 키를 동시에 클릭 후 실행창 입력란에 `cmd`를 입력하고, 콘솔창 생성 시 `ipconfig /all`를 입력하여 IPv4 주소 목록에 나와있는 주소를 `.json` 파일에 입력해주면 됩니다.

> **중요:** 각 PC별로 진행하여 확인 해야 합니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image69.jpeg)


**#4 SV.json IP Address 입력 방법**

`SV.json` IP입력은 연결하고자 하는 Slave Address를 적용하면 됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image70.jpeg)


**#5 S2.json IP Address 입력 방법**

`S2.json` IP입력은 Master(Host) Address를 적용하면 됩니다.



![](/images/03_Resources/Image/DSK_User_Manual_Media/image71.png)


**#6 S2Net.exe 실행**

각 장비 별 IP Address 입력을 완료한 후 Slave PC에는 `S2Net.exe` 프로그램을 실행합니다.

Master(Host)-PC 또한 DSK 프로그램을 실행하게 되면 IP Address를 확인 후 해당 PC와 자동으로 Network connection 됩니다.

### 5.5 APPENDIX G: UT Connector 프로그램 설명

UT Connector가 존재하는 장비일 경우에만 적용 가능한 기능입니다.

UT Connector는 실행 시 Check 박스를 클릭하여 PAUT에서 UT로 전환해줍니다.

조작 방법은 아래 그림과 순서를 확인하시길 바랍니다.

**#1 프로그램 실행 및 UT Connector Check box 클릭**



![](/images/03_Resources/Image/DSK_User_Manual_Media/image72.png)


**#2 장비 별 UT Port 순번 사진**



![](/images/03_Resources/Image/T3/T3_Top_1.png)
![](/images/03_Resources/Image/R5/upload_pending/3.png)


**#3 Port 확인 후 Transmitter / Receiver 설정**



![](/images/03_Resources/Image/T3/TOFD_1.PNG)


> **중요:** Port 1개만 사용할 경우 Tx / Rx 동일하게 기재 / TOFD로 사용할 경우 Port 2개에 대한 Tx / Rx Port 숫자 기재

---

*Version 2.0, 2026*
