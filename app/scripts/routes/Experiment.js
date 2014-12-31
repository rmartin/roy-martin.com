define([
    'jquery',
    'backbone',
    'collections/codepen',
    'views/experiment'
], function($, Backbone, CodeCollection, ExperimentView) {
    'use strict';

    var HomeRouter = Backbone.Router.extend({
        initialize: function() {

        },

        routes: {
            'experiments': 'experiment'
        },

        experiment: function() {
            var codeCollection = new CodeCollection();
            var experimentView = new ExperimentView({collection: codeCollection});
        }
    });

    return HomeRouter;
});
