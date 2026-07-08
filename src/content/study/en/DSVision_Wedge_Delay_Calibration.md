---
title: "Wedge Delay Calibration Guide"
publishDate: 2026-07-07
description: "Provides step-by-step procedures and UI guides for precisely and automatically calibrating angular wedge delay using DSVision's Auto Wedge Delay."
tags: ["Wedge Delay Calibration", "Calibration", "DSVision"]
category: "DSVision Practical & Quick Guides"
order: 22
---

Once sound velocity (Velocity) is calibrated, the next step is to compensate for the time delay that occurs as the ultrasonic wave propagates through the "Wedge" before entering the actual inspection material. DSVision's **Wedge Delay Calibration** feature eliminates this physical delay offset, guaranteeing that defect horizontal distance and depth coordinate values are completely reliable.

---

## 1. Auto Wedge Delay: Intelligent Automated Calibration

In Phased Array Ultrasonic Testing (PAUT), since the travel distance of the ultrasonic beam inside the wedge varies by angle, manual calculations are extremely complex. DSVision resolves this by employing an intelligent **Auto Wedge Delay** logic, which automatically calculates and applies the delay values for all active angles and channels at once.

### ① Calibration Process & UI Layout

![Wedge Delay Calibration Interface](/images/study/calibration/wedge_delay_cal.png)

* **Start Button (Top Icon)**: Initiates echo signal capturing for calibration. Position the probe on the calibration block so that the reflection echo from a known block geometry (e.g., R100) falls inside the target gate.
* **Add Button**: Temporarily records and logs the peak echo signal detected at different angles or acoustic paths into the calibration data registry.
* **Calculate Button**: Holistically analyzes the accumulated multi-angle echo data, instantly calculating and applying the optimized wedge delay value for every single channel.

---

## 2. Three-Step Process for Precision Calibration

1. **Align Echo**: Place the probe on a standard calibration block (such as a V1 or V2 block) and adjust the position until the reflection echo from the reference surface or hole is stably positioned within the gate window.
2. **Collect Data**: Sweep the beam angles and click the `Add` button when the signal forms a maximum peak. This allows the system to register the propagation characteristics of each element and angle.
3. **Synchronize**: Click the `Calculate` button. DSVision runs the wedge refraction geometric algorithms to simultaneously determine and apply individual time delay offsets for all active angles.

---

## 3. Visual Status Indicator & Practical Inspection Tips

* **Visual Status Indicator ('W' Label)**: When calibration is successfully completed, the **'W'** label at the bottom of the interface turns orange. This allows the operator to verify that the wedge delay has been set at a single glance before starting the scan, preventing human errors.
* **Velocity Calibration First Principle**: Since the wedge delay calculations are dependent on the material's sound velocity, **always perform Velocity Calibration prior to adjusting the Wedge Delay**.
* **Maximize Echo (Peak Search)**: Minimize error by slightly wiggling the probe back and forth and saving (`Apply`) the signal when the echo envelope reaches its maximum peak.

---

## 4. Case Study: Data Changes Based on Wedge Delay Settings

You can visually verify how the signal's actual physical position changes on the screen when the wedge delay is set correctly versus when it is left at 0.0µs.

* **0.0µs (Before Calibration)**: Since the travel time through the wedge is completely ignored, the defect signal is projected at a shallower depth (near the top of the view) than its actual location, introducing depth errors.
* **0.8µs (After Calibration)**: Once the wedge delay is applied to the software engine, the signal **descends to its actual physical depth**, and the horizontal and sound path coordinates match the specimen geometry 1:1. As a result, the defect's true shape is generated in the correct position on the S-Scan.

---

## 5. Key Values for Buyers and Inspectors

* **Error-Free Alignment**: Prevents human errors and calculation typos that commonly occur when manually inputting delay formulas or measuring acoustic parameters.
* **Rapid Setup**: Processes and calculates wedge delay values for dozens of channels simultaneously, dramatically reducing prep and calibration times in the field.
* **Positional Integrity**: Delivers ultra-precise time synchronization at the 0.01μs level, assuring spatial continuity and maximum measurement repeatability before and after calibration.

---

> [!IMPORTANT]
> **"What you see is the true location of the defect."**  
> DSVision's automated wedge delay calibration technology overcomes physical boundaries through software calculation, enabling inspectors to trust the measurement screen without reservation.
