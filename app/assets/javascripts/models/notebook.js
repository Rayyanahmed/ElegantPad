ElegantPad.Models.Notebook = Backbone.Model.extend({
	urlRoot: '/api/notebooks',
	notes: function() {
		this._notes = this._notes || 
			new ElegantPad.Collections.Notes();
		return this._notes;
	},

	parse: function(response) {
		if (response.notes) {
			this.notes().set(response.notes, { parse: true })
			delete response.notes;
		}
		return response;
	}
})