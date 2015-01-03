define(['app', 'collections/codepen', 'views/experiment', 'views/codepen'], function(App, CodepenCollection, ExperimentView, CodepenView) {
    App.module('ExperimentApp', function(ExperimentApp, App, Backbone, Marionette, $, _) {

        ExperimentApp.Controller = Marionette.Controller.extend({
            experiment: function() {

                //render main template
                var experimentView = new ExperimentView();
                App.main.show(experimentView);

                //render codepen data into the experiment view
                var codepenCollection = new CodepenCollection();
                var codepenView = new CodepenView({
                    collection: codepenCollection
                });
                codepenCollection.fetch();
                experimentView.getRegion('codepen').show(codepenView);
            }
        });
    });

    return App.ExperimentApp.Controller;
});
