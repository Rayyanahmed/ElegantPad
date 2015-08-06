ElegantPad.Views.NotebookForm = Backbone.View.extend({
	template: JST['notebooks/form'],

	initialize: function(options) {
		this.render();
	},

	events: {
		"click button.cancel": "cancel",
		"click button.confirm": "confirm"
	},

	confirm: function(event) {
		
		event.preventDefault();
		var $params = this.$('.notebook_title')
		var attr = $params.serializeJSON();
		this.model.save(attr, {
			success: function(model, response) {
				this.collection.add(model);
				Backbone.history.navigate("#/notebooks", { trigger: true })
			}.bind(this)
		});
		this.remove();
	},

	cancel: function() {
		this.remove();
	},

	center: function() {
    var top, left;
    top = Math.max($(window).height() - 306) / 2;
    left = Math.max($(window).width() - 650) / 2;
    return { top: top, left: left };
    },

	render: function() {
		var content = this.template({
			dim: this.center(),
			model: this.model
		});
		this.$el.html(content);
		$("body").append(this.$el);
		return this;
	}
})