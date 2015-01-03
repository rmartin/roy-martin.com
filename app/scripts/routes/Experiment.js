define(['app', 'controllers/index'], function(App, IndexController) {
    App.module('ExperimentApp', function(ExperimentApp, App, Backbone, Marionette, $, _) {

        ExperimentApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'experiments' : 'experiment'
            }
        });

    });
    return App.ExperimentApp.Router;
});
