ElegantPad.Views.NotebookShow = Backbone.View.extend({
	template: JST['notebooks/show'],
	initialize: function(options) {
		this.listenTo(this.model, "sync add remove", this.render)
		this.listenTo(this.collection, "sync", this.render)
	},

	render: function() {
		this.model.notes().fetch();
		this.collection = this.model.notes();
		var content = this.template({notebook: this.model});
		this.$el.html(content);
		var view = new ElegantPad.Views.NotesIndex({
			collection: this.collection 
		});
		this.$(".notebook_list_item").append(view.render().$el);
		return this;
	}
})