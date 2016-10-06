var Contacts = {
  // Models: {},
  // Collections: {},
  // Views: {},
  // Templates: {},
  // Router: {},
  ApiKey: '71d2debc84c69eb52f49903b71629720'
}

var ContactsApp = new Backbone.Marionette.Application();

ContactsApp.addRegions({  
  appRegion   : '#app-contact-list',
  //formRegion  : '#app-formRegion',
  modalRegion : '#app-footer'
});

ContactsApp.on("start", function() {
  ContactsApp.router = new ContactsApp.Router({controller: new ContactsApp.Controller});
  Backbone.history.start();
});