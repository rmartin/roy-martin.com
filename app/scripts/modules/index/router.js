import {app} from '../../app';
import Marionette from 'backbone.marionette';

console.log(Marionette);
export var IndexRouter = Marionette.AppRouter.extend({
    appRoutes: {
        '' : 'index'
    }
});
