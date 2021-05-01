(function ($) {
    // Use Strict
    "use strict"; 

    $('.au-grid').each(function () {
        var grid = $(this);
        var g = grid.find('.au-grid-body');
        g.isotope({
            itemSelector: '.au-grid-item',
            layoutMode: 'fitRows',
        });
        grid.find('.list-item').each(function () {
            $(this).children().on('click', function () {
                var filter = $(this).data('filter');
                g.isotope({
                    filter: filter,
                });
            });
        })
    });
})(jQuery);