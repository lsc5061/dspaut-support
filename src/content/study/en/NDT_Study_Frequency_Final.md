---
title: "Principles and Selection Criteria of Frequency in Ultrasonic Testing"
publishDate: 2026-06-10
description: "Explains the physical definition of frequency, which is the first specification checked when performing Ultrasonic Testing (UT), and how the frequency selection impacts inspection results."
tags: ["Frequency", "Wavelength", "Transducer"]
category: "1. Ultrasonic Testing (UT) Basics"
order: 2
---

When performing Ultrasonic Testing (UT), the first value checked in the specifications of a probe (transducer) is the frequency. Frequency is a critical factor that determines the success or failure of an inspection because it completely alters the physical behavior of ultrasound as it passes through a material.

Based on global NDT technology standards, this article explains the physical definition of ultrasonic frequency, the impact of frequency selection on inspection results, and the criteria for making the right choice.

---

## 1. Physical Relationship Between Frequency and Wavelength

Frequency refers to **"the number of wave oscillations per second,"** with the unit typically being MHz (one million oscillations per second). In non-destructive testing, a frequency range between 0.5 MHz and 10 MHz is most commonly used.

When understanding frequency, the concept of **wavelength ($\lambda$)** is inseparable. Wavelength refers to the physical length of one complete wave cycle and follows this fundamental law of physics:

$$\text{Wavelength} (\lambda) = \frac{\text{Sound Velocity} (v)}{\text{Frequency} (f)}$$

Since the velocity of sound ($v$) is fixed within the specific material being inspected (such as steel or aluminum), **as frequency ($f$) increases, wavelength ($\lambda$) conversely decreases.** This varying wavelength length determines the overall performance of the inspection.

---

## 2. Two Opposite Effects of Frequency on Inspection

When selecting a frequency, one must understand the trade-off (inverse relationship) between two physical characteristics: resolution and penetration.

### ① High Frequency (e.g., 5 MHz to 10 MHz) = High Resolution, Low Penetration
* **Shorter Wavelength**: Higher frequencies result in extremely short wavelengths.
* **Excellent Resolution**: Ultrasonic waves cannot detect defects smaller than their wavelength, as they will either pass through or scatter around them. Therefore, shorter wavelengths allow for the clear detection and separation of minute cracks or tiny pores. Furthermore, the ability to distinguish two closely spaced defects as separate entities (resolution) is maximized.
* **Severe Attenuation**: Shorter wavelengths lead to increased scattering attenuation, where the wave strikes fine metal grains within the material and scatters in all directions. As a result, the sound energy attenuates rapidly and cannot penetrate deeply into thick components.

### ② Low Frequency (e.g., 0.5 MHz to 2.25 MHz) = Low Resolution, High Penetration
* **Longer Wavelength**: Lower frequencies result in longer wavelengths.
* **Excellent Penetration**: Longer wavelengths easily bypass coarse grains within the metal, resulting in very low energy loss (attenuation) from scattering. Consequently, the sound wave propagates further without significant decay, stably penetrating deep into large, thick structures or castings.
* **Lower Resolution**: Because of the longer wavelength, extremely small defects may allow the ultrasonic wave to pass right through without producing a detectable reflection on the screen. Additionally, adjacent defects may merge and appear as a single large defect.

---

## 3. Criteria for Proper Frequency Selection in Industrial Fields

The frequency selection formula varies depending on the **material characteristics** and **thickness** of the inspection object.

* **Thin, Fine-Grained Fabricated Components (Steel Plates, Rolled Materials, etc.)**
  * **Recommended Frequency**: 5 MHz or higher
  * **Reason**: Since the internal microstructure is dense and acoustic attenuation is low, it is advantageous to use higher frequencies to detect micro-defects with maximum precision.
* **Thick, Coarse-Grained Components (Castings, Welds, Austenitic Stainless Steel, etc.)**
  * **Recommended Frequency**: 1 MHz to 2.25 MHz
  * **Reason**: Castings and welds have large, coarse grain structures. Using high frequencies leads to excessive noise and complete signal loss. Therefore, lower frequencies must be selected to allow the sound wave to penetrate.
* **Highly Attenuative Materials (Concrete, Plastics, Composites like GFRP/CFRP, etc.)**
  * **Recommended Frequency**: Ultra-low frequencies of 0.5 MHz to 1 MHz or lower
  * **Reason**: For materials with high porosity or low density that absorb sound, the inspection must focus solely on 'penetration capability' to secure a usable signal, even at the cost of resolution.
