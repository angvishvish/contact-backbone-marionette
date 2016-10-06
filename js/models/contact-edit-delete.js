Contacts.ModelEditDelete = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    mobile: '',
    address: '',
    pin: '',
    destroy: false
  },
  identifier: this.id, 
  initialize: function () {
    console.log(this.id)
    // this.id = this.identifier;
  },
  url: function () {
    return 'https://openws.herokuapp.com/contacts/' + this.toJSON().id + '?apiKey=' + Contacts.ApiKey;
  }
});