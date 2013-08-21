"use strict";
/*
 Author: Fed
 v1.3
 */

(function($) {
	$(function() {
		$('form').submit(function() {
		$('input#email').blur();

		var valid = true;
		$(this).find('input').each(function() {
			var obj_this = $(this);
			if (obj_this.attr('required')) {
			if (obj_this[0].type == 'checkbox') {
				if (!obj_this[0].checked) {
				valid = false;
				obj_this.focus();
				return false;
				}
			}
			if (!obj_this.val()) {
				valid = false;
				obj_this.focus();
				return false;
			}
			}
		});
		if (!valid) {
			return false;
		}
		});
		
		$('input#email').blur(function() {
		if ($.trim(this.value)) {
			if (!isValidEmail(this.value)) {
			this.value = '';
			$(this).focus();
			return false;
			}
		}
	    });
	});
})(jQuery);

function isValidEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return filter.test(email);
}