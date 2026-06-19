---
title: "Ultrasonic NDT B-scan: Principles and Cross-Sectional Interpretation"
publishDate: 2026-06-10
description: "Based on global NDT technical standards, this article explains the physical definition of B-scan and provides detailed methods for interpreting 2D cross-sectional graphs displayed on screens."
tags: ["B-scan", "2D Cross-Section", "Peak"]
category: "2. Data Visualization & Scan Interpretation"
order: 6
---

If the A-scan in Ultrasonic Testing (UT) is a raw signal obtained at a single point, the **'B-scan'** is a technology that visualizes the inside of a test object in two dimensions by moving the probe horizontally and continuously stacking the signals.

Based on global NDT technical standards, this article explains the physical definition of B-scan and details how to interpret the 2D cross-sectional graphs displayed on equipment screens.

---

## 1. Definition and Core Concepts of B-scan

The 'B' in B-scan stands for **Brightness**. While the A-scan represents signal intensity through the peak height of the waveform, the B-scan represents signal intensity by converting it into **pixel brightness (grayscale intensity) or a dedicated color mapping**.

When a probe (transducer) is moved in a specific direction across a metal surface, the equipment lines up the numerous A-scan signals returned along the probe's travel path side by side. As a result, a **2D cross-sectional image graph** is completed, resembling a slice cut from the side of the object without damaging it. This is physically identical to the operating principle of fish finders that show seafloor topography and schools of fish in real-time, or Ground Penetrating Radar (GPR) used for subsurface exploration.

---

## 2. How to Interpret a B-scan Graph: X-axis, Y-axis, and Color

The B-scan graph represents the internal state of a material using three physical indicators: the horizontal axis, the vertical axis, and color.

### ① Horizontal Axis (X-axis): Scanning Position (Travel Distance)
The horizontal axis in a B-scan represents the **actual physical distance (mm) the probe has moved across the product surface**. For example, if scanning was performed while moving 100 mm from a left starting point to the right, the horizontal axis displays the actual scan path from 0 to 100 mm drawn to scale.

### ② Vertical Axis (Y-axis): Internal Depth (Depth / Time of Flight)
The vertical axis in a B-scan represents the **internal depth of the product (mm)**, which is converted from the time of flight of the ultrasound. The top line represents the surface where the probe is in contact (depth of 0 mm), and moving downwards indicates deeper areas within the material.

### ③ Color and Brightness: Signal Intensity (Amplitude)
The amplitude of the echo, which was represented by the peak height in the A-scan, is represented by **changes in color or brightness** in the B-scan. Normal regions without echo signals are displayed as a dark background, whereas interfaces returning strong echoes are recorded on the screen as bright, distinct colored pixels.

---

## 3. Principles of Screen Data Interpretation (Surface Line, Backwall Line, and Internal Defects)

When inspecting a product, the internal condition is diagnosed through the pattern of lines appearing on the B-scan graph as follows:

* **Top Surface Line**
  At the very top of the B-scan graph, the boundary where the probe meets the product surface is always displayed as a bright, continuous horizontal band. This serves as the reference starting line for the inspection (depth of 0 mm).
* **Backwall Line**
  In a clean material with no internal defects, the ultrasound travels and reflects back only from the bottom surface without encountering any obstacles. Therefore, a **continuous solid horizontal line** appears at the vertical axis (depth) position corresponding to the product thickness. If this backwall line remains straight and uninterrupted, it indicates that the product thickness is uniform.
* **Internal Defects**
  If there is a horizontal crack or void layer inside the product, a **separate, isolated line or cluster of colored pixels** will appear at an intermediate depth between the top surface line and the bottom backwall line.
  By reading the horizontal axis position of this signal, you can identify how many millimeters away from the starting point the defect is located. By reading the vertical axis position, you can visually confirm the exact depth of the defect beneath the surface.
