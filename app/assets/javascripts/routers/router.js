ElegantPad.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.$indexItem = options.$indexItem;
		this.$show = options.$show;
		this.notebooks = new ElegantPad.Collections.Notebooks();
		this.notes = new ElegantPad.Collections.Notes();
	},

	routes: {
		"": "notesIndex",
		"notebooks": "notebooksIndex",
		"notebooks/:id": "notebookShow",
		"notes/:id": "noteShow"
	},

	notesIndex: function() {
		this.notes.fetch();
		this.notebooks.fetch();
		var note = new ElegantPad.Models.Note();
		var view = new ElegantPad.Views.NotesIndex({ 
			collection: this.notes,
			model: note,
			notebooks: this.notebooks 
		});
		this._swapIndexView(view)
	},

	notebooksIndex: function() {
		this.notebooks.fetch();
		var view = new ElegantPad.Views.NotebooksIndex({
			collection: this.notebooks 
		});
		this._swapIndexView(view)
	},

	notebookShow: function(id) {
		this.notebooks.getOrFetch(id)
	},

	noteShow: function(id) {
		this.notes.fetch();
		this.notebooks.fetch();
		var note = this.notes.getOrFetch(id)
		var view = new ElegantPad.Views.NotesForm({
			collection: this.notes,
			model: note,
			notebooks: this.notebooks 
		});
		this._swapMainView(view)
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	},

	_swapIndexView: function(view) {
		this._currentIndexView && this._currentIndexView.remove();
		this._currentIndexView = view;
		this.$indexItem.html(view.render().$el);
	},

	_swapMainView: function(view) {
		this._currentMainView && this._currentMainView.remove();
		this._currentMainView = view;
		this.$show.html(view.render().$el)
	}

})