---
title: T3 Product Manual
description: DEEPSOUND T3 휴대용 2채널 초음파/PAUT 장비의 공식 제품 매뉴얼입니다.
version: v1.0
releaseDate: 2026-04-30
author: (주)성산연구소
order: 1
---

# T3 Product Manual

- **Hardware Version**: v1.0.0
- **Manual Version**: v1.0
- **Release Date**: 2026-04-30
- **Last Updated**: 2026-04-30
- **Author**: SEONGSANLAB Co., Ltd.

## PART I: Safety and Maintenance

### 1.1 Safety Information
- 본 장비는 정밀 전자 부품과 고전압 펄서 회로로 구성되어 있으므로 사용 전 다음 안전 지침을 반드시 숙지하십시오.
- 규격에 맞지 않는 외부 전원 공급 장치 사용 시 시스템 회로 손상 및 화재의 위험이 있습니다.
- T3 모델은 초경량 설계로 이동성이 우수하나, 강한 충격이나 낙하 시 내부 정밀 부품이 손상될 수 있으므로 주의하십시오.
- 장비 내부에는 사용자가 직접 수리할 수 있는 부품이 없으며, 임의 분해 시 무상 수리 서비스 대상에서 제외됩니다.
- 습도가 매우 높거나 물이 튀는 환경에서 사용할 경우 단락(Short) 및 감전의 위험이 있으므로 건조한 환경을 유지하십시오.

### 1.2 Maintenance of the Device
- **작동 온도**: 0℃ ~ 60℃ 범위 내에서의 사용을 권장하며, 극한의 온도 조건은 피하십시오.
- **보관 온도**: -20℃ ~ 80℃ 환경에서 보관해야 하며, 직사광선이 닿지 않는 서늘한 곳을 권장합니다.
- 장비를 1개월 이상 사용하지 않을 경우, 배터리를 본체에서 분리하여 보관하십시오.
- 전용 운반 케이스를 사용하여 이동 중 발생할 수 있는 외부 충격으로부터 장비를 보호하십시오.

### 1.3 Cleaning Guide
- **화면 세척**: 7인치 정전식 터치스크린 세척 시 부드럽고 보풀이 없는 마른 헝겊을 사용하십시오. 오염이 심할 경우 소량의 알코올을 묻힌 전용 세정제를 사용하십시오.
- **포트 관리**: Lemo 00 등 프로브 연결 포트 내부로 액체나 이물질이 들어가지 않도록 각별히 주의하십시오.
- **먼지 제거**: 비접촉식 에어 스프레이를 사용하여 정기적으로 외부 입출력 포트 주변의 먼지를 제거하십시오.

# PART II: Product Overview

## 2.1 Introduction to DEEPSOUND T3
- DEEPSOUND T3는 고성능 Conventional UT(일반 초음파 탐상) 및 TOFD 검사 전용 장비로, 극한의 현장 기동성과 정밀한 검사 성능을 제공합니다.
- 본체 무게 1kg 미만(배터리 포함 0.9kg)의 초소형 설계로, 협소한 공간이나 고소 작업 환경에서의 정밀 검사에 최적화되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/T3/알리바바/T3_Fornt_3_1.png" width="500">
  <p>DEEPSOUND T3 제품 개요 (A-Scan 인터페이스 구동 화면)</p>
</div>

## 2.2 Hardware Characteristics
- **디스플레이**: 7인치 고해상도 정전식 터치스크린을 탑재하여 직관적인 조작과 우수한 시인성을 제공합니다.
- **채널 구성**: 2채널 UT 구성을 지원하며, 고전압 펄서를 통해 선명한 신호 수집이 가능합니다.
- **검사 모드**: Conventional UT, TOFD 모드를 지원하며 실시간 A/B/C-스캔 표시가 가능합니다.
- **데이터 활용**: 인코더 동기화를 통한 정밀 데이터 수집 및 USB/LAN을 통한 데이터 백업을 지원합니다.

# PART III: Hardware Interface

## 3.1 Device Layout and Parts
- DEEPSOUND T3는 휴대형 장비의 특성에 맞춰 모든 입출력 포트를 효율적으로 배치했습니다.

### 3.1.1 Front View
- **디스플레이**: 7인치 터치스크린을 통해 A-Scan, B-Scan 등 다양한 검사 모드와 파라미터 설정을 실시간으로 확인합니다.

<div align="center">
  <img src="/images/03_Resources/Image/T3/T3_Fornt_4.png" width="400">
  <p>DEEPSOUND T3 Front View (A-Scan & B-Scan Multi-View)</p>
</div>

### 3.1.2 Top Interface
- **UT Ports (Lemo 00 x 2)**: 일반 초음파 및 TOFD 프로브 연결용 포트입니다.
- **Encoder Port**: 스캐너 위치 정보 수집을 위한 인코더 연결 포트입니다.

<div align="center">
  <img src="/images/03_Resources/Image/T3/T3_Top_1.png" width="400">
  <p>DEEPSOUND T3 Top Interface (UT / Encoder)</p>
</div>

### 3.1.3 Side Interface
- **I/O Ports**: 장비 우측면에 USB 3.0, LAN, DC 전원 포트가 배치되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/T3/T3_Right_2.png" width="250">
  <p>DEEPSOUND T3 Side Interface (I/O Port Details)</p>
</div>

### 3.1.4 Bottom Interface (Battery Compartment)
- **배터리 수납부**: 장비 하단의 커버를 열고 전용 배터리 팩을 장착할 수 있는 공간이 배치되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/T3/T3_Bottom_2.png" width="400">
  <p>DEEPSOUND T3 Bottom Interface (Battery Compartment)</p>
</div>

# PART IV: Preparation for Use

## 4.1 Batteries and Power Management
- **배터리 사양**: 7.2 V / 6600 mAh 전용 리튬 이온 배터리 팩을 사용합니다.
- **운용 시간**: 완충 시 현장 환경에 따라 장시간 운용이 가능합니다.

## 4.2 Installing and Charging the Battery
- **배터리 장착**: 장비 하단의 배터리 커버를 열고 전용 배터리 팩 1개를 단자 방향에 맞춰 슬롯에 삽입하십시오.
- **배터리 충전**: 측면 DC 포트에 전용 어댑터(12V 5A)를 연결하여 충전하십시오.

## 4.3 Turning ON/OFF the Device
- **전원 조작**: 물리 버튼 또는 터치스크린을 통해 시스템 전원을 제어합니다.

# PART V: External Connections

## 5.1 Probe Connections
- **UT/TOFD Probe**: 전용 케이블을 사용하여 상단 Lemo 00 포트에 체결하십시오.

## 5.2 Ethernet and USB
- **데이터 통신**: LAN 포트를 통해 PC와 연결하거나 USB 포트로 데이터를 백업합니다.

# PART VI: Device Specifications

## 6.1 General Specifications
- **Dimensions(WxHxD)**: 174 x 111.5 x 61 mm
- **Weight**: 0.9 kg (With Battery)
- **Power Supply**: DC 12 V, 5 A
- **Display**: 7.0" Wide Monitor [ 1024 x 600 ]

## 6.2 Connectivity & Environmental
- **USB Port**: USB 3.0 x 1
- **LAN Port**: RJ45 Ethernet x 1
- **Probe Port**: Lemo 00 UT Connector x 2
- **Encoder Port**: 2-axis Encoder input x 1
- **Operating Temperature**: 0 ~ 60 °C

## 6.3 Acoustic Specifications
- **Pulser (Voltage)**: 25 V ~ 160 V (5 V Step)
- **Pulser (Pulse Shape)**: Bipolar Pulse
- **Pulser (Pulse Width)**: 50 ns ~ 2,000 ns
- **Receiver (Gain Range)**: 0 dB ~ 90 dB
- **Receiver (Band Width)**: 0.5 ~ 20 MHz
- **Receiver (Sample Resolution)**: 16 bit
- **A-scan Data Point**: Up to 16384 points

# PART VII: Troubleshooting

## 7.1 Basic Troubleshooting
- **전원 불량**: 배터리 장착 상태 및 어댑터 연결을 확인하십시오.
- **신호 미검출**: 프로브 케이블 체결 및 게인(Gain) 설정을 확인하십시오.

## 7.2 Support
- **제조사**: (주)성산연구소 (SEONGSANLAB Co., Ltd.)
- **연락처**: 02-2039-5725 / admin@dspaut.com
