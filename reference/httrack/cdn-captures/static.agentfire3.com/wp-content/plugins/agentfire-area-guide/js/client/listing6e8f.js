/* global AgentFire, AreaGuide, AreaGuideData */

// Find all not initialized listing widgets and init them
AreaGuide.listing = function($) {
	$('.agb-listing:not(.initialized)').each(function() {
		var $element = $(this);
		AgentFire.Unveil.add($element, function() {
			new AreaGuide._listing($, $element);
		});
	});
};

// Separate function to init each listing block
AreaGuide._listing = function($, $element) {

	var app = this;

	this._showCurrentTab = function() {
		var $category = $element.find('.ag-dropdown[data-type="listing_type"] .ag-dropdown-item.active'),
			$open_houses = $element.find('[data-trigger="open_houses_filter"]'),
			$gridElement = $element.find('.agb-listing__grid'),
			showRibbon = $element.data('show-ribbon'),
			showCourtesy = $element.data('show-courtesy'),
			showMlsId = $element.data('show-mls-id'),
			showMlsDisclaimer = $element.data('show-mls-disclaimer'),
			feedType = $category.data('type'),
			location = $category.data('location'),
			provider = $category.data('provider'),
			priceMin = $category.data('price-min'),
			url,
			data;

		if (! $category.length) {
			return;
		}

		if (feedType === 'hotsheet') {
			url = AreaGuideData.localRestHost + '/v1/area-guide/listing/hotsheet/' + provider;
			data = {
				hotsheet: location
			};
		} else {
			url = AreaGuideData.localRestHost + '/v1/area-guide/listing/' + provider;

			data = {
				feedType: feedType,
				location: location
			};

			var $order = $element.find('.ag-dropdown[data-type="order"] .ag-dropdown-item.active'),
				order = $order.data('order');
			if (order !== null) {
				data.order = order;
			}

			// feedType === 'for-sale'
			if (priceMin && feedType !== 'for-rent') {
				data.priceMin = priceMin;
			}

			var $price_range = $element.find('.ag-dropdown[data-type="price_range"] .ag-dropdown-item.active'),
				price_from = $price_range.data('from'),
				price_to = $price_range.data('to');
			if (price_from) {
				data.priceMin = price_from;
			}
			if (price_to) {
				data.priceMax = price_to;
			}
			if ($open_houses.length && $open_houses.is(":checked")) {
				data.open_houses = 1;
			}
		}

		if (showCourtesy) {
			data.show_courtesy = showCourtesy;
		}

		if (showMlsDisclaimer) {
			data.show_disclaimer = true;
		}

		var cacheKey = btoa(url + JSON.stringify(data) + JSON.stringify([showRibbon, showMlsId])),
			cached = AreaGuide.cache.listing[cacheKey] || null;

		if (cached) {
			$gridElement
				.removeClass('agb-listing__grid--loading')
				.html(cached.html);
			if (cached.url) {
				$element.find('.agb-listing__view-all:not(.agb-listing__view-all--custom)').attr('href', cached.url);
			}
			$element.find('.agb-listing__top').removeClass('d-none').addClass('d-md-flex');
		} else {
			$gridElement.addClass('agb-listing__grid--loading');
			$.ajax({
				type: 'POST',
				url: url,
				data: JSON.stringify(data),
				contentType: 'application/json',
				dataType: 'json'
			}).done(function(response) {
				if (typeof response !== 'object' || !response.data || !response.data.items) {
					$gridElement
						.removeClass('agb-listing__grid--loading')
						.html('<div class="alert alert-warning m-auto">' + (response.message || 'Failed to get listings') + '</div>');
					return;
				}
				if (response.data && response.data.items && response.data.items.length) {
					$element.find('.agb-listing__top').removeClass('d-none').addClass('d-md-flex');
				}
				var listingTemplate;
				if (typeof response.data.items.dsHtml !== 'undefined') {
					// show diverse idx modern content html as is
					listingTemplate = 'area-guide/listing/ds-html';
					$gridElement.removeClass('d-flex').removeClass('flex-wrap');
					$element.find('.agb-listing__top').removeClass('d-none').addClass('d-md-flex');
				} else {
					listingTemplate = 'area-guide/listing/grid';
				}

				AreaGuide.templates[listingTemplate].render({
					listings: response.data.items,
					show_ribbon: showRibbon,
					show_courtesy: showCourtesy,
					show_mls_id: showMlsId,
					show_mls_disclaimer: showMlsDisclaimer,
					mls_disclaimer: response.data.disclaimer || '',
					mls_markets: response.data.markets || [],
				}).then(function(html) {
					AreaGuide.cache.listing[cacheKey] = {
						html: html,
						url: response.data.url
					};
					$gridElement
						.removeClass('agb-listing__grid--loading')
						.html(html);
				}).catch(function(error) {
					$gridElement.removeClass('agb-listing__grid--loading');
					console.warn(error);
				});
				if (response.data.url) {
					$element.find('.agb-listing__view-all:not(.agb-listing__view-all--custom)').attr('href', response.data.url);
				}
			}).fail(function(jqXHR) {
				console.log(jqXHR);
				$gridElement
					.removeClass('agb-listing__grid--loading')
					.html('<div class="alert alert-warning m-auto">' + AgentFire.Request.errorMessage(jqXHR) + '</div>');
			});
		}
	};

	this._initCategoriesDropdown = function() {
		$element.find('.agb-listing__filter .ag-dropdown').on('ag.dropdown.selected', function() {
			app._showCurrentTab();
		});
		$element.find('[data-trigger="open_houses_filter"]').on('change', function() {
			app._showCurrentTab();
		});
	};

	app._initCategoriesDropdown();
	app._showCurrentTab();

	// mark this widget  as initialized
	$element.addClass('initialized');
};
