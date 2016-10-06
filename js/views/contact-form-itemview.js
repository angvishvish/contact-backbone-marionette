ContactsApp.ContactFormView = Backbone.Marionette.ItemView.extend({
  template: _.template( $("#contact-form-template").html(), {} ),
  ui: {
    contactName: '#contactName',
    contactEmail: '#contactEmail',
    contactMobile: '#contactMobile',
    contactAddress: '#contactAddress',
    contactPin: '#contactPin',
  },
  events: {
    'change #contactName': 'contactName',
    'change #contactEmail': 'contactEmail',
    'change #contactMobile': 'contactMobile',
    'change #contactAddress': 'contactAddress',
    'change #contactPin': 'contactPin',
    'click #submitContact': 'submitContact',
    'click #updateContact': 'updateContact'
  },
  contactName: function () {
    this.model.set({ 'name': $(this.ui.contactName).val() });
  },
  contactEmail: function () {
    this.model.set({ 'email': $(this.ui.contactEmail).val() });
  },
  contactMobile: function () {
    this.model.set({ 'mobile': $(this.ui.contactMobile).val() });
  },
  contactAddress: function () {
    this.model.set({ 'address': $(this.ui.contactAddress).val() });
  },
  contactPin: function () {
    this.model.set({ 'pin': $(this.ui.contactPin).val() });
  },
  intialize: function () {
    this.model.bind('change', this.render, this);
    this.render();
  },
  submitContact: function () {
    this.model.save().done(function (data) {
      ContactsApp.router.navigate('', true);
    });
  },
  updateContact: function () {
    this.model.save()
    .done(function (data) {
      ContactsApp.router.navigate('', true);
    });
  },
  render: function () {
    this.model.set("edit", !this.model.isNew());
    return $(this.el).append(this.template(this.model.toJSON()));
  }
});