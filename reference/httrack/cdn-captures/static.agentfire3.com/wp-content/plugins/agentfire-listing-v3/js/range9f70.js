;(function ($, window, document, undefined) {
	"use strict";

	var pluginName = "mlfRange",
		defaults = {
			mask: false
		};

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {

			var plugin = this,
				$element = $(this.element),
				$allInputs = $element.find('.mlf-range__input input'),
				$minInput = $element.find('.mlf-range__input--min input'),
				$maxInput = $element.find('.mlf-range__input--max input'),
				$buttonsElement = $element.find('.mlf-range__buttons'),
				mask = plugin.settings.mask || $element.data('mask'),
				$sliderElement = $element.find('.mlf-range__slider'),
				slides = plugin.settings.options[$sliderElement.data('slides')],
				valueMin = destroyMask($element.attr('data-min')),
				valueMax = destroyMask($element.attr('data-max'));

			function buttonsValue(value1, value2) {
				valueMin = value1 >= value2 ? value2 : value1;
				valueMax = value1 >= value2 ? value1 : value2;
				if (valueMax === '5') {
					valueMax = '';
				}
				updateValues();
			}

			if ($buttonsElement.length) {
				var started = false,
					$buttons = $buttonsElement.find('button'),
					$inputs = $buttonsElement.find('input[type=radio]'),
					value1, value2;
				$inputs.on('change', function () {
					var $input = $(this);
					if ($input.val() === '') {
						$inputs.not($input).prop('checked', false);
					}
					$element.trigger('mlf.change', {
						name: $input.attr('name'),
						value: $input.val()
					});
				});
				$buttons.on('click', function (e) {
					e.preventDefault();
					var $button = $(this);
					if ($button.attr('data-value') === '') {
						started = false;
						value1 = '';
						value2 = '';
						$buttons.not($button).removeClass('selected', false);
						$button.addClass('selected');
						buttonsValue(value1, value2);
						return true;
					}
					$button.addClass('selected');
					if (started === false) {
						$buttons.not($button).removeClass('selected', false);
						value1 = $button.attr('data-value');
						value2 = $button.attr('data-value');
						buttonsValue(value1, value2);
						started = $buttons.index($(this));
					} else {
						started = false;
						value2 = $button.attr('data-value');
						buttonsValue(value1, value2);
					}
				}).on('mouseenter', function () {
					if (started !== false) {
						var hoverIndex = $buttons.index($(this));
						value2 = $(this).attr('data-value');
						buttonsValue(value1, value2);
						$buttons.each(function () {
							var buttonIndex = $buttons.index($(this));
							$(this).toggleClass(
								'selected',
								(hoverIndex < started && buttonIndex >= hoverIndex && buttonIndex < started)
								||
								(hoverIndex > started && buttonIndex <= hoverIndex && buttonIndex > started)
								||
								buttonIndex === started
							);
						});
					}
				})
			}

			function getValueIndex(value, minmax) {
				if (value === '') {
					return minmax === 'min' ? 0 : slides.length - 1;
				}
				if (value !== '') {
					for (var i = 1; i < slides.length - 1; i++) {
						if (slides[i] >= value) {
							return i;
						}
					}
				}
				return slides.length - 1;
			}

			function updateValues() {
				$element.trigger('mlf.change', {
					name: $minInput.attr('name'),
					value: valueMin
				});

				$element.trigger('mlf.change', {
					name: $maxInput.attr('name'),
					value: valueMax
				});

				if ($sliderElement.length) {
					$sliderElement.slider('values', 0, getValueIndex(valueMin, 'min'));
					$sliderElement.slider('values', 1, getValueIndex(valueMax, 'max'));
				}

				if ($allInputs.length) {
					var maskedValueMin = createMask(valueMin);
					var maskedValueMax = createMask(valueMax);

					$minInput.val(maskedValueMin);
					$maxInput.val(maskedValueMax);

					// emit values with the applied mask
					$element.trigger('mlf.maskApplied', {
						min: {
							name: $minInput.attr('name'),
							value: maskedValueMin
						},
						max: {
							name: $maxInput.attr('name'),
							value: maskedValueMax
						}
					});

					$minInput.siblings('.mlf-range__suggestions').find('.mlf-range__suggestion').each(function () {
						var $suggestion = $(this),
							value = $suggestion.data('value');
						$suggestion.toggle(value === '' || valueMax === '' || parseInt(value) <= parseInt(valueMax));

					});
					$maxInput.siblings('.mlf-range__suggestions').find('.mlf-range__suggestion').each(function () {
						var $suggestion = $(this),
							value = $suggestion.data('value');
						$suggestion.toggle(value === '' || valueMin === '' || parseInt(value) >= parseInt(valueMin));
					});
				}
			}

			function createMask(string) {
				if (mask === 'currency' && string !== '') {
					string = '$' + new Intl.NumberFormat('en-US', {maximumFractionDigits: 0}).format(string);
				} else if (mask === 'number' && string !== '') {
					string = new Intl.NumberFormat('en-US', {maximumFractionDigits: 0}).format(string);
				}
				return string;
			}

			function destroyMask(string) {
				if (mask === 'currency' && string !== '') {
					string = string.replace(/\D/g, '');
				} else if (mask === 'number' && string !== '') {

					string = string.replace(/\D/g, '');
				}
				return string;
			}

			if ($sliderElement.length) {
				$sliderElement.slider({
					min: 0,
					max: slides.length - 1,
					range: true,
					values: [getValueIndex(valueMin, 'min'), getValueIndex(valueMax, 'max')],
					slide: function (event, ui) {
						if (ui.values[0] > slides.length - 2) {
							return false;
						}
						if (ui.values[1] < 1) {
							return false;
						}
						valueMin = slides[ui.values[0]].toString();
						valueMax = slides[ui.values[1]].toString();
						updateValues()
					}
				});
			}

			if ($allInputs.length) {
				$minInput.val(createMask($minInput.val()));
				$minInput.on('input', function () {
					valueMin = destroyMask($(this).val());
					updateValues();
				});
				$maxInput.val(createMask($maxInput.val()));
				$maxInput.on('input', function () {
					valueMax = destroyMask($(this).val());
					updateValues();
				});
				$allInputs.on('focus', function () {
					$('.mlf-range__suggestions.show').removeClass('show');
					$(this).siblings('.mlf-range__suggestions').addClass('show');
				});
				$(document).on('click', function (event) {
					var $target = $(event.target);
					if (!$target.closest('.mlf-range__input').length) {
						$element.find('.mlf-range__suggestions.show').removeClass('show');
					}
				});

				$element.find('.mlf-range__suggestion').on('click', function () {
					var $suggestions = $(this).closest('.mlf-range__suggestions');
					$suggestions.siblings('input').val(createMask($(this).data('value'))).trigger('input');
					$suggestions.removeClass('show');
				});
			}
		}
	});

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" +
					pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
