define(['app', 'templates'], function(App, JST) {
    App.module('ThoughtApp.Medium', function(Medium, App, Backbone, Marionette, $, _) {

        Medium.ItemView = Marionette.ItemView.extend({
            tagName: 'li',
            template: JST['app/scripts/modules/thoughts/templates/medium.hbs']
        });

        Medium.EmptyView = Marionette.ItemView.extend({
            tagName: 'li',
            className: 'no-results-found',
            template: '<p>No blog posts found.</p>'
        });


        Medium.CollectionView = Marionette.CollectionView.extend({
            tagName: 'ul',
            className: 'small-block-grid-2 medium-block-grid-3 large-block-grid-4',
            childView : Medium.ItemView,
            emptyView: Medium.EmptyView
        });

    });
    return App.ThoughtApp.Medium.CollectionView;
});
