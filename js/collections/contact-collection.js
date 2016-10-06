ContactsApp.Collection = Backbone.Collection.extend({
  baseUrl: 'https://openws.herokuapp.com/contacts',
  initialize: function () {
    // this.render();
  },
  idAttribute: '',
  url: function () {
    if (!this.isEmpty()) {
      return this.baseUrl + '/' + this.model.id + '?apiKey=' + Contacts.ApiKey
    } else {
      return this.baseUrl + '?apiKey=' + Contacts.ApiKey;
    }
  },
  // model: Contacts.ModelEditDelete,
  comparator: function(model) {
    return model.get('name');
  }
});