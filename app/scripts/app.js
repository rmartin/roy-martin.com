// Vendors
export var $ = require('jquery');
export var Backbone = require('backbone');
Backbone.$ = $;
export var Marionette = require('backbone.marionette');

// app bootstrap
export var app = new Marionette.Application();

app.addRegions({
    main: '#main-content'
});
app.on('start', function() {
    if (Backbone.history) {
        Backbone.history.start();
    }
});
app.startSubApp = function(appName, args) {
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
