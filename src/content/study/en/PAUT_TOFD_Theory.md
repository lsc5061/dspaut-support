---
title: "Time of Flight Diffraction (TOFD) Principles"
publishDate: 2026-06-30
description: "Examines the physical principles of Time of Flight Diffraction (TOFD), analyzing tip diffraction mechanics, dual-probe geometry, and mathematical depth calculations."
tags: ["TOFD", "Diffraction", "Sizing", "NDT"]
category: "3. Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 13
---

This article examines the physical and geometric principles of Time of Flight Diffraction (TOFD), a high-precision ultrasonic non-destructive testing (NDT) methodology that relies on acoustic wave diffraction rather than reflection.

---

## 1. Introduction to Tip Diffraction Physics

In conventional pulse-echo ultrasonic testing, defect sizing is primarily based on the amplitude of the reflected echo. However, amplitude-based methods are highly sensitive to defect orientation, surface roughness, and acoustic attenuation, which can introduce significant sizing errors.

Time of Flight Diffraction (TOFD) addresses these limitations by utilizing the phenomenon of **acoustic tip diffraction**. When a wide-beam compressional wave encounters a planar defect (such as a crack), the sharp boundaries or tips of the defect act as point sources. These tips scatter low-amplitude spherical diffracted waves in all directions. 

TOFD measures the arrival times (Time of Flight) of these diffracted waves rather than their amplitude, providing an accurate, orientation-independent calculation of defect height and depth.

---

## 2. Dual-Probe Pitch-Catch Configuration

TOFD operates in a pitch-catch setup utilizing two separate transducers placed on opposite sides of the inspection area (typically a weld joint):
- **Transmitter (Tx):** Emits a divergent compressional (longitudinal) wave into the material at a high angle.
- **Receiver (Rx):** Detects the resulting wave modes propagating through the component.

In a defect-free isotropic material, the receiver captures two primary reference signals:
1. **Lateral Wave:** A wave that travels directly along the surface interface from Tx to Rx. This is the fastest path and arrives first.
2. **Backwall Echo:** A wave that travels to the back surface of the component, reflects specularly, and returns to the Rx. This represents the longest path and arrives last.

### The Defect Window
When an internal crack is present, two additional low-amplitude signals are generated at the defect boundaries:
- **Upper Tip Diffracted Wave:** Diffracted from the top edge of the crack.
- **Lower Tip Diffracted Wave:** Diffracted from the bottom edge of the crack.

These diffracted waves travel intermediate paths, arriving in the time window between the lateral wave and the backwall echo.

---

## 3. Mathematical Derivation of Defect Depth

The vertical depth of a defect tip below the scanning surface is calculated using the Pythagorean theorem, establishing a relationship between the absolute arrival time and the probe separation distance.

Let:
- $2S$ be the Probe Center Separation (PCS) distance. Thus, $S$ is half-PCS.
- $t$ be the total time-of-flight of the wave traveling from Tx to the defect tip and back to Rx.
- $v$ be the longitudinal wave velocity in the material.
- $d$ be the depth of the defect tip.

The acoustic wave travels a total path length of $v \times t$. Since the path is symmetrical, the diagonal distance from one probe to the defect tip is:

$$\text{Diagonal Path} = \frac{v \times t}{2}$$

Applying the Pythagorean theorem to the right-angled triangle formed by the surface half-separation ($S$), the depth ($d$), and the diagonal path yields:

$$d^2 + S^2 = \left(\frac{v \times t}{2}\right)^2$$

Solving for depth ($d$):

$$d = \sqrt{\left(\frac{v \times t}{2}\right)^2 - S^2}$$

By calculating the depth of the upper tip ($d_1$ at time $t_1$) and the lower tip ($d_2$ at time $t_2$), the vertical height ($h$) of the defect is computed as:

$$h = d_2 - d_1$$

---

## 4. Geometric Limits and Dead Zones

TOFD offers high sizing precision but is subject to two physical dead zones:
1. **Near-Surface Dead Zone:** The lateral wave has a finite pulse width (duration). Flaws located immediately below the scanning surface generate diffracted waves that overlap with the lateral wave pulse, rendering them undetectable.
2. **Backwall Dead Zone:** The backwall echo has a high amplitude and finite pulse width. Flaws located extremely close to the back boundary generate diffracted waves that are masked by the large backwall reflection. Additionally, because the beam angle becomes highly oblique near the backwall, vertical depth resolution degrades.
