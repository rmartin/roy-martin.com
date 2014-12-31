define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.hbs'],
        el: '.main-content',
        events: {},
        initialize: function () {
            this.render();
        },
        render: function () {
            //add title and class
            $('#header-title').html('');
            $('#header-sub-title').html('');
            $('#header-attribution').html('');
            $('body').attr('class', '').addClass('indexView');

            this.$el.html(this.template());
            return this;
        }
    });

    return HomeView;
});
