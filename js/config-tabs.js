
(function ($) {
	// Use Strict
    "use strict"; 
	try {
		$('.tabs').each(function () {
			var $this = $(this),
				$tab = $this.find('> .tab-title > span'),
				$items = $this.find('.tab-item'),
				active = $this.attr('data-active') - 1;
			$items.hide();

			if (active != NaN) {

				$tab.eq(active).addClass('active');
				$items.eq(active).addClass('active');
				$items.eq(active).show();
			} else {
				$tab.eq(0).addClass('active');
				$items.eq(0).addClass('active');
				$items.eq(0).show();
			}
			$tab.on('click',function () {
				var id = $(this).index();
				var pos = $(this).position().left + parseInt($(this).css('marginLeft'));
				$(this).parent().children('.animate').css('transform', 'translateX(' + pos + 'px)');

				$tab.removeClass('active').eq(id).addClass('active');
				$items.hide().eq(id).fadeIn();
			});
		});
	} catch (err) {
		console.log(err);
	}
})(jQuery);