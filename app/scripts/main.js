import app from './app.js';
import Backbone from 'backbone';
import IndexModule from './modules/index/IndexModule';
import AboutModule from './modules/about/AboutModule';

new IndexModule();
new AboutModule();
app.start();
