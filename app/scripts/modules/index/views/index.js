// import * as APP2 from 'app';
// define(['app', 'modules/index/views/visualizer', 'TweenLite', 'TimelineLite', 'CSSPlugin', 'EasePack', 'templates'], function(App, Visualizer, TweenLite, TimelineLite, CSSPlugin, EasePack, JST) {
//     App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {
import $ from 'jquery';
import Marionette from 'backbone.marionette';
import JST from '../../../../../.tmp/scripts/templates';
import {APICollection} from '../collections/api';

debugger;

export var IndexView = Marionette.ItemView.extend({
    template: JST['app/scripts/modules/index/templates/index.hbs'],
    className: 'view-content',
    initialize: function(config) {
        this.collection = config.collection;
        // this.visualizer = new Visualizer();
        // this.visualizer.setCollection({collection: this.collection})
        // this.listenTo(window, 'mouseMove', this.getIntersections);
        // this.listenTo(window, 'touchStart', this.getIntersections);
        // this.listenTo(window, 'resize', this.updateWindowSize);
    },
    onBeforeRender: function() {
        //add title and class
        $('#header-title').html('<a href="http://thoughts.roy-martin.com" class="thoughts">Thoughts</a> and <a href="#experiments" class="experiments">Experiments</a>');
        $('#header-sub-title').html('by <a href="#about" class="roy-martin">Roy Martin</a>');
        $('#header-attribution').html('');
        $('body').attr('class', '').addClass('indexView');
    },
    getIntersections: function() {
        // this.visualizer.getIntersections();
    },
    updateWindowSize: function() {
        // this.visualizer.updateWindowSize();
    },
    renderScene: function() {
        // this.visualizer.renderScene();
    },
    animateHero: function(){
        var t1 = new TimelineLite();
        t1.from('#header-title', .5, {y: (window.innerHeight * -1) + 'px'})
        .from('#header-sub-title', .5, {y: window.innerHeight + 'px'}, 0);
    },
    onRender: function() {
        console.log('yo yo render')
        ga('send', 'pageview');

        // Load the API data before visualizing the results
        $.when( this.collection.fetch() ).then(function() {
            // this.renderScene();
            this.animateHero();
        }.bind(this));
    }
});

//     return App.IndexApp.View;
// });
