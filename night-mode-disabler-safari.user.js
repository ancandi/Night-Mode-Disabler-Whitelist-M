// ==UserScript==
// @name Night Mode Disabler (Whitelist)
// @version 1.0.2-S beta
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    if (!['google.com','youtube.com','github.com'].some(h => location.host.includes(h))) return;
    const s = d.createElement('style'); s.id = 'a-n';
    s.textContent = ':root,html,body{filter:none!important;-webkit-filter:none!important;background-color:white!important;color:black!important} img,video,iframe,canvas{filter:none!important;-webkit-filter:none!important;opacity:1!important} :root{color-scheme:light only!important}';
    (function l(){
        const r = d.head || d.documentElement;
        if (r && !d.getElementById(s.id)) {
            const m=d.createElement('meta'); m.name="color-scheme"; m.content="light only";
            r.append(m, s);
        }
        requestAnimationFrame(l);
    })();
})(document);