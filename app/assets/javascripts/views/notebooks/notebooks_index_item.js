ElegantPad.Views.NotebooksIndexItem = Backbone.View.extend({
	template: JST['notebooks/index_item'],

	events: {
		"click .notebook_trash_hover_img": "deleteNotebook"
	},

	deleteNotebook: function(event) {
		event.preventDefault();
		this.model.destroy();
	},

	render: function() {
		var content = this.template({ notebook: this.model });
		this.$el.html(content);
		return this;
	}
})