/* global AgentFire_Settings */

window.leadManagerAgentAlias = window.leadManagerAgentAlias || null;

var lmClient = (function($, Request) {
	'use strict';

	var app = {};

	app.getCookie = function (name) {
		var cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return cookie ? cookie[2] : null;
	}

	app.setCookie = function(key, value, expiry) {
		var d = new Date();
		d.setTime(d.getTime() + (expiry * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value + ';path=/' + ';expires=' + d.toUTCString();
	}

	app.syncEvents = function() {
		var personId = app.getCookie('_af_lm[._]pid');
		if (personId) {
			setTimeout(function(){
				$.ajax({
					url: AgentFire_Settings.home_url + '/wp-json/agentfire/v1/lead-manager/sync/' + personId,
					type: 'POST',
					success: function(response) {
						if (!response.data) {
							setTimeout(function(){
								$.ajax({
									url: AgentFire_Settings.home_url + '/wp-json/agentfire/v1/lead-manager/sync/' + personId,
									type: 'POST'
								});
							}, 3000);
						}
					},
					error: function(jqXHR) {
						if (jqXHR.status === 422) {
							app.setCookie('_af_lm.pid', '', -1);
							app.setCookie('_af_lm_pid', '', -1);
						}
					}
				});
			}, 2000);
		}
	}

	app.saveSource = function() {
		var sourceId = app.getCookie('_af_lm_sid');
		if (sourceId === null) {
			if (typeof window.af_lm_sid !== 'undefined') {
				sourceId = window.af_lm_sid;
			} else {
				sourceId = 0;
			}
			app.setCookie('_af_lm_sid', sourceId, 365);
		}
	}

	app.saveUtmTags = function() {
		var utm = {},
			tags = [
				'utm_source',
				'utm_medium',
				'utm_campaign',
				'utm_content',
				'utm_id',
				'utm_term'
			],
			urlParams = new URLSearchParams(window.location.search);

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i];
			if (urlParams.has(tag)) {
				utm[tag] = urlParams.get(tag);
			}
		}

		if (Object.keys(utm).length) {
			app.setCookie('_af_lm_utm', JSON.stringify(utm), 90);
		}
	}

	app.maybeAssignAgent = function() {
		var hash = decodeURI(window.location.hash), // get hashes from url
			hashes = (app.getCookie('_af_lm_aid') || '').split('|'), // get hashes from cookies
			ignoreHashes = [
				'property',
				'result',
				'error',
				'person',
				'drip',
				'promote',
				'register',
				'forceregistration'
			]

		// add hashes from url
		if (hash) {
			hashes = (hash.split('#').filter(function (v) {
				return v && v.indexOf('/') !== 0 && ignoreHashes.indexOf(v) === -1;
			})).concat(hashes);
		}

		// force agent for ?a= link for backward compatibility
		var url = new URL(window.location.href),
			searchParams = new URLSearchParams(url.search),
			aid = searchParams.get('a');
		if (aid) {
			hashes = [aid];
		}

		// add attributed agent
		if (window.leadManagerAgentAlias) {
			hashes.push(window.leadManagerAgentAlias);
		}

		// unique hashes
		hashes = hashes.filter(Boolean).reverse().filter(function (v, i, self) {
			return self.indexOf(v) === i;
		}).reverse();

		if (hashes.length) {
			app.setCookie('_af_lm_aid', hashes.join('|'), 7);
		}
	}

	app.run = function() {
		app.maybeAssignAgent();
		jQuery(function() {
			app.syncEvents();
			app.saveSource();
			app.saveUtmTags();
		});
	};

	return {
		run: app.run
	}
})(jQuery);

lmClient.run();
