(function ($) {
    "use strict";

    // smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        //if same host and page
        if (location.hostname == this.hostname && location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')) {
            var hash = this.hash;
            var target = $(hash);
            if (target.length > 0) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 57)
                }, 1000, function () {
                    //add hash to url
                    //window.location.hash = hash;
                });
                return false;
            }
        }
    });

    var cycle_bg_images =['image-cycle-1','image-cycle-2'];
    var random_number = Math.floor(Math.random() * cycle_bg_images.length);
    var class_to_add = cycle_bg_images[random_number];

    $('header').addClass(class_to_add);

    //close nav bar if open
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    //active scrollspy for main nav
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    //add highlight to nav bar if not at top of page
    var navbar = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-highlight");
        } else {
            $("#mainNav").removeClass("navbar-highlight");
        }
    };
    navbar();
    $(window).scroll(navbar);

    // Scroll reveal calls
    window.sr = ScrollReveal();

    sr.reveal('.sr-contact-1', {
        delay: 200,
        scale: 0
    });
    sr.reveal('.sr-contact-2', {
        delay: 400,
        scale: 0
    });
    sr.reveal('.sr-contact-3', {
        delay: 600,
        scale: 0
    });
    sr.reveal('.sr-contact-4', {
        delay: 800,
        scale: 0
    });
    sr.reveal('.sr-button', {
        delay: 200,
        distance: '15px',
        origin: 'bottom',
        scale: 0.8
    });
    sr.reveal('.sr-contact-1', {
        delay: 200,
        scale: 0
    });
    sr.reveal('.sr-contact-2', {
        delay: 400,
        scale: 0
    });

})(jQuery); // End of use strict
