import app from '../../app';
import Marionette from 'backbone.marionette';

export class AboutRouter extends Marionette.AppRouter{
    constructor(options) {
        super(options);
        this._getController().triggerMethod('start');
    }
    get appRoutes() {
        return {
            'about' : 'about'
        }
    }
}
