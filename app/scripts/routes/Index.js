define(['app', 'controllers/index'], function(App, IndexController) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                '' : 'index'
            }
        });

    });
    return App.IndexApp.Router;
});
