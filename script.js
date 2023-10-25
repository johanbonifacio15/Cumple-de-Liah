document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.navbar-toggler');
    var navCollapse = document.querySelector('.navbar-collapse');

    menuToggle.addEventListener('click', function () {
        navCollapse.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({ behavior: 'smooth' });

            var navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler.offsetParent !== null) {
                navbarToggler.click();
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top');

    // Mostrar u ocultar el botón al hacer scroll
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    $(document).ready(function(){
        lightbox.init();
      });

    document.addEventListener('DOMContentLoaded', function () {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    });    

    // Hacer el desplazamiento suave hacia arriba al hacer clic en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});





