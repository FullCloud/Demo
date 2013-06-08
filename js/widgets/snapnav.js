define(["jquery", "domReady"], function($, domReady){
	
	return function(navBarSelector, options) {
		
		domReady(function(){
			function processScroll() {
		      var i, scrollTop = $win.scrollTop()
		      if (scrollTop >= navTop && !isFixed) {
		        isFixed = true;
		        $nav.addClass('navbar-fixed-top');
		        $nav.next('.container').css('padding-top', headerHeight - $nav.outerHeight());
		      } else if (scrollTop <= navTop && isFixed) {
		        isFixed = false;
		        $nav.removeClass('navbar-fixed-top');
		        $nav.next('.container').css('padding-top', '');
		      }
		      $('body').addClass("refresh").removeClass("refresh");
		    }
				    
		    var $win = $(window),
		    	$pageHeader = $(options.header),
		    	headerHeight = $pageHeader.outerHeight(),
				$nav = $(navBarSelector),
				navTop = $(navBarSelector).length && $(navBarSelector).offset().top,
				isFixed = false;
				    
		    $win.on('scroll', processScroll);
		});
		
	}
	
});
