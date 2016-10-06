ContactsApp.Controller = Backbone.Marionette.Controller.extend({
  initilize: function () {

  },
  homeRouter: function() {
    var contactCollectionView = new ContactsApp.CollectionView({
      collection: new ContactsApp.Collection
    });
    
    ContactsApp.appRegion.show(contactCollectionView);
  },
  addRouter: function () {
    var contactFormView = new ContactsApp.ContactFormView({
      model: new Contacts.Model(),
      form: 'add'
    });
    
    ContactsApp.appRegion.show(contactFormView);
  },
  editRouter:function (id) {
    var editFormModel = new Contacts.ModelEditDelete({id: id});
    editFormModel.fetch()
    .done(function (data) {
      var contactFormView = new ContactsApp.ContactFormView({
        model: editFormModel,
        form: 'edit',
        selfModel: editFormModel
      });
      ContactsApp.appRegion.show(contactFormView);      
    })
  }
});


