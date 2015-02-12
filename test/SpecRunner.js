require.config({
    baseUrl: '../scripts',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette.min',
        handlebars: '../bower_components/handlebars/handlebars.min',
        foundation: '../bower_components/foundation/js/foundation.min',
        THREE: '../bower_components/threejs/build/three.min',
        THREECanvasRenderer: './vendor/threejs/CanvasRenderer',
        THREEProjector: './vendor/threejs/Projector',
        TweenMax: "../bower_components/gsap/src/uncompressed/TweenMax",
        TweenLite: "../bower_components/gsap/src/uncompressed/TweenLite",
        CSSPlugin: "../bower_components/gsap/src/uncompressed/plugins/CSSPlugin",
        TimelineLite: "../bower_components/gsap/src/uncompressed/TimelineLite",
        TimelineMax: "../bower_components/gsap/src/uncompressed/TimelineMax",
        EasePack: "../bower_components/gsap/src/uncompressed/easing/EasePack",
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
        },
        THREE: {
            exports: 'THREE'
        },
        THREECanvasRenderer: {
            deps: ['THREE', 'THREEProjector'],
            exports: 'THREE.CanvasRenderer'
        },
        THREEProjector: {
            deps: ['THREE'],
            exports: 'THREE.Projector'
        }
    }
});

/* require test suite */
require([
    'jquery',
    '/spec/testSuite.js'
],
function( $, testSuite ) {

    'use strict';

    /* on dom ready require all specs and run */
    $( function() {
        require(testSuite.specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }

        });
    });
});
