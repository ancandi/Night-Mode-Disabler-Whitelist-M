# Night Mode Disabler (Whitelist) 🌙🚫
**A high-performance, data-lite solution designed to neutralize "Forced Dark Mode" on specific mobile websites. Optimized for speed, battery efficiency, and color accuracy.**

Unlike global toggles, this script targets browser engines (Kiwi, Safari, Via) that force-inject aggressive dark filters, ensuring your whitelisted sites maintain their original, high-fidelity UI.

<br>

## 📥 Installation
**[Download for Chrome / Firefox / Android](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/refs/heads/main/night-mode-disabler.user.js)** *(Optimized for Blink/Chromium engines)*

**[Download for Safari / iOS / macOS](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/refs/heads/main/night-mode-disabler-safari.user.js)** *(Optimized for WebKit & Apple-specific rendering flags)*

<br>

## 🛠️ How to Use
* **Install**: Add the script to your preferred manager (Firefox, Userscripts for Safari, or Tampermonkey).
* **Automatic Detection**: The script identifies your current domain; if it matches the internal whitelist, all forced filters are instantly purged.
* **Default Whitelist**: Pre-configured for **`google.com`** and **`youtube.com`**. These sites have native dark modes that work better than browser-forced filters.

<br>

## 🚀 Key Features
* **Hardware-Level Bypass**: Injects **`color-scheme: light !important`** to signal the GPU to stop darkening system-level UI elements.
* **WebKit Neutralization (Safari Only)**: Uses specific **`-webkit-filter`** resets to kill Safari's "Smart Invert" and muddy overlays.
* **Zero-Latency Injection**: Executes at **`document-start`** to eliminate the "flash of dark" (FOD) during page loads.
* **Universal Match Architecture**: Active on all sites but utilizes an ultra-lean Regex check to ensure zero CPU overhead on non-whitelisted domains.

<br>

## ⚡ Technical Comparison
| Feature | Generic YouTube (Mobile) | Generic Video Player | Overdrive Optimized |
| :--- | :--- | :--- | :--- |
| **Bitrate Cap** | Aggressive (App-Level) | Browser-Level Throttle | **Bypassed (Desktop Logic)** |
| **Codec Priority** | Low-Bandwidth AVC1 | System Default | **High-Fidelity VP9/AV1** |
| **Buffering** | Static/Predictive | Reactive (Late) | **rAF Real-time Monitoring** |
| **Visual Clarity** | Muddy (Compression) | Standard | **Crisp (Zero-Artifact)** |
| **Data Logic** | Throttled on Cellular | Unoptimized | **Adaptive Throughput** |

<br>

## ⚙️ Other Utility Extensions
- Looking for more? Try out other userscript utilities: [Evade - Link Bypasser](https://skipped.lol/)

`[System Overview: Available Consumer-Based Active Mobile Userscripts]`

<img width="200" height="500" alt="image" src="https://github.com/user-attachments/assets/ea1f8205-4a4a-49f3-9eae-7b6e3d35873f" />

<br>

## 📜 Copyright
Personal use and modification are permitted. Repackaging, rebranding, or unauthorized publishing of this code is strictly forbidden. 

© Copyright 2026. All rights reserved.
