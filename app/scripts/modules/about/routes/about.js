define(['app'], function(App) {
    App.module('AboutApp', function(AboutApp, App, Backbone, Marionette, $, _) {

        AboutApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'about' : 'about'
            }
        });

    });
    return App.AboutApp.Router;
});
