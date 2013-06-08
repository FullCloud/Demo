define(["jasmine", "UserPrefs-view", "UserPrefs-model"], function(jasmine, UserPrefs, UPmodel){

  xdescribe('UserPrefs (view)', function() {
    var prefs;
    
    beforeEach(function(){
      prefs = new UserPrefs({
        model: new UPmodel()
      });
    });
    
    describe('#method', function(){
      
      it('should log and return the current time', function(){
        var result = prefs.method();
        expect(result).toEqual(jasmine.any(Date));
      });
      
    });
  });
  
});
