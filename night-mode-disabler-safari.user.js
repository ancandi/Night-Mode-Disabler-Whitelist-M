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
    s.textContent = ':root,html,body,* {filter:none!important;-webkit-filter:none!important;color-scheme:light only!important;} html,body{background:#fff!important;color:#000!important;} img,video{opacity:1!important;}';
    
    (function l() {
        if (!d.getElementById(s.id)) (d.head || d.documentElement).append(s);
        requestAnimationFrame(l);
    })();
})(document);