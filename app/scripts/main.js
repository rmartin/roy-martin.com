/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        handlebars: '../bower_components/handlebars/handlebars.min',
        foundation: '../bower_components/foundation/js/foundation.min'
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
            exports: 'backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'jquery',
    'backbone',
    'foundation',
    'routes/Index',
    'routes/About',
    'routes/Experiment'
], function ($, Backbone, foundation, IndexRouter, AboutRouter, ExperimentRouter) {
    var indexRouter = new IndexRouter();
    var aboutRouter = new AboutRouter();
    var experimentRouter = new ExperimentRouter();

    //start backbone and foundation
    Backbone.history.start();
    $(document).foundation();
});
