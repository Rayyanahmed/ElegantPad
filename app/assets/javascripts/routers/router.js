ElegantPad.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.$indexItem = options.$indexItem;
		this.$main = options.$main;
		this.notebooks = new ElegantPad.Collections.Notebooks();
		this.notes = new ElegantPad.Collections.Notes();
	},

	routes: {
		"": "notesIndex",
		"notebooks": "notebooksIndex",

	},

	notesIndex: function() {
		this.notes.fetch();
		var view = new ElegantPad.Views.NotesIndex({ 
			collection: this.notes 
		});
		this._swapIndexView(view)
	},


	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		thsi.$rootEl.html(view.render().$el);
	},

	_swapIndexView: function(view) {
		this._currentIndexView && this._currentIndexView.remove();
		this._currentIndexView = view;
		this.$indexItem.html(view.render().$el);
	},

	_swapMainView: function(view) {
		this._currentMainView && this._currentMainView.remove();
		this._currentMainView = view;
		this.$main.html(view.render().$el)
	}

})