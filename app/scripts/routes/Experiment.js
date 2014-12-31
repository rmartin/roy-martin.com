define([
    'jquery',
    'backbone',
    'views/Experiment'
], function($, Backbone, ExperimentView) {
    'use strict';

    var HomeRouter = Backbone.Router.extend({
        initialize: function() {

        },

        routes: {
            'experiments': 'experiment'
        },

        experiment: function() {
            var experimentView = new ExperimentView();
        }
    });

    return HomeRouter;
});
