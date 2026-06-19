# DSVision Software Manual

---
- **Software Version**: v3.0.5
- **Manual Version**: v1.0
- **Release Date**: 2026-04-21
- **Last Updated**: 2026-04-21
- **Author**: SEONGSANLAB Co., Ltd.
---

## 1. Introduction

### 1.1 Overview
- DSVision은 초음파 비파괴 검사(PAUT) 전용 데이터 수집 및 분석 소프트웨어
- PA, LA, TOFD, Conventional 방식의 검사 지원
- 장비: P5 / B3 / T3 / R5

### 1.2 Purpose
- 본 매뉴얼은 DSVision 소프트웨어의 설치, 운용 및 설정에 관한 절차와 기능을 설명하기 위해 작성
- 소프트웨어의 올바른 사용 및 정확한 검사 결과 도출을 목적으로 함

### 1.3 Target Audience
- 초음파 비파괴 검사 전문 검사자 및 엔지니어
- 본 소프트웨어 운용 전 다음 사항에 대한 사전 지식 필요
  - 초음파 비파괴 검사 방법
  - 비파괴 검사 장비 운용 방법
- 위 사항에 대한 지식이 부족할 경우 오검사 결과가 발생할 수 있음

## 2. Software Installation Manual
- 프로그램 설치 및 초기 구동 절차에 관한 설명입니다.

### 2.1 Software Program Installation
- 프로그램 설치는 원활한 설치를 위해 Windows 10 바탕화면 환경에서 진행하며, 설치 시 다음 절차를 따릅니다.
- 설치 파일(.zip)의 압축을 해제한 후, 전체 프로그램 폴더를 USB 드라이브로 복사하여 장비 우측의 USB 허브에 삽입합니다.
- 조작을 위해 키보드와 마우스를 장비 전용 포트나 USB 허브에 연결하고 표준 Windows 10 바탕화면 인터페이스에 접속합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR) install_program/images/2.png" width="600">
  <p><USB 드라이브 및 설치 폴더 준비></p>
</div>
- 설치를 시작하기 전, 작업 표시줄의 활성 프로그램 아이콘에서 마우스 오른쪽 버튼을 클릭하여 'Close window'를 선택해 현재 실행 중인 모든 프로그램을 종료합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR) install_program/images/4.png" width="600">
  <p><실행 중인 프로그램 종료 확인></p>
</div>
- USB 드라이브 내의 설치 파일(DSVision_Setup.exe 등)을 더블 클릭하고, 설치 창에서 'Install' 버튼을 클릭하여 진행합니다.
- 설치 경로 지정 메시지가 나타나면 기본 설정을 유지하고 'Next'를 클릭하여 설치를 완료합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR) install_program/images/5.png" width="600">
  <p><설치 프로그램 실행 및 진행></p>
</div>
- 설치 완료 후 장비를 재부팅하면 프로그램이 자동으로 실행되며, 화면 오른쪽 하단의 소프트웨어 버전 번호를 통해 업데이트 여부를 최종 확인합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR) install_program/images/6.png" width="600">
  <p><소프트웨어 버전 확인></p>
</div>

### 2.2 Auto start Program setting
- 본 장비는 시스템 기동 시 소프트웨어가 자동으로 실행되도록 설정되어 있으며, 수동 설정 시 다음 절차를 따릅니다.
- 키보드의 'Windows 키 + R'을 눌러 실행 창을 열고, 입력창에 shell:startup을 입력하여 '시작 프로그램' 폴더를 엽니다.
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/3.png" width="600">
  <p><실행 창에서 shell:startup 입력></p>
</div>
- 소프트웨어가 설치된 폴더로 이동하여 실행 파일(DSVision.exe)의 바로가기를 생성합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/4.png" width="600">
  <p><실행 파일 이미지 예시></p>
</div>
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/5.png" width="600">
  <p><바탕 화면에 바로가기 생성 과정></p>
</div>
- 바탕 화면에 생성된 바로가기 파일을 복사하여 앞서 열어둔 '시작 프로그램' 폴더 시스템 창에 붙여넣습니다.
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/7.png" width="150">
  <p><바로가기 아이콘 복사 및 이동></p>
</div>
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/8.png" width="300">
  <p><시작 프로그램 폴더 내 붙여넣기></p>
</div>
- 모든 설정을 마치고 시스템 폴더에 등록이 완료된 것을 확인합니다.
<div align="center">
  <img src="/images/03_Resources/(KOR)How to Register a Program for Automatic Startup/image/9.png" width="600">
  <p><시작 프로그램 폴더 등록 완료></p>
</div>
- 시스템을 재부팅하여 프로그램이 자동으로 활성화되는지 최종 검증합니다.

## 3. List of Abbreviations
본 매뉴얼과 소프트웨어에서 사용하는 주요 기술 용어 및 약어에 대한 상세 정의입니다.

### 3.1 Inspection Methods
- **NDT** (Non-Destructive Testing): 비파괴 검사 (재료를 파괴하지 않고 결함을 탐상)
- **UT** (Ultrasonic Testing): 초음파 탐상 검사
- **PA (PAUT)** (Phased Array Ultrasonic Testing): 다중 소자를 이용한 위상 배열 초음파 방식
- **LA** (Linear Array): 선형 배열 초음파 방식
- **TOFD** (Time of Flight Diffraction): 회절 파동의 시간차를 이용한 정밀 결함 판독 방식
- **TFM** (Total Focusing Method): 전체 초점 방식
- **FMC** (Full Matrix Capture): 전체 행렬 데이터 수집 (TFM 구현을 위한 데이터 수집 방식)
- **Conventional** (Conventional UT): 단일 소자를 이용한 요동/고정식 일반 초음파 방식

### 3.2 Software & Display
- **A-Scan** (Amplitude Scan): 시간(또는 거리)에 따른 초음파 반사 신호의 진폭 표시
- **B-Scan** (Brightness Scan): 검사체의 단면을 보여주는 2차원 영상
- **C-Scan** (Constant-depth Scan): 검사체를 위에서 내려다본 평면 영상 (부식 매핑 등)
- **S-Scan** (Sectorial Scan): 빔의 각도를 소인하여 표현한 부채꼴 모양의 단면 영상
- **FSH** (Full Screen Height): 에코 높이를 화면 전체 높이에 대한 비율(%)로 표시
- **Gate** (A, B, I Gate): 신호 검출, 측정 및 알람 발생을 위해 설정하는 감시 영역

### 3.3 Acquisition & Calibration
- **PRF** (Pulse Repetition Frequency): 초당 송신되는 초음파 펄스의 반복 주파수
- **TCG** (Time Corrected Gain): 거리에 따른 신호 감쇄를 보정하기 위해 시간에 따라 변하는 이득
- **DAC** (Distance Amplitude Curve): 거리와 진폭의 관계를 나타내는 곡선 (결함 크기 판정 기준)
- **RF** (Radio Frequency): 필터링이나 정류를 거치지 않은 순수 고주파 시누소이드 파형
- **Gain** (Gain (dB)): 수신된 신호의 증폭도 (단위: dB)
- **Focal Law** (Focal Law): PA 검사 시 각 소자의 지연 시간을 계산한 빔 제어 법칙
- **Velocity** (Sound Velocity): 해당 검사체 내에서의 초음파 진행 속도 (m/s)
- **HAZ** (Heat Affected Zone): 용접 시 열에 의해 금속 조직이 변화된 열 영향부
- **V, W, S, T** (Velocity, Wedge, Sens, TCG): 교정(Calibration) 상태를 나타내는 지표

### 3.4 Hardware & Interface
- **Encoder** (Encoder): 장비와 연결되어 프로브의 위치 및 스캔 거리를 측정하는 센서
- **Wedge** (Wedge): 초음파 프로브 앞에 부착하여 굴절각을 만들어주는 매질
- **Probe** (Probe (Transducer)): 초음파 신호를 송수신하는 핵심 부품 (탐촉자)

## 4. Device Software Functions
- DSVision은 초음파 비파괴 검사를 위한 실시간 데이터 수집 및 다각도 분석 전용 소프트웨어입니다.
- **실시간 데이터 수집**: 초속 신호 처리를 통해 지연 없는 실시간 이미지를 제공합니다.
- **다양한 모드 지원**: PA, TOFD, Conventional 등의 검사 모드를 소프트웨어 내에서 개별 혹은 다중 운용할 수 있습니다.
- **데이터 저장**: 수집된 초기 데이터와 분석 데이터는 소프트웨어 내에 저장됩니다.

### 4.1 화면 구성
- 소프트웨어의 화면은 상단 메뉴, 좌측 메뉴, 우측 메뉴, 그리고 중앙 화면의 4개 영역으로 구성됩니다.
- **상단 메뉴**: Gain(이득) 수치, 인코더 위치 등 핵심 검사 상태 정보를 표시합니다.
- **좌측 메뉴**: 화면 구성 변경, 검사 시작 및 정지 등 운영 기능을 제어합니다.
- **우측 메뉴**: Pulse, Probe, Specimen 등 검사 파라미터를 설정합니다.
- **중앙 화면**: 수집된 신호에 대응하는 A-Scan, B-Scan, S-Scan, C-Scan 이미지를 출력합니다.

### 4.2 조작 방법
- 소프트웨어는 터치스크린과 마우스/키보드를 통한 두 가지 조작 방식을 지원합니다.
- **터치 조작**:
    - **클릭**: 메뉴 및 버튼을 선택하거나 설정창을 호출합니다.
    - **드래그**: 화면 영역을 드래그하여 특정 데이터 범위를 지정하거나 해당 구역을 확대합니다.
- **마우스 및 키보드 조작**: 마우스를 이용한 미세 파라미터 조정과 키보드를 통한 정밀 수치 입력을 지원합니다.

## 5. Menu explanations
DSVision 프로그램의 메뉴는 검사자가 중앙 화면의 실시간 이미지를 주시하면서 최소한의 시선 이동으로 조작할 수 있도록 상단, 하단, 좌측, 우측의 4개 영역으로 구성되어 있습니다. 좌측 메뉴를 통해 검사의 시작과 정지, 화면 캡처 및 줌(Zoom)과 같은 운영 기능을 제어하며, 우측 메뉴에서는 프로브와 게이트 설정 및 화면 레이아웃(Layout) 선택과 같은 세부 파라미터를 설정합니다. 상단과 하단 영역은 Gain 조정과 현재 시스템의 교정 상태 및 핵심 검사 수치를 실시간으로 확인하는 모니터링 용도로 사용됩니다.

### 5.1 Main Window
- DSVision의 메인 인터페이스는 디스플레이 환경에 최적화된 화면 해상도를 제공하며, 검사 데이터의 시인성을 극대화한 구조로 설계되었습니다.
- **중앙 화면**: 수집된 신호를 실시간 이미지로 변환하여 출력하며, 레이아웃 설정에 따라 A, B, S, C-Scan 화면을 단일 또는 다중 분할 형태로 표시합니다.
- **메뉴 배치 영역**: 중앙 화면을 중심으로 좌측 운영 메뉴, 우측 설정 메뉴, 상단 상태 정보, 하단 교정 표시등이 배치되어 분석 중에도 즉각적인 설정 변경이 가능합니다.
- **검사 최적화**: 선택한 검사 모드(PA, TOFD, Conventional)에 따라 소프트웨어가 화면 구성을 자동으로 최적화하여 표시합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Toolbar/Main View 화면 영역.png" width="600">
  <p>DSVision 메인 화면 구성</p>
</div>

### 5.2 Toolbar explanations
소프트웨어의 각 툴바는 사용자가 검사 상황에 맞춰 모니터링과 제어를 동시에 수행할 수 있도록 기능별로 최적화된 위치에 배치되어 있습니다. 상단과 하단 영역은 실시간 데이터 수치와 교정 상태를 상시 노출하여 검사의 신뢰성을 확인하는 용도로 사용되며, 좌측과 우측 영역은 실제 검사 운영 및 세부 파라미터 설정을 위한 제어 인터페이스를 제공함으로써 작업 효율을 극대화합니다. 각 툴바 영역에 포함된 상세 기능과 하위 메뉴의 조작 방법은 다음과 같습니다.

### 5.3 Top Toolbar explanations
상단 툴바는 현재 검사 중인 신호의 핵심 수치와 시스템 상태를 실시간으로 모니터링하는 영역입니다. 검사자가 화면의 중앙 이미지를 분석하면서 동시에 주요 파라미터를 확인하거나 이득(Gain)을 즉각적으로 조정할 수 있도록 구성되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Toolbar/Top toolbar.png" width="600">
  <p>상단 툴바 구성 개요</p>
</div>

#### 5.3.1 Gain Control
검사 신호의 증폭도를 실시간으로 조정하는 기능입니다.
- **조작 방법**: 이득 수치 영역을 선택하면 나타나는 가상 키패드를 통해 원하는 수치를 직접 입력하고 적용할 수 있습니다.
- **정밀 제어**: 최대 10dB 범위 내에서 0.1dB 단위로 세밀하게 조정하거나, 6dB 단위로 빠르게 값을 증감시키는 기능을 제공합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/16.png" width="400">
  <p>이득 제어 키패드 화면</p>
</div>

#### 5.3.2 Information Panel (Amplitude, P, D, S)
활성화된 게이트(Gate)를 기준으로 포착된 신호의 측정 정보를 실시간으로 출력합니다.
- **Amplitude (%)**: 게이트 내에서 검출된 최대 에코의 강도를 백분율로 표시합니다.
- **Primary (P)**: 프로브로부터 신호가 검출된 지점까지의 직선 거리를 나타냅니다.
- **Depth (D)**: 피검체 내 신호가 검출된 지점의 수직 깊이를 나타냅니다.
- **Sound (S)**: 사운드 패스(Sound Path) 상의 위치 거리를 출력합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/15.png" width="600">
  <p>게이트 측정 정보 패널</p>
</div>

#### 5.3.3 Encoder Location Information
현재 스캐너 또는 프로브 이동 장치로부터 전달되는 실시간 위치 정보를 모니터링합니다.
- **위치 출력**: 프로그램 시작 시 설정된 영점(0)을 기준으로 현재의 총 이동 거리를 표시합니다.
- **경고 상태**: 측정값이 미리 설정된 검사 범위를 벗어나거나 인코더 신호에 이상이 발생할 경우, 수치 표시 영역이 빨간색으로 강조되어 시각적 경고를 제공합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_74_img_15.png" width="400">
  <p>인코더 위치 및 경고 알림</p>
</div>

### 5.4 Left Toolbar explanations
좌측 툴바는 소프트웨어의 주요 운영 기능을 제어하고 시스템 환경을 설정하는 영역입니다. 검사자가 중앙 화면의 실시간 데이터를 주시하면서 동시에 검사 상태를 조작할 수 있습니다. 툴바는 검사의 시작과 종료, Auto Gain, 그리고 정밀 분석을 위한 화면 확대 및 대화면 모드 전환 기능들을 가지고 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Toolbar/Left toolbar.png" width="50">
  <p>좌측 툴바 구성</p>
</div>

#### 5.4.1 Preferences (Setup, Image, Data, Device)
시스템 설정 및 각 데이터 관리 메뉴를 호출합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/12.png" width="50">
  <p>Preferences 아이콘</p>
</div>

* **Setup**: 파라미터 설정 값을 관리하는 메뉴입니다. 현재 설정을 내부 드라이브에 저장(**Save**), 저장된 설정 파일 불러오기(**Load**) 및 삭제(**Delete**)를 수행하며, 외부 USB로 파일을 복사(**Copy**)할 수 있습니다.
<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_50_img_10.png" width="600">
  <p>Setup 설정 화면</p>
</div>

* **Image**: Screen Shot 기능을 통해 저장된 이미지 리스트를 관리합니다. 이미지 선택 시 미리보기를 제공하며, 선택한 파일을 USB로 복사(**Copy**)하거나 삭제(**Delete**)할 수 있습니다.
<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_51_img_15.png" width="600">
  <p>Image 관리 화면</p>
</div>

* **Data**: 수집된 초기 검사 데이터 리스트를 관리합니다. 데이터 미리보기를 지원하며 USB 복사(**Copy**), 삭제(**Delete**), 뷰어 실행(**Open Viewer**) 기능을 포함합니다. 또한 장비 내부 드라이브의 남은 저장 용량을 표시합니다.
<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_52_img_19.png" width="600">
  <p>Data 관리 화면</p>
</div>

* **Device**: 시스템 장비 설정을 제어합니다.
    - **LCD Brightness**: 디스플레이 화면의 밝기를 조절합니다.
    - **GateLine Horn**: 에코 신호가 게이트 임계값을 넘을 때 발생하는 가청 알람의 활성 여부를 설정합니다(On/Off).
    - **Information**: 하드웨어 사양 및 소프트웨어 버전을 확인합니다.
    - **Minimize**: 프로그램을 최소화하고 Windows 10 바탕화면으로 전환합니다.
<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_54_img_6.png" width="600">
  <p>Device 설정 화면</p>
</div>


#### 5.4.2 Inspection Button (Start, Pause, Stop)
실시간 데이터 수집 및 기록 모드를 제어합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_57_img_15.png" width="400">
  <p>검사 저장 시 목록 구성</p>
</div>

* **Start**: 클릭 시 프로그램이 활성 검사 모드(Inspection Mode)로 전환됩니다. 검사 모드 중에는 하드웨어 설정 및 주요 파라미터가 잠금(Locked) 상태가 되어 변경할 수 없습니다.
* **Pause**: 데이터 수집을 일시 중단합니다. 검사 모드가 아닐 때는 일반적인 화면 정지(Freeze) 기능을 수행하며, 검사 모드 중에는 인코더가 이동하더라도 데이터를 기록하지 않습니다. 스캐너의 위치를 재조정하고 중단된 지점부터 검사를 재개할 때 사용합니다.
* **Stop**: 검사 모드 중에만 활성화됩니다. 데이터 수집을 종료하면 파일의 이름을 지정하고 수집된 데이터를 최종 저장할 수 있는 창이 나타납니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/13.png" width="300">
  <p>검사 모드 활성화 상태 예시</p>
</div>


#### 5.4.3 Screen Shot (Screen Capture)
중앙 화면 영역을 포함한 현재 디스플레이 전체를 이미지 파일로 즉시 저장합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_59_img_5.png" width="100">
  <p>Screen Shot 아이콘</p>
</div>

* **저장 방식**: 버튼 클릭 시 별도의 확인 창 없이 현재 화면이 즉시 캡처됩니다.
* **파일 형식**: 이미지 파일은 `.png` 확장자로 저장됩니다.
* **기본 저장 경로**: `C:\DEEPSOUND\DSVision\Bin\RES\User\Image`

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_59_img_11.png" width="500">
  <p>저장된 이미지 확인 화면</p>
</div>


#### 5.4.4 Auto Gain
측정 대상 신호의 진폭(Amplitude)을 사전에 설정된 목표 수치로 즉각 조정합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_61_img_4.png" width="100">
  <p>Auto Gain 아이콘</p>
</div>

* **동작 원리**: 현재 **A Gate** 영역 내에 위치한 신호 중 가장 높은 피크(Peak)를 자동으로 감지하여 증폭도를 조절합니다.
* **기준값 설정**: 우측 설정 메뉴의 **Auto FSH** 리스트에서 지정한 백분율(%) 수치를 기준으로 신호 높이를 맞춥니다.
* **활용**: 수동으로 Gain 수치를 여러 번 조정할 필요 없이, 한 번의 클릭으로 신호를 규격에서 요구하는 기준 높이(예: 80% FSH)로 정규화할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_61_img_15.png" width="250">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_61_img_17.png" width="250">
  <p>Auto Gain 적용 전(좌)과 적용 후(우) 비교</p>
</div>


#### 5.4.5 Zoom & Zoom Reset
화면의 특정 영역을 확대하거나 초기 상태로 복원하여 정밀 분석을 수행합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/14.png" width="400">
  <p>Zoom 및 Reset 아이콘</p>
</div>

* **Zoom**: 아이콘 클릭 시 주황색으로 활성화되며, 확대하고자 하는 영역을 터치 드래그하여 **확대 영역 상자**를 생성하면 해당 구간이 확대됩니다.
* **Zoom Type**: 사용자의 설정에 따라 가로(Horizontal), 세로(Vertical), 또는 대각선(Diagonal) 방향으로 화면을 확대할 수 있습니다.
* **Reset**: 한 번의 클릭으로 확대된 모든 화면을 초기 표준 배율 및 레이아웃으로 즉시 복구합니다.


#### 5.4.6 Full Screen Mode
중앙 화면의 데이터 출력 영역을 디스플레이 전체 화면으로 확장하여 결함 탐상 및 정밀 측정 시 시인성을 극대화합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_65_img_19.png" width="100">
  <p>Full Screen 아이콘</p>
</div>

* **진입 방법**: 좌측 하단의 **More** 키를 누른 후, 나타나는 메뉴에서 **Full Screen** 아이콘을 클릭합니다.
* **활성화 상태**: 모든 메뉴 바가 숨겨지고 선택된 레이아웃이 화면 전체에 꽉 차게 표시되어 정밀 분석에 집중할 수 있습니다.
* **해제 방법**: 화면 우측 하단에 표시되는 **나가기(Exit)** 아이콘을 클릭하여 원래 화면으로 복귀합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_65_img_31.png" width="600">
  <p>Full Screen 모드 활성화 화면</p>
</div>


#### 5.4.7 Information Box (Gate Details)
활성화된 게이트(Gate)의 모든 측정 지표와 상세 데이터를 한눈에 확인할 수 있도록 화면상에 정보 상자를 표시합니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_67_img_5.png" width="100">
  <p>Information Box 아이콘</p>
</div>

* **활성화 방법**: 좌측 하단의 **More** 키를 누른 후, 나타나는 메뉴에서 **Information Box** 아이콘을 클릭합니다.
* **주요 기능**: 게이트의 진폭(Amplitude), 위치(P, D, S) 등 실시간 측정 수치를 종합적으로 출력합니다. 특히 %, D, S 항목은 Gate A와 Gate B 사이의 수치 차이를 자동으로 계산하여 표시하므로, 두 신호 간의 상대적 비교 분석에 활용됩니다.

* **활용**: 실시간 게이트 수치 모니터링뿐만 아니라, 시스템의 교정(Calibration) 상태를 상시로 검증할 때 사용합니다.
* **해제 방법**: 정보 상자 우측 상단의 **X** 버튼을 클릭하여 화면에서 숨깁니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_67_img_15.png" width="600">
  <p>Information Box 활성화 화면</p>
</div>



### 5.5 Setting toolbar explanations
우측 설정 툴바는 소프트웨어의 모든 세부 파라미터를 설정하고 제어하는 영역입니다. 초음파 발생 설정부터 시험편 정보, 게이트 관리 등 검사 실행에 필요한 모든 수치를 이곳에서 입력하고 조정합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Toolbar/파라미터 설정 아이콘 선택지.png" width="600">
  <p>우측 설정 툴바 구성 및 9개 설정 그룹</p>
</div>


* **기능 그룹 구성**: 총 9개의 기능 그룹으로 분류되어 있습니다.
    1. **General**: 기본 검사 범위 및 PRF 설정
    2. **Pulse**: 빔 생성 및 펄스 제어
    3. **Specimen & Weld**: 시험편 및 용접부 형상 설정
    4. **Probe & Wedge**: 센서 및 웨지 정보 관리
    5. **Scan & Encoder**: 검사 스캔 방식 및 인코더 설정
    6. **Gate & Alarm**: 데이터 수집 구간 및 경보 설정
    7. **Layout & Display**: 화면 레이아웃 및 표시 모드 선택
    8. **Palette**: 에코 및 색상 팔레트 조정
    9. **TCG/DAC**: 신호 감쇠 보정 설정
* **조작 방식**: 각 그룹의 타이틀 바를 클릭하여 세부 파라미터 창을 확장하거나 축소할 수 있습니다. 툴바에서 수정한 모든 수치는 중앙 화면의 신호 데이터에 즉시 반영됩니다.





#### 5.5.1 General Settings
장비의 가장 기초가 되는 제어판으로, 검사자가 화면을 통해 보게 될 시야(Depth)와 신호의 물리적인 세기(Voltage)를 결정합니다. 마치 카메라의 줌과 밝기를 조절하듯, 검사를 시작하기 전 가장 먼저 최적의 가시 환경을 설정하는 파라미터 그룹입니다.

<div align="center">
  <img src="/images/03_Resources/(ENG) program_introduction/images/slide_8_img_3.png" width="400">
  <p>General Settings 구성 항목</p>
</div>

* **Depth Start**: 화면에 표시할 검사 영역의 시작 지점(근거리 깊이)을 설정합니다.
* **Depth Range**: 검사하고자 하는 전체 깊이의 범위를 설정합니다.
* **PRF (Pulse Repetition Frequency)**: 초음파 펄스의 초당 반복 횟수를 조정합니다. 검사 속도와 데이터 분해능에 직접적인 영향을 미치며, 100 Hz에서 최대 30,000 Hz까지 설정 가능합니다.
* **Voltage**: 송신 신호의 전압 세기를 조절하여 투과력을 제어합니다. 25 V에서 160 V 사이에서 조정하여 재질 및 두께에 최적화된 신호를 얻을 수 있습니다.
* **Focus Position**: 빔의 초점을 전자적으로 조절하여 특정 깊이에 에너지를 집중시키는 기능입니다. 특정 영역에서 최적의 검사 결과를 얻기 위해 다음과 같이 활용합니다.
    - **분해능 향상**: 초점이 맞춰진 지점에서 빔의 폭이 가장 좁아져, 인접한 결함들을 명확히 분리하여 판독할 수 있습니다.
    - **신호 강도 향상**: 에너지가 한 점으로 모이기 때문에, 동일한 결함이라도 초점을 맞췄을 때 더 높은 신호를 얻을 수 있습니다.
    - **이미지 선명도**: S-Scan 상에서 결함의 형상이 날카롭고 분명하게 관찰되어 판독 정확도가 높아집니다.


<div align="center">
  <img src="/images/03_Resources/Image/Manual/Focus position/Position 25mm.png" width="400">
  <p>25mm 설정: 얕은 깊이 집중 시 선명한 표면 결함 포착</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Focus position/Position 70mm.png" width="400">
  <p>70mm 설정: 심부 깊이 집중 시 두꺼운 모재 내부 해상도 강화</p>
</div>

* **Vector Index**: 활성화된 포커싱 라인을 특정 벡터 위치로 이동시켜 데이터 분석의 기준점을 변경합니다.


#### 5.5.2 Pulse Settings
초음파 빔이 어떤 방식으로 생성되고, 어떤 형태로 시험체 내부로 발송될지를 하드웨어 레벨에서 제어합니다. 신호의 품질을 결정짓는 핵심적인 설정으로, 탐촉자와의 하모니를 통해 노이즈는 줄이고 유효 신호는 극대화하는 신호 최적화 과정입니다.

##### **Configuration**
검사에 사용할 핵심 초음파 방식을 선택합니다.
* **PA (Phased Array)**: 다각도 소사 검사가 필요할 때 선택합니다.
* **LA (Linear Array)**: 일정한 감도의 선형 스캔 검사가 필요할 때 선택합니다.
* **Conventional**: 일반 UT 또는 TOFD 검사 시 선택합니다.

##### **Focal Law**
Configuration에서 선택한 모드에 맞춰 초음파 빔의 조향(Steering) 및 집속 방식을 설정합니다.
* **PA (Phased Array) 모드**
    - **Beam Angle Start/Stop**: 섹터 스캔(Sectorial Scan)의 시작과 종료 각도를 설정합니다. (예: 35° ~ 75°)
    - **Angular Resolution**: 각 빔 사이의 각도 간격을 설정합니다.
    - **효과**: 단일 스캔으로 여러 각도를 동시에 커버하여 결함 검출 확률(POD)을 높이고, 복잡한 형상의 용접부를 효율적으로 검사할 수 있습니다.
* **LA (Linear Array) 모드**
    - **Aperture Size**: 하나의 빔을 형성하기 위해 그룹화할 소자의 개수를 설정합니다.
    - **Step Interval**: 소자 배열 위에서 어퍼처가 수평으로 이동하는 간격을 제어합니다.
    - **효과**: 일정한 입사각을 유지하며 넓은 범위를 빠르게 스캔할 수 있어 부식 매핑 및 평판 검사에 적합합니다.


##### **Wedge Delay**
초음파가 웨지를 통과하는 시간을 보정하여 결함의 실제 위치 좌표를 정확히 산출합니다.
* **자동 교정**: 기준 시편(R100 등)을 이용하여 웨지 내 이동 시간을 자동 계산하며, 교정 완료 시 하단 상태창의 W 레이블이 주황색으로 활성화됩니다.
* **보정 효과**: 지연 값을 정확히 입력하면 A-Scan과 S-Scan 상의 신호가 실제 시편 내 물리적 위치와 일치하게 정렬됩니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Wedgedelay/Wedgedelay_0us.png" width="400">
    <div align="center">보정 전 (0.0µs): 신호가 실제보다 얕은 위치에 표시됨</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Wedgedelay/Wedgedelay_8us.png" width="400">
    <div align="center">보정 후 (0.8µs): 신호가 실제 물리적 깊이에 정확히 정렬됨</div>
  </div>
</div>

##### **Pulse Width**
탐촉자에 가하는 전기적 에너지의 시간적 길이를 조정합니다.
* **주파수 매칭**: 사용 중인 탐촉자의 중심 주파수 주기 절반(T/2)으로 설정할 때 에너지 효율이 가장 높고 깨끗한 신호를 얻을 수 있습니다.
* **설정 효과**: 펄스폭이 맞지 않으면 신호가 약해지고 좌우로 퍼지는 현(Smearing)이 발생하여 판독 효율이 저하됩니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Pulse width/Probe와 매칭이 맞는 Pulse Width.png" width="400">
    <div align="center">매칭 완료: 낮은 Gain(42.2dB)으로도 날카롭고 선명한 신호 확보</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Pulse width/Probe와 매칭이 안맞는 Pulse Width.png" width="400">
    <div align="center">매칭 불량: 신호가 약해져 높은 Gain(56.9dB)이 필요하며 노이즈가 증가함</div>
  </div>
</div>

##### **Filter**
불필요한 잡음을 걸러내고 탐촉자 고유의 주파수 대역만을 선명하게 추출합니다.
* **SNR 향상**: 배경 잡음을 억제하고 신호 대 잡음비(SNR)를 높여 결함 피크를 명확히 식별하게 합니다.
* **Band Pass**: 저주파와 고주파 노이즈를 동시에 차단하여 주 신호의 경계를 날카롭게 만듭니다.

##### **Auto Gain / Auto FSH**
단 한 번의 클릭으로 신호 높이를 목표 수치(Full Screen Height, FSH)에 즉시 안착시킵니다.
* **타겟 설정**: 산업 표준 교정에 널리 사용되는 80% FSH를 비롯하여 30%, 50% 등 원하는 높이로 신호를 정규화할 수 있습니다.
* **동작 원리**: 현재 활성화된 Gate 내의 최대 피크를 기준으로 Gain 값을 자동 계산하여 적용합니다.

##### **RF Mode**
TOFD 또는 Conventional 모드에서 활성화되며, 검파(Rectification) 전의 원본 고주파 파형을 출력하여 위상 변화 분석 등에 활용합니다.


#### 5.5.3 Specimen & Weld Settings
장비가 수집한 파동 신호를 실제 금속 시편의 입체적인 공간 좌표로 변환하는 '지도(Map)' 역할을 하는 파라미터 그룹입니다. 시험편의 실제 두께와 용접 형상을 정확히 입력해야만, 화면상의 신호가 실제 시편의 어느 깊이와 어느 위치에 있는지를 오차 없이 판독할 수 있습니다.

##### **Specimen Settings**
시험편의 물리적 한계와 음향 특성을 정의합니다.

* **Velocity**: 초음파가 재질 내부를 이동하는 속도를 설정합니다. 장비가 수신한 신호의 시간을 거리로 변환하는 기준이 됩니다.
    - **설정 방식**: 탄소강, 스테인리스 등 주요 재질의 표준 음속 라이브러리를 사용하거나, 숫자를 직접 입력하여 미세 조정할 수 있습니다.
    - **음속 교정**: 알려진 두께의 대비시험편을 이용해 실제 음속을 산출하는 기능을 지원하며, 교정이 완료되면 계산된 음속 값이 시스템에 자동으로 적용됩니다.
* **Thickness**: 시험편의 실제 두께를 입력합니다. 이는 빔의 반사 지점(Legs)을 계산하는 공간적 경계가 됩니다.
    - **반영**: 두께 값을 변경하면 S-Scan 상의 백월(Backwall) 라인이 실시간으로 이동하여 실제 에코 신호와의 일치 여부를 즉시 확인할 수 있습니다.
    - **곡면 대응**: 평판뿐만 아니라 파이프와 같은 곡면 시편의 직경과 두께를 조합하여 정확한 빔 경로를 시각화합니다.
* **Legs**: 초음파 빔이 시편 내부에서 반사되는 지점을 화면에 가이드라인으로 표시합니다.
    - **B (Bottom)**: 재질 바닥면 반사 지점 (B0, B2 등)
    - **T (Top)**: 재질 상단면 반사 지점 (T1, T3 등)
    - **활용**: 결함 신호가 B0와 T1 사이에서 발견된다면, 이는 바닥면에서 한 번 반사되어 올라오는 구간(1-Skip)에서 포착된 것임을 증명합니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_13_img_21.png" width="400">
    <div align="center">시험편 두께(Thickness) 설정 화면</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_14_img_11.png" width="400">
    <div align="center">S-Scan 상의 Legs(B0, T1) 시각화 예시</div>
  </div>
</div>

##### **Weld Settings**
용접부의 형상과 규격을 설정하여 결함이 용접 내부, 루트부, 또는 열영향부(HAZ) 중 어디에 위치하는지 판독합니다.

* **Weld Type**: 실제 용접 단면의 형상을 선택합니다.
    - **V-형 / 역 V-형**: 단면 맞대기 용접의 표준 및 반전 형상.
    - **X-형 (Double V)**: 중판 이상의 양면 용접 구조.
* **Weld Shape**:
    - **Symmetric**: 좌우 대칭형 용접부.
    - **Flat Left / Flat Right**: 한쪽 벽면이 수직인 비대칭 구조나 T-Joint 검사 시 사용합니다.
* **Geometric Parameters**:
    - **Groove Angle**: 베벨(Bevel) 각도를 설정하여 용접 경계면(Fusion Line) 결함 판독의 정확도를 높입니다.
    - **Fill / Land Height**: 실제 용접 비드와 루트 면의 높이를 설정합니다.
    - **Land Offset (Gap)**: 모재 사이의 수평 간격을 시각화하여 루트부 결함 판독을 보조합니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_19_img_3.png" width="400">
    <div align="center">V, X형 등 다양한 용접 타입 선택 화면</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_20_img_3.png" width="400">
    <div align="center">Flat Left/Right를 이용한 비대칭 용접 구조 구현</div>
  </div>
</div>

* **HAZ (Heat-Affected Zone, 열영향부)**: 용접 경계면으로부터 열에 의해 조직이 변한 구간의 너비를 설정합니다.
    - **기능**: 결함 신호가 발생했을 때 그것이 용접 내부인지, 아니면 결함 발생 빈도가 높은 HAZ 구간 내부인지를 즉각적으로 구분할 수 있는 음영 가이드를 제공합니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_21_img_10.png" width="400">
    <div align="center">프로파일 설정 전: 신호의 공간적 위치 파악이 어려움</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_21_img_3.png" width="400">
    <div align="center">프로파일 및 HAZ 설정 후: 신호가 HAZ 내부에 있음을 명확히 확인 가능</div>
  </div>
</div>

##### **Offset & Skew Settings**
프로브의 물리적 위치를 소프트웨어 상의 좌표계와 동기화합니다.

* **Probe Offset**: 용접 중심선으로부터 프로브가 떨어진 거리를 입력합니다.
    - **Index Offset**: 용접선 수직 방향의 이격 거리.
    - **Scan Offset**: 스캔 방향의 거리 보정.
* **Skew Angle (스큐 각도)**: 프로브가 바라보는 방향을 0°, 90°, 180°, 270° 중 선택합니다. 설정된 각도에 따라 소프트웨어의 데이터 수집 축이 자동으로 동기화됩니다.


#### 5.5.4 Probe & Wedge Settings
초음파를 생성하고 시험체로 전달하는 하드웨어 사양을 동기화합니다. 이 파라미터들이 실제 탐촉자와 일치해야만 정확한 빔 계산과 수집 데이터의 신뢰성이 확보됩니다.

**기초 개념 이해:**
* **Probe (탐촉자)**: 전기 에너지를 초음파 진동으로 변환하여 시험체 내부로 전달하고, 반사된 신호를 다시 수신하는 핵심 센서입니다. 시스템의 '눈' 역할을 수행합니다.
* **Wedge (웨지)**: 탐촉자와 시험체 사이에 위치하는 매질입니다. 초음파가 특정 각도로 굴절되어 입사되도록 돕고, 탐촉자가 시험체 표면에 직접 닿아 마모되는 것을 방지합니다.

##### **Probe Settings**
탐촉자의 고유 사양과 송수신 소자 범위를 정의합니다.

* **Probe Type**: 센서의 소자 배열 방식에 따라 적합한 타입을 선택합니다.
    - **PA Linear**: 소자들이 한 줄(1D)로 나란히 배열된 가장 일반적인 Phased Array 탐촉자입니다.
    - **PA Dual (Pitch-Catch)**: 송신용과 수신용 소자 배열이 각각 독립적으로 분리된 타입입니다. 표면 근처의 사각지대(Dead Zone)를 줄이고, 신호 감쇠가 심한 재질이나 두꺼운 모재 검사 시 높은 신호 품질을 제공합니다.
    - **Single / Dual UT**: 단일 소자 또는 송수신 분리형 일반 초음파 탐촉자입니다.
* **Probe Wizard**: 시스템 내부에 구축된 데이터베이스에서 모델명을 선택하여 탐촉자 사양을 자동으로 불러오는 기능입니다.
    - **자동 입력 항목**: 피치(Pitch), 주파수(Frequency), 전체 소자 수(Elements) 등이 자동으로 채워져 입력 오류를 방지합니다.
* **Tx/Rx Elements**: 어레이 내에서 실제로 활성화할 소자 범위를 지정합니다.
    - **First Element**: 다중 프로브 구성 시, 각 프로브가 장비 포트의 몇 번째 소자부터 시작되는지 정의하여 데이터 간섭을 방지합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/4.png" width="450">
  <div align="center">Wizard 위치 설명 화면</div>
</div>

##### **Wedge Settings**
탐촉자 하단에 부착되어 입사각을 물리적으로 조절하는 웨지의 상태를 제어합니다.

* **왜 웨지를 사용하는가?**: 초음파는 수직으로만 진행하는 성질이 있습니다. 용접부와 같이 경사지게 빔을 보내야 하는 경우, 특정 각도로 가공된 웨지를 사용하여 빔을 굴절시킵니다. 또한 시험체와의 밀착(Coupling)을 개선하여 신호 손실을 줄여줍니다.
* **Wedge On/Off**: 웨지 내에서의 음파 이동 지연 시간을 계산 엔진에 포함할지를 결정합니다.
* **Wedge Reverse (웨지 리버스)**: 프로브를 웨지에 물리적으로 180도 반대 방향으로 장착했을 때 사용합니다.
    - **기능**: 버튼 하나로 수집 로직과 화면의 시각적 가이드를 반전시켜, 하드웨어 재장착 없이도 정확한 방향으로 데이터를 수집할 수 있게 합니다.
* **Wedge Parameters**: 데이터베이스에 없는 특수 웨지를 사용할 경우 다음의 물리적 수치를 직접 입력하여 최적화할 수 있습니다.
    - **Wedge Angle (웨지 각도)**: 웨지 바닥면과 탐촉자가 놓이는 면 사이의 물리적 각도입니다. 이 수치가 정확해야만 실제 시험체 내부로 들어가는 최종 굴절각을 정확히 계산할 수 있습니다.
    - **Wedge Velocity (웨지 음속)**: 웨지 재질 내에서의 초음파 속도입니다. 재질별 음속 차이에 따라 굴절률이 달라지므로 정밀한 입력이 필요합니다.
    - **Primary Offset (X-Offset)**: 탐촉자의 첫 번째 소자에서 웨지의 앞쪽 끝(Toe)까지의 수평 거리입니다. 결함이 탐촉자로부터 얼마나 떨어져 있는지(수평 거리)를 계산하는 핵심 기준점입니다.
    - **Height at First Element (Z-Offset)**: 웨지 바닥면에서 첫 번째 소자까지의 수직 높이입니다. 결함의 정확한 실제 깊이(True Depth)를 산출하는 데 필수적인 수치입니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/6.png" width="450">
  <div align="center">웨지 메뉴 설명 화면</div>
</div>


#### 5.5.5 Gate Settings
화면에 나타나는 수많은 초음파 신호 중 분석이 필요한 특정 영역을 지정하는 파라미터 그룹입니다. 게이트는 검사자의 눈이 되어주는 '가상의 울타리'로, 이 영역 안에 들어오는 신호만을 결함으로 판정하거나 깊이, 진폭 등 정량적인 데이터로 기록합니다.

**왜 게이트가 필요한가?**: 초음파 신호에는 표면 노이즈나 구조적 반사파 등 불필요한 정보가 섞여 있습니다. 게이트를 설정하여 관찰하고자 하는 구간을 특정하면, 잡음을 배제하고 실제 결함의 깊이와 크기만을 정밀하게 추출하여 자동 측정 및 알람 기능을 수행할 수 있습니다.

##### **Gate Selection**
* **Gate A / B**: 결함 검출 및 측정을 위한 메인 게이트입니다. 두 개의 게이트를 사용하여 결함 간의 거리나 진폭 차이를 비교 분석할 수 있습니다.
* **Gate I (Interface)**: 시험체의 표면(Interface) 신호를 추적하는 특수 게이트입니다. 표면이 거칠거나 위치가 가변적인 환경에서 다른 게이트들의 시작점을 표면 신호에 동기화(Synchronization)시켜 안정적인 검사를 보장합니다.

##### **Control Parameters**
* **Gate Start / Range**: 관찰 영역의 시작 지점과 너비를 설정합니다. 0.1mm 단위의 정밀 제어를 지원하여 미세한 결함 구간도 놓치지 않고 설정할 수 있습니다.
* **Gate Threshold (임계값)**: 어느 정도 높이의 신호부터 유효한 데이터로 인정할지를 결정하는 감도 기준선입니다.
* **Detection Mode (검출 모드)**: 게이트 내에서 신호의 어느 지점을 '측정값'으로 채택할지 결정합니다. 
    - **Peak (최고점)**: 게이트 안에 들어온 신호 중 가장 높이 솟은 '꼭대기 지점'을 찾아 그 깊이와 높이를 측정합니다.
    - **Edge (교차점)**: 게이트 라인과 초음파 신호가 '처음으로 서로 맞닿는(교차하는) 지점'을 측정점으로 잡습니다. 신호의 시작 부분을 정밀하게 포착할 때 유리합니다.

##### **Measurement Mode**
* **Sound Path (거리 기반)**: 탐촉자로부터 결함까지의 실제 진행 거리를 표시합니다. 빔이 나아가는 물리적인 경로를 추적할 때 사용하며, S-Scan 화면에서 게이트 라인이 탐촉자 중심의 **호(Arc) 형태**로 나타납니다.
* **True Depth (깊이 기반)**: 시험체 표면으로부터의 수직 깊이를 계산합니다. 실무에서 결함 위치를 즉각 파악하기 위해 가장 많이 사용하며, S-Scan 화면에서 게이트 라인이 표면과 평행한 **직선 형태**로 나타납니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_28_img_5.png" width="400">
    <div align="center">Sound Path 모드: 곡선 형태의 게이트 라인</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_28_img_13.png" width="400">
    <div align="center">True Depth 모드: 직선 형태의 게이트 라인</div>
  </div>
</div>


#### 5.5.6 Encoder Settings
탐촉자가 이동한 물리적 거리를 측정하여 초음파 데이터에 정확한 위치 좌표를 부여하는 파라미터 그룹입니다. 인코더 설정을 통해 수집된 신호들은 단순한 파형을 넘어, 시험체의 어느 지점에서 발생한 결함인지 시각적으로 지도화(Mapping)할 수 있게 됩니다.

**왜 인코더가 필요한가?**: 인코더 없이 수동으로 탐촉자를 움직이면 신호의 발생 위치를 정확히 기록할 수 없습니다. 인코더를 사용하면 탐촉자의 위치와 초음파 신호를 1:1로 동기화하여, C-Scan이나 B-Scan과 같은 정밀한 영상 이미지를 생성하고 결함의 실제 크기를 측정할 수 있습니다.

##### **Scanner Type**
검사 목적과 하드웨어 환경에 맞는 수집 방식을 선택합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_30_img_3.png" width="150">
  <div align="center">인코더 설정 및 스캐너 타입 선택 화면</div>
</div>

* **One Line (선형 스캔)**: 단일 축(Scan Axis)만을 사용하여 탐촉자를 직선으로 이동시키며 데이터를 수집하는 방식입니다. 용접부의 길이를 따라 이동하며 결함을 찾는 일반적인 검사에 가장 많이 사용됩니다.
* **Raster (래스터 스캔)**: 주 스캔 축(Scan)과 이송 축(Index) 두 개를 모두 활용하여 특정 면적(Area)을 지그재그 형태로 훑으며 데이터를 수집합니다. 부식 매핑(Corrosion Mapping)과 같이 넓은 구역의 결함 분포를 평면 영상으로 확인해야 할 때 필수적입니다.
* **Time (시간 기반)**: 인코더 장치가 없는 환경에서 사용합니다. 설정된 시간 간격에 따라 일정한 속도로 데이터를 수집합니다.

##### **Key Parameters**
* **Scan Start / Stop**: 검사를 수행할 실제 물리적 구간을 정의합니다. (예: 0mm에서 시작하여 500mm 지점에서 수집을 자동 종료).
* **Scan Step**: 데이터를 얼마나 밀밀하게 수집할지 결정하는 샘플링 간격입니다. 1mm로 설정하면 인코더가 1mm 움직일 때마다 데이터가 한 세트씩 저장됩니다. 이 수치가 작을수록 고해상도 영상을 얻을 수 있지만 데이터 용량이 커집니다.
* **Scan Resolution (인코더 분해능)**: 사용 중인 인코더 하드웨어가 1mm 이동할 때 장비로 보내는 전기적 펄스(Pulse)의 개수입니다. 인코더 사양서의 수치(예: 200 pulses/mm)를 정확히 입력해야 실제 이동 거리와 화면상의 숫자가 일치합니다.
* **Scan Position (현재 위치/영점)**: 인코더의 실시간 위치를 표시하며, 특정 지점에서 'Zero' 버튼을 눌러 기준점을 잡을 때 확인합니다.
* **Reverse (방향 반전)**: 인코더의 회전 방향과 소프트웨어의 거리 증가 방향이 반대일 경우, 소프트웨어적으로 방향을 반전시켜 물리적 재설치 없이 대응 가능합니다.
* **Axis Swap (축 맞바꿈)**: 스캐너의 장착 방향에 따라 가로축(Scan)과 세로축(Index)의 데이터 표시 방향을 서로 교체해야 할 때 사용합니다.

##### **Color Axis Mapping**
DSVision은 분석의 직관성을 위해 각 데이터 축에 고유 색상을 할당하며, 이는 상태 표시줄의 수치 색상과 동기화되어 즉각적인 데이터 식별을 돕습니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_35_img_10.png" width="450">
  <div align="center">축별 색상 정의: Scan(청색), Index(녹색), Ultrasound(자색)</div>
</div>

* **Scan (Blue)**: 탐촉자의 주 진행 방향 위치 정보입니다.
* **Index (Green)**: 스캔 라인 간의 간격(Step) 위치 정보입니다.
* **Ultrasound (Purple/Pink)**: 초음파의 실제 진행 경로 및 금속 내 깊이 정보입니다.


#### 5.5.7 Display Settings
분석 화면의 시각적 구성을 최적화하고, 결함의 크기와 위치를 정밀하게 측정하기 위한 도구 그룹입니다. 검사 환경에 맞춰 화면을 조정하고, 디지털 커서를 활용하여 정량적인 분석 데이터를 추출할 수 있습니다.

**왜 보기 설정이 중요한가?**: 실제 검사 현장에서는 프로브가 장착되는 방향이나 검사자의 위치가 매번 다를 수 있습니다. 보기 설정을 통해 화면과 실제 스캔 방향을 일치시키면 해석 오류를 방지할 수 있으며, 정밀한 커서 조작은 검사 보고서의 신뢰도를 결정짓는 가장 중요한 단계입니다.

##### **View Optimization**
* **H / V Flip (이미지 반전)**: 프로브 장착 방향이 반대인 경우, 하드웨어를 재설치할 필요 없이 화면 이미지를 수평(H) 또는 수직(V)으로 즉시 반전시킵니다. 이를 통해 실제 스캔 방향과 화면의 데이터 흐름을 완벽하게 일치시킬 수 있습니다.
* **HV Swap (축 전환)**: 가로축과 세로축의 데이터를 서로 맞바꾸어 표시합니다. 특정 단면의 형상을 더 직관적으로 분석해야 할 때 유용하게 활용됩니다.

##### **Cursor Control**
DSVision의 커서는 결함의 길이, 깊이, 진폭 등을 수치화하는 핵심 도구입니다. 전용 컨트롤러를 통해 복잡한 조작 없이 정밀한 측정이 가능합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_34_img_11.png" width="150">
  <div align="center">커서 조작 인터페이스: 8방향 컨트롤러</div>
</div>

* **Reference / Measurement Cursor**: 기준(Ref) 커서와 측정(Meas) 커서를 각각 활성화하여 두 지점 사이의 거리나 진폭 차이를 계산합니다.
* **8방향 컨트롤러 조작**: 
    - **고속 이동 (`<<`, `>>`, `^^`, `vv`)**: 커서를 넓은 범위 내에서 빠르게 이동(Coarse adjustment)시켜 분석 지점 근처로 보낼 때 사용합니다.
    - **미세 이동 (`<`, `>`, `^`, `v`)**: 결함의 최대 피크점이나 경계 영역에 커서를 **소수점 단위(Fine adjustment)**로 정밀하게 맞출 때 사용합니다.


#### 5.5.8 Channel Management
장비의 하드웨어 리소스를 분할하여 여러 개의 독립적인 검사 환경을 구축하고 관리하는 기능입니다. 상단 탭 UI를 통해 각 채널을 빠르게 전환하며 조작할 수 있으며, 복잡한 다중 탐상 시나리오를 효율적으로 운영할 수 있도록 설계되었습니다.

##### **Core Functions**
* **Add (추가)**: 현재 선택된 구성(Config)을 기반으로 새로운 독립 채널을 생성합니다.
* **Copy (복사)**: 기존 채널의 모든 파라미터(Gain, Gate, Calibration 등)를 그대로 복제하여 새로운 채널을 생성합니다. 유사한 설정이 필요한 다중 프로브 환경에서 준비 시간을 단축합니다.
* **Rename (이름 변경)**: 각 채널에 검사 부위나 목적에 맞는 고유 이름을 부여하여 식별력을 높입니다.
* **Remove (삭제)**: 활성 그룹에서 불필요한 채널을 삭제하여 작업 공간을 정리합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_39_img_10.png" width="150">
  <p>채널 추가 및 관리 메뉴</p>
</div>

##### **Hardware Resource Mapping**
다중 채널을 효과적으로 구성하기 위해서는 각 소프트웨어 채널이 장비의 물리적 포트(소자) 어디에 대응되는지를 정의하는 **First Element (첫 번째 소자)** 설정이 필수적입니다.

* **동작 원리**: 장비의 전체 소자 보드(예: 128소자)에서 각 채널이 시작되는 소자 번호를 지정합니다.
* **할당 예시**: 128소자 보드에서 32채널씩 4개의 PA 채널을 구성할 경우, 각 채널의 First Element를 **1 / 33 / 65 / 97**로 순차적으로 지정하여 신호 간섭 없이 독립적인 데이터 수집이 가능하도록 합니다.


#### 5.5.9 Screen Layout
다양한 보기 템플릿(Templates)을 통해 분석 화면의 구성을 동적으로 조정합니다. 검사 상황에 맞춰 A, B, S, C-Scan 등의 화면 조합을 선택할 수 있으며, 다중 채널 운용 시 각 채널의 데이터를 효율적으로 배치하여 모니터링할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_41_img_3.png" width="150">
  <p>레이아웃 템플릿 선택 화면</p>
</div>

* **Layout Templates (레이아웃 템플릿)**: 활성 채널의 구성(Config)에 따라 최적화된 레이아웃 목록을 제공합니다. 사용자는 단일 화면부터 다중 분할 화면까지 원하는 형태의 템플릿을 선택하여 즉시 적용할 수 있습니다.
* **Multi-Channel Layout management (다중 채널 레이아웃 관리)**: 새로운 채널을 추가하거나 복제하면 레이아웃 그리드에 해당 채널의 데이터가 자동으로 할당됩니다. 여러 그룹의 데이터를 동시에 시각화할 수 있으며, 화면의 복잡도를 낮추기 위해 각 채널 그룹별로 연결된 A-Scan을 기본으로 표시합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_41_img_12.png" width="150">
  <p>다중 채널 레이아웃 적용 예시</p>
</div>


#### 5.5.10 Calibration Wizard
교정(Calibration)은 DSVision 시스템이 수집하는 모든 디지털 신호를 실제 물리적 수치와 일치시키는 핵심 공정입니다. 정확한 교정 없이는 결함의 크기와 위치를 신뢰할 수 없으므로, 검증된 절차에 따라 반드시 수행해야 합니다. 각 단계가 성공적으로 완료되면 화면 하단의 상태 표시등(V, W, S, T)이 **빨간색**으로 활성화되어 시스템의 데이터 무결성을 보장합니다.

##### **Velocity Calibration**
검사 대상 재질(탄소강, 알루미늄 등)마다 고유한 초음파 진행 속도를 시스템에 정확히 동기화하는 절차입니다. 이 단계가 정확해야만 A-Scan 및 S-Scan 상의 모든 거리와 깊이 수치가 실제 시편의 물리적 치수와 일치하게 됩니다.
*   **원리 및 상세**: 알려진 두께의 대비시험편에서 발생하는 두 개의 서로 다른 반사 신호(예: 1차 저면파 Ref A와 2차 저면파 Ref B) 사이의 시간차를 이용합니다. 시스템은 수신된 에코 간의 도달 시간을 나노초(ns) 단위로 분석하여 **m/s 단위의 내부 음속**을 역산해 냅니다.
*   **조작 절차**: 시험편의 두 지점의 실제 위치를 입력하고, 화면상에서 해당 에코 신호에 정밀하게 커서를 맞춘 후 **Calibrate**를 실행합니다.
*   **결과**: 계산된 음속 값이 시스템에 자동 적용되며 하단의 **V** 표시등이 점등됩니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_43_img_10.png" width="450">
  <p>음속 교정: 고해상도 시간 분석을 통한 재질 음속 자동 산출</p>
</div>

##### **Wedge Delay Calibration**
Phased Array 탐촉자의 각 소자에서 발신된 초음파가 웨지 재질을 통과하여 시험체 표면에 도달할 때까지의 시간차를 보정합니다. 모든 각도(Vector)의 빔이 시험체 표면에서 동일한 '영점'을 갖도록 하여, 결함 위치 판독 시의 기하학적 오차를 제거합니다.
*   **시각적 교정(Envelope)**: 빔을 소사하면서 프로브를 조작하면 실시간 신호의 **봉락선(Envelope, 빨간색 선)**이 형성됩니다. 이 봉락선이 시스템이 제시하는 **녹색 허용 오차(Tolerance) 가이드라인** 내에 완벽히 정렬되도록 함으로써, 전 각도에서의 시간 지연이 균일하게 보정되었음을 시각적으로 즉시 확인할 수 있습니다.
*   **결과**: **Finish**를 클릭하면 소자별 지연값이 적용되어 하단의 **W** 표시등이 점등됩니다. 이제 모든 각도의 신호가 실제 물리적 깊이와 일치하게 정렬됩니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/9.png" width="450">
  <p>웨지 지연 교정: 전 각도 빔의 영점(Zero-point)을 일치시키는 시각적 정렬 과정</p>
</div>

##### **Sensitivity Calibration**
탐촉자의 소자별 특성이나 웨지와의 결합 상태에 따른 미세한 감도 차이를 보정합니다. 모든 각도의 빔이 동일한 크기의 결함에 대해 균일한 진폭(높이) 응답을 보이도록 평탄화(Flattening)하여 검사의 객관성을 확보합니다.
*   **조작 및 원리**: 특정 타겟(예: SDH)을 기준으로 모든 각도에서 동일한 목표 진폭(예: 80% FSH)이 수집되도록 보정값을 산출합니다. 사용자는 프로브를 이동하며 모든 각도의 빔이 기준 반사체로부터 최대 에너지를 얻도록 하고, 시스템은 이를 바탕으로 각 벡터의 이득(Gain)을 자동으로 최적화합니다.
*   **결과**: 하단의 **S** 표시등이 점등되며, 어느 각도에서 결함을 탐지하더라도 일관된 감도로 결함 크기를 평가할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/10.png" width="450">
  <p>감도 교정: 전 각도에서 균일한 신호 응답 성능을 확보하기 위한 감도 평탄화</p>
</div>

##### **TCG (Time Corrected Gain) Calibration**
초음파 에너지가 재질 깊숙이 진행될수록 감쇄되는 물리적 현상을 보정합니다. 깊이에 상관없이 동일한 크기의 결함이라면 화면상에서도 동일한 높이의 신호로 표시되도록 하여 판독 효율과 정확도를 극대화합니다.
*   **정밀 설계**: 깊이별 기준 반사체로부터 신호를 수집하여 **TCG 포인트(Step)**를 생성합니다. 사용자는 화살표 아이콘(◀ / ▶)을 사용하여 각 포인트의 위치와 이득값을 세밀하게 조정할 수 있으며, 불필요한 포인트는 즉시 제거(X) 가능합니다.
*   **고급 설정**: 특히 특정 각도 범위(**Angle Start / Stop**)에만 TCG를 적용하도록 섹터 범위를 수정할 수 있어, 복잡한 검사 환경에서도 유연한 대응이 가능합니다.
*   **결과**: 하단의 **T** 표시등이 점등되며, 깊이에 따른 감도 차이가 완벽히 보상됩니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_46_img_17.png" width="450">
  <p>TCG 교정: 깊이 및 각도별 감쇄를 보정하는 디지털 이득 제어 곡선 설계</p>
</div>

##### **Encoder Calibration**
탐촉자의 물리적 이동 거리와 소프트웨어상의 좌표를 1:1로 일치시키는 절차입니다. 이 단계가 정확해야만 C-Scan이나 B-Scan 영상에서 결함의 실제 크기와 위치를 정밀하게 측정할 수 있습니다.
*   **지능형 마법사 기능**: 인코더를 실제 정해진 거리(예: 100mm)만큼 물리적으로 이동시킨 후, 실제 이동 수치를 입력하면 시스템이 **인코더 분해능(Resolution, Pulse/mm)**을 자동으로 도출합니다.
*   **절차**: 축 선택(Scan/Index) → 시작 위치 기록(Start) → 물리적 이동 → 종료 위치 기록(End) → 실제 거리 입력 및 계산(Calculate) → 적용(OK).
*   **결과**: 시스템의 디지털 좌표와 실제 물리적 스캔 위치가 완벽히 동기화됩니다.

<div align="center">
  <img src="/images/03_Resources/(KOR) program_introduction/images/slide_47_img_3.png" width="450">
  <p>인코더 교정: 물리적 이동 거리와 디지털 펄스의 실시간 동기화</p>
</div>


### 5.6 Bottom Toolbar explanations
프로그램 하단에 위치한 툴바는 현재 장비의 교정 상태와 배터리 잔량 등 주요 정보를 한눈에 확인하기 위한 영역입니다.

#### 5.6.1 Calibration Status (V, W, S, T) Indicators
검사에 필요한 주요 교정 항목들의 적용 여부를 실시간으로 표시합니다.
*   **표시 항목**: V(음속), W(웨지 지연), S(감도), T(TCG)
*   **상태 표시**: 교정이 완료되어 활성화된 항목은 **빨간색**, 교정이 되지 않은 미완료 상태는 **흰색**으로 표시됩니다.

#### 5.6.2 Battery & Charging Status
장비의 현재 배터리 잔량(%)과 전원 연결(충전) 상태를 아이콘으로 표시합니다. 현장 검사 중 전원 상태를 상시 모니터링하여 갑작스러운 장비 종료를 방지할 수 있습니다.

### 5.6.3 Setup name & Velocity & Temperature
*   **Setup name**: 현재 사용 중인 설정 파일(.set)의 이름을 표시합니다.
*   **Velocity**: 현재 시스템에 적용된 음속(m/s) 수치를 나타냅니다.
*   **Temperature**: 장비 내부의 현재 온도를 표시하여 작동 환경을 모니터링합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/Toolbar/Bottom toolbar.png" width="600">
  <p>하단 툴바를 통한 상태 모니터링 (V, W, S, T 표시등 및 시스템 정보)</p>
</div>

## 5.7 Advanced Measurement Logic
DSVision은 수집된 초음파 신호를 정량적인 데이터로 변환하기 위해 정밀한 게이트(Gate) 제어 및 측정 로직을 제공합니다. 검사자는 게이트 설정을 통해 특정 분석 영역을 지정하고, 신호의 깊이와 진폭을 다양한 기준(Echo Type)으로 산출할 수 있습니다.

### 5.7.1 Gate Principles
게이트는 화면에 나타나는 수많은 신호 중 실제 분석하고자 하는 '관심 영역(Region of Interest)'을 지정하는 도구입니다. DSVision은 최대 3개의 독립적인 게이트(A, B, I)를 제공하며, 게이트 내에 들어오는 신호만을 결함으로 판정하거나 정량적인 데이터로 기록합니다.

### 5.7.2 Echo Type & Visualization
사각 탐상(Angled Beam) 환경에서 신호의 위치를 계산하는 기준점에 따라 두 가지 측정 모드를 지원합니다. 이는 결함의 물리적 위치를 직관적으로 파악하는 데 핵심적인 역할을 합니다.

*   **Sound Path**: 탐촉자로부터 결함까지 초음파가 실제 진행한 전체 사선 거리를 표시합니다. S-Scan 상에서 게이트 라인이 탐촉자 중심의 **호(Arc)** 형태로 나타납니다.
*   **True Depth**: 시험체 표면으로부터 결함까지의 실제 수직 깊이를 계산하여 표시합니다. S-Scan 상에서 게이트 라인이 표면과 평행한 **직선(Horizontal)** 형태로 나타납니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_28_img_5.png" width="400">
    <div align="center">Sound Path 모드: 호(Arc) 형태의 게이트 시각화</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_28_img_13.png" width="400">
    <div align="center">True Depth 모드: 직선(Horizontal) 형태의 게이트 시각화</div>
  </div>
</div>

### 5.7.3 Gate Synchronization & Detection Logic
DSVision은 표면이 불규칙하거나 변동이 심한 현장에서도 안정적인 결함 탐상을 유지하기 위해 **Gate Synchronization (게이트 동기화)** 기능을 제공합니다.

*   **Gate I (Interface Gate) & Sync**:
    - **Interface Gate (I)**: 시편의 표면(Interface) 에코를 실시간으로 추적하는 특수 게이트입니다.
    - **Synchronization (Sync)**: Gate I가 포착한 표면 신호를 시간적 기준점(T=0)으로 설정합니다. 이를 통해 시편의 표면 높낮이가 변하더라도 Gate A와 B가 표면으로부터 항상 일정한 깊이를 유지하며 결함을 감시하도록 동기화합니다.
*   **Detection Mode**:
    - **Peak (최고점)**: 게이트 영역 내에서 가장 높은 진폭을 가진 지점을 측정합니다. 결함의 최대 크기 판정에 유리합니다.
    - **Edge (교차점)**: 신호가 게이트 임계값(Threshold)과 처음 만나는 지점을 측정합니다. 결함이 시작되는 지점을 정밀하게 포착할 때 유리합니다.

<div align="center">
  <img src="/images/03_Resources/(KOR)%20program_introduction/images/slide_27_img_3.png" width="150">
  <div align="center">게이트 파라미터 및 동기화 로직 설정 인터페이스</div>
</div>

### 5.7.4 Practical Defect Evaluation Workflow
게이트는 단순히 영역을 지정하는 것을 넘어, 실제 결함을 '포착'하고 '경보'를 울리는 능동적인 도구입니다.

1.  **임계값(Threshold) 설정**: 배경 노이즈보다 높고, 예상되는 최소 결함 신호보다는 낮은 수준으로 게이트 라인의 높이를 설정합니다.
2.  **신호 포착(Triggering)**: 초음파 에코가 게이트 라인을 넘어서는 순간, 시스템은 이를 '유효한 신호'로 인식합니다. 이때 화면의 게이트 색상이 변하거나 경보음(GateLine Horn)이 발생하여 검사자에게 결함 발생을 즉각 알립니다.
3.  **최대 피크 추적**: 검사자가 프로브를 미세하게 움직여 신호의 높이가 가장 높게 나타나는 지점(Peak)을 찾으면, 시스템은 해당 지점의 데이터를 상단 정보 패널에 실시간으로 고정하여 출력합니다.

### 5.7.5 Interpreting Measurement Data (P, D, S)
게이트에 포착된 신호는 상단 패널의 수치(P, D, S)를 통해 시험체 내부의 실제 물리적 좌표로 변환됩니다. 검사자는 이 데이터를 통해 결함의 정확한 위치를 지도화(Mapping)할 수 있습니다.

*   **Amplitude (%)**: 신호의 강도입니다. 기준 신호(예: 80% FSH)와 비교하여 결함의 크기나 반사율을 평가하는 척도가 됩니다.
*   **Depth (D - 수직 깊이)**: 시험체 표면으로부터 결함까지의 수직 깊이입니다. 이 수치가 `Thickness` 설정값의 절반보다 작다면 표면 근처, 크다면 바닥면 근처에 결함이 있음을 의미합니다.
*   **Primary (P - 수평 거리)**: 프로브의 입사 지점으로부터 결함이 수평으로 얼마나 떨어져 있는지를 나타냅니다.
*   **Sound Path (S - 빔 거리)**: 초음파가 실제 이동한 사선 거리입니다.

**실전 판독 예시:**
> S-Scan 화면에서 결함 신호가 보이고 상단 패널에 **D: 15.2mm / P: 25.0mm**가 표시된다면, 이는 "프로브로부터 25mm 떨어진 지점의 15.2mm 깊이에 결함이 존재한다"는 것을 의미합니다. 검사자는 이 좌표를 시편 프로파일(Weld Profile)에 대입하여 결함이 용접부 내부인지, 혹은 열영향부(HAZ)에 걸쳐 있는지 즉각 판단할 수 있습니다.

### 5.7.6 Defect Judgment Criteria
수집된 데이터를 바탕으로 결함의 합격/불합격 여부를 최종 판단합니다.

*   **Echo Height Assessment**: 게이트 내 신호의 진폭(%)이 사전에 설정된 평가 레벨(예: DAC 곡선 위 또는 기준 감도의 50% 이상)을 초과하는지 확인합니다.
*   **Location Analysis**: 결함의 좌표(P, D)가 용접부의 중요한 구역(예: Root 또는 Fusion Line)에 위치하는지 분석합니다. 특정 구역의 결함은 크기가 작더라도 위험도가 높게 평가될 수 있습니다.
*   **Data Recording**: 판단이 완료되면 해당 위치에서 'Screen Shot'을 찍거나 데이터를 저장하여, 결함의 위치와 크기가 포함된 최종 검사 보고서를 생성합니다.

## 5.8 Cursor Analysis & Sizing
게이트(Gate)가 특정 영역에서 결함의 존재를 알리는 '경보' 역할을 한다면, 커서(Cursor)는 발견된 결함의 물리적인 크기와 정밀한 위치를 '측정'하는 도구입니다. DSVision은 두 개의 커서를 이용해 결함의 길이와 높이를 산출하는 정밀 분석 환경을 제공합니다.

### 5.8.1 The Role of Cursors
커서는 스캔 데이터 상의 임의의 지점을 지정하여 해당 위치의 좌표와 진폭 값을 추출합니다.
- **정량적 데이터화**: 단순히 "결함이 있다"는 판단을 넘어, "결함의 길이가 몇 mm인가?"를 수치로 증명할 때 사용합니다.
- **정밀 위치 보정**: 게이트가 포착한 피크 지점뿐만 아니라, 결함이 시작되고 끝나는 경계 지점을 수동으로 지정하여 분석할 수 있습니다.

### 5.8.2 Ref / Measurement System
DSVision의 커서는 **Reference(기준)**와 **Measurement(측정)** 두 개가 한 쌍으로 작동합니다.
- **Ref Cursor (기준)**: 분석하고자 하는 영역의 시작점 또는 피크 지점에 고정하여 측정의 영점(0) 역할을 수행합니다.
- **Measurement Cursor (측정)**: 기준점으로부터 이동하며 거리 차이를 계산하는 끝점 역할을 수행합니다.
- **커서 제어**: 우측 설정 메뉴의 8방향 컨트롤러를 통해 활성화된 커서를 상하좌우로 정밀하게 이동시킬 수 있습니다.

### 5.8.3 Interpreting ΔH and ΔV
커서를 활성화하면 화면 하단 상태바에 두 커서 사이의 거리 차이가 **Delta(Δ)** 값으로 표시됩니다.
- **ΔH (Horizontal Delta)**: 두 커서 사이의 수평 거리 차이입니다. 주로 결함의 **길이(Length)**를 측정할 때 사용됩니다.
- **ΔV (Vertical Delta)**: 두 커서 사이의 수직 거리(깊이) 차이입니다. 주로 결함의 **높이(Height)**를 측정할 때 사용됩니다.

<div carousel>
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Cursor/Cursor 사용 전.png" width="600">
    <div align="center">커서 비활성 상태: 전체적인 신호 흐름만 파악 가능</div>
  </div>
  <!-- slide -->
  <div align="center">
    <img src="/images/03_Resources/Image/Manual/Cursor/Cursor 사용 후.png" width="600">
    <div align="center">커서 활성 상태: ΔH, ΔV 수치를 통한 결함의 정밀 크기 산출</div>
  </div>
</div>

### 5.8.4 Defect Sizing (6dB Drop Method)
현장에서 가장 널리 사용되는 **6dB Drop(50% 감쇄법)**을 이용한 사이징 절차는 다음과 같습니다.

1.  **피크 탐색**: 프로브를 움직여 결함 신호가 가장 높게 나타나는 지점을 찾습니다.
2.  **기준점 설정**: 해당 피크 지점에 **Ref Cursor**를 위치시킵니다.
3.  **경계 탐색**: 신호의 진폭이 피크 대비 절반(6dB 하강)으로 떨어지는 지점까지 **Measurement Cursor**를 좌우 또는 상하로 이동시킵니다.
4.  **크기 확정**: 이때 상태바에 표시되는 **ΔH** 또는 **ΔV** 수치가 해당 결함의 실제 물리적 크기(길이 또는 높이)가 됩니다.

# 6. Specialized Inspection Modes
- 특정 검사 목적에 최적화된 고급 기능 및 모드에 대한 설명
## 6.1 Operation
## 6.2 Corrosion Mapping
## 6.3 TOFD (Time of Flight Diffraction)
## 6.4 PA Dual (Pitch & Catch)
## 6.5 Multi Ch

# 7. Troubleshooting
