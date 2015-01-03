define(['app'], function(App) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                '' : 'index'
            }
        });

    });
    return App.IndexApp.Router;
});
