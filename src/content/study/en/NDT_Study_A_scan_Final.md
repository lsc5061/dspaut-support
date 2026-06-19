---
title: "Fundamentals of Ultrasonic NDT: Principles of A-scan and Graph Interpretation"
publishDate: 2026-06-10
description: "Based on global NDT technical standards, this article explains in detail how to interpret A-scan graphs—the foundation of ultrasonic technology—and the principles of real-time signal analysis."
tags: ["A-scan", "Raw Signal", "Signal Analysis"]
category: "2. Data Visualization & Scan Interpretation"
order: 5
---

To properly understand Ultrasonic Testing (UT), the most widely used Non-Destructive Testing (NDT) technology, the first concept you must encounter and fully master is the **'A-scan'**.

Based on global NDT technical standards, this article explains in detail what an A-scan is—the most fundamental element of ultrasonic technology—and how to interpret the graphs displayed on equipment screens, tailored for buyers new to the field.

---

## 1. Definition and Core Concepts of A-scan

An A-scan is a **"one-dimensional signal graph that visually represents the time taken for an ultrasonic signal to pass through and return from the inside of an object, along with its energy level."**

Medical ultrasound commonly encountered in daily life (e.g., fetal imaging) is the result of synthesizing numerous ultrasonic signals into a visual 2D image. In contrast, the A-scan used in industrial NDT represents the **most basic and pure raw signal waveform** that forms those image data.

* **Principle of Sound Reflection**
  You have likely experienced the echo phenomenon in a cave, where shouting loudly results in the sound bouncing off the walls and returning as a "yo-ho" sound after a brief moment. A-scan brings this echo principle into the ultrasonic frequency range, operating on nanoseconds (ns) and microseconds ($\mu$s).
  The ultrasonic wave emitted from a probe (transducer) propagates inside the test object (such as metal). The moment it hits an internal defect (cracks, voids, etc.) or the opposite backwall of the material, it generates a unique echo signal and returns. Sorting these returning signals chronologically and representing them as a line is what constitutes an A-scan.

---

## 2. How to Interpret an A-scan Graph: X-axis and Y-axis

The A-scan graph displayed on the inspection equipment screen perfectly represents the internal state of the material through two physical metrics: the horizontal and vertical axes. Understanding these two axes is the key to learning A-scans.

### ① Horizontal Axis (X-axis): Time of Flight & Distance
The horizontal axis represents the **elapsed time** from the moment the ultrasound is emitted until it returns to the sensor (probe). The velocity at which sound travels through a specific material (e.g., the longitudinal ultrasonic velocity in steel is approximately 5,900 m/s) is physically constant.
Therefore, the equipment precisely measures the time taken for the sound to return and displays it by **converting it into the 'distance (mm, depth)' from the material surface**. By looking at the X-axis, you can determine exactly how many millimeters below the surface an internal defect is located, just like measuring with a ruler.

### ② Vertical Axis (Y-axis): Amplitude (Signal Intensity)
The vertical axis represents the **energy magnitude (amplitude)** of the reflected ultrasonic echo. The higher the peak of the signal rising upward in the graph, the larger the area of the reflecting surface or the clearer the difference in acoustic impedance (density difference).
If an internal defect is extremely small, only a small portion of the sound is reflected, resulting in a low peak on the vertical axis. Conversely, if it meets a large crack or a complete boundary, almost all the echo returns, forming a high peak close to 100% height.

---

## 3. Principles of Real-Time Signal Interpretation (Initial Pulse & Backwall Echo)

When inspecting a defect-free, perfect product versus a product with internal issues, the A-scan graph shows clear signal differences. Engineers diagnose the internal condition by observing these signal changes.

* **Initial Pulse (IP / Transmitter Echo)**
  At the far left (starting point) of the graph, there is always a high peak signal. This is a strong signal generated at the surface when the ultrasound is first emitted from the probe, serving as the reference point for the inspection (depth of 0 mm).
* **Backwall Echo (BWE)**
  In a normal, defect-free product, the ultrasound travels all the way to the bottom surface of the product and reflects back without any obstruction in between. Consequently, only one large peak signal appears on the horizontal axis (X-axis) at the position corresponding to the thickness of the product. This is called the backwall echo.
* **Flaw Echo (Internal Defect Signal)**
  What happens if there is a fine crack or void inside the product? Part of the ultrasound hits this defect before reaching the bottom and returns early.
  As a result, **an unexpected new peak signal rises between the initial pulse and the backwall echo (at an intermediate point)**. By reading the horizontal axis position of this intermediate signal, the exact depth of the defect can be determined, and the severity of the defect can be evaluated through the height of the vertical axis.

---
*This material is educational content written based on the technical encyclopedia standard data of NDT.net, the global NDT archive portal.*
