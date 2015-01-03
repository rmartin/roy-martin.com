define(['app', 'modules/thoughts/views/thought'], function(App, ThoughtView) {
    App.module('ThoughtApp', function(ThoughtApp, App, Backbone, Marionette, $, _) {

        ThoughtApp.Controller = Marionette.Controller.extend({
            thought: function() {
                var thoughtView = new ThoughtView();
                App.main.show(thoughtView);
            }
        });
    });

    return App.ThoughtApp.Controller;
});
