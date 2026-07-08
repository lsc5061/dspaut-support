---
title: "Weld Inspection and Geometry Weld Overlay Mapping"
publishDate: 2026-06-30
description: "Examines the geometric physics of ultrasonic weld inspection, analyzing beam skip distance equations and computerized Weld Overlay positioning methods."
tags: ["PAUT", "Weld Inspection", "Weld Overlay", "NDT"]
category: "Advanced Phased Array Ultrasonic Testing (PAUT)"
order: 16
---

This article examines the mathematical formulations of sound path geometry in weld inspections, detailing the calculation of skip distances, beam-reflection physics, and computerized Weld Overlay reconstruction.

---

## 1. Acoustic Path Geometry and Skip Distances

Ultrasonic testing of welds is performed using angled shear waves (transverse waves). Because the weld reinforcement (bead) prevents placing the probe directly on top of the weld center, the acoustic beam must be introduced from the adjacent plate surface and reflected off the inner and outer surfaces of the material.

The path of the acoustic beam is defined by the plate thickness (T) and the refracted angle (θ) of the shear wave in the material.

### 1-1. Half Skip (First Leg)
The **Half Skip** represents the path of the beam as it travels directly from the probe face to its first reflection point at the bottom surface (the inside diameter or root surface of the plate).

The horizontal surface distance from the probe index point to the bottom reflection point (d_HS (Horizontal Distance)) is calculated using basic trigonometry:

**Horizontal Distance (d) = Thickness (T) × tan(Refraction Angle, θ)**

The sound path length (s_HS (Sound Path)), which represents the total distance traveled by the wave to the bottom reflection point, is:

**Sound Path (s) = Thickness (T) ÷ cos(Refraction Angle, θ)**

### 1-2. Full Skip (Second Leg)
After striking the bottom surface, the beam reflects upward toward the top surface of the plate. The **Full Skip** represents the complete path from the probe to the top surface reflection point adjacent to the weld bead.

The total horizontal distance from the probe index point to the top reflection point (d_FS (Total Horizontal Distance)) is twice the half-skip distance:

**Total Horizontal Distance (d_FS) = 2 × Thickness (T) × tan(Refraction Angle, θ)**

The total sound path length (s_FS (Total Sound Path)) to the top surface reflection point is:

**Total Sound Path (s_FS) = 2 × Thickness (T) ÷ cos(Refraction Angle, θ)**

By understanding these geometric equations, inspectors can calculate exactly where the acoustic beam will intersect the weld root, sidewall fusion line, and cap.

---

## 2. Computerized Weld Overlay Mapping

In phased array ultrasonic testing (PAUT), interpreting S-Scans (Sectorial Scans) or B-Scans can be complex due to the varying angles of the acoustic rays. **Weld Overlay** is a digital visualization tool that superimposes a 2D scale drawing of the weld bevel geometry directly onto the S-scan sector display.

### Mathematical Alignment of Coordinates
The software performs coordinate translation to map returning echo signals to their exact geometric locations:
1. **Ray Path Calculation:** For each ray angle θ_i in the sectorial scan, the software computes the coordinate position (x, z) of every A-scan sample point along the ray path.
2. **Refined Geometry Mapping (Ray Bending):** When a ray reaches the plate thickness boundary (z = T), the software applies a mirror-reflection transformation (z' = 2T - z) to simulate the physical bounce of the sound path.
3. **Bevel Overlap:** The software superimposes the weld bevel geometry (e.g., V-bevel, double-V, or J-groove) onto this coordinate space, referencing the user-defined index offset (the distance from the probe index point to the weld centerline).

### Practical Diagnostic Advantages
By aligning the ultrasonic sector scan with the physical boundaries of the weld, the Weld Overlay enables the inspector to differentiate:
- **Geometry Echoes:** Non-defect reflections originating from the weld root bead (root roll-through) or cap reinforcement.
- **Defect Echoes:** Real internal defects, such as:
  - **Lack of Sidewall Fusion (LOF):** Reflections aligned perfectly along the bevel slope boundary.
  - **Root Cracks:** Indications localized precisely at the root tip geometry vertex.
  - **Porosity / Slag Inclusions:** Dispersed indications situated within the weld volume cross-section.
