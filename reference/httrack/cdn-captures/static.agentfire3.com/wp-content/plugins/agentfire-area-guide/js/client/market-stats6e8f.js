/* global AgentFire, AreaGuide, AreaGuideData */

// Find all not initialized market-stats widgets and init them
AreaGuide.marketStats = function ($) {
	$('.agw-stats:not(.initialized)').each(function () {
		var $element = $(this);
		AgentFire.Unveil.add($element, function() {
			new AreaGuide._marketStats($, $element);
		});
	});
};

// Separate function to init each market-stats block
AreaGuide._marketStats = function ($, $element) {
	if ($element.find('[data-value]').length) {
		AreaGuide.loadMeasureData(function (data) {
			var clean = AgentFire.Validate.Clean,
				average = clean.price(AreaGuideData.isLocalLogicActive ? data.current.salePrice.median : data.current.salePrice.average),
				sales = clean.number_format(data.current.salePrice.count),
				diff = AreaGuideData.isLocalLogicActive ? (data.current.salePrice.median - data.previous.salePrice.median) : (data.current.salePrice.average - data.previous.salePrice.average),
				diffValue = clean.number_format(Math.abs(diff)),
				diffSign = diff > 0 ? '+' : '-';

			$element.find('[data-value="total_sale_average"]').text(average);
			$element.find('[data-value="total_sale_count"]').text(sales);
			$element.find('[data-value="average_compare"]').text(diffSign + ' $' + diffValue);

			if (data.timePeriodLabel && $element.find('[data-time-period]').length) {
				$element.find('[data-time-period]').text(data.timePeriodLabel).removeAttr('data-time-period').addClass('3');
			}
		});
	}

	// mark this widget  as initialized
	$element.addClass('initialized');
};
