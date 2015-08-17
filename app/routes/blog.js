import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return {
      "name": "cat"
    }
  },
  actions: {

    nextPost: function () {
      this.controller.set('model', {
        "name": "dog"
      });
    }
  }
});
