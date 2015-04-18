import {app} from './app.js';
import Backbone from 'backbone';
import {IndexModule} from './modules/index/module.js';
import {AboutModule} from './modules/about/module.js';

app.module('index', IndexModule);
app.module('about', AboutModule);
app.start();
Backbone.history.start();






    // $(document).foundation();
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
