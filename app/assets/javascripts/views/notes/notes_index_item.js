
ElegantPad.Views.NotesIndexItem = Backbone.View.extend({
	template: JST["notes/index_item"],


	events: {
		"click img.notebook_trash_hover_img": "renderModal"
	},

	renderModal: function(event) {
		new ElegantPad.Views.NoteDeleteModal({
			model: this.model
		})
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