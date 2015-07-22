ElegantPad.Views.MainNotesForm = Backbone.View.extend({
	template: JST['notes/main_form'],

	events: {
		"submit form": "submit",
	},

	initialize: function(options) {
		this.notebooks = options.notebooks
		this.listenTo(this.notebooks, "sync", this.render)
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
		var content = this.template({
			note: this.model,
			notebooks: this.notebooks
		})
		this.$el.html(content);
		return this;
	},

	submit: function(event) {
		var view = this;
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON();
		this.model.save(params, {
			success: function(model, response) {
				this.collection.add(model);
				
			}.bind(this)
		})
	}
})