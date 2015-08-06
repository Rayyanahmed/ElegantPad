ElegantPad.Collections.Notebooks = Backbone.Collection.extend({

	url: "api/notebooks",
	model: ElegantPad.Models.Notebook,

	getOrFetch: function(id) {
		var notebook = this.get(id);

		if (!notebook) {
			notebook = new ElegantPad.Models.Notebook({id: id});
			notebook.fetch({
				success: function() {
					this.add(notebook);
				}.bind(this)
			});
		} else {
			notebook.fetch();
		}
		return notebook;
	}
})