// ==UserScript==
// @name Night Mode Disabler (Safari)
// @namespace http://tampermonkey.net/
// @version 1.0.1-S
// @description Disables Safari's night mode for specific whitelisted sites.
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
        'github.com/*'
    ];

    const currentHost = window.location.hostname;
    const shouldDisable = disableNightModeOn.some(domain => currentHost.includes(domain));

    if (shouldDisable) {
        const meta = document.createElement('meta');
        meta.name = "color-scheme";
        meta.content = "light only";

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

        (function loop() {
            const target = document.head || document.documentElement;
            if (target && !document.getElementById('anti-night-mode')) {
                target.appendChild(meta);
                target.appendChild(style);
            }
            window.requestAnimationFrame(loop);
        })();
    }
})();