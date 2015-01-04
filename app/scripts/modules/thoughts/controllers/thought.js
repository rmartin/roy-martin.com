define(['app', 'modules/thoughts/collections/medium', 'modules/thoughts/views/thought', 'modules/thoughts/views/medium', 'modules/thoughts/views/twitter'], function(App, MediumCollection, ThoughtView, MediumView, TwitterView) {
    App.module('ThoughtApp', function(ThoughtApp, App, Backbone, Marionette, $, _) {

        ThoughtApp.Controller = Marionette.Controller.extend({
            thought: function() {

                //render parent view
                var thoughtView = new ThoughtView();
                App.main.show(thoughtView);

                //render medium data into the thought view
                var mediumCollection = new MediumCollection();
                var mediumView = new MediumView({
                    collection: mediumCollection
                });
                mediumCollection.fetch();
                thoughtView.getRegion('medium').show(mediumView);

                //render twitter content
                var twitterView = new TwitterView({});
                thoughtView.getRegion('twitter').show(twitterView);
            }
        });
    });

    return App.ThoughtApp.Controller;
});
