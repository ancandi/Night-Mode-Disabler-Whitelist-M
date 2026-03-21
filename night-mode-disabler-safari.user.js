// ==UserScript==
// @name Night Mode Disabler [Safari]
// @version 1.0.1-S
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    const disableNightModeOn = ['google.com', 'youtube.com', 'github.com'];
    if (!disableNightModeOn.some(h => window.location.host.includes(h))) return;

    const style = document.createElement('style');
    style.id = "anti-night-mode";
    style.innerHTML = `
        :root, html, body {
            filter: none !important;
            -webkit-filter: none !important;
            background-color: white !important;
            color: black !important;
            color-scheme: light only !important;
        }
        img, video, iframe, canvas {
            filter: none !important;
            -webkit-filter: none !important;
            opacity: 1 !important;
        }
    `;

    (function loop() {
        const target = document.head || document.documentElement;
        if (target && !document.getElementById('anti-night-mode')) {
            if (!document.querySelector('meta[name="color-scheme"]')) {
                const meta = document.createElement('meta');
                meta.name = "color-scheme";
                meta.content = "light only";
                target.appendChild(meta);
            }
            target.appendChild(style);
        }
        window.requestAnimationFrame(loop);
    })();
})();