/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function openImageModal(imgSrc) {
    document.getElementById('modalImage').src = imgSrc;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', function() {
    const btnInformatique = document.getElementById('btn-informatique');
    const btnGestion = document.getElementById('btn-gestion');
    const expInformatique = document.getElementById('experiences-informatique');
    const expGestion = document.getElementById('experiences-gestion');

    const btnFiti = document.getElementById('fitiCard');
    const btnOrange = document.getElementById('orangeCard');

    btnInformatique.addEventListener('click', function() {
        expInformatique.style.display = 'block';
        expGestion.style.display = 'none';
        btnInformatique.classList.add('active');
        btnGestion.classList.remove('active');
    });

    btnGestion.addEventListener('click', function() {
        expInformatique.style.display = 'none';
        expGestion.style.display = 'block';
        btnInformatique.classList.remove('active');
        btnGestion.classList.add('active');
    });

    btnFiti.addEventListener('click', function() {
        window.location.href = 'fiti.html';
    });
    btnOrange.addEventListener('click', function() {
        window.location.href = 'orange.html';
    });

});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

