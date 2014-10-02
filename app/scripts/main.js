/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        handlebars: '../bower_components/handlebars/handlebars.amd.min',
        foundation: '../bower_components/foundation/js/foundation.min',
        threejs: '../bower_components/threejs/build/three.min'
    },
    shim: {
        jquery: {
            deps: [],
            exports: '$'
        },
        foundation: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['jquery', 'underscore']
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'backbone',
    'foundation',
    'threejs'
], function (Backbone) {
    Backbone.history.start();
    $(document).foundation();
});
