import Marionette from 'backbone.marionette';
import {app} from '../../app';
import {IndexView} from './views/about';

export class AboutController extends Marionette.Object{
    onStart() {

    }
    about() {
        //render main template
        var aboutView = new AboutView();
        app.main.show(aboutView);
    }
}
