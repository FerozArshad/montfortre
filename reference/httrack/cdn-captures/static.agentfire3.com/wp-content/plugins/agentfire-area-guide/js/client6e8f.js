/* global AreaGuideData, AgentFire, Twig */

var AreaGuidePreload = AreaGuidePreload || {};

var AreaGuide = {
	loadingStatus: {
		community: false,
		measure: false
	},

	errorMessage: {
		community: false,
		measure: false
	},

	data: {
		community: AreaGuidePreload.community || {},
		measure: AreaGuidePreload.measure || {},
		localBusinesses: {}
	},

	cache: {
		localBusinesses: {},
		marketStats: {},
		poi: {},
		listing: {}
	},

	templates: {},

	initTemplates: function($) {
		Twig.extendFilter('filter_empty', function(value) {
			if (!Array.isArray(value)) {
				return value;
			}
			return value.filter(function(v) {
				return void 0 !== v && null !== v && '' !== v;
			});
		});
		$.each(AreaGuideData.templates, function (templateId, template) {
			var temp = Twig.twig({
				id: templateId,
				data: template,
				allowInlineIncludes: true
			});
			AreaGuide.templates[templateId] = {
				render: function(data) {
					return new Promise(function(resolve, reject) {
						try {
							var timeout = setTimeout(function() {
								reject(new Error('Template render timed out'));
							}, 10000);
							temp.renderAsync(data)
							.then(function(output) {
								clearTimeout(timeout);
								resolve(output);
							}).catch(function(err) {
								clearTimeout(timeout);
								reject(err);
							});
						} catch (err) {
							reject(err);
						}
					});
				}
			};
		});
	},

	getCommunityIds: function () {
		if (typeof AreaGuidePreload.communityIds !== 'undefined') {
			return AreaGuidePreload.communityIds;
		}

		var element = document.querySelector('[data-community_ids]');
		if (! element) {
			return [];
		}

		var rawData = element.dataset.community_ids;

		try {
			var parsed = JSON.parse(rawData);
			return Array.isArray(parsed) ? parsed : [parsed];
		} catch (e) {
			return rawData ? [rawData] : [];
		}
	},
	getCustomData: function () {
		return typeof AreaGuidePreload.customData !== 'undefined'
			? AreaGuidePreload.customData
			: JSON.parse(document.querySelector('[data-community_ids]').dataset.custom_data || null);
	},

	loadData: function (type, url, callback, failCallback) {
		var communityIds = AreaGuide.getCommunityIds().join(',');

		function ready() {
			if (typeof callback === 'function') {
				callback(AreaGuide.data[type][communityIds]);
			}
		}

		function fail() {
			if (typeof failCallback === 'function') {
				failCallback(AreaGuide.errorMessage[type]);
			} else {
				console.log(AreaGuide.errorMessage[type]);
			}
		}

		function loaded() {
			if (typeof AreaGuide.data[type][communityIds] !== 'undefined') {
				if (AreaGuide.data[type][communityIds] === false) {
					fail();
				} else {
					ready();
				}
				return true;
			} else {
				return false;
			}
		}

		function wait() {
			if (!loaded()) {
				setTimeout(wait, 100);
			}
		}

		if (loaded()) {
			return;
		}

		if (AreaGuide.loadingStatus[type]) {
			wait();
			return;
		}

		AreaGuide.loadingStatus[type] = true;
		AgentFire.Request.get(url + '?api_key=' + AreaGuideData.restKey + '&cache=' + AreaGuideData.cacheKey + '&service=' + AreaGuideData.provider + '&country=' + AreaGuideData.providerCountry + '&property_types=' + AreaGuideData.propertyTypes.join(','), function(response) {
			AreaGuide.loadingStatus[type] = false;
			AreaGuide.data[type][communityIds] = response.data;
			ready();
		}, function(response) {
			AreaGuide.loadingStatus[type] = false;
			AreaGuide.errorMessage[type] = response.message || 'Failed to load data';
			AreaGuide.data[type][communityIds] = false;
			fail();
		});
	},

	loadCommunityData: function (callback, failCallback) {
		if (AreaGuide.getCommunityIds().length === 0) {
			return false;
		}

		var url = AreaGuideData.restHost + '/v1/area-data/community/' + AreaGuide.getCommunityIds().join(',');
		AreaGuide.loadData('community', url, function (data) {
			var modifiedData = JSON.parse(JSON.stringify(data)),
				customData = AreaGuide.getCustomData();
			if (customData) {
				Object.keys(customData).forEach(function (key) {
					if (typeof modifiedData[key] !== 'undefined') {
						modifiedData[key] = customData[key];
					}
				});
			}
			if (typeof callback === 'function') {
				callback(modifiedData);
			}
		}, failCallback);
	},

	loadMeasureData: function (callback, failCallback) {
		if (AreaGuide.getCommunityIds().length === 0) {
			return false;
		}
		var period = AreaGuideData.isLocalLogicActive ? AreaGuideData.timePeriod : 'last-6-months';
		var url = AreaGuideData.restHost + '/v1/area-data/sale/' + AreaGuide.getCommunityIds().join(',') + '/measure/' + period;
		AreaGuide.loadData('measure', url, function (data) {
			var modifiedData = JSON.parse(JSON.stringify(data)),
				customData = AreaGuide.getCustomData();
			if (customData) {
				Object.keys(customData).forEach(function (key) {
					if (typeof modifiedData.current.salePrice[key] !== 'undefined') {
						modifiedData.current.salePrice[key] = customData[key];
					}
				});
			}
			if (typeof callback === 'function') {
				callback(modifiedData);
			}
		}, failCallback);
	},

	customDropdown: function ($) {
		$(document).on('click', '.ag-dropdown-item', function () {
			if (!$(this).hasClass('active')) {
				var $dropdown = $(this).closest('.ag-dropdown'),
					e = $.Event('ag.dropdown.selected', {relatedTarget: $(this)}),
					label = $(this).data('label') || $(this).html();
				$dropdown
					.find('.ag-dropdown-item.active')
					.removeClass('active');
				$dropdown
					.find('.ag-dropdown-toggle')
					.html(label);
				$(this)
					.addClass('active');
				$dropdown.trigger(e);
			}
		});
	}
};

jQuery(function ($) {
	AreaGuide.initTemplates($);
	AreaGuide.customDropdown($);
	if (!AreaGuideData.isEditorPreview) {
		if (typeof AreaGuide.areaNavigation !== 'undefined') {
			AreaGuide.areaNavigation($);
		}
		if (typeof AreaGuide.map !== 'undefined') {
			AreaGuide.map($);
		}
		if (typeof AreaGuide.localBusinesses !== 'undefined') {
			AreaGuide.localBusinesses($);
		}
		if (typeof AreaGuide.schools !== 'undefined') {
			AreaGuide.schools($);
		}
		if (typeof AreaGuide.marketStats !== 'undefined') {
			AreaGuide.marketStats($);
		}
		if (typeof AreaGuide.graph !== 'undefined') {
			AreaGuide.graph($);
		}
		if (typeof AreaGuide.pie !== 'undefined') {
			AreaGuide.pie($);
		}
		if (typeof AreaGuide.listing !== 'undefined') {
			AreaGuide.listing($);
		}
		if (typeof AreaGuide.gallery !== 'undefined') {
			AreaGuide.gallery($);
		}
	}
});
