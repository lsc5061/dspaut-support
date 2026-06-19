---
title: "PAUT Defect Sizing Techniques"
publishDate: 2026-06-10
description: "This article summarizes the representative sizing techniques (6dB Drop, TOFD, Tip Diffraction, etc.) used to evaluate the length, height, and depth of defects in NDT and PAUT environments."
tags: ["Defect Sizing", "Sizing", "TOFD", "6dB Drop"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 12
---

## 1. Why Defect Sizing is Important
* **Defect Detection vs. Sizing**
    * **Detection**: The process of identifying the presence of a defect.
    * **Sizing**: The task of quantitatively evaluating the defect's length, through-wall height, and depth.
* **Key Input Parameter**: Defect size is utilized as key data for Fitness for Service (FFS) evaluation, acceptance criteria assessment, and crack growth rate prediction of structures. Without accurate sizing, it is impossible to determine whether repair or replacement is required.

### Definition of Key Sizing Parameters
* **Defect Length**: The physical extent of the defect along the probe scanning direction.
* **Defect Height (Through-wall Height)**: The vertical size of the defect in the thickness direction (the most critical parameter for determining remaining wall thickness).
* **Defect Depth**: The distance from the inspection surface to the top of the defect.

> **NDT A-Z (Ed Ginzel):**
> "Flaw sizing is critical to engineering evaluations to assess wear limits, crack growth rates and fitness of purpose criteria. Accuracy required is not always possible and each technique has its advantages and disadvantages."

---

## 2. AVG / DGS — Amplitude Comparison Method

### 2-1. Principle
* **AVG/DGS (DGS - Distance Gain Size)** estimates the **equivalent reflector size (ERS)** of a defect by comparing its echo amplitude with that of a flat bottom hole (FBH) reference reflector at the same depth/distance.
* The baseline amplitude for each distance is set using the probe manufacturer's DGS curves or the instrument's built-in AVG function, and the size is calculated by analyzing the dB difference of the defect echo.

### 2-2. Advantages and Disadvantages
* **Advantages**: Allows sizing estimation from a single position without moving the probe, facilitating rapid go/no-go (accept/reject) decisions with standard equipment.
* **Disadvantages**: Does not directly provide vertical height information of the defect, and is highly sensitive to defect orientation and surface condition. Low-reflectivity defects like cracks can be underestimated.
* **Applicability Limits**: While relatively effective for spherical defects like porosity and inclusions, it has limitations with linear defects such as cracks; reflectivity drops sharply if the beam direction is not perpendicular to the defect face.

---

## 3. 6 dB Drop — Half-Amplitude Method

### 3-1. Principle
* The defect size is defined as the distance between two probe positions where the defect echo amplitude drops to **half of its maximum value (-6 dB)**.
* The -6 dB point corresponds to when the central axis of the beam is positioned at the edge of the defect.
* Sizing is measured by moving the probe to track A-scan amplitude variations and recording the two points where the signal drops by 6 dB relative to the peak position.

$$\text{Defect Size} \approx \text{Probe Travel Distance (between the two points where echo amplitude drops by 6 dB)}$$

### 3-2. Application Conditions
* Valid only when the defect is larger than the beam width. If the defect is smaller than the beam width, the amplitude variation during probe movement will reflect the beam width rather than the defect size.
* **Probe Scanning Direction**: For measuring defect length, the probe moves in the scan direction. However, to measure vertical height, beam angle variation or concurrent TOFD application is required.

### 3-3. Advantages and Disadvantages
* **Advantages**: The procedure is simple, easy to implement with standard equipment, and readily applicable to automated systems.
* **Disadvantages**: Dependent on the beam width, so accuracy varies with frequency and focal configuration. Errors increase for small defects at greater depths, and it cannot be directly applied for vertical height measurement.
* **PAUT Application**: Since PAUT can narrow the beam width using focused beams, the sizing accuracy is significantly improved when applying the 6 dB Drop method. In particular, combining it with E-scans increases the consistency of defect length measurement.

---

## 4. Tip Diffraction / Satellite Pulse Method

### 4-1. Principle
* When ultrasound is incident on the tip of a linear defect like a crack, a **diffracted wave** is generated radiating in all directions. The defect height is measured using the **Time of Flight (TOF) difference** of this diffracted wave.
* The weak satellite pulse (s) following the main reflected echo (R) in time is the diffracted wave, and the defect depth is calculated using the time difference ($\Delta t$) between the two signals.

$$\text{Defect Height } h = f(\Delta t, \text{sound velocity}, \text{beam angle})$$

* For surface-breaking cracks, diffracted waves are generated from both the root (bottom) and the tip (top), allowing direct measurement of defect height using the $\Delta t$ between the two signals.

### 4-2. Application Conditions and Characteristics
* **Amplitude-Independent**: Since it only utilizes the time of flight of diffracted waves, it is less affected by defect orientation or surface condition.
* **Optimal Angle**: The accuracy is highest with a $40^\circ \text{ to } 50^\circ$ shear wave probe. As the angle approaches the horizontal plane, the $\Delta t$ between the tip and root decreases, making measurement difficult.
* **Signal Strength**: Because diffracted waves carry much lower energy than reflected waves, securing a good signal-to-noise ratio (SNR) is critical.

### 4-3. Advantages and Disadvantages
* **Advantages**: Can be implemented with standard UT equipment, is robust against defect orientation due to amplitude independence, and directly measures defect height.
* **Disadvantages**: High-sensitivity setup is essential because diffracted signals are weak. It is not effective at all angles, and rough defect surfaces can scatter the signal.

---

## 5. TOFD (Time of Flight Diffraction)

### 5-1. Principle
* A systematic technique based on the tip diffraction principle, positioning a transmitter probe and a receiver probe on opposite sides of the defect to precisely measure defect height using the time of flight difference ($\Delta t$) of diffracted waves from the upper and lower tips.
    * **Lateral Wave**: The wave traveling directly along the surface (used as reference time $t_0$).
    * **Upper Tip Diffracted Wave**: Generated at the top edge of the defect (arrival time $t_1$).
    * **Lower Tip Diffracted Wave**: Generated at the bottom edge of the defect (arrival time $t_2$).
    * **Backwall Echo**: The wave reflected from the backwall (used to verify if the defect penetrates the wall).

$$\text{Defect Height} = \frac{v}{2} \times (t_2 - t_1) \quad (\text{v: sound velocity in material})$$

### 5-2. Characteristics and Limitations of TOFD
* **Characteristics**: Enables defect detection and sizing across the entire thickness range in a single pass. It minimizes the effect of defect orientation due to amplitude independence and shows high vertical sizing accuracy (typically within $\pm 1 \text{ mm}$). Data is recorded based on B-scans, permitting offline analysis.
* **Limitations**: Near the scanning surface (dead zone), the lateral wave overlaps with the upper tip diffracted wave, making it difficult to detect shallow defects; similarly, the backwall echo can overlap with the lower tip diffracted wave near the backwall. Additionally, the intensity of diffracted waves decreases for tilted defects that are not perpendicular to the beam.

> **Field Tip**: Because of its high sizing accuracy, TOFD is applied alongside PAUT in high-safety inspections such as nuclear and pressure vessel examinations. The combination of detecting defects with PAUT and precisely sizing their height with TOFD is highly effective.

---

## 6. Zonal Method

### 6-1. Principle
* The test object thickness is divided into multiple zones, and focused beams are positioned in each zone to estimate the vertical size based on how many zones the defect spans.
* *Example*: If a $10 \text{ mm}$ thick weld is divided into 5 zones ($2 \text{ mm}$ each) and a defect is detected in 2 zones, the upper limit of the vertical size is estimated to be up to $4 \text{ mm}$.
* When combined with the focused beam (focal law) capabilities of PAUT, the entire range of zones can be inspected simultaneously with a single probe, making it advantageous for high-speed automated inspections.

$$\text{Estimated Upper Limit of Vertical Size} = \text{Number of Detected Zones} \times \text{Zone Thickness}$$

### 6-2. Advantages and Disadvantages
* **Advantages**: Optimized for automated weld inspection, offering extremely fast inspection speeds.
* **Disadvantages**: The sizing resolution is limited by the configured zone size unit, and specialized focusing probes or PAUT equipment are required. Because it is amplitude-based, it is sensitive to defect orientation.

---

## 7. Comprehensive Comparison of Defect Sizing Techniques

| Technique | Underlying Principle | Advantages | Disadvantages / Limitations | Accuracy |
| :--- | :--- | :--- | :--- | :--- |
| **AVG (DGS)** | Amplitude comparison | Simple go/no-go decisions, applicable to various geometries | No vertical height information, sensitive to orientation | Medium |
| **6 dB Drop** | Amplitude reduction by half | Implemented with standard equipment, simple procedure | Dependent on beam width, larger errors for small/deep defects | Medium |
| **TOFD** | Diffraction time of flight | Single-pass full-thickness coverage, amplitude-independent, highly accurate | Requires dual-side access or complex single-side setup, B-scan required | High |
| **Tip Diffraction** | Diffracted signal $\Delta T$ | Standard equipment can be used, amplitude-independent | Weak signal, not effective at all angles | High |
| **Satellite Pulse** | Diffracted satellite signal | Implemented with standard equipment, applicable to volumetric & linear defects | Angle limitations (favorable at $40^\circ \sim 50^\circ$), weak signal | Medium |
| **Zonal Method** | Focused beam zones | Optimized for automated testing, highly effective combined with PAUT | Expensive focused probes, sizing resolution limited to zone size | Medium to High |
| **Multi-Modal** | Multiple modes | Fast and accurate, amplitude-independent | Expensive specialized probes, limited techniques | High |

---

## 8. Selection Criteria by Inspection Conditions

| Inspection Condition | Recommended Technique | Rationale for Selection |
| :--- | :--- | :--- |
| **Large defects, focus on accept/reject decisions** | AVG (DGS) | Optimal for simple and fast go/no-go decisions |
| **Weld defect height (vertical sizing) measurement** | TOFD or Tip Diffraction | Amplitude-independent, high vertical sizing accuracy |
| **High-speed testing combined with PAUT S-scans** | 6 dB Drop + Zonal Method | Combined with PAUT focused beams to estimate size by thickness zone |
| **Single-side access inspections** | TOFD (Single-side access) | Dual-direction beam operation possible from one surface |
| **Small defects requiring precise evaluation** | Tip Diffraction or Multi-Modal | Amplitude-independent, directly utilizes crack-tip diffraction signals |
| **Automated weld inspection lines** | Zonal Method (PAUT focused) | Suitable for simultaneous inspection of multiple zones and high-speed processing |

---

## 9. Practical Defect Sizing in PAUT Environments
* **6 dB Drop + S-Scan**: Defect length is measured from the individual A-scans of the S-scan, achieving improved accuracy based on high angular resolution.
* **Zonal + E-Scan**: High-speed automated inspections are performed by using the focal zones of each focal law as independent zones.
* **Concurrent PAUT + TOFD**: A high-safety standard combination where PAUT is used to screen defect locations and lengths, followed by TOFD to precisely verify vertical heights.
* **Offline Post-Processing**: After saving full raw data, it is possible to perform post-test gate resetting, switch sizing techniques, and compare/analyze multiple sizing measurements.

> **Three Elements for Ensuring Reliability**:
> The reliability of defect sizing is ultimately determined by **transducer calibration**, **reference block configuration**, and **operator qualification**. Even the most precise technique is useless without proper calibration first.

---
*SEONGSANLAB | Study Series — NDT Basics*
