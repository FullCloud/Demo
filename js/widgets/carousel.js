define(["backbone", "underscore", "bootstrap", "md5", "handlebars", "text!../../templates/users.htm"],
function(Backbone, _, bootstrap, md5, Handlebars, tmplt) {

    var CAROUSEL = {
        
        template: Handlebars.compile(tmplt),
        
        gravatar: function(emailAddress) {
            var anonImages = ['hipster.png', 'ladycomputer.png', 'anonymous.png'];
            var anonImage = anonImages[Math.floor((Math.random()*anonImages.length))];
            var options = {
                // integer size: between 1 and 512, default 80 (in pixels)
                size: 254,
                // url to define a default image (can also be one of: identicon, monsterid, wavatar)
                image: location.href.replace('index.html', '')+'img/'+anonImage
            };
            
            var src = '//www.gravatar.com/avatar/' + md5(emailAddress) + '.jpg?' + (options.size ? 's=' + options.size + '&' : '') + (options.rating ? 'r=' + options.rating + '&' : '') + (options.image ? 'd=' + encodeURIComponent(options.image) : '');
            
            return src;
        },
        
        render: function() {
            var users = this.collection.toJSON();
            
            _.each(users, function(user){
                user.avatar = this.gravatar(user.email);
            }, this);
            
            this.$el.html(this.template(users));
            
            bootstrap.carousel(this.$el.find('.carousel'), {
                interval: 3000
            });
            
            return this;
        }
    }

    return Backbone.View.extend(CAROUSEL);

});
