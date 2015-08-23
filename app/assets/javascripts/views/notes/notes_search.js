ElegantPad.Views.NotesSearch = Backbone.View.extend({
  template: JST['notes/search'],
  events: {
    "keyup #search-query": "search"
  },
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  search: function(event) {
    event.preventDefault();
    var searchString = $("#search-query").val();
    $.ajax({
      url: "/api/notes/search",
      dataType: "json",
      method: "GET",
      data: { query: searchString },
      success: function(response) {
        this.renderSearchResults(response);
      }.bind(this)
    });
  },
  renderSearchResults: function(response) {
    var notes = new ElegantPad.Collections.Notes();
    notes.set(response);
    var notesView = new ElegantPad.Views.NotesIndex({
      collection: notes
    });

    this.$('.search-results').html(notesView.render().$el);
  }
});