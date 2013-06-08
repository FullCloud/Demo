define(["backbone"], function(Backbone){
  
  var UserPrefs = {
    
    method: function() {
      return this.model.get('prop');
    }
    
  }
  
  return Backbone.View.extend(UserPrefs);
  
});
