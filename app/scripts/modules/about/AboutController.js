import Marionette from 'backbone.marionette';
import app from '../../app';
import AboutView from './views/AboutView.js';

export default class AboutController {
    about() {
        //render main template
        var aboutView = new AboutView();
        app.main.show(aboutView);
    }
}
