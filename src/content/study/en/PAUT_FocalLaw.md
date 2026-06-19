---
title: "PAUT Focal Law — Principles, Components, and Design Methods"
publishDate: 2026-06-10
description: "This article explains the principles and practical design methods of Focal Laws, which are sets of time-delay parameters that determine the beam steering and focusing performance of PAUT equipment."
tags: ["PAUT", "Focal Law", "Time Delay"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 11
---

## 1. What is a Focal Law?
* A **Focal Law** is a set of **time delays** and control parameters applied to each element in an array by PAUT equipment to steer the ultrasonic beam in a specific direction and focus it at a specific depth.
* A single focal law defines a unique beam state (angle + focal depth).
* The PAUT system sequentially executes dozens to hundreds of focal laws in microseconds ($\mu\text{s}$) to collect large amounts of multi-angle data within a single scan.
    * *S-Scan Example*: When sweeping a range of $40^\circ$ to $70^\circ$ at $1^\circ$ intervals, a total of 31 focal laws are executed sequentially, and each individual A-scan is combined to form a sectorial cross-sectional image.

> **PAUT Glossary (ndt.net):**
> "Focal Law — Strictly, a mathematical formula used for firing the phased array instrument. More generally, a file containing the entire set of hardware and software parameters for phased array operation, which defines the elements to be fired, time delays, voltages, for both the transmitter and receiver functions."

---

## 2. Beam Forming Principle — Phase Control and Constructive Interference

### 2-1. Spherical Waves and Constructive Interference
* Individual elements emit independent spherical waves and have no directional characteristics on their own.
* By precisely controlling the excitation time of each element so that all spherical waves arrive at a specific point in space simultaneously, **constructive interference** occurs at that point, causing energy to converge. This path becomes the propagation direction of the ultrasonic beam.

### 2-2. Beam Steering
* Linearly increasing the time delay along the array direction tilts the wavefront, steering the beam to the desired target angle.

$$\Delta t_n(\text{steering}) = \frac{n \times p \times \sin \theta}{v}$$

($n$: element number, $p$: element pitch, $\theta$: target beam angle, $v$: sound velocity in the wedge or test object)

### 2-3. Beam Focusing
* By firing the outer elements first and the central elements last, a focusing effect is achieved where the emitted waves converge simultaneously at a specific depth.

$$\Delta t_n(\text{focusing}) = \frac{F - \sqrt{F^2 + (n \times p - A/2)^2}}{v}$$

($F$: focal depth, $A$: total width of the active aperture, $n \times p$: spatial position of the $n$-th element)
* In actual field environments, the focal law is applied as a combined time delay value where both steering and focusing algorithms are computed simultaneously.

### 2-4. Wedge Correction
* Since the ultrasound propagates through the dissimilar interfaces of probe $\rightarrow$ wedge $\rightarrow$ test object, a time correction reflecting refraction according to Snell's law and the sound velocity in the wedge must be added.
* Incorrect input of wedge parameters (velocity, angle, height) leads to critical errors in the actual beam angle and focal depth. Therefore, calibration using a reference reflector is essential.

---

## 3. Focal Law Configuration Parameters

| Parameter | Definition | Role and Explanation |
| :--- | :--- | :--- |
| **Active Aperture** | Group of elements driven simultaneously | Determines which elements are grouped together. The number of elements (aperture size) directly affects the beam width and focusing performance. |
| **Time Delay ($\Delta t$)** | Transmit delay time for each element | A key parameter of the focal law that controls the wavefront steering angle and focal position by applying different delay times to each element. |
| **Beam Angle ($\theta$)** | Target refracted angle in the test object | Set via Snell's law and delay calculations. During S-scan operation, a different angle is assigned to each focal law. |
| **Focal Depth** | Depth in the test object where the beam converges | Formed by time-staggered firing of outer and center elements. The delay combination varies depending on the configured depth. |
| **Voltage** | Driving voltage of each element | Side lobes can be suppressed by setting amplitude weighting (apodization) for each element; in general environments, uniform voltage is applied. |
| **Rx Delay** | Time delay for aligning received signals | Applies the same delay principle as transmission to return signals to sum them up (beamforming), utilized in dynamic focusing techniques. |

---

## 4. Focal Law Configurations by Scan Mode

| Scan Mode | Focal Law Configuration | Element Group Shifting Method | Main Applications |
| :--- | :--- | :--- | :--- |
| **S-Scan**<br>(Sectorial) | One per angle<br>(fixed element group) | The element group remains fixed, and only $\Delta t$ of each focal law is changed to sweep through angles. | Weld cross-section inspection, complex geometry inspection |
| **E-Scan**<br>(Electronic) | Fixed angle<br>(moving element group) | The element group is sequentially shifted (multiplexed) element-by-element while maintaining the same $\Delta t$ pattern. | Piping and plate large-area linear scanning |
| **D-Scan**<br>(Depth) | Fixed angle<br>(changing focal depth) | The element group remains fixed, and only the focal depth parameters are sequentially changed. | Deep focused inspection of thick components |
| **Compound** | Combination of angle + element shifting | Combines S-scan and E-scan methods to cover both area and angle simultaneously. | Ensuring full coverage of complex geometry structures |

### 4-1. Detailed Characteristics of S-Scan & E-Scan
* **S-Scan (Sectorial Scan)**: The angular step (angular resolution) between adjacent focal laws is typically $0.5^\circ \text{ to } 1^\circ$. The acquired A-scan data is mapped onto a polar coordinate system to generate real-time sectorial cross-sectional images.
* **E-Scan (Electronic Scan)**: A linear scan effect is obtained without physically moving the probe through a virtual probe shifting mechanism (e.g., multiplexing active elements sequentially like 1-32, 2-33).

---

## 5. Relationship Between the Number of Focal Laws and PRF (Pulse Repetition Frequency)

### 5-1. Examples of Calculating the Number of Focal Laws by Scan Configuration

| Scan Configuration | Range | Resolution | Number of Focal Laws |
| :--- | :--- | :--- | :--- |
| **S-Scan (Standard Sweep)** | $40^\circ \sim 70^\circ$ | $1^\circ$ step | **31** |
| **S-Scan (High-Res Sweep)** | $40^\circ \sim 70^\circ$ | $0.5^\circ$ step | **61** |
| **E-Scan (Linear Shift)** | 32-element group | 1-element shift | **Total probe elements - 32** |
| **Compound Scan (S+E)** | 31 angles $\times$ E-scan shifts | — | **Number of angles $\times$ Number of shifts** |

### 5-2. Speed Optimization and Trade-offs
* **Maximum Scan Speed Formula**:

$$\text{Max Scan Speed} = \left(\frac{\text{PRF}}{\text{Number of Focal Laws}}\right) \times \text{Encoder Resolution (mm/step)}$$

* **Cautions**: If the PRF (number of pulse firings per second) is excessively high, **ghost echoes** may occur, where residual echoes from the previous pulse overlap with the next signal. The PRF must be set appropriately based on the thickness and sound velocity of the test object.
* **Trade-off**: Increasing the number of focal laws improves the angular resolution and inspection coverage but increases the overall cycle time and decreases the scan speed. Optimization is required within the code/standard requirements.

---

## 6. Dynamic Depth Focusing (DDF)
* While conventional PAUT is limited to a single focal depth during transmission, the **DDF technique** maintains high resolution across the entire depth range by dynamically adjusting the receiver delay times ($\Delta t$) in real-time to match the arrival lag of the return echoes.
* **Full DDF**: Transmits an unfocused or weakly focused wide beam and dynamically focuses the entire depth range during reception. This serves as the foundation for Full Matrix Capture (FMC) technology and is processed by high-speed DSP or FPGA hardware.

---

## 7. Conditions for Avoiding Grating Lobes
* If the transducer element pitch ($p$) exceeds half the acoustic wavelength ($\lambda$), energy is radiated at unwanted angles other than the main lobe, producing **false indications**.

$$\text{Avoidance Condition}: \quad p \le \frac{\lambda}{2} = \frac{v}{2 \times f}$$

($p$: element pitch, $\lambda$: wavelength, $v$: sound velocity in the material, $f$: frequency)
* Care must be taken since the probability of grating lobe generation increases sharply when steering at high angles ($70^\circ$ or higher).
* *Calculation Example*: Under the conditions of a shear wave in steel ($v = 3,230 \text{ m/s}$) and a frequency of $5 \text{ MHz}$, since $\lambda = 0.646 \text{ mm}$, a pitch of **$p \le 0.323 \text{ mm}$** is recommended. In the field, a pitch in the range of $0.3 \text{ to } 0.6 \text{ mm}$ is typically selected depending on the angular sweep range.

---

## 8. Practical Checklist for Focal Law Design

| Step | Checklist Item | Practical Verification Content |
| :---: | :--- | :--- |
| **①** | **Transducer Parameters** | Verify instrument input values for the number of elements, element pitch, center frequency, and active aperture size. |
| **②** | **Wedge Parameters** | Input the velocity in the wedge material, wedge angle, and height (incorrect inputs cause beam angle distortion). |
| **③** | **Material Sound Velocity** | Review longitudinal/shear velocity settings. Use measured or standard values and consider temperature compensation. |
| **④** | **Target Angular Range** | Configure the angle range and resolution to match the expected orientation and location characteristics of the target defects. |
| **⑤** | **Focal Depth** | Position the focus within the region of interest (ROI). Apply multi-focusing or DDF for thick components. |
| **⑥** | **Aperture Size Determination** | Balance focusing performance and near-field resolution (more elements improve focusing but increase the dead zone). |
| **⑦** | **Grating Lobe Verification** | Verify if the pitch condition $p \le \lambda/2$ is satisfied and inspect for false signals during high-angle scanning. |
| **⑧** | **Reference Reflector Validation** | After setting up the focal law, scan reference holes (SDH, FBH) in a calibration block to verify echo position and amplitude. |

---
*SEONGSANLAB | Study Series — NDT Basics*
