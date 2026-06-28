# DEEPSOUND P5 Product Manual

- **Hardware Version**: v3.0.5
- **Manual Version**: v1.0
- **Release Date**: 2026-04-29
- **Last Updated**: 2026-04-29
- **Author**: SEONGSANLAB Co., Ltd.

## PART I: Safety and Maintenance

### 1.1 Safety Information
- 본 장비는 정밀 전자 부품과 고전압 펄서 회로로 구성되어 있으므로 사용 전 다음 안전 지침을 반드시 숙지하십시오.
- 규격에 맞지 않는 외부 전원 공급 장치 사용 시 시스템 회로 손상 및 화재의 위험이 있습니다.
- 강한 충격, 낙하, 과도한 진동은 내부 부품의 정렬과 연결 상태에 악영향을 미칠 수 있으므로 주의하십시오.
- 장비 내부에는 사용자가 직접 수리할 수 있는 부품이 없으며, 임의 분해 시 무상 수리 서비스 대상에서 제외됩니다.
- 습도가 매우 높거나 물이 튀는 환경에서 사용할 경우 단락(Short) 및 감전의 위험이 있으므로 건조한 환경을 유지하십시오.
- 검사 수행 중 케이블이 손상된 프로브나 어댑터를 사용하지 마십시오.

### 1.2 Maintenance of the Device
- **작동 온도**: 0℃ ~ 60℃ 범위 내에서의 사용을 권장하며, 극한의 온도 조건은 피하십시오.
- **보관 온도**: -20℃ ~ 80℃ 환경에서 보관해야 하며, 직사광선이 닿지 않는 서늘한 곳을 권장합니다.
- 장비를 1개월 이상 사용하지 않을 경우, 배터리를 본체에서 분리하여 50% 내외로 충전된 상태로 보관하십시오.
- 강한 자기장이나 전자기 간섭(EMI)이 발생하는 대형 전동기 또는 변압기 근처에 장비를 장기간 방치하지 마십시오.
- 전용 운반 케이스를 사용하여 이동 중 발생할 수 있는 외부 충격으로부터 장비를 보호하십시오.

### 1.3 Cleaning Guide
- **화면 세척**: 12.1인치 터치스크린 세척 시 부드럽고 보풀이 없는 마른 헝겊을 사용하십시오. 오염이 심할 경우 소량의 알코올을 묻힌 전용 세정제를 사용하십시오.
- **포트 관리**: TC-ZIF 및 IPEX 등 프로브 연결 포트 내부로 액체, 연마제, 이물질이 들어가지 않도록 각별히 주의하십시오.
- **먼지 제거**: 비접촉식 에어 스프레이를 사용하여 정기적으로 외부 입출력 포트 주변의 먼지를 제거하십시오.
- **케이스 세척**: 부드러운 천에 중성 세제를 살짝 묻혀 외부 하우징을 닦아내고, 화학 용제나 강한 연마제는 사용하지 마십시오.

# PART II: Product Overview

## 2.1 Introduction to DEEPSOUND P5
- DEEPSOUND P5는 산업 현장에서의 정밀 비파괴 검사를 위해 설계된 고성능 휴대용 위상배열 초음파 탐상(PAUT) 장비입니다.
- 일체형 구조로 설계되어 현장 이동성이 높으며, 고사양 하드웨어를 바탕으로 실시간 데이터 처리 및 고해상도 이미지 구현이 가능합니다.

<div align="center">
  <img src="/images/03_Resources/Image/P5/1234/P5_Catalog_main.png" width="600">
  <p>DEEPSOUND P5 장비 전면 외형</p>
</div>

## 2.2 Hardware Characteristics
- **디스플레이**: 12.1인치 대화면 터치스크린을 탑재하여 시인성이 우수하며, 압력 감지 방식을 채택하여 장갑 착용 상태에서도 조작이 가능합니다.
- **채널 구성**: 32:128PR(Parallel Receive) 채널 구성을 지원하며, 최대 128개의 소자를 제어하여 정밀한 초음파 빔 형성(Beamforming)을 수행합니다.
- **데이터 처리 속도**: 100 MHz의 디지털화(Digitization) 속도를 지원하여 고주파수 프로브 사용 시에도 신호 왜곡 없는 정밀한 데이터 수집이 가능합니다.
- **고출력 펄서**: 25 V에서 최대 160 V까지 가변 가능한 송신 전압을 지원하여 두꺼운 시편이나 감쇠가 심한 재질에서도 안정적인 신호를 확보합니다.
- **고속 스캔 지원**: 최대 30 kHz의 펄스 반복 주파수(PRF) 범위를 제공하여 인코더를 이용한 고속 스캐닝 시에도 데이터 누락 없는 검사가 가능합니다.
- **차세대 기술 대응**: TFM(Total Focusing Method) 및 FMC(Full Matrix Capture) 알고리즘 처리를 위한 전용 연산 하드웨어를 내장하고 있습니다.

## 2.3 Accessories and Packages
- DEEPSOUND P5의 기본 패키지는 현장에서 즉시 사용 가능하도록 다음과 같은 필수 구성품을 포함하고 있습니다.
- **P5 본체**: PAUT/UT 검사 기능을 탑재한 메인 장비
- **스마트 배터리**: 장시간 외부 검사를 위한 대용량 리튬 이온 배터리 (3구 슬롯 시스템 지원)
- **전원 어댑터 및 전원 케이블**: 본체 전원 공급 및 배터리 충전용 어댑터 세트
- **교정 증명서**: 장비의 성능 및 교정 데이터가 포함된 공식 문서
- **전용 하드 케이스**: 충격 및 습기로부터 장비를 보호하는 폼(Foam) 내장형 이동식 하드 케이스

<div align="center">
  <img src="/images/03_Resources/Image/P5/홈페이지_사진_P5/포장 및 패키지/패키지_3.jpg" width="600">
  <p>DEEPSOUND P5 기본 패키지 및 전용 케이스</p>
</div>

# PART III: Hardware Interface

## 3.1 Device Layout and Parts
- DEEPSOUND P5는 현장 검사 편의성을 위해 주요 입출력 포트를 측면에 배치하고, 상단에 전원 및 상태 표시부를 집중시켰습니다.

### 3.1.1 Front View
- **디스플레이**: 12.1인치 대화면 터치스크린이 전면의 대부분을 차지하며, 별도의 물리 키패드 없이 소프트웨어 아이콘을 통해 모든 조작이 이루어집니다.
- **보호 프레임**: 외부 충격으로부터 본체를 보호하기 위한 고무 재질의 견고한 범퍼 프레임이 장착되어 있습니다.

### 3.1.2 Side Interface (Connector Panel)
- DEEPSOUND P5의 양 측면에는 고속 데이터 전송 및 센서 연결을 위한 입출력 포트들이 배치되어 있습니다.

#### [Left Side]
- **Probe Port (IPEX 160p)**: 최신 위상배열(Phased Array) 프로브 연결용 고밀도 인터페이스입니다.
- **Encoder Port (D-sub 15pin)**: 3축 엔코더 연결 포트
- **UT Port (BNC x 2)**: 일반 초음파 및 TOFD 검사용 BNC 커넥터

#### [Right Side]
- **DC Input**: 전용 전원 어댑터 연결 포트
- **Ethernet (RJ45)**: PC 통신 및 네트워크 데이터 전송용 포트
- **USB 2.0**: 외부 저장장치 및 주변기기 연결용 포트
- **HDMI**: 외부 모니터 출력용 포트

### 3.1.3 Rear View
- **배터리 슬롯 (3-Slot System)**: 장비 후면에는 3개의 독립적인 배터리 장착 슬롯이 있으며, 전원 종료 없이 배터리를 교체할 수 있는 핫스왑(Hot-swap) 기능을 지원합니다.

## 3.2 Control Buttons
- **Power Button**: 장비 상단 우측에 위치한 물리 버튼으로, 시스템의 전원을 제어합니다. 버튼 상단에 전원 아이콘이 각인되어 있어 직관적인 식별이 가능합니다.

<div align="center">
  <img src="/images/03_Resources/Image/P5/1234/P5_omni_Port_1.png" width="300">
  <img src="/images/03_Resources/Image/P5/1234/P5_I.O_Port.png" width="250">
  <p>DEEPSOUND P5 좌/우 측면 주요 포트 및 인터페이스 구성</p>
</div>

## 3.3 LED Indicator Status
- 장비 상단 전원 버튼 좌측에는 시스템 상태를 나타내는 3개의 수직 LED 인디케이터(1, 2, 3)가 위치합니다.
- **LED 1 (Power/Charge)**: 외부 전원 연결 및 충전 상태를 표시합니다.
- **LED 2 (System/Status)**: 운영체제 및 검사 소프트웨어의 구동 상태를 표시합니다.
- **LED 3 (Battery)**: 장착된 배터리의 잔량 및 저전력 경고 상태를 표시합니다.

# PART IV: Preparation for Use

## 4.1 Batteries and Power Management
- DEEPSOUND P5는 장시간의 현장 검사를 위해 고용량 리튬 이온 배터리와 효율적인 전원 관리 시스템을 탑재하고 있습니다.
- **배터리 사양**: 48 Wh 용량의 스마트 배터리(RRC2057 등)를 사용하며, 잔량 확인이 가능한 인디케이터가 내장되어 있습니다.
- **3구 슬롯 시스템**: 장비 후면에 총 3개의 배터리 장착 슬롯을 제공하여, 최대 장착 시 전원 연결 없이도 장시간 운용이 가능합니다.

## 4.2 Installing and Charging the Battery
- **배터리 장착**: 배터리의 단자 방향을 확인한 후 후면 슬롯에 끝까지 밀어 넣어 "딸깍" 소리가 나도록 고정하십시오.
- **배터리 충전**: 장비 측면의 보호 커버를 열고 전원 어댑터를 **DC 전원 입력 포트**에 연결하십시오. 전원 인가 시 상단의 LED 인디케이터를 통해 충전 상태를 확인할 수 있습니다.

## 4.3 Hot-swappable Function
- 본 장비는 **핫스왑(Hot-swap)** 기능을 지원하여, 시스템 전원을 끄지 않은 상태에서도 배터리를 교체할 수 있습니다.
- 최소 1개 이상의 충분한 잔량이 남은 배터리가 장착되어 있는 상태에서, 다른 슬롯의 방전된 배터리를 새 배터리로 교체하십시오. 
- *주의: 모든 슬롯의 배터리를 동시에 제거하면 전원이 즉시 차단되어 데이터가 손실될 수 있습니다.*

## 4.4 Turning ON/OFF the Device
- **전원 켜기(ON)**: 장비 상단의 전원 버튼을 약 2~3초간 길게 누르십시오. 시스템 로딩 후 검사 소프트웨어가 자동으로 실행됩니다.
- **전원 끄기(OFF)**: 소프트웨어 메뉴 내의 종료 아이콘을 클릭하거나, 전원 버튼을 짧게 눌러 나타나는 종료 확인 창에서 'Shut Down'을 선택하십시오.
- **강제 종료**: 시스템이 응답하지 않는 비상 상황 시 전원 버튼을 10초 이상 길게 누르면 강제로 전원이 차단됩니다.

# PART V: External Connections

## 5.1 Probe Connections
- DEEPSOUND P5는 검사 목적에 따라 다양한 위상배열(PA) 및 일반 초음파(UT) 프로브를 연결할 수 있습니다.

### 5.1.1 Phased Array Probe (IPEX 160p)
- **연결 방법**: 프로브 커넥터를 포트에 맞춘 후, 고정 장치가 완전히 체결될 때까지 부드럽게 삽입하십시오.
- **주의사항**: 커넥터 핀 보호를 위해 삽입 전 이물질 유무를 반드시 확인하십시오.

### 5.1.2 Conventional UT Probe (BNC)
- BNC 케이블을 장비 하단의 UT 1번 또는 2번 포트에 끼운 후 시계 방향으로 돌려 고정하십시오.
- 단일 진동자(Single) 또는 송수신 분리형(Dual) 프로브 설정은 소프트웨어 내에서 구성할 수 있습니다.

## 5.2 Encoder Connector (Receptacle)
- **규격**: D-sub 15pin 3row Receptacle
- **기능**: 인코더가 장착된 스캐너를 연결하여 검사 위치(Index/Scan) 정보를 수집합니다. 
- **핀 구성**: 최대 3축(X, Y, Z) 인코더 신호와 5 V 전원 공급을 지원합니다.

## 5.3 Other I/O Port References
- 장비 측면의 전용 보호 커버를 열면 다음과 같은 범용 I/O 포트를 사용할 수 있습니다.
- **Ethernet (RJ45)**: 외부 PC와의 유선 네트워크 연결 및 데이터 고속 전송을 지원합니다.
- **HDMI**: 외부 모니터나 프로젝트에 연결하여 장비 화면을 실시간으로 출력할 수 있습니다.
- **USB 2.0**: 데이터 백업을 위한 USB 메모리 스틱 연결이나, 마우스 및 키보드와 같은 입력 장치를 연결합니다.
- **DC Input**: 전용 전원 어댑터(15 V ~ 19 V DC)를 연결하여 배터리를 충전하거나 장비를 구동합니다.

# PART VI: Device Specifications

## 6.1 General Specifications
- **Dimensions(WxHxD)**: 340 x 257 x 147 mm
- **Weight**: 5.9 kg (With 3 x batteries)
- **Power Supply**: 12 V, 5 A
- **Batteries**: Li-ion, 48 Wh capacity (x3)
- **Hot swappable batteries**: Yes
- **Operation Time**: Up to 4 hours
- **Display**: 12.1" Wide Monitor [1280 x 800], Touch screen
- **Storage**: 32 GB, expandable

## 6.2 Connectivity & Environmental
- **Ethernet**: Fast Gigabit x 1
- **HDMI**: x 1
- **USB Port**: USB 2.0 x 1
- **Probe Port**: MiniDLP Ipex 160p connector x 1
- **UT Port**: Lemo 00 UT Connector x 2 (for IPEX model)
- **Encoder Port**: 3-axis Encoder input (D-sub 15pin 3row)
- **Operating Temperature**: 0 ~ 60 °C
- **Storage Temperature Range**: -20 ~ 80 °C

## 6.3 Technical & Acoustic Specifications

### 6.3.1 PA/UT Configuration
- **Effective Digitizing**: 100 MHz
- **Max PRF**: 30 kHz
- **Refresh Rate**: 30 Hz
- **A-scan Height**: 300 %

### 6.3.2 Phased-Array
- **PAUT Channel Configurations**: 32:128PR
- **Scan Type**: Linear, Sectorial, Conventional, TOFD
- **Focal Law**: Up to 1024 total
- **Channel Group**: Up to 8
- **Focusing Mode**: True-depth, Sound path

### 6.3.3 Data Specifications
- **Maximum Number of A-scan Data Point**: Up to 16384
- **Rectification**: RF, Full wave
- **Filtering**: Selection of Low-pass, Band-pass, High-pass
- **Video Filtering**: Smoothing
- **TFM Raw Data Export**: Yes

### 6.3.4 Acoustic Specifications
- **Pulser (Voltage)**: 25 V ~ 160 V (5 V Step)
- **Pulser (Pulse Shape)**: Bipolar Pulse
- **Pulser (Pulse Width)**: 50 nsec ~ 2,000 nsec
- **Receiver (Gain Range)**: 0 dB ~ 90 dB
- **Receiver (Band Width)**: 0.5 ~ 20 MHz
- **Receiver (Sample Resolution)**: 16 bit
- **Dynamic Sample Focusing**: Yes

# PART VII: Troubleshooting

## 7.1 Basic Troubleshooting
- 장비 운용 중 다음과 같은 문제가 발생할 경우, 기술 지원을 요청하기 전 아래 사항을 먼저 점검하십시오.

### 7.1.1 전원 및 배터리 관련
- **장비가 켜지지 않음**: 배터리가 충분히 충전되어 있는지 확인하거나, 외부 전원 어댑터를 연결한 후 다시 시도하십시오. 전원 버튼을 10초 이상 길게 눌러 강제 리셋을 수행하십시오.
- **배터리 인식 불량**: 배터리를 슬롯에서 분리했다가 다시 장착하십시오. 배터리 단자 부위에 이물질이 있는지 확인하고 마른 천으로 닦아내십시오.

### 7.1.2 디스플레이 및 인터페이스
- **터치스크린 응답 없음**: 화면 표면의 이물질이나 수분을 제거하십시오. 증상이 지속되면 장비를 재부팅하십시오.
- **외부 모니터 출력 불가**: HDMI 케이블 연결 상태를 확인하고, 외부 모니터의 입력 소스가 HDMI로 설정되어 있는지 확인하십시오.

### 7.1.3 센서 및 데이터 수집
- **프로브 인식 오류**: IPEX 커넥터의 체결 상태를 확인하십시오. 커넥터가 완전히 삽입되어 고정되었는지 확인하고, 프로브 케이블의 외관 손상 여부를 점검하십시오.
- **인코더 신호 불안정**: D-sub 15pin 커넥터의 고정 나사가 체결되어 있는지 확인하십시오. 스캐너의 인코더 바퀴가 시편 표면과 밀착되어 회전하는지 확인하십시오.

## 7.2 Error Handling and Support
- 상기 조치 후에도 문제가 해결되지 않거나 하드웨어적인 파손이 발생한 경우, 임의로 분해하지 말고 제조사로 문의하십시오.
- **제조사**: (주)성산연구소 (SEONGSANLAB Co., Ltd.)
- **주소**: 경기도 군포시 공단로 140번길 52, 에이스하이테크시티 13층 1318호
- **전화**: 02-2039-5725
- **이메일**: admin@dspaut.com
