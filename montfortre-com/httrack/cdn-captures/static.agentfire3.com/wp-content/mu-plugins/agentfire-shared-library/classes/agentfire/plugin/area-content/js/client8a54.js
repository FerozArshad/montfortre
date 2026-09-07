jQuery(document).ready(function ($) {
	if ($('.subscribe_toggle').length > 0) {
		$('body').append(area_modal.gravity_form);
		var subscribe_container = $('#subscribe_modal');
		$('.subscribe_toggle').on('click tap', function () {
			var area_name = $(this).data('area-name');
			subscribe_container.find('.area-content-name-holder').html(area_name);
			subscribe_container.modal('show');
		});
	}
	
});