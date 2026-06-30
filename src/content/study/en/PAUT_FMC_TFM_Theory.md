---
title: "Full Matrix Capture (FMC) and Total Focusing Method (TFM)"
publishDate: 2026-06-30
description: "Examines the mathematical and digital signal principles of Full Matrix Capture (FMC) data acquisition and Total Focusing Method (TFM) pixel reconstruction algorithms."
tags: ["FMC", "TFM", "Phased Array", "Imaging", "NDT"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 14
---

This article details the advanced signal acquisition mechanics and mathematical reconstruction algorithms behind Full Matrix Capture (FMC) and the Total Focusing Method (TFM), which represent the state-of-the-art in phased array ultrasonic imaging.

---

## 1. Principles of Full Matrix Capture (FMC)

In standard phased array configurations, group elements are fired simultaneously with specific delay profiles to form a single synthesized beam along a defined angle or focus depth. While fast, this physical beamforming discards substantial spatial-acoustic information.

**Full Matrix Capture (FMC)** is an alternative data acquisition strategy that systematically records the complete ultrasonic propagation matrix across every individual transmit-receive element combination. 

### The FMC Acquisition Process
For a phased array probe containing $N$ elements:
1. **Element 1** is excited as a single transmitter. All $N$ elements in the array (Elements $1$ through $N$) receive the returning echoes simultaneously. The instrument records $N$ independent A-scan waveforms.
2. **Element 2** is then excited as a single transmitter, and all $N$ elements act as receivers, capturing another set of $N$ A-scans.
3. This sequence repeats sequentially up to **Element $N$**.

The resulting dataset is a raw matrix containing $N \times N$ individual A-scans (the FMC Matrix). 

$$\mathbf{M}(t) = \begin{bmatrix} 
A_{1,1}(t) & A_{1,2}(t) & \cdots & A_{1,N}(t) \\
A_{2,1}(t) & A_{2,2}(t) & \cdots & A_{2,N}(t) \\
\vdots & \vdots & \ddots & \vdots \\
A_{N,1}(t) & A_{N,2}(t) & \cdots & A_{N,N}(t) 
\end{bmatrix}$$

Where $A_{i,j}(t)$ represents the A-scan waveform where element $i$ transmitted the pulse and element $j$ received the echo. This matrix captures the total raw acoustic field data of the inspection zone, independent of any focal laws.

---

## 2. Total Focusing Method (TFM) Reconstruction Algorithm

The FMC matrix is a raw database that is not directly human-readable. The **Total Focusing Method (TFM)** is the post-processing algorithm that synthesizes these raw waveforms into a highly focused 2D cross-sectional image.

### Mathematical Formulation
The TFM algorithm discretizes the target examination area into a grid of discrete pixels. For each pixel $P(x, z)$ within the grid, the algorithm calculates the exact acoustic travel time from every transmitter $i$ to the pixel coordinate, and back to every receiver $j$.

Let:
- $d_{Tx, i}(P)$ be the distance from transmitter element $i$ to pixel $P(x, z)$.
- $d_{Rx, j}(P)$ be the distance from receiver element $j$ to pixel $P(x, z)$.
- $v$ be the acoustic velocity in the material.

The total round-trip travel time $t_{i,j}(P)$ for a wave traveling from element $i$ to pixel $P$ and back to element $j$ is defined as:

$$t_{i,j}(P) = \frac{d_{Tx, i}(P) + d_{Rx, j}(P)}{v}$$

The TFM engine extracts the amplitude value of the corresponding A-scan waveform $A_{i,j}$ at the exact time offset $t_{i,j}(P)$. The final intensity or amplitude $I(P)$ of the pixel $P$ is the summation of these extracted amplitudes across all transmit-receive combinations:

$$I(P) = \left| \sum_{i=1}^{N} \sum_{j=1}^{N} A_{i,j}(t_{i,j}(P)) \right|$$

By computing this summation for every pixel in the grid, the TFM reconstructs a unified cross-sectional image of the test object.

---

## 3. Advantages of FMC/TFM over Standard PAUT

The mathematical synthesis of TFM yields significant physical improvements in NDT inspections:
- **Synthetic Focusing Throughout the Zone:** Unlike standard PAUT which focuses at a single depth, TFM behaves as if the acoustic beam is focused at every individual pixel coordinate across the entire image area.
- **Enhanced Spatial Resolution:** The summation of $N^2$ signals significantly increases the signal-to-noise ratio (SNR) and allows the separation of closely spaced flaws.
- **Characterization of Complex Geometry:** Because raw data is preserved, TFM can calculate complex multi-mode wave paths (such as shear waves reflecting off the backwall before hitting the flaw) to construct images in highly complex geometric areas.
