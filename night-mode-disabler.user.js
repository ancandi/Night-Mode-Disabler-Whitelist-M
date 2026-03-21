// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    const domains = ['google.com', 'youtube.com', 'github.com'];
    if (!domains.some(h => location.hostname.includes(h))) return;

    const s = d.createElement('style');
    s.id = "anti-night";
    s.textContent = `
        :root, html, body { 
            filter: none !important; 
            -webkit-filter: none !important; 
            background: #fff !important; 
            color: #000 !important; 
            color-scheme: light only !important; 
        }
        img, video, iframe, canvas { 
            filter: none !important; 
            -webkit-filter: none !important; 
            opacity: 1 !important; 
        }
    `;

    const inject = () => {
        if (d.head && !d.getElementById('anti-night')) d.head.append(s);
        if (d.documentElement.hasAttribute('dark')) d.documentElement.removeAttribute('dark');
    };

    const mo = new MutationObserver(inject);
    mo.observe(d.documentElement, { childList: true, subtree: true, attributes: true });
    inject();
})(document, window);