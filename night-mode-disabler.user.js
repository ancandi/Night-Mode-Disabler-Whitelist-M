// ==UserScript==
// @name Night Mode Disabler (M)
// @version 1.0.1
// @match https://*.youtube.com/*
// @match https://*.google.com/*
// @run-at document-start
// ==/UserScript==

(function(d) {
    'use strict';
    const s = d.createElement('style');
    s.innerHTML = `html, body { background: #fff !important; color: #000 !important; color-scheme: light !important; } 
                   [dark], .dark, [theme="dark"] { background: #fff !important; color: #000 !important; }`;
    d.documentElement.appendChild(s);

    const check = () => {
        const root = d.documentElement;
        if (root.hasAttribute('dark') || root.classList.contains('dark')) {
            root.removeAttribute('dark');
            root.classList.remove('dark');
        }
        root.style.setProperty('color-scheme', 'light', 'important');
    };

    const ob = new MutationObserver(check);
    ob.observe(d.documentElement, { attributes: true, attributeFilter: ['class', 'dark', 'style'] });
    d.addEventListener('DOMContentLoaded', check);
})(document);
