define(['app', 'templates'], function(App, JST) {
    App.module('ExperimentApp.Codepen', function(Codepen, App, Backbone, Marionette, $, _) {

        Codepen.ItemView = Backbone.Marionette.ItemView.extend({
            tagName: 'li',
            template: JST['app/scripts/templates/codepen.hbs']
        });

        Codepen.CollectionView = Marionette.CollectionView.extend({
            tagName: 'ul',
            className: 'small-block-grid-2 medium-block-grid-3 large-block-grid-4',
            childView : Codepen.ItemView
        });

    });
    return App.ExperimentApp.Codepen.CollectionView;
});
