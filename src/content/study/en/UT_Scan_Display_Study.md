---
title: "UT Data Representation: A-Scan, B-Scan, and C-Scan"
publishDate: 2026-06-10
description: "Summarizes the principles, structures, and applications of the three scan visualization methods for data collected by Ultrasonic Testing (UT) equipment from an engineer's perspective."
tags: ["Scan Modes", "A-scan", "B-scan", "C-scan"]
category: "2. Data Visualization & Scan Interpretation"
order: 4
---

This article summarizes the principles, structures, and applications of the three scanning methods used to visualize data collected by Ultrasonic Testing (UT) equipment from an engineer's perspective.

---

## 1. Overview of Scan Modes

UT equipment visualizes echo signals received by the transducer in three formats—A-scan, B-scan, and C-scan—based on the coordinate axes configuration and how data is accumulated [cite: 259]. These three modes are not mutually exclusive; in PAUT systems, it is common to display A, B, and C-scans simultaneously from the same dataset [cite: 260].

* **Core Relationship**: B-scans and C-scans are constructed by spatially accumulating and reconstructing A-scan data [cite: 261]. Thus, the quality of the raw A-scan data determines the reliability of all higher-level representations [cite: 261].

---

## 2. A-Scan

### 2-1. Definition
A one-dimensional waveform plot representing the received echo signal amplitude on the Y-axis and the ultrasonic pulse travel time (Time of Flight, ToF) on the X-axis [cite: 264]. It is the most fundamental representation of UT data, captured at a single position of the transducer [cite: 265].

### 2-2. Axis Configuration and Interpretation
* **X-axis (Horizontal)**: Ultrasonic propagation time $\rightarrow$ converted to depth (mm) using the material's sound velocity [cite: 267]
* **Y-axis (Vertical)**: Echo signal amplitude $\rightarrow$ used for estimating reflector size and reflectivity strength [cite: 268]
* **Peak**: Echoes generated from individual reflective interfaces (defects, backwall, etc.) [cite: 269]. Peak location determines the depth, while peak height indicates reflection intensity [cite: 269].

### 2-3. Depth Calculation

$$\text{Defect Depth} = \frac{\text{Time of Flight} \times \text{Sound Velocity}}{2}$$

* Sound velocity in steel: approx. $5,900 \text{ m/s}$ for longitudinal waves / approx. $3,230 \text{ m/s}$ for shear waves [cite: 272].
* Accurate calculations require precise sound velocity calibration for the specific material [cite: 272].

### 2-4. Key Gate Configuration
In an A-scan, a gate is positioned over a specific time range so that only echoes within that interval are evaluated [cite: 274]. Event marks in B-scan and C-scan are generated based on the echoes within this gate [cite: 274].
* **Gate Start & Width**: Defines the inspection depth range [cite: 275]
* **Threshold**: The reference amplitude level used to distinguish noise from actual defect echoes [cite: 276]
* **Evaluation Method**: ① Simple threshold exceedance (go/no-go or 0/1 binary), ② color or grayscale representation proportional to amplitude [cite: 277]

### 2-5. Application Context
* Used as the primary display for real-time waveform monitoring in manual field inspection [cite: 279].
* Utilized as the reference waveform when establishing sensitivity calibration curves (DAC, TCG, etc.) [cite: 280].
* In PAUT, an independent A-scan is generated for each focal law [cite: 281].

---

## 3. B-Scan

### 3-1. Definition
A two-dimensional graphic presentation in a rectangular coordinate system, displaying a cross-sectional view of the test specimen by combining the transducer travel direction (X-axis) with the ultrasound propagation time or depth (Y-axis) [cite: 284]. As the transducer moves along a scan line, A-scan data at successive positions are accumulated sequentially to construct the cross-sectional image [cite: 285].

### 3-2. Axis Configuration
* **X-axis**: Transducer travel distance (scan direction) $\rightarrow$ position along the length of the test specimen [cite: 287]
* **Y-axis**: Ultrasonic travel time $\rightarrow$ defect depth within the material [cite: 288]
* **Event Mark**: Displays echoes within the gate at each X position as 0/1 binary marks or color-coded values proportional to amplitude [cite: 289]

### 3-3. Event Representation Methods
Each pixel (event mark) in a B-scan represents the echo inside the A-scan gate at that specific transducer position using one of two methods [cite: 291].
* **0/1 (Binary) Method**: A mark is plotted if the echo inside the gate exceeds the threshold; otherwise, it remains blank [cite: 292]. This method is suitable for simple go/no-go evaluations [cite: 292].
* **Amplitude Proportional Method**: Represents the echo amplitude using a color palette (or grayscale), which is advantageous for evaluating the distribution of reflectivity strength [cite: 293].

### 3-4. Key Applications
* Determining the cross-sectional location of root, sidewall, or cap defects in welds [cite: 295]
* Estimating the through-wall height of defects [cite: 296]
* Combining with PAUT S-scans (sectorial scans) to obtain multi-angle cross-sectional views [cite: 297]
* Profiling pipe wall thickness distribution [cite: 298]

### 3-5. Limitations
A B-scan only provides a 2D cross-section along the transducer path and depth [cite: 300]. It does not contain information along the width direction (perpendicular to the scan path); therefore, a C-scan is required to evaluate the planar area of defects [cite: 300].

---

## 4. C-Scan

### 4-1. Definition
A two-dimensional plan view (top view) displaying defect echoes relative to the surface of the test specimen [cite: 303]. It is generated by raster scanning the transducer along two axes (X and Y) and mapping the gated echo information to the planar coordinates [cite: 304]. It can be understood as a defect distribution map looking down from above the specimen [cite: 305].

### 4-2. Axis Configuration
* **X-axis**: Transducer travel direction 1 (scan/index axis) [cite: 307]
* **Y-axis**: Transducer travel direction 2 (perpendicular axis, raster/step axis) [cite: 308]
* **Pixel Value**: Gated echo amplitude or Time of Flight (ToF) $\rightarrow$ represented as a color map [cite: 309]

### 4-3. Event Representation Methods
The same two methods as B-scan are applied [cite: 311].
* **0/1 (Binary) Method**: Plots marks where the threshold is exceeded to map the distribution of defect presence [cite: 312]
* **Amplitude Proportional Method**: Displays the amplitude levels with a color palette to visualize the reflectivity strength distribution [cite: 313]

### 4-4. Depth Information and D-Scan
A standard C-scan plots only the peak amplitude within the gate and does not inherently contain depth information [cite: 315]. To display depth details, a D-scan is used, which maps the Time of Flight (ToF) of the gated echo to color values [cite: 316].

In modern digital UT systems, data digitization and storage allow post-processing to easily switch between C-scan and D-scan views from the same dataset, or to generate multiple C-scans for distinct depth intervals (gates) [cite: 317].

### 4-5. Applied Techniques
* **Pulse-Echo Technique**: Applied when only single-sided access is available [cite: 319].
* **Through-Transmission Technique**: Transmitter and receiver transducers are placed on opposite sides, which is highly effective for detecting internal delamination in composites [cite: 320].

### 4-6. Key Applications
* Assessing delamination distribution in composites (CFRP, GFRP) [cite: 322]
* Mapping results from large-area automated scanning systems (immersion tanks, squirters) [cite: 323]
* Quantifying defect area and generating accept/reject maps [cite: 324]
* Visualizing overall corrosion distribution (remaining wall thickness mapping) [cite: 325]

---

## 5. Comparison of A-Scan, B-Scan, and C-Scan

| Scan Type | Format | Content Displayed | Axis Configuration | Key Applications |
| :--- | :--- | :--- | :--- | :--- |
| **A-Scan** | 1D Waveform Graph [cite: 327] | Echo Amplitude + Time of Flight [cite: 327] | X: Time (Depth) / Y: Amplitude [cite: 327] | Manual field inspection, calibration [cite: 327] |
| **B-Scan** | 2D Cross-sectional Image [cite: 327] | Transducer Path $\times$ Depth [cite: 327] | X: Scan Distance / Y: Depth [cite: 327] | Weld cross-sectional inspection [cite: 327] |
| **C-Scan** | 2D Plan View (Top View) [cite: 327] | Defect distribution from top view [cite: 327] | X: Scan Axis / Y: Step Axis [cite: 327] | Composite materials, large-area automated scanning [cite: 327] |

---

## 6. Application in PAUT Systems

PAUT (Phased Array Ultrasonic Testing) systems typically display A, B, and C-scans simultaneously from a single scan dataset, often complemented by an S-scan (Sectorial Scan, a fan-shaped cross-sectional view over a range of angles) [cite: 329].
* **A-Scan**: Monitors signal quality by displaying real-time waveforms for the selected focal law (element combination) [cite: 330].
* **B-Scan**: Uses the cross-sectional view along the scan path to locate root or sidewall lack of fusion in welds [cite: 331].
* **C-Scan**: Illustrates the echo amplitude distribution across the entire scanned area to verify inspection coverage and report defect distribution [cite: 332].
* **S-Scan**: Displays multi-angle A-scans in a fan-shaped coordinate view, which is advantageous for obtaining cross-sectional images of complex weld geometries [cite: 333].

After completing a scan, stored PAUT data can undergo offline post-processing to adjust gates, switch views, and measure defect sizes [cite: 334]. This capability is one of the key advantages of PAUT over conventional single-crystal UT [cite: 335].
