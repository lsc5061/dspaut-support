---
title: "UT vs PAUT — What are the Differences?"
publishDate: 2026-06-10
description: "This article outlines the technical differences, including beam generation, inspection speed, and imaging capabilities, between Conventional Ultrasonic Testing (UT) and Phased Array Ultrasonic Testing (PAUT), along with selection criteria in the field."
tags: ["UT", "PAUT", "Comparative Analysis"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 10
---

Conventional Ultrasonic Testing (UT) and Phased Array Ultrasonic Testing (PAUT) are based on the same ultrasonic principles, but they have fundamental differences in beam generation methods and inspection capabilities. This article summarizes the technical differences and field selection criteria of both techniques.

---

## 1. Common Foundation — Two Techniques Starting from the Same Roots

[cite_start]Both UT and PAUT share the pulse-echo principle, using piezoelectric elements to propagate ultrasound into the material and analyze echoes reflected from defects or the backwall[cite: 86]. [cite_start]The applied frequency range (0.5 to 25 MHz), defect detection mechanisms, and sound velocity-based depth calculation methods are also identical[cite: 87].

[cite_start]The difference between the two techniques starts with "how ultrasound is generated and controlled"[cite: 88].

* [cite_start]**Conventional UT**: The ultrasound principle works based on the fact that solid materials are good conductors of sound waves[cite: 89].
* [cite_start]**PAUT**: Multiple elements controlled by precisely calculated time-delay pulses generate data through constructive phase interference[cite: 90].

---

## 2. Key Difference — How the Beam is Controlled

### 2-1. Conventional UT: Single Element, Fixed Beam
[cite_start]A conventional UT probe consists of a single piezoelectric element[cite: 92]. [cite_start]When the element vibrates, an ultrasonic beam is emitted in a fixed direction[cite: 93]. [cite_start]To change the inspection angle, the probe must be physically moved or replaced with a probe of a different angle[cite: 94].
* [cite_start]**Beam Angle**: Fixed (determined by the wedge angle)[cite: 95]
* [cite_start]**Focal Depth**: Fixed (determined by element curvature or lens)[cite: 96]
* [cite_start]**Multi-Angle Inspection**: Probe replacement or physical movement is required[cite: 97]

### 2-2. PAUT: Multiple Elements, Electronic Beam Control
[cite_start]A PAUT probe consists of 16 to 128 or more independent elements[cite: 99]. [cite_start]Applying precisely calculated time delays to each element causes the spherical waves emitted from the elements to constructively interfere in a specific direction, forming a beam[cite: 99]. [cite_start]By switching this time-delay combination (focal law) in real-time via software, the beam can be steered and focused without moving the probe[cite: 100].
* [cite_start]**Beam Angle**: Continuously variable via software control (e.g., range of 40° to 70°, 1° intervals)[cite: 101]
* [cite_start]**Focal Depth**: Can be set independently for each focal law, allowing multiple focal points to be implemented simultaneously[cite: 102]
* [cite_start]**Multi-Angle Inspection**: Electronic sweeping (S-Scan) performed from a single position[cite: 103]

> **Key Analogy**
> [cite_start]UT is like using a single flashlight and moving it by hand to illuminate a room, while PAUT is like electronically controlling an LED array to focus the beam in a desired direction and distance[cite: 104].

---

## 3. Detailed Comparison by Technical Parameters

| Comparison Parameter | Conventional UT | PAUT | [cite_start]Advantage [cite: 107] |
| :--- | :--- | :--- | :--- |
| **Beam Generation** | [cite_start]Single piezoelectric element, fixed-direction emission [cite: 107] | [cite_start]Time delay applied to multiple elements, electronic beam forming [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Beam Steering** | [cite_start]Physical movement or angle-specific probe replacement [cite: 107] | [cite_start]Electronic sweeping (S-Scan), multi-angle inspection without movement [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Beam Focusing** | [cite_start]Fixed focus (lens or curved element) [cite: 107] | [cite_start]Variable focal depth configuration via software [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Probe Configuration** | [cite_start]Single element (Monolithic) [cite: 107] | [cite_start]Array of 16 to 128+ independent elements [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Inspection Speed** | [cite_start]Probe replacement by angle → multiple scans required [cite: 107] | [cite_start]Simultaneous multi-angle inspection with a single probe → fast [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Data Representation** | [cite_start]A-Scan waveform-oriented, highly dependent on operator skill [cite: 107] | [cite_start]Real-time S-Scan cross-sectional imaging, intuitive defect identification [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Defect Imaging** | [cite_start]B/C-Scan possible but complex setup [cite: 107] | [cite_start]Simultaneous display of A/B/C/S-Scan, rich imaging information [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Data Recording & Repeatability** | [cite_start]Manual recording, limited repeatability [cite: 107] | [cite_start]Digital storage of complete scan data, offline analysis possible [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Restricted Access Areas** | [cite_start]Difficult to change or manipulate probes under access restrictions [cite: 107] | [cite_start]Flexible response via software beam control [cite: 107] | [cite_start]PAUT [cite: 107] |
| **Equipment Cost** | [cite_start]Low cost, simple structure [cite: 107] | [cite_start]High cost, high hardware and software complexity [cite: 107] | [cite_start]Conventional UT [cite: 107] |
| **Operational Difficulty** | [cite_start]Relatively low, low training barrier to entry [cite: 107] | [cite_start]Specialized knowledge (e.g., focal law design) required [cite: 107] | [cite_start]Conventional UT [cite: 107] |
| **Maintenance** | [cite_start]Simple components, easy field maintenance [cite: 107] | [cite_start]Complex electronic circuitry, specialized technical support required [cite: 107] | [cite_start]Conventional UT [cite: 107] |
| **Applicable Standards** | [cite_start]Broad support for standards such as ASME, EN, KS, etc. [cite: 107] | [cite_start]Requires dedicated standards such as ASME Sec V, EN ISO 18563, etc. [cite: 107] | [cite_start]Conventional UT [cite: 107] |

---

## 4. Differences in Imaging Capabilities

### 4-1. Conventional UT Imaging
[cite_start]Conventional UT uses the A-scan waveform as its primary output[cite: 110]. [cite_start]While B-scan and C-scan are possible, they require physically raster scanning the probe and accumulating the A-scans at each position[cite: 110]. [cite_start]Defect analysis relies heavily on the operator's experienced interpretation of the waveform pattern[cite: 111].
* [cite_start]**A-Scan**: Single waveform providing depth and amplitude information[cite: 112]
* [cite_start]**B/C-Scan**: Can be accumulated after physical scans, but the setup configuration is complex[cite: 113]
* [cite_start]**Real-time Cross-sectional Image**: Impossible to implement (requires data reconstruction after probe movement)[cite: 114]

### 4-2. PAUT Imaging
[cite_start]PAUT displays A, B, C, and S-scans simultaneously in a single scan[cite: 116]. [cite_start]Specifically, the S-scan (Sectorial Scan) provides real-time cross-sectional images by mapping A-scans of various angles into a polar coordinate system[cite: 116]. [cite_start]This allows intuitive identification of the location, orientation, and size of defects, relatively reducing the dependency on the operator's experience[cite: 117].
* [cite_start]**S-Scan**: Provides real-time cross-sectional images with multi-angle sectorial views[cite: 118]
* [cite_start]**E-Scan**: Fixed-angle linear scan, utilized for fast, large-area inspections[cite: 119]
* [cite_start]**Offline Analysis**: Allows gate resetting and view switching after saving full scan data[cite: 120]

---

## 5. Inspection Speed and Coverage

[cite_start]For example, in weld inspections, conventional UT requires swapping probes (e.g., 45°, 60°, 70°) and scanning at least three times to cover the full thickness[cite: 122]. [cite_start]In contrast, PAUT scans the entire range of 40° to 70° at once with a single probe, achieving the same coverage much faster[cite: 123].

* [cite_start]**Conventional UT**: Inspection time including probe swap = (Number of angles) × (Time per scan)[cite: 124]
* [cite_start]**PAUT**: Inspection time ≈ Single-pass scan time (independent of the number of angles)[cite: 125]

[cite_start]In actual field applications, cases have been reported where PAUT reduces inspection time per meter of weld by 50% to 70% compared to conventional UT[cite: 126]. [cite_start]However, setup time (focal law design and calibration) can be longer for PAUT[cite: 127].

---

## 6. Cost and Operational Complexity

[cite_start]Although PAUT holds a technical advantage, conventional UT is more favorable in terms of cost and operational complexity[cite: 129].

### 6-1. Equipment Cost
* [cite_start]**Conventional UT Equipment**: Can be configured starting from portable devices costing a few thousand dollars[cite: 131]
* [cite_start]**PAUT Equipment**: Costs tens of thousands of dollars or more due to the integration of software, multi-channel pulsers, and A/D converters[cite: 132]
* [cite_start]**Probe Cost**: PAUT array probes are several to dozens of times more expensive than single-element probes[cite: 133]

### 6-2. Operational Expertise
* [cite_start]**Conventional UT**: Can be operated in the field with training equivalent to ASNT UT Level II[cite: 135]
* [cite_start]**PAUT**: Requires additional training in focal law design, S-scan interpretation, equipment calibration, etc.[cite: 136]
* [cite_start]**Standards Requirements**: Requires specialized qualifications and procedure validation for PAUT, such as ASME Sec V Article 4/14 and EN ISO 18563[cite: 137]

---

## 7. Field Application Selection Criteria

[cite_start]The two techniques are complementary rather than competitive[cite: 139]. [cite_start]The optimal method must be chosen based on the inspection target, required reliability, cost, and standards requirements[cite: 139].

| Scenario | Recommended Technique | [cite_start]Rationale [cite: 140] |
| :--- | :--- | :--- |
| **Simple geometries, low-volume testing** | Conventional UT | [cite_start]Low cost, fast setup [cite: 140] |
| **Thickness measurement, simple defect detection** | Conventional UT | [cite_start]A-scan provides sufficient information [cite: 140] |
| **Simple field testing, equipment portability is critical** | Conventional UT | [cite_start]Compact and lightweight equipment, easy battery operation [cite: 140] |
| **Full-coverage weld inspections** | PAUT | [cite_start]Multi-angle single-pass, ensuring speed and reliability [cite: 140] |
| **Complex geometries, restricted access areas** | PAUT | [cite_start]Flexible response via electronic beam steering [cite: 140] |
| **Defect imaging and quantitative evaluation required** | PAUT | [cite_start]Real-time S-scan cross-sections, supports offline analysis [cite: 140] |
| **High-safety inspection requirements (nuclear, aerospace)** | PAUT + ToFD | [cite_start]High reliability and coverage, meets standard requirements [cite: 140] |
| **High-attenuation materials (e.g., austenitic steel)** | PAUT (TRL) | [cite_start]Suppresses structural noise with TRL PA probes [cite: 140] |

---

## 8. Summary

1. [cite_start]**Identical Physical Principles**: Both techniques share the piezoelectric effect and pulse-echo mechanism[cite: 143].
2. [cite_start]**Key Difference lies in Beam Control**: Conventional UT uses a fixed beam, whereas PAUT achieves multi-angle inspections from a single position through electronic steering and focusing[cite: 144].
3. [cite_start]**Selection Criteria depend on Inspection Objectives**: Conventional UT is suitable for simple, low-cost inspections, while PAUT is ideal for high-speed, multi-angle, imaging-based, and highly reliable inspections[cite: 145].

[cite_start]PAUT does not replace conventional UT[cite: 146]. [cite_start]Rather, in the field, it is common practice to operate both techniques together, or to add ToFD to PAUT to complement defect detection and precision sizing[cite: 146].
