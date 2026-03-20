// ==UserScript==
// @name        Night-Mode-Disabler-Whitelist-M
// @version     1.0.1
// @match       https://*.youtube.com/*
// @match       https://*.google.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    const d = document.documentElement;
    const s = document.createElement('style');

    s.textContent = `
        html, body { 
            background: #fff !important; 
            filter: none !important; 
            color-scheme: light !important; 
        }
        * { filter: none !important; }
    `;

    const inject = () => {
        if (!d.contains(s)) d.appendChild(s);
        d.setAttribute('data-force-light-mode', 'true');
    };

    inject();
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', inject);
    }
})();
