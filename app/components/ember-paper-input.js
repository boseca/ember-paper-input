import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: 'float-label-group',
	selectedChange: function() {
		// when `selected` property is set
		let that = this;
		if (that.hasOwnProperty("selected")) {
			Ember.$("#" + that.elementId + " > label").addClass("placeholder");
			if (that.get("selected")) {
				Ember.$("#" + that.elementId + " > label").removeClass("placeholder-show").addClass("placeholder-hidden");
			} else {
				Ember.$("#" + that.elementId + " > label").removeClass("placeholder-hidden").addClass("placeholder-show");
			}
		}
	}.observes("selected"),
	afterRenderEvent: function() {
		this.selectedChange();
	}
});
