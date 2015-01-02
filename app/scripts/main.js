/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette.min',
        handlebars: '../bower_components/handlebars/handlebars.min',
        foundation: '../bower_components/foundation/js/foundation.min',
        app: 'app'
    },
    shim: {
        jquery: {
            deps: [],
            exports: '$'
        },
        foundation: {
            deps: ['jquery']
        },
        underscore: {
            deps: [],
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'app',
    'foundation',
    'controllers/index',
    'routes/index',
], function(App, foundation, IndexController, IndexRoutes) {
    //start foundation
    $(document).foundation();

    //load the application
    App.start();
    App.startSubApp('IndexApp');
    // App.module("IndexApp").start();



});
