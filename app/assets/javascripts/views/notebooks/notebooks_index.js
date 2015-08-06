ElegantPad.Views.NotebooksIndex = Backbone.View.extend({
	template: JST['notebooks/index'],
	initialize: function(options) {
		this.listenTo(this.collection, "sync add remove", this.render);
	},

	events: {
		"click img.add_notebook_img": "renderModal"
	},

	renderModal: function(event) {
		var notebook = new ElegantPad.Models.Notebook();
		new ElegantPad.Views.NotebookForm({
			model: notebook,
			collection: this.collection
		})
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.collection.each(function(notebook) {
			var view = new ElegantPad.Views.NotebooksIndexItem({
				model: notebook 
			});
			this.$(".notebook_items").append(view.render().$el);
		}, this);
		return this;
	}
})