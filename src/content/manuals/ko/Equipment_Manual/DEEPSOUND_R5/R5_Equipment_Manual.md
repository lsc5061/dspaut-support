# DEEPSOUND R5 Product Manual

- **Hardware Version**: v1.0.0
- **Manual Version**: v1.0
- **Release Date**: 2026-04-30
- **Last Updated**: 2026-04-30
- **Author**: SEONGSANLAB Co., Ltd.

## PART I: Safety and Maintenance

### 1.1 Safety Information
- DEEPSOUND R5는 고성능 원격 제어형 PAUT 장비로, 자동화 검사 및 실험실 환경에 최적화되어 있습니다.
- 본 장비는 외부 PC와 네트워크를 통해 제어되므로, 전원 공급 및 데이터 통신 케이블의 연결 상태를 항상 확인하십시오.
- 장비의 슬림한 설계 특성상 내부 열 방출을 위해 주변에 충분한 공간을 확보하고, 통풍구를 가리지 마십시오.
- 전용 전원 어댑터 이외의 규격 외 전원 사용 시 내부 정밀 회로가 손상될 수 있습니다.
- 장비 가동 중에는 PAUT/UT 커넥터를 무리하게 분리하지 마십시오.

### 1.2 Maintenance of the Device
- **작동 환경**: 0℃ ~ 60℃ 범위 내에서의 사용을 권장하며, 고온 다습한 환경은 피하십시오.
- **보관 환경**: -20℃ ~ 80℃ 환경에서 보관해야 하며, 진동이 적은 평평한 곳에 설치하십시오.
- 네트워크 보안을 위해 승인되지 않은 네트워크 환경에서의 연결은 지양하십시오.
- 정기적으로 입출력 포트의 핀 상태를 점검하여 휘어짐이나 이물질 삽입 여부를 확인하십시오.

### 1.3 Cleaning Guide
- **케이스 세척**: 외부 알루미늄/플라스틱 케이스는 부드러운 마른 헝겊으로 닦아주십시오.
- **포트 관리**: PAUT 고밀도 커넥터와 BNC 포트에 먼지가 쌓이지 않도록 사용하지 않을 때는 전용 캡을 씌워 보관하십시오.

# PART II: Product Overview

## 2.1 Introduction to DEEPSOUND R5
- DEEPSOUND R5는 강력한 32:128PR Phased Array 성능을 제공하는 원격 제어형(Remote/Rack) 유닛입니다.
- 디스플레이가 없는 컴팩트한 디자인으로, PC 소프트웨어를 통해 실시간 데이터 수집 및 분석을 수행하며 자동화 스캐너 시스템과의 통합이 용이합니다.

<div align="center">
  <img src="/images/03_Resources/Image/R5/upload_pending/1.png" width="600">
  <p>DEEPSOUND R5 제품 개요 (Remote Unit with Case)</p>
</div>

## 2.2 Hardware Characteristics
- **원격 제어**: Gigabit LAN 통신을 통해 PC와 실시간으로 연결되어 대용량 데이터를 지연 없이 전송합니다.
- **다채널 구성**: 32:128PR Phased Array 채널과 4개의 독립적인 Conventional UT 채널을 동시에 지원합니다.
- **슬림 디자인**: 42mm 두께의 초슬림 설계를 통해 협소한 공간이나 랙 장착 시 공간 효율성을 극대화합니다.
- **확장성**: 외부 인코더 및 입출력 인터페이스를 통해 다양한 자동화 검사 시나리오에 대응 가능합니다.

# PART III: Hardware Interface

## 3.1 Device Layout and Parts
- R5는 직관적인 상태 표시와 강력한 연결성을 중심으로 인터페이스가 설계되었습니다.

### 3.1.1 Front Panel
- **Power Button**: 장비의 전원을 제어하는 물리 버튼입니다.
- **Status LEDs (1-3)**: 장비의 전원, 통신, 데이터 수집 상태를 표시합니다.
- **UT Ports (1-4)**: 4개의 Conventional UT 프로브를 연결할 수 있는 포트입니다.
- **PAUT Port**: 32:128PR Phased Array 프로브 연결을 위한 고밀도 커넥터입니다.

<div align="center">
  <img src="/images/03_Resources/Image/R5/upload_pending/3.png" width="600">
  <p>DEEPSOUND R5 Front Interface Details</p>
</div>

### 3.1.2 Connectivity (Rear/Side)
- **LAN Port**: PC와 장비를 연결하는 Gigabit Ethernet 포트입니다.
- **USB Port**: 데이터 전송 및 보조 장치 연결을 위한 USB 3.0 포트입니다.
- **HDMI Port**: 외부 모니터 또는 프로젝터 연결을 위한 영상 출력 포트입니다.
- **Power Inlet**: 전용 DC 전원 어댑터 연결 포트입니다.

<div align="center">
  <img src="/images/03_Resources/Image/R5/upload_pending/4.png" width="600">
  <p>DEEPSOUND R5 Status & Connection Indicators</p>
</div>

# PART IV: Preparation for Use

## 4.1 PC Connection Setup
- **네트워크 설정**: R5와 제어용 PC를 LAN 케이블로 연결한 후, 매뉴얼에 명시된 IP 주소 대역으로 PC의 네트워크를 설정하십시오.
- **소프트웨어 실행**: 전용 분석 소프트웨어를 PC에 설치하고 실행하여 장비 인식 상태를 확인합니다.

## 4.2 Power Management
- **전원 공급**: 전용 DC 어댑터를 연결하고 전면 전원 버튼을 누릅니다.
- **부팅 확인**: 전면 상태 LED가 정상적으로 점등되는지 확인하여 시스템 준비 상태를 점검합니다.

# PART V: External Connections

## 5.1 Probe Connections
- **PAUT Probe**: 전용 고밀도 커넥터를 PAUT 포트에 수평으로 맞추어 체결한 후 잠금 장치를 고정하십시오.
- **UT Probe**: 1~4번 중 필요한 채널에 UT 프로브를 연결하십시오.

## 5.2 Synchronization
- **인코더 연결**: 자동화 스캐너 사용 시 인코더 케이블을 지정된 포트에 연결하여 위치 데이터를 동기화합니다.

# PART VI: Device Specifications

## 6.1 General Specifications
- **Dimensions(WxHxD)**: 349 x 310 x 42 mm (With Case)
- **Weight**: 1.2 kg
- **Power Supply**: DC 12 V (External Adapter)
- **PC Communication**: Gigabit Ethernet (LAN)
- **Video Output**: HDMI x 1

## 6.2 Phased-Array Specifications
- **PAUT Channel**: 32:128PR
- **Scan Type**: Linear, Sectorial, Conventional, TOFD
- **Focal Law**: Unlimited
- **Focusing Mode**: True-depth, Sound path
- **Channel Group**: Up to 8 Groups

## 6.3 Acoustic & Data Specifications
- **Pulser (Voltage)**: 25 V ~ 160 V (5 V Step)
- **Pulser (Pulse Shape)**: Bipolar Pulse
- **Pulser (Pulse Width)**: 50 ns ~ 2,000 ns
- **Receiver (Gain Range)**: 0 dB ~ 90 dB
- **Receiver (Band Width)**: 0.5 ~ 20 MHz
- **Receiver (Sample Resolution)**: 16 bit
- **A-scan Data Point**: Up to 16384 points

# PART VII: Troubleshooting

## 7.1 Basic Troubleshooting
- **통신 오류**: LAN 케이블의 체결 상태 및 PC의 IP 설정을 확인하십시오.
- **전원 불량**: 어댑터 연결 상태와 전면 LED의 점등 여부를 확인하십시오.
- **데이터 누락**: 네트워크 대역폭 및 소프트웨어 설정을 점검하십시오.

## 7.2 Support
- **제조사**: (주)성산연구소 (SEONGSANLAB Co., Ltd.)
- **연락처**: 02-2039-5725 / admin@dspaut.com
