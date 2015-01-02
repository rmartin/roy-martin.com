define(['app', 'controllers/index'], function(App, IndexController) {
    // App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        var router = Marionette.AppRouter.extend({
            appRoutes: {
                '' : 'index'
            }
        });

        var controller = Marionette.Controller.extend({
            index: function() {
                console.log('index controller');
            }
        });

        // IndexApp.addInitializer(function() {


            var indexController = new controller();
            // indexController.index();
            var router = new router({
                controller: indexController
            });
            console.log(router);

        // });
    // });
});
