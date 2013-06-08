define(["jquery", "underscore", "domReady", "parse", "jquery-gravatar"], function($, _, domReady, Parse, Gravatar){
	
	return function(buttonSelector) {
		
		domReady(function(){
            var $button = $(buttonSelector);
            var $login = $button.closest('.container').find('.login');
			$button.click(function(e){
				e.preventDefault();
				$login.toggleClass('open');
			});
            
            $login.find('input[name=newuser]').change(function(e){
                $login.toggleClass('newuser', $(this).is(':checked'));
            }).trigger('change');
            
            $login.find('form').submit(function(e){
                e.preventDefault();
                var formValues = $(this).serializeArray();
                var username = _.where(formValues, {"name":"username"})[0]['value'],
                    password = _.where(formValues, {"name":"password"})[0]['value'],
                    email = _.where(formValues, {"name":"email"})[0]['value'];
                
                if ( $login.find('input[name=newuser]').is(':checked') ) {
                    // registering new
                    var user = new Parse.User();
                    user.set("username", username);
                    user.set("password", password);
                    user.set("email", email);
                    
                    user.signUp(null, {
                        success: function(user) {
                            signedin(true); 
                        },
                        error: function(user, error) {
                            // Show the error message somewhere and let the user try again.
                            alert("Error: " + error.code + " " + error.message);
                        }
                    });
                } else {
                    // just loggin in
                    Parse.User.logIn(username, password, {
                        success: function(user) {
                            signedin(true);
                        },
                        error: function(user, error) {
                            alert("Error: " + error.code + " " + error.message);
                        }
                    });
                }
            });
            
            $button.show();
            
            function signedin(yes) {
                var currentUser = Parse.User.current();
                var defaultImage = location.href.replace('index.html', 'img/hipster30.png');
                
                $button.html('<i class="icon-user"></i> ' + currentUser.get("username"));
                $login.addClass('loggedin');
                Gravatar(currentUser.get("email"), { size: '30', image:defaultImage })
                    .css('height', 30)
                    .insertBefore($button);
            }
		});
		
	}
	
});
