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
        :root, html, body, * { filter: none !important; -webkit-filter: none !important; color-scheme: light only !important; }
        html, body { background-color: white !important; color: black !important; }
        img, video, iframe, canvas { opacity: 1 !important; }
    `;

    const inject = () => {
        if (d.head && !d.getElementById(s.id)) {
            const m = d.createElement('meta'); m.name = "color-scheme"; m.content = "light only";
            d.head.append(m, s);
        }
    };

    new MutationObserver(inject).observe(d.documentElement, { childList: true, subtree: true });
    inject();
})(document);