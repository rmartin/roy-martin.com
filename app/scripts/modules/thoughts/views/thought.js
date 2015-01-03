define(['app', 'templates'], function(App, JST) {
    App.module('ThoughtApp', function(ThoughtApp, App, Backbone, Marionette, $, _) {

        ThoughtApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/modules/thoughts/templates/thought.hbs'],
            onBeforeRender: function(){
                //add title and class
                $('#header-title').html('Thoughts');
                $('#header-sub-title').html('Thoughts on technology, development, leadership and entrepreneurship.');
                $('#header-attribution').html('<a href="https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg" target="_blank" rel="nofollow">Cirrus Clounds</a> by <a href="//commons.wikimedia.org/wiki/User:Nissim_14" title="User:Nissim 14" target="_blank" rel="nofollow">Nissim Angdembay</a>');
                $('body').attr('class', '').addClass('thoughtView');
            }

        });

    });
    return App.ThoughtApp.View;
});
