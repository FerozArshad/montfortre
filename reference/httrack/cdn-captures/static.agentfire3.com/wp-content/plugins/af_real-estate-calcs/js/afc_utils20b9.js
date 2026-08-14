// Output sum in a pretty manner
function afcExtractSum(input) {
	var sum = input.val() + "";

	sum = sum.replace(/[^\d.-]/g, '');
	sum = parseFloat(sum);
	sum = sum.toFixed(2);

	if (isNaN(sum)) {
		sum = 0;
	}

	return parseFloat(sum);
}

function afcSetPrettySum(element, inputSum, useHTML, prefix) {
	var sum;

	if (typeof ( prefix ) === 'undefined') {
		prefix = '';
	}

	if (typeof ( inputSum ) === 'undefined') {
		sum = afcExtractSum(element);
	} else {
		sum = inputSum;
	}

	sum = parseFloat(sum);
	sum = parseFloat(sum.toFixed(2));

	if (Math.abs(sum) > 0) {
		sum = prefix + sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	} else {
		sum = '';
	}

	if (useHTML === true) {
		element.html(sum);
	} else {
		element.val(sum);
	}
}

// Output integer in a pretty manner
function afcExtractInt(input) {
	var value = input.val() + "";

	value = value.replace(/[^0-9]/g, '');
	value = parseInt(value);
	if (isNaN(value)) {
		value = 0;
	}

	return parseInt(value);
}

function afcSetPrettyInt(element, inputVal, useHTML, prefix) {
	var value;

	if (typeof ( prefix ) === 'undefined') {
		prefix = '';
	}

	if (typeof ( inputVal ) === 'undefined') {
		value = afcExtractInt(element);
	} else {
		value = inputVal;
	}

	value = parseInt(value);

	if (value > 0) {
		value = prefix + value.toString();
	} else {
		value = '';
	}

	if (useHTML === true) {
		element.html(value);
	} else {
		element.val(value);
	}
}

jQuery(document).ready(function() {
	// Set tooltips
	jQuery('.afc_tooltip').each(function() {
		jQuery(this).tooltip({
			placement: 'top',
			html: true,
			title: jQuery(this).attr('data-tooltip')
		});
	});

	jQuery('body').on('hidden.bs.tooltip', function() {
		var tooltips = jQuery('.tooltip').not('.in');
		if (tooltips) {
			tooltips.remove();
		}
	});
});
