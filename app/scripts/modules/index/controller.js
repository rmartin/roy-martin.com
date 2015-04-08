import Marionette from 'backbone.marionette';
import {app} from '../../app';
import {APICollection} from './collections/api';
import {IndexView} from './views/index';

// define(['app', 'modules/index/collections/api', 'modules/index/views/index'], function(App, APICollection, IndexView) {
//     App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {
//
export var IndexController = Marionette.Object.extend({
    onStart: function() {

    },
    index: function() {
        var apiCollection = new APICollection();
        var indexView = new IndexView({collection: apiCollection});
        app.main.show(indexView);
    }
});
//     });
//
//     return App.IndexApp.Controller;
// });
