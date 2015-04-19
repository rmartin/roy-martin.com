import {app} from './app.js';
import Backbone from 'backbone';
import {IndexModule} from './modules/index/module.js';
import {AboutModule} from './modules/about/module.js';

new IndexModule();
new AboutModule();
app.start();
