/* global AgentFire, AreaGuide, AreaGuideData, mapboxgl, turf */

// Find all not initialized map widgets and init them
AreaGuide.map = function ($) {
	$('.agw-map:not(.initialized)').each(function () {
		new AreaGuide._map($, $(this));
	});
};

// Separate function to init each map widget
AreaGuide._map = function ($, $element) {
	var app = this;

	var communityIds = AreaGuide.getCommunityIds().join(',');

	var icons = {
		'hospital': 'hospital',
		'school': 'school',
		'park': 'park',
		'station': 'transport',
		'supermarket': 'shop'
	};

	var markers = {};

	var geojson = {
		'type': 'Feature',
		'geometry': {
			'type': 'MultiPolygon',
			'coordinates': $element.data('polygon')
		}
	};

	this.mapBox = null;
	this.mapContainer = $element.find('.agw-map__map')[0];
	this.polygonLayer = null;

	this._initMap = function () {
		// Start loading Turf early
		AgentFire.Api.Turf();

		// Load mapbox SDK
		AgentFire.Api.Mapbox(function () {
			app.mapBox = new mapboxgl.Map({
				container: app.mapContainer,
				style: 'mapbox://styles/mapbox/'+$element.data('style')+'?optimize=true',
				center: [$element.data('lng'), $element.data('lat')],
				zoom: 9,
				dragPan: ! AgentFire.UA.detect_mobile(),
				scrollZoom: false,
			});
			app.mapBox.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

			app.mapBox.on('load', function () {
				app.polygonLayer = app.mapBox.addLayer({
					'id': 'area_polygon',
					'type': 'fill',
					'source': {
						'type': 'geojson',
						'data': geojson
					},
					'layout': {},
					'paint': {
						'fill-color': $element.data('color'),
						'fill-opacity': $element.data('opacity')
					}
				});
				AgentFire.Api.Turf(function () {
					app.mapBox.fitBounds(turf.bbox(geojson), {
						padding: screen.width > 1023 ? 50 : 25,
						duration: AgentFire.UA.detect_mobile() ? 0 : 2000
					});
				});
				app._initPoiButtons();
			});
		});
	};

	this._loadPoi = function(category, limit, callback) {
		var cache = AreaGuide.cache.poi[communityIds + category] || null;
		if (cache) {
			callback(cache);
		} else {
			var restUrl = AreaGuideData.restHost
				+ '/v1/area-data/poi/' + communityIds + '/' + category + '?api_key=' + AreaGuideData.restKey
              	+ '&cache=' + AreaGuideData.cacheKey + '&service='+AreaGuideData.provider + '&country=' + AreaGuideData.providerCountry;
			if (limit) {
				restUrl += '&limit=' + limit;
			}
			AgentFire.Request.get(restUrl, function (data) {
				AreaGuide.cache.poi[communityIds + category] = data.data;
				callback(data.data);
			});
		}
	};

	this._toggleBadge = function() {
		var $active = $element.find('.agw-map__poi-button--active'),
			$badge = $element.find('.agw-map__badge'),
			$noPoiElement = $element.find('.agw-map__no-poi'),
			markersCount = 0,
			emptyPoiCategory = '';

		if ($active.length) {
			$badge.hide();

			Object.keys(markers).forEach(function(category) {
				markersCount += markers[category].length;
				if (!markers[category].length) {
					emptyPoiCategory = $('.agw-map__poi-button[data-category="'+category+'"]').data('original-title') || 'POI category';
				}
			});
			if (markersCount === 0) {
				var message = "<span>There doesn't seem to be any "+emptyPoiCategory+" in the area</span>";
				$noPoiElement.show().html(message);
			} else {
				$noPoiElement.hide();
			}

			app.mapBox.setPaintProperty(
				'area_polygon',
				'fill-opacity',
				$element.data('opacity') === 1 ? .25 : $element.data('opacity') / 3
			);
			app.mapBox.dragPan.enable();
		} else {
			$badge.show();
			$noPoiElement.hide();
			app.mapBox.fitBounds(turf.bbox(geojson), {
				padding: screen.width > 1023 ? 50 : 25
			});
			app.mapBox.setPaintProperty(
				'area_polygon',
				'fill-opacity',
				$element.data('opacity')
			);
			app.mapBox.dragPan.disable();
		}
	};

	this._initPoiButtons = function () {
		$element.find('.agw-map__poi-button').on('click', function () {
			var $button = $(this),
				activeClass = 'agw-map__poi-button--active',
				loadingClass = 'agw-map__poi-button--loading',
				category = $button.data('category'),
				limit = $element.data('poi-limit');

			if ($button.hasClass(loadingClass)) {
				return;
			}

			$button.toggleClass(activeClass);

			if ($button.hasClass(activeClass)) {
				$button.addClass(loadingClass);
				app._loadPoi(category, limit, function (poi) {
					$button.removeClass(loadingClass);
					if (!$button.hasClass(activeClass)) {
						// return;
					}
					markers[category] = [];
					var places = {
						'type': 'FeatureCollection',
						'features': []
					};
					for (var i = 0; i < poi.length; i++) {
						var address = [];
						if (typeof poi[i].address.street !== 'undefined') {
							address.push(poi[i].address.street);
						}
						if (typeof poi[i].address.city !== 'undefined') {
							address.push(poi[i].address.city);
						}
						if (typeof poi[i].address.zip !== 'undefined') {
							address.push(poi[i].address.zip);
						}
						address = address.filter(v => v);
						places.features.push({
							'type': 'Feature',
							'properties': {
								'title': poi[i].name,
								'description': address.join(', '),
								'phone': poi[i].phone,
								'category': category
							},
							'geometry': {
								'type': 'Point',
								'coordinates': [poi[i].coordinates.longitude, poi[i].coordinates.latitude]
							}
						});
					}
					places.features.forEach(function (feature) {
						var iconElement = document.createElement('i');
						iconElement.className = 'af-icon-' + icons[category];
						var markerElement = document.createElement('div');
						markerElement.className = 'agw-map__marker agw-map__marker--' + category;
						var el = document.createElement('div');
						el.appendChild(markerElement);
						el.appendChild(iconElement);
						var popupText = '<h6>' + feature.properties.title + '</h6>'
							+ '<p>' + feature.properties.description + '</p>';
						if (typeof feature.properties.phone !== 'undefined') {
							popupText += '<p class="agw-map__phone"><i class="fa fa-phone mr-1"></i>'
								+ '<a href="tel:' + feature.properties.phone + '">' + feature.properties.phone + '</a>'
								+ '</p>';
						}
						var marker = new mapboxgl.Marker(el)
							.setLngLat(feature.geometry.coordinates)
							.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(popupText))
							.addTo(app.mapBox);
						markers[category].push(marker);
					});
					app._toggleBadge();
				});
			} else {
				markers[category].forEach(function(marker) {
					marker.remove();
				});
				delete markers[category];
				app._toggleBadge();
			}
		});
	};

	if (!AreaGuideData.isEditorPreview) {
		this._initMap();
		$element.find('.agw-map__poi-buttons button').tooltip({
			trigger: 'hover'
		});
	}

	// mark this widget  as initialized
	$element.addClass('initialized');
};
