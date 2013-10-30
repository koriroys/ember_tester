EmberTester.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  }
});
