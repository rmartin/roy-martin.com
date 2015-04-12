import {app} from './app.js';
import Backbone from 'backbone';
import {IndexModule} from './modules/index/module.js';

app.module('index', IndexModule);
app.start();
Backbone.history.start();


app.on('start', function() {
    if (Backbone.history) {
        Backbone.history.start();
    }
});
app.startSubApp = function(appName, args) {
    var currentApp = App.module(appName);
    if (App.currentApp === currentApp) {
        return;
    }
    if (App.currentApp) {
        App.currentApp.stop();
    }
    App.currentApp = currentApp;
    currentApp.start(args);

};



    // $(document).foundation();
    //
    // var indexController = new IndexController();
    // var indexRoutes = new IndexRoutes({
    //     controller: indexController
    // });

    // do no evil
    // var thoughtController = new ThoughtController();
    // var thoughtRoutes = new ThoughtRoutes({
    //     controller: thoughtController
    // });
    //
    // var experimentController = new ExperimentController();
    // var experimentRoutes = new ExperimentRoutes({
    //     controller: experimentController
    // });
    //
    // var aboutController = new AboutController();
    // var aboutRouter = new AboutRouter({
    //     controller: aboutController
    // });
    //
