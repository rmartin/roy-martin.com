import Marionette from 'backbone.marionette';
import app from '../../app';
import APICollection from './collections/APICollection.js';
import IndexView from './views/IndexView.js';
import * as IndexVisualizer from './views/VisualizerView.js';

export default class IndexController{
    index() {
        var apiCollection = new APICollection();

        var indexView = new IndexView({collection: apiCollection,visualizer: IndexVisualizer});
        app.main.show(indexView);
    }
}
