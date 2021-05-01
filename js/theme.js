(function ($) {
    // Use Strict
    "use strict";

    $(window).on('load', function () {
        $('.loading').fadeOut();
    });

})(jQuery),

// Sticky Header
(function ($) {
    // Use Strict
    "use strict";

    var n = $('.header'),
        s = n.outerHeight();
    n.after("<div class='header__holder'></div>");
    $(window).on('scroll', function () {
        $(window).scrollTop() > s ?
            ($('.header__holder').css("height", s), n.addClass('header__fixed')) :
            ($('.header__holder').css("height", 0), n.removeClass('header__fixed'))
    });
})(jQuery),
// Menu
(function ($) {
    // Use Strict
    "use strict";

    var menu = $('.header-wrapper-desktop').find('.navbar-menu');
    menu.find('li').on('mouseenter', function () {
        $(this).find('>.sub-menu').slideDown('300');
    }).on('mouseleave', function () {
        $(this).find('> .sub-menu').slideUp('300');
    });
})(jQuery),

// Mobile Menu
(function ($) {
    // Use Strict
    "use strict";

    $('.header-mobile__button').on('click', function () {
        $(this).children().toggleClass('active');
        $('.header-mobile__navbar').slideToggle(300);
    });

    $('.header-mobile__navbar li').each(function () {
        if ($(this).children().length > 1) {
            $(this).children('a').append("<span></span>");
        }
        $(this).on('click', function () {
            $(this).toggleClass('active');
            $(this).find('>.sub-menu').slideToggle();
        });
    });
})(jQuery),
// #Color Overlay
(function ($) {
    // Use Strict
    "use strict";

    $('.overlay').each(function () {
        var overlay = $(this);
        var color = overlay.data('color');
        var opacity = overlay.data('opacity');
        overlay.css({
            backgroundColor: color,
            opacity: opacity,
        });
        overlay.siblings().css('position', 'relative');
    });
    $('.bg-fixed').each(function () {
        var bg = $(this);
        var imageUrl = bg.data('image');
        bg.css({
            backgroundImage: 'url(' + imageUrl + ')',
        })

    });
})(jQuery),
// #video play
(function ($) {
    // Use Strict
    "use strict";

    $('.video-play').each(function () {
        $(this).children('a').on('click', function () {
            $(this).hide();
            $(this).parent().parent().find('.video-thumbnail').hide();
            $(this).parent().parent().find('.play-video').show();
            $(this).parent().parent().find('iframe').attr("src", $(this).attr("href"));
        });
    });
})(jQuery),

(function ($) {
    // Use Strict
    "use strict";
    
    $('.video-play').each(function () {
        $(this).children('a').on('click', function () {
            $(this).hide();
            $(this).parent().parent().find('.video-image-thumbnail').hide();
            $(this).parent().parent().find('.play-video').show();
            $(this).parent().parent().find('iframe').attr("src", $(this).attr("href"));
        });
    });
})(jQuery);