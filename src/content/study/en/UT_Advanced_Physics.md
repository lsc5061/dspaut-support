---
title: "Ultrasonic Sound Field and Advanced Physics"
publishDate: 2026-06-30
description: "Examines the mathematical and physical principles of ultrasonic sound fields, analyzing near field limits, far field beam spread, and transducer frequency relations."
tags: ["UT", "Physics", "Sound Field", "NDT"]
category: "1. Ultrasonic Testing (UT) Basics"
order: 4
---

This article examines the mathematical formulations and acoustic physics governing ultrasonic sound fields, focusing on wave behavior near the transducer face and in the far-field propagation zone.

---

## 1. Structure of the Ultrasonic Beam

An ultrasonic beam emitted by a piezoelectric transducer does not propagate as a uniform cylinder. Due to diffraction and wave interference from different points on the transducer face, the beam structure is divided into two distinct zones:
- **Near Field (Fresnel Zone):** The region directly in front of the transducer face. It is characterized by intense fluctuations in acoustic pressure (nodes and antinodes) along the beam axis due to constructive and destructive interference.
- **Far Field (Fraunhofer Zone):** The region beyond the near-field limit. In this zone, acoustic pressure decreases exponentially with distance, and the beam begins to diverge (spread out) uniformly.

---

## 2. Near Field Length (Fresnel Zone Limit)

Flaw detection and sizing are highly challenging within the near field because the rapid fluctuations in signal amplitude make it difficult to establish a direct relationship between echo height and defect size. Therefore, calculating the boundary of the near field is critical for testing setup.

The length of the near field ($N$) is mathematically determined by the diameter of the active transducer element ($D$), the frequency of the wave ($f$), and the acoustic velocity ($v$) of the medium.

$$N = \frac{D^2 \times f}{4 \times v}$$

Since the wavelength $\lambda$ is defined as $\lambda = v / f$, the equation can also be expressed as:

$$N = \frac{D^2}{4 \times \lambda}$$

### Engineering Implications
- **Larger Transducer Diameter ($D$):** Significantly increases the near-field length ($N$).
- **Higher Frequency ($f$ / shorter $\lambda$):** Extends the near-field length, shifting the stable inspection zone further into the material.

---

## 3. Far Field Beam Spread (Divergence)

As the acoustic wave propagates into the far field (Fraunhofer zone), the beam wavefront curves and expands. The divergence of the acoustic field is characterized by the **Beam Spread Angle** ($\theta$).

For a circular transducer element, the angle from the center axis to the edge where the acoustic pressure drops to zero (the boundary of the main beam lobe) is governed by diffraction theory through the first Bessel function zero:

$$\sin(\theta) = 1.22 \frac{v}{D \times f} = 1.22 \frac{\lambda}{D}$$

For practical evaluations where the beam boundary is defined at the $-6\text{ dB}$ (half-amplitude) drop point, the equation is modified to:

$$\sin(\theta_{-6\text{ dB}}) = 0.51 \frac{\lambda}{D}$$

### Engineering Implications
- **Wider Transducers ($D$):** Produce narrower, more collimated beams with less divergence, concentrating acoustic energy.
- **Higher Frequencies ($f$):** Reduce the beam spread angle, improving lateral resolution and minimizing unwanted reflections from adjacent side geometries of the test component.
