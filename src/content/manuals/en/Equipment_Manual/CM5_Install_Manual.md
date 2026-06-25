---
title: Install Manual
description: Installation and update guide for CM5 software on DEEPSOUND B3 and T3 equipment.
version: v1.0
releaseDate: 2026-06-24
author: SEONGSANLAB Co., Ltd.
order: 2
---

# Install Manual

### (CM5 Program Update Guide)

This guide provides official instructions for safely updating the **CM5 program** to the latest version on **DEEPSOUND B3** and **DEEPSOUND T3** equipment to improve system operational efficiency and performance. Since these devices run on a Linux-based operating system, please proceed carefully by following this step-by-step guide.

---

## 1. Pre-installation Requirements

Before starting the update process, ensure that all the following items are prepared.

* **DEEPSOUND B3 or T3 equipment** (Active internet connection required)
* **1 USB flash drive** (FAT32 or NTFS format recommended)
* **1 USB hub** (for port expansion)
* **USB keyboard and mouse**
* **Latest CM5 installation program** (`.zip` compressed file)

### [Equipment and Environment Reference]

<table style="width: 100%; border-collapse: collapse; text-align: center; border: 1px solid #e2e8f0; margin: 1.5rem 0;">
  <thead>
    <tr style="background-color: #f8fafc;">
      <th style="width: 50%; padding: 10px; border: 1px solid #e2e8f0; text-align: center; font-weight: 600; font-size: 0.95rem; color: #1e293b;">[1] USB</th>
      <th style="width: 50%; padding: 10px; border: 1px solid #e2e8f0; text-align: center; font-weight: 600; font-size: 0.95rem; color: #1e293b;">[2] USB Hub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 15px; border: 1px solid #e2e8f0; background-color: #ffffff; vertical-align: middle;">
        <img src="/images/03_Resources/Image/B3/B3%20Install%20media/USB.png" alt="USB" width="180" style="display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);" />
      </td>
      <td style="padding: 15px; border: 1px solid #e2e8f0; background-color: #ffffff; vertical-align: middle;">
        <img src="/images/03_Resources/Image/B3/B3%20Install%20media/USB%20허브.png" alt="USB Hub" width="180" style="display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);" />
      </td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <th style="padding: 10px; border: 1px solid #e2e8f0; text-align: center; font-weight: 600; font-size: 0.95rem; color: #1e293b;">[3] DEEPSOUND Equipment</th>
      <th style="padding: 10px; border: 1px solid #e2e8f0; text-align: center; font-weight: 600; font-size: 0.95rem; color: #1e293b;">[4] Internet Connection</th>
    </tr>
    <tr>
      <td style="padding: 15px; border: 1px solid #e2e8f0; background-color: #ffffff; vertical-align: middle;">
        <img src="/images/03_Resources/Image/B3/B3%20Install%20media/장비.png" alt="DEEPSOUND Equipment" width="180" style="display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);" />
      </td>
      <td style="padding: 15px; border: 1px solid #e2e8f0; background-color: #ffffff; vertical-align: middle;">
        <img src="/images/03_Resources/Image/B3/B3%20Install%20media/인터넷.png" alt="Internet Connection" width="180" style="display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);" />
      </td>
    </tr>
  </tbody>
</table>

---

## 2. Step-by-Step Update Guide

### Step 1: Download Program and Copy to USB

1. Use a PC to access the **Download** section on the **official DSPAUT website**.
2. Download the latest version of the CM5 program compressed file (`.zip`).
3. Extract the downloaded file and copy the executable files and related asset folders to the **root directory of the USB flash drive**.
4. Connect the **USB hub** to the USB port on the right side of the equipment, and insert the prepared **USB flash drive** into the hub.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/프로그램%20압축%20집.png" alt="Download Program and Prepare Compressed File" width="140" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); height: auto;" />

---

### Step 2: Enter Linux Desktop and Configure Environment

1. Connect the **keyboard and mouse** to the USB hub connected to the equipment.
2. Follow the click instructions on the system UI to **enter the Linux OS desktop**:
   * Click the **Configuration Icon** at the top of the screen or in the system tray.
   * Locate and select the **Device** item from the configuration and control menu, then click the **Minimize** button or the related hide tab in the top-right corner.
   * The configuration window will minimize to the bottom, allowing you to access the active Linux desktop.
3. The equipment is designed to allow desktop access via a keyboard and mouse for user convenience. This allows you to copy, move, and utilize internal files such as Data, Image, and Set files via USB.

> ⚠️ **IMPORTANT**  
> The equipment must remain **connected to the internet** throughout the entire update process.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/환경설정%20아이콘.png" alt="Click Configuration Icon" width="70" style="display: block; margin: 1.5rem auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/Device%20및%20Minimize%20선택.png" alt="Select Device and Minimize Window" width="420" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/환경설정%20목록.png" alt="Verify Configuration List and Complete Desktop Entry" width="420" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />

---

### Step 3: Close the Currently Running Program

1. Once the Linux desktop is visible, locate the main program window currently running on the screen.
2. Click the **"X" icon** in the top-right corner of the program window to completely close the existing software.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/실행%20중인%20프로그램.png" alt="Close Currently Running Existing Program" width="480" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />

---

### Step 4: Launch the System Dashboard

1. Click the **Web Browser Icon** on the desktop or the taskbar to launch a browser window.
2. Once the browser opens, enter the **IP address and port number (`8810`)** assigned to the equipment in the address bar to access the system dashboard.
   * *Connection Example*: `http://192.168.0.92:8810`
   * *Note*: IP addresses vary by device. Ensure you verify the correct IP address in the device settings before entering it.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/브라우저%20아이콘.png" alt="Click Web Browser Icon" width="90" style="display: block; margin: 1.5rem auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/브라우저%20창.png" alt="Enter Device IP Address in Address Bar" width="480" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/Dashboard%20창.png" alt="Successful Connection to Dashboard Admin Page" width="680" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); height: auto;" />

---

### Step 5: Select and Upload the Update File

1. Click the **Update** menu link in the top-right menu of the system dashboard page.
2. On the Update screen, click the **Choose File** button in the center.
3. In the file explorer window, select the connected **USB drive** from the left panel, locate the latest **CM5 update program file** copied earlier, and click to select it.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/Dashboard%20update%20위치.png" alt="Locate and Navigate to Update Menu in Dashboard" width="250" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/Dashboard%20update%20창.png" alt="Launch Choose File Window" width="480" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/USB%20안에%20프로그램%20선택.png" alt="Navigate and Select Update File inside USB" width="480" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />

---

### Step 6: Execute Update and Process Progress

1. Verify that the selected program filename is correctly displayed next to the Choose File button.
2. Once verified, click the **Start update** button at the bottom to initiate the update installation.
3. A `Running` status message will be displayed in the status bar while the internal system files are being replaced.
4. Once the installation is successful, the status message will change to **`Running ➔ Success`**, indicating that the update process is complete.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/USB%20프로그램%20선택%20완료.png" alt="Ready to Execute Start Update" width="480" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: auto;" />
<img src="/images/03_Resources/Image/B3/B3%20Install%20media/Update%20진행%20및%20완료.png" alt="Update Running and Success Message Verification" width="650" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); height: auto;" />

---

### Step 7: Reboot System and Verify Version

1. After confirming the installation success (`Success`) message, **completely turn the equipment power off and back on** to reboot the hardware system.
2. Once powered back on, the updated CM5 program will automatically launch in the background.
3. When the program interface appears, hover the mouse cursor over the **version display area in the bottom-left corner** of the UI to check the version information.
4. Verify that the old version has been successfully updated to the latest version to complete the manual procedure.

<img src="/images/03_Resources/Image/B3/B3%20Install%20media/버전%20체크.PNG" alt="Reboot Equipment and Final Version Cross-Verification" width="750" style="display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); height: auto;" />

---

> 💡 **Additional Tip**  
> If the program malfunctions or a specific data synchronization error occurs after the system update, please recheck the IP configuration to ensure the equipment is properly linked to the internet hub, or contact the SEONGSANLAB Co., Ltd. Technical Support Portal.
