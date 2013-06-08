define(["jasmine", "UserPrefs-model"], function(jasmine, UserPrefs){
  
  describe('just some fake tests one fails', function(){
  
    it('should pass', function(){
      expect(true).toEqual(true);
    });
    
    it('should fail', function(){
      expect(false).toEqual(true);
    });
  
  });
  
  xdescribe('UserPrefs (model)', function() {
    var prefs;
    
    beforeEach(function(){
      prefs = new UserPrefs();
    });
    
    describe('#save', function(){
      
      it('should save to local storage if it does not have an ID', function(){
        var options = {
          success: jasmine.createSpy('Success spy'),
          error: jasmine.createSpy('Error spy')
        }
        prefs.save(options);
        expect(options.success).toHaveBeenCalled();
      });
      
      it('should update the model in local storage if it already has an ID', function(){
        var options = {
          success: jasmine.createSpy('Success spy'),
          error: jasmine.createSpy('Error spy')
        }
        prefs.set('id', 1);
        prefs.save(options);
        expect(options.success).toHaveBeenCalled();
      });
      
    });
    
    describe('#fetch', function(){
      
      it('should read from local storage', function(){
        var options = {
          success: jasmine.createSpy('Success spy'),
          error: jasmine.createSpy('Error spy')
        }
        prefs.fetch(options);
        expect(options.success).toHaveBeenCalled();
      });
      
    });
    
    describe('#destroy', function(){
      
      it('should remove the model from local storage if it has an ID', function(){
        var options = {
          success: jasmine.createSpy('Success spy'),
          error: jasmine.createSpy('Error spy')
        }
        prefs.set('id', 1);
        prefs.destroy(options);
        expect(options.success).toHaveBeenCalled();
      });
      
    });
    
  });
  
});
