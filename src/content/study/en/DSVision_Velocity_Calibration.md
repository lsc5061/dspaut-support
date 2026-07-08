---
title: "The Standard of Calibration: Velocity (Sound Velocity) Calibration"
publishDate: 2026-07-07
description: "Provides step-by-step procedures and UI guides for precisely calibrating material sound velocity using DSVision's 2-Point Calibration."
tags: ["Velocity Calibration", "Calibration", "DSVision"]
category: "DSVision Practical & Quick Guides"
order: 21
---

In ultrasonic testing (UT), to determine the exact location and depth of defects, the system's sound velocity must be perfectly synchronized with the wave propagation speed inside the inspection material. DSVision's **Velocity Calibration** feature is designed to move beyond theoretical values and immediately reflect the actual physical characteristics of the field material.

---

## 1. 2-Point Calibration: Ref A / Ref B System

DSVision employs a highly precise **2-Point Calibration** method rather than a single-point setup. By calculating the sound velocity based on two distinct reference points of known thickness, measurement errors are minimized.

### ① Calibration Process & UI Layout

![Velocity Calibration Interface](/images/study/calibration/velocity_cal.png)

* **Ref A / Ref B (mm)**: Input fields where the user enters the actual physical thickness (e.g., 50mm, 100mm) of the two known points on the calibration block.
* **Calibrate Button**: After capturing the echo signals of the two points with gates, clicking this button triggers the system to automatically calculate and derive the actual material velocity (m/sec).
* **Finish Button**: Applies the calculated velocity value to the system-wide settings and completes the calibration process.

---

## 2. Operation Steps for Stable Analysis

1. **Set Thickness**: Enter the exact physical values of the thin section (Ref A) and thick section (Ref B) of the calibration block into the UI fields.
2. **Signal Capture**: Position Gate A and Gate B on the peak echoes reflecting from each thickness section (Ref A and Ref B).
3. **Automatic Calculation**: Click the `Calibrate` button, and DSVision analyzes the time-of-flight difference between the two gated signals to automatically determine the absolute sound velocity.

---

## 3. Reference Material Velocity Guide & Manual Setup

For initial estimates or quick setups, DSVision includes a standard library of common industrial materials, enabling operators to load predefined velocity values instantly. For manual inputs matching longitudinal or transverse wave modes, the following standard velocities can be referenced:

| Material | Longitudinal Wave | Transverse/Shear Wave |
| :--- | :--- | :--- |
| **Carbon Steel (Steel 1018)** | ~5,920 m/s | ~3,250 m/s |
| **Stainless Steel (SS 304)** | ~5,660 m/s | ~3,120 m/s |
| **Aluminum** | ~6,320 m/s | ~3,130 m/s |

* **Real-time Monitoring Integration**: Modifying the velocity value inside the Specimen menu dynamically updates the scales on both the A-Scan and S-Scan, along with the Sound Path reading, providing immediate visual feedback.

---

## 4. Key Values for Buyers and Inspectors

* **Absolute Accuracy**: By synchronizing 100% with the physical properties (hardness, density, etc.) of the actual field material rather than relying on theoretical estimates, distance error is eliminated.
* **Simplified Workflow**: Enables rapid, intuitive calibration using only two signal captures and actual thickness inputs, without complex manual physics calculations.
* **Data Integrity**: An accurately calibrated velocity value guarantees the technical reliability of all subsequent steps, such as Wedge Delay calibration and TCG.

---

> [!IMPORTANT]
> **"Accurate positional information is the life of data."**  
> DSVision's sophisticated 2-point calibration technology maps virtual electrical signals into trustworthy physical data, proving the high objectivity of inspection results.
