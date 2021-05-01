(function ($) {
    // Use Strict
    "use strict"; 

    $('.owl-carousel').each(function () {


        var $carousel = $(this);

        if ($carousel.hasClass('last-half')) {
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                dotsData: $carousel.data("dotsdata"),
                items: $carousel.data("items"),
                slideBy: $carousel.data("slideby"),
                center: $carousel.data("center"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                nav: $carousel.data("nav"),
                autoplay: true,
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                navText: ['<span class="fa fa-chevron-left"><span>', '<span class="fa fa-chevron-right"></span>'],
                responsive: $carousel.data("responsive"),
                animateOut: $carousel.data("animateout"),
                animateIn: $carousel.data("animatein"),
                stagePadding: 150

            });
        } else {
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                dotsData: $carousel.data("dotsdata"),
                items: $carousel.data("items"),
                slideBy: $carousel.data("slideby"),
                center: $carousel.data("center"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                nav: $carousel.data("nav"),
                autoplay: true,
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                navText: ['<span class="fa fa-chevron-left"><span>', '<span class="fa fa-chevron-right"></span>'],
                responsive: $carousel.data("responsive"),
                animateOut: $carousel.data("animateout"),
                animateIn: $carousel.data("animatein"),
            });
        }
    });
})(jQuery),


(function ($) {
    // Use Strict
    "use strict"; 

    var owlNav = $('.js-owl-nav');
    $('.js-owl-nav').each(function () {
        var owlNav = $(this);
        owlNav.append("<div class='au-owl-prev'><i class='fa fa-angle-left'></i></div>");
        owlNav.append("<div class='au-owl-next'><i class='fa fa-angle-right'></i></div>");

        owlNav.children('.au-owl-prev').on('click', function () {
            $(this).parent('.owl-carousel').trigger('prev.owl.carousel');
        });
        owlNav.children('.au-owl-next').on('click', function () {
            $(this).parent('.owl-carousel').trigger('next.owl.carousel');
        });
    });

    $('.js-owl-nav-1').each(function () {
        var owlNav1 = $(this);
        owlNav1.find('.au-owl-next').on('click', function () {
            owlNav1.parent().find('.owl-carousel').trigger('next.owl.carousel');
        });
        owlNav1.find('.au-owl-prev').on('click', function () {
            owlNav1.parent().find('.owl-carousel').trigger('prev.owl.carousel');
        });
    });

    $('.au-owl-dots').each(function () {
        var top = $(this).data('dot-top') != '' ? $(this).data('dot-top') : 4;
        $(this).children('.owl-dots').css('marginTop', top + 'px');
    });
})(jQuery);