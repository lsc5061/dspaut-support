---
title: "Overcoming Sound Attenuation: TCG (Time Corrected Gain) Calibration"
publishDate: 2026-07-07
description: "Provides step-by-step procedures and UI guides for precisely compensating for depth-dependent ultrasonic attenuation using DSVision's Auto TCG."
tags: ["TCG Calibration", "Distance Amplitude Correction", "Calibration", "DSVision"]
category: "DSVision Practical & Quick Guides"
order: 24
---

As ultrasonic waves propagate deeper into a material, they physically undergo energy loss (sound attenuation). Consequently, even within a uniform material, reflection signals from shallow defects appear large, while echoes from deeper defects appear significantly smaller due to energy dissipation. DSVision's **TCG (Time Corrected Gain)** feature is a technology that uniformly normalizes this depth-dependent attenuation using a digitally calculated gain curve.

---

## 1. Auto TCG: Intelligent Automated Attenuation Compensation

Unlike traditional methods where inspectors manually calculate gain levels for various depths, DSVision provides an intelligent algorithm that automatically analyzes reference echo signals captured at different depths, aligning all peak responses to a uniform target amplitude level (e.g., 80% FSH).

### ① Calibration Process & UI Layout

![TCG Calibration Curve & Interface](/images/study/calibration/tcg_cal.png)

* **Ref % (Target)**: Defines the target reference amplitude level (e.g., 80%) to which all depth echoes should be normalized after calibration.
* **Tolerance %**: Sets the allowable deviation range from the target level, adjusting the fitting precision of the automatic curve generation.
* **TCG Curve**: A curve constructed from the captured calibration data points. As the inspection depth increases (representing longer time-of-flight), the system incrementally raises the receiver gain to restore and equalize the echo amplitudes.

---

## 2. TCG Calibration Steps for Precision

1. **Capture Multi-Point Echoes**: Place the probe on a calibration block with stepped thicknesses (such as a Step Wedge). Position the probe over the first thickness section and align its echo within the gate.
2. **Add Calibration Points**: Click the `Add` button when the echo signal forms a maximum peak. Repeat this process for multiple thickness steps. Capturing data across various depths builds a highly accurate TCG curve.
3. **Generate Curve**: Once sufficient data points have been collected, click the `Calculate` button. DSVision computes and applies the TCG curve in real time. You will observe that the reference echoes from all calibrated depths align uniformly at the 80% FSH line on the A-scan.

---

## 3. Key Values for Buyers and Inspectors

* **Uniform Sizing Reliability**: Enables defect sizing based purely on the physical reflector area and amplitude height, regardless of whether a defect lies close to the surface or deep within the material.
* **Automated Precision**: Generates a smooth, reliable TCG curve through simple signal capture and registration, eliminating the need for manual curve drawing or tedious gate-by-gate gain tuning.
* **Enhanced Defect Visibility**: Restores weak signals from deep cracks that would otherwise be lost to physical attenuation, displaying them clearly on the screen and preventing critical missed detections.

---

> [!IMPORTANT]
> **"Every signal is evaluated with equal weight, regardless of depth."**  
> DSVision's TCG calibration technology restores attenuated signals to their true physical proportions, providing inspectors with complete diagnostic confidence throughout the entire volume of the material.
