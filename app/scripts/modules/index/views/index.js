define(['app', 'modules/index/views/visualizer', 'TweenLite', 'TimelineLite', 'CSSPlugin', 'EasePack', 'templates'], function(App, Visualizer, TweenLite, TimelineLite, CSSPlugin, EasePack, JST) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/modules/index/templates/index.hbs'],
            className: 'view-content',
            initialize: function() {
                this.visualizer = new Visualizer();
                this.listenTo(window, 'mouseMove', this.getIntersections);
                this.listenTo(window, 'touchStart', this.getIntersections);
                this.listenTo(window, 'resize', this.updateWindowSize);
            },
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('<a href="http://thoughts.roy-martin.com">Thoughts</a> and <a href="#experiments">Experiments</a><br />by <a href="#about">Roy Martin</a>');
                $('#header-sub-title').html('');
                $('#header-attribution').html('');
                $('body').attr('class', '').addClass('indexView');
            },
            getIntersections: function() {
                this.visualizer.getIntersections();
            },
            updateWindowSize: function(){
                this.visualizer.updateWindowSize();
            },
            renderScene: function() {
                this.visualizer.renderScene();
            },
            onRender: function() {
                ga('send', 'pageview');
                this.renderScene();
            }
        });
    });
    return App.IndexApp.View;
});
