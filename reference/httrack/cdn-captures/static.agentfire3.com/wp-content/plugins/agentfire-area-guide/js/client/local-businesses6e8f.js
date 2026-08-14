/* global AgentFire, AreaGuide, AreaGuideData */

// Find all not initialized local businesses blocks and init them
AreaGuide.localBusinesses = function ($) {
	$('.agb-yelp:not(.initialized)').each(function () {
		var $element = $(this);
		AgentFire.Unveil.add($element, function() {
			new AreaGuide._localBusinesses($, $element);
		});
	});
};

// Separate function to init each of local businesses block
AreaGuide._localBusinesses = function ($, $element) {
	var app = this;
	app.source = $element.data('source');

	// Single slider var to destroy if so
	this.slider = null;

	var $wrapperElement = $element.find('.agb-yelp__wrapper');
	var $contentElement = $element.find('.agb-yelp__carousel');

	// Show previously loaded content as slider
	this._showContent = function (content) {
		// Destroy slick slider if already initialized
		if (app.slider !== null) {
			app.slider.slick("unslick");
			app.slider = null;
		}

		// Remove spinner
		$wrapperElement.removeClass('agb-yelp__wrapper--loading');

		// Put content in element
		$contentElement.html(content);

		// Initialize slick slider
		app.slider = $contentElement.slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			rows: 0,
			responsive: [
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1399,
					settings: {
						slidesToShow: 5
					}
				}
			]
		});

		// Share button click handler
		$contentElement.find('.agb-yelp__social').on('click', function () {
			var $share = $(this),
				url = 'http://www.facebook.com/sharer.php?s=100' +
					'&p[title]=' + $share.data('name') +
					'&p[summary]=' + $share.data('text') +
					'&p[url]=' + $share.data('url') +
					'&p[images][0]=' + $share.data('image'),
				options = 'toolbar=0,status=0,width=520,height=350,' +
					'top=' + ((screen.height / 2) - (350 / 2)) + ',' +
					'left=' + ((screen.width / 2) - (520 / 2));
			window.open(url, 'sharer', options);
		});
	};

	// Cache content in runtime cache
	this._cacheContent = function (cacheKey, content) {
		// Cache content without lazy loading flag
		var $content = $(content);
		$content.each(function () {
			$(this).find('.ll-background').removeClass('ll-background');
		});
		AreaGuide.cache.localBusinesses[cacheKey] = $content;
	};

	// Categories switch handler
	this._initCategoriesSwitcher = function () {
		$element.find('.ag-dropdown').on('ag.dropdown.selected', function (e) {
			app._loadCategory(e.relatedTarget);
		});
		$element.find('.agb-yelp__tab').on('click', function () {
			$element
				.find('.agb-yelp__tab.active')
				.removeClass('active');
			$(this)
				.addClass('active');
			app._loadCategory($(this));
		});
	};

	// Load current category content with auto or custom feed
	this._loadCategory = function ($category) {
		var categoryType = $category.data('type'),
			communityIds = AreaGuide.getCommunityIds().join(','),
			restUrl,
			cacheKey,
			sourceCacheKey;

		if (app.source === AreaGuideData.yelpProviderKey) {
			sourceCacheKey = AreaGuideData.yelpKey;
		} else if (app.source === AreaGuideData.googlePlacesProviderKey) {
			sourceCacheKey = AreaGuideData.googlePlacesKey;
		}

		switch (categoryType) {
			case 'search':
				var searchTerm = $category.data('term');
				cacheKey = 'v2/' + searchTerm + '/' + communityIds + '/' + app.source;
				restUrl = AreaGuideData.restHost
					+ '/v1/area-data/amenity/'
					+ communityIds + '/'
					+ searchTerm + '?api_key=' + AreaGuideData.restKey + '&source='
		            + app.source + '&limit=10&cache=' + sourceCacheKey
		            + '&service=' + AreaGuideData.provider + '&country=' + AreaGuideData.providerCountry;
				break;
			case 'custom':
				var ids = $category.data('ids');
				cacheKey = 'v2/' + ids.join(',') + '/' + communityIds;
				restUrl = AreaGuideData.restHost
					+ '/v1/area-data/yelp/businesses/'
					+ ids.join(',') + '?api_key=' + AreaGuideData.restKey + '&cache=' + AreaGuideData.yelpKey;
				break;
			default:
				return;
		}

		var cache = AreaGuide.cache.localBusinesses[cacheKey] || null;

		$wrapperElement.addClass('agb-yelp__wrapper--loading');
		if (cache) {
			app._showContent(cache);
		} else {
			AgentFire.Request.get(restUrl, function (data) {
				AreaGuide.templates['area-guide/local-businesses/content'].render({
					businesses: data.data,
					source: app.source,
					yelpLogo: AreaGuideData.yelpLogo,
					googleLogo: AreaGuideData.googleLogo,
					yelpProviderKey: AreaGuideData.yelpProviderKey,
					googlePlacesProviderKey: AreaGuideData.googlePlacesProviderKey,
					lazyloadPlaceholder: AreaGuideData.lazyloadPlaceholder
				}).then(function(output) {
					app._cacheContent(cacheKey, output);
					app._showContent(output);
				}).catch(function(error) {
					app._showContent('');
					console.warn(error);
				});
			}, function () {
				app._showContent('');
			});
		}
	};

	// on-load things
	app._initCategoriesSwitcher();
	app._loadCategory($element.find('.ag-dropdown-item.active, .agb-yelp__tab.active'));

	// mark this block  as initialized
	$element.addClass('initialized');
};
