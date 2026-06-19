---
title: API Reference
description: Deepsound Software Development Kit (DSK) API 레퍼런스 매뉴얼입니다.
version: v1.4
releaseDate: 2026-05-18
author: (주)성산연구소
---

# API 레퍼런스 매뉴얼























Copyrightⓒ 2020 / SEONGSAN INC

This manual is protected under national and international copyright laws.

No part of this manual may be reproduced, distributed, translated, or transmitted in any form or by any means electronic or mechanical, including but not limited to photocopying, recording, or storing in any information storage and retrieval system without prior written permission of SEONGSAN LAB INC.


All rights reserved

If this document is distributed with software containing the end-user agreement, this manual and the software described herein are licensed and may only be used or copied in accordance with the terms of the license. Unless permitted by such license, no part of this guide may be reproduced, stored or transmitted in any form or means (e.g., electronics, machinery, recording, etc.) without prior written approval from SEONGSAN LAB INC. The contents of this manual are protected by copyright law even if it is not distributed with software containing an end-user license agreement.

The contents of this guide are provided for informational purposes only, subject to change without prior notice, and shall not be used as any part of the agreement or contract of SEONGSAN LAB INC, which shall not be liable for any errors or inaccuracies in the information contained in this guide. Existing illustrations or images that you wish to include in your project may be protected by copyright law. You must obtain permission from the copyright owner.

References to company names, company logos, and user names in sample materials or sample forms included in this manual and/or software are solely for its purpose and do not refer to any actual organization or person. DEEPSOUND is a registered trademark of Seongsan Research Institute in Korea and is the property of its owner.





| Contact Information:<br>SEONGSAN INC<br><br>P : 02-2039-5725<br>F: 02-2039-5726<br>www.seongsanlab.com  <br>admin@seongsanlab.com | Quality Control:<br>All processes are to follow the quality standards of SEONGSAN LAB INC |
| --- | --- |




|  |
| --- |









## 주의 및 책임 한계

SEONGSAN LAB INC, 2020. Ver 1.0. *All information in this document is subject to change without prior notice.


## DSK 변경 이력



| Version | Change Log |
| --- | --- |
| 1.0 | First release |
| 1.3 | Added Multi Channel function |
| 1.4 | Added Multi Board function and enhanced Focal Law Angle Resolution |
|  |  |



## 목차

## 소개 (INTRODUCTION)

본 문서는 DSK의 API에 대해 설명합니다. 모든 DSK API는 DSK.XXX 형식으로 구성되며, 여기서 XXX는 함수를 나타냅니다. 이러한 함수는 크게 Init, Get, Set, Upload 등의 카테고리로 나뉩니다.

Get 함수를 사용하여 DSK 파라미터를 획득하고, Set 함수를 사용하여 파라미터를 설정합니다. Set 함수를 사용하여 설정한 파라미터를 실제로 장비에 반영하려면 UploadAllParameters 함수를 반드시 호출해야 합니다.

모든 파라미터를 반영하는 UploadAllParameters 함수 호출은 하드웨어 연산으로 인해 시간이 다소 소요될 수 있습니다. 처리 속도를 높이려면 개별 파라미터 업데이트를 위한 UploadXXX 함수를 사용하십시오.


예를 들어, 게인(Gain) 값은 다음 두 가지 방법 중 하나로 설정할 수 있습니다. 게인 값만 변경된 경우 두 방법은 동일한 작업을 수행하지만 두 번째 방법이 훨씬 빠릅니다.



| 1 | SetGain(value)<br>UploadAllParameters() |
| --- | --- |
| 2 | UploadGain(value) |


자주 사용되는 일부 파라미터에 대해서만 전용 Upload 함수가 지원됩니다.


별도의 명시가 없는 한 DSK는 길이 단위로 mm, 각도 단위로도(degrees), 주파수 단위로 Hz, 시간 단위로 초(seconds)를 사용합니다.

## 초기화 함수 (Init Functions)

초기화 함수에는 두 가지 유형이 있습니다: InitDsk 및 InitDevice. InitDsk는 DSK를 사용하기 위해 가장 먼저 호출해야 하는 필수 함수이며, InitDevice는 초음파 이미지를 생성하도록 하드웨어를 초기화하는 데 사용됩니다.

프로그램을 종료할 때는 CloseDevice를 호출해야 합니다.




| Name | Input Value | Description |
| --- | --- | --- |
|  |  |  |
| CloseDevice | None | Must be called to close the program |
| InitDevice | None | Initializes the hardware |
| InitDsk | None | The first function that must be called to use DSK |


## Get 함수 (Get Functions)



| Name | Return Value | Description |
| --- | --- | --- |
| GetApertureSize | int | Returns the aperture size in Linear Array Mode |
| GetApertureStep | int | Returns the number of steps taken by aperture per vector in LinearArray Mode |
| GetAcquisitionRate | double | Returns the framerate (acquisition rate per second) depending on the image settings |
| GetDepthStart | double | Returns the starting point of Depth |
| GetDepthRange | double | Returns the range of Depth |
| GetDigitizingIndex | int | Returns the indices of the sampling frequency(0: 50MHz, 1: 25MHz, 2:12.5MHz) |
| GetFilterStartFreq | double | Returns the starting frequency of Filter |
| GetFilterStopFreq | double | Return the stopping frequency of Filter |
| GetFirstElementHeight | double | Returns the height of the first element of the probe’s wedge. |
| GetFocusLocation | double | Returns the focus depth being sent |
| GetGain | double | Returns gain (in dB) |
| GetIsProbeUtConnector | bool | Determines whether the probe’s connector is a UT connector (e.g. BNC) or not |
| GetIsWedgeEnable | bool | Represents whether or not a wedge is being used |
| GetMainSampleFrequency | double | Returns the system’s main sampling frequency in Hz (e.g. 50e6) |
| GetPrf | int | Returns PRF (Pulse Repetition Frequency) value |
| GetProbeElementCount | int | Returns the number of probe elements |
| GetProbeFirstElement | int | Returns the starting point of the element if the probe is split into multiple channel groups |
| GetProbeFrequency | double | Returns the probe frequency in Hz |
| GetProbePitch | double | Returns the pitch between probe elements in mm |
| GetProbeType | DskProbeType | Returns probe type |
| GetPulseBurstCount | int | Returns the number of transmitted ultrasonic pulses |
| GetPulseVoltage | int | Returns the voltage of the transmitted ultrasonic pulse |
| GetPulseWidth | double | Returns the width of the transmitted ultrasonic pulse |
| GetRefractedAngleResolution | double | Returns the resolution of the view angle in Sectorial Mode. The typical value used is 1. |
| GetRefractedAngleStart | double | Returns the starting point of the view angle in Sectorial Mode |
| GetRefractedAngleStop | double | Returns the ending point of the view angle in Sectorial Mode |
| GetRxElementStart | int | Returns the starting point of the receive element from the probe |
| GetRxElementStop | int | Returns the stopping point of the receive element from the probe |
| GetSampleCountPerVector | int | Returns the number of samples per vector |
| GetSScanHeight | int | Returns height of S scan image |
| GetSScanWidth | int | Returns width of S scan image |
| GetTxElementStart | int | Returns starting point of transmit element from the probe |
| GetTxElementStop | int | Returns stopping point of transmit element from the probe |
| GetVectorCount | int | Returns the number of vectors per frame where each frame is comprised of multiple vectors |
| GetVelocityInSpecimen | int | Returns the velocity of the ultrasonic wave in the specimen |
| GetVersion | string | Returns the version number as a string (e.g. “1.0”) |
| GetWedgeAngle | double | Returns the wedge angle |
| GetWedgeDelay | double | Returns the wedge delay that has been set |
| GetWedgeVelocity | double | Returns the velocity of the longitudinal ultrasonic wave from the wedge |
|  |  |  |
|  |  |  |





## 스캔 이미지 파라미터 가져오기 (Get scan image parameters)

A-scan, B-scan, C-scan과 달리 S-scan 모드는 이미지 파라미터에 따라 스캔 변환(Scan Conversion)을 거쳐 이미지의 가로 크기가 변동됩니다. 즉, 이미지 설정 변경 시 위에 나열된 함수를 사용하여 가로 및 세로 크기를 다시 가져와 컬러 매핑 후 화면에 렌더링해야 합니다.


GetSScanWidth

GetSScanHeight


이는 S-scan 이미지 계산 시 전체 이미지 영역에 대해 정상적으로 스캔 변환이 이루어지도록 보장하기 위함입니다. 또한 CalcSScanImage 함수가 반환하는 바이트 배열의 크기는 SScanWidth와 SScanHeight의 곱과 같습니다.

## Set 함수 (Set Functions)



| Name | Input Value | Description |
| --- | --- | --- |
| SetApertureSizeStep | int size,int step | Sets the aperture size in Linear Mode |
| SetBeamType | DskBeamType type | Sets the Beam type (Linear or Azimuth) |
| SetDepth | double start, double range | Sets the depth data |
| SetDigitizingIndex | double index | Sets the sample frequency |
| SetEncoderAxisReverse | bool reverse | Switches scan encoder and index encoder with each other |
| SetFilterBandwidth | double start, double stop | Sets the filter’s start and stop frequencies |
| SetFocusLocation | double focus | Sets TX Focus location |
| SetGain | double gain | Sets gain value |
| SetIndexEncoder | double start, double stop, double step, double resolution, bool reverse | Sets index encoder. All units are in mm |
| SetPrf | int prf | Sets PRF value |
| SetProbeFirstElement | int firstElement | Sets the first element of the probe |
| SetProbeRxElementLocation | int start, int stop | Sets the RX element location |
| SetProbeSpecification | double freq, double pitch, int elementCount | Sets the probe specifications |
| SetProbeTxElementLocation | int start, int stop | Sets TX element location |
| SetProbeType | DskProbeType type | Sets the probe type |
| SetProbeUTConnector | bool isUtPort | Indicates that it is a UT port |
| SetPulseBurstCount | int burstCount | Sets the number of TX bursts |
| SetPulseVoltage | int voltage | Sets the TX voltage |
| SetPulseWidth | double pulseWidth | Sets the TX pulse width |
| SetScanEncoder | double start, double stop, double step, double resolution, bool reverse | Sets the Scan encoder values. All units are mm |
| SetRefractedAngleGeometry | double start, double stop, double resolution | Shows the view angle geometry in Sectorial Mode |
| SetVelocityInSpecimen | int velocity | Sets the velocity in the specimen |
| SetWedgeDelay | double wedgeDelay | Sets the Wedge Delay |
| SetWedgeSpecification | bool wedgeEnable, double wedgeAngle, int velocityInWedge, double firstElementHeight | Sets the wedge specifications |



## 콜백 함수 설정 (Set Callback functions)


### 선언 (DECLARATION)


void DSK.SetCallBackFrame(DskCallBackFrame func)

void DSK.SetCallBackFrame(DskCallBackFrameX func)

void DSK.SetCallBackFrame(DskCallBackFrameXY func)

void DSK.SetCallBackFrame(DskCallBackFrameXYZ func)

void DSK.SetCallBackFrame(DskCallBackFrameMultiBoardXYZ func)



### 설명 (DESCRIPTION)


데이터 수신용 콜백 메서드를 설정합니다. 입력값으로 아래 참고(NOTE) 섹션에 나열된 델리게이트 메서드 중 하나를 전달해야 합니다. 필요한 엔코더 좌표 정보 유형에 따라 단 한 번만 호출해야 합니다.


### 매개변수 (PARAMETERS)


델리게이트 메서드는 수신하고자 하는 엔코더 좌표 정보의 차원에 따라 분류됩니다.



### 반환값 (RETURN VALUE)


없음



### 참고 (NOTE)



public delegate void DskCallBackFrame(short[] frameData);

public delegate void DskCallBackFrameX(short[] frameData, double locX);

public delegate void DskCallBackFrameXY(short[] frameData, double locX, double locY); public delegate void DskCallBackFrameXYZ(short[] frameData, double locX, double locY, double locZ);

public delegate void DskCallBackFrameMultiBoardXYZ(int boardId, short[] frameData, double locX, double locY, double locZ);


모든 위치 정보는 mm 단위입니다.



## 업로드 함수 (Upload Functions)



| Name | Input Value | Description |
| --- | --- | --- |
| UploadAllParameters | None | Calculates and changes the hardware settings depending on the DSK settings. This method must always be called after calling the DSK Set method. |
| UploadDepthStartRange | double start, double range | Sets the starting depth and range |
| UploadGain | double gain | Sets the gain value |
| UploadInspectionModeStart | None | Starts Inspection Mode |
| UploadInspectionModeStop | None | Ends Inspection Mode |
| UploadPrf | int prf | Sets PRF value |



## 추가 함수 (Additional Functions)


| Name | Input / Return | Description |
| --- | --- | --- |
| CalcSScanImage | Input : short[] framedata<br>Return : byte[] | Runs scan conversion |
| Freeze | None | Freezes image acquisition |
| Unfreeze | None | Unfreezes image acquisition |
|  |  |  |
|  |  |  |
|  |  |  |


## S-Scan 이미지 계산 (Calc S Scan Image)


S-scan 이미지를 렌더링하려면 반드시 스캔 변환을 거쳐야 합니다. 콜백 함수로부터 수집된 프레임 데이터를 활용하여 이 함수를 호출하면 스캔 변환 완료된 데이터를 반환합니다. 입력 인자로 short 타입의 프레임 배열을 전달하면 스캔 변환된 byte 타입의 2D 이미지 배열이 반환됩니다. 반환되는 값은 byte 데이터이므로 화면에 출력하기 전에 컬러 맵(Color Map)을 통한 픽셀 변환을 거쳐야 합니다.

