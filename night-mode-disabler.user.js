// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @namespace http://tampermonkey.net/
// @version 1.0
// @description Disables Via Browser's night mode for specific whitelisted sites.
// @author ancandi
// @match *://*/*
// @run-at document-start
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    // --- CONFIGURATION ---
    // Add domains where you want to DISABLE Via's Night Mode
    const disableNightModeOn = [
        'google.com',
        'youtube.com',
        'github.com'
    ];

    const currentHost = window.location.hostname;
    const shouldDisable = disableNightModeOn.some(domain => currentHost.includes(domain));

    if (shouldDisable) {
        // 1. Force the color-scheme to light
        const meta = document.createElement('meta');
        meta.name = "color-scheme";
        meta.content = "light only";
        document.head.appendChild(meta);

        // 2. Inject CSS to neutralize Via's typical "Night Mode" filters
        const style = document.createElement('style');
        style.id = "anti-night-mode";
        style.innerHTML = `
            /* Neutralize Via's inversion filters */
            html, body {
                filter: none !important;
                -webkit-filter: none !important;
                background-color: white !important; /* Forces background back to white */
                color: black !important; /* Forces text back to black */
            }

            /* Ensure images/videos aren't double-inverted or dimmed */
            img, video, iframe, canvas {
                filter: none !important;
                -webkit-filter: none !important;
                opacity: 1 !important;
            }

            /* Tell the browser explicitly to prefer light mode colors */
            :root {
                color-scheme: light only !important;
            }
        `;
        
        // Use a MutationObserver to ensure our style stays at the bottom (highest priority)
        const observer = new MutationObserver(() => {
            if (document.head && !document.getElementById('anti-night-mode')) {
                document.head.appendChild(style);
            }
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        // Initial attempt to add to head
        if (document.head) {
            document.head.appendChild(style);
        }
    }
})();
