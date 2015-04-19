import Marionette from 'backbone.marionette';
import {app} from '../../app';
import {AboutView} from './views/about';

export class AboutController extends Marionette.Object{
    about() {
        //render main template
        var aboutView = new AboutView();
        app.main.show(aboutView);
    }
}
