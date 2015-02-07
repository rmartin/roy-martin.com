define(['marionette'], function(Marionette) {
    var App = new Marionette.Application();
    App.addRegions({
        main: '#main-content'
    });
    App.on('start', function() {
        if (Backbone.history) {
            Backbone.history.start();



        }
    });
    App.startSubApp = function(appName, args) {
        var currentApp = App.module(appName);
        if (App.currentApp === currentApp) {
            return;
        }
        if (App.currentApp) {
            App.currentApp.stop();
        }
        App.currentApp = currentApp;
        currentApp.start(args);

    };
    return App;
});
