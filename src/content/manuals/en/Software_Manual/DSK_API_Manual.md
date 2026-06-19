---
title: API Reference
description: Deepsound Software Development Kit (DSK) API Reference Manual.
version: v1.4
releaseDate: 2020
author: SEONGSAN LAB INC.
---

# API Reference Manual























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









## Disclaimer

SEONGSAN LAB INC, 2020. Ver 1.0. *All information in this document is subject to change without prior notice.


## DSK Change Log:



| Version | Change Log |
| --- | --- |
| 1.0 | First release |
| 1.3 | Added Multi Channel function |
| 1.4 | Added Multi Board function and enhanced Focal Law Angle Resolution |
|  |  |



## Table of Contents

## INTRODUCTION

This Document explains the API of DSK. All the API of DSK are in the format of DSK.XXX where XXX represents functions. These functions are largely divided into categories such as Init, Get, Set, Upload, etc.

Use the Get functions to get DSK’s parameters, and the Set function to set those parameters. In order to use the Set function to actually set parameters, the UploadAllParameters function must be called.

Calling the UploadAllParameters function to set the DSK parameters is a time consuming process. To expedite this process, use the UploadXXX function for individual parameters.


For example, you can set the Gain value with either one of the following two methods. If Gain is the only value that changed, the two methods perform the same action, but the second method is faster.



| 1 | SetGain(value)<br>UploadAllParameters() |
| --- | --- |
| 2 | UploadGain(value) |


Only the frequently used parameters have a dedicated Upload function.


Unless specified otherwise, DSK uses mm for lengths, degrees for angles, Hz for frequencies, and seconds as the unit of time.

## Init Functions

There are two types of Init functions: InitDsk and InitDevice.  InitDsk is the first function that must be called in order to use DSK, and InitDevice is used to initialize the hardware to generate an image.

CloseDevice is called to close the program.




| Name | Input Value | Description |
| --- | --- | --- |
|  |  |  |
| CloseDevice | None | Must be called to close the program |
| InitDevice | None | Initializes the hardware |
| InitDsk | None | The first function that must be called to use DSK |


## Get Functions



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





## Get scan image parameters

Unlike A scan, B scan, and C scan, S Scan Mode changes the image width through scan conversion depending on the image parameters. In other words, if you change the image parameters, use the methods listed above to obtain the width and height, and display the image on the screen after color mapping.


GetSScanWidth

GetSScanHeight


This is to make sure the entire area of the width and height calculated by S Scan Image goes through scan conversion. Additionally, the byte array returned by CalcSScanImage is equal to the product of SScanWidth and SScanHeight.

## Set Functions



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



## Set Callback functions


### DECLARATION


void DSK.SetCallBackFrame(DskCallBackFrame func)

void DSK.SetCallBackFrame(DskCallBackFrameX func)

void DSK.SetCallBackFrame(DskCallBackFrameXY func)

void DSK.SetCallBackFrame(DskCallBackFrameXYZ func)

void DSK.SetCallBackFrame(DskCallBackFrameMultiBoardXYZ func)



### DESCRIPTION


Sets the Callback method. You must pass in one of the delegate methods listed below in the NOTES section to the input. Depending on the type of encoder location you need, only call the method once.


### PARAMETERS


Delegate methods are categorized depending on the encoder coordinates it is trying to receive.



### RETURN VALUE


None



### NOTE



public delegate void DskCallBackFrame(short[] frameData);

public delegate void DskCallBackFrameX(short[] frameData, double locX);

public delegate void DskCallBackFrameXY(short[] frameData, double locX, double locY); public delegate void DskCallBackFrameXYZ(short[] frameData, double locX, double locY, double locZ);

public delegate void DskCallBackFrameMultiBoardXYZ(int boardId, short[] frameData, double locX, double locY, double locZ);


All location information is in mm.



## Upload Functions



| Name | Input Value | Description |
| --- | --- | --- |
| UploadAllParameters | None | Calculates and changes the hardware settings depending on the DSK settings. This method must always be called after calling the DSK Set method. |
| UploadDepthStartRange | double start, double range | Sets the starting depth and range |
| UploadGain | double gain | Sets the gain value |
| UploadInspectionModeStart | None | Starts Inspection Mode |
| UploadInspectionModeStop | None | Ends Inspection Mode |
| UploadPrf | int prf | Sets PRF value |



## Additional Functions


| Name | Input / Return | Description |
| --- | --- | --- |
| CalcSScanImage | Input : short[] framedata<br>Return : byte[] | Runs scan conversion |
| Freeze | None | Freezes image acquisition |
| Unfreeze | None | Unfreezes image acquisition |
|  |  |  |
|  |  |  |
|  |  |  |


## Calc S Scan Image


In order to display the S Scan Image, it must go through scan conversion. Calling this method using the frame data obtained from the Callback method will return the data that has been scan converted. Pass in the short array into the input to return the scan converted byte array. Since the returned value is a byte value, it must go through color mapping and be converted into a color image before displaying onto the screen.

