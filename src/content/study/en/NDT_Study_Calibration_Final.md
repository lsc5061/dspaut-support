---
title: "Principles of Calibration in Ultrasonic Testing and the Purpose of Reference Blocks"
publishDate: 2026-06-10
description: "Explains the calibration process required to measure accurate defect locations and sizes via Ultrasonic Testing (UT), and the physical necessity of reference blocks."
tags: ["Calibration", "Reference Block", "NDT"]
category: "1. Ultrasonic Testing (UT) Basics"
order: 3
---

To measure the exact location and size of defects through Ultrasonic Testing (UT), it is essential to calibrate the equipment's baseline immediately before inspection. This process is called **'Calibration,'** and the standard metal block used for this purpose is called a **'Reference Block'** (or Calibration Block).

Based on global NDT technology standards, this article explains the physical necessity of ultrasonic calibration and the impact of reference blocks on inspection reliability.

---

## 1. Physical Reasons Why Calibration is Required

Ultrasonic equipment cannot directly measure distance in millimeters on its own. The only parameter the instrument measures is the **"Time of Flight (ToF),"** which is the time it takes for the ultrasound to be transmitted and returned.

To convert this elapsed time into an accurate physical depth (mm), the equipment's computer must be programmed with the **precise speed of sound (sound velocity)** within the material being inspected. If there is a slight mismatch between the sound velocity entered into the instrument and the actual velocity of the material, a serious error will occur—for instance, a defect at a depth of 10 mm might be incorrectly displayed on the screen as 12 mm or 8 mm.

In addition, establishing the acoustic zero point to account for electronic delays in the instrument and the travel time of sound within the transducer (probe delay) must precede inspection to form a reliable starting point for data measurement.

---

## 2. Two Core Pillars of the Calibration Process

Calibration largely consists of two main processes: distance (timebase) calibration and sensitivity (amplitude) calibration.

### ① Distance Calibration (Timebase / Range Calibration)
* **Purpose**: Aligning the horizontal axis (X-axis) of the screen with actual physical distance.
* **Principle**: Transmitting ultrasound into a standard calibration block of a precisely known thickness and adjusting the position of the backwall echoes on the screen to match their actual thickness values (e.g., 25 mm, 50 mm). Through this process, the instrument back-calculates the exact sound velocity of the material and perfectly aligns the horizontal scale.

### ② Sensitivity Calibration (Sensitivity / Amplitude Calibration)
* **Purpose**: Setting the vertical axis (Y-axis), representing signal height, to a quantitative reference level.
* **Principle**: Due to material attenuation and differences in transducer performance, the echo height of the same size defect can vary from one instrument to another. To prevent this, the echo height from artificial reflectors (e.g., side-drilled holes of a specific diameter) machined inside the reference block is adjusted to a reference level (e.g., 80% of the screen height) to establish a standard sensitivity level in decibels (dB).

---

## 3. Types and Roles of Reference Blocks

Reference blocks are not just finely machined metal blocks; they are standard tools whose dimensions and material properties are strictly controlled by international standards (ISO, ASME, ASTM, etc.).

* **Standard Calibration Blocks (e.g., V1 Block, V2 Block)**
  * Blocks with geometries specified by international standards. They feature various curved surfaces and holes machined to calibrate the instrument's basic timebase zero point, measure sound velocity, and determine the transducer's entry point (index point) and refraction angle.
* **Reference Blocks**
  * Blocks specially fabricated from a material with the **same physical and chemical properties (sound velocity, attenuation, surface roughness, etc.)** as the actual component being inspected. Artificial flaws (such as flat-bottomed holes, side-drilled holes, etc.) of various sizes and depths are machined into these blocks, allowing inspectors to establish reference curves (such as a Distance Amplitude Curve - DAC) to quantitatively evaluate and size actual flaws found in the field.
