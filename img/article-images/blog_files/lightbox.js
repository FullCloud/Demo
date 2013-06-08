
;(function($){
	if(typeof popup_domination == 'undefined'){
		popup_domination = '';
		return false;
	}
	var timer, exit_shown = false;
	$(document).ready(function(){
		var cururl = window.location;
		if(decodeURIComponent(popup_domination.conversionpage) == cururl){
			var abcookie = get_cookie("popup_dom_split_show");
			var camp = popup_domination.campaign;
  				if(abcookie == 'Y'){
  				var popupid = get_cookie("popup_domination_lightbox");
  					var data = {
  						action: 'popup_domination_ab_split',
  						stage: 'opt-in',
  						camp : camp,
  						popupid : popupid,
						optin: '1'
  					}
  					jQuery.post(popup_domination_admin_ajax, data, function(response) {	
  						document.cookie = 'popup_dom_split_show' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
					});
  				}
		}
		
		if(check_cookie(popup_domination.popupid)){
			return false;
		}
		$(document).find('body').prepend(popup_domination.output);
		if(popup_domination.impression_count > 1){
			if(check_impressions()){
				return false;
			}
		}
		switch(popup_domination.show_opt){
			case 'mouseleave':
				$('html,body').mouseout(window_mouseout);
				break;
			case 'unload':
				enable_unload();
				break;
			default:
				if(popup_domination.delay && popup_domination.delay > 0){
					timer = setTimeout(show_lightbox,(popup_domination.delay*1000));
				} else {
					show_lightbox();
				}
				break;
		}
		if(popup_domination.center && popup_domination.center == 'Y')
			init_center();
			
		if(popup_domination.defaults){
			var defaults = popup_domination.defaults;
			for(var i in defaults){
				if($.trim(defaults[i]) != ''){
					$('.lightbox-signup-panel input[value="'+defaults[i]+'"]')
						.data('default_value',defaults[i])
						.focus(function(){
							var $this = $(this);
							if($this.val() == $this.data('default_value'))
								$this.val('');
						}).blur(function(){
							var $this = $(this);
							if($this.val() == '')
								$this.val($this.data('default_value'));
						});
				}
			}
		}
		
		$('.lightbox-overlay').click(function(){
			close_box(popup_domination.popupid);
			return false;
		});
		
		$('#popup_domination_lightbox_close').click(function(){
			close_box(popup_domination.popupid);
			return false;
		});
		var provider = $('.lightbox-signup-panel .provider').val();
		
		if(provider == 'aw'){
			$('#popup_domination_lightbox_wrapper .form div').append('</form>');
		};
		
		$('#popup_domination_lightbox_wrapper input[type="submit"]').click(function(){
			var checked = false;
			$('#popup_domination_lightbox_wrapper :text').each(function(){
				var $this = $(this), val = $this.val();
				if($this.data('default_value') && val == $this.data('default_value')){
					if(checked)
						$this.val('').focus();
					checked = false;
				}
				if(val == ''){
					checked = false;
				}else{
					if(val == $this.data('default_value')){
						checked = false;
					}else{
						checked = true;
					}
				}
			});
			if(checked){
				var email = $('.lightbox-signup-panel .email').val();
				var name = $('.lightbox-signup-panel .name').val();
				var custom1 = $('.lightbox-signup-panel .custom1_input').val();
				var custom2 = $('.lightbox-signup-panel .custom2_input').val();
				var customf2 = $('.lightbox-signup-panel .custom_id2').val();
				var customf1 = $('.lightbox-signup-panel .custom_id1').val();
				var listid = $('.lightbox-signup-panel .listid').val();
				$('#popup_domination_lightbox_wrapper input[type="submit"]').attr('disabled', 'disabled');
				$('#popup_domination_lightbox_wrapper .form input').fadeOut();
				$('#popup_domination_lightbox_wrapper .wait').fadeIn();
				if(provider != 'form' && provider != 'aw' && provider != 'nm'){
					var data = {
						action: 'popup_domination_lightbox_submit',
						name: name,
						email: email,
						custom1: custom1,
						custom2: custom2,
						customf1: customf1,
						customf2: customf2,
						provider: provider,
						listid: listid
					};
					
					jQuery.post(popup_domination_admin_ajax, data, function(response) {
						if(response.length > 4){
							$('#popup_domination_lightbox_wrapper input[type="submit"]').removeAttr('disabled', 'disabled');
							$('#popup_domination_lightbox_wrapper .form input').fadeIn();
							$('#popup_domination_lightbox_wrapper .wait').fadeOut();
						}else{
							close_box(popup_domination.popupid);
							if(check_split_cookie() != true){
								var popupid = popup_domination.popupid;
								var data = {
				  						action: 'popup_domination_analytics_add',
				  						stage: 'opt-in',
				  						popupid: popup_domination.popupid
				  					}
				  				jQuery.post(popup_domination_admin_ajax, data, function(){
				  					window.location.href = decodeURIComponent(popup_domination.redirect);
				  				});
			  				}else{
			  					window.location.href = decodeURIComponent(popup_domination.redirect);
			  				}
							
						}
					});
				}else{
					if(check_split_cookie() != true){
						var popupid = popup_domination.popupid;
						var data = {
		  						action: 'popup_domination_analytics_add',
		  						stage: 'opt-in',
		  						popupid: popup_domination.popupid
		  					}
		  				jQuery.post(popup_domination_admin_ajax, data, function(){
		  					$('.lightbox-signup-panel form').submit();
		  					close_box(popup_domination.popupid);
		  				});
		  				return false;
		  			}else{
		  				$('.lightbox-signup-panel form').submit();
		  				close_box(popup_domination.popupid);
		  			}
		  			return false;
				}
				
			}
			return false;
		});
		
		$('#popup_domination_lightbox_wrapper .sb_facebook').click(function(){
			if($(this).hasClass('got_user') == true){
				var email = $('.lightbox-signup-panel .fbemail').val();
				var name = $('.lightbox-signup-panel .fbname').val();
				var custom1 = $('.lightbox-signup-panel .custom1_input').val();
				var custom2 = $('.lightbox-signup-panel .custom2_input').val();
				var customf2 = $('.lightbox-signup-panel .custom_id2').val();
				var customf1 = $('.lightbox-signup-panel .custom_id1').val();
				var listid = $('.lightbox-signup-panel .listid').val();
				$('#popup_domination_lightbox_wrapper input[type="submit"]').attr('disabled', 'disabled');
				$('#popup_domination_lightbox_wrapper .form input').fadeOut();
				$('#popup_domination_lightbox_wrapper .wait').fadeIn();
				if(provider != 'form' && provider != 'aw' && provider != 'nm'){
					var data = {
						action: 'popup_domination_lightbox_submit',
						name: name,
						email: email,
						custom1: custom1,
						custom2: custom2,
						customf1: customf1,
						customf2: customf2,
						provider: provider,
						listid: listid
					};
					
					jQuery.post(popup_domination_admin_ajax, data, function(response) {
						if(response.length > 4){
							$('#popup_domination_lightbox_wrapper input[type="submit"]').removeAttr('disabled', 'disabled');
							$('#popup_domination_lightbox_wrapper .form input').fadeIn();
							$('#popup_domination_lightbox_wrapper .wait').fadeOut();
						}else{
							close_box(popup_domination.popupid);
							if(check_split_cookie() != true){
								var popupid = popup_domination.popupid;
								var data = {
				  						action: 'popup_domination_analytics_add',
				  						stage: 'opt-in',
				  						popupid: popup_domination.popupid
				  					}
				  				jQuery.post(popup_domination_admin_ajax, data, function(){
				  					window.location.href = decodeURIComponent(popup_domination.redirect);
				  				});
			  				}else{
			  					window.location.href = decodeURIComponent(popup_domination.redirect);
			  				}
							
						}
					});
				}else{
					$('#popup_domination_lightbox_wrapper .email').val(email);
					$('#popup_domination_lightbox_wrapper .name').val(name);
					if(check_split_cookie() != true){
						var popupid = popup_domination.popupid;
						var data = {
		  						action: 'popup_domination_analytics_add',
		  						stage: 'opt-in',
		  						popupid: popup_domination.popupid
		  					}
		  				jQuery.post(popup_domination_admin_ajax, data, function(){
		  					$('.lightbox-signup-panel form').submit();
		  					close_box(popup_domination.popupid);
		  				});
		  				return false;
		  			}else{
		  				$('.lightbox-signup-panel form').submit();
		  				close_box(popup_domination.popupid);
		  			}
		  			return false;
				}
				return false;
			}
		});
		
		
		$(function () {
		    var ele = $(".lightbox-download-nums");
		    var clr = null;
		    var number = $(".lightbox-download-nums").text();
		    number = parseInt(number);
		    var rand = number;
		    loop();
		    function loop() {
		        clearInterval(clr);
		        inloop();
		        setTimeout(loop, 1000);
		    }
		    function inloop() {
		        ele.html(rand += 1);
		        if (!(rand % 50)) {
		            return;
		        }
		        clr = setTimeout(inloop, 3000);
		    }
		});
	});
	
	function social_submit(){
		if($('#popup_domination_lightbox_wrapper .fbemail').val() != 'none' && $('#popup_domination_lightbox_wrapper .fbemail').val() != 'none'){
			var checked = false;
			$('#popup_domination_lightbox_wrapper :text').each(function(){
				var $this = $(this), val = $this.val();
				if($this.data('default_value') && val == $this.data('default_value')){
					if(checked)
						$this.val('').focus();
					checked = false;
				}
				if(val == ''){
					checked = false;
				}else{
					if(val == $this.data('default_value')){
						checked = false;
					}else{
						checked = true;
					}
				}
			});
			if(checked){
				var email = $('.lightbox-signup-panel .fbemail').val();
				var name = $('.lightbox-signup-panel .fbname').val();
				var listid = $('.lightbox-signup-panel .listid').val();
				var provider = $('.lightbox-signup-panel .provider').val();
				$('#popup_domination_lightbox_wrapper input[type="submit"]').attr('disabled', 'disabled');
				$('#popup_domination_lightbox_wrapper .form input').fadeOut();
				$('#popup_domination_lightbox_wrapper .wait').fadeIn();
				if(provider != 'form' && provider != 'aw' && provider != 'nm'){
					var data = {
						action: 'popup_domination_lightbox_submit',
						name: name,
						email: email,
						provider: provider,
						listid: listid
					};
					jQuery.post(popup_domination_admin_ajax, data, function(response) {
						if(response.length > 4){
							$('#popup_domination_lightbox_wrapper input[type="submit"]').removeAttr('disabled', 'disabled');
							$('#popup_domination_lightbox_wrapper .form input').fadeIn();
							$('#popup_domination_lightbox_wrapper .wait').fadeOut();
						}else{
							close_box(popup_domination.popupid);
							if(check_split_cookie() != true){
								var popupid = popup_domination.popupid;
								var data = {
				  						action: 'popup_domination_analytics_add',
				  						stage: 'opt-in',
				  						popupid: popup_domination.popupid
				  					}
				  				jQuery.post(popup_domination_admin_ajax, data, function(){
				  					window.location.href = decodeURIComponent(popup_domination.redirect);
				  				});
			  				}else{
			  					window.location.href = decodeURIComponent(popup_domination.redirect);
			  				}
						}
					});
				}else{
					if(check_split_cookie() != true){
						var popupid = popup_domination.popupid;
						var data = {
		  						action: 'popup_domination_analytics_add',
		  						stage: 'opt-in',
		  						popupid: popup_domination.popupid
		  					}
		  				jQuery.post(popup_domination_admin_ajax, data, function(){
		  					$('.lightbox-signup-panel form').submit();
		  					close_box(popup_domination.popupid);
		  				});
		  				return false;
		  			}else{
		  				$('.lightbox-signup-panel form').submit();
		  				close_box(popup_domination.popupid);
		  			}
		  			return false;
				}
			}
			return false;
		}
	}
	
	function enable_unload(){
		$(window).bind('beforeunload',function(e){ 
			if(exit_shown === false){
				e = e || window.event;
				exit_shown = true;
				setTimeout(show_lightbox,1000);
				$(window).bind('unload',function(){
					close_box(popup_domination.popupid);
				});
				if(e)
					e.returnValue = popup_domination.unload_msg;
				return popup_domination.unload_msg; 
			}
		});
	};
	function window_mouseout(e){
		var mX = e.pageX, mY = e.pageY, el = $(document).find('body');
		if((mY >= 0 && mY <= el.outerHeight()) && (mX >= 0 && mX <= el.outerWidth())){
			return;
		}
		show_lightbox();
	};
	function show_lightbox(){
		$(document).unbind('focus',show_lightbox);
		$('html,body').unbind('mouseout',window_mouseout);
		if(!check_cookie(popup_domination.popupid)){
			max_zindex();
			$('#popup_domination_lightbox_wrapper').fadeIn('fast');
			center_it();
			if(check_split_cookie() == true){				
				var date = new Date();
				date.setTime(date.getTime() + (86400*1000));
				set_cookie('popup_dom_split_show','Y', date);
				set_cookie('popup_domination_lightbox',popup_domination.popupid,date);
				var campid = popup_domination.campid;
				var data = {
  						action: 'popup_domination_ab_split',
  						stage: 'show',
  						popupid: popup_domination.popupid,
  						camp : popup_domination.campaign,
						optin: '1'
  					}
  				jQuery.post(popup_domination_admin_ajax, data);
			}else{
				if(popup_non != 'true'){
					var campid = popup_domination.campid;
					var data = {
	  						action: 'popup_domination_analytics_add',
	  						stage: 'show',
	  						popupid: popup_domination.popupid
	  					}
	  				jQuery.post(popup_domination_admin_ajax, data);
  				}
  				
  				
			}
		}
		var provider = $('.lightbox-signup-panel .provider').val();
		if(provider == 'aw'){
			var html = $('#popup_domination_lightbox_wrapper #removeme').html();
			$('#popup_domination_lightbox_wrapper #removeme').remove();
			if($('#popup_domination_lightbox_wrapper .form form').html() == null){
				$('#popup_domination_lightbox_wrapper .form div').prepend('<form method="post" action="http://www.aweber.com/scripts/addlead.pl"></form>')
				$('#popup_domination_lightbox_wrapper .form div form').prepend(html);
			}
		}
		
		
	};
	function center_it(){
		var styles = {
			position:'absolute',
			left: ($(window).width() - $('.popup-dom-lightbox-wrapper .lightbox-main').outerWidth())/2,
			top: ($(window).height() - $('.popup-dom-lightbox-wrapper .lightbox-main').outerHeight())/2
		};
		styles.left = styles.left < 0 ? 0 : styles.left;
		styles.top = styles.top < 0 ? 0 : styles.top;
		$('.popup-dom-lightbox-wrapper .lightbox-main').css(styles);
	};
	function init_center(){
		center_it();
		$(window).resize(center_it);
	};
	function max_zindex(){
		var maxz = 0;
		$('body *').each(function(){
			var cur = parseInt($(this).css('z-index'));
			maxz = cur > maxz ? cur : maxz;
		});
		$('#popup_domination_lightbox_wrapper').css('z-index',maxz+10);
	};
	function close_box(id){
		var elem = $('#popup_domination_lightbox_wrapper');
		clearTimeout(timer);
			elem.fadeOut('fast');
			if(popup_domination.cookie_time && popup_domination.cookie_time > 0){
				var date = new Date();
				date.setTime(date.getTime() + (popup_domination.cookie_time*86400*1000));
				if(id == '0'){
					id = 'zero';
				}else if(id == '1'){
					id = 'one';
				}else if(id == '3'){
					id = 'three';
				}else if(id == '4'){
					id = 'four';
				}
				set_cookie('popup_domination_hide_lightbox'+id,'Y',date);
				
			}
	};
	function set_cookie(name,value,date){
		window.document.cookie = [name+'='+escape(value),'expires='+date.toUTCString(),'path='+popup_domination.cookie_path].join('; ');
	};
	function check_cookie(id){
		if(id == '0'){
			id = 'zero';
		}else if(id == '1'){
			id = 'one';
		}else if(id == '3'){
			id = 'three';
		}else if(id == '4'){
			id = 'four';
		}
		if(get_cookie('popup_domination_hide_lightbox'+id) == 'Y')
			return true;
		return false;
	};
	function check_split_cookie(){
		if(popup_domination.splitcookie == true){
			return true;
		}
		return false;
	}
	function check_impressions(){
		var ic = 1, date = new Date();
		if(ic = get_cookie('popup_domination_icount')){
			ic = parseInt(ic);
			ic++;
			if(ic == popup_domination.impression_count){
				date.setTime(date.getTime());
				set_cookie('popup_domination_icount',popup_domination.impression_count,date);
				return false;
			}
		} else {
			ic = 1;
		}
		date.setTime(date.getTime() + (7200*1000));
		set_cookie('popup_domination_icount',ic,date);
		return true;
	};
	
	function get_cookie(cname){
		var cookie = window.document.cookie;
		if(cookie.length > 0){
			var c_start = cookie.indexOf(cname+'=');
			if(c_start !== -1){
				c_start = c_start + cname.length+1;
				var c_end = cookie.indexOf(';',c_start);
				if(c_end === -1)
					c_end = cookie.length;
				return unescape(cookie.substring(c_start,c_end));
			}
		}
		return false;
	};
})(jQuery);