# Night Mode Disabler (Whitelist) 🌙🚫
**A lightweight userscript and mobile solution designed to bypass and disable "Night Mode" or "Dark Mode" filters on specific websites.**

Unlike global dark mode toggles, this script targets browsers (like Via) that force-inject dark filters, ensuring your whitelisted sites maintain their original, intended colors and visibility.

<br>

## 🛠️ How to Use
* **Install**: Use a userscript manager such as Tampermonkey, Greasemonkey, or mobile equivalents like Kiwi or Via. Install link found here:

  [Night Mode Disabler Whitelist – JavaScript](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/blob/main/night-mode-disabler.js)
  
* **Configure**: Edit the `disableNightModeOn` constant within the script to add your preferred domains.
* **Default Whitelist**: The script is currently pre-configured for `google.com`, `youtube.com`, and `github.com`.

<br>

## 🚀 Key Features
* **Force Light Mode**: Injects a `color-scheme: light only` meta tag to signal the browser to stop darkening the UI.
* **Filter Neutralization**: Strips away CSS inversion filters and opacity shifts that often make images and videos look "muddy" in forced night modes.
* **Dynamic Persistence**: Uses a `MutationObserver` to ensure the "Anti-Night Mode" styles remain active even if the page dynamically updates.
* **Custom Whitelist**: Users can easily define which domains should remain in light mode within the script.
  
## ⚙️ Other Utility Extensions
- You might want to try out other userscript utilities available on both Mobile/Desktop such as: [[Evade - Link Bypasser]](skipped.lol)
  
<br>

## ⚡ Technical Details
* **Targeting**: The script runs at `document-start` for the fastest possible UI correction.
* **Data-Lite**: Optimized to be as lightweight as possible with no external dependencies.
* **Universal Match**: Active on all sites (`*://*/*`) but only executes logic if the domain matches your specific whitelist.

<br>

## 📜 Copyright
Personal use and modification are permitted. Repackaging, rebranding, or unauthorized publishing of this code is strictly forbidden. 

© Copyright 2026. All rights reserved.
