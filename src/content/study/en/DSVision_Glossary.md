---
title: "DSVision Key Terminology & Application Guide"
publishDate: 2026-07-03
description: "A comprehensive reference and glossary explaining the NDT abbreviations and parameters displayed in the DSVision software for practical field application."
tags: ["DSVision", "Glossary", "NDT", "PAUT"]
category: "DSVision Practical & Quick Guides"
order: 2
---

Non-Destructive Testing (NDT) and Phased Array Ultrasonic Testing (PAUT) software products are filled with specialized technical acronyms and variables, often leading to confusion for new inspectors and buyers during initial operation.

This glossary defines the key terms in the DSVision software. It covers not only the **academic definition** of each term but also its **on-screen location, operational purpose, and practical field tips** for NDT inspectors.

---

## 1. Top Header Measurement Data

These real-time values are displayed at the very top of the screen. The measurement abbreviations automatically switch to match whichever gate (A, B, I) the inspector currently touches and activates (e.g., Gate A displays PA/DA/SA, Gate B displays PB/DB/SB).

### %A (Amplitude Percentage)
* **Definition**: The height of the highest echo peak detected within the gate, expressed as a percentage (%) relative to the Full Screen Height (FSH).
* **Practical Application**: Used as a gauge of sensitivity to determine if a weld defect echo meets the standard reference height (e.g., 80% FSH) or to evaluate attenuation.

### P (Primary Distance / Projected Distance)
* **Definition**: The horizontal distance (mm) from the front tip of the wedge (Wedge Toe) to the point where the defect is detected.
* **Practical Application**: Used to identify the physical surface location where excavation or grinding needs to begin on the test piece to reach the defect.

### D (Depth / True Depth)
* **Definition**: The vertical depth (mm) from the inspection surface (top surface) of the test piece to the point where the defect is located.
* **Practical Application**: Allows inspectors to instantly locate the vertical position of a flaw in the material without needing manual trigonometric calculation.

### S (Sound Path)
* **Definition**: The total diagonal distance (mm) traveled by the ultrasonic beam from the transducer element to the reflector (defect) and back.
* **Practical Application**: Used to calculate ultrasonic wave attenuation and determine the actual physical travel distance within the media.

### Scan / Index (Scan & Index Axis Distance)
* **Definition**: **Scan (Blue)** represents the current travel distance (mm) along the primary scanning direction. **Index (Green)** represents the vertical offset distance (mm) perpendicular to the scan line.
* **Practical Application**: Serves as the X-Y coordinate mapping tool when synchronized with an encoder scanner to locate defects in 3D space.

---

## 2. Signal Transmission & Beam Control (Pulse & Probe)

### Config (Operation Mode)
* **Definition**: The hardware board switching configuration. Inspectors can select `PA` (Phased Array sectorial view), `LA` (Linear Array color sweep view), or `Conventional` (single-element testing).
* **Practical Application**: Select PA mode for sectorial weld inspections, LA mode for straight-line thickness mapping, and Conventional mode to view single-beam raw A-scans.

### Focal Law (Beam Steering Law)
* **Definition**: A programmed set of delay calculations for individual phased array elements to bend the ultrasonic beam at specific angles.
* **Practical Application**: Allows you to set the `Angle Start` (e.g., `45°`) and `Angle Stop` (e.g., `70°` or up to `89°`) to sweep the material without moving the probe, detecting cracks at different angles.

### RF Mode (Radio Frequency Mode)
* **Definition**: Displays the raw, unrectified ultrasonic signal waveform vibrating in both positive and negative directions.
* **Practical Application**: **Only available in Conventional mode**. Extremely useful for high-precision thickness measurements on thin plates or checking phase inversion at boundary interfaces.

### PA Dual (Dual Phased Array Mode)
* **Definition**: An operation mode where transmitting elements (Tx) and receiving elements (Rx) are physically separated inside the probe housing (Pitch-Catch).
* **Practical Application**: Automatically maps Tx to channels 1-16 and Rx to channels 33-48 for board-level isolation. It minimizes the near-surface dead zone and reduces noise when inspecting thick materials or highly attenuative austenitic stainless steels.

---

## 3. Specimen & Mechanical Alignment (Specimen & Wedge)

### Legs (Reflection Guidelines)
* **Definition**: Dashed green horizontal lines displayed on the S-Scan representing the path of the ultrasonic beam as it bounces off the bottom and top of the material.
* **Practical Application**: Calculated automatically using the input `Thickness` (e.g., `20 mm`). `B0` represents the first bottom bounce and `T1` represents the return to the top surface. It helps determine if a defect is located in the first half-skip (1st Leg) or second half-skip (2nd Leg).

### Primary Axis / Height (Wedge Offsets)
* **Definition**: Geometric parameters for the wedge. **Primary Axis** defines the horizontal distance from the front toe reference point to the first element (entered as a negative value). **Height** represents the vertical height of the first active element above the material.
* **Practical Application**: Loaded automatically using the Wedge Wizard. These values must be accurate for the Weld Overlay graphic to align correctly over the S-Scan data.

---

## 4. Measurement & Calibration (Gate & Calibration)

### Auto Gain & Auto FSH
* **Definition**: **Auto Gain** automatically calculates and adds the decibel value needed to bring the peak amplitude inside Gate A to the target **Auto FSH (default 80%)** level.
* **Mathematical Formula**: $\Delta\text{Gain} = 20 \log_{10}(\text{Target \%} / \text{Current Peak \%})$
* **Practical Application**: Standardizes the sensitivity calibration (e.g. to 80% FSH) in one click, matching NDT standards (ASME/AWS) instantly without manual adjustment.

### Gate I (Interface Gate) & Sync (Synchronization)
* **Definition**: **Gate I** is a dedicated gate that tracks the material surface echo. **Sync** locks the peak of Gate I as the temporal zero point (T=0) for Gates A and B.
* **Practical Application**: When scanning rough surfaces or using water coupling (Water Path) where scanner wobbling changes the water path distance, Sync dynamically shifts Gates A and B to maintain a constant monitoring depth relative to the surface.

### Edge / Peak Detection
* **Definition**: Signal evaluation modes. **Peak** measures the absolute maximum amplitude inside the gate, while **Edge** measures the first point where the signal rises to cross the Gate Threshold.
* **Practical Application**: Peak is best for evaluating defect size and maximum reflectivity, while Edge is ideal for precise thickness mapping and time-of-flight measurements.

### Encoder Calibration
* **Definition**: A field utility that maps encoder wheel pulses to precise physical millimeters.
* **Practical Application**: Roll the scanner exactly `100 mm` along a ruler and input the distance. The software automatically updates the resolution (`Resolution, pulses/mm`) to achieve 0% measurement error.

### 6dB Drop Method
* **Definition**: A defect sizing method where the lateral boundaries of a flaw are defined where the amplitude drops to half (-6dB, e.g., from 80% to 40% FSH) of its peak value.
* **Practical Application**: Ref. Cursor (Red) is placed at the peak, and Meas. Cursor (Blue) is placed at the drop boundary. The delta values displayed on the status bar determine the physical dimensions: **ΔH (Horizontal Delta = defect length)** and **ΔV (Vertical Delta = defect height)**.
