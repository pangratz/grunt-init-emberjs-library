module("{%= namespace %}");

test("it is defined and an Ember.Namespace", function() {
  ok({%= namespace %});
  ok(Ember.Namespace.detectInstance({%= namespace %}));
});