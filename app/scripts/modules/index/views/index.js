// import * as APP2 from 'app';
// define(['app', 'modules/index/views/visualizer', 'TweenLite', 'TimelineLite', 'CSSPlugin', 'EasePack', 'templates'], function(App, Visualizer, TweenLite, TimelineLite, CSSPlugin, EasePack, JST) {
//     App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RadioShim from '../../../vendor/radio.shim.js';
import Radio from 'backbone.radio';

import APICollection from '../collections/api';
import template from '../templates/index.hbs';
import TimelineLite from 'gsap';


export var IndexView = Marionette.ItemView.extend({
    template: template,
    className: 'view-content',
    initialize: function(config) {
        this.collection = config.collection;
        this.visualizer = config.visualizer;

        this.visualizer.setCollection({collection: this.collection})
        this.visualizerChannel = Backbone.Radio.channel('visualizer');

        this.visualizerChannel.on('visualizer:mouseMove', function() {
            this.getIntersections();
        }.bind(this));
        this.visualizerChannel.on('visualizer:touchStart', function() {
            this.getIntersections();
        }.bind(this));
        this.visualizerChannel.on('visualizer:resize', function() {
            this.updateWindowSize();
        }.bind(this));
    },
    onBeforeRender: function() {
        //add title and class
        $('#header-title').html('<a href="http://thoughts.roy-martin.com" class="thoughts">Thoughts</a> and <a href="#experiments" class="experiments">Experiments</a>');
        $('#header-sub-title').html('by <a href="#about" class="roy-martin">Roy Martin</a>');
        $('#header-attribution').html('');
        $('body').attr('class', '').addClass('indexView');
    },
    getIntersections: function() {
        this.visualizer.getIntersections();
    },
    updateWindowSize: function() {
        this.visualizer.updateWindowSize();
    },
    renderScene: function() {
        this.visualizer.renderScene();
    },
    animateHero: function(){
        // var t1 = new TimelineLite();

        TimelineLite.from('#header-title', .5, {y: (window.innerHeight * -1) + 'px'});
        TimelineLite.from('#header-sub-title', .5, {y: window.innerHeight + 'px'}, 0);
    },
    onRender: function() {
        ga('send', 'pageview');

        // Load the API data before visualizing the results
        $.when( this.collection.fetch() ).then(function() {
            this.renderScene();
            this.animateHero();
        }.bind(this));
    }
});

//     return App.IndexApp.View;
// });
