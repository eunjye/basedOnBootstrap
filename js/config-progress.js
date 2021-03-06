(function ($) {
    // Use Strict
    "use strict"; 
    try {
        var progressbarSimple = $('.js-progressbar-simple');
        progressbarSimple.each(function () {
            var that = $(this);
            var executed = false;
            $(window).on('load', function () {
                // $(document).ready(function () {
                    that.waypoint(function () {
                        if (!executed) {
                            executed = true;
                            /*progress bar*/
                            that.progressbar({
                                update: function (current_percentage, $this) {
                                    $this.find('.js-value').html(current_percentage + '%');
                                }
                            }); 
                        }
                    }, {
                        offset: 'bottom-in-view'
                    });
                // });
            });
        });
    } catch (err) {
        console.log(err);
    }
})(jQuery);