define(['app', 'templates'], function(App, JST) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/modules/index/templates/index.hbs'],
            className: 'view-content',
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('<a href="http://thoughts.roy-martin.com">Thoughts</a> and <a href="#experiments">Experiments</a><br />by <a href="#about">Roy Martin</a>');
                $('#header-sub-title').html('');
                $('#header-attribution').html('');
                $('body').attr('class', '').addClass('indexView');
            },
            onRender: function() {
                ga('send', 'pageview');
            }

        });

    });
    return App.IndexApp.View;
});
