define(["jquery", "domReady"], function($, domReady){
	
	return function(buttonSelector) {
		
		domReady(function(){
			$(buttonSelector).find('.option').click(function(e){
				e.preventDefault();
				$(this).find('i').toggleClass('icon-ok');
				console.log("clicked");
			});
		});
		
	}
	
});
