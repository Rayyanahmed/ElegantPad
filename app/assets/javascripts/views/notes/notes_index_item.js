
ElegantPad.Views.NotesIndexItem = Backbone.View.extend({
	template: JST["notes/index_item"],

	events: {
		"click .notebook_trash_hover_img": "deleteNote"
	},

	deleteNote: function(event) {
		event.preventDefault();
		this.model.destroy();
	},

	render: function() {
		var content = this.template({
			note: this.model
		});
		this.$el.html(content);
		return this;
	}
});