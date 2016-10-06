ContactsApp.CollectionView = Backbone.Marionette.CollectionView.extend({
  //el: '#app-contact-list',
  tagName: 'div',
  className: 'row',
  template: _.template( $("#contact-collection").html(), {} ),
  // className: 'row col-md-8',
  itemView: ContactsApp.ItemView,
  intialize: function () {
    // this.render();
  },
  render: function () {
    var that = this;
    this.collection.fetch()
    .done(function(data) {
      that.getItems();
    });
  },
  getItems: function () {
    var that = this;
    this.collection.sort();
    this.collection.each(function(el, index) {
      var contact = new ContactsApp.ItemView({model: el});
      that.$el.append(contact);
    });
  }
});