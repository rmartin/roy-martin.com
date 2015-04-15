import Marionette from 'backbone.marionette';
import {app} from '../../app';
import {APICollection} from './collections/api';
import {IndexView} from './views/index';
import * as IndexVisualizer from './views/visualizer';

export class IndexController extends Marionette.Object{
    onStart() {

    }
    index() {
        var apiCollection = new APICollection();

        var indexView = new IndexView({collection: apiCollection,visualizer: IndexVisualizer});
        app.main.show(indexView);
    }
}
