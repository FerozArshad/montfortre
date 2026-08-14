/* global afcExtractSum, afcSetPrettySum, afcSetPrettyInt, add_payments */

// Additional Payment routines
var afmAddPaymentBtnValue;
var afmAddPaymentBtnStyle;

function afmChangeIndex(element, selector, attr, newIndex) {
	element.find(selector + '[' + attr + ']').each(function() {
		jQuery(this).attr(attr, jQuery(this).attr(attr).replace(1, newIndex));
	});
}

function afmClearValue(element, selector) {
	element.find(selector).each(function() {
		jQuery(this).val('');
	});
}

function afmClearSelectValue(element, selector) {
	element.find(selector).each(function() {
		jQuery(this).val('');
	});
}

function afmAddSection(useIndex) {
	var newIndex;

	if (typeof useIndex === 'undefined') {
		newIndex = parseInt(jQuery('#afm_add_count').val()) + 1;
		jQuery('#afm_add_count').val(newIndex);
	} else {
		newIndex = useIndex;
	}

	if (newIndex === 1) {
		afmShowFirstAddPayment();
		return;
	}

	var newBox = jQuery('#add_payment_box1').clone();

	newBox.attr('id', 'add_payment_box' + newIndex);

	afmChangeIndex(newBox, 'tr', 'id', newIndex);
	afmChangeIndex(newBox, 'label', 'for', newIndex);
	afmChangeIndex(newBox, 'input', 'id', newIndex);
	afmChangeIndex(newBox, 'input', 'name', newIndex);
	afmClearValue(newBox, 'input.afc_sum');
	afmChangeIndex(newBox, 'select', 'id', newIndex);
	afmChangeIndex(newBox, 'select', 'name', newIndex);

	newBox.find('select').each(function() {
		jQuery(this).find('option[checked]').removeAttr('checked');
		jQuery(this).find('option:first').attr('checked', 'checked');
	});

	jQuery('#add_payment_box1').after(newBox);

	jQuery('#afm_addp_freq' + newIndex).bind('change', function() {
		afmSetFreq(jQuery(this));
	});

	afmSetFreq(jQuery('#afm_addp_freq' + newIndex));
}

function afmDelSection() {
	var lastIndex = parseInt(jQuery('#afm_add_count').val()) - 1;
	jQuery('#afm_add_count').val(lastIndex);

	if (lastIndex === 0) {
		afmShowFirstAddPayment();
	} else {
		lastIndex ++;
		jQuery('#add_payment_box' + lastIndex).remove();
	}
}

function afmShowFirstAddPayment() {
	var count = parseInt(jQuery('#afm_add_count').val());

	if (count === 0) {
		jQuery('#afm_add_payment_head').attr('style', 'display:none');
		jQuery('#add_payment_box1').attr('style', 'display:none');
		jQuery('#afm_add_payment_buttons .afc_hint').css('display', 'none');
		jQuery('#afm_add_payment_buttons .afc_reset').attr('style', 'display:none');

		jQuery('#afm_add_payment').val(afmAddPaymentBtnValue);
		jQuery('#afm_add_payment_buttons .afc_submit').attr('style', afmAddPaymentBtnStyle);
		jQuery('#afm_add_payment_buttons .afc_submit').attr('colspan', 3);
	} else {
		jQuery('#afm_add_payment_head').removeAttr('style');
		jQuery('#add_payment_box1').removeAttr('style');
		jQuery('#afm_add_payment_buttons .afc_hint').css('display', 'table-cell');
		jQuery('#afm_add_payment_buttons .afc_reset').removeAttr('style');

		jQuery('#afm_add_payment_buttons .afc_submit').removeAttr('style');
		jQuery('#afm_add_payment_buttons .afc_submit').removeAttr('colspan');

		jQuery('#afm_add_payment').val('Add Payment');
	}
}

function afmSetFreq(element) {
	if (! element.length) {
		return;
	}
	var elementName = element.attr('name');
	var indexStr = elementName.match(/\d+$/);
	var index;

	if (indexStr) {
		index = parseInt(indexStr[0], 10);
	} else {
		return;
	}

	if (jQuery('#afm_addp_freq' + index).val() != 1) {
		jQuery('#afm_addp_schedule_row' + index).removeAttr('style');

		if (jQuery('#afm_addp_freq' + index).val() == 2) {
			jQuery('#afm_addp_years' + index).attr('style', 'display:none');
		} else {
			jQuery('#afm_addp_years' + index).removeAttr('style');
		}

	} else {
		jQuery('#afm_addp_schedule_row' + index).attr('style', 'display:none');
	}
}

// Down Payment
function afmSetDownPayment() {
	var downPay = afcExtractSum(jQuery('#afm_down'));

	if (downPay >= 100) {
		jQuery('#afm_down_pre').val('$');
	} else {
		jQuery('#afm_down_pre').val('%');
	}
}

jQuery(document).ready(function() {
	// Other fees
	afmSetDownPayment();

	jQuery('#afm_down').bind("focusout", function() {
		afmSetDownPayment();
	});

	jQuery('#afm_start').datepicker({
		dateFormat: 'mm-dd-yy',
		beforeShow: function(input, inst) {
			jQuery('#ui-datepicker-div').addClass('af-calc-datepicker');
		}
	});

	jQuery('#afm_start').datepicker('setDate', '+0');

	jQuery('#afc_mortgage_calc_form input.afc_sum').each(function() {
		jQuery(this).bind("focusout", function() {
			afcSetPrettySum(jQuery(this));
		});
	});

	jQuery('#afc_mortgage_calc_form input.afc_int').each(function() {
		jQuery(this).bind("focusout", function() {
			afcSetPrettyInt(jQuery(this));
		});
	});

	// Additional Payments
	if (typeof add_payments !== 'undefined') {
		var count = parseInt(add_payments.count);

		afmShowFirstAddPayment();

		for (var i = 1; i <= count; i ++) {
			if (i > 1) {
				afmAddSection(i);
			}

			jQuery('#afm_addp_freq' + i).val(add_payments['freq' + i]);
			jQuery('#afm_addp_sum' + i).val(add_payments['sum' + i]);
			jQuery('#afm_addp_month' + i).val(add_payments['month' + i]);
			jQuery('#afm_addp_years' + i).val(add_payments['year' + i]);
		}
	}

	afmSetFreq(jQuery('#afm_addp_freq1'));
	jQuery('#afm_addp_freq1').on('change', function() {
		afmSetFreq(jQuery(this));
	});

	jQuery('#afm_add_payment').click(function() {
		afmAddSection();
	});

	jQuery('#afm_delete_payment').click(function() {
		afmDelSection();
	});

	afmAddPaymentBtnValue = 'Add Additional Payment';
	afmAddPaymentBtnStyle = 'text-align: center; padding-left: 20%; padding-right: 20%';

	afmShowFirstAddPayment();

	jQuery('#afh_reset_btn').click(function(e) {
		jQuery('#afc_mortgage_calc_form .afc_result_row').each(function() {
			jQuery(this).css('display', 'none');
		});

		for (var i = 2; i <= parseInt(jQuery('#afm_add_count').val()); i ++) {
			jQuery('#add_payment_box' + i).remove();
		}

		jQuery('#afm_add_count').val(1);
		afmDelSection();
	});
});
