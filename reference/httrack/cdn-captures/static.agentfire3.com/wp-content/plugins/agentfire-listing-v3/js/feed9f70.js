/* global AgentFire, Twig, mapboxgl */

var MyListingsFeed = function(element, $) {
	'use strict';

	$ = $ || jQuery;
	var $element = $(element);

	var templateNamespace = 'listing3';

	var app = {
		layout: '',
		templates: {},
		templatesHtml: {},
		isMapVisible: true,
		isMapInitialized: false,
		isInitialized: false,
		isHotsheet: false,
		isEditorPreview: false,
		loadingListingsXhr: null,
		loadingMarkersXhr: null,
		areMarkersStale: true,
		autocompleteTimeout: null,
		lazyLoadPlaceholder: '',
		defaultOrder: '',
		defaultPageSize: 12,
		defaultLimit: null,
		filterOptions: {},
		listings: [],
		paging: {},
		total: 0,
		restrictions: {},
		selectedRestrictions: {},
		displayStatusBadge: '',
		trueMapSearch: false,
		bbox: [],
		markersList: [],
	};

	var searchParamsList = [
		'searchType',
		'text',
		'priceMin',
		'priceMax',
		'bedsMin',
		'bedsMax',
		'bathsMin',
		'bathsMax',
		'keyword',
		'sqftMin',
		'sqftMax',
		'lotMin',
		'lotMax',
		'yearMin',
		'yearMax',
		'daysMin',
		'daysMax',
		'openHouse',
	];

	var search = {
		filters: {},
		restrictions: {},
		options: {
			order: '',
			pageNumber: 1,
			pageSize: 9,
			displayStatusBadge: '',
		}
	}

	app.initTemplates = function () {
		window.twigTemplates = window.twigTemplates || {};
		$.each(app.templatesHtml, function (templateId, template) {
			if (!window.twigTemplates.hasOwnProperty(templateNamespace+'/'+templateId)) {
				window.twigTemplates[templateNamespace+'/'+templateId] = Twig.twig({
					id: templateId,
					data: template,
					allowInlineIncludes: true
				});
			}
		});
	}

	app.getTemplate = function(templateName) {
		return window.twigTemplates[templateNamespace+'/'+templateName];
	}

	app.loadListings = function() {
		return new Promise(function (resolve, reject) {
			if (app.loadingListingsXhr !== null) {
				app.loadingListingsXhr.abort();
			}
			search.restrictions = {};

			if (app.selectedRestrictions.propertyTypes.length === 0 &&
				app.selectedRestrictions.statuses.length === 0 &&
				app.selectedRestrictions.locations.length === 0) {
				search.restrictions.propertyTypes = app.prepareRestrictions(app.restrictions.propertyTypes);
				search.restrictions.statuses = app.prepareRestrictions(app.restrictions.statuses);
				search.restrictions.locations = app.prepareRestrictions(app.restrictions.locations);
			} else {
				search.restrictions.propertyTypes = [...app.selectedRestrictions.propertyTypes];
				search.restrictions.statuses = [...app.selectedRestrictions.statuses];
				search.restrictions.locations = [...app.selectedRestrictions.locations];
			}

			if (app.trueMapSearch && app.bbox.length) {
				search.restrictions.bbox = app.bbox;
			}

			app.loadingListingsXhr = $.ajax({
				type: 'post',
				url: '/wp-json/agentfire/v2/listing3/listings',
				data: JSON.stringify(search),
				datatype: 'JSON',
				contentType: 'application/json',
				success: function(response) {
					app.listings = response.data.listings;
					app.paging = response.data.paging;
					app.total = response.data.total;
					app.areMarkersStale = true;
					resolve(response);
				},
				error: function(xhr) {
					app.listings = [];
					reject(xhr);
				},
				complete: function() {
					app.loadingListingsXhr = null;
				}
			});
		});
	}

	app.maybeInitMap = function() {
		return new Promise(function (resolve, reject) {
			if (app.isMapInitialized) {
				return resolve();
			}
			var mapContainer = $element.find('.mlf-map__map-box');
			if ( mapContainer.length ) {
				AgentFire.Api.Mapbox(function(){
					var options = {
						container: mapContainer[0],
						style: 'mapbox://styles/mapbox/streets-v10?optimize=true',
						dragPan: ! AgentFire.UA.detect_mobile(),
						zoom: 14,
						scrollZoom: app.trueMapSearch,
					}
					if (app.trueMapSearch && app.bbox.length) {
						options.bounds = [
							[app.bbox[0],app.bbox[1]],
							[app.bbox[2],app.bbox[3]],
						];
					} else {
						options.center = (app.listings.length && app.listings[0].lng && app.listings[0].lat)
							? [app.listings[0].lng, app.listings[0].lat]
							: ['-74.013382', '40.712742']
					}
					app.map = new mapboxgl.Map(options);
					app.addViewBoxButton();
					app.map.addControl(new mapboxgl.NavigationControl(), 'top-left').on('style.load', function() {
						app.isMapInitialized = true;
						resolve();
					});
					app.map.on('load', function () {
						app.map.addSource('listings', {
							type: 'geojson',
							data: {
								'type': 'FeatureCollection',
								'features': []
							},
							cluster: true,
							clusterMinPoints: 2,
							clusterMaxZoom: 15,
							clusterRadius: 100
						});

						const clustersBreakpoints = [10,20,50,100,500];
						app.map.addLayer({
							id: 'clusters',
							type: 'circle',
							source: 'listings',
							filter: ['has', 'point_count'],
							paint: {
								'circle-color': '#ffffff',
								'circle-radius': [
									'step',
									['get', 'point_count'],
									15,
									clustersBreakpoints[0],
									20,
									clustersBreakpoints[1],
									25,
									clustersBreakpoints[2],
									30,
									clustersBreakpoints[3],
									40,
									clustersBreakpoints[4],
									50,
								]
							}
						});

						app.map.addLayer({
							id: 'cluster-count',
							type: 'symbol',
							source: 'listings',
							filter: ['has', 'point_count'],
							layout: {
								'text-field': ['get', 'point_count_abbreviated'],
								"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
								'text-size': [
									'step',
									['get', 'point_count'],
									16,
									clustersBreakpoints[0],
									20,
									clustersBreakpoints[1],
									24,
									clustersBreakpoints[2],
									28,
									clustersBreakpoints[3],
									32,
									clustersBreakpoints[4],
									36,
								],
							}
						});
					});

					app.map.on('mouseenter', 'clusters', function() {
						app.map.getCanvas().style.cursor = 'pointer';
					});
					app.map.on('mouseleave', 'clusters', function() {
						app.map.getCanvas().style.cursor = 'default';
					});

					app.map.on('click', 'clusters', (e) => {
						const features = app.map.queryRenderedFeatures(e.point, {
								layers: ['clusters']
							}),
							clusterId = features[0].properties.cluster_id;

						app.map.getSource('listings').getClusterExpansionZoom(clusterId, function (err, zoom) {
							if (err) {
								return
							}
							var mapZoom = app.map.getZoom();
							if (zoom >= mapZoom) {
								zoom = mapZoom * 1.1;
							}

							app.map.flyTo({
								center: features[0].geometry.coordinates,
								zoom: zoom
							});
							app.map.fire('flystart');
						});
					});

					app.map.on('zoomend', function (event) {
						app.updateBbox();
					});

					app.map.on('dragend', function (event) {
						if (!event.originalEvent) {
							return;
						}
						app.updateBbox();
					});

					app.map.on('flyend', function () {
						app.mapFlying = false;
						app.updateBbox();
					});
					app.map.on('flystart', function () {
						app.mapFlying = true;
					});

					app.map.on('moveend', function () {
						if (app.mapFlying) {
							app.map.fire('flyend');
						}
					});

					app.map.on('data', function (e) {
						if (e.sourceId !== 'listings' || !e.isSourceLoaded) {
							return
						}
						app.map.on('moveend', app.updateMarkers);
						app.updateMarkers();
					});
				});
			} else {
				reject();
			}
		});
	}

	app.createMarker = function (listingId) {
		var listing = app.getListingById(listingId);
		if (!listing) {
			return false;
		}

		var lat = listing.lat,
			lng = listing.lng,
			priceShort = listing.price;

		if (!lat || !lng) {
			return;
		}

		if (priceShort >= 1e3 && priceShort < 1e6) priceShort = +(priceShort / 1e3).toFixed(1) + 'K';
		if (priceShort >= 1e6 && priceShort < 1e9) priceShort = +(priceShort / 1e6).toFixed(1) + 'M';
		if (priceShort >= 1e9 && priceShort < 1e12) priceShort = +(priceShort / 1e9).toFixed(1) + 'B';

		var $marker = $('<div class="mlf-marker" data-id="' + listing.id + '">$' + priceShort + '</div>')[0],
			marker = new mapboxgl.Marker($marker, {anchor: 'bottom'}).setLngLat([lng, lat]);

		var popup = new mapboxgl.Popup({closeOnClick: true});
		popup.setHTML(app.getTemplate('popup').render({
			listing: listing,
			isMobile: app.isMobile,
			lazyLoadPlaceholder: app.lazyLoadPlaceholder,
			listingImagesUrl: app.listingImagesUrl,
		}));
		marker.setPopup(popup);

		return marker;
	}

	app.updateBbox = function() {
		if (!app.trueMapSearch) {
			return;
		}
		var mapBounds = app.map.getBounds();
		app.bbox = [
			mapBounds.getWest(),
			mapBounds.getSouth(),
			mapBounds.getEast(),
			mapBounds.getNorth()
		];
		app.updateUrl();
		app.showListings();
		app.showMarkers(false);
	}

	app.addViewBoxButton = function() {
		if (!app.trueMapSearch) {
			return;
		}
		class MapboxGLButtonControl {
			constructor({
				            className = "",
				            containerClassName = "",
				            title = "",
				            eventHandler = null
			            }) {
				this._className = className;
				this._containerClassName = containerClassName;
				this._title = title;
				this._eventHandler = eventHandler;
			}

			onAdd(map) {
				this._btn = document.createElement("button");
				this._btn.className = "mapbox-gl-draw_ctrl-draw-btn" + " " + this._className;
				this._btn.type = "button";
				this._btn.title = this._title;
				if (this._eventHandler) {
					this._btn.onclick = this._eventHandler;
				}
				this._container = document.createElement("div");
				this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl" + (this._containerClassName ? " " + this._containerClassName : '');
				this._container.appendChild(this._btn);

				return this._container;
			}

			onRemove() {
				this._container.parentNode.removeChild(this._container);
				this._map = undefined;
			}
		}
		var viewBoxCtrlClass = 'mlf__toggle-viewbox';
		if (app.trueMapSearch) {
			viewBoxCtrlClass += ' active';
		}

		var viewBoxCtrl = new MapboxGLButtonControl({
			className: viewBoxCtrlClass,
			containerClassName: 'mapboxgl-ctrl-group--map-search',
			title: "Toggle Map Search",
			eventHandler: function (event) {
				if (event.target) {
					$(event.target).toggleClass('active');
					app.trueMapSearch = !app.trueMapSearch;
					if (app.trueMapSearch) {
						app.updateBbox();
						app.map.scrollZoom.enable();
					} else {
						app.map.scrollZoom.disable();
						app.bbox = [];
						app.updateUrl();
						app.showListings();
						app.showMarkers(true);
					}

				}
			}
		});

		app.map.addControl(viewBoxCtrl, "top-left");
	}

	app.showListingItems = function() {
		var $listingsArea = $element.find('.mlf-listings');
		$listingsArea.empty();
		$.each(app.listings, function (id, listing) {
			requestAnimationFrame(function () {
				var $listing = $(app.getTemplate('listing-'+app.layout).render({
					listing: listing,
					isMobile: app.isMobile,
					lazyLoadPlaceholder: app.lazyLoadPlaceholder,
					listingImagesUrl: app.listingImagesUrl,
				}));
				$listing.appendTo($listingsArea);
			});
		});

		$element.find('.mlf-info__shown').text(app.listings.length);
		$element.find('.mlf-info__total').text(app.total);
		$element.find('.mlf-info > span').show();

		if (app.paging.count > 1) {
			$element.find('.mlf-feed__pagination').html(
				$(app.getTemplate('paging').render({
					paging: app.paging,
					base: app.buildUrl(true).toString()
				}))
			).show();
		} else {
			$element.find('.mlf-feed__pagination').hide();
		}
	}

	app.waitForListings = function() {
		return new Promise(function (resolve) {
			(function waitForListings() {
				if (app.loadingListingsXhr === null) {
					return resolve();
				}
				setTimeout(waitForListings, 500);
			})();
		});
	}

	app.initActions = function() {
		$element.find('[data-action="toggle-map"]').on('click', function() {
			app.isMapVisible = !app.isMapVisible;
			$element.find('.mlf-map').toggle(app.isMapVisible);
			$(this).find('.mlf-button__label').text(app.isMapVisible ? 'Hide Map' : 'Show Map');

			if (!app.isMapVisible) {
				return;
			}

			app.waitForListings().then(function() {
				if (!app.isMapInitialized || app.areMarkersStale) {
					return app.showMarkers(true);
				}

				return app.waitForMapReady().then(function() {
					app.showListingsOnMap(true);
				});
			});
		});
		$element.find('.mlf-order .mlf-button').on('click', function (){
			$(this).siblings('.mlf-order__options').toggle();
		});
		$element.find('.mlf-order__option').on('click', function (){
			$element.find('.mlf-order__options').hide();
			var order = $(this).attr('data-order');
			if (order !== search.options.order) {
				$(this).addClass('active').siblings('.mlf-order__option').removeClass('active');
				search.options.order = order;
				search.options.pageNumber = 1;
				app.updateUrl();
				app.showListings();
			}
		});
		$(document).on('keydown', function (event) {
			if (event.keyCode === 27) {
				$element.find('.mlf-order__options').hide();
			}
		});
		$(document).on('click', function (event) {
			var $target = $(event.target);
			if (!$target.closest('.mlf-order').length) {
				$element.find('.mlf-order__options').hide();
			}
		});
		$element.find('[data-action="toggle-filters"]').on('click', function(){
			$element.find('.mlf-slidein').toggleClass('show');
		});
		$element.find('.mlf-slidein').on('mousedown', function (e) {
			if (!$(e.target).closest('.mlf-slidein__body').length) {
				$element.find('.mlf-slidein').removeClass('show');
			}
		});

		$element.find('.mlf-slidein__close').on('click', function () {
			$element.find('.mlf-slidein').removeClass('show');
		});

		$element.on('click', '[data-action="reset_filters"]', function(){
			$element.find('.mlf-slidein').removeClass('show');
			$element.find('#mlf-search-field').val('');
			search.filters = {};
			search.restrictions = {
				propertyTypes: app.prepareRestrictions(app.restrictions.propertyTypes),
				statuses: app.prepareRestrictions(app.restrictions.statuses),
				locations: app.prepareRestrictions(app.restrictions.locations)
			};
			app.selectedRestrictions = { propertyTypes: [], statuses: [], locations: [] };
			search.options.pageNumber = 1;
			app.updateUrl();
			app.initFilters();
			app.showListings();
			app.showMarkers(true);
		});

		$(document).on('click', '[data-action="apply_filters"]', function(){
			$element.find('.mlf-slidein').removeClass('show');
			search.options.pageNumber = 1;
			app.updateUrl();
			app.showListings();
			app.showMarkers(true);
		});

		$element.find('#mlf-search-field').on('input', function(){
			search.filters.text = $(this).val().trim();
			if (app.autocompleteTimeout !== null) {
				clearTimeout(app.autocompleteTimeout);
			}
			if (search.filters.text.length === 0 || search.filters.text.length >= 2) {
				app.autocompleteTimeout = setTimeout(function () {
					app.autocompleteTimeout = null;
					search.options.pageNumber = 1;
					app.updateUrl();
					app.showListings();
					app.showMarkers(true);
				}, 500);
			}
		});
		$element.find('.mlf-search__button').on('click', function(){
			app.updateUrl();
			app.showListings();
			app.showMarkers(true);
		});

		$element.find('.mlf').on('click', 'a.mlf-paging__button', function (e) {
			e.preventDefault();
			$element.find('.mlf-paging__button--current').removeClass('mlf-paging__button--current');
			$(this).addClass('mlf-paging__button--current');
			$('html,body').scrollTop($element.find('.mlf-listings').offset().top - 100);
			search.options.pageNumber = +$(this).attr('data-pg');
			if (!app.hotsheet) {
				app.updateUrl();
			}
			app.showListings();
			if (!app.trueMapSearch) {
				app.showMarkers(true);
			}
		});
	}

	app.updateUrl = function() {
		if (app.isHotsheet) {
			window.location.href = app.buildUrl(false).toString();
		} else {
			window.history.pushState({}, 'Search', app.buildUrl(false).toString());
		}
	}

	app.buildUrl = function(paginationBase) {
		paginationBase = paginationBase || false;
		var url = new URL(window.location.href),
			searchParams = new URLSearchParams(),
			pathParts = url.pathname.split('/').filter(function(v){
				return v
			}).slice(0, 1);

		if (!paginationBase && search.options.pageNumber > 1) {
			searchParams.set('pagenum', search.options.pageNumber);
		}

		if (search.options.order !== app.defaultOrder) {
			searchParams.set('sort', search.options.order);
		}

		$.each(searchParamsList, function (i, filterName) {
			if (typeof search.filters[filterName] !== 'undefined' && search.filters[filterName] !== '') {
				searchParams.set(filterName, search.filters[filterName]);
			}
		});

		let propertyTypesParam = [];
		let statusesParam = [];
		let locationsParam = [];
		$.each(app.selectedRestrictions.propertyTypes, function (i, propertyType) {
			let found = app.filterOptions.propertyTypes.find(opt => opt.value === propertyType);
			if (found) propertyTypesParam.push(found.slug);
		});
		$.each(app.selectedRestrictions.statuses, function (i, status) {
			let found = app.filterOptions.statuses.find(opt => opt.value === status);
			if (found) statusesParam.push(found.slug);
		});
		$.each(app.selectedRestrictions.locations, function (i, location) {
			let found = app.filterOptions.locations.find(opt => opt.value === location);
			if (found) locationsParam.push(found.slug);
		});

		if (propertyTypesParam.length > 0) searchParams.set('propertyType', propertyTypesParam.join(','));
		if (statusesParam.length > 0) searchParams.set('status', statusesParam.join(','));
		if (locationsParam.length > 0) searchParams.set('location', locationsParam.join(','));

		if (app.bbox.length) {
			searchParams.set('bbox', app.bbox.join(','));
		}

		url.search = searchParams.toString().replaceAll('%2C', ',');

		url.pathname = '/';
		if (pathParts.length > 0) url.pathname = '/' + pathParts.join('/') + '/';

		return url;
	}

	app.parseUrl = function() {
		var url = new URL(app.hotsheet ? app.hotsheet : window.location.href),
			searchParams = new URLSearchParams(url.search),
			hasCustomFilterParams = false;

		search.options.order = searchParams.has('sort') ? searchParams.get('sort') : app.defaultOrder;
		search.options.pageNumber = searchParams.has('pagenum') ? parseInt(searchParams.get('pagenum'), 10) : 1;
		search.options.pageSize = app.defaultPageSize;
		if (app.defaultLimit !== null) {
			search.options.limit = app.defaultLimit;
		} else {
			delete search.options.limit;
		}

		if (searchParams.has('propertyType') ||
			searchParams.has('status') ||
			searchParams.has('location') ||
			searchParams.has('sort') ||
			searchParams.has('pagenum') ||
			searchParams.has('bbox') ) {
			hasCustomFilterParams = true;
		}

		$.each(searchParamsList, function (i, filterName) {
			if (searchParams.has(filterName) && searchParams.get(filterName)) {
				search.filters[filterName] = searchParams.get(filterName);
				hasCustomFilterParams = true;
			}
		});

		app.selectedRestrictions = { propertyTypes: [], statuses: [], locations: [] };
		if ( hasCustomFilterParams ) {
			let propertyTypesParam = searchParams.has('propertyType') ? (searchParams.get('propertyType')).split(',') : [];
			let statusesParam = searchParams.has('status') ? (searchParams.get('status')).split(',') : [];
			let locationsParam = searchParams.has('location') ? (searchParams.get('location')).split(',') : [];

			$.each(propertyTypesParam, function (i, param) {
				let found = app.filterOptions.propertyTypes.find(opt => opt.slug === param);
				if (found) app.selectedRestrictions.propertyTypes.push(found.value);
			});
			$.each(statusesParam, function (i, param) {
				let found = app.filterOptions.statuses.find(opt => opt.slug === param);
				if (found) app.selectedRestrictions.statuses.push(found.value);
			});
			$.each(locationsParam, function (i, param) {
				let found = app.filterOptions.locations.find(opt => opt.slug === param);
				if (found) app.selectedRestrictions.locations.push(found.value);
			});

			var bbox = searchParams.get('bbox') || '';
			bbox = decodeURI(bbox).split(',');
			app.bbox = bbox.length === 4 ? bbox.map(Number) : [];
		}

		search.options.displayStatusBadge = app.displayStatusBadge;

		$element.find('.mlf-order__option[data-order="'+search.options.order+'"]').addClass('active');
		$element.find('#mlf-search-field').val(search.filters.text);
	}

	app.initHistoryActions = function () {
		$(window).on('popstate', function () {
			app.parseUrl();
			//app.initFilters();
			//app.showOrderField();
			//app.showFiltersBadge();
			app.showListings();
		});
	}

	app.init = function(data) {
		app = $.extend({}, app, data);
		if (app.isInitialized) {
			app.parseUrl();
			app.showListings();
			app.showMarkers(true);
			return;
		}
		app.isMobile = AgentFire.UA.detect_mobile();
		app.parseUrl();
		app.initTemplates();
		app.initFilters();
		app.initActions();
		app.initHistoryActions();
		app.showListings();
		app.showMarkers(true);
		app.isInitialized = true;
	};

	app.initFilters = function() {
		if (app.restrictions.propertyTypes.length > 0) {
			app.filterOptions.propertyTypes = [ ...app.restrictions.propertyTypes ];
		}

		if (app.restrictions.statuses.length > 0) {
			app.filterOptions.statuses = [ ...app.restrictions.statuses ];
		}

		if (app.restrictions.locations.length > 0) {
			app.filterOptions.locations = [ ...app.restrictions.locations ];
		}

		$element.find('.mlf-slidein__content').html($(app.getTemplate('filters').render({
			options: app.filterOptions,
			filters: search.filters,
			restrictions: app.filterOptions,
			selectedRestrictions: app.selectedRestrictions
		})));

		$element.find('input[name=searchType]').on('change', function () {
			search.filters.searchType = $(this).val();
			//$element.find('.mlf-filter--open-house').toggle(search.filters.searchType !== 'sold');
		});

		$element.find('.mlf-range').mlfRange({
			options: app.filterOptions
		}).on('mlf.change', function (e, data) {
			search.filters[data.name] = data.value;
		});

		$element.find('input.mlf-toggle').on('change', function () {
			var name = $(this).attr('name');
			search.filters[name] = this.checked ? '1' : '';
		});

		var enableRestrictions = function(name, arr) {
			$element.find('input[name="' + name + '"]').on('change', function () {
				var index = arr.indexOf($(this).val());

				if (this.checked) {
					if (index === -1) {
						arr.push($(this).val());
					}
				} else if (index !== -1){
					arr.splice(index, 1);
				}
			});
		}

		enableRestrictions('propertyType', app.selectedRestrictions.propertyTypes);
		enableRestrictions('status', app.selectedRestrictions.statuses);
		enableRestrictions('location', app.selectedRestrictions.locations);
	};

	app.toggleSpinner = function(show) {
		var $spinner = $element.find('.mlf-loading');
		if (typeof show === 'undefined') {
			$spinner.toggle();
		} else {
			$spinner.toggle(show);
		}
	}

	app.prepareRestrictions = function(restrictions) {
		let output = [];
		output = restrictions.map(obj => obj.value);
		return output;
	};

	app.errorMessage = function(jqXHR) {
		if (jqXHR.readyState === 4) {
			if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
				return jqXHR.responseJSON.message;
			} else if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
				return jqXHR.responseJSON.error;
			} else if (jqXHR.status === 500) {
				return 'Server error, please contact support';
			} else {
				// 502/504 from Cloudflare etc
				return 'Error ' + jqXHR.status + ', please try again or contact support';
			}
		} else if (jqXHR.readyState === 0) {
			if (jqXHR.statusText === 'abort') {
				return '';
			} else {
				return 'Network error, please try again';
			}
		} else {
			return 'Something went wrong, please try again';
		}
	};

	app.showListings = function() {
		$element.find('.mlf-error').hide();
		app.toggleSpinner(true);
		$element.find('.mlf-listings').empty();
		app.loadListings().then(function(){
			app.showListingItems();
			$element.find('.mlf-error').hide();
		}).catch(function(error){
			$element.find('.mlf-listings').empty();
			$element.find('.mlf-feed__pagination').hide();
			$element.find('.mlf-info > span').hide();
			if (error) {
				$element.find('.mlf-error').html(app.errorMessage(error)).show();
			}
		}).finally(function(){
			app.toggleSpinner(false);
		})
	}

	app.waitForMapReady = function () {
		return new Promise(function (resolve) {
			(function waitForMapReady() {
				if (app.map !== null && app.map.loaded()) {
					return resolve();
				}
				setTimeout(waitForMapReady, 500);
			})();
		});
	};

	app.showMarkers = function(fit) {
		fit = fit || false;

		// If the map is not visible, don't initialize Mapbox and don't load markers.
		if (!app.isMapVisible) {
			return Promise.resolve();
		}

		app.maybeInitMap().then(function(){
			app.loadMarkers().then(function(){
				app.waitForMapReady().then(function(){
					app.showListingsOnMap(fit);
				});
			}).catch(function(error){
				app.removeMarkers();
			}).finally(function(){
				//app.toggleSpinner(false);
			})
		})
	}

	app.loadMarkers = function() {
		return new Promise(function (resolve, reject) {
			if (app.loadingMarkersXhr !== null) {
				app.loadingMarkersXhr.abort();
			}

			var searchParams = JSON.parse(JSON.stringify(search));
			if (app.trueMapSearch) {
				searchParams.options.pageNumber = 1;
				searchParams.options.pageSize = 100;
			}

			searchParams.restrictions = {};

			if (app.selectedRestrictions.propertyTypes.length === 0 &&
				app.selectedRestrictions.statuses.length === 0 &&
				app.selectedRestrictions.locations.length === 0) {
				searchParams.restrictions.propertyTypes = app.prepareRestrictions(app.restrictions.propertyTypes);
				searchParams.restrictions.statuses = app.prepareRestrictions(app.restrictions.statuses);
				searchParams.restrictions.locations = app.prepareRestrictions(app.restrictions.locations);
			} else {
				searchParams.restrictions.propertyTypes = [...app.selectedRestrictions.propertyTypes];
				searchParams.restrictions.statuses = [...app.selectedRestrictions.statuses];
				searchParams.restrictions.locations = [...app.selectedRestrictions.locations];
			}

			if (app.trueMapSearch && app.bbox.length) {
				searchParams.restrictions.bbox = app.bbox;
			}

			app.loadingMarkersXhr = $.ajax({
				type: 'post',
				url: '/wp-json/agentfire/v2/listing3/markers',
				data: JSON.stringify(searchParams),
				datatype: 'JSON',
				contentType: 'application/json',
				success: function(response) {
					app.markersList = response.data.listings;
					app.areMarkersStale = false;
					resolve(response);
				},
				error: function(xhr) {
					reject(xhr);
				},
				complete: function() {
					app.loadingMarkersXhr = null;
				}
			});
		});
	}



	app.removeMarkers = function() {
		var source = app.map.getSource('listings');
		if (typeof source !== 'undefined') {
			app.map.getSource('listings').setData({
				'type': 'FeatureCollection',
				'features': []
			});
		}
	}

	app.getListingById = function(id) {
		return app.markersList.find(function (listing) {
			return listing.id === id
		});
	}

	const markers = new Map();
	app.updateMarkers = function() {
		const features = app.map.querySourceFeatures('listings');
		const keepMarkers = [];
		for (let i = 0; i < features.length; i++) {
			const props = features[ i ].properties;
			if (props.cluster) {
				continue;
			}
			var listingId = props.id;
			if (markers.has(listingId)) {
				keepMarkers.push(listingId);
			} else {
				var marker = app.createMarker(listingId);
				marker.addTo(app.map);
				keepMarkers.push(listingId);
				markers.set(listingId, marker);
			}
		}

		markers.forEach((value,key,map) => {
			if (keepMarkers.indexOf(key) === -1) {
				value.remove();
				map.delete(key);
			}
		});
	}

	app.showListingsOnMap = function(fit) {
		if (!app.isMapVisible) {
			return;
		}

		if (!app.map || !app.isMapInitialized) {
			return;
		}

		var places = {
			'type': 'FeatureCollection',
			'features': []
		};
		$.each(app.markersList, function (i, listing) {
			if (!listing.lat || !listing.lng) {
				return;
			}

			places.features.push({
				'type': 'Feature',
				'geometry': {
					'type': 'Point',
					'coordinates': [listing.lng, listing.lat]
				},
				'properties': {
					'id': listing.id,
				}
			});
		});
		app.map.getSource('listings')?.setData(places);

		if (fit && places.features.length) {
			if (places.features.length === 1) {
				app.map.flyTo({
					center: places.features[0].geometry.coordinates
				});
			} else {
				const bounds = new mapboxgl.LngLatBounds();
				places.features.forEach(f => bounds.extend(f.geometry.coordinates));
				app.map.fitBounds(bounds, {padding: 75, duration: 1000});
			}
		}
	}

	return {
		init: app.init
	}
};


