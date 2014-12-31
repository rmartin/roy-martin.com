define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function($, _, Backbone, JST) {
    'use strict';

    var ExperimentView = Backbone.View.extend({
        template: JST['app/scripts/templates/experiment.hbs'],
        el: '.main-content',
        events: {},
        initialize: function() {
            this.collection.fetch();
            this.listenTo(this.collection, 'sync', this.render);
        },
        render: function() {
            //add title and class
            $('#header-title').html('Experiments');
            $('#header-sub-title').html('Experiments and code scribbles in web and mobile development.');
            $('#header-attribution').html('<a href="https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg" target="_blank" rel="nofollow">Cirrus Clounds</a> by <a href="//commons.wikimedia.org/wiki/User:Nissim_14" title="User:Nissim 14" target="_blank" rel="nofollow">Nissim Angdembay</a>')
            $('body').attr('class', '').addClass('experimentView');


            console.log(this.collection.toJSON())
            this.$el.html(this.template(this.collection.toJSON()));
            return this;
        }
    });

    return ExperimentView;
});
