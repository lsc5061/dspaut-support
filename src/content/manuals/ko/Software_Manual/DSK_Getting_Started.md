---
title: Getting Started
description: Deepsound Software Development Kit (DSK) 시작 가이드 및 기술 매뉴얼입니다.
version: v1.0
releaseDate: 2026-05-14
author: (주)성산연구소
---

# Getting Started Manual
## Deepsound Software Development Kit

---

> **Copyright ⓒ 2026 / (주)성산연구소**
> 
> 이 설명서는 국내 / 국제 저작권법에 의해 보호됩니다. (주)성산연구소의 사전 서면 승인 없이 본 매뉴얼의 어떠한 부분도 전자, 자기, 광학, 화학, 수동 또는 기타 형식으로 복제, 배포, 번역 또는 전송할 수 없습니다.
> 
> **All rights reserved**
> 
> 이 문서가 최종 사용자 계약서가 포함 된 소프트웨어와 함께 배포되는 경우 본 설명서 및 여기에 설명 된 소프트웨어는 사용 허가를 받아 제공되며 해당 사용권 조항에 따라서만 사용하거나 복사할 수 있습니다. 그러한 라이선스의 허용 범위를 제외하고, 본 안내서의 어떠한 부분도 (주)성산연구소의 사전 서면 승인 없이는 어떠한 형식이나 수단 (전자, 기계, 녹음 등)으로도 재생산, 검색 시스템에 저장 또는 전송할 수 없습니다.

> **주의 및 책임 한계**
> 
> 이 안내서의 내용은 정보 제공의 목적으로만 제공되며 예고 없이 변경 될 수 있습니다. (주)성산연구소는 이 안내서에 포함 된 정보의 오류나 부정확성에 대해 어떠한 책임도 지지 않습니다. 프로젝트에 포함된 삽화나 이미지는 저작권법에 의해 보호될 수 있으므로 주의하시기 바랍니다.
> 
> DEEPSOUND는 (주)성산연구소의 대한민국 등록 상표이며 소유자의 재산입니다.

**연락처 정보**
- **본사**: (주)성산연구소 (P: 02-2039-5725 | F: 02-2039-5726)
- **웹사이트**: [www.dspaut.com](http://www.dspaut.com) | **이메일**: admin@dspaut.com
- **품질**: 모든 작업은 (주)성산연구소 품질 표준에 따라 수행됩니다.

---

## DSK 수정 내용

| 버전 | 변경 사항 | 날짜 |
| :--- | :--- | :--- |
| 1.0 | 최초 Release | 2026 |

---

## 1. INTRODUCTION

이 문서는 DSK를 사용하여 초음파 비파괴 소프트웨어를 개발하는 방법을 안내합니다.  
**개발 환경**: Windows 10, Visual Studio 2017, .NET Framework 4.5.2

### 1.1 준비하기
DSK를 이용한 프로그램은 여러 종류의 DLL을 필요로 하므로, 항상 지정된 실행 위치(예: `c:/deepsound/dsktutorial/bin/release_x86`)에서 수행되어야 합니다.

또한, 프로그램이 실행되는 위치에서 두 단계 위(`../../`) 디렉토리에 `CommonResource`가 존재해야 하며, 그 내부에 Python이 설치되어 있어야 합니다. 가급적 설치된 `dsktutorial` 디렉토리 내에서 프로젝트를 생성하는 것을 권장합니다.

### 1.2 시작하기
Visual Studio를 실행한 후, `DskTutorial.sln`을 열거나 아래 설정을 참고하여 새로운 프로젝트를 생성합니다.

**새 프로젝트 생성 설정:**  
File → New → Project 메뉴에서 아래와 같이 설정합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image2.png" width="550">
  <p>그림: 새 프로젝트 생성 설정 화면</p>
</div>


프로젝트 생성 후 `00-Start` 프로젝트의 속성(Property) 화면을 엽니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image3.png" width="270">
  <p>그림: 프로젝트 속성 창 열기</p>
</div>


**Build 설정**: Output 경로를 실행 파일이 생성될 위치로 지정합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image4.png" width="500">
  <p>그림: 빌드 출력 경로(Output path) 설정</p>
</div>


#### Reference 추가하기
DSK 프로젝트에는 반드시 `SVDSK.dll`이 참조(Reference)로 추가되어야 합니다. 프로젝트의 References 항목에서 "Add Reference..."를 선택합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image5.png" width="178">
  <p>그림: Reference 추가 메뉴</p>
</div>


Browse 탭을 선택하고, 위에서 설정한 출력 디렉토리(`../Bin/Release_x86`) 내의 `svdsk.dll` 파일을 선택합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image6.png" width="600">
  <p>그림: svdsk.dll 파일 선택</p>
</div>


참조가 정상적으로 추가되면 아래와 같이 목록에서 확인할 수 있습니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image7.png" width="280">
  <p>그림: 추가된 Reference 확인</p>
</div>


#### 프로그램 작성
`Program.cs`를 열고 DSK 사용을 위한 설정을 추가합니다. DSK는 `DEEPSOUND` 네임스페이스를 사용하므로 `using DEEPSOUND;`를 반드시 포함해야 하며, 사용 전 `InitDsk`를 호출해야 합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image8.png" width="450">
  <p>그림: DSK 버전 출력 샘플 코드</p>
</div>


빌드 후 생성된 `00_Start.exe`를 실행하여 다음과 같은 결과가 나오면 성공입니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image9.png" width="450">
  <p>그림: 프로그램 실행 결과 화면</p>
</div>


---

## 2. TUTORIALS

DSK에 포함된 주요 샘플 프로젝트의 구성과 기능은 다음과 같습니다.

| 프로젝트명 | 설명 |
| :--- | :--- |
| **01 InitDevice** | 하드웨어 초기화 및 DMA 방식의 데이터 전송 구현 예제 |
| **02 SScan** | S-Scan 이미징 및 스캔 컨버전 구현 예제 |
| **03 AScan** | A-Scan 이미징 및 비트맵 출력 구현 예제 |
| **04 Inspection** | 엔코더(Encoder) 설정 및 검사 모드 제어 예제 |
| **10 SimplePAUT** | 종합적인 파라미터 제어를 통한 PAUT 이미지 구현 예제 |

### 2.1 Initdevice
`InitDevice`는 하드웨어 초기화 후 DMA를 통해 데이터를 수신하는 기초 예제입니다. 모든 프로젝트는 `SVDSK.dll`과 공통 라이브러리인 `DskCommon`을 참조해야 합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image10.png" width="600">
  <p>그림: InitDevice 프로젝트 구성</p>
</div>


실행 시 하드웨어로부터 데이터를 수신하는 화면이 표시됩니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image11.png" width="340">
  <p>그림: InitDevice 실행 화면</p>
</div>


핵심 코드는 `InitDsk`와 `InitDevice` 호출입니다. 호출 후 DSK는 하드웨어를 초기화하고 `SetCallbackFrame`에 설정된 콜백 함수를 통해 데이터를 전달합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image12.png" width="450">
  <p>그림: 초기화 및 장치 가동 코드</p>
</div>
<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image13.png" width="420">
  <p>그림: 초기화 및 장치 가동 코드</p>
</div>


콜백 함수는 USB DMA를 통해 전달된 초음파 데이터를 최종적으로 수신하는 지점입니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image14.png" width="350">
  <p>그림: 데이터 수신 콜백 함수 예제</p>
</div>


또한 `Dsk.Freeze`, `Dsk.UnFreeze`를 사용하여 데이터 획득을 제어할 수 있습니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image15.png" width="340">
  <p>그림: 데이터 프리즈(Freeze) 기능 테스트</p>
</div>


### 2.2 S Scan
`SScan` 프로젝트는 수신된 Raw Data를 스캔 컨버전(Scan Conversion)하여 2D 이미지로 변환하는 예제입니다.

**스캔 컨버전 순서:**
1. `GetSScanWidth`, `GetSScanHeight`로 이미지 크기 확인
2. `GetVectorCount`, `GetSampleCountPerVector`로 데이터 정보 확인
3. `CalcSScanImage`를 호출하여 2D 이미지 데이터 생성
4. 컬러 맵핑 후 화면 출력



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image16.png" width="250">
  <p>그림: SScan 프로젝트 참조 설정</p>
</div>


콜백 함수에서 데이터를 버퍼에 복사한 후, 타이머 인터럽트를 통해 이미지를 갱신합니다. 실시간성을 보장하려면 큐(Queue) 방식 사용을 권장합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image17.png" width="500">
  <p>그림: SScan 콜백 및 이미지 변환 코드</p>
</div>
<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image18.png" width="600">
  <p>그림: SScan 콜백 및 이미지 변환 코드</p>
</div>


### 2.3 A Scan
`AScan` 프로젝트는 특정 벡터 위치의 데이터를 추출하여 A-Scan 이미지를 생성합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image19.png" width="600">
  <p>그림: A-Scan 데이터 추출 예제</p>
</div>


`DrawAScan` 함수는 비트맵 이미지를 사용하여 A-Scan 파형을 화면에 렌더링합니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image20.png" width="600">
  <p>그림: A-Scan 비트맵 출력 화면</p>
</div>


### 2.4 Inspection
엔코더(Encoder)를 사용하여 정해진 위치에서 이미지를 얻는 자동 검사 예제입니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image21.png" width="430">
  <p>그림: 엔코더 설정 및 검사 제어 코드</p>
</div>


`SetScanEncoder`를 통해 시작/종료 위치, 스텝(Step), 펄스 수를 설정한 후, `UploadInspectionModeStart`를 호출하여 검사를 시작합니다.

### 2.5 Simple PAUT
종합적인 PAUT 장비 구현 예제입니다. DSK 함수는 크게 **Get**(값 획득), **Set**(값 설정), **Upload**(설정 반영)로 구분됩니다.

**파라미터 전달 프로세스:**
1. **Gui2Param**: 사용자 입력을 내부 변수로 저장
2. **Param2Dsk**: DSK Set 함수로 값 설정
3. **UploadAllParameters**: 설정값을 실제 하드웨어/이미지에 반영
4. **Dsk2Param & Param2Gui**: 반영 후 변경된 값을 다시 읽어 화면에 업데이트



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image22.png" width="430">
  <p>그림: 파라미터 업데이트 흐름도</p>
</div>


#### Load/Save Setup
설정값의 저장과 로드는 JSON 직렬화를 지원하는 `JsonFile2Object` 함수를 활용하여 간편하게 구현할 수 있습니다.



<div align="center">
  <img src="/images/03_Resources/Image/DSK_Media/image23.png" width="420">
  <p>그림: 설정 로드 및 저장 구현 예제</p>
</div>


---
**Copyright © 2026, (주)성산연구소**  
본 설명서의 저작권은 (주)성산연구소에 있으며, 무단 복제 및 전송을 금합니다.  
[www.dspaut.com](http://www.dspaut.com)
