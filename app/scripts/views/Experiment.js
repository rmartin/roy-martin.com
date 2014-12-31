define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function($, _, Backbone, JST) {
    'use strict';

    var ExperimentView = Backbone.View.extend({
        template: JST['app/scripts/templates/Experiment.hbs'],
        el: '.main-content',
        events: {},
        initialize: function() {
            this.render();
        },
        render: function() {
            $('body').addClass('experimentView');
            this.$el.html(this.template());
            return this;
        }
    });

    return ExperimentView;
});
