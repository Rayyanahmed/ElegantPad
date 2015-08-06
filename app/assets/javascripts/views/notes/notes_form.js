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
		var params = {};
		params.title = $(".note_title").val();
		if (!this.model.get('id')) {
			params.notebook_id = $("#notebook_id").val();
		}
		params.content = $(".note_content").val();

		this.model.save(params, {
			success: function(model, response) {
				Backbone.history.navigate("#", { trigger: true })
			}.bind(this)
		})
		
	}
})