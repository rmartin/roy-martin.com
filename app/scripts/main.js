import {app} from './app.js';
import Backbone from 'backbone';
import {IndexModule} from './modules/index/module.js';

app.module('index', IndexModule);
app.start();
Backbone.history.start();


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


// require.config({
//     paths: {
//         jquery: '../bower_components/jquery/dist/jquery',
//         underscore: '../bower_components/lodash/dist/lodash',
//         backbone: '../bower_components/backbone/backbone',
//         marionette: '../bower_components/marionette/lib/backbone.marionette.min',
//         handlebars: '../bower_components/handlebars/handlebars.min',
//         foundation: '../bower_components/foundation/js/foundation.min',
//         THREE: '../bower_components/threejs/build/three.min',
//         THREECanvasRenderer: './vendor/threejs/CanvasRenderer',
//         THREEProjector: './vendor/threejs/Projector',
//         TweenMax: "../bower_components/gsap/src/uncompressed/TweenMax",
//         TweenLite: "../bower_components/gsap/src/uncompressed/TweenLite",
//         CSSPlugin: "../bower_components/gsap/src/uncompressed/plugins/CSSPlugin",
//         TimelineLite: "../bower_components/gsap/src/uncompressed/TimelineLite",
//         TimelineMax: "../bower_components/gsap/src/uncompressed/TimelineMax",
//         EasePack: "../bower_components/gsap/src/uncompressed/easing/EasePack",
//         app: 'app'
//     },
//     shim: {
//         jquery: {
//             deps: [],
//             exports: '$'
//         },
//         foundation: {
//             deps: ['jquery']
//         },
//         underscore: {
//             deps: [],
//             exports: '_'
//         },
//         backbone: {
//             deps: ['jquery', 'underscore'],
//             exports: 'Backbone'
//         },
//         marionette: {
//             deps: ['jquery', 'underscore', 'backbone'],
//             exports: 'Marionette'
//         },
//         handlebars: {
//             exports: 'Handlebars'
//         },
//         THREE: {
//             exports: 'THREE'
//         },
//         THREECanvasRenderer: {
//             deps: ['THREE', 'THREEProjector'],
//             exports: 'THREE.CanvasRenderer'
//         },
//         THREEProjector: {
//             deps: ['THREE'],
//             exports: 'THREE.Projector'
//         }
//     }
// });

// require([
//     'app',
//     'foundation',
//     'modules/index/controllers/index',
//     'modules/index/routes/index',
//     'modules/experiments/controllers/experiment',
//     'modules/experiments/routes/experiment',
//     'modules/thoughts/controllers/thought',
//     'modules/thoughts/routes/thought',
//     'modules/about/controllers/about',
//     'modules/about/routes/about'
// ], function(App, foundation, IndexController, IndexRoutes, ExperimentController, ExperimentRoutes, ThoughtController, ThoughtRoutes, AboutController, AboutRouter) {
//     'use strict';
    //start foundation
    // $(document).foundation();
    //
    // var indexController = new IndexController();
    // var indexRoutes = new IndexRoutes({
    //     controller: indexController
    // });

    // do no evil
    // var thoughtController = new ThoughtController();
    // var thoughtRoutes = new ThoughtRoutes({
    //     controller: thoughtController
    // });
    //
    // var experimentController = new ExperimentController();
    // var experimentRoutes = new ExperimentRoutes({
    //     controller: experimentController
    // });
    //
    // var aboutController = new AboutController();
    // var aboutRouter = new AboutRouter({
    //     controller: aboutController
    // });
    //
    // //trigger a resize event for all views
    // _.extend(window, Backbone.Events);
    // window.onresize = function() {
    //     window.trigger('resize')
    // };
    // window.orientationchange = function() {
    //     window.trigger('resize');
    // }
    //
    // $(document).bind('mousemove', function(e) {
    //     window.mouseX = e.pageX;
    //     window.mouseY = e.pageY;
    //     window.trigger('mouseMove');
    // });
    //
    // $(document).bind('touchstart', function(e) {
    //     window.mouseX = e.originalEvent.changedTouches[0].pageX;
    //     window.mouseY = e.originalEvent.changedTouches[0].pageY;
    //     window.trigger('touchStart');
    // });

    //load the application
    // App.start();
// });
