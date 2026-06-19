---
title: "Basic Principles of Ultrasonic Testing (UT)"
publishDate: 2026-06-10
description: "Summarizes the principles, characteristics, and industrial applications of Ultrasonic Testing (UT), a core non-destructive testing method, from an engineer's perspective."
tags: ["UT", "Basics", "NDT"]
category: "1. Ultrasonic Testing (UT) Basics"
order: 1
---

This article summarizes the principles, characteristics, and industrial applications of Ultrasonic Testing (UT), a core method of non-destructive testing (NDT), from an engineer's perspective.

---

## 1. What is UT?

Ultrasonic Testing (UT) is a non-destructive testing technique that propagates ultrasonic waves in the range of 0.5 MHz to 25 MHz into a material to detect defects (such as cracks, porosity, inclusions) or measure thickness [cite: 213]. Solid materials are good conductors of sound waves, and sound waves have the property of reflecting from material interfaces or internal defects [cite: 214]. Generally, higher frequencies result in shorter wavelengths, improving the detection sensitivity for micro-defects [cite: 214].

Along with Radiographic Testing (RT), UT is one of the most widely used methods for detecting internal defects [cite: 215]. It is highly applicable in the field because it can be operated safely without the hazards of radiation sources and allows internal inspection with single-sided access to the structure [cite: 216].

---

## 2. Operating Principles

### 2-1. Piezoelectric Effect and Transducers
A UT transducer utilizes a piezoelectric element to convert electrical signals from the equipment into mechanical vibrations (ultrasonic waves) and, conversely, to convert ultrasonic echoes received from within the material back into electrical signals [cite: 219]. Since monolithic transducers transmit beams in a fixed direction only, the transducer must be physically moved across the surface to cover the inspection area [cite: 220].

### 2-2. Pulse-Echo Method
The most common UT operating method is the pulse-echo technique [cite: 221]. In this mechanism, a transducer transmits ultrasonic pulses and receives the reflected signals (echoes) from defects or the backwall using the same transducer [cite: 222]. The depth of a defect within the material is calculated by multiplying the Time of Flight (ToF) of the echo by the acoustic velocity of that specific material [cite: 223].

$$\text{Defect Depth} = \frac{\text{Time of Flight} \times \text{Sound Velocity}}{2}$$ [cite: 224]

---

## 3. Major Wave Modes

The optimal wave mode is selected and used based on the geometry and purpose of the inspection object [cite: 226].

* **Longitudinal Wave (L-wave)**: A wave in which the particle vibration direction is parallel to the direction of wave propagation [cite: 227]. It can propagate through both solids and liquids and is primarily used for straight-beam (normal-beam) testing [cite: 227].
* **Shear Wave (S-wave)**: A wave in which the particle vibration direction is perpendicular to the direction of wave propagation [cite: 228]. It propagates only in solid materials and is primarily used for angle-beam testing and weld inspections [cite: 228].
* **Surface Wave (Rayleigh Wave)**: Characterized by propagating along the surface of a material, making it suitable for detecting micro-defects near the surface [cite: 229].
* **Plate Wave (Lamb Wave)**: A type of guided wave occurring in thin plates, utilized for inspecting composite materials and structural piping [cite: 230].

---

## 4. Key Inspection Parameters

* **Frequency**: Directly affects flaw detection sensitivity and penetration depth in materials [cite: 232]. Higher frequencies improve resolution but increase attenuation due to scattering [cite: 232].
* **Beam Angle**: For weld inspection, angle-beam transducers of 45°, 60°, or 70° are selected and positioned based on the material thickness and the expected orientation of defects [cite: 233].
* **Sound Velocity**: Depends on the density and elasticity of the material and is an essential reference value for accurate depth calculations (approx. 5,900 m/s for longitudinal waves in steel) [cite: 234].
* **Attenuation**: Refers to the loss of energy as the wave passes through the material, which varies depending on the grain size and homogeneity of the metal microstructure [cite: 235].

---

## 5. Data Representation (Scan Types)

* **A-Scan**: The most basic one-dimensional representation, plotting signal amplitude against time. It is used to estimate defect depth and size at a single position [cite: 237].
* **B-Scan**: A two-dimensional cross-sectional view showing the transducer's physical movement direction and depth. It is useful for identifying the vertical cross-sectional position of defects [cite: 238].
* **C-Scan**: A two-dimensional plan-view projection of the scanned area covered by the transducer. It allows visual evaluation of the two-dimensional distribution and area of defects [cite: 239].

---

## 6. Key Application Areas

UT is applied as a standard inspection method across industries with high safety requirements, such as nuclear power, aerospace, shipbuilding, and petrochemicals [cite: 241].
* Detection of weld defects (porosity, lack of fusion, cracks, etc.) [cite: 242]
* Thickness measurement of piping and pressure vessels [cite: 243]
* Inspection of internal defects in forgings and castings [cite: 244]
* Detection of delamination in composite materials [cite: 245]
* Corrosion monitoring and remaining thickness measurement [cite: 246]

---

## 7. Limitations of UT and Complementary Techniques

Conventional single-crystal UT imposes fundamental limitations on inspection speed and accessibility due to the constant need for manual movement of the transducer [cite: 248]. The inspection efficiency drops significantly, especially for components with complex geometries or restricted-access areas [cite: 249]. To overcome these limitations, the following advanced complementary techniques are actively being introduced in the field [cite: 249].

* **PAUT (Phased Array UT)**: Electronically controls multiple piezoelectric elements to achieve beam steering and focusing [cite: 250]. This allows rapid scanning of a wide area from a single transducer position [cite: 250].
* **ToFD (Time of Flight Diffraction)**: Precisely measures the vertical height of a defect using the time of flight of diffracted waves generated at the defect tips [cite: 251].
* **Combined TOFD + PAUT Application**: Applies both techniques in parallel during full weld inspections to maximize reliability and coverage [cite: 252].
