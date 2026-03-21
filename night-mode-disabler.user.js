// ==UserScript==
// @name Night Mode Disabler M
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d, l) {
    'use strict';
    if (!['google.com','youtube.com','github.com'].some(h => l.host.includes(h))) return;

    const s = d.createElement('style');
    s.id = "a-n";
    s.innerHTML = `html,body{filter:none!important;-webkit-filter:none!important;background:#fff!important;color:#000!important}img,video,iframe,canvas{filter:none!important;-webkit-filter:none!important;opacity:1!important}:root{color-scheme:light only!important}`;

    const i = () => {
        if (!d.getElementById(s.id) && d.documentElement) {
            const m = d.createElement('meta'); m.name="color-scheme"; m.content="light only";
            (d.head || d.documentElement).append(m, s);
        }
    };

    new MutationObserver(i).observe(d.documentElement, {childList:1, subtree:1});
    i();
})(document, location);