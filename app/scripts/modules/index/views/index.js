define(['app', 'modules/index/views/visualizer', 'templates'], function(App, Visualizer, JST) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {


        IndexApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/modules/index/templates/index.hbs'],
            className: 'view-content',
            initialize: function(){
                // this.visualizer = new Visualizer();
                this.listenTo(window, 'mouseMove', this.getIntersections);
                this.listenTo(window, 'touchStart', this.getIntersections);
                this.listenTo(window, 'resize', this.getIntersections);
            },
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('<a href="http://thoughts.roy-martin.com">Thoughts</a> and <a href="#experiments">Experiments</a><br />by <a href="#about">Roy Martin</a>');
                $('#header-sub-title').html('');
                $('#header-attribution').html('');
                $('body').attr('class', '').addClass('indexView');
            }
            getIntersections: function(){
                Visualizer.getIntersections();
            },
            renderBackgroundImage: function(){
                Visualizer.renderBackgroundImage();
            },
            onRender: function() {
                ga('send', 'pageview');
                this.renderBackgroundImage();
            }
        });
    });
    return App.IndexApp.View;
});
