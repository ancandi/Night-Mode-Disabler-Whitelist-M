// ==UserScript==
// @name        Night-Mode-Disabler-S
// @version     1.0.1
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    if (!/youtube\.com|google\.com/.test(location.hostname)) return;

    const d = document.documentElement,
          s = document.createElement('style');

    s.textContent = ':root,html,body{background:#fff!important;color-scheme:light!important;filter:none!important;-webkit-filter:none!important}*{filter:none!important;-webkit-filter:none!important}';

    const f = () => {
        if (!d.contains(s)) d.append(s);
        d.setAttribute('data-apple-color-scheme', 'light');
    };

    f();
    d.addEventListener('DOMContentLoaded', f);
})();
