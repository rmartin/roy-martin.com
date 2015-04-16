import app from '../../app';
import Marionette from 'backbone.marionette';

export class IndexRouter extends Marionette.AppRouter {
    constructor(options) {
        super(options);
        // Marionette.AppRouter.prototype.constructor.call(this, options);
        this._getController().triggerMethod('start');
    }
    appRoutes() {
        return{
            '': 'index'
        }
    }
}
