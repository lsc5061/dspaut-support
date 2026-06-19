---
title: "Guide to Sensitivity Calibration"
publishDate: 2026-05-14
description: "Step-by-step procedure for sensitivity calibration for precise flaw detection with DEEPSOUND P5 equipment."
tags: ["P5", "SensitivityCalibration", "Sensitivity", "Calibration", "NDT"]
category: "Technical Analysis"
image: "/images/blog/ko/sens_first.png"
---

In ultrasonic non-destructive testing, if sensitivity is not properly calibrated, signal strength may appear differently depending on the location, even for flaws of the same size. This leads to misjudging the severity of the flaw. In this post, we introduce a systematic sensitivity calibration method using DEEPSOUND P5.

---

## Importance of Sensitivity Calibration

In an uncalibrated state, the amplitude values obtained from different locations on a reference specimen (e.g., R100) are not constant. Since signal amplitude is directly linked to the perceived size of the flaw, accurate calibration is essential.

![Uncalibrated Sensitivity Status](./images/Sensitivity_1.png)

---

## Calibration Procedure

### 1. Entering the Sensitivity Calibration Page
Navigate to the dedicated Sensitivity Calibration page according to the menu order.

![Entering the Calibration Page](./images/Sensitivity_1234.png)

### 2. Parameter Settings
The calibration page provides various inputs for precise adjustment, such as Depth Range, Gain, and Gate.

![Parameter Setting Screen](./images/Sensitivity_6.png)

### 3. Signal Data Classification
The automatic sensitivity calibration window clearly distinguishes data visually.
- **Envelope:** The maximum signal trajectory occurring during the scan
- **Peak Signal:** The currently detected maximum signal
- **Reference & Tolerance:** Target amplitude values

![Signal Classification Interface](./images/Sensitivity_7.png)

---

## Practical Tips

It is standard to set the amplitude tolerance for the entire vector range to **80%**.

![Tolerance Setting](./images/Sensitivity_8.png)

1. **Sweep:** Slowly move the probe over the calibration block to form an envelope before capturing the final data.
2. **Reset Function:** If data is inaccurate, you can restart at any time via **Reset** and **Clear Envelope**.
3. **Apply:** Ensure that tolerance values are applied uniformly across all active vectors.

![Calibration Application Result](./images/Sensitivity_slide008_181.png)
- **Verifying amplitude consistency at 40-degree and 55-degree angles**

---

## Conclusion

When calibration is successfully completed, the **'S'** among the status labels at the bottom of the screen will be activated in orange.

![Sensitivity Calibration Complete](./images/Sensitivity_slide009_205.png)

Precise sensitivity calibration ensures the integrity of the data provided by DEEPSOUND P5 and serves as the basis for the inspector to quantitatively and accurately judge the size of flaws.
