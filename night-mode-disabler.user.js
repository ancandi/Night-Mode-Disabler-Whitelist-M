// ==UserScript==
// @name          Smooth Night Mode (No UI)
// @version       2.0.0
// @match         *://*/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

(function(d, w) {
    'use strict';

    // --- INPUT YOUR SITES HERE ---
    const hosts = ['google.com', 'youtube.com', 'github.com'];
    const isWhitelisted = hosts.some(h => location.hostname.includes(h));
    if (!isWhitelisted) return;

    const CFG = { inv: 90, med: 100, delay: 500 };
    let last = 0;

    const s = d.createElement('style');
    s.id = "smooth-night-logic";
    s.textContent = `
        html.night-mode {
            -webkit-filter: invert(${CFG.inv}%) !important;
            filter: invert(${CFG.inv}%) !important;
            background: #fff !important;
        }
        html.night-mode img, 
        html.night-mode video, 
        html.night-mode iframe, 
        html.night-mode canvas, 
        html.night-mode svg {
            -webkit-filter: invert(${CFG.med}%) !important;
            filter: invert(${CFG.med}%) !important;
        }
    `;

    const init = () => {
        const root = d.documentElement;
        if (!d.getElementById(s.id)) root.appendChild(s);
        if (w.localStorage.nightMode === "true") root.classList.add('night-mode');
    };

    d.addEventListener('keydown', e => {
        if (e.key !== "Escape") return;
        const now = Date.now();
        if (now - last < CFG.delay) {
            const root = d.documentElement;
            const isNight = root.classList.toggle('night-mode');
            w.localStorage.nightMode = isNight;
        }
        last = now;
    });

    init();
    new MutationObserver(init).observe(d.documentElement, { childList: true });
})(document, window);