// For more information see: http://emberjs.com/guides/routing/

EmberTester.Router.map(function() {
  this.resource("posts", function() {
    this.resource("post", { path: ":post_id" });
  });
});
