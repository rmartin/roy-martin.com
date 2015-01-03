define(['app', 'templates'], function(App, JST) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        IndexApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/templates/index.hbs'],
            onBeforeRender: function(){
                //add title and class
                $('#header-title').html('');
                $('#header-sub-title').html('');
                $('#header-attribution').html('');
                $('body').attr('class', '').addClass('indexView');
            }

        });

    });
    return App.IndexApp.View;
});
