// ==UserScript==
// @name Night Mode Disabler (Safari)
// @version 1.0.2-S beta
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    if (!['google.com','youtube.com','github.com/*'].some(h => location.hostname.includes(h.replace('/*','')))) return;

    const s = d.createElement('style');
    s.id = 'a-n';
    s.textContent = 'html,body{filter:none!important;-webkit-filter:none!important;background:#fff!important;color:#000!important}img,video,iframe,canvas{filter:none!important;-webkit-filter:none!important;opacity:1!important}:root{color-scheme:light only!important}';

    (function l(){
        const h = d.head || d.documentElement;
        if (h && !d.getElementById(s.id)) {
            const m = d.createElement('meta'); m.name="color-scheme"; m.content="light only";
            h.append(m, s);
        }
        requestAnimationFrame(l);
    })();
})(document);