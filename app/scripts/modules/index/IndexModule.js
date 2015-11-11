import IndexRouter from './IndexRouter.js';
import IndexController from './IndexController.js';


export default class IndexModule {
    constructor(){
        this.start();
    }

    start(){
        this.startMediator();
        this.startListeners();
    }

    stop(){
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
