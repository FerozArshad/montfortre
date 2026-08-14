/* global AgentFire, AreaGuide, AreaGuideData, AF_Template */

// Find all not initialized schools blocks and init them
AreaGuide.schools = function ($) {
	$('.agb-schools:not(.initialized)').each(function () {
		var $element = $(this);
		AgentFire.Unveil.add($element, function() {
			new AreaGuide._schools($, $element);
		});
	});
};

// Separate function to init each schools block
AreaGuide._schools = function ($, $element) {
	var app = this;

	// Single slider var to destroy if so
	this.slider = null;

	this.schools = [];

	var $contentElement = $element.find('.agb-schools__content');

		// Load schools
	this._loadSchools = function () {
		var communityIds = AreaGuide.getCommunityIds().join(','),
			restUrl = AreaGuideData.restHost + '/v1/area-data/schools/' + communityIds
			          + '?api_key=' + AreaGuideData.restKey + '&service='
			          + AreaGuideData.provider + '&country=' + AreaGuideData.providerCountry;

		$contentElement.addClass('agb-schools__content--loading');

		AgentFire.Request.get(restUrl, function(response) {
			var isLocalLogic = AreaGuideData.provider === 'local_logic',
				isLocalLogicCa = isLocalLogic && AreaGuideData.providerCountry === 'CA',
				btnClass = $element.attr('data-btn-class');

			if (response.data && response.data.categories) {
				app.schools = response.data.categories;
			} else {
				if (! $('body').hasClass('afe-preview')) {
					$element.hide();
				} else {
					app._showContent('No schools found.');
				}

				return;
			}

			Promise.all([
				AreaGuide.templates['area-guide/schools/categories'].render({
					categories: response.data.categories,
					default_category: response.data.default_category,
					btn_class: btnClass
				}),
				AreaGuide.templates['area-guide/schools/content'].render({
					categories: response.data.categories,
					default_category: response.data.default_category,
					btn_class: btnClass,
					is_local_logic: isLocalLogic,
					is_local_logic_ca: isLocalLogicCa,
					is_amr: false
				})
			])
			.then(function(output) {
				app._showCategories(output[0]);
				app._showContent(output[1]);
				app._initCategoriesDropdown();
			}).catch(function(error) {
				console.warn(error);
			});
		}, function() {
			app._showContent('');
		});
	};

	this._showContent = function(content) {
		$contentElement.removeClass('agb-schools__content--loading').html(content);
	};

	this._showCategories = function(content) {
		$element.find('.ml-lg-auto').html(content);
	};

	this._getSchool = function(inst_id) {
		var foundSchool = [];
		if (app.schools) {
			$.each(app.schools, function(i, category) {
				if (category.schools) {
					$.each(category.schools, function(key, school) {
						if (key.toString() === inst_id.toString()) {
							foundSchool = school;
							return false;
						}
					});
				}
				if (foundSchool) {
					return false;
				}
			});
		}

		return foundSchool;
	}

	this._renderModal = function(data) {
		var $modal = $element.find('.agb-schools__modal'),
			$spinner = $modal.find('.ag-spinner'),
			$dataContainer = $modal.find('.agb-school-data'),
			width = $(window).width();
		$dataContainer.html('');
		$modal.modal('show');
		$spinner.fadeIn();

		if (width > 1280) {
			width = 1280;
		}
		data.width = width;
		AreaGuide.templates['area-guide/schools/modal'].render(data).then(function(output) {
			$spinner.hide();
			$dataContainer.html(output);
		}).catch(function(error) {
			$spinner.hide();
			console.warn(error);
		});
	};

	// Categories switch handler and default category initialization
	this._initCategoriesDropdown = function () {
		$element.find('.ag-dropdown').on('ag.dropdown.selected', function(e){
			app._showCategory(e.relatedTarget);
		});

		app._showCategory($element.find('.ag-dropdown .ag-dropdown-item.active'));
	};

	this._showCategory = function ($category) {
		var $currentTab = $element.find('.agb-schools__tab[data-category_id=' + $category.data('for') + ']'),
			$sliderFooter = $element.find('.agb-schools__footer');

		// Hide visible (active) tab
		$element.find('.agb-schools__tab:not(.d-none)').addClass('d-none');

		// Destroy slick slider if already initialized
		if (app.slider !== null) {
			app.slider.slick("unslick");
			app.slider = null;
		}

		// Show current tab
		$currentTab.removeClass('d-none');

		// Init slider
		if ($currentTab.find('.agb-school').length > 5) {
			$sliderFooter.show();
			app.slider = $currentTab.slick({
				autoplay: false,
				arrows: true,
				dots: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				draggable: true,
				infinite: false,
				swipe: false,
				touchMove: true,
				vertical: true,
				rows: 0,
				prevArrow: $element.find('.agb-schools__btn--prev'),
				nextArrow: $element.find('.agb-schools__btn--next')
			});
		} else {
			$sliderFooter.hide();
		}
	};

	$element.on('click', '.agb-school__item:not(.agb-school__item--header)', function (e) {
		e.preventDefault();
		var school = app._getSchool($(this).data('inst_id'));
		app._renderModal(school);
	});

	// on-load things
	this._loadSchools();

	// mark this block  as initialized
	$element.addClass('initialized');
};
