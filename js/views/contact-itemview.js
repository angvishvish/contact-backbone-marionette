ContactsApp.ItemView = Backbone.Marionette.ItemView.extend({
  // tagName: 'ul',
  className: 'col-md-3 col-sm-4 col-xs-6',
  template: _.template( $("#contact-template").html(), {} ),
  initialize: function() {
    // this.render();
  },
  events: {
    'click #remove-contact': 'removeContact'
  },
  render: function () {
    // if (this.model.has('email'))
    return $(this.el).append(this.template(this.model.toJSON()));
  },
  removeContact: function () {
    // event.preventDefault();
    
    var model_id = this.model.attributes;
    this.model.destroy({
      url: 'https://openws.herokuapp.com/contacts/' + model_id._id + '?apiKey=' + Contacts.ApiKey,
      wait: true,
      success: function(model, response){
        console.log(model, response);
      },
      error: function(model,response) {
        console.log("error");
      }
    });
  }
});