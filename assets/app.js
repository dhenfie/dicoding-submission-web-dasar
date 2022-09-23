'use strict';

// navbar toggle
const navToggle = document.querySelector('.toggle-navbar');

// switchTheme Toggle
const switchThemeToggle = document.querySelector('.switch-theme');

// nav element
const navElement = document.querySelector('.nav');

// element dark theme
const darkElement = document.querySelector('[data-darkelement="true"]');

/**
 * cek apakah nav dalam keadaan terbuka atau tidak
 *
 * @returns {boolean}
 */
const navIsOpen = () => {
    return navElement.classList.contains('open');
};

/**
 * toggle nav
 *
 * @param {boolean} state
 */
const toggleNav = () => {
    if (navIsOpen()) {
        navElement.classList.remove('open');
        return;
    }
    navElement.classList.add('open');
};

/**
 * set theme
 */
const setTheme = state => {
    if (state === 'dark') {
        darkElement.classList.add('dark');
        return;
    }
    darkElement.classList.remove('dark');
};

/**
 * switch theme ke dark
 *
 * @param {HTMLSpanElement} e
 */
const switchTheme = e => {
    if (window.localStorage.getItem('dark-theme') === 'enabled') {
        e.classList.remove('isDark');
        window.localStorage.setItem('dark-theme', 'disabled');
        setTheme('light');
    } else {
        e.classList.add('isDark');
        window.localStorage.setItem('dark-theme', 'enabled');
        setTheme('dark');
    }
};

if (window.localStorage.getItem('dark-theme') === 'enabled') {
    switchThemeToggle.children[0].classList.add('isDark');
    setTheme('dark');
}

// register event handle
navToggle.addEventListener('click', () => toggleNav());
switchThemeToggle.addEventListener('click', e => switchTheme(e.target));
