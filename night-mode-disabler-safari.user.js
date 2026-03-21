// ==UserScript==
// @name Night Mode Disabler [Safari]
// @version 1.0.1-S
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    if (!['google.com','youtube.com','github.com'].some(h => location.host.includes(h))) return;

    const s = d.createElement('style');
    s.id = 'a-n';
    s.textContent = 'html,body{filter:none!important;-webkit-filter:none!important;background:#fff!important;color:#000!important;} img,video,iframe,canvas{filter:none!important;-webkit-filter:none!important;opacity:1!important;} :root{color-scheme:light only!important;}';
    
    (function l() {
        if (!d.getElementById(s.id)) {
            const m = d.createElement('meta'); m.name="color-scheme"; m.content="light only";
            (d.head || d.documentElement).append(m, s);
        }
        requestAnimationFrame(l);
    })();
})(document);