---
title: "Ultrasonic NDT C-scan: Principles and Plan View Interpretation"
publishDate: 2026-06-10
description: "Based on global NDT technical standards, this article explains the physical definition of C-scan and provides detailed methods for interpreting planar projection (top-down view) graphs displayed on screens."
tags: ["C-scan", "Plan View", "Defect Distribution"]
category: "2. Data Visualization & Scan Interpretation"
order: 7
---

While the A-scan in Ultrasonic Testing (UT) displays a 1D signal waveform, and the B-scan represents a 2D vertical cross-section, the **'C-scan'** is a technology that projects the entire product from a top-down view to map the planar distribution of defects like a map.

Based on global NDT technical standards, this article explains the physical definition of C-scan and provides detailed methods for interpreting the plan view projection graphs displayed on screens.

---

## 1. Definition and Core Concepts of C-scan

A C-scan is a method of collecting data by moving a probe (transducer) across the surface of a test object in a 2D plane—both horizontally (X-direction) and vertically (Y-direction).

The equipment scans the entire surface area in a grid pattern, recording the internal ultrasonic echo signals generated at each point. Then, it converts the **maximum signal intensity (amplitude) or the depth of the defect (time of flight)** returned from a pre-configured depth range (Gate) into colors, plotting and aligning them on planar coordinates. Consequently, a **2D plan view projection map** is completed, allowing inspectors to peer inside the object from above without damaging it.

---

## 2. How to Interpret a C-scan Graph: X-axis, Y-axis, and Color Mapping

The C-scan graph corresponds one-to-one with the actual width and length surface dimensions of the product, making its interpretation highly intuitive.

### ① Horizontal Axis (X-axis) & Vertical Axis (Y-axis): 2D Surface Coordinates (Scanning Position)
The horizontal and vertical axes of a C-scan graph represent the **2D physical distance (mm) that the probe has moved across the product surface**. For example, if a 200 mm wide by 100 mm long area was scanned, the horizontal and vertical axes of the graph represent the actual dimensions of the product from 0 to 200 mm and 0 to 100 mm to scale.

### ② Color Mapping: Signal Intensity or Defect Depth
Unlike the peak height in A-scans or the cross-sectional lines in B-scans, C-scans rely solely on **color changes** to represent internal information. Depending on the equipment configuration, this can be interpreted in two ways:
* **Amplitude C-scan**: Normal areas without defects let the ultrasound pass through and are displayed in cold colors (e.g., blue or background color). On the other hand, areas where internal defects return strong echoes are highlighted in bright warning colors such as red or yellow.
* **Depth C-scan**: Different colors represent different depths of the defects, enabling three-dimensional analysis of the depths at which defects lie using a color bar.

---

## 3. Principles of Screen Data Interpretation (Defect Shape and Size Measurement)

When inspecting a product, the internal condition is diagnosed through the pattern of color indicators appearing on the C-scan graph as follows:

* **Uniform Background Area (Intact Zone)**
  If the product has no internal defects and a uniform thickness, the entire screen appears clean, showing a uniform background color (e.g., solid blue or white).
* **Color Clusters with Specific Shapes (Defect Indications)**
  If internal cracks, delamination, or void clusters exist, a **colored cluster reflecting the actual shape and size of the defect** appears clearly at the corresponding planar coordinates.
  By reading the horizontal and vertical boundaries of this color cluster, an inspector can achieve a comprehensive spatial understanding, such as: "A circular void with a diameter of 5 mm is present at coordinates (X: 50 mm, Y: 30 mm) from the left starting point of the product," or "A horizontal crack of 20 mm in length is progressing in the central section."
