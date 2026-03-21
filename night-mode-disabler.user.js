// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @namespace http://tampermonkey.net/
// @version 1.0.1
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

            /* Deep-Neutralize all media and UI components */
            img, video, iframe, canvas, [role="button"], svg {
                filter: none !important;
                -webkit-filter: none !important;
                opacity: 1 !important;
            }
        `;

        const inject = () => {
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
        };

        const observer = new MutationObserver(inject);
        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        inject();
    }
})();