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
    s.textContent = ':root,html,body{filter:none!important;-webkit-filter:none!important;background:#fff!important;color:#000!important;color-scheme:light only!important;}img,video{filter:none!important;opacity:1!important;}';
    
    (function l() {
        if (!d.getElementById('a-n')) { s.id='a-n'; (d.head||d.documentElement).append(s); }
        d.documentElement.removeAttribute('dark');
        requestAnimationFrame(l);
    })();
})(document);