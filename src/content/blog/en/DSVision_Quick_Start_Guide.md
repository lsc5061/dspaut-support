---
title: "DSVision 5-Minute Quick Start Guide"
publishDate: 2026-07-06
description: "A detailed 7-step setup, calibration, and inspection workflow for inspectors and buyers using the DSVision PAUT software for the first time."
tags: ["DSVision", "QuickStart", "PAUT", "NDT"]
category: "Technical Analysis"
image: "/images/blog/ko/T_Weld.PNG"
---

This guide is designed for inspectors using the DSVision Phased Array Ultrasonic Testing (PAUT) software for the first time. Starting from initial system launch, it walks you through configuring the probe/wedge, setting up the ultrasonic beam, creating gates, performing core system calibrations, scanning, and generating a report in **7 clear steps**.

---

## Live Measurement Screen Layout

DSVision divides the live measurement screen into three main areas and a configuration panel on the right:

* **Top Header**: Displays real-time measurement data and encoder position.
* **Left View (A-Scan)**: Displays signal waveforms along the depth and amplitude (%) axes.
* **Center View (S-Scan)**: Displays a sectorial cross-section image of the ultrasonic scan.
* **Right Panel (Parameter)**: Allows numeric parameter input and control.

---

## Step 1: Initial Launch & Basic Probe/Wedge Setup

After connecting the hardware and powering on the device, the system immediately loads the live measurement screen without any complex connection setup. The first step is to configure the details of the probe and wedge connected to the system.

Expand the **Quick Menu Action Bar** by sliding the top of the right parameter panel and configure the settings:

1. **Probe Configuration**: Go to the **Probe** menu and start the **Wizard**. Select the target frequency and choose the matching part number of your probe from the list. Selecting `Select` automatically enters the elements, pitch, and detailed specifications.

2. **Wedge Configuration**: Next, go to the **Wedge** menu and start the **Wizard** in the same way. Select your wedge model to automatically load the wedge angle, internal velocity, and the offset height/axis values.

> **Note:**
> * **Dual PA Probe Setup**: If you are using a Dual Phased Array probe (PA Dual), you must manually enter the transmit and receive channel bounds (Tx/Rx Start and Stop) to ensure proper channel isolation.
> * **Wedge Offset**: Since this offset represents the distance from the wedge toe to the first element to ensure beam steering accuracy, it is highly recommended to double-check the auto-filled value.

---

## Step 2: Ultrasonic Beam & Focal Law Configuration

Once the probe is configured, set up the steering angles and resolution for the phased array ultrasonic beam.

Under the **Pulse** menu, select **Config** and choose the operation mode that matches your inspection standard. You can choose **PA (Phased Array)** for sectorial scans, **LA (Linear Array)** for linear scans, or **Conventional** for standard UT.

Select PA mode and open the **Focal Law** button at the bottom. Enter the `Angle Start`, `Angle Stop`, and `Angle Resolution` according to your inspection specifications. Once entered, the sectorial steering grid will display in the S-Scan window.

---

## Step 3: Specimen Thickness & Material Velocity Setup

Align the physical ultrasonic wave reflection paths inside the material with the visual guidelines on the screen to ensure accurate measurements.

Go to the **Specimen & Weld** menu and enter the physical thickness of the test piece in the `Thickness` field. Choose your material under the `Specimens` library (e.g., carbon steel) to load the standard shear wave velocity automatically.

Toggle the **Legs** setting to **On** to display green horizontal dashed guidelines (B0: bottom reflection depth, T1: top surface reflection depth) on the S-Scan view. These guidelines allow you to visually trace where the wave bounces inside the material.

---

## Step 4: Gate Configuration & Initial Sensitivity Adjustment

Define the measurement gate area to capture and measure target calibration signals.

Go to the **Gate** menu, select `Add Gate`, and create **Gate A**. Adjust the gate `Start` and `Range` parameters to place the gate over the specific depth where the target signal occurs.

Position the probe on a calibration block's reference reflector (e.g., SDH) to display its peak echo on the screen. Select **Auto Gain (A)** on the left vertical control toolbar. The system will automatically calculate and apply the necessary gain to normalize the peak echo height to the target 80% FSH.

---

## Step 5: System Calibration

Calibrate the system to eliminate physical errors and standardize signals before starting the actual inspection. Open the **Calibration Wizard** in the right menu and perform the following four calibrations in sequence:

* **Velocity Calibration (V)**: Place the probe on a block of known thickness, position Gate A over the backwall echo, enter the exact thickness, and select `Calibrate` to correct the wave velocity inside the material.
* **Wedge Delay Calibration (W)**: Position the gate over a known curvature reflection (e.g., 100mm radius V1 block) and select `Calibrate` to subtract the transit time inside the wedge, setting the zero-depth (0 mm) line exactly at the steel surface.
* **Sensitivity Calibration (S)**: Scan over a standard Side Drilled Hole (SDH) and select `Record` as the echoes across all angles peak to automatically normalize the signal amplitudes across all steering angles.
* **TCG Calibration (T)**: Scan SDH reflectors at different depths, place the gate over each peak echo successively, and select `Add Point` to calculate the attenuation curve and apply dynamic depth gain.

Once completed, verify that the **V, W, S, T indicators on the bottom status bar are fully activated** (in green or red). All indicators must be active to proceed with a standard-compliant inspection.

---

## Step 6: Encoder Setup & Data Acquisition

Connect the scanner device to scan and record the inspection data.

Under the **Encoder** menu, select the scanner type (`One Line` or `Raster`) and calibrate the encoder. Move the scanner exactly 100mm to automatically calculate the encoder resolution and store it in the system.

Once calibrated, select the **Play** button on the left toolbar to start data acquisition.

> **Important:**
> * **Parameter Lock**: Entering acquisition mode automatically locks all parameters to prevent accidental setting changes during data collection.
> * **Saving**: When the scan is complete, select **Stop** and enter a file name to save the acquired data to the disk.

---

## Step 7: Defect Sizing

Analyze the saved data to measure defect sizes.

Under the **Display** menu, toggle `Ref. Cursor` and `Meas. Cursor` to **On** to activate the crosshair cursors on the screen.

* **6dB Drop Defect Sizing**:
  - Place the reference cursor (`Ref. Cursor`) at the peak amplitude of the defect echo.
  - Position the measurement cursor (`Meas. Cursor`) at the boundaries where the amplitude drops by half (-6dB, approx. 40% FSH).
  - Read the horizontal offset (ΔH) for the actual defect length and the vertical offset (ΔV) for the defect height at the bottom status bar.
