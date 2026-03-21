// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.2 beta
// @match *://*/*
// @run-at document-start
// @grant none
// ==/UserScript==

(function(d) {
    'use strict';
    const hosts = ['google.com', 'youtube.com', 'github.com'];
    if (!hosts.some(h => location.hostname.includes(h))) return;

    const s = d.createElement('style');
    s.id = "anti-night-mode";
    s.textContent = `
        :root, html, body {
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
        :root { color-scheme: light only !important; }
    `;

    const inject = () => {
        const root = d.head || d.documentElement;
        if (root && !d.getElementById(s.id)) {
            const m = d.createElement('meta');
            m.name = "color-scheme"; m.content = "light only";
            root.append(m, s);
        }
    };

    new MutationObserver(inject).observe(d.documentElement, { childList: true, subtree: true });
    inject();
})(document);