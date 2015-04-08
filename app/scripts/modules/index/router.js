import {app} from '../../app';
import Marionette from 'backbone.marionette';

export var IndexRouter = Marionette.AppRouter.extend({
    constructor: function(options) {
        Marionette.AppRouter.prototype.constructor.call(this, options);
        this._getController().triggerMethod('start');
    },
    appRoutes: {
        '' : 'index'
    }
});
