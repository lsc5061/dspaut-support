---
title: "The Precision of Spatial Data: Encoder Calibration"
publishDate: 2026-07-07
description: "Provides step-by-step procedures and UI guides for aligning scanner physical movement with software position data within 0.01mm error using DSVision's Encoder Calibration."
tags: ["Encoder Calibration", "Calibration", "DSVision"]
category: "DSVision Practical & Quick Guides"
order: 25
---

While sound velocity (Velocity) calibration dictates the exact 'depth' coordinate of acquired signals, **Encoder Calibration** determines the precise 'horizontal position' of a defect on a flat plane. DSVision's encoder calibration feature matches the physical travel distance of the scanner wheels with the digital positioning data in the software within a 0.01mm margin of error, ensuring the spatial integrity of inspection data.

---

## 1. Step-by-Step Calibration Workflow (Operational Guide)

Instead of requiring complex manual conversions of pulse counts to distance ratios, DSVision provides an intuitive user interface that automatically computes encoder resolution from a simple physical travel distance input.

### ① Calibration Process & UI Layout

![Encoder Calibration Interface](/images/study/calibration/encoder_cal.png)

* **Step 1: Start**  
  Select the scanner axis you wish to calibrate (Scan or Index axis). Align the scanner with a reference starting mark on a ruler, then click the `Start` button. This resets the pulse counter (`Encoder Step`) to zero and begins recording.
* **Step 2: End**  
  Manually push and move the scanner by a pre-measured, exact distance (e.g., 100mm) and click the `End` button. The system automatically registers and records the total pulse count generated during the movement.
* **Step 3: Calculate**  
  Enter the actual physical distance moved (e.g., 100.0) in millimeters into the `Real Length` field, and click the `Calculate` button.

---

## 2. Automatic Optimization of Resolution (pulses/mm)

Clicking the `Calculate` button prompts the system to analyze the ratio of registered pulses to the physical distance, instantly deriving the **Resolution (pulses/mm)** parameter value.

* **Meaning of Resolution**: The standard number of pulses that the encoder sensor must generate when the scanner travels exactly 1 mm.
* **Technical Value of Calibration**: By zero-adjusting for micro-wear on scanner wheels, surface slip, or mechanical hardware variations through actual distance calibration, it prevents position coordinate drift and cumulative distance errors over long-distance scans.

---

## 3. Key Values for Buyers and Inspectors

* **Zero-Deviation Mapping**: Establishes a 1:1 match between the physical scanning trajectory and the digital positioning displayed on inspection views (such as C-scans).
* **Predictive Maintenance**: By monitoring changes in the calibrated Resolution values over time, inspectors can indirectly gauge the wear and tear of scanner wheels or encoder sensors, planning preventive repairs.
* **Workflow Efficiency**: Replaces manual conversions and spreadsheet calculations with a straightforward three-step process: move the scanner, enter the distance, and calculate.

---

> [!IMPORTANT]
> **"Aligning the screen scales with the physical world."**  
> DSVision's encoder calibration technology ensures that inspectors can locate and mark defects on the physical test piece exactly where they appear on the 2D scan view (C-scan, etc.), enabling precise localized excavations or repairs.
