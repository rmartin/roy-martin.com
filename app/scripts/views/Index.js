/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/Index.hbs'],
        el: '.main-content',
        events: {},
        initialize: function () {
            this.render();
        },
        render: function () {
            $('body').addClass('indexView');
            $('body').prepend('<div class="headshot"></div>');
            this.$el.html(this.template());
            return this;
        }
    });

    return HomeView;
});
