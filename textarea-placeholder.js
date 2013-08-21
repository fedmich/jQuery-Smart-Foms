"use strict";
/*
 Author: Fed
 v0.1
 */

//Alternative implementation of placeholders for textarea
(function($) {
	$(function() {
	var oTxt = $('textarea.placeholder');
	if(oTxt.length){
		oTxt.each(function(){
			var o = $(this);
			o.data('holder-text', o.val() );
			o.focus(function(){
				if(o.val() == o.data('holder-text') ){
					o.val ( '' );	//clear it
				}
			}).blur(function(){
				if(! o.val() ){
					o.val ( o.data('holder-text') );
				}
			});
		});
	}
	});
})(jQuery);