ElegantPad.Views.NoteDeleteModal = Backbone.View.extend({
	template: JST['notes/modal'],

	initialize: function(options) {
		this.render();
	},
	
	events: {
		"click button.cancel": "cancel",
		"click button.confirm": "confirm"
	},

	confirm: function() {
		this.model.destroy();
		this.remove();
	},

	cancel: function() {
		this.remove();
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		$("body").append(this.$el);
		return this;
	}
})