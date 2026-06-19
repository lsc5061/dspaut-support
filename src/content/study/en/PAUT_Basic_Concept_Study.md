---
title: "Basic Concepts of Phased Array Ultrasonic Testing (PAUT)"
publishDate: 2026-06-10
description: "Summarizes the principles, components, scan modes, and advantages over conventional UT of PAUT, which implements beam steering and focusing through electronic control of multiple piezoelectric elements."
tags: ["PAUT", "Phased Array", "Beam Steering"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 8
---

This document summarizes the principles, components, scan modes, and advantages over conventional UT of Phased Array Ultrasonic Testing (PAUT), which controls multiple piezoelectric elements electronically to achieve beam steering and focusing.

---

## 1. What is PAUT?

Phased Array Ultrasonic Testing (PAUT) is an advanced Ultrasonic Testing (UT) technique that electronically forms, steers, and focuses ultrasonic beams by applying precisely calculated time delays to multiple piezoelectric elements [cite: 153]. Unlike conventional monolithic UT, which transmits beams in a fixed direction, PAUT allows software control of beam angles, focal depths, and scan directions without physically moving or replacing the probe [cite: 154].

In the term, 'Phased' refers to time delay (phase control), and 'Array' refers to the arrangement of multiple elements [cite: 155]. In other words, it is a process where multiple elements controlled by precise time-delay pulses create constructive phase interference to generate UT data [cite: 156].

---

## 2. Principle of Operation

### 2-1. Phase Control and Beamforming
By applying different time delays to each element, the spherical waves emitted from individual elements undergo constructive interference in a specific direction [cite: 159]. The direction in which this constructive interference is concentrated becomes the propagation direction of the beam [cite: 160].
* **Beam Steering**: Progressively increasing the delay time starting from the first element tilts the beam to one side [cite: 161].
* **Beam Focusing**: Firing the outer elements first and the central elements last causes the beam to converge at a specific depth [cite: 162].

### 2-2. Focal Law
The combination of firing time delays for each element is called a Focal Law [cite: 163]. A single Focal Law defines one beam angle and focal depth, and the PAUT system sequentially executes dozens to hundreds of Focal Laws to collect data at various angles and depths in a single scan [cite: 164].
* **Example of Focal Law Count Calculation**: Inspection Angle Range / Angular Resolution (e.g., 40° to 70° at 1° intervals $\rightarrow$ 31 Focal Laws) [cite: 165]
* An independent A-scan is generated for each Focal Law, and these are combined to form a real-time S-scan image [cite: 166].

### 2-3. Time Delay Calculation
To steer the beam at a specific angle $\theta$, the time delay ($\Delta t_n$) for the $n$-th element is calculated using the following formula [cite: 168]:

$$\Delta t_n = \frac{n \times p \times \sin \theta}{v}$$

* $p$: Element Pitch [cite: 170]
* $\theta$: Target Beam Angle [cite: 170]
* $v$: Sound Velocity in the Material [cite: 170]
* $n$: Element Number ($0, 1, 2, \dots$) [cite: 170]

---

## 3. Probe Configuration

A PAUT probe consists of multiple piezoelectric elements, each individually wired, with acoustic isolation applied between elements, and connected to independent pulsers, multiplexers, and A/D converters [cite: 172].

| Parameter | Content | Remarks |
| :--- | :--- | :--- |
| **Number of Elements** | 16 / 32 / 64 / 128 or more | More elements improve resolution and focusing performance [cite: 173] |
| **Element Pitch** | Distance between the centers of adjacent elements | Smaller pitch suppresses grating lobes, improving beam quality [cite: 173] |
| **Active Aperture** | Total width of the active element group | A larger aperture improves ultrasonic focusing performance [cite: 173] |
| **Wedge** | Coupling medium between the probe and test object | Optimizes refraction angle and prevents probe wear [cite: 173], governed by Snell's Law [cite: 174] |
| **TRL PA Probe** | Transmit-Receive Longitudinal Phased Array configuration | Advantageous for inspecting highly attenuating materials like austenitic steel [cite: 173] |

---

## 4. Scan Modes

The PAUT system realizes various scan modes by combining element activation methods and probe movement styles [cite: 177].

| Scan Mode | Designation | Operating Method | Primary Application |
| :--- | :--- | :--- | :--- |
| **S-Scan** | Sectorial (Angular) Scan | Electronically sweeps angles to generate a sector-shaped cross-sectional image [cite: 178] | Weld cross-section inspection, complex geometries [cite: 178] |
| **E-Scan** | Electronic (Linear) Scan | Performs linear scanning by sequentially moving element groups at a fixed angle [cite: 178] | High-speed large-area inspection of pipes and plates [cite: 178] |
| **D-Scan** | Depth Scan | Moves the focal point in the depth direction using specific element combinations [cite: 178] | Detecting deep defects in thick materials [cite: 178] |
| **C-Scan** | Planar Scan | Maps planar echo distribution across the entire area via XY raster scanning [cite: 178] | Delamination in composites, large-area mapping [cite: 178] |

### 4-1. S-Scan (Sectorial Scan) Details
An S-Scan is a representative mode that electronically sweeps the beam angle by sequentially switching Focal Laws while using the same active element group (aperture) [cite: 179, 180].
* It arranges the A-scan data of each angle in polar coordinates to generate a sector-shaped 2D cross-sectional image in real time [cite: 181, 183].
* It can simultaneously detect weld root, sidewall, and cap defects from a single probe position [cite: 184].

### 4-2. E-Scan (Electronic Scan) Details
An E-Scan is a method that fixes the beam angle and sequentially shifts (multiplexes) the active element group (active aperture) along the array direction of the probe [cite: 185, 186].
* It allows linear scanning without physically moving the probe, making it suitable for high-speed inspections [cite: 187, 188].
* It achieves both scan resolution and speed through the virtual aperture translation effect [cite: 189].

---

## 5. Advantages of PAUT Compared to Conventional UT

| Parameter | Conventional UT | PAUT |
| :--- | :--- | :--- |
| **Beam Generation** | Single-element fixed-angle transmission and reception [cite: 191] | Beamforming via electronic time-delay control of multiple elements [cite: 191] |
| **Beam Steering** | Requires physical movement or replacement of probes [cite: 191] | Electronic beam sweeping (S-scan, E-scan) [cite: 191] |
| **Focusing** | Fixed focus (lens or curved element) [cite: 191] | Variable focal depth adjustable via software [cite: 191] |
| **Inspection Speed** | Slow due to probe changes for different angles [cite: 191] | Fast, allowing simultaneous multi-angle inspection with a single probe [cite: 191] |
| **Imaging** | Primarily A-scan, highly dependent on operator interpretation [cite: 191] | Intuitive defect verification with real-time 2D S-scan images [cite: 191] |
| **Data Recording** | Manual recording, limited repeatability [cite: 191] | Digital storage of entire scan data and offline analysis [cite: 191] |
| **Application Limits** | Difficult to apply on complex shapes and restricted-access areas [cite: 191] | Flexible response in restricted-access areas and complex geometries [cite: 191] |

---

## 6. Primary Application Areas

PAUT shows particular strengths in industrial environments requiring inspections in restricted-access areas, complex geometries, and at high speeds [cite: 193].
* Complete weld inspection (single-scan coverage of root, sidewall, and cap defects) [cite: 194]
* Pipeline corrosion mapping and remaining wall thickness evaluation [cite: 195]
* High-speed scanning for internal defects in forgings and castings [cite: 196]
* Delamination detection in composite materials (CFRP) [cite: 197]
* Inspection of nuclear RPV (Reactor Pressure Vessel) nozzles and welds [cite: 198]
* Fatigue crack monitoring in aircraft structures [cite: 199]
* Restricted-access areas (offshore plant piping, bridge steel structures, etc.) [cite: 200]

---

## 7. Limitations and Considerations of PAUT

* **Equipment Complexity and Cost**: Compared to single-element UT, the hardware and software complexity is higher, and the initial investment cost is relatively large [cite: 202].
* **Expertise in Focal Law Design**: Professional knowledge is required, as the design of Focal Laws optimized for the material and geometry under inspection determines the inspection quality [cite: 203].
* **Grain Noise**: Scattering noise (structural noise) increases in coarse-grained materials such as austenitic steel, making the application of TRL PA probes recommended [cite: 204].
* **Regulatory Qualification Requirements**: Standards such as EN ISO 18563 and ASME Section V require qualification and verification of PAUT operators and procedures [cite: 205].
