ContactsApp.Router = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    ''      : 'homeRouter',
    'add'   : 'addRouter',
    'edit/:id'  : 'editRouter'
  }
});