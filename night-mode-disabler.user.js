// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @namespace http://tampermonkey.net/
// @version 1.0.0
// @description Disables Via Browser's night mode for specific whitelisted sites.
// @author ancandi
// @match *://*/*
// @run-at document-start
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    const disableNightModeOn = [
        'google.com',
        'youtube.com',
        'github.com'
    ];

    const currentHost = window.location.hostname;
    const shouldDisable = disableNightModeOn.some(domain => currentHost.includes(domain));

    if (shouldDisable) {
        const meta = document.createElement('meta');
        meta.name = "color-scheme";
        meta.content = "light only";
        document.head.appendChild(meta);

        const style = document.createElement('style');
        style.id = "anti-night-mode";
        style.innerHTML = `
            html, body {
                filter: none !important;
                -webkit-filter: none !important;
                background-color: white !important;
                color: black !important;
            }

            img, video, iframe, canvas {
                filter: none !important;
                -webkit-filter: none !important;
                opacity: 1 !important;
            }

            :root {
                color-scheme: light only !important;
            }
        `;
        
        const observer = new MutationObserver(() => {
            if (document.head && !document.getElementById('anti-night-mode')) {
                document.head.appendChild(style);
            }
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        if (document.head) {
            document.head.appendChild(style);
        }
    }
})();