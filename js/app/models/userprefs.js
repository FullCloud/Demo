define(["jquery", "underscore", "backbone"], function($, _, Backbone) {

  var UserPrefs = {
    
    storageKey: 'UserPrefs',

    sync : function(method, model, options) {
      options || (options = {});
      if (!options.storageKey) {
        options.storageKey = model.storageKey || model.collection.storageKey;
      }
      
      var storedObj, resp;

      switch (method) {
        case "read":
          storedObj = JSON.parse(localStorage.getItem(options.storageKey));
          if (storedObj && _.has(storedObj, model.id)) {
            resp = storedObj[model.id];
          } else {
            resp = _.map(storedObj, function(item, id){ return item; });
          }
          console.log('read: %o', resp);
          break;
        case "create":
          console.log(method, model, options);
          // resp = store.create(model);
          break;
        case "update":
          console.log(method, model, options);
          // resp = store.update(model);
          break;
        case "delete":
          console.log(method, model, options);
          // resp = store.destroy(model);
          break;
      }

      // if (resp) {
        // options.success(resp);
      // } else {
        // options.error("Record not found");
      // }
    }
  }

  return Backbone.Model.extend(UserPrefs);

});
