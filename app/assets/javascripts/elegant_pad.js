window.ElegantPad = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		var $rootEl = $("#content");
		var $indexItem = $("#indexItem");
		var $show = $("#show")
		var sidebar = new ElegantPad.Views.Sidebar();
		sidebar.render();
		new ElegantPad.Routers.Router({
			$rootEl: $rootEl,
			$indexItem: $indexItem,
			$show: $show
		})
		Backbone.history.start();
	}
};

$(document).ready(function() {
	ElegantPad.initialize();
})