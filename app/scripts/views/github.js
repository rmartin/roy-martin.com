define(['app', 'templates'], function(App, JST) {
    App.module('ExperimentApp.Github', function(Github, App, Backbone, Marionette, $, _) {

        Github.ItemView = Backbone.Marionette.ItemView.extend({
            tagName: 'li',
            template: JST['app/scripts/templates/github.hbs']
        });

        Github.CollectionView = Marionette.CollectionView.extend({
            tagName: 'ul',
            className: 'small-block-grid-2 medium-block-grid-3 large-block-grid-4',
            childView : Github.ItemView
        });

    });
    return App.ExperimentApp.Github.CollectionView;
});
