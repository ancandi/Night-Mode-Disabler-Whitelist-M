// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.2 beta
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    const hosts = ['google.com', 'youtube.com', 'github.com/*'];
    if (!hosts.some(h => location.hostname.includes(h.replace('/*','')))) return;

    const s = d.createElement('style');
    s.id = "a-n";
    s.textContent = `html,body{filter:none!important;-webkit-filter:none!important;background:#fff!important;color:#000!important}img,video,iframe,canvas{filter:none!important;-webkit-filter:none!important;opacity:1!important}:root{color-scheme:light only!important}`;

    const i = () => {
        const h = d.head || d.documentElement;
        if (h && !d.getElementById(s.id)) {
            const m = d.createElement('meta'); m.name="color-scheme"; m.content="light only";
            h.append(m, s);
        }
    };

    new MutationObserver(i).observe(d.documentElement, {childList:1, subtree:1});
    i();
})(document);