define(['app'], function(App) {
    App.module('ThoughtApp', function(ThoughtApp, App, Backbone, Marionette, $, _) {

        ThoughtApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'thoughts' : 'thought'
            }
        });

    });
    return App.ThoughtApp.Router;
});
