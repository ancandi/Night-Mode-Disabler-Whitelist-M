// ==UserScript==
// @name Night Mode Disabler [Safari Elite]
// @version 1.0.0-S
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    const hosts = ['google.com', 'youtube.com', 'github.com'];
    if (!hosts.some(h => location.hostname.includes(h))) return;

    const s = d.createElement('style');
    s.id = "anti-night-mode";
    s.innerHTML = `
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
        if (!d.getElementById(s.id)) {
            const m = d.createElement('meta');
            m.name = "color-scheme"; 
            m.content = "light only";
            (d.head || d.documentElement).append(m, s);
        }
        requestAnimationFrame(loop);
    })();
})(document);