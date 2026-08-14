/* global AgentFire, AreaGuide, AreaGuideData */

AreaGuide.areaNavigation = function ($) {
	$('.agb-area-nav:not(.initialized)').each(function () {
		new AreaGuide._areaNavigation($, $(this));
	});
};

AreaGuide.areaNavigationObserve = null;

AreaGuide._areaNavigation = function ($, $element) {
	var app = this;
	if ($element.hasClass('agb-area-nav--sticky')) {
		var $sparkHeader = $('.sp-header'),
			is_spark = !!($('.spark-header').length || $sparkHeader.length),
			is_divi = !!$('.et_divi_theme').length && !is_spark,
			is_x_theme = !!$('.x-navbar-fixed-top-active').length,
			$parent;

		switch (true) {
			case is_spark:
				$parent = $sparkHeader;
				if (!$parent.length) {
					$parent = $('.spark-header .sp-main-menu');
				}
				break;
			case is_divi:
				$parent = $('header#main-header');
				break;
			case is_x_theme:
				$parent = $('.x-navbar-wrap .x-navbar');
				break;
		}

		if ($parent) {
			var $existing = $parent.find('.agb-area-nav');
			if ($existing.length) {
				$existing.addClass('removed').empty().remove();
			}
			$element = $element.clone().removeClass('d-none').appendTo($parent);
			$(window).scroll(function () {
				$element.toggleClass('sticky', window.pageYOffset > 500);
			}).trigger('scroll');

			if (AreaGuideData.isEditorPreview) {
				if (AreaGuide.areaNavigationObserve) {
					clearInterval(AreaGuide.areaNavigationObserve);
				}
				AreaGuide.areaNavigationObserve = setInterval(function () {
					var $source = $('.area-guide .agb-area-nav--sticky');
					if (!$source.length) {
						$parent.find('.agb-area-nav').remove();
						clearInterval(AreaGuide.areaNavigationObserve);
					}
				}, 1000);
			}
		} else {
			var $nav = $('.agb-area-nav');
			$nav
				.removeClass('d-none')
				.removeClass('agb-area-nav--sticky')
				.addClass('agb-area-nav--fixed')
				.parent();
			$('.area-guide').css({
				paddingTop: $nav.outerHeight()
			});
		}
	}

	var availableAreas = $element.find('.ag-area-neighborhood__select option').map(function () {
		return {
			label: this.text,
			url: this.value
		};
	}).get();

	$element.find('.ag-area-neighborhood__input').autocomplete({
		source: availableAreas,
		minLength: 0,
		appendTo: '.agb-area-nav',
		select: function(event, ui) {
			$(this).blur();
			if (!AreaGuideData.isEditorPreview && ui.item.url) {
				$(this).siblings('.ag-area-neighborhood__spinner').addClass('loading');
				window.location.href = ui.item.url;
			}

		}
	}).on('focus', function () {
		$(this).autocomplete('search', '');
	}).on('search', function () {
		if ($(this).val() === '') {
			$(this).autocomplete('search', '');
		}
	}).autocomplete( 'widget' ).addClass( 'ag-area-neighborhood__autocomplete' );

	$.extend($.ui.autocomplete.prototype, {
		_renderItem: function( ul, item) {
			return $('<li>')
				.html(item.label)
				.appendTo(ul)
				.data('ui-autocomplete-item', item);
		}
	});

	$element.find('.ag-area-search__input').autocomplete({
		minLength: 3,
		appendTo: '.agb-area-nav .ag-area-search',
		source: function (request, response) {
			$.ajax({
				type: 'POST',
				url: AreaGuideData.localRestHost + '/v1/area-guide/suggestion',
				dataType: 'json',
				data: {
					term: request.term,
					provider: $element.find('.ag-area-search').data('provider')
				},
				success: function( data ) {
					response( data.data );
				},
				error: function (jqXHR) {
					alert(AgentFire.Request.errorMessage(jqXHR));
					response( [] );
				}
			});
		},
		select: function (event, ui) {
			$(this).blur();
			if (!AreaGuideData.isEditorPreview && ui.item.url) {
				$(this).siblings('.ag-area-neighborhood__spinner').addClass('loading');
				window.location.href = ui.item.url;
			} else {
				return false;
			}
		}
	}).autocomplete( 'widget' ).addClass( 'ag-area-neighborhood__autocomplete' );

	// mark this widget  as initialized
	$element.addClass('initialized');
};
