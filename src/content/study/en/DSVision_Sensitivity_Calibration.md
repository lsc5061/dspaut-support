---
title: "Sensitivity Calibration Guide"
publishDate: 2026-07-07
description: "Provides step-by-step procedures and UI guides for uniformly normalizing receiver sensitivity deviation across dozens of channels using DSVision's Auto Gain Normalization."
tags: ["Sensitivity Calibration", "Calibration", "DSVision"]
category: "DSVision Practical & Quick Guides"
order: 23
---

To perform an accurate quantitative evaluation of defect sizes in ultrasonic testing (UT), the signal response from the same reflector must remain uniform, regardless of the angle or channel used for the inspection. DSVision's **Sensitivity Calibration** technology analyzes and digitally normalizes the inherent receiver sensitivity deviation among active channels to ensure diagnostic precision.

---

## 1. Auto Gain Normalization: Intelligent Signal Alignment

Phased Array UT (PAUT) instruments manage dozens of individual beam angles simultaneously. Since acoustic energy varies due to transducer element characteristics or material path differences, this function automatically normalizes all channels to a target reference height (e.g., 80% FSH) with a single click.

### ① Calibration Process & UI Layout

![Sensitivity Calibration Interface](/images/study/calibration/sensitivity_cal.png)

* **Yellow Line (Raw Peak Envelope)**: Represents the raw, uncalibrated peak signal height captured at each angle as the probe is swept. It shows irregular fluctuations depending on the angular transmission efficiency.
* **Green Dashed Line (Target Level)**: Defines the target reference amplitude level (e.g., 80% FSH) to which all channels should be aligned.
* **Red Line (Normalized Curve)**: Displays the final calibrated response after the system calculations have allocated specific gain offsets to each active channel.

---

## 2. Sensitivity Normalization: Step-by-Step

1. **Capture Reference Echo**: Place the probe on a standard block (e.g., IIW block or ASME reference block) and maximize the echo from a side-drilled hole (SDH) of known diameter, ensuring the signal falls within the gate range.
2. **Run Calibration**: Click the `Set Gain` or `Calibrate` function in the software. DSVision scans the peak echo heights across all active sweep angles in a single pass.
3. **Apply Gain Offset**: The calculated gain offset (in dB) for each channel is immediately applied. This normalizes the visualization (e.g., S-scan) to display uniform brightness and signal response across the entire angular range.

---

## 3. Key Values for Buyers and Inspectors

* **Objective Defect Sizing**: Eliminates subjective inspector judgements and tedious manual gain adjustments, normalizing all channels using the system's software algorithms.
* **Global Data Reliability**: Assures uniform sensitivity normalization standards regardless of the field location, establishing high repeatability and quantitative confidence in inspection data.
* **Efficient Setup**: Resolves the time-consuming process of manually adjusting individual beam responses by enabling one-click bulk normalization, dramatically shortening the PAUT setup process.

---

> [!IMPORTANT]
> **"Measure with a transparent, uniform scale."**  
> DSVision's sensitivity normalization technology overcomes physical hardware and acoustic propagation variations, aligning raw analog signals into reliable, standard digital measurements.
