import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RadioShim from '../../vendor/radio.shim.js';
import Radio from 'backbone.radio';

import {IndexRouter} from './router';
import {IndexController} from './controller';

export class IndexModule {


    export start(){
        this.startMediator();
        this.startListeners();
    }

    export stop(){
        this.stopMediator();
    }

    startMediator(){
        var indexController = new IndexController();
        var indexRouter = new IndexRouter({
            controller: indexController

        });
    }

    startListeners(){
        //trigger a resize event for all views
        var visualizerChannel = Backbone.Radio.channel('visualizer');

        _.extend(window, Backbone.Events);
        window.onresize = function() {
            visualizerChannel.trigger('visualizer:resize');
        };
        window.orientationchange = function() {
            visualizerChannel.trigger('visualizer:resize');
        }

        $(document).bind('mousemove', function(e) {
            window.mouseX = e.pageX;
            window.mouseY = e.pageY;
            visualizerChannel.trigger('visualizer:mouseMove');
        });

        $(document).bind('touchstart', function(e) {
            window.mouseX = e.originalEvent.changedTouches[0].pageX;
            window.mouseY = e.originalEvent.changedTouches[0].pageY;
            visualizerChannel.trigger('visualizer:touchStart');
        });
    }

    stopMediator(){
        this.controller.stop();
    }
}
