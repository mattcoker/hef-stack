import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  displayName: Ember.computed('name', function() {
    const { name } = this.getProperties('name');
    return `Captain ${name}`;
  })
});
