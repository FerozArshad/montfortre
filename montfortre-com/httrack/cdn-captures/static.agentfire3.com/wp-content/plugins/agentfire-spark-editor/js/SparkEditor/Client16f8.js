/* global AgentFire, YT */

var CustomBlock = {
	init: function() {
		CustomBlock.YTBackground.init();
		CustomBlock.VideoBackground.init();
		CustomBlock.LightboxImages.init();
		CustomBlock.MapWidget.init();
	}
};

CustomBlock.LightboxImages = (function($) {
	var app = {};

	app.init = function() {
		$('.cb-lightbox').magnificPopup({
			closeOnContentClick: true,
			image: {
				verticalFit: true
			},
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			mainClass: 'mfp-fade',
			fixedContentPos: false,
			callbacks: {
				elementParse: function(item) {
					var extension = item.src.split('.').pop();
					switch(extension) {
						case 'jpg':
						case 'jpeg':
						case 'png':
						case 'gif':
							item.type = 'image';
							item.mainClass = 'mfp-img-mobile';
							if (item.el.attr('data-mfp-srcset')) {
								item.srcset = item.el.attr('data-mfp-srcset');
							}
							break;
						case 'html':
							item.type = 'ajax';
							break;
						default:
							item.type = 'iframe';
					}
				},
				markupParse: function(template, values, item) {
					if (item.type === 'image' && item.srcset && values.img_replaceWith) {
						values.img_replaceWith.attr('srcset', item.srcset);
					}
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
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					}
				},
				srcAction: 'iframe_src'
			}
		});
	};

	return app;
})(jQuery);

CustomBlock.MapWidget = (function($) {
	var app = {};

	app.init = function () {
		var $widgets = $('.cbl__map').not('.cbl__map--init');
		$widgets.each(function () {
			var $widget = $(this),
				$container = $widget.find('.cbl__map-box'),
				longitude = $widget.data('lng'),
				latitude = $widget.data('lat'),
				zoom = $widget.data('zoom'),
				is_marker = $widget.data('marker'),
				style = $widget.data('style'),
				optimize = $widget.data('optimize') ? 'optimize=true' : '';

			if ($container.length) {
				AgentFire.Api.Mapbox(function() {
					var map = new mapboxgl.Map({
						container: $container[0],
						style: 'mapbox://styles/mapbox/' + style + '?' + optimize,
						center: [longitude, latitude],
						zoom: zoom,
						scrollZoom: false
					});
					map.addControl(new mapboxgl.NavigationControl());

					if (is_marker) {
						map.on('style.load', function () {
							var el = document.createElement('div'),
								marker_el = document.createElement('div');
							marker_el.className = 'cbl__map-marker';
							el.appendChild(marker_el);
							new mapboxgl.Marker(el, {anchor: 'bottom'})
								.setLngLat([longitude, latitude])
								.addTo(map);
						});
					}
				});
			}
			$widget.addClass('cbl__map--init');
		});
	};

	return app;
})(jQuery);

CustomBlock.YTBackground = (function($) {
	var app = {};

	app.init = function() {
		var $elements = $('.cb__youtube:not(.is_editor_preview)');
		if ($elements.length) {
			AgentFire.load_script('https://www.youtube.com/iframe_api', {async: true});
			window.onYouTubeIframeAPIReady = function() {
				$elements.each(function(){
					AgentFire.Unveil.add(this, app.runPlayer);
				});
			};
		}
	};

	app.runPlayer = function($element) {
		var player,
			repeatInterval = false,
			video_id = $element.data('video_id') || '';
		if (video_id === '') {
			return;
		}
		app.repeatProcess = function() {
			if (player.getCurrentTime() > (player.getDuration() - 2)) {
				player.seekTo(1, true);
			}
		};
		app.onPlayerReady = function(event) {
			event.target.mute();
			event.target.playVideo();
		};
		app.onPlayerStateChange = function(event) {
			if (event.data === YT.PlayerState.PLAYING && !repeatInterval) {
				$element.find('.cb__youtube-player').addClass('is-playing');
				repeatInterval = setInterval(app.repeatProcess, 1000);
			}
		};
		player = new YT.Player($element.find('.cb__youtube-player')[0], {
			videoId: video_id,
			playerVars: {
				autoplay: 1,
				mute: 1,
				controls: 0,
				showinfo: 0,
				autohide: 0,
				enablejsapi: 1,
				loop: 1,
				vq: 'hd1080',
				playlist: video_id
			},
			events: {
				'onReady': app.onPlayerReady,
				'onStateChange': app.onPlayerStateChange
			}
		});
	};

	return app;
})(jQuery);

CustomBlock.VideoBackground = (function($) {
	var app = {};

	app.init = function() {
		var $elements = $('.cb__video:not(.is_editor_preview)');
		if ($elements.length) {
			$elements.each(function(){
				AgentFire.Unveil.add(this, function($element) {
					if ($element.find('video').hasClass('ll-video')) {
						$element.find('video').on('ll-loaded', function() {
							app.runPlayer($element);
						});
					} else {
						app.runPlayer($element);
					}
				});
			});
		}
	};

	app.runPlayer = function($element) {
		var element = $element[0];
		var video = element.querySelector('video');
		if (video.getAttribute('playsinline') === null && /iPad|iPhone|iPod/.test(navigator.platform)) {
			element.style.backgroundImage = 'url("' + video.poster + '")';
			element.style.backgroundSize = 'cover';
			element.style.backgroundPosition = 'center';
			video.style.display = 'none';
		} else {
			video.addEventListener('contextmenu', function(e){
				e.preventDefault();
			});
			video.addEventListener('playing', function(){
				$(video).addClass('is-playing');
			});
			if (video.readyState >= video.HAVE_ENOUGH_DATA) {
				setTimeout(function () {
					video.play();
				}, 100);
			} else {
				video.addEventListener('canplaythrough', function () {
					setTimeout(function () {
						video.play();
					}, 100);
				});
			}
		}
	};

	return app;
})(jQuery);

jQuery(function() {
	CustomBlock.init();
});
