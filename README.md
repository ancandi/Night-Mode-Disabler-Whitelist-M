# Night Mode Disabler (Whitelist) 🌙🚫
**A high-performance, data-lite solution designed to neutralize "Forced Dark Mode" on specific mobile websites. Optimized for speed, battery efficiency, and color accuracy.**

Unlike global toggles, this script targets browser engines (Kiwi, Safari, Via) that force-inject aggressive dark filters, ensuring your whitelisted sites maintain their original, high-fidelity UI.

<br>

## 📥 Installation
**[Download for Chrome / Firefox / Android](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/refs/heads/main/night-mode-disabler.user.js)** *(Optimized for Blink/Chromium engines)*

**[Download for Safari / iOS / macOS](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/refs/heads/main/night-mode-disabler-safari.user.js)** *(Optimized for WebKit & Apple-specific rendering flags)*

>Note: No tests have been made for the Safari version 1.0.1.

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

## AND1 UserScripts — This is the complete collection of high-performance, streamlined userscripts designed to reclaim control over mobile web experiences. ⬇
> Otherwise, check out the full source code and technical documentation at **[github.com/ancandi](https://github.com/ancandi)**.

<br>
## 🔍 Looking for more?
### 🛠️ The Userscript Directory
> **Optimization Level:** Featherweight | **Last Updated:** 2026

#### 🚀 Primary Utilities (ancandi)
* **YouTube Mobile URL Shield AB+** — UI-driven unmute & ad-nuke (v3.0.8).
* **Video Bitrate O/BA** — Adaptive codec & bitrate overdrive (v1.0.1).
* **Night Mode Disabler (Whitelist)** — Contrast control for mobile UI.
* **YouTube Shield (Zero UI)** — Invisible automation engine (v4.0.1).

#### 🔗 External Resources
* ⚡ **Evade** — via **[Evade - Link Bypasser](https://skipped.lol/)**
* **AdGuard Extra** — Advanced anti-adblock bypass.
* **AdsBypasser** — Countdown and redirect skip logic.
* **FMHY Base64 Auto Decoder** — Automatic string decoding for piracy/sharing.
* **Bypass All Shortlinks** — Universal link-shortener skip.
* **I don't care about cookies** — Automated cookie consent handling.

#### ⚠️ Maintenance & Status
* **Login reminder popup remover** — `[DEVELOPMENT CEASED]`
---
## AND1 UserScripts — This is the complete collection of high-performance, streamlined userscripts designed to reclaim control over mobile web experiences. ⬇
> Otherwise, check out the full source code and technical documentation at **[github.com/ancandi](https://github.com/ancandi)**.

---

#### 🚀 Video Bitrate O/BA
**Version 1.0.1** | *Adaptive Codec & Bitrate Overdrive*
Forces high-fidelity VP9/AV1 streams and bypasses mobile data throttling by hijacking the MediaSource API and mapping bitrate to real-time resolution.

* **>Install: Video Bitrate O/BA**
    * [Standard Build (Blink)](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/video-bitrate-oba.user.js)
* **>Install: Video Bitrate O/BA [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/video-bitrate-oba-safari.user.js)

---

#### 🛡️ YouTube Mobile URL Shield AB+
**Version 3.0.8** | *UI-Driven Interaction Off*
Automates the "Tap to Unmute" process on mobile, nukes monetization-slots, and prevents player stalls with a custom frosted-glass UI.

* **>Install: YouTube Mobile URL Shield AB+**
    * [Standard Build](https://github.com/ancandi/YouTube-Mobile-URL-Shield-AB/raw/refs/heads/main/main/url-shield-ab+-latest-beta.user.js)
* **>Install: YouTube Mobile URL Shield AB+ [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/YouTube-Mobile-URL-Shield-AB/raw/refs/heads/main/main/url-shield-ab+-safari-beta.user.js)

---

#### 🌙 Night Mode Disabler & Whitelist (M)
**Version 1.0.1** | *Contrast & UI Control*
Prevents aggressive "Forced Dark Mode" on mobile browsers from breaking specific site UI elements. Includes whitelist settings to maintain original site aesthetics where dark mode fails.

* **>Install: Night Mode Disabler**
    * [Standard Build](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/main/night-mode-disabler.user.js)
* **>Install: Night Mode Disabler [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/main/night-mode-disabler-safari.user.js)
      
---

<br>

## 📜 Copyright
Personal use and modification are permitted. Repackaging, rebranding, or unauthorized publishing of this code is strictly forbidden. 

© Copyright 2026. All rights reserved.
