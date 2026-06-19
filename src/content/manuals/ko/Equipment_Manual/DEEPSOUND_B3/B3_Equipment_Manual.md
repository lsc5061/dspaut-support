# DEEPSOUND B3 Product Manual

- **Hardware Version**: v1.0.2
- **Manual Version**: v1.0
- **Release Date**: 2026-04-29
- **Last Updated**: 2026-04-29
- **Author**: SEONGSANLAB Co., Ltd.

## PART I: Safety and Maintenance

### 1.1 Safety Information
- 본 장비는 정밀 전자 부품과 고전압 펄서 회로로 구성되어 있으므로 사용 전 다음 안전 지침을 반드시 숙지하십시오.
- 규격에 맞지 않는 외부 전원 공급 장치 사용 시 시스템 회로 손상 및 화재의 위험이 있습니다.
- B3 모델은 초경량 설계로 이동성이 우수하나, 강한 충격이나 낙하 시 내부 정밀 부품이 손상될 수 있으므로 주의하십시오.
- 장비 내부에는 사용자가 직접 수리할 수 있는 부품이 없으며, 임의 분해 시 무상 수리 서비스 대상에서 제외됩니다.
- 습도가 매우 높거나 물이 튀는 환경에서 사용할 경우 단락(Short) 및 감전의 위험이 있으므로 건조한 환경을 유지하십시오.

### 1.2 Maintenance of the Device
- **작동 온도**: 0℃ ~ 60℃ 범위 내에서의 사용을 권장하며, 극한의 온도 조건은 피하십시오.
- **보관 온도**: -20℃ ~ 80℃ 환경에서 보관해야 하며, 직사광선이 닿지 않는 서늘한 곳을 권장합니다.
- 장비를 1개월 이상 사용하지 않을 경우, 배터리를 본체에서 분리하여 50% 내외로 충전된 상태로 보관하십시오.
- 전용 운반 케이스를 사용하여 이동 중 발생할 수 있는 외부 충격으로부터 장비를 보호하십시오.

### 1.3 Cleaning Guide
- **화면 세척**: 7인치 정전식 터치스크린 세척 시 부드럽고 보풀이 없는 마른 헝겊을 사용하십시오. 오염이 심할 경우 소량의 알코올을 묻힌 전용 세정제를 사용하십시오.
- **포트 관리**: MiniDLP IPEX 등 프로브 연결 포트 내부로 액체나 이물질이 들어가지 않도록 각별히 주의하십시오.
- **먼지 제거**: 비접촉식 에어 스프레이를 사용하여 정기적으로 외부 입출력 포트 주변의 먼지를 제거하십시오.

# PART II: Product Overview

## 2.1 Introduction to DEEPSOUND B3
- DEEPSOUND B3는 극한의 현장 기동성과 휴대성을 위해 설계된 초경량 위상배열 초음파 탐상(PAUT) 장비입니다.
- 본체 무게가 1kg 미만(배터리 포함 시 약 1.4kg)으로 설계되어 로프 액세스 검사나 협소한 공간에서의 정밀 검사에 최적화되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/B3/photos/KakaoTalk_20251231_101545706_07_1_1.png" width="500">
  <p>DEEPSOUND B3 제품 개요</p>
</div>

## 2.2 Hardware Characteristics
- **디스플레이**: 7인치 고해상도(1024x600) 정전식 터치스크린을 탑재하여 야외 현장에서도 우수한 시인성과 빠른 조작 반응 속도를 제공합니다.
- **채널 구성**: 16:64PR 채널 구성을 지원하며, 컴팩트한 사이즈에도 불구하고 정밀한 초음파 빔 형성 기능을 수행합니다.
- **데이터 처리 속도**: 100 MHz의 디지털화 속도를 지원하여 신호 왜곡 없는 정밀한 데이터 수집이 가능합니다.
- **초경량 설계**: 배터리를 포함하고도 1.4kg 수준의 가벼운 무게를 유지하여 작업자의 피로도를 최소화합니다.
- **시스템 안정성**: 고속 부팅 시스템을 탑재하여 현장에서 즉각적인 검사 준비가 가능합니다.

## 2.3 Accessories and Packages
- DEEPSOUND B3의 기본 패키지는 다음과 같은 필수 구성품을 포함하고 있습니다.
- **B3 본체**: PAUT/UT 검사 기능을 탑재한 초소형 메인 장비
- **전용 배터리 팩**: 대용량 리튬 이온 배터리
- **전원 어댑터 및 케이블**: 본체 전원 공급 및 배터리 충전용
- **교정 증명서**: 장비 성능 검증 데이터가 포함된 공식 문서
- **전용 하드 케이스**: 충격 보호용 폼이 내장된 이동식 케이스

<div align="center">
  <img src="/images/03_Resources/Image/B3/photos/KakaoTalk_20251231_101545706_03_2.png" width="400">
  <p>DEEPSOUND B3 본체 무게</p>
</div>

# PART III: Hardware Interface

## 3.1 Device Layout and Parts
- DEEPSOUND B3는 휴대형 장비의 특성을 고려하여 모든 조작 버튼과 포트를 한 손 조작이 가능한 위치에 효율적으로 배치했습니다.

### 3.1.1 Front View
- **디스플레이**: 7인치 정전식 터치스크린이 전면을 차지하며, 직관적인 소프트웨어 아이콘을 통해 모든 조작이 이루어집니다.
- **파워 버튼**: 상단 또는 측면의 물리 버튼을 통해 시스템 전원을 제어합니다.

### 3.1.2 Side Interface (Connector Panel)
- 장비 측면의 보호 커버를 열면 다음과 같은 입출력 포트를 사용할 수 있습니다.
- **Probe Port (IPEX 160p)**: Minidock 160p 타입의 고밀도 IPEX 프로브 커넥터입니다.
- **UT Port (Lemo 00 x 2)**: 일반 초음파 및 TOFD 검사용 Lemo 00 커넥터입니다.
- **Ethernet (RJ45)**: PC 통신 및 네트워크 데이터 전송용 포트입니다.
- **USB 3.0**: 데이터 백업 및 주변기기 연결용 포트입니다.
- **HDMI Port**: 외부 모니터 출력을 위한 포트입니다.
- **Encoder Port**: 스캐너 연결을 위한 인코더 입력 포트입니다.
- **DC Input**: 전용 전원 어댑터 연결 포트입니다.

### 3.1.3 Rear View
- **배터리 수납부**: 대용량 배터리 팩이 장착되는 슬롯입니다.
- **내장 스탠드(Kickstand)**: 접이식 스탠드를 사용하여 거치할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/B3/alibaba/KakaoTalk_20251219_093343153_1.png" width="400">
  <p>DEEPSOUND B3 Front View</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/B3/photos/KakaoTalk_20260213_115622058_1.png" width="400">
  <p>DEEPSOUND B3 Rear View</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/B3/photos/KakaoTalk_20251231_101545706_14_1.png" width="400">
  <p>DEEPSOUND B3 Top Interface (PA/UT Port)</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/B3/photos/KakaoTalk_20251231_101545706_13_1.png" width="400">
  <p>DEEPSOUND B3 Side Interface (I/O Port)</p>
</div>

# PART IV: Preparation for Use

## 4.1 Batteries and Power Management
- **배터리 사양**: 7.2 V / 9900 mAh 고용량 리튬 이온 배터리 팩을 사용합니다.
- **운용 시간**: 완충 시 최대 4시간 내외의 현장 검사가 가능합니다.

## 4.2 Installing and Charging the Battery
- **배터리 장착**: 장비 후면의 배터리 덮개를 열고 배터리 팩을 전극 방향에 맞춰 확실히 삽입한 후 덮개를 고정하십시오.
- **배터리 충전**: 측면 DC 전원 입력 포트에 전용 어댑터를 연결하여 충전하십시오. 

## 4.3 Turning ON/OFF the Device
- **전원 켜기(ON)**: 전원 버튼을 약 2~3초간 길게 누르십시오.
- **전원 끄기(OFF)**: 소프트웨어 메뉴 내 종료 기능을 사용하거나 전원 버튼을 짧게 눌러 종료 확인 창을 띄우십시오.

# PART V: External Connections

## 5.1 Probe Connections

### 5.1.1 Phased Array Probe (IPEX 160p)
- **연결 방법**: Minidock IPEX 커넥터를 포트 방향에 맞춰 부드럽게 삽입하십시오.

### 5.1.2 Conventional UT Probe (Lemo 00)
- Lemo 00 케이블을 UT 포트에 연결하십시오. 

## 5.2 Encoder Connector
- **기능**: 2축 인코더 정보를 수집하여 정밀한 검사 위치 정보를 데이터와 동기화합니다.

# PART VI: Device Specifications

## 6.1 General Specifications
- **Dimensions(WxHxD)**: 215 x 140 x 72 mm (With Case)
- **Weight**: 1.4 kg (With Battery)
- **Power Supply**: 12 V, 5 A
- **Display**: 7.0" Wide Monitor [ 1024 x 600 ]
- **Storage**: 16 GB

## 6.2 Connectivity & Environmental
- **USB Port**: USB 3.0 x 1
- **HDMI Port**: Type D Micro x 1
- **Probe Port**: Minidock 160p Connector x 1
- **UT Port**: Lemo 00 UT Connector x 2
- **Encoder Port**: 2-axis Encoder input
- **Operating Temperature**: 0 ~ 60 °C
- **Storage Temperature Range**: -20 ~ 80 °C

## 6.3 Technical & Acoustic Specifications

### 6.3.1 PA/UT Configuration
- **Effective Digitizing**: 100 MHz
- **Max PRF**: 30 kHz
- **Refresh Rate**: 30 Hz
- **A-scan Height**: 300 %

### 6.3.2 Phased-Array
- **PAUT Channel Configurations**: 16:64PR
- **Scan Type**: Linear, Sectorial, Conventional, TOFD
- **Focal Law**: Unlimited
- **Channel Group**: Up to 4
- **Focusing Mode**: True-depth, Sound path

### 6.3.3 Data Specifications
- **Maximum Number of A-scan Data Point**: Up to 16384
- **Rectification**: RF, Full wave
- **Filtering**: Selection of Low-pass, Band-pass, High-pass
- **Video Filtering**: Smoothing
- **TFM Raw Data Export**: Yes (P5 전용 기능 외 기본적인 영상 내보내기 지원)

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
- **장비가 켜지지 않음**: 배터리 장착 상태와 잔량을 확인하십시오.
- **프로브 인식 오류**: IPEX 커넥터의 체결 상태를 확인하십시오.

## 7.2 Error Handling and Support
- **제조사**: (주)성산연구소 (SEONGSANLAB Co., Ltd.)
- **주소**: 경기도 군포시 공단로 140번길 52, 에이스하이테크시티 13층 1318호
- **전화**: 02-2039-5725
- **이메일**: admin@dspaut.com
