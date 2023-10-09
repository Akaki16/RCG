'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (this.window.scrollY > 100) {
            navbar.classList.add('navbar-scroll', 'fixed-top');
        } else {
            navbar.classList.remove('navbar-scroll', 'fixed-top');
        }
    });
});