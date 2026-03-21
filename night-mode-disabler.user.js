// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    const hosts = ['google.com', 'youtube.com', 'github.com'];
    if (!hosts.some(h => location.hostname.includes(h))) return;

    const s = d.createElement('style');
    s.id = "anti-night-mode";
    s.textContent = `
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
        :root { color-scheme: light only !important; }
    `;

    const inject = () => {
        if (!d.getElementById(s.id)) {
            if (d.head) {
                const m = d.createElement('meta');
                m.name = "color-scheme"; m.content = "light only";
                d.head.append(m, s);
            }
        }
    };

    new MutationObserver(inject).observe(d.documentElement, { childList: true, subtree: true });
    inject();
})(document);