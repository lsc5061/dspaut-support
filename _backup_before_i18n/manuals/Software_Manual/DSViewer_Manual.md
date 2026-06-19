# DSViewer Software Manual

---
- **Software Version**: v3.0.5
- **Manual Version**: v1.0
- **Release Date**: 2026-04-21
- **Last Updated**: 2026-04-21
- **Author**: SEONGSANLAB Co., Ltd.
---

---

## Getting Started Guide

본 사용자 설명서가 최종 사용자 계약서가 포함 된 소프트웨어와 함께 배포되는 경우 본 설명서 및 여기에 설명 된 소프트웨어는 사용 허가를 받아 제공되며 해당 사용권 조항에 따라서만 사용하거나 복사 할 수 있습니다. 그러한 라이선스의 허용 범위를 제외하고, 본 안내서의 어떠한 부분도 (주)성산연구소의 사전 승인 없이는 어떠한 형식이나 수단 (전자, 기계, 녹음 등)으로도 재생산, 검색 시스템에 저장 또는 전송할 수 없습니다. 본 설명서의 내용은 최종 사용자 사용권 계약이 포함 된 소프트웨어와 함께 배포되지 않더라도 저작권법에 의해 보호됩니다.

본 안내서의 내용은 정보 제공의 목적으로만 제공되며 예고 없이 변경 될 수 있으며 (주)성산연구소의 약정으로 작성되어서는 안됩니다. 귀하의 프로젝트에 포함시키고 하는 기존의 삽화 나 이미지는 저작권법에 의해 보호 될 수 있음을 기억하세요. 저작권 소유자의 허가를 받아야 합니다. 이 설명서 및 소프트웨어에 포함 된 견본 자료 또는 예제 양식의 회사 이름, 회사 로고 및 사용자 이름에 대한 언급은 실제 용도로만 사용되었으며 실제 조직이나 사람을 자칭하지는 않습니다. DEEPSOUND는 (주)성산연구소의 대한민국 등록 상표이며 소유자의 재산입니다.

---

## PART I: Analysis

### 1. Program Overview

**DSViewer**

(주)성산연구소의 DSViewer는 초음파 장비를 사용하여 대상체의 전체 스캐닝 이미지를 불러오고 측정하는 프로그램입니다.

DSViewer는 다음 용도에 적합 합니다:

* 스캐닝한 이미지를 불러 올 수 있으며, A / S / C / B / D 등 다양한 Scan 창을 확인하고 결함을 측정 할 수 있습니다.
* 수집한 Data를 영구적으로 저장 가능하고 Print 및 Report를 활용하여 보다 쉬운 문서화가 가능합니다.

### 2. Accessories

본 장에서는 DSViewer에서 사용 할 수 있는 부속품에 대해 설명합니다.

본 프로그램은 별도의 License가 없이 제공되는 프로그램입니다.
제공되는 USB를 통해 프로그램을 설치하여 사용 가능 합니다.

| Product | 설명 |
| :--- | :--- |
| **Installer Program** | 간편한 설치 프로그램 |

---

## PART II: DSViewer Software

현재의 최첨단 기술에 따르면, 소프트웨어는 오류가 전혀 없지 않습니다. 소프트웨어 제어 테스트 장비를 사용하기 전에 필요한 기능이 의도 된 조합으로 완벽하게 작동하는지 확인합니다. 사용자가 장비 및 소프트웨어 사용에 관해 문의 사항이 있으시면 E-mail 주소 측에 문의하시길 바랍니다.

본 프로그램은 DSViewer로 데이터 분석을 위한 프로그랩입니다.

**소프트웨어 관련 중요 사항**

DSViewer를 사용하기 앞서 정확한 폴더 경로 위치에 프로그램이 설치가 되어 있는지 최종적으로 확인합니다.

**운영자 사전 지식**

초음파 검사 장비의 작동에는 초음파 검사 방법에 대한 적절한 지식이 필요합니다.

* 비파괴 검사 방법
* 비파괴 검사 장비 운용 방법
* 결함 검출 기준 방법

그러한 지식이 부족하면 원하지 않는 결과를 초래하는 거짓 테스트 결과가 발생할 수 있습니다.

---

### 3. DSViewer Software Functions

본 장에서는 DSViewer 소프트웨어 사용자 인터페이스의 일반적인 기능에 대해 설명합니다.

#### 3.1 Installer Program

프로그램 설치에 도움을 드리고자 아래와 같은 내용을 작성합니다.

**환경 구성 하기**

제공된 USB에는 아래와 같은 프로그램들을 보냅니다.
설치 방법을 참고하여 진행하시길 바랍니다.

DSViewer 설치 전 필요한 프로그램 목록

1. .Net Framework 8.0
   - windowsdesktop-runtime-8.0.8-win-x64.exe
2. DSViewer
   - 최신 업데이트 된 프로그램.exe

##### 3.1.1 .Net 8.0

DSViewer를 설치 전에 있어 중요한 프로그램입니다.

* 설치 프로그램: windowsdesktop-runtime-8.0.8-win-x64.exe
* 설치 순서

제공한 windowsdesktop-runtime-8.0.8-win-x64.exe 프로그램을 실행하여 설치를 진행합니다.

##### 3.1.2 DSViewer 설치 하기

제공받은 DSVision프로그램을 실행하여 설치를 진행합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/1.png" width="500">
  <p>그림: 설치 프로그램</p>
</div>

원하는 드라이브에 설치를 진행합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/images_extracted/image6.png" width="500">
  <p>그림: Install 창</p>
</div>

원하는 드라이브에 설치 후 DEEPSOUND라는 폴더가 새롭게 생성되며, 클릭하여 들어가면 DSVision 폴더와 함께 프로그램을 확인할 수 있습니다.

**프로그램 위치: DEEPSOUND\DSVision\Bin\Release > DSViewer.exe**

#### 3.2 User Interface and functions

다양한 기능 및 편리한 Toolbar를 중심으로 구성된 DSViewer를 볼 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/2.png" width="600">
  <p>그림: 프로그램 실행 시 첫 화면</p>
</div>

---

### 4. Menu explanations

#### 4.1 Main Window

다음 부분은 소프트웨어의 기능을 포함하는 툴바를 표시합니다. 기본창에는 다음 항목들이 포함 되어있습니다.

수집된 Data들을 불러와 이미지를 활성화하고 결함에 대한 크기 및 형태를 측정 및 확인 할 수 있습니다.

다음과 같은 Toolbar들의 각각의 특징들을 가지고 있습니다.

<div align="center">
  <img src="\images\03_Resources\Image\Manual\DSViewer\Images/3.png" width="600">
  <p>그림: 프로그램 전체 화면 구성</p>
</div>

* **Total Toolbar**
- 해당 Toolbar는 프로그램 실행 시 File / Home / View / Tool / Window으로 구성 되어 있으며, 화면 Toolbar 및 기능들을 사용 할 수 있습니다. 

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/21.png" width="300">
  <p>그림: Total Menu</p>
</div>

* **Main Toolbar**
- 해당 Toolbar는 Total Menu에서 가장 많이 사용되는 기능들로 구성 되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/9.png" width="600">
  <p>그림: Main Toolbar</p>
</div>

* **Sub Toolbar**
- Information 및 Parameter를 클릭 시 나타나는 창을 의미합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/13.png" width="300">
  <p>그림: Sub Toolbar</p>
</div>

* **Mini Toolbar**
- 해당 Toolbar는 하단의 표시가 되고 있는 정보들을 한눈에 확인 할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/22.png" width="700">
  <p>그림: Mini Toolbar</p>
</div>

* **Scan Display**
- 전체적은 Scan 화면 구성은 A / S / C / B / D로 구성되어 있습니다. 
- 화면은 자유롭게 조절이 가능하며, 유저가 편한 Layout으로 변경 할 수 있습니다. 

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/23.png" width="600">
  <p>그림: Scan Display</p>
</div>

#### 4.2 Total Toolbar Menu

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/5.png" width="500">
  <p>그림: Total Toolbar Menu</p>
</div>

Total Toolbar Menu는 File / Home / View / Tool / Window으로 구성 되어 있으며, 화면 Toolbar 및 기능들의 설명은 다음과 같습니다.

##### 4.2.1 Total Menu: File

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/4.png" width="200">
  <p>그림: File 목록</p>
</div>

File 목록은 수집된 Data를 불러 올 수 있고 Data를 분석 후 수정한 설정에 대한 저장 기능도 사용 할 수 있습니다.

- **Open File:** data를 불러 올 수 있습니다.

- **Close:** 열려있는 data를 닫을 수 있습니다. 

##### 4.2.2 Total Menu: Home

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/18.png" width="200">
  <p>그림: Home 목록</p>
</div>

Home 목록은 Display에 원하는 Scan 창을 올릴 수 있는 기능입니다.
- 원하는 Scan 창을 클릭하면 자동으로 Layout에 적용 됩니다. 

##### 4.2.3 Total Menu: View

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/6.png" width="200">
  <p>그림: View 목록</p>
</div>

View 목록은 측정 시 필요한 기능들을 제공하고 있습니다.

- Reference / Measurement / Data Bar / Display Values / Gate / View Range / Flip / Zoom Reset는 Data 이미지에 바로 적용됩니다.

- **Reference / Measurement Bar:** 해당 두개의 Bar는 결함의 크기 및 A-scan 파형에 대한 크기를 측정 시 유용하게 사용할 수 있는 기준선입니다.

- **Data Bar:** Data bar는 Probe 위치 별로 획득한 이미지를 확인할 수 있는 기능을 제공하는 기준선입니다.

- **Display Values:** bar에 대한 현재 위치를 활성화하는 기능입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/images_extracted/image13.png" width="500">
  <img src="/images/03_Resources/Image/Manual/DSViewer/images_extracted/image14.png" width="500">
  <p>그림: Display Values 적용 전 &nbsp;&nbsp;&nbsp;&nbsp; 그림: Display Values 적용 후</p>
</div>

- **Gate:** Gate는 A-scan 파형에 대한 위치 값 및 높이 값을 측정에 도움을 주는 역할을 합니다.
  총 3개의 Gate를 지원하고 있으며, A/B/I로 구성되어 있습니다.

- **View Range:** 전체 수집된 이미지에서 보고자 하는 위치를 설정하는 기능입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/images_extracted/image15.png" width="500">
  <p>그림: View Range 활성화 상태</p>
</div>

  View Range를 활성화 시 두 Scan창( DScan / BScan )에 적용됩니다. Scan창에 위치를 변경 할 수 있는 Line Bar가 생성되며, 유저가 원하는 위치를 설정하여 다른 이미지를 제외할 수 있습니다.

  ✓ 정밀한 View Range Control이 필요 시 Gate / Range Control를 활성화해서 사용 할 수 있습니다.

- **Flip:** Scan창의 Flip를 적용 시 사용되는 기능이며, V / H / H-V를 제공하고 있습니다.

- **Zoom Reset:** Zoom Reset는 이미지에서 사용된 Zoom를 원상 복귀 시 사용하는 기능입니다.

##### 4.2.4 Total Toolbar: Tool

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/7.png" width="200">
  <p>그림: Tool 목록</p>
</div>

Tool은 간단한 기능들을 지원하는데 사용 되고 있는 목록입니다.

**Save to PNG files:** 클릭한 Scan 화면를 기준으로 PNG file를 캡처 할 수 있는 기능입니다.
- Scan 별로 나눠져서 저장 됩니다.
- 저장 폴더 위치: C:\DEEPSOUND\DSVision\Bin\RES\User\Image

##### 4.2.5 Total Toolbar: Window

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/8.png" width="200">
  <p>그림: Window 목록</p>
</div>

Window 목록은 측정 시 사용 되고 있는 기능들의 위치 및 형태들을 값으로 표현 되어 유저에게 보여주는 기능입니다.

* **Parameter:** 수집 Data의 설정 Setting 값을 볼 수 있는 기능입니다.
* **Color Map:** 수집 Data의 사용된 Color Map를 확인할 수 있고 Corrosion에서는 좀 더 정밀한 색상 컨트롤을 할 수 있는 기능입니다.
* **Measure Tool:** Gate/Bar/laser의 위치 별 값을 나타내는 안내 정보 창입니다.
* **Gate/Range Control:** Gate / View Range에 대한 세밀한 Control를 하기 위해 만들어진 정보창입니다.
* **Calibration** Calibration를 지원하는 창입니다.
* **About...** 현재 프로그램에 대한 Version를 확인할 수 있는 기능입니다.

#### 4.3 Main Toolbar

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/9.png" width="600">
  <p>그림: Main Toolbar 목록</p>
</div>

Main Toolbar는 Total Menu에서 간편하게 바로 사용 할 수 있는 목록들을 구성한 Toolbar 입니다.

기능에 대한 부분은 동일하게 적용되며, 활성화 된 목록들은 파란색 테두리로 확인 할 수 있습니다.

##### 4.3.1 Main Toolbar: File

File를 클릭하여 창에서 측정된 수집 Data를 불러올 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/31.png" width="150">
  <p>그림: File 목록</p>
</div>

##### 4.3.2 Main Toolbar: Multichannel View

추가적으로 MultiChannel로 설정하여 Data를 취득한 수집 data는 Channel-1 목록에 여러 Channel로 구성 되어 확인 할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/29.png" width="200">
  <p>그림: Multichannel View 목록</p>
</div>

##### 4.3.3 Main Toolbar: Soft Gain

Soft Gain으로 취득한 수집 Data들의 Amplitude 값을 재설정 할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/30.png" width="200">
  <p>그림: Soft Gain 목록</p>
</div>

##### 4.3.4 Main Toolbar: Scan View

Scan View 화면 영역은 수집된 데이터를 여러 가지 형태로 볼 수 있는 기능을 제공합니다.

Scan View는 가로 및 세로 축에 해당하는 눈금자 또는 눈금이 있는 초음파 데이터의 2D 그래픽 표현입니다. 예를 들어 A Scan과 C Scan은 두 가지 유형의 Scan입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/32.png" width="200">
  <p>그림: Scan View 목록</p>
</div>

Scan View 레이아웃 (layout)은 하나 또는 더 많은 창을 다양한 형태로 구성 할 수 있습니다. 예를 들어 A-B-C 레이아웃은 A Scan View 창과 B Scan View 창과 C Scan View 의미 합니다. 두 개 또는 더 많은 보기 창을 지닌 창 배치에서 커서와 줌 설정은 특별한 하나의 Scan View창에 적용됩니다.

Scan View는 신호 오버레이를 포함하는 초음파 신호의 다양한 방식으로 표현합니다. Scan View는 각각 두 개의 축이 있습니다. 또한 각 Scan View는 하나의 Channel Group과 연동되어 자신의 Channel Group에 해당하는 데이터 만을 표시합니다. 그래서 레이아웃 안에, 여러 개의 Channel Group이 존재 하는 경우 원하는 Scan View를 선택하여 Scan View를 활성화 시키면, 왼쪽 상단의 현재 Channel Group 컨트롤이 해당 Scan View의 Channel Group으로 선택이 변경됩니다.

| 목록 | 관측 점 (Point of view) | 축 종류 (Axis content) |
| :--- | :--- | :--- |
| A Scan | 재료 안을 들여다 봄 | US 축에 대한 진폭 |
| B Scan | Side | Scan 축에 대한 US 축 |
| C Scan | Top | Index 축에 대한 Scan 축 |
| D Scan | End | Index 축에 대한 US 축 |
| S Scan | Side | Scan 축에 대한 US 축 |

**표: Scan View 화면**

* **A-scan View**

  모든 다른 보기창의 기반이 되는 보기 창입니다. 초음파 빔을 발생시켜 수신된 초음파 진폭 또는 파형을 나타냅니다. 신호에서 피크는 검사 대상체 내의 반사체 또는 불연속의 반사 신호에 해당됩니다. 일반적으로 초음파 축의 시작과 끝에 있는 피크는 일반적으로 검사 대상체 표면과 저면의 반사 신호에 해당됩니다.

* **B-scan View**

  한 축은 Scan축 길이이고 다른 축은 초음파 경로를 사용하여 초음파 데이터를 나타내는 검사 대상체의 2-D 측면을 나타내는 Scan View 입니다.

* **C-scan View**

  한 축은 Scan축 길이, 다른 축은 Index축 길이를 사용하여 Gate Bar 내의 초음파 데이터를 나타내는 검사 대상체의 2-D로서 상면을 나타내는 Scan View입니다. 적용 가능한 변수의 하나 (예를 들어 최대 진폭)는 각 점(pixel)에 대해 Index-Scan 평면 위에 투영됩니다. C Scan은 위에서 보기에 Top View로도 불립니다.

* **D-scan View**

  Index를 표시하는 부분의 2D면 표시 및 US 데이터는 한 축의 스캔 길이 및 다른 축의 US 경로입니다.

* **S-scan View**

  검사 대상체의 단면을 만들기 위해 각도 영역 또는 조향 범위에 있는 집속 법칙에 의해 생성되는 모든 A Scan을 나타내는 초음파 데이터의 2D를 보여주는 Scan View 입니다. 하나의 A Scan은 선에 의해서 표현되고, 그 선 위에 진폭은 색깔로 전환되고, 각 데이터 위치가 초음파 축과 관련하여 정확하게 일치 되도록 Wedge Delay를 통해 실제 위치가 보정됩니다.

* **Rulers**

  각 ruler/scale에는 다양한 색상의 축을 식별하는데 도움이 되는 전용 색상이 있습니다. 다음 표는 사용 가능한 눈금자/눈금 및 관련 색상 및 기능 목록을 제공합니다.

  기본 색상은 각 축의 속성입니다. 축은 기본 색상의 다양한 색조로 나타납니다. 가장 밝은 색조는 원시 데이터 표현에 해당합니다. 점진적으로 어두운 색조는 축에 비해 데이터 보정 복잡성이 증가하는 것과 관련이 있습니다. 참고로 나타나는 축에는 어두운 색조도 사용됩니다.

| 축 (Axis) | 기본 색 | 노트 |
| :--- | :--- | :--- |
| Scan | Blue | N/A |
| Index | Green | N/A |
| Amplitude | Yellow | N/A |
| Ultrasound | Pink | Sound Path |
|  | Purple | True Depth |

**표: Rulers 설명**

**참고:** 본 설명서의 색상은 약간 다를 수도 있습니다.

##### 4.3.5 Main Toolbar: Reference / Measurement Bar

Reference / Measurement는 클릭 시 Scan 창에 활성화 됩니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/19.png" width="150">
  <p>그림: Reference / Measurement Toolbar</p>
</div>

각 Bar의 역할은 결함의 크기를 측정하기 위한 목적입니다.

활성화 된 Bar를 좌,우 / 상,하로 조정하면서 결함의 크기를 측정합니다. 

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/33.png" width="400">
  <p>그림: Reference / Measurement 설정 화면</p>
</div>

가로 세로에 대한 차이를 확인할 수 있는 부분은 Minitool 영역에서 확인 가능합니다. 

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/34.png" width="300">
  <p>그림: Minitool 값 표시 화면</p>
</div>

##### 4.3.6 Main Toolbar: Data Bar

Data Bar는 클릭 시 Scan 창에 활성화가 됩니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/20.png" width="100">
  <p>그림: Data Toolbar</p>
</div>

Data Bar는 수집된 PAUT 데이터에서 특정 스캔 위치를 지정하는 기준선입니다.
스캔이 완료된 데이터는 탐촉자가 이동한 모든 위치의 이미지 정보를 담고 있습니다. Data Bar를 좌우로 이동하면, 해당 위치에서 수집된 데이터가 A-scan, B-scan, C-scan, S-scan 모든 뷰에 동시에 업데이트됩니다.
쉽게 말해, Data Bar는 "이 위치의 데이터를 보겠다" 고 지정하는 기준점입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/26.png" width="500">
  <p>그림: Data Bar 이동 시 변화 화면</p>
</div>
<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/27.png" width="500">
  <p>그림: Data Bar 이동 시 변화 화면2</p>
</div>

##### 4.3.7 Main Toolbar: Gate

Gate는 총 3개로 구성되어 있습니다.
A / B / I Gate 입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/28.png" width="150">
  <p>그림: Gate Toolbar</p>
</div>

Gate는 클릭하여 활성화되고 활성화 시 A-scan에 표시가 됩니다.
또한, 활성화 된 Gate는 S-scan에도 같이 표시가 되여 어디를 측정하고 있는지 화면에서 확인할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/35.png" width="500">
  <p>그림: Gate 활성화 후 A-scan 화면</p>
</div>

S-scan에 표시가 되는 Gate는 이전에 Inspection에서 설정한 Gate Type에 따라 표시가 됩니다.
- Gate type: True Depth / Sound Path

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/36.png" width="500">
  <p>그림: S-scan Gate 표시 화면</p>
</div>

Gate를 이용하여 C-scan의 Index 영역을 설정할 수 있습니다. 
또한, Gate에 걸린 신호의 높이, 위치를 확인 할 수도 있습니다.

##### 4.3.8 Main Toolbar: Zoom mode & Zoom reset

Zoom mode는 수집한 Data에서 결함 및 특정 위치를 확대할 때 사용하는 기능입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/38.png" width="100">
  <p>그림: Zoom mode Toolbar</p>
</div>

Zoom mode 클릭 시 활성화되고 화면에 마우스를 드레그하면 영역이 표시가 되어 해당 위치를 확대합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/37.png" width="400">
  <p>그림: Zoom mode 활성화 화면</p>
</div>

Zoom mode는 사용하여 결함의 위치를 상세하게 볼 수 있어 측정 시 많이 사용이 됩니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/24.png" width="400">
  <p>그림: Zoom mode가 적용 되지 않은 화면</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/25.png" width="400">
  <p>그림: Zoom mode가 적용 된 화면</p>
</div>

Zoom reset은 확대된 화면을 원래대로 되돌립니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/39.png" width="100">
  <p>그림: Zoom reset Toolbar</p>
</div>

##### 4.3.9 Main Toolbar: Measure tool

Measure tool은 클릭 시 활성화 되고 Measurement 창이 발생합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/40.png" width="100">
  <p>그림: Measure tool Toolbar</p>
</div>

Measurement 창에는 Gate에 걸린 신호의 높이, 위치를 확인 할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/12.png" width="300">
  <p>그림: Measurement 창</p>
</div>

Gate는 A / B / I 로 구성 되어 있고 해당 부분은 아래와 같이 각 수치에 대한 설명입니다.

| 버튼 | 단위 | 설명 |
| :--- | :--- | :--- |
| A%, B%, I% | % | A,B,I의 진폭 (%) 화면 높이 |
| SA, SB, SI | mm | A,B,I Gate의 에코의 soundpath |
| DA, DB, DI | mm | A,B,I Gate의 반사체 깊이 |
| PA, PB, PI | mm | A,B,I Gate에서 0mm 기준에서 반사체까지의 거리 |

세모 모양은 A / B Gate의 차이 값을 나타냅니다.

#### 4.4 Sub Toolbar

Sub Toolbar는 화면에서 동작하는 부분에 대한 값을 확인할 수 있게 도와주는 목록입니다.

Sub Toolbar는 Parameters / Color map / Measure Tool / Gate Range Control / Calibration으로 구성되어 있습니다. 

해당 목록은 한개씩 클릭하여 활성화 할 수 있습니다. 

##### 4.4.1 Parameters

Parameters는 Data를 수집할 때 사용된 설정 값을 보여주는 목록입니다. 

해당 목록을 클릭 시 바로 활성화되어 값을 확인할 수 있고 각 셋팅이 어떻게 된지 상세하게 확인할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/41.png" width="300">
  <p>그림: Parameters 창 화면</p>
</div>

Parameters 창에서 설정할 수 있는 목록은 Specimen 이고 상세한 설정이 필요 시 조작할 수 있다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/42.png" width="200">
  <p>그림: Parameters Specimen 화면</p>
</div>

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/48.png" width="500">
  <p>그림: Specimen 적용 화면</p>
</div>


##### 4.4.2 Color map

Color map은 부식을 측정하기 위해서 사용되는 색상 영역 설정 창입니다.

해당 목록을 클릭하여 활성화 할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/43.png" width="300">
  <p>그림: Parameters Specimen 화면</p>
</div>

Color Map은 두가지로 구분 되어 있습니다.

첫번째는 일반적인 사용 되고 있는 Color Map이고 A^ 기준으로 되어 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/44.png" width="500">
  <p>그림: Parameters Specimen 화면</p>
</div>

두번째는 Corrosion을 진행 시 사용 되고 있는 Color Map입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/45.png" width="500">
  <p>그림: Parameters Specimen 화면</p>
</div>

Corrosion Color Map은 A/, B/, A/-B/, Position으로 변경 시 자동으로 적용 됩니다.

또한 더욱 색상의 차이를 구분하기 위해 Min / Max를 이용하여 영역의 차이를 재설정 할 수 있는 기능이 있으며, Linear와 Reverse 기능을 통해 색상을 Smooth 및 역으로 전환도 가능합니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/10.png" width="200">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/11.png" width="200">
  <p>그림: Color Map Toolbar</p>
</div>

Color map를 이용하여 색상 차이를 더 미세하게 조정하여 미세한 두께 차이도 눈으로 쉽게 구분할 수 있게 표시할 수 있습니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/46.png" width="500">
  <p>그림: Parameters Specimen 화면</p>
</div>

##### 4.4.3 Gate/Range Control

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/13.png" width="200">
  <p>그림: Gate/Range Control 목록</p>
</div>

Gate / Range Control은 Gate에 대한 위치 설정 및 View Range에 대한 설정 값을 다시 재조정을 할 수 있는 목록입니다.

* **Gate:** Kind를 통해 원하는 Gate를 클릭하여 Start / Range / Threshold를 설정하여 위치를 변경할 수 있습니다.

* **View Range:** 다른 위치값들을 제외하고 원하는 영역만 보고 싶을 경우 많이 사용하는 기능이며, Scan창에서 대략적인 위치을 잡았으면 View Range Control 목록을 통해 세밀한 위치 값을 다시 조정하여 사용할 수 있습니다.

##### 4.4.4 Calibration

Calibraton는 교정에 대한 부분을 확인을 하기 위한 기능입니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/47.png" width="200">
  <p>그림: Gate/Range Control 목록</p>
</div>

Calibration은 Wedge delay / Velocity 및 TOFD 까지 포함되어 있습니다.
해당 값을 조정하면 이미지는 변화지 않고 각 Ruler에 반영이 됩니다.

<div align="center">
  <img src="/images/03_Resources/Image/Manual/DSViewer/Images/15.png" width="200">
  <p>그림: Gate/Range Control 목록</p>
</div>

### 5. Shortcut Key Operation

DSViewer에서는 몇가지 단축키로 쉽게 특정 대상을 활성화 할 수 있습니다.

| 목록 | 단축키 | 설명 |
| :--- | :--- | :--- |
| **Zoom** | 마우스 휠 | 창 기준 가운데 Zoom 확대 및 축소 |
|  | Ctrl + 마우스 왼쪽 드래그 | Zoom 상태로 화면 이동 |

---

**중요 공지 사항:**

(주)성산연구소는 언제든지 제품 및 서비스의 수정, 개선 및 기타 변경 할 수 있으며 제품 또는 서비스를 사전 통보 없이 중단 할 수 있습니다. 사용자는 주문을 하기 전에 최신 관련 정보를 입수 해야 하며 그러한 정보가 최신이고 완전한지 확인 해야 합니다. 모든 제품 (하드웨어 및 소프트웨어)은 주문 승인시 (주)성산연구소의 판매 조건에 따라 판매됩니다.

본 설명서의 내용에 대한 적절한 해결책을 찾지 못했다면 (주)성산연구소에서 전자 메일 또는 우편으로 아래 주소로 보내주세요. 추가적으로 개선해야하는 부분도 함께 보내주세요.

**우편 주소:** 경기도 군포시 공단로 140번길 52, 에이스하이테크시티 13층 1318호

Email: admin@dspaut.com

---

**Copyright © 2026, (주)성산연구소**

본 설명서는 국내/국제 저작권법에 의해 보호됩니다. (주)성산연구소의 사전 서면 승인 없이 본 매뉴얼의 어떠한 부분도 전자, 자기, 광학, 화학, 수동 또는 기타 형식으로 복제, 배포, 번역 또는 전송할 수 없습니다.

**All rights reserved**

www.dspaut.com
