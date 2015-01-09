define(['app', 'templates'], function(App, JST) {
    App.module('AboutApp', function(AboutApp, App, Backbone, Marionette, $, _) {

        AboutApp.LayoutView = Backbone.Marionette.LayoutView.extend({
            tagName: 'ul',
            className: 'small-block-grid-2 medium-block-grid-3 large-block-grid-4',
            template: JST['app/scripts/modules/about/templates/about.hbs'],
            regions: {
                strava: "#strava"
            },
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('About');
                $('#header-sub-title').html('I am a developer, technical leader, entrepreneur and student of life.');
                $('#header-attribution').html('<a href="https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg" target="_blank" rel="nofollow">Cirrus Clounds</a> by <a href="//commons.wikimedia.org/wiki/User:Nissim_14" title="User:Nissim 14" target="_blank" rel="nofollow">Nissim Angdembay</a>')
                $('body').attr('class', '').addClass('experimentView');
            },
            onRender: function() {
                ga('send', 'pageview');
            }
        });

    });
    return App.AboutApp.LayoutView;
});
