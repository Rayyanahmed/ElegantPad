ElegantPad.Views.NotesIndex = Backbone.View.extend({
	template: JST["notes/index"],

	initialize: function(options) {
		this.listenTo(this.collection, "sync add remove", this.render);
	},

	render: function() {
		this.$el.html(this.template());
		this.collection.each(function(note) {
			var view = new ElegantPad.Views.NotesIndexItem({
				model: note 
			});
			this.$(".notes_list").append(view.render().$el);
		}, this);
		return this;
	}
})