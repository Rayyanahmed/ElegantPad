ElegantPad.Collections.Notes = Backbone.Collection.extend({
	url: "api/notes",
	model: ElegantPad.Models.Note,

	getOrFetch: function(id) {
		var note = this.get(id);

		if (!note) {
			note = new ElegantPad.Models.Note({id: id});
			note.fetch({
				success: function() {
					this.add(note);
				}.bind(this)
			});
		} else {
			note.fetch();
		}
		return note;
	}
})