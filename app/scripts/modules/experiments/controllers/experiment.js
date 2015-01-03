define(['app', 'modules/experiments/collections/codepen', 'modules/experiments/collections/github', 'modules/experiments/views/experiment', 'modules/experiments/views/codepen', 'modules/experiments/views/github'], function(App, CodepenCollection, GithubCollection, ExperimentView, CodepenView, GithubView) {
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

                //render github data into the experiment view
                var githubCollection = new GithubCollection();
                var githubView = new GithubView({
                    collection: githubCollection
                });
                githubCollection.fetch();
                experimentView.getRegion('github').show(githubView);
            }
        });
    });

    return App.ExperimentApp.Controller;
});
