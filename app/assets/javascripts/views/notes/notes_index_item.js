
ElegantPad.Views.NotesIndexItem = Backbone.View.extend({
	template: JST["notes/index_item"],

	render: function() {
		var content = this.template({
			note: this.model
		});
		this.$el.html(content);
		return this;
	}
});