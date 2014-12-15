/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/Home.hbs'],
        el: '.main-content',
        events: {},
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return HomeView;
});
