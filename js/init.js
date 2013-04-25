var init = function(){

	/*
		Miniport 2.0 by HTML5 UP
		html5up.net | @n33co
		Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
		*/

		jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
		jQuery.browser={};(function(){jQuery.browser.msie=false;jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

		jQuery(function() {

			var	_bh = jQuery('body, html'),
			_window = jQuery(window),
			_nav = jQuery('#nav');

		// Forms
		if (jQuery.browser.msie && jQuery.browser.version <= 9)
			jQuery('form').n33_formerize();

		// jQuery('form .form-button-submit').click(function(e) { e.preventDefault(); jQuery(this).closest('form').submit(); });
		// jQuery('form .form-button-reset').click(function(e) { e.preventDefault(); jQuery(this).closest('form')[0].reset(); });

		// Links
		jQuery('a').click(function(e) {
			var t = jQuery(this), h = t.attr('href'), article;

			if (h.charAt(0) == '#' && h.length > 1 && (article = jQuery('article#' + h.substring(1))).length > 0)
			{
				var pos = Math.max(article.parent().offset().top - _nav.height() + 15, 0);
				e.preventDefault();
				_bh.animate({ scrollTop: pos }, 'slow', 'swing');
			}
		});
	});


	// portfolio view more
	jQuery(function() {
		var	_bh = jQuery('body, html'),
		_window = jQuery(window),
		_nav = jQuery('#nav');

		$('#portfolio .box.clickable').click(function (e) {
			$this = $(this);
			c = $this.attr("class");
			// get the more box
			selector = c.replace("box clickable box-style2 ", "");
			morebox = $(".more."+selector);
			$(".more").css("display", "none")
			// for mobile we add it just after
			if (_bh.width()<460){
				morebox.appendTo(".more-mobile."+selector)
			}

			morebox.animate({ "opacity": "show"} , 500 );
			var pos = Math.max(morebox.offset().top - _nav.height() + 15, 0);
			_bh.animate({ scrollTop: pos }, 'slow', 'swing');
			morebox.find("a.lightbox").fancybox();
		});
	});


	// email sending
	$(function() {
		$('.error').hide();
		$(".form-button-submit").click(function() {
			// validate and process form here

			$('.error').hide();
			var name = $("input#name").val();
			if (name == "") {
				$("label#name_error").show();
				$("input#name").focus();
				return false;
			}
			var email = $("input#email").val();
			if (email == "") {
				$("label#email_error").show();
				$("input#email").focus();
				return false;
			}
			var subject = $("input#subject").val();
			if (subject == "") {
				$("label#subject_error").show();
				$("input#subject").focus();
				return false;
			}
			var message = $("textarea#message").val();
			if (message == "") {
				$("label#message_error").show();
				$("textarea#message").focus();
				return false;
			}

			var dataString = 'name='+ name + '&email=' + email + '&message=' + message + '&subject=' + subject;
			//alert (dataString);return false;
			$.ajax({
				type: "POST",
				url: "send_email.php",
				data: dataString,
				success: function() {
					$(".email-sent").hide()
					.removeClass("hide")
					.fadeIn(1000);
				}
			});
			return false;
		});
	});

	// load images
	$("img.lazy").lazyload({ threshold : 100 });

}