---
title: "Ultrasonic Corrosion Mapping Principles"
publishDate: 2026-06-30
description: "Examines the physical principles of ultrasonic corrosion mapping, analyzing grid coordinate acquisition, color map rendering, and Peak vs Edge gating methods."
tags: ["UT", "Corrosion Mapping", "Gating", "NDT"]
category: "2. Data Visualization & Scan Interpretation"
order: 5
---

This article details the digital data acquisition mechanisms and signal processing principles behind ultrasonic Corrosion Mapping, focusing on spatial grid encoding, color-scaled thickness visualization, and gate measurement modes.

---

## 1. Grid Coordinate Acquisition and C-Scan Mapping

Corrosion Mapping is a volumetric NDT methodology designed to monitor and quantify material loss (wall thinning) caused by corrosion, erosion, or wear. Unlike point-by-point manual thickness inspections, corrosion mapping generates a comprehensive 2D spatial thickness database.

### The Spatial Grid Mechanism
To construct a corrosion map, the surface of the component is divided into a 2D coordinate grid (comprising Scan Axis $X$ and Index Axis $Y$). 
- **Encoder-Driven Tracking:** The ultrasonic probe is mounted on an encoder-tracked scanner. As the probe translates, the rotary encoders record its precise coordinate positions $(x_k, y_k)$ at microsecond intervals.
- **A-Scan Data Extraction:** At each grid coordinate, a full A-scan waveform is captured. The acquisition software scans the waveform within a defined time gate to extract the time-of-flight (ToF) of the returning echo, computing the thickness: $d = (v \cdot t) / 2$.
- **C-Scan Grid Assembly:** The calculated thickness values are mapped directly to their corresponding spatial coordinates $(x_k, y_k)$, assembling a color-coded top-down view (C-Scan).

---

## 2. Gate Signal Detection Modes: Peak vs. Edge

The accuracy of thickness measurements within the C-scan is governed by the algorithm used to detect the echo arrival time inside the measurement gate. Two primary methods are utilized:

### 2-1. Peak Detection Mode
In **Peak Detection Mode**, the acquisition software scans the gated waveform to locate the point of maximum amplitude (highest voltage peak) within the gate limits. The time-of-flight is measured from the initial pulse to this maximum peak coordinate.

- **Characteristics:** Highly stable for clean, discrete reflections where the signal amplitude is strong.
- **Limitations:** If the defect surface is irregular, the shape of the returning echo may distort, causing the peak position to shift slightly (phase-jitter), which introduces minor measurement variations.

### 2-2. Edge Detection Mode
In **Edge Detection Mode** (also referred to as Threshold Detection), the time-of-flight is recorded at the exact moment the rising edge of the echo waveform first crosses a pre-set threshold level (e.g., $20\text{% FSH}$), regardless of where the peak of the wave lies.

- **Characteristics:** Particularly optimized for corrosion mapping. Because it tracks the absolute first arrival of the wave front, it is highly sensitive to the minimum remaining wall thickness.
- **Advantages in Corrosion Monitoring:** In corroded surfaces, acoustic scattering is severe, often resulting in jagged, multi-peak echo profiles. Peak detection can "jump" between adjacent peaks as the probe moves, causing artificial thickness steps in the data. Edge detection avoids these measurement jumps by consistently triggering on the leading edge of the returning wave.

---

## 3. Color Map Scaling and Interpretation

The final C-scan image maps the remaining wall thickness values to a continuous color scale (e.g., green for nominal thickness, yellow for moderate thinning, and red for severe corrosion). 

By analyzing the spatial distribution of colors, inspectors can distinguish between:
- **General Corrosion:** Broad, gradual thinning patterns.
- **Pitting Corrosion:** Small, isolated, high-contrast red anomalies indicating localized deep pits, which present high risk for pressure boundary puncture.
