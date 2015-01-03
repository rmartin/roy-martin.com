define(['app', 'views/index'], function(App, IndexView) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.Controller = Marionette.Controller.extend({
            index: function() {
                var indexView = new IndexView();
                App.main.show(indexView);
            }
        });
    });

    return App.IndexApp.Controller;
});
