// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    const hosts = ['google.com', 'youtube.com', 'github.com/*'];
    const should = hosts.some(h => window.location.hostname.includes(h));

    if (should) {
        const meta = document.createElement('meta');
        meta.name = "color-scheme"; meta.content = "light only";

        const style = document.createElement('style');
        style.id = "anti-night-mode";
        style.innerHTML = `html, body { filter: none !important; -webkit-filter: none !important; background-color: white !important; color: black !important; } 
                           img, video, iframe, canvas { filter: none !important; -webkit-filter: none !important; opacity: 1 !important; } 
                           :root { color-scheme: light only !important; }`;
        
        const inject = () => {
            const target = document.head || document.documentElement;
            if (target && !document.getElementById('anti-night-mode')) {
                target.appendChild(meta);
                target.appendChild(style);
            }
        };

        new MutationObserver(inject).observe(document.documentElement, { childList: true, subtree: true });
        inject();
    }
})();