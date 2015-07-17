ElegantPad.Views.NotebooksIndexItem = Backbone.View.extend({
	template: JST['notebooks/index_item'],

	render: function() {
		var content = this.template({ notebook: this.model });
		this.$el.html(content);
		return this;
	}
})