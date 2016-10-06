Contacts.Model = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    mobile: '',
    address: '',
    pin: '',
    destroy: false
  },
  url: 'https://openws.herokuapp.com/contacts?apiKey=' + Contacts.ApiKey
});