/* global AgentFire, AreaGuide, sparkLazyLoader */

AreaGuide.gallery = function ($) {
	$('.agb-gallery:not(.initialized)').each(function () {
		new AreaGuide._gallery($, $(this));
	});
};

AreaGuide._gallery = function ($, $element) {
	var $items = $element.find('.agb-gallery__item');
	if ($items.length > 0 ) {
		$element.on('init', function() {
			AgentFire.Unveil.add($element, sparkLazyLoader.preloadNextSlide);
		}).on('afterChange', function() {
			sparkLazyLoader.preloadNextSlide($element);
		}).slick({
			slidesToShow: $element.data('columns'),
			slidesToScroll: 1,
			arrows: true,
			variableWidth: false,
			infinite: false,
			rows: 0,
			dots: false,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		$element.find('a').magnificPopup({
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1],
				tCounter: ''
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return '';
				}
			},
			iframe: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: '//www.youtube.com/embed/%id%?autoplay=1'
					},
					youtube_short: {
						index: 'youtu.be/',
						id: 'youtu.be/',
						src: '//www.youtube.com/embed/%id%?autoplay=1'
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					}
				},
				srcAction: 'iframe_src'
			},
			callbacks: {
				elementParse: function (item) {
					item.type = $(item.el.context).hasClass('agb-gallery__item--video') ? 'iframe' : 'image';
					if (item.type === 'image' && item.el.attr('data-mfp-srcset')) {
						item.srcset = item.el.attr('data-mfp-srcset');
					}
				},
				markupParse: function(template, values, item) {
					if (item.type === 'image' && item.srcset && values.img_replaceWith) {
						values.img_replaceWith.attr('srcset', item.srcset);
					}
				},
				open: function () {
					$(this.container).find('.mfp-content').css('max-width', '1200px');
				}
			}
		});
	}

	// mark this widget  as initialized
	$element.addClass('initialized');
};
